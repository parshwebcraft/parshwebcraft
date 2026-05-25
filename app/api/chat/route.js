import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { chatbotKnowledge, getFallbackChatReply } from "@/lib/chatbotKnowledge";

export const dynamic = "force-dynamic";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  return createClient(url, key, { auth: { persistSession: false } });
}

function extractContact(text) {
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || null;
  const phone = text.match(/(?:\+91[\s-]?)?[6-9]\d{9}/)?.[0] || null;

  return { email, phone };
}

async function saveChat({ sessionId, message, reply, meta }) {
  const supabase = getSupabase();
  if (!supabase) return;

  const contact = extractContact(message);
  const now = new Date().toISOString();

  try {
    await supabase.from("ai_chat_sessions").upsert(
      {
        id: sessionId,
        visitor_id: meta?.visitorId || null,
        page_path: meta?.pagePath || null,
        referrer: meta?.referrer || null,
        user_agent: meta?.userAgent || null,
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
  } catch (error) {
    console.error("AI chat history save failed:", error);
  }
}

async function generateAIReply({ message, history }) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    return getFallbackChatReply(message, history);
  }

  const recentHistory = Array.isArray(history)
    ? history.slice(-8).map((item) => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: String(item.content || "").slice(0, 1200),
      }))
    : [];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
          {
            role: "system",
            content: `You are ParshWebCraft's website AI assistant. Answer in a concise, helpful Hinglish/English style matching the user's language. Use only the business knowledge below. Help users decide services, portfolio fit, pricing, and basic negotiation. Do not hallucinate exact custom quotes. Collect contact details when the user seems ready to start.\n\n${chatbotKnowledge}`,
          },
          ...recentHistory,
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("OpenAI chat failed:", response.status, errorText);
      return getFallbackChatReply(message, history);
    }

    const data = await response.json();
    return data?.choices?.[0]?.message?.content || getFallbackChatReply(message, history);
  } catch (error) {
    console.error("AI reply failed:", error);
    return getFallbackChatReply(message, history);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const sessionId = String(body?.sessionId || "").trim();
    const message = String(body?.message || "").trim();

    if (!sessionId || !message) {
      return NextResponse.json(
        { error: "Missing sessionId or message" },
        { status: 400 }
      );
    }

    if (message.length > 1500) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 }
      );
    }

    const reply = await generateAIReply({
      message,
      history: body?.history || [],
    });

    await saveChat({
      sessionId,
      message,
      reply,
      meta: body?.meta || {},
    });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Unable to answer right now" },
      { status: 500 }
    );
  }
}
