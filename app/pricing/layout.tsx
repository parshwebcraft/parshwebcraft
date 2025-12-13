import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Pricing Plans | ParshWebCraft",
  description:
    "Transparent website pricing plans by ParshWebCraft. Choose the right plan for your business with optional add-ons and premium support.",

  alternates: {
    canonical: "https://parshwebcraft.in/pricing",
  },

  openGraph: {
    title: "Pricing Plans | ParshWebCraft",
    description:
      "Simple and transparent pricing for premium website development and business growth.",
    url: "https://parshwebcraft.in/pricing",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Pricing Plans | ParshWebCraft",
    description:
      "Explore transparent pricing plans for premium website development.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
