import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Web Services | ParshWebCraft",
  description:
    "Explore premium website services by ParshWebCraft including web design, SEO, eCommerce development, and website maintenance.",

  alternates: {
    canonical: "https://parshwebcraft.in/services",
  },

  openGraph: {
    title: "Web Services | ParshWebCraft",
    description:
      "Premium website solutions designed to grow your business with modern technology and high performance.",
    url: "https://parshwebcraft.in/services",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Web Services | ParshWebCraft",
    description:
      "Premium website services including web design, SEO, and eCommerce solutions.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
