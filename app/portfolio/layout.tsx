import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Portfolio | ParshWebCraft",
  description:
    "View real projects and website designs built by ParshWebCraft for businesses and brands.",

  alternates: {
    canonical: "https://parshwebcraft.in/portfolio",
  },

  openGraph: {
    title: "Portfolio | ParshWebCraft",
    description:
      "Explore premium websites and projects created by ParshWebCraft.",
    url: "https://parshwebcraft.in/portfolio",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Portfolio | ParshWebCraft",
    description:
      "Real-world website projects designed and developed by ParshWebCraft.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
