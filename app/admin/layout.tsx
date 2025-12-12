// app/admin/layout.tsx
import type { ReactNode } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

export const metadata = {
  title: "Admin — ParshWebCraft",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  // keep these in sync with Sidebar / Topbar constants
  const SIDEBAR_WIDTH = 16 * 4; // 16rem -> 16 * 4 = 64? (we'll use tailwind ml-64)
  const TOPBAR_HEIGHT = 72; // px

  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* main area: leave left margin equal to sidebar width (tailwind ml-64) 
          and top padding equal to global navbar height so content starts below it */}
      <div className="ml-64" style={{ paddingTop: `${TOPBAR_HEIGHT}px` }}>
        {/* Put Topbar here so it displays inside admin content and doesn't overlap global nav */}
        <div className="bg-transparent">
          <Topbar />
        </div>

        <main className="px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
