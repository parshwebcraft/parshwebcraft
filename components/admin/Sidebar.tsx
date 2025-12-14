// components/admin/Sidebar.tsx
"use client";
import Link from "next/link";
import React from "react";

const TOPBAR_HEIGHT = 72; // px — change if your global navbar uses a different height
const FOOTER_HEIGHT = 300; // px — adjust to your real footer height
const SIDEBAR_WIDTH = "16rem"; // w-64

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 w-64 bg-black/30 backdrop-blur-xl text-slate-200 border-r border-white/10 z-40 overflow-y-auto"
      style={{
        top: `${TOPBAR_HEIGHT}px`,
        height: `calc(100vh - ${TOPBAR_HEIGHT + FOOTER_HEIGHT}px)`,
        width: SIDEBAR_WIDTH,
      }}
    >
      {/* smaller horizontal padding so items sit closer to the left edge */}
      <div className="px-2 py-6">
        <div className="text-xl font-bold mb-6 pl-2">Tools</div>

        <nav className="space-y-1">
          <Link
            href="/admin/analytics"
            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Analytics
          </Link>

          <Link
            href="/admin/leads"
            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Leads
          </Link>
          <Link
            href="/admin/newsletter"
            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Newsletter
          </Link>

          <Link
            href="/admin/settings"
            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Settings
          </Link>

          <Link
            href="/admin/logout"
            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Logout
          </Link>
        </nav>
      </div>
    </aside>
  );
}
