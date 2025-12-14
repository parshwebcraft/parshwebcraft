// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming lead:", body);

    const { name, email, phone, plan, requirement, message } = body ?? {};

    // 🔐 Validation (must match frontend)
    if (!name || !requirement || (!email && !phone)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------- SUPABASE LEADS INSERT ---------------- */
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.SUPABASE_SERVICE_ROLE_KEY; // server-only

      if (url && key) {
        const supabase = createClient(url, key);

        const { error: dbError } = await supabase.from("leads").insert([
          {
            name: String(name),
            email: email ? String(email) : null,
            phone: phone ? String(phone) : null,
            service: plan ? String(plan) : null, // mapped cleanly
            message: message ? String(message) : null,
            requirement: String(requirement),
            source: "contact-page",
            status: "new",
          },
        ]);

        if (dbError) {
          console.error("Supabase insert error:", dbError);
        } else {
          console.log("✅ Lead saved to Supabase");
        }
      } else {
        console.warn("⚠️ Supabase env vars missing — skipping DB insert");
      }
    } catch (dbErr) {
      console.error("❌ Supabase insert threw:", dbErr);
      // continue to email
    }

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

        const mailRes = await transporter.sendMail({
          from: process.env.EMAIL_FROM_ADDRESS || process.env.SMTP_USER,
          to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
          subject: `New website lead: ${name}`,
          text: `
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
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email || "—"}</p>
<p><b>Phone:</b> ${phone || "—"}</p>
<p><b>Plan:</b> ${plan || "Not selected"}</p>
<p><b>Requirement:</b><br/>${requirement.replace(/\n/g, "<br/>")}</p>
<p><b>Message:</b><br/>${(message || "—").replace(/\n/g, "<br/>")}</p>
          `,
        });

        console.log(
          "📧 Notification email sent:",
          mailRes.messageId || "(no messageId)"
        );
      } else {
        console.log("SMTP not configured — skipping email");
      }
    } catch (mailErr) {
      console.error("❌ Email send error:", mailErr);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
