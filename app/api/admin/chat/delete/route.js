import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdmin } from "@/lib/auth/adminGuard";
import { logAdminActivity } from "@/lib/auth/logActivity";

/** DELETE /api/admin/chat/delete — Deletes a chat session and all its messages. Admin only. */
export async function DELETE(req) {
  const auth = await verifyAdmin();
  if (!auth.ok) return auth.response;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Supabase env not configured" }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { sessionId } = body ?? {};
  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "sessionId is required" }, { status: 400 });
  }

  // Basic UUID format check
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(sessionId)) {
    return NextResponse.json({ error: "Invalid sessionId format" }, { status: 400 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  // Delete messages first (foreign key dependency)
  const { error: msgError } = await supabase
    .from("ai_chat_messages")
    .delete()
    .eq("session_id", sessionId);

  if (msgError) {
    console.error("[api/admin/chat/delete] Message delete error:", msgError.message);
    return NextResponse.json({ error: "Failed to delete messages" }, { status: 500 });
  }

  // Delete session
  const { error: sessionError } = await supabase
    .from("ai_chat_sessions")
    .delete()
    .eq("id", sessionId);

  if (sessionError) {
    console.error("[api/admin/chat/delete] Session delete error:", sessionError.message);
    return NextResponse.json({ error: "Failed to delete session" }, { status: 500 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  await logAdminActivity({
    action: "chat_session_deleted",
    adminEmail: auth.user?.email,
    details: { sessionId },
    ip,
  });

  return NextResponse.json({ ok: true });
}
