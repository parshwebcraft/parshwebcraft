// components/admin/AdminShell.tsx
"use client";
import React from "react";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg shadow-sm">{children}</div>;
}
