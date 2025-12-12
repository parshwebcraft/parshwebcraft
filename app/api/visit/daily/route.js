// app/api/visit/daily/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn("Supabase env not set for /api/visit/daily");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

/**
 * GET -> returns daily visit counts for the last N days (default 14)
 * Response shape: { ok: true, data: [{ date: '2025-12-12', count: 23 }, ...] }
 */
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const days = Number(url.searchParams.get("days") || "14");

    // Aggregate by date using created_at (adjust column if you named it differently)
    const sql = `
      SELECT
        to_char(created_at::timestamptz AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS date,
        count(*) AS count
      FROM public.visits
      WHERE created_at >= now() - interval '${days} days'
      GROUP BY date
      ORDER BY date ASC;
    `;

    // Use Supabase rpc/raw SQL via PostgREST: use .rpc? Simpler: use from() with select and group?
    // We can use the 'rpc' endpoint only if you created a function. Simpler: use supabase.rpc with SQL is not allowed.
    // We'll use Postgres via Supabase Query API: use supabase.from('visits').select('created_at') and let JS aggregate
    const { data, error } = await supabase
      .from("visits")
      .select("created_at", { count: "exact" })
      .gte("created_at", new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString());

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    // Aggregate in JS by day (safe and works regardless of DB functions)
    const counts = {};
    (data || []).forEach((r) => {
      const d = new Date(r.created_at);
      if (isNaN(d)) return;
      // get YYYY-MM-DD in UTC to match SQL approach
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      const key = `${yyyy}-${mm}-${dd}`;
      counts[key] = (counts[key] || 0) + 1;
    });

    // Build array of last N days so missing days show 0
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setUTCDate(d.getUTCDate() - i);
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      const key = `${yyyy}-${mm}-${dd}`;
      result.push({ date: key, count: counts[key] || 0 });
    }

    return NextResponse.json({ ok: true, data: result });
  } catch (err) {
    console.error("Visit daily error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
