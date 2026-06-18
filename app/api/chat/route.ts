import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { retrieveChunks, getFallbackChatReply } from "@/lib/chatbotKnowledge";

export const dynamic = "force-dynamic";

// ── Rate limiting: max 20 messages per session ───────────────
const SESSION_MSG_COUNTS = new Map<string, number>();

function checkRateLimit(sessionId: string): boolean {
  const count = SESSION_MSG_COUNTS.get(sessionId) ?? 0;
  if (count >= 20) return false;
  SESSION_MSG_COUNTS.set(sessionId, count + 1);
  // Auto-clean after 2 hours to prevent memory growth
  if (count === 0) {
    setTimeout(() => SESSION_MSG_COUNTS.delete(sessionId), 2 * 60 * 60 * 1000);
  }
  return true;
}

// ── Supabase helpers ─────────────────────────────────────────
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

function extractContact(text: string) {
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? null;
  const phone = text.match(/(?:\+91[\s-]?)?[6-9]\d{9}/)?.[0] ?? null;
  return { email, phone };
}

async function saveChat({
  sessionId,
  message,
  reply,
  meta,
}: {
  sessionId: string;
  message: string;
  reply: string;
  meta: Record<string, string | null>;
}) {
  const supabase = getSupabase();
  if (!supabase) return;

  const contact = extractContact(message);
  const now = new Date().toISOString();

  try {
    await supabase.from("ai_chat_sessions").upsert(
      {
        id: sessionId,
        visitor_id: meta?.visitorId ?? null,
        page_path: meta?.pagePath ?? null,
        referrer: meta?.referrer ?? null,
        user_agent: meta?.userAgent ?? null,
        email: contact.email,
        phone: contact.phone,
        updated_at: now,
      },
      { onConflict: "id" }
    );

    await supabase.from("ai_chat_messages").insert([
      { session_id: sessionId, role: "user", content: message },
      { session_id: sessionId, role: "assistant", content: reply },
    ]);
  } catch (err) {
    console.error("[chat] History save failed:", (err as Error)?.message);
  }
}

// ── SYSTEM PROMPT ────────────────────────────────────────────
function buildSystemPrompt(context: string): string {
  return `You are the AI sales assistant for ParshWebCraft — a premium web design, development, SaaS, and digital marketing agency in Udaipur, India.

YOUR PERSONALITY:
- Friendly, confident, and helpful — like a knowledgeable sales consultant
- Reply in the same language the user uses (Hindi, Hinglish, or English)
- Use short paragraphs and bullet points for clarity
- Never sound robotic or give generic answers

YOUR GOALS (in order):
1. Understand what business the user has
2. Recommend the best service/plan for their specific needs
3. Answer pricing, portfolio, and service questions from the knowledge below
4. Collect lead info (name + phone/WhatsApp) when user shows serious interest
5. Guide toward booking a free consultation or WhatsApp contact

STRICT RULES — NEVER BREAK:
- NEVER say Instagram reels, social media posts, photoshoots, or ad spend are included in any website plan
- NEVER promise a locked final price without saying "team will verify scope"
- NEVER hallucinate services, prices, or features not listed below
- NEVER recommend competitor agencies
- If asked about something you don't know, say "Main is baare me team se confirm karwa deta hoon — aap WhatsApp karein: +91-9521347419"

KNOWLEDGE BASE (use only this for facts):
${context}`;
}

