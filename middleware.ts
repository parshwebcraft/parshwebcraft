import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const adminEmail =
    (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();

  // Safety: if env missing, block admin routes
  if (!adminEmail) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value;
        },
        set(name, value, options) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name, options) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  const pathname = req.nextUrl.pathname;

  // ✅ Use session (reliable in middleware / edge)
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userEmail = session?.user?.email?.toLowerCase() ?? null;

  // 🔐 Protect all /admin routes except login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!userEmail || userEmail !== adminEmail) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // ✅ Logged-in admin should not see login page
  if (pathname === "/admin/login" && userEmail === adminEmail) {
    return NextResponse.redirect(new URL("/admin/analytics", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
