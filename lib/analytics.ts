// lib/analytics.ts

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track PageViews across analytics tools
export const pageview = (url: string) => {
  if (typeof window !== "undefined") {
    // 1. Google Analytics
    if (window.gtag && GA_ID) {
      window.gtag("config", GA_ID, {
        page_path: url,
      });
    }

    // 2. Meta Pixel
    if (window.fbq && META_PIXEL_ID) {
      window.fbq("track", "PageView");
    }

    // 3. Google Tag Manager Custom SPA Pageview Trigger
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: url,
      });
    }
  }
};

interface EventParams {
  action?: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

// Track Specific Standard / Custom Events
export const trackEvent = (
  eventName: string,
  params: EventParams = {},
  pixelOptions: { eventID?: string } = {}
) => {
  if (typeof window !== "undefined") {
    // 1. Meta Pixel
    if (window.fbq && META_PIXEL_ID) {
      // Standard events list mapping to fbq track call, others use trackCustom
      const standardEvents = [
        "PageView",
        "ViewContent",
        "Search",
        "AddToCart",
        "AddToWishlist",
        "InitiateCheckout",
        "AddPaymentInfo",
        "Purchase",
        "Lead",
        "CompleteRegistration",
        "Contact",
        "CustomizeProduct",
        "Donate",
        "FindLocation",
        "Schedule",
        "StartTrial",
        "SubmitApplication",
        "Subscribe",
      ];

      if (standardEvents.includes(eventName)) {
        window.fbq("track", eventName, params, pixelOptions);
      } else {
        window.fbq("trackCustom", eventName, params, pixelOptions);
      }
    }

    // 2. Google Analytics / Tag Manager
    if (window.gtag && GA_ID) {
      window.gtag("event", eventName, params);
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        ...(pixelOptions.eventID ? { event_id: pixelOptions.eventID } : {}),
      });
    }
  }
};

// Track CTA Button clicks specifically
export const trackCtaClick = (ctaName: string, destination?: string) => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    destination: destination || "none",
  });
};

// Global TypeScript type safety definitions for scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
