import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | ParshWebCraft",
  description:
    "Find answers to common questions about ParshWebCraft services, pricing, timelines, SEO, and website maintenance.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
