import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Immediate Hiring in Ahmedabad | ParshWebCraft",
  description:
    "Explore career opportunities at ParshWebCraft! We are hiring Video Editors, Graphic Designers, Developers, UI/UX Designers & Marketers on-site in Ahmedabad, Gujarat.",
  keywords: [
    "careers parshwebcraft",
    "hiring video editor ahmedabad",
    "hiring graphic designer ahmedabad",
    "web developer jobs ahmedabad",
    "parshwebcraft jobs",
    "design jobs ahmedabad",
    "on site hiring ahmedabad",
  ],
  alternates: {
    canonical: "https://www.parshwebcraft.in/careers",
  },
  openGraph: {
    title: "Careers & Immediate Hiring in Ahmedabad | ParshWebCraft",
    description:
      "Join ParshWebCraft! We are expanding our creative team on-site in Ahmedabad, Gujarat. Apply now for Video Editor, Graphic Designer, Frontend Developer & UI/UX roles.",
    url: "https://www.parshwebcraft.in/careers",
    siteName: "ParshWebCraft",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.parshwebcraft.in/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "ParshWebCraft Careers & Immediate Hiring in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Immediate Hiring in Ahmedabad | ParshWebCraft",
    description:
      "Join ParshWebCraft in Ahmedabad, Gujarat! We are hiring Video Editors, Graphic Designers, Developers & Marketers. Apply online today!",
    images: ["https://www.parshwebcraft.in/images/social-preview.png"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
