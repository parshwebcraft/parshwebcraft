"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pageview, trackEvent, trackCtaClick } from "../lib/analytics";

export default function MarketingTracker() {
  const pathname = usePathname();
  const trackedScrollDepths = useRef<Record<number, boolean>>({});

  // 1. Track SPA page change pageviews
  useEffect(() => {
    if (pathname) {
      pageview(pathname);
      // Reset tracked scroll depths for the new page
      trackedScrollDepths.current = { 25: false, 50: false, 75: false, 90: false };
    }
  }, [pathname]);

  // 2. Track global CTA clicks, WhatsApp/Phone calls, Time-on-site, and Scroll depth
  useEffect(() => {
    // ── Global click listener for WhatsApp, calls, and CTAs ──
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for parent anchor tag if clicked element is inside one (e.g., SVG/image inside link)
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const text = anchor.innerText || anchor.getAttribute("aria-label") || "";
        
        // A. WhatsApp Click (Lead Event)
        if (href.includes("wa.me") || href.includes("whatsapp.com")) {
          trackEvent("Lead", {
            content_name: "WhatsApp Click",
            content_category: "Direct Contact",
            value: 50,
            currency: "INR"
          });
          trackCtaClick("WhatsApp Clicked", href);
        }
        
        // B. Phone Call Click (Lead Event)
        else if (href.startsWith("tel:")) {
          trackEvent("Lead", {
            content_name: "Phone Call Click",
            content_category: "Direct Contact",
            value: 50,
            currency: "INR"
          });
          trackCtaClick("Phone Call Clicked", href);
        }
        
        // C. Standard CTA phrase matching
        else {
          const lowerText = text.toLowerCase().trim();
          const ctaPhrases = [
            "get started", 
            "book a call", 
            "view pricing", 
            "contact us", 
            "free quote", 
            "get a quote", 
            "let's talk", 
            "let’s talk", 
            "pricing"
          ];
          
          const matchedPhrase = ctaPhrases.find(phrase => lowerText.includes(phrase));
          if (matchedPhrase) {
            trackCtaClick(`Link - ${matchedPhrase}`, href);
          }
        }
      } else {
        // Look for buttons
        const button = target.closest("button");
        if (button) {
          const text = button.innerText || "";
          const lowerText = text.toLowerCase().trim();
          const ctaPhrases = [
            "get started", 
            "book a call", 
            "view pricing", 
            "contact us", 
            "free quote", 
            "get a quote", 
            "let's talk", 
            "let’s talk", 
            "submit", 
            "apply"
          ];
          
          const matchedPhrase = ctaPhrases.find(phrase => lowerText.includes(phrase));
          if (matchedPhrase) {
            trackCtaClick(`Button - ${matchedPhrase}`);
          }
        }
      }
    };

    // ── Scroll Depth Tracking ──
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
      const targets = [25, 50, 75, 90];
      
      targets.forEach(targetPercent => {
        if (scrollPercent >= targetPercent && !trackedScrollDepths.current[targetPercent]) {
          trackedScrollDepths.current[targetPercent] = true;
          trackEvent("scroll_depth", {
            percentage: targetPercent,
            page_path: pathname
          });
        }
      });
    };

    // ── Time on Site Tracking (30s and 60s) ──
    const timer30s = setTimeout(() => {
      trackEvent("time_on_site", { duration: 30 });
    }, 30000);

    const timer60s = setTimeout(() => {
      trackEvent("time_on_site", { duration: 60 });
    }, 60000);

    document.addEventListener("click", handleGlobalClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer30s);
      clearTimeout(timer60s);
    };
  }, [pathname]);

  return null;
}