// ── AI GENERATION: Gemini 1.5 Flash (Primary) ────────────────
async function callGemini(
  message: string,
  history: { role: string; content: string }[],
  context: string
): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  // Build Gemini contents array (alternating user/model turns)
  type GeminiPart = { text: string };
  type GeminiContent = { role: "user" | "model"; parts: GeminiPart[] };

  const systemPrompt = buildSystemPrompt(context);

  // Gemini doesn't have a system role — prepend it to the first user message
  const contents: GeminiContent[] = [];

  const recentHistory = history.slice(-8);

  if (recentHistory.length === 0) {
    // No history — system + user combined
    contents.push({
      role: "user",
      parts: [{ text: `${systemPrompt}\n\nUser: ${message}` }],
    });
  } else {
    // First turn: system prompt + first user message
    const [firstMsg, ...rest] = recentHistory;
    contents.push({
      role: "user",
      parts: [{ text: `${systemPrompt}\n\nUser: ${String(firstMsg.content).slice(0, 800)}` }],
    });

    // Alternate model/user for the rest of history
    let expectModel = true;
    for (const msg of rest) {
      const role = expectModel ? "model" : "user";
      contents.push({
        role,
        parts: [{ text: String(msg.content).slice(0, 800) }],
      });
      expectModel = !expectModel;
    }

    // If last content is model, add current user message
    if (contents[contents.length - 1].role === "model") {
      contents.push({ role: "user", parts: [{ text: message }] });
    } else {
      // Merge with last user turn
      contents[contents.length - 1].parts[0].text += `\n\nUser: ${message}`;
    }
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 600,
            topP: 0.9,
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
          ],
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[chat/gemini] API error:", res.status, errText.slice(0, 200));
      return null;
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text ? String(text).trim() : null;
  } catch (err) {
    console.error("[chat/gemini] Fetch error:", (err as Error)?.message);
    return null;
  }
}

// ── AI GENERATION: OpenAI GPT-4o-mini (Secondary fallback) ───
async function callOpenAI(
  message: string,
  history: { role: string; content: string }[],
  context: string
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  const recentHistory = history.slice(-8).map((item) => ({
    role: item.role === "assistant" ? "assistant" : "user",
    content: String(item.content ?? "").slice(0, 1000),
  }));

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.35,
        max_tokens: 550,
        messages: [
          { role: "system", content: buildSystemPrompt(context) },
          ...recentHistory,
          { role: "user", content: message },
        ],
      }),
    });

    if (!res.ok) {
      console.error("[chat/openai] API error:", res.status);
      return null;
    }

    const data = await res.json();
    return data?.choices?.[0]?.message?.content ?? null;
  } catch (err) {
    console.error("[chat/openai] Fetch error:", (err as Error)?.message);
    return null;
  }
}

// ── MAIN HANDLER ─────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sessionId = String(body?.sessionId ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const history: { role: string; content: string }[] = Array.isArray(body?.history) ? body.history : [];

    if (!sessionId || !message) {
      return NextResponse.json({ error: "Missing sessionId or message" }, { status: 400 });
    }

    if (message.length > 1500) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    // Per-session rate limit
    if (!checkRateLimit(sessionId)) {
      return NextResponse.json(
        { reply: "Aapne bahut saare messages bhej diye hain. Please kuch der baad try karein ya seedha WhatsApp karein: +91-9521347419 😊" },
        { status: 200 }
      );
    }

    // ── RAG: Retrieve relevant knowledge chunks ──
    const context = retrieveChunks(message, history);

    // ── Try AI providers in priority order ──
    let reply: string | null = null;

    // 1. Gemini 1.5 Flash (free, primary)
    reply = await callGemini(message, history, context);

    // 2. OpenAI GPT-4o-mini (paid, secondary)
    if (!reply) {
      reply = await callOpenAI(message, history, context);
    }

    // 3. Keyword-based fallback (always available)
    if (!reply) {
      reply = getFallbackChatReply(message, history);
    }

    // Save to DB (non-blocking)
    saveChat({
      sessionId,
      message,
      reply,
      meta: body?.meta ?? {},
    }).catch(() => {});

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[chat] Unhandled error:", (err as Error)?.message);
    return NextResponse.json(
      { reply: "Kuch technical issue aa gaya. Please dobara try karein ya WhatsApp karein: +91-9521347419" },
      { status: 200 } // Return 200 so frontend shows the message gracefully
    );
  }
}
