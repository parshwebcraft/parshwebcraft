// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming lead:", body);

    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // --- Supabase insert (server-side) ---
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.SUPABASE_SERVICE_ROLE_KEY; // must be server-only

      if (url && key) {
        const supabase = createClient(url, key);
        const { error: dbError } = await supabase
          .from("leads")
          .insert([{ name, email, phone, message }]);

        if (dbError) {
          console.error("Supabase insert error:", dbError);
        } else {
          console.log("Saved lead to Supabase");
        }
      } else {
        console.log("Supabase keys not set — skipping DB insert");
      }
    } catch (dbErr) {
      console.error("Supabase insert threw:", dbErr);
      // continue to attempt email send
    }

    // --- Send email notification (if SMTP configured) ---
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
          subject: `New lead from website: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
          html: `<p><b>Name:</b> ${name}</p>
                 <p><b>Email:</b> ${email}</p>
                 <p><b>Phone:</b> ${phone}</p>
                 <p><b>Message:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>`,
        });

        console.log("Notification email sent:", mailRes.messageId || "(no messageId)");
      } else {
        console.log("SMTP not configured — skipping email send");
      }
    } catch (mailErr) {
      console.error("Email send error:", mailErr);
      // continue
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
