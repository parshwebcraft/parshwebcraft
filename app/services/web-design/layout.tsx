import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | ParshWebCraft",
  description:
    "Premium web design services by ParshWebCraft. High-performance, secure and conversion-focused websites built with modern technologies.",

  alternates: {
    canonical: "https://parshwebcraft.in/services/web-design",
  },

  openGraph: {
    title: "Web Design Services | ParshWebCraft",
    description:
      "Get premium web design services with modern UI, fast performance and scalable architecture. Built for business growth.",
    url: "https://parshwebcraft.in/services/web-design",
    siteName: "ParshWebCraft",
    images: [
      {
        url: "https://parshwebcraft.in/og-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design Services by ParshWebCraft",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | ParshWebCraft",
    description:
      "Modern, fast and SEO-ready web design services for businesses.",
    images: ["https://parshwebcraft.in/og-web-design.jpg"],
  },
};

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
