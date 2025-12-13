"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";


export default function AdminLoginPage() {
 //  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setError("");
  setLoading(true);

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  setLoading(false);

  if (error) {
    setError(error.message);
    return;
  }

  // ✅ FINAL & IMPORTANT
  window.location.href = "/admin/analytics";

}


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b1a] px-4">
      <div className="w-full max-w-md">
        <div className="relative bg-[#0b1220] rounded-2xl p-8 shadow-xl border border-white/5">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur opacity-30" />

          <div className="relative">
            <h1 className="text-2xl font-bold text-center mb-2">Admin Login</h1>
            <p className="text-center text-sm text-slate-400 mb-6">
              Sign in to access the admin dashboard
            </p>

            {error && (
              <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-semibold py-3 disabled:opacity-60"
              >
                {loading ? "Signing in…" : "Login"}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Only authorized admin emails can access this panel
        </p>
      </div>
    </div>
  );
}
