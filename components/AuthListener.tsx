"use client";

import { useEffect } from "react";
import { supabaseClient } from "@/lib/supabase/client";

export default function AuthListener() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      // This listener forces Supabase to sync auth cookies
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
