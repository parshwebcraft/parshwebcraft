// components/Footer.jsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[rgba(255,255,255,0.04)] py-12 bg-gradient-to-t from-[rgba(14,11,43,0.02)] overflow-hidden">
      {/* Decorative gradient blobs (pure CSS, pointer-events-none) */}
      <div aria-hidden className="absolute -right-24 -top-20 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#f3d07a]/60 to-[#e6c35a]/30 pointer-events-none transform rotate-12 animate-blob"></div>
      <div aria-hidden className="absolute -left-32 -bottom-24 w-96 h-96 rounded-full blur-2xl opacity-20 bg-gradient-to-br from-[#7adbf3]/30 to-[#8b6ff3]/20 pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + short */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black transform transition-all duration-300 glow-logo"
                title="ParshWebCraft"
              >
                PW
              </div>
              <div>
                <div className="text-lg font-bold">ParshWebCraft</div>
                <div className="text-sm text-slate-400">Premium Web Solutions</div>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm">
              I build premium websites — modern UI, fast performance, and lead
              automation to grow your business online.
            </p>

            <div className="mt-4 text-sm text-slate-400">
              <div>
                📧{" "}
                <a
                  href="mailto:parshwebcraft@gmail.com"
                  className="underline hover:text-white"
                >
                  parshwebcraft@gmail.com
                </a>
              </div>
              <div className="mt-2">📍 India</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Quick links</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/pricing" className="footer-link">
                  Pricing
                </Link>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#fff2d2] to-[#f3d07a] text-black shadow-[0_6px_18px_rgba(243,208,122,0.12)]">
                  Popular
                </span>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* small services highlight */}
            <div className="mt-6 text-sm text-slate-400">
              <div className="font-medium text-slate-200 mb-2">Other services</div>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/web-design" className="chip">
                  Web Design
                </Link>
                <Link href="/services/seo" className="chip">
                  SEO
                </Link>
                <Link href="/services/ecommerce" className="chip">
                  eCommerce
                </Link>
                <Link href="/services/maintenance" className="chip">
                  Maintenance
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter / small CTA */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Stay updated</h3>
            <p className="text-sm text-slate-300 mb-4">
              Get occasional tips about launching & growing your site.
            </p>

            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your best email"
                className="flex-1 p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(243,208,122,0.18)] focus:border-[#f3d07a] transition"
                aria-label="Your email"
              />
              <button
                className="px-4 rounded-md bg-[#f3d07a] text-black font-semibold hover:scale-[1.02] transition-shadow shadow-[0_6px_18px_rgba(243,208,122,0.12)]"
                aria-label="Join newsletter"
              >
                Join
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-400">
              <div className="mb-2">Follow</div>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="social"
                >
                  {/* simple IG SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="social">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M8 11v6M8 8.5v.01M12 11v6M16 11v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="social">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 border-t border-[rgba(255,255,255,0.03)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} ParshWebCraft. All Rights Reserved.
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-2">
            <span>Made with ❤️ by</span>
            <span className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-slate-200 glow-small">
              ParshWebCraft
            </span>
          </div>
        </div>
      </div>

      {/* component-scoped styles */}
      <style jsx>{`
        /* small blob animation (subtle float) */
        @keyframes blob {
          0% { transform: translateY(0) scale(1) rotate(0); }
          50% { transform: translateY(-10px) scale(1.04) rotate(6deg); }
          100% { transform: translateY(0) scale(1) rotate(0); }
        }
        .animate-blob {
          animation: blob 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Logo glowing circle */
        .glow-logo {
          background: linear-gradient(135deg, #f3d07a, #e6c35a);
          box-shadow: 0 6px 26px rgba(243,208,122,0.16), inset 0 -4px 10px rgba(0,0,0,0.08);
        }
        .glow-logo:hover {
          transform: scale(1.06);
          box-shadow: 0 10px 38px rgba(243,208,122,0.22), 0 0 40px rgba(246,213,110,0.12);
        }

        /* small glow used on badges / name */
        .glow-small {
          box-shadow: 0 8px 30px rgba(243,208,122,0.06);
        }

        /* footer link underline animation */
        .footer-link {
          color: #cbd5e1; /* slate-300 */
          position: relative;
          display: inline-block;
          transition: color 160ms ease;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, rgba(243,208,122,0.95), rgba(230,195,90,0.8));
          transition: width 220ms ease;
          border-radius: 2px;
          box-shadow: 0 6px 18px rgba(243,208,122,0.08);
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-link:hover::after {
          width: 100%;
        }

        /* chips for other services */
        .chip {
          display: inline-block;
          padding: 6px 10px;
          font-size: 12px;
          color: #e6d7b0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: 999px;
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .chip:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 6px 18px rgba(243,208,122,0.06);
        }

        /* social icons hover glow */
        .social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          transition: transform 140ms ease, box-shadow 140ms ease, color 140ms ease;
          color: #cbd5e1;
        }
        .social:hover {
          transform: translateY(-4px);
          color: #000;
          background: linear-gradient(90deg, #fff2d2, #f3d07a);
          box-shadow: 0 10px 30px rgba(243,208,122,0.12), 0 6px 18px rgba(0,0,0,0.12);
        }

        /* small utility because tailwind blur-3xl sometimes not large enough in some setups */
        .blur-3xl {
          filter: blur(36px);
        }
      `}</style>
    </footer>
  );
}
