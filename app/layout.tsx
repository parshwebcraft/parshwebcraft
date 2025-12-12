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
import ClientShell from "../components/ClientShell"; // <-- client wrapper that includes VisitTracker

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParshWebCraft",
  description: "Premium Web Solutions by ParshWebCraft",
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
          

          {/* ClientShell is a small client component that mounts VisitTracker on the client */}
          <ClientShell>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientShell>
        </MotionWrapper>
      </body>
    </html>
  );
}
