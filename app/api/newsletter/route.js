import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/* ── reCAPTCHA v3 verification ────────────────────────────────
   Same env vars used as contact form:
   RECAPTCHA_SECRET_KEY = "your_secret_key_here"
   ─────────────────────────────────────────────────────────── */
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return data.success === true && (data.score ?? 1) >= 0.5;
  } catch {
    return true; // Fail open if reCAPTCHA API is unreachable
  }
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { email, recaptchaToken } = body ?? {};

    /* ── Email validation ── */
    const cleanEmail = String(email ?? "").trim().toLowerCase().slice(0, 254);
    if (!cleanEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    /* ── reCAPTCHA ── */
    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    /* ── IP rate limiting — max 3 per hour ── */
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    // Use newsletter_rate_limit table (see SQL migration for creation)
    const { count } = await supabase
      .from("newsletter_rate_limit")
      .select("*", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", oneHourAgo);

    if ((count ?? 0) >= 3) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await supabase.from("newsletter_rate_limit").insert([{ ip }]);

    /* ── Insert to newsletter table ── */
    const { error } = await supabase.from("newsletter").insert([{ email: cleanEmail }]);

    if (error) {
      // Unique constraint violation = already subscribed
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 409 }
        );
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
