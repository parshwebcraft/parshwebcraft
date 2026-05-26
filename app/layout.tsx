// app/layout.tsx
import type { Metadata, Viewport } from "next";
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
import FloatingCTA from "../components/FloatingCTA";
import AIChatBot from "../components/AIChatBot";
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
const SITE_URL = "https://www.parshwebcraft.in";
const SITE_TITLE =
  "ParshWebCraft | Web Development & Digital Marketing Agency in Udaipur";
const SITE_DESCRIPTION =
  "ParshWebCraft is a leading web development and digital marketing agency in Udaipur offering websites, SaaS development, SEO, branding, social media management, reels marketing, GST billing software and business growth solutions.";
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "google-site-verification-placeholder";
const SEO_KEYWORDS = [
  "web development company in udaipur",
  "digital marketing agency in udaipur",
  "SaaS development company",
  "website development services",
  "ecommerce website development",
  "seo services udaipur",
  "social media management company",
  "branding agency udaipur",
  "landing pages",
  "GST billing software",
  "reel marketing",
  "bulk SMS services",
  "UI UX design",
  "hosting and deployment",
  "performance optimization",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050414",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | ParshWebCraft",
  },

  description: SITE_DESCRIPTION,

  keywords: SEO_KEYWORDS,

  authors: [{ name: "ParshWebCraft", url: SITE_URL }],
  creator: "ParshWebCraft",
  publisher: "ParshWebCraft",
  applicationName: "ParshWebCraft",
  category: "Web Development and Digital Marketing",

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  other: {
    language: "en-IN",
    "revisit-after": "7 days",
    "theme-color": "#050414",
    "sitemap": `${SITE_URL}/sitemap.xml`,
    "robots.txt": `${SITE_URL}/robots.txt`,
  },

  appleWebApp: {
    capable: true,
    title: "ParshWebCraft",
    statusBarStyle: "black-translucent",
  },

  manifest: "/site.webmanifest",

  assets: [
    "/images/logo-main.png",
    "/images/social-preview.png",
  ],

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "ParshWebCraft",
    locale: "en_IN",
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        {/* SEO performance hints: preconnect/preload critical brand assets. */}
        <link rel="canonical" href={SITE_URL} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href="/images/logo-hero.png" />
        <link rel="preload" as="image" href="/images/social-preview.png" />
        <meta name="author" content="ParshWebCraft" />
        <meta name="language" content="en-IN" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#050414" />
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />

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

        {/* Structured data strengthens local SEO, brand authority, and AI visibility. */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: "ParshWebCraft",
                url: SITE_URL,
                logo: `${SITE_URL}/icon.png`,
                image: `${SITE_URL}/images/social-preview.png`,
                description: SITE_DESCRIPTION,
                sameAs: [
                  "https://www.instagram.com/parshwebcraft",
                  "https://www.linkedin.com/company/parshwebcraft",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-9521347419",
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#localbusiness`,
                name: "ParshWebCraft",
                url: SITE_URL,
                logo: `${SITE_URL}/icon.png`,
                image: `${SITE_URL}/images/social-preview.png`,
                description: SITE_DESCRIPTION,
                telephone: "+91-9521347419",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Udaipur",
                  addressRegion: "Rajasthan",
                  addressCountry: "IN",
                },
                areaServed: [
                  { "@type": "City", name: "Udaipur" },
                  { "@type": "State", name: "Rajasthan" },
                  { "@type": "Country", name: "India" },
                ],
                makesOffer: SEO_KEYWORDS.map((keyword) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: keyword,
                    areaServed: "Udaipur, Rajasthan, India",
                  },
                })),
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: "ParshWebCraft",
                publisher: { "@id": `${SITE_URL}/#organization` },
                inLanguage: "en-IN",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${SITE_URL}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
            ],
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
            <FloatingCTA />
            <AIChatBot />
          </ClientShell>
        </MotionWrapper>
      </body>
    </html>
  );
}
