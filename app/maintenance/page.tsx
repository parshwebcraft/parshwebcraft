"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MaintenancePage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] text-slate-200 px-6">
      <div className="max-w-md w-full text-center">
        {/* ICON */}
        <div className="text-4xl mb-4">🛠️</div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-3">We’re Under Maintenance</h1>

        {/* DESCRIPTION */}
        <p className="text-slate-400 mb-6">
          We’re making some improvements to the site. Please check back in a
          little while.
        </p>

        <div className="text-sm text-slate-500 mb-10">
          Thank you for your patience 🙏
        </div>

        {/* ================= GOLDEN REVEAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={
              !reduce
                ? {
                    boxShadow:
                      "0 12px 40px rgba(18,24,38,0.65), 0 0 42px rgba(243,208,122,0.28)",
                    scale: 1.015,
                  }
                : undefined
            }
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="
              relative overflow-hidden rounded-2xl
              border border-[rgba(243,208,122,0.28)]
              bg-[#0b1220]
              p-6
            "
          >
            {/* Gold Glow */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
              "
            />

            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">
                Need a Website or SaaS System?
              </h3>

              <p className="text-slate-300 text-sm mb-4">
                Even while we’re updating the site, you can reach out to discuss
                your website, SaaS platform, or internal system requirements.
              </p>

              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  rounded-full
                  bg-[#f3d07a]
                  text-black
                  font-semibold
                  hover:brightness-95
                  transition
                "
              >
                Contact ParshWebCraft
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
