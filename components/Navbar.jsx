"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  /* detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },

    // ✅ NEW SAAS LINK
    { label: "SaaS", href: "/saas", highlight: true },

    { label: "Case Studies", href: "/case-studies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "About Us", href: "/about" },
  ];

  /* motion variants */
  const underline = {
    rest: { scaleX: 0, opacity: 0 },
    active: { scaleX: 1, opacity: 1 },
  };

  const mobileItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled || open
          ? "bg-black/80 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3">
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
              <div className="text-sm font-bold">ParshWebCraft</div>
              <div className="text-xs text-slate-400 -mt-0.5">
                Premium Web Solutions
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial="rest"
                  animate="rest"
                  whileHover={!reduce ? "active" : undefined}
                >
                  <Link
                    href={item.href}
                    className={`relative transition ${
                      active
                        ? "text-[#f3d07a]"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {item.label}

                    {/* ⭐ NEW BADGE */}
                    {item.highlight && (
                      <span className="ml-2 text-[10px] bg-[#f3d07a] text-black px-2 py-0.5 rounded-full font-semibold">
                        New
                      </span>
                    )}
                  </Link>

                  <motion.span
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#f3d07a] origin-left"
                    variants={underline}
                    animate={active ? "active" : "rest"}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              );
            })}

            <motion.a
              href="mailto:parshwebcraft@gmail.com"
              whileHover={
                !reduce
                  ? {
                      scale: 1.06,
                      boxShadow: "0 6px 22px rgba(243,208,122,0.22)",
                    }
                  : {}
              }
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold"
            >
              Get Quote
            </motion.a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md border border-white/10"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        className="md:hidden bg-black/85 backdrop-blur border-t border-white/10 overflow-hidden"
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: reduce ? 0 : 0.3 }}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navItems.map((item, i) => {
            const active = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                variants={mobileItem}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                transition={{ delay: open ? i * 0.04 : 0 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-md transition ${
                    active
                      ? "bg-[#f3d07a]/15 text-[#f3d07a]"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            );
          })}

          <a
            href="mailto:parshwebcraft@gmail.com"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold text-center"
          >
            Get Quote
          </a>
        </div>
      </motion.div>
    </header>
  );
}
