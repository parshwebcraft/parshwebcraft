import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Website & Web App Projects in Udaipur | ParshWebCraft",
  description:
    "Explore real website and web application case studies built by ParshWebCraft for Udaipur-based businesses and founders. Production-ready projects, real results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
