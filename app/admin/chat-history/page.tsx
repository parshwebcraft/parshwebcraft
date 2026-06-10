import { createClient } from "@supabase/supabase-js";
import { formatISTWithAgo } from "@/lib/formatDate";
import DeleteSessionButton from "./DeleteSessionButton";

type ChatSession = {
  id: string;
  page_path: string | null;
  email: string | null;
  phone: string | null;
  updated_at: string;
  created_at: string;
};

type ChatMessage = {
  id: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

export const metadata = {
  title: "AI Chat History | ParshWebCraft Admin",
};

/* ── Personal data masking ─────────────────────────────────── */
function maskEmail(email: string | null): string {
  if (!email) return "—";
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  const masked = local.length > 2
    ? `${local[0]}${"*".repeat(local.length - 2)}${local.at(-1)}`
    : "**";
  return `${masked}@${domain}`;
}

function maskPhone(phone: string | null): string {
  if (!phone) return "—";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 6) return "****";
  return `${digits.slice(0, 2)}${"X".repeat(digits.length - 4)}${digits.slice(-2)}`;
}

function maskContent(text: string): string {
  // Mask phone numbers in message content
  let masked = text.replace(
    /(?:\+91[\s-]?)?[6-9]\d{9}/g,
    (m) => m.slice(0, 4) + "XXXXXX"
  );
  // Mask email in message content
  masked = masked.replace(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
    (m) => {
      const [l, d] = m.split("@");
      return `${l[0]}***@${d}`;
    }
  );
  return masked;
}

export default async function AdminChatHistoryPage() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return <div className="p-6 text-amber-200">Supabase env not configured.</div>;
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { data: sessions, error: sessionError } = await supabase
    .from("ai_chat_sessions")
    .select("id, page_path, email, phone, updated_at, created_at")
    .order("updated_at", { ascending: false })
    .limit(30);

  if (sessionError) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-3">AI Chat History</h1>
        <div className="rounded-lg border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
          Chat tables not ready. Run{" "}
          <code>supabase/ai-chatbot-schema.sql</code> in Supabase SQL editor.
        </div>
      </div>
    );
  }

  const sessionIds = (sessions ?? []).map((s: ChatSession) => s.id);
  const { data: messages } = sessionIds.length
    ? await supabase
        .from("ai_chat_messages")
        .select("id, session_id, role, content, created_at")
        .in("session_id", sessionIds)
        .order("created_at", { ascending: true })
    : { data: [] };

  const messagesBySession = (messages ?? []).reduce(
    (acc: Record<string, ChatMessage[]>, msg: ChatMessage) => {
      acc[msg.session_id] = acc[msg.session_id] || [];
      acc[msg.session_id].push(msg);
      return acc;
    },
    {}
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">AI Chat History</h1>
          <p className="text-sm text-slate-400 mt-1">
            Personal data is masked. Delete sessions to permanently remove data.
          </p>
        </div>
        <span className="text-xs text-slate-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          🔒 PII masked
        </span>
      </div>

      <div className="space-y-5">
        {(sessions ?? []).length === 0 && (
          <div className="rounded-lg border border-white/10 p-6 text-slate-400">
            No AI chats yet.
          </div>
        )}

        {(sessions ?? []).map((session: ChatSession) => (
          <section
            key={session.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h2 className="font-semibold text-white text-sm">
                  Session{" "}
                  <span className="font-mono text-xs text-slate-400">
                    {session.id.slice(0, 8)}…
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Last active: {formatISTWithAgo(session.updated_at)}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-xs text-slate-400 md:text-right">
                  <p>{session.page_path || "Unknown page"}</p>
                  <p className="mt-0.5">
                    📞 {maskPhone(session.phone)} · ✉️ {maskEmail(session.email)}
                  </p>
                </div>

                {/* Delete button */}
                <DeleteSessionButton sessionId={session.id} />
              </div>
            </div>

            <div className="space-y-2.5">
              {(messagesBySession[session.id] ?? []).map((msg) => (
                <div
                  key={msg.id}
                  className={`rounded-lg p-3 text-sm max-w-3xl ${
                    msg.role === "user"
                      ? "ml-auto bg-[#f3d07a]/90 text-black"
                      : "bg-black/30 text-slate-200"
                  }`}
                >
                  <div className="mb-1 text-xs opacity-60">
                    {msg.role} · {formatISTWithAgo(msg.created_at)}
                  </div>
                  <p className="whitespace-pre-wrap">{maskContent(msg.content)}</p>
                </div>
              ))}
              {!(messagesBySession[session.id]?.length) && (
                <p className="text-xs text-slate-500 italic">No messages in this session.</p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

