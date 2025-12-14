import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming lead:", body);

    const { name, email, phone, plan, requirement, message } = body ?? {};

    // 🔐 BASIC REQUIRED VALIDATION
    if (!name || !requirement || (!email && !phone)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🛑 BASIC EMAIL SANITY CHECK (ANTI-SPAM)
    if (email) {
      const emailStr = String(email).toLowerCase();

      const looksFake =
        !emailStr.includes("@") ||
        emailStr.length < 6 ||
        /^[0-9]+$/.test(emailStr.split("@")[0]);

      if (looksFake) {
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      console.warn("⚠️ Supabase env vars missing");
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(url, key);

    // 🛡️ RATE LIMITING — 5 requests per IP per hour
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { count } = await supabase
      .from("contact_rate_limit")
      .select("*", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", oneHourAgo);

    if (count >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    // Log this request
    await supabase.from("contact_rate_limit").insert([{ ip }]);

    /* ---------------- SUPABASE LEADS INSERT ---------------- */
    const { error: dbError } = await supabase.from("leads").insert([
      {
        name: String(name),
        email: email ? String(email) : null,
        phone: phone ? String(phone) : null,
        message: message ? String(message) : null,
        plan: plan ? String(plan) : null, // ✅ correct
        requirement: String(requirement),
        source: "contact-page",
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("❌ Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save lead. Please try again." },
        { status: 500 }
      );
    }

    console.log("✅ Lead saved to Supabase");

    /* ---------------- EMAIL NOTIFICATION ---------------- */
    try {
      if (process.env.SMTP_HOST) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM_ADDRESS || process.env.SMTP_USER,
          to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
          subject: `New website lead: ${name}`,
          text: `
New Lead Received

Name: ${name}
Email: ${email || "—"}
Phone: ${phone || "—"}
Plan: ${plan || "Not selected"}

Requirement:
${requirement}

Message:
${message || "—"}
      `,
          html: `
<p><b>New Lead Received</b></p>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email || "—"}</p>
<p><b>Phone:</b> ${phone || "—"}</p>
<p><b>Plan:</b> ${plan || "Not selected"}</p>

<p><b>Requirement:</b><br/>
${requirement.replace(/\n/g, "<br/>")}
</p>

<p><b>Message:</b><br/>
${(message || "—").replace(/\n/g, "<br/>")}
</p>
      `,
        });

        console.log("📧 Full lead email sent");
      }
    } catch (mailErr) {
      console.error("❌ Email send error:", mailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Contact API error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
