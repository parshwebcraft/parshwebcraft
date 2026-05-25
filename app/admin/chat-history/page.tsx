import { createClient } from "@supabase/supabase-js";
import { formatISTWithAgo } from "@/lib/formatDate";

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

export default async function AdminChatHistoryPage() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return (
      <div className="p-6 text-amber-200">
        Supabase env not configured.
      </div>
    );
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  });

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
          Chat tables are not ready yet. Run{" "}
          <code>supabase/ai-chatbot-schema.sql</code> in Supabase SQL editor.
        </div>
      </div>
    );
  }

  const sessionIds = (sessions || []).map((session: ChatSession) => session.id);

  const { data: messages } = sessionIds.length
    ? await supabase
        .from("ai_chat_messages")
        .select("id, session_id, role, content, created_at")
        .in("session_id", sessionIds)
        .order("created_at", { ascending: true })
    : { data: [] };

  const messagesBySession = (messages || []).reduce(
    (acc: Record<string, ChatMessage[]>, message: ChatMessage) => {
      acc[message.session_id] = acc[message.session_id] || [];
      acc[message.session_id].push(message);
      return acc;
    },
    {}
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-2">AI Chat History</h1>
      <p className="text-sm text-slate-400 mb-6">
        See who asked what, when they asked, and whether they shared contact details.
      </p>

      <div className="space-y-5">
        {(sessions || []).length === 0 && (
          <div className="rounded-lg border border-white/10 p-6 text-slate-400">
            No AI chats yet.
          </div>
        )}

        {(sessions || []).map((session: ChatSession) => (
          <section
            key={session.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h2 className="font-semibold text-white">
                  Session {session.id.slice(0, 8)}
                </h2>
                <p className="text-xs text-slate-500">
                  Last active: {formatISTWithAgo(session.updated_at)}
                </p>
              </div>
              <div className="text-sm text-slate-300 md:text-right">
                <p>{session.page_path || "Unknown page"}</p>
                <p>
                  {session.phone || "No phone"} · {session.email || "No email"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {(messagesBySession[session.id] || []).map((message) => (
                <div
                  key={message.id}
                  className={`rounded-lg p-3 text-sm ${
                    message.role === "user"
                      ? "ml-auto max-w-3xl bg-[#f3d07a] text-black"
                      : "max-w-3xl bg-black/30 text-slate-200"
                  }`}
                >
                  <div className="mb-1 text-xs opacity-70">
                    {message.role} · {formatISTWithAgo(message.created_at)}
                  </div>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
