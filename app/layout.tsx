// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import VisitTracker from "./VisitTracker";
import TrackVisit from "./TrackVisit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingParticles from "../components/FloatingParticles";
import MotionWrapper from "./motion/wrapper";
import ClientShell from "../components/ClientShell";
import AuthListener from "../components/AuthListener"; // ✅ NEW (auth cookie sync)
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ParshWebCraft — Website & SaaS Development Agency",
    template: "%s | ParshWebCraft",
  },

  description:
    "ParshWebCraft is a website and SaaS development agency based in Udaipur, building high-performance business websites, web applications, and scalable digital systems.",

  alternates: {
    canonical: "https://www.parshwebcraft.in",
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "ParshWebCraft — Website & SaaS Development Agency",
    description:
      "Premium websites and SaaS platforms built for speed, clarity, and business growth.",
    url: "https://www.parshwebcraft.in",
    siteName: "ParshWebCraft",
    images: [
      {
        url: "https://www.parshwebcraft.in/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "ParshWebCraft — Website & SaaS Development Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ParshWebCraft — Website & SaaS Development Agency",
    description:
      "High-performance websites and SaaS platforms for growing businesses.",
    images: ["https://www.parshwebcraft.in/images/social-preview.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisitTracker />

        {/* floating particles (sitewide, behind everything) */}
        <FloatingParticles />

        {/* Motion wrapper: adds page fade-in to everything inside it */}
        <MotionWrapper>
          <TrackVisit />

          {/* ClientShell mounts client-only logic */}
          <ClientShell>
            {/* 🔑 AuthListener forces Supabase auth cookie sync */}
            <AuthListener />
            <Analytics />

            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientShell>
        </MotionWrapper>
      </body>
    </html>
  );
}
