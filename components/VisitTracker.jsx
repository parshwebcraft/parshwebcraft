// components/VisitTracker.jsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * VisitTracker
 * - Fires POST /api/visit on initial load and on SPA navigation
 * - Uses sessionStorage to avoid duplicate pings for the same path in the same session
 */

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    try {
      const key = `visited:${pathname}`;
      // don't re-send if same path already counted this session
      if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(key)) {
        return;
      }

      // mark visited
      if (typeof sessionStorage !== "undefined") sessionStorage.setItem(key, "1");

      // fire-and-forget
      void fetch("/api/visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: pathname }),
      }).catch((e) => {
        // silent failure; no block
        console.debug("Visit ping failed", e);
      });
    } catch (e) {
      // sessionStorage may be blocked; still attempt request
      void fetch("/api/visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: pathname }),
      }).catch(() => {});
    }
  }, [pathname]);

  return null;
}
