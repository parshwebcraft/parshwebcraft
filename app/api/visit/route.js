// app/api/visit/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

export async function POST() {
  const { error } = await supabase.from("visits").insert({});
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}

export async function GET() {
  const { data, error } = await supabase
    .from("visits")
    .select("created_at")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const grouped = {};
  data.forEach((row) => {
    const day = new Date(row.created_at).toISOString().slice(0, 10);
    grouped[day] = (grouped[day] || 0) + 1;
  });

  const chartData = Object.keys(grouped)
    .sort()
    .map((date) => ({ date, count: grouped[date] }));

  return NextResponse.json({ data: chartData });
}
