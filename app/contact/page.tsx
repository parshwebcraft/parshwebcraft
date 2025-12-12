"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const reduce = useReducedMotion();

  function handleSuccess() {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3200);
  }

  const whatsappNumber = "918442097839";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi ParshWebCraft! I want to discuss a website project."
  )}`;

  // EXACT GOLD GLOW (same as About page) — disabled when user prefers reduced motion
  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
      }
    : {};

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center py-12">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35 }}
          className="inline-block text-sm text-[#f3d07a] font-semibold"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.03 }}
          className="text-4xl md:text-5xl font-extrabold mt-3"
        >
          Let’s Build Something <span className="text-[#f3d07a]">Amazing</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.06 }}
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
        >
          Have a project in mind? Contact us and we’ll bring your vision to
          life.
        </motion.p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 py-10">
        {/* LEFT : CONTACT DETAILS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
          whileHover={glowHover}
        >
          <h2 className="text-2xl font-bold mb-3">Contact Details</h2>
          <p className="text-slate-300 mb-6">
            Reach out anytime — I’m always happy to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href={`tel:+91${whatsappNumber}`} className="text-slate-300">
                  +91 84420 97839
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-slate-300">Udaipur, RJ, India</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Social</h4>
              <a
                href="https://www.instagram.com/parshwebcraft/"
                target="_blank"
                rel="noreferrer"
                className="text-[#f3d07a] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT : FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
          whileHover={glowHover}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm onSuccess={handleSuccess} />
        </motion.div>
      </section>

      {/* MAP */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[60%]"
          >
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>

            <motion.div
              className="relative rounded-xl overflow-hidden border border-[rgba(243,208,122,0.25)]"
              whileHover={glowHover}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <iframe
                src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
                loading="lazy"
                className="w-full h-[280px] rounded-xl"
                style={{ border: "0" }}
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
          whileHover={glowHover}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div>
            <h3 className="text-xl font-semibold">
              Ready to Discuss Your Project?
            </h3>
            <p className="text-slate-300">
              Message me and I’ll get back to you within 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-3 md:mt-0 inline-block px-5 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
          >
            Start Now
          </Link>
        </motion.div>
      </section>

      {/* FLOATING WHATSAPP BUTTON (now with svg inside and gold-glow on hover) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed z-50 bottom-6"
        style={{ right: 20 }}
        whileHover={glowHover}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg ring-4 ring-[rgba(243,208,122,0.06)] hover:scale-105 transition-transform">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .036 5.337.036 12c0 2.113.553 4.176 1.601 5.98L0 24l6.2-1.63A11.925 11.925 0 0012 24c6.627 0 12-5.373 12-12 0-3.207-1.252-6.215-3.48-8.52zM12 21.5c-1.8 0-3.53-.47-5.05-1.36l-.36-.21-3.67.97.98-3.58-.23-.37A9.5 9.5 0 1121.5 12 9.514 9.514 0 0112 21.5z" />
            <path d="M17.2 14.1c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.28.3-.47.1-.18 0-.34-.02-.48-.02-.15-.65-1.57-.9-2.16-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.08-.8.37c-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.88 1.2 3.08.15.2 2.07 3.2 5.02 4.49 2.95 1.29 2.95.86 3.48.8.53-.06 1.73-.71 1.98-1.4.25-.69.25-1.28.17-1.4-.08-.12-.27-.2-.57-.35z" />
          </svg>
        </div>
      </motion.a>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-black/60 absolute inset-0" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative z-50 bg-[#0b1220] p-6 rounded-2xl border border-[rgba(243,208,122,0.12)] shadow-2xl w-full max-w-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#f3d07a] flex items-center justify-center text-black text-2xl font-bold shadow-[0_8px_40px_rgba(243,208,122,0.18)] mx-auto mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
              <p className="text-slate-300 mb-4">
                Thanks for reaching out — I’ll get back to you within 24 hours.
              </p>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-4 py-2 rounded-full bg-[rgba(255,255,255,0.04)]"
                >
                  Close
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#f3d07a] text-black font-semibold"
                >
                  Continue on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
