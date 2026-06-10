import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * verifyAdmin()
 *
 * Server-side admin authentication guard for Next.js API Route Handlers.
 * Uses Supabase auth.getUser() which validates the token against the
 * Supabase server — not just reading the local cookie.
 *
 * Usage in any API route:
 *   import { verifyAdmin } from "@/lib/auth/adminGuard";
 *
 *   export async function GET(req) {
 *     const auth = await verifyAdmin();
 *     if (!auth.ok) return auth.response;
 *     // ... protected logic
 *   }
 *
 * @returns {{ ok: true, user: User } | { ok: false, response: NextResponse }}
 */
export async function verifyAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const adminEmail = (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();

  // If env not configured, return 500 (server error, not auth error)
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      ),
    };
  }

  // No admin email configured → block all access
  if (!adminEmail) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Admin not configured" },
        { status: 503 }
      ),
    };
  }

  let cookieStore;
  try {
    cookieStore = await cookies();
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
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
          // Route handler context — cookie writes handled by middleware refresh
        }
      },
    },
  });

  // getUser() validates token server-side (not just cookie read)
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      ok: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  const userEmail = user.email?.toLowerCase() ?? "";
  if (userEmail !== adminEmail) {
    return {
      ok: false,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  return { ok: true, user };
}
