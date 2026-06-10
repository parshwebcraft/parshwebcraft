import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdmin } from "@/lib/auth/adminGuard";
import { logAdminActivity } from "@/lib/auth/logActivity";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

/** PATCH /api/leads/status — Update lead status. Admin only. */
export async function PATCH(req) {
  const auth = await verifyAdmin();
  if (!auth.ok) return auth.response;

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase env not configured" }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { id, status } = body ?? {};

  if (!id || !status) {
    return NextResponse.json({ error: "id and status are required" }, { status: 400 });
  }

  const VALID_STATUSES = ["new", "contacted", "closed", "archived"];
  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: `Invalid status. Allowed: ${VALID_STATUSES.join(", ")}` },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("[api/leads/status] Update error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Log the status change
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  await logAdminActivity({
    action: "lead_status_changed",
    adminEmail: auth.user?.email,
    details: { leadId: id, newStatus: status },
    ip,
  });

  return NextResponse.json({ ok: true });
}
