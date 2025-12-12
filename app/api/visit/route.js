// app/api/visit/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// createServerClient alternative: using createClient with service role key on the server
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

export async function GET() {
  try {
    // fetch created_at timestamps from visits
    const { data, error } = await supabase
      .from("visits")
      .select("created_at")
      .order("created_at", { ascending: true });

    if (error) throw error;

    // group by date (yyyy-mm-dd)
    const grouped = {};
    (data || []).forEach((row) => {
      // protect against null created_at
      const created = row.created_at;
      if (!created) return;
      const day = new Date(created).toISOString().slice(0, 10); // YYYY-MM-DD
      grouped[day] = (grouped[day] || 0) + 1;
    });

    // convert to sorted array for charting: [{ date: '2025-12-11', count: 5 }, ...]
    const chartData = Object.keys(grouped)
      .sort()
      .map((date) => ({ date, count: grouped[date] }));

    return NextResponse.json({ data: chartData });
  } catch (err) {
    console.error("Visit API error:", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
