"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "About Me", href: "/about" },
  ];

  // Motion variants
  const itemContainer = {
    rest: {},
    hover: {},
  };

  const underlineVariants = {
    rest: { scaleX: 0, opacity: 0 },
    hover: { scaleX: 1, opacity: 1 },
  };

  const linkFade = {
    rest: { opacity: 1, y: 0 },
    hover: { opacity: 1, y: -3 },
  };

  // Mobile menu item variants (fade + up)
  const mobileItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all ${
        scrolled ? "backdrop-blur bg-black/40 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f3d07a] to-[#e6c35a] flex items-center justify-center font-bold text-black">
              PW
            </div>
            <div>
              <div className="text-sm font-bold">ParshWebCraft</div>
              <div className="text-xs text-slate-400 -mt-0.5">
                Premium Web Solutions
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="relative"
                variants={itemContainer}
                initial="rest"
                whileHover={!reduce ? "hover" : undefined}
                animate="rest"
                style={{ display: "inline-block" }}
              >
                <motion.div
                  variants={linkFade}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <Link href={item.href} className="text-slate-200 hover:text-white">
                    {item.label}
                  </Link>
                </motion.div>

                {/* underline */}
                <motion.span
                  className="absolute left-0 right-0 bottom-[-8px] h-[2px] origin-left bg-[#f3d07a]"
                  variants={underlineVariants}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
                />
              </motion.div>
            ))}

            {/* Get Quote button with premium hover */}
            <motion.div
              whileHover={
                !reduce
                  ? { scale: 1.06, boxShadow: "0 6px 22px rgba(243,208,122,0.22)" }
                  : {}
              }
              whileTap={!reduce ? { scale: 0.96 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <a
                href="mailto:parshwebcraft@gmail.com"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold"
              >
                Get Quote
              </a>
            </motion.div>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md border border-[rgba(255,255,255,0.06)]"
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
      </div>

      {/* Mobile menu panel */}
      <motion.div
        className={`md:hidden overflow-hidden transition-all duration-300`}
        style={{ maxHeight: open ? 380 : 0 }}
        // small animation for open/close (disable if reduced-motion)
        animate={open ? { maxHeight: 380 } : { maxHeight: 0 }}
        transition={{ duration: reduce ? 0 : 0.35, ease: "easeInOut" }}
      >
        <div className="px-6 pb-6">
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                variants={mobileItem}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                transition={{ delay: open ? i * 0.03 : 0, duration: 0.18 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 rounded-md text-slate-200 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.18, delay: 0.06 }}
            >
              <a
                href="mailto:parshwebcraft@gmail.com"
                className="mt-2 inline-block px-4 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold text-center"
              >
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
