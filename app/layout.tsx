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
    default: "Web Development Company in Udaipur | ParshWebCraft",
    template: "%s | ParshWebCraft",
  },

  description:
    "ParshWebCraft is a leading web development company in Udaipur offering website design, ecommerce development, and SaaS solutions for businesses across India.",

  keywords: [
    "web development company in udaipur",
    "website design in udaipur",
    "web designer in udaipur",
    "ecommerce website development india",
    "saas development company india",
    "business website development",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Web Development Company in Udaipur | ParshWebCraft",
    description:
      "We build high-converting websites, ecommerce stores, and SaaS platforms for growing businesses.",
    url: "https://www.parshwebcraft.in",
    siteName: "ParshWebCraft",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "ParshWebCraft Website Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Udaipur | ParshWebCraft",
    description:
      "Premium website design and SaaS development for modern businesses.",
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

        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ParshWebCraft",
            url: "https://www.parshwebcraft.in",
            logo: "https://www.parshwebcraft.in/icon.png",
            description:
              "Web development company in Udaipur building websites, ecommerce platforms, and SaaS products.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Udaipur",
              addressRegion: "Rajasthan",
              addressCountry: "India",
            },
            sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/"],
          })}
        </Script>
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
