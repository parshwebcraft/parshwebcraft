"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 30;
const STORAGE_KEY = "pwc_admin_attempts";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/admin/analytics";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);
  const [lockRemaining, setLockRemaining] = useState(0);
  const lockTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Client-side brute-force protection ── */
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const { count, lockedUntil } = JSON.parse(stored);
      if (lockedUntil && Date.now() < lockedUntil) {
        activateLockout(lockedUntil);
      } else if (count >= MAX_ATTEMPTS) {
        // Lockout expired — clear
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (lockTimer.current) clearInterval(lockTimer.current);
    };
  }, []);

  function recordFailedAttempt() {
    let stored: { count: number; lockedUntil: number | null } = { count: 0, lockedUntil: null };
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) stored = JSON.parse(raw);
    } catch { /* ignore */ }


    stored.count = (stored.count ?? 0) + 1;

    if (stored.count >= MAX_ATTEMPTS) {
      const lockedUntil = Date.now() + LOCKOUT_SECONDS * 1000;
      stored.lockedUntil = lockedUntil;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      activateLockout(lockedUntil);
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    }
  }

  function activateLockout(lockedUntil: number) {
    setLocked(true);
    if (lockTimer.current) clearInterval(lockTimer.current);
    lockTimer.current = setInterval(() => {
      const remaining = Math.ceil((lockedUntil - Date.now()) / 1000);
      if (remaining <= 0) {
        setLocked(false);
        setLockRemaining(0);
        sessionStorage.removeItem(STORAGE_KEY);
        if (lockTimer.current) clearInterval(lockTimer.current);
      } else {
        setLockRemaining(remaining);
      }
    }, 500);
  }

  function clearAttempts() {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (locked) return;
    setError("");
    setLoading(true);

    const supabase = getSupabaseClient();
    if (!supabase) {
      setLoading(false);
      setError("Authentication service unavailable. Please try again later.");
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });


    setLoading(false);

    if (authError) {
      // Generic message — don't reveal if email exists
      setError("Invalid email or password.");
      recordFailedAttempt();
      return;
    }

    // Successful login
    clearAttempts();
    router.replace(redirectPath);
  }

  const inputClass =
    "w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#f3d07a]/50 transition text-white placeholder-slate-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b1a] px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="relative bg-[#0b1220] rounded-2xl p-8 shadow-xl border border-white/5">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#f3d07a22] to-[#f3d07a08] blur opacity-40 pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3d07a14] border border-[#f3d07a22] mb-4">
                <svg className="w-6 h-6 text-[#f3d07a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Login</h1>
              <p className="text-sm text-slate-400 mt-1">ParshWebCraft Dashboard</p>
            </div>

            {/* Lockout warning */}
            {locked && (
              <div className="mb-5 rounded-lg bg-orange-500/10 border border-orange-500/25 px-4 py-3 text-sm text-orange-300 text-center">
                Too many failed attempts. Try again in{" "}
                <span className="font-bold">{lockRemaining}s</span>.
              </div>
            )}

            {/* Error */}
            {error && !locked && (
              <div className="mb-5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="admin-email">
                  Email Address
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.currentTarget.value); setError(""); }}
                  required
                  autoComplete="username"
                  disabled={locked || loading}
                  placeholder="admin@example.com"
                  className={inputClass}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="admin-password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.currentTarget.value); setError(""); }}
                    required
                    autoComplete="current-password"
                    disabled={locked || loading}
                    placeholder="••••••••"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 accent-[#f3d07a] cursor-pointer"
                />
                <span className="text-sm text-slate-400">Remember me for 24 hours</span>
              </label>

              {/* Submit */}
              <button
                id="admin-login-submit"
                type="submit"
                disabled={loading || locked}
                className={`w-full mt-2 rounded-lg font-semibold py-3 text-sm transition ${
                  loading || locked
                    ? "bg-[#2a2a2a] text-slate-500 cursor-not-allowed"
                    : "bg-[#f3d07a] text-black hover:brightness-95"
                }`}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                    Signing in…
                  </span>
                ) : locked ? (
                  `Locked — ${lockRemaining}s`
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          Only authorised admin accounts can access this panel.
        </p>
      </div>
    </div>
  );
}

// Wrap in Suspense — required by Next.js when useSearchParams() is used
// in a client component that may be statically prerendered
export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#050b1a]">
        <div className="h-8 w-8 rounded-full border-2 border-[#f3d07a] border-t-transparent animate-spin" />
      </div>
    }>
      <AdminLoginForm />
    </Suspense>
  );
}
