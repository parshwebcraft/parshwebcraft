// components/admin/Topbar.tsx
"use client";
import React from "react";

export default function Topbar() {
  return (
    <div className="w-full flex items-center justify-between px-6"
         style={{ height: 72 /* same TOPBAR_HEIGHT */ }}>
      <div className="text-2xl font-bold">Dashboard</div>

      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-slate-300">Overview</span>
        <span className="text-slate-300">Admin</span>
      </div>
    </div>
  );
}
