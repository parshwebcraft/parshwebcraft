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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "SaaS", href: "/saas/parshvyapar", highlight: true },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const underline = {
    rest: { scaleX: 0, opacity: 0 },
    hover: { scaleX: 1, opacity: 1 },
    active: { scaleX: 1, opacity: 1 },
  };

  const mobileItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const isActive = (href) => {
    if (href.startsWith("/saas")) return pathname.startsWith("/saas");
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled || open
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/logo-main.png"
                alt="ParshWebCraft"
                width={36}
                height={36}
              />
            </div>
            <span className="text-sm font-semibold text-white">
              ParshWebCraft
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial="rest"
                  animate="rest"
                  whileHover={!reduce ? "hover" : undefined}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm transition ${
                      active
                        ? "text-[#f3d07a]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}

                    {/* SaaS Badge */}
                    {item.highlight && (
                      <span className="ml-2 text-[10px] bg-[#f3d07a] text-black px-2 py-0.5 rounded-full font-semibold">
                        New
                      </span>
                    )}

                    {/* Careers Badge */}
                    {item.hiring && (
                      <span className="ml-2 text-[10px] bg-green-500 text-black px-2 py-0.5 rounded-full font-semibold animate-pulse">
                        Hiring
                      </span>
                    )}
                  </Link>

                  {/* UNDERLINE */}
                  <motion.span
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#f3d07a] origin-left"
                    variants={underline}
                    animate={active ? "active" : "rest"}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={
                !reduce
                  ? {
                      scale: 1.05,
                      boxShadow: "0 6px 20px rgba(243,208,122,0.25)",
                    }
                  : {}
              }
              className="ml-2 px-4 py-2 rounded-md bg-[#f3d07a] text-black text-sm font-semibold"
            >
              Get Quote
            </motion.a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        className="md:hidden bg-black/90 backdrop-blur border-t border-white/10 overflow-hidden"
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: reduce ? 0 : 0.3 }}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navItems.map((item, i) => {
            const active = isActive(item.href);

            return (
              <motion.div
                key={item.href}
                variants={mobileItem}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                transition={{ delay: open ? i * 0.05 : 0 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-md text-sm ${
                    active
                      ? "bg-[#f3d07a]/15 text-[#f3d07a]"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>
                    {item.label}

                    {item.highlight && (
                      <span className="ml-2 text-[10px] bg-[#f3d07a] text-black px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}

                    {item.hiring && (
                      <span className="ml-2 text-[10px] bg-green-500 text-black px-2 py-0.5 rounded-full">
                        Hiring
                      </span>
                    )}
                  </span>
                </Link>
              </motion.div>
            );
          })}

          <motion.a
            href="/contact"
            onClick={() => setOpen(false)}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-4 py-3 rounded-md bg-[#f3d07a] text-black font-semibold text-center"
          >
            Get Quote
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}