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

/** GET /api/settings — Read site settings. Admin only. */
export async function GET() {
  const auth = await verifyAdmin();
  if (!auth.ok) return auth.response;

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase env not configured" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/** PATCH /api/settings — Update site settings. Admin only. Logs changes. */
export async function PATCH(req) {
  const auth = await verifyAdmin();
  if (!auth.ok) return auth.response;

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase env not configured" }, { status: 500 });
  }

  let updates;
  try {
    updates = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Whitelist allowed fields — prevent arbitrary column injection
  const ALLOWED_FIELDS = [
    "admin_name",
    "admin_email",
    "admin_phone",
    "notify_new_lead",
    "notify_newsletter",
    "maintenance_mode",
  ];
  const safeUpdates = Object.fromEntries(
    Object.entries(updates).filter(([key]) => ALLOWED_FIELDS.includes(key))
  );

  if (Object.keys(safeUpdates).length === 0) {
    return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("settings")
    .update(safeUpdates)
    .neq("id", "00000000-0000-0000-0000-000000000000")
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Log settings change with which fields were changed
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  await logAdminActivity({
    action: "settings_changed",
    adminEmail: auth.user?.email,
    details: { changedFields: Object.keys(safeUpdates) },
    ip,
  });

  return NextResponse.json(data);
}
