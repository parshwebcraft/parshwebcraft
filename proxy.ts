import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * ParshWebCraft — Security Middleware
 *
 * Protection layers:
 * 1. Maintenance mode (env-based, no API call)
 * 2. Admin route protection via Supabase session verification
 *    Uses getUser() — validates token with Supabase server (not just local cookie)
 */
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  /* ── Static / infrastructure passthrough ── */
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/site.webmanifest") ||
    pathname.startsWith("/api") // API routes protected per-route by adminGuard
  ) {
    return NextResponse.next();
  }

  /* ── Maintenance mode (env-based, zero DB round-trip) ── */
  if (
    process.env.MAINTENANCE_MODE === "true" &&
    !pathname.startsWith("/admin") &&
    pathname !== "/maintenance"
  ) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  /* ── Admin route protection ── */
  if (pathname.startsWith("/admin")) {
    // Login and logout pages are always accessible
    if (pathname === "/admin/login" || pathname === "/admin/logout") {
      return NextResponse.next();
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const adminEmail = (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();

    // Fail safe: if env not configured, block access
    if (!supabaseUrl || !supabaseAnonKey || !adminEmail) {
      console.warn("[middleware] Admin env vars not configured — blocking admin access");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    let response = NextResponse.next({ request: req });

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Apply cookies to request first
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
          // Rebuild response with updated cookies
          response = NextResponse.next({ request: req });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    });

    // ✅ getUser() — makes a network call to Supabase to validate the token.
    // More secure than getSession() which only reads the local cookie.
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const userEmail = user?.email?.toLowerCase() ?? null;

    if (!userEmail || userEmail !== adminEmail) {
      // Preserve intended destination for post-login redirect
      const loginUrl = new URL("/admin/login", req.url);
      if (pathname !== "/admin") {
        loginUrl.searchParams.set("redirect", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  /*
   * Match all routes EXCEPT:
   * - Next.js static files (_next/static, _next/image)
   * - Image files (.png, .jpg, .svg, .ico, .webp)
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?)$).*)",
  ],
};
