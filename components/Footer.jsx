"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <footer className="relative mt-24 border-t border-[rgba(255,255,255,0.04)] py-12 bg-gradient-to-t from-[rgba(14,11,43,0.02)] overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -right-24 -top-20 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#f3d07a]/60 to-[#e6c35a]/30 pointer-events-none animate-blob"
      />
      <div
        aria-hidden
        className="absolute -left-32 -bottom-24 w-96 h-96 rounded-full blur-2xl opacity-20 bg-gradient-to-br from-[#7adbf3]/30 to-[#8b6ff3]/20 pointer-events-none animate-blob animation-delay-2000"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/images/logo-main.png"
                  alt="ParshWebCraft Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="text-lg font-bold">ParshWebCraft</div>
                <div className="text-sm text-slate-400">
                  Website & SaaS Development Agency
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm">
              ParshWebCraft is a Udaipur-based website and SaaS development
              agency building high-performance business websites, web
              applications, and founder-built SaaS products like{" "}
              <a
                href="https://parshvyapar.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f3d07a] underline hover:text-white"
              >
                ParshVyapar
              </a>
              , focused on long-term business growth.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/parshwebcraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/parshwebcraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/parshwebcraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="mt-4 text-sm text-slate-400 space-y-2">
              <div>
                📧{" "}
                <a
                  href="mailto:parshwebcraft@gmail.com"
                  className="underline hover:text-white"
                >
                  parshwebcraft@gmail.com
                </a>
              </div>
              <div>📍 Serving Udaipur, Rajasthan & Across India</div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/services" className="footer-link">
                  Website & SaaS Services
                </Link>
              </li>
              {/* ⭐ PARSHVYAPAR LINK */}
              <li className="flex items-center gap-2">
                <a
                  href="https://parshvyapar.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link text-[#f3d07a]"
                >
                  ParshVyapar (Live SaaS)
                </a>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-[#f3d07a] text-black">
                  Live
                </span>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Case Studies
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/pricing" className="footer-link">
                  Pricing Plans
                </Link>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#fff2d2] to-[#f3d07a] text-black">
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

            <div className="mt-6 text-sm text-slate-400">
              <div className="font-medium text-slate-200 mb-2">
                Our Expertise
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/services" className="chip">
                  Business Websites
                </Link>
                <Link href="/services" className="chip">
                  SaaS Development
                </Link>
                <Link href="/services" className="chip">
                  Web Applications
                </Link>
                <Link href="/services" className="chip">
                  SEO & Performance
                </Link>
              </div>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/contact" className="footer-link">
                  Project Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">
              Insights & Updates
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Practical insights on website development, SaaS products, SEO, and
              digital business growth.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setSuccess(false);
                if (!email) return;

                setLoading(true);
                const res = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });

                const data = await res.json();
                setLoading(false);

                if (!res.ok) {
                  setError(data.error || "Something went wrong");
                  return;
                }

                setSuccess(true);
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(243,208,122,0.18)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 rounded-md bg-[#f3d07a] text-black font-semibold hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Joining…" : "Join"}
              </button>
            </form>

            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            {success && (
              <p className="mt-2 text-sm text-green-400">
                Subscription successful 🎉
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[rgba(255,255,255,0.03)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} ParshWebCraft. All rights reserved.
          </div>
          <div className="text-sm text-slate-400">
            Crafted with ❤️ by{" "}
            <span className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-slate-200">
              ParshWebCraft
            </span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .footer-link:hover {
          color: white;
        }
        .chip {
          padding: 6px 10px;
          font-size: 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.25s ease;
        }
        .social-icon:hover {
          background: #f3d07a;
          color: black;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
