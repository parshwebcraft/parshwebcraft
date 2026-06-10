import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdmin } from "@/lib/auth/adminGuard";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

/** GET /api/leads — Returns all leads. Admin only. */
export async function GET() {
  const auth = await verifyAdmin();
  if (!auth.ok) return auth.response;

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase env not configured" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("leads")
    .select("id, name, email, phone, requirement, message, plan, status, source, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[api/leads] Fetch error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
