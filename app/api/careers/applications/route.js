import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function GET() {
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

    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) {
      return NextResponse.json([]); // Return empty list if DB is not configured
    }

    // Fetch applications with joined job title
    const { data, error } = await supabaseAdmin
      .from("careers_applications")
      .select(`
        id,
        status,
        created_at,
        careers_jobs (
          title,
          department,
          job_id
        )
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[api/careers/applications] Fetch error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Format output
    const formatted = data.map((app) => ({
      id: app.id,
      status: app.status,
      created_at: app.created_at,
      title: app.careers_jobs?.title || "Unknown Position",
      department: app.careers_jobs?.department || "General",
      job_code: app.careers_jobs?.job_id || "PWC-JOB",
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("[api/careers/applications] Unhandled error:", err?.message ?? err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
