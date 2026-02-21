// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import VisitTracker from "./VisitTracker";
import TrackVisit from "./TrackVisit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingParticles from "../components/FloatingParticles";
import MotionWrapper from "./motion/wrapper";
import ClientShell from "../components/ClientShell";
import AuthListener from "../components/AuthListener";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// GA ID from ENV
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.parshwebcraft.in"),

  title: {
    default: "ParshWebCraft — Website & SaaS Development Agency",
    template: "%s | ParshWebCraft",
  },

  description:
    "ParshWebCraft is a website and SaaS development agency based in Udaipur, building high-performance business websites, web applications, and scalable digital systems.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "ParshWebCraft — Website & SaaS Development Agency",
    description:
      "Premium websites and SaaS platforms built for speed, clarity, and business growth.",
    url: "/",
    siteName: "ParshWebCraft",
    images: [
      {
        url: "/images/social-preview.png",
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
    images: ["/images/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisitTracker />
        <FloatingParticles />

        <MotionWrapper>
          <TrackVisit />

          <ClientShell>
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
