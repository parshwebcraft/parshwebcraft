"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";

export default function AdminLogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout(): Promise<void> {
      await supabaseClient.auth.signOut();
      router.replace("/admin/login");
    }

    logout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b1a]">
      <div className="text-center">
        <div className="mb-4 text-slate-300">Logging you out…</div>
        <div className="h-6 w-6 mx-auto animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    </div>
  );
}
