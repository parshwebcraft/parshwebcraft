import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce Website Development | ParshWebCraft",
  description:
    "Professional eCommerce website development by ParshWebCraft. High-converting online stores with secure payments and scalable architecture.",

  alternates: {
    canonical: "https://parshwebcraft.in/services/ecommerce",
  },

  openGraph: {
    title: "eCommerce Website Development | ParshWebCraft",
    description:
      "Build high-performance eCommerce websites with secure checkout, modern UI, and conversion-focused design.",
    url: "https://parshwebcraft.in/services/ecommerce",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "eCommerce Website Development | ParshWebCraft",
    description:
      "Custom eCommerce websites designed for performance, security, and sales growth.",
  },
};

export default function EcommerceServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
