// app/api/visit/daily/route.js

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const SUPABASE_URL =
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { ok: false, error: "Supabase env not configured" },
        { status: 500 }
      );
    }

    // ✅ Create client INSIDE handler
    const supabase = createClient(
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY
    );

    const url = new URL(req.url);
    const days = Number(url.searchParams.get("days") || "14");

    const sinceISO = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000
    ).toISOString();

    const { data, error } = await supabase
      .from("visits")
      .select("created_at")
      .gte("created_at", sinceISO);

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    const counts = {};

    (data || []).forEach((row) => {
      if (!row.created_at) return;

      const utcDate = new Date(row.created_at);

      const istDate = new Date(
        utcDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      const yyyy = istDate.getFullYear();
      const mm = String(istDate.getMonth() + 1).padStart(2, "0");
      const dd = String(istDate.getDate()).padStart(2, "0");

      const key = `${yyyy}-${mm}-${dd}`;
      counts[key] = (counts[key] || 0) + 1;
    });

    const result = [];

    for (let i = days - 1; i >= 0; i--) {
      const istNow = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );

      istNow.setDate(istNow.getDate() - i);

      const yyyy = istNow.getFullYear();
      const mm = String(istNow.getMonth() + 1).padStart(2, "0");
      const dd = String(istNow.getDate()).padStart(2, "0");

      const key = `${yyyy}-${mm}-${dd}`;
      result.push({ date: key, count: counts[key] || 0 });
    }

    return NextResponse.json({ ok: true, data: result });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
