import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ParshWebCraft",
  description:
    "Read the terms and conditions governing the use of ParshWebCraft services, website development, maintenance, and support.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
