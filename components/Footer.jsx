"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  services: [
    { name: "Website Design Udaipur", href: "/web-design-udaipur" },
    { name: "Web Development Udaipur", href: "/web-development-udaipur" },
    { name: "All Services", href: "/services" },
    { name: "Graphic Designing Udaipur", href: "/graphic-designing-udaipur" },
    { name: "Portfolio / Case Studies", href: "/portfolio" },
  ],
  support: [
    { name: "Pricing Plans", href: "/pricing" },
    { name: "Start a Project", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: null, msg: "" });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus({ type: "success", msg: "Subscribed successfully 🎉" });
        setEmail("");
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ type: "error", msg: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#0a0a0c] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-main.png"
                alt="ParshWebCraft"
                width={42}
                height={42}
                className="rounded-full border border-white/10"
              />
              <div>
                <div className="font-bold text-white">ParshWebCraft</div>
                <div className="text-xs text-slate-400">
                  Web & SaaS Development
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400">
              We build high-performance websites and SaaS products focused on
              SEO, speed, and real business growth.
            </p>

            {/* CONTACT */}
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex gap-2 items-center">
                <Mail size={14} className="text-[#f3d07a]" />
                <a href="mailto:parshwebcraft@gmail.com">
                  parshwebcraft@gmail.com
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <MapPin size={14} className="text-[#f3d07a]" />
                <span>Udaipur, Rajasthan</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
              <a href="https://instagram.com/parshwebcraft" target="_blank">
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/parshwebcraft"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com/parshwebcraft" target="_blank">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#f3d07a]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#f3d07a]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-4">
              Get Business Insights
            </h4>

            <p className="text-sm text-slate-400 mb-4">
              Actionable tips on websites, SaaS, and growth.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-2 rounded bg-white/5 border border-white/10 text-sm"
              />

              <button className="px-4 bg-[#f3d07a] text-black rounded text-sm font-semibold">
                {loading ? "..." : "Join"}
              </button>
            </form>

            {status.msg && (
              <p
                className={`mt-2 text-xs ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
              >
                {status.msg}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} ParshWebCraft</span>
          <span>Built for performance</span>
        </div>
      </div>
    </footer>
  );
}
