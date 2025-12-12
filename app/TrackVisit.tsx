"use client";

import { useEffect } from "react";

export default function TrackVisit() {
  useEffect(() => {
    fetch("/api/visit/add", { method: "POST" })
      .catch((err) => console.error("Visit track error:", err));
  }, []);

  return null;
}
