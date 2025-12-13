import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | ParshWebCraft",
  description:
    "Professional SEO services by ParshWebCraft to improve Google rankings, website speed, and organic traffic for business growth.",

  alternates: {
    canonical: "https://parshwebcraft.in/services/seo",
  },

  openGraph: {
    title: "SEO Services | ParshWebCraft",
    description:
      "Rank higher on Google with technical SEO, on-page optimization, and performance improvements tailored for businesses.",
    url: "https://parshwebcraft.in/services/seo",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SEO Services | ParshWebCraft",
    description:
      "SEO services focused on rankings, speed optimization, and long-term organic growth.",
  },
};

export default function SEOServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
