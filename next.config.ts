import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents browsers from MIME-sniffing a response away from the declared content-type
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Prevents the page from being framed (clickjacking protection)
  { key: "X-Frame-Options", value: "DENY" },

  // Controls how much referrer information is sent
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Disables access to sensitive browser features not needed by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },

  // Enforces HTTPS for 1 year (including subdomains)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },

  // X-XSS-Protection for legacy browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },

  /*
   * Content-Security-Policy
   * ─────────────────────────────────────────────────────
   * Adjust script-src / connect-src if you add new third-party services.
   * 'unsafe-inline' required for Next.js inline scripts and Framer Motion.
   * 'unsafe-eval' required for development hot-reload (remove in production if needed).
   */
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + Google Analytics + reCAPTCHA + Vercel Analytics
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://va.vercel-scripts.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
      // Styles: self + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com data:",
      // Images: self + data URIs + Google + common image CDNs
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.google.co.in https://www.facebook.com https://googleads.g.doubleclick.net",
      // API / WS connections: self + Supabase + OpenAI + Google APIs
      [
        "connect-src 'self'",
        "https://*.supabase.co",
        "https://api.openai.com",
        "https://www.google-analytics.com",
        "https://analytics.google.com",
        "https://www.googletagmanager.com",
        "https://www.google.com",
        "https://stats.g.doubleclick.net",
        "https://www.facebook.com",
        "https://googleads.g.doubleclick.net",
        "https://va.vercel-scripts.com",
        "wss://*.supabase.co",
      ].join(" "),
      // Frames: reCAPTCHA + Google Maps + GTM Noscript Frame
      "frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/ https://www.google.com/maps/ https://www.googletagmanager.com/",
      // Media: self only
      "media-src 'self'",
      // Objects: none
      "object-src 'none'",
      // Base URI: self only (prevents base tag injection)
      "base-uri 'self'",
      // Form targets: self only
      "form-action 'self'",
      // Upgrade insecure requests in production
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

