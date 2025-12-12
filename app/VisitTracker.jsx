"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    fetch("/api/visit", { method: "POST" }).catch(() => {});
    const payload = { path: window.location.pathname };
    fetch("/api/visit/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }, []);

  return null;
}
