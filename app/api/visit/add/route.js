// app/api/visit/add/route.js  (Next 13 route, server-side)
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      console.error("Supabase env not set");
      return NextResponse.json({ error: "Supabase env not set" }, { status: 500 });
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false },
      global: { headers: { "x-my-app": "parshwebcraft" } },
    });

    // optional: capture some fields (you can change)
    const now = new Date().toISOString();
    const payload = { created_at: now };

    const { error } = await supabase.from("visits").insert([payload]);

    if (error) {
      console.error("Visit add error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Visit add final error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
