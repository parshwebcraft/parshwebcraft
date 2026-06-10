import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

/* ── reCAPTCHA v3 verification ─────────────────────────────────
   Add these to your .env / Vercel environment variables:
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "your_site_key_here"
   RECAPTCHA_SECRET_KEY           = "your_secret_key_here"
   Get keys at: https://www.google.com/recaptcha/admin
   ──────────────────────────────────────────────────────────── */
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true; // Skip verification if not configured (dev mode)
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    // score >= 0.5 is reasonable for contact forms (0 = bot, 1 = human)
    return data.success === true && (data.score ?? 1) >= 0.5;
  } catch {
    return true; // Fail open if reCAPTCHA API is down
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      plan,
      requirement,
      message,
      recaptchaToken,
      // Honeypot — bots fill this, humans leave it empty
      website: honeypot,
    } = body ?? {};

    /* ── Honeypot check ── */
    if (honeypot) {
      // Silent fake-success — don't reveal detection to bots
      return NextResponse.json({ ok: true });
    }

    /* ── reCAPTCHA verification ── */
    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    /* ── Required field validation ── */
    const cleanName = String(name ?? "").trim().slice(0, 120);
    const cleanEmail = String(email ?? "").trim().toLowerCase().slice(0, 254);
    const cleanPhone = String(phone ?? "").trim().slice(0, 15);
    const cleanRequirement = String(requirement ?? "").trim().slice(0, 2000);
    const cleanMessage = String(message ?? "").trim().slice(0, 2000);
    const cleanPlan = String(plan ?? "").trim().slice(0, 120);

    if (!cleanName || !cleanRequirement || (!cleanEmail && !cleanPhone)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    /* ── Email format validation ── */
    if (cleanEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
      }
      // Block obviously disposable / fake patterns
      const blockedDomains = ["mailinator.com", "guerrillamail.com", "throwam.com", "yopmail.com"];
      const emailDomain = cleanEmail.split("@")[1] ?? "";
      if (blockedDomains.includes(emailDomain)) {
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
      }
    }

    /* ── Phone format validation ── */
    if (cleanPhone) {
      const phoneDigits = cleanPhone.replace(/\D/g, "");
      if (phoneDigits.length !== 10 && phoneDigits.length !== 12) {
        return NextResponse.json({ error: "Enter a valid 10-digit phone number" }, { status: 400 });
      }
    }

    /* ── Supabase setup ── */
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      // Fail gracefully — don't reveal config issues
      return NextResponse.json({ ok: true });
    }
    const supabase = createClient(url, key, { auth: { persistSession: false } });

    /* ── IP rate limiting — max 3 submissions per hour ── */
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { count } = await supabase
      .from("contact_rate_limit")
      .select("*", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", oneHourAgo);

    if ((count ?? 0) >= 3) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in an hour or WhatsApp us directly." },
        { status: 429 }
      );
    }

    await supabase.from("contact_rate_limit").insert([{ ip }]);

    /* ── Save lead to Supabase ── */
    const { error: dbError } = await supabase.from("leads").insert([
      {
        name: cleanName,
        email: cleanEmail || null,
        phone: cleanPhone || null,
        message: cleanMessage || null,
        plan: cleanPlan || null,
        requirement: cleanRequirement,
        source: "contact-page",
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("[api/contact] DB insert error:", dbError.message);
      return NextResponse.json(
        { error: "Failed to save your enquiry. Please try again." },
        { status: 500 }
      );
    }

    /* ── Email notification via Resend ── */
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "ParshWebCraft <onboarding@resend.dev>",
        to: [process.env.NOTIFY_EMAIL || "parshwebcraft@gmail.com"],
        subject: `New website enquiry: ${cleanName}`,
        html: `
          <h2 style="color:#f3d07a">New Lead — ParshWebCraft</h2>
          <p><b>Name:</b> ${cleanName}</p>
          <p><b>Email:</b> ${cleanEmail || "—"}</p>
          <p><b>Phone:</b> ${cleanPhone || "—"}</p>
          <p><b>Plan:</b> ${cleanPlan || "Not selected"}</p>
          <p><b>Requirement:</b><br/>${cleanRequirement.replace(/\n/g, "<br/>")}</p>
          ${cleanMessage ? `<p><b>Message:</b><br/>${cleanMessage.replace(/\n/g, "<br/>")}</p>` : ""}
          <hr/>
          <p style="color:#888;font-size:12px">Submitted from parshwebcraft.in</p>
        `,
      });
    } catch (mailErr) {
      // Don't block the response if email fails
      console.error("[api/contact] Email error:", mailErr?.message ?? mailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] Unhandled error:", err?.message ?? err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
