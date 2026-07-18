import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { Resend } from "resend";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    // 1. Verify candidate session server-side
    const cookieStore = await cookies();
    const supabaseClient = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignored
          }
        },
      },
    });

    const {
      data: { user },
      error: authError,
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
    }

    // 2. Parse request body
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const {
      jobId, // could be job_id text (e.g. PWC-DEV-01) or UUID
      jobTitle,
      name,
      phone,
      portfolioUrl,
      linkedinUrl,
      githubUrl,
      message,
      resumeUrl,
    } = body ?? {};

    if (!name || !phone || !resumeUrl || !jobId || !jobTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanPhone = phone.trim().slice(0, 20);
    const cleanPortfolio = portfolioUrl?.trim().slice(0, 200) || null;
    const cleanLinkedin = linkedinUrl?.trim().slice(0, 200) || null;
    const cleanGithub = githubUrl?.trim().slice(0, 200) || null;
    const cleanMessage = message?.trim().slice(0, 2000) || null;
    const cleanResume = resumeUrl.trim();

    // 3. Save application to DB if Supabase admin is configured
    const supabaseAdmin = getSupabaseAdmin();
    let dbSaved = false;

    if (supabaseAdmin) {
      try {
        // Find actual job UUID if a string code was passed
        let targetJobUuid = jobId;
        if (!jobId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
          const { data: jobData } = await supabaseAdmin
            .from("careers_jobs")
            .select("id")
            .eq("job_id", jobId)
            .single();
          if (jobData?.id) {
            targetJobUuid = jobData.id;
          }
        }

        const { error: dbError } = await supabaseAdmin.from("careers_applications").insert([
          {
            job_id: targetJobUuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i) ? targetJobUuid : null,
            user_id: user.id,
            candidate_name: cleanName,
            candidate_email: user.email,
            candidate_phone: cleanPhone,
            portfolio_url: cleanPortfolio,
            linkedin_url: cleanLinkedin,
            github_url: cleanGithub,
            message: cleanMessage,
            resume_url: cleanResume,
            status: "new",
          },
        ]);

        if (dbError) {
          console.error("[api/careers/apply] DB insert error:", dbError.message);
        } else {
          dbSaved = true;
        }
      } catch (dbErr) {
        console.error("[api/careers/apply] DB exception:", dbErr);
      }
    }

    // 4. Send email notifications via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // A. Email to Candidate (receipt confirmation)
        await resend.emails.send({
          from: "ParshWebCraft Careers <onboarding@resend.dev>",
          to: [user.email],
          subject: `Application Received: ${jobTitle} | ParshWebCraft`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;line-height:1.6;color:#333">
              <h2 style="color:#f3d07a">Application Received!</h2>
              <p>Hi ${cleanName},</p>
              <p>Thank you for applying for the <b>${jobTitle}</b> position at ParshWebCraft.</p>
              <p>We have successfully received your resume and application details. Our hiring team is reviewing profiles, and we will contact you if your experience aligns with our requirements.</p>
              <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
              <p style="font-size:12px;color:#888">This is an automated receipt confirmation from ParshWebCraft Careers.</p>
            </div>
          `,
        });

        // B. Email to Admin (alerting of new application)
        await resend.emails.send({
          from: "ParshWebCraft Careers <onboarding@resend.dev>",
          to: [process.env.NOTIFY_EMAIL || "parshwebcraft@gmail.com"],
          subject: `New Job Application: ${cleanName} (${jobTitle})`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;line-height:1.6;color:#333">
              <h2 style="color:#f3d07a">New Candidate Application</h2>
              <p><b>Role Applied:</b> ${jobTitle}</p>
              <p><b>Candidate Name:</b> ${cleanName}</p>
              <p><b>Email:</b> ${user.email}</p>
              <p><b>Phone:</b> ${cleanPhone}</p>
              <p><b>Resume Link:</b> <a href="${cleanResume}" target="_blank">Download Resume</a></p>
              ${cleanPortfolio ? `<p><b>Portfolio:</b> <a href="${cleanPortfolio}" target="_blank">${cleanPortfolio}</a></p>` : ""}
              ${cleanLinkedin ? `<p><b>LinkedIn:</b> <a href="${cleanLinkedin}" target="_blank">${cleanLinkedin}</a></p>` : ""}
              ${cleanGithub ? `<p><b>GitHub:</b> <a href="${cleanGithub}" target="_blank">${cleanGithub}</a></p>` : ""}
              ${cleanMessage ? `<p><b>Message:</b><br/>${cleanMessage.replace(/\n/g, "<br/>")}</p>` : ""}
              <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
              <p style="font-size:12px;color:#888">Submitted via parshwebcraft.in/careers</p>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("[api/careers/apply] Email notification failed:", mailErr?.message ?? mailErr);
      }
    }

    return NextResponse.json({ ok: true, dbSaved });
  } catch (err) {
    console.error("[api/careers/apply] Unhandled error:", err?.message ?? err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
