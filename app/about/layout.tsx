import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: "About ParshWebCraft | Web Design Studio",
  description:
    "Learn about ParshWebCraft — a web design studio focused on building premium, high-performance websites for business growth.",

  alternates: {
    canonical: "https://parshwebcraft.in/about",
  },

  openGraph: {
    title: "About ParshWebCraft",
    description:
      "Discover the story, mission, and values behind ParshWebCraft.",
    url: "https://parshwebcraft.in/about",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "About ParshWebCraft",
    description:
      "The story and vision behind ParshWebCraft web design studio.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
