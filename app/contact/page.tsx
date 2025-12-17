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
          Have a project in mind? Share your requirements and we’ll guide you with
          the right solution.
        </motion.p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-10">
        {/* LEFT: DETAILS + MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          {/* CONTACT DETAILS */}
          <motion.div
            className="glass p-6 rounded-2xl border border-[rgba(255,255,255,0.06)]"
            whileHover={glowHover}
          >
            <h2 className="text-xl font-bold mb-2">Contact Details</h2>
            <p className="text-slate-300 text-sm mb-4">
              Reach out anytime — we’re happy to help.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <div className="text-xl">📞</div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href={`tel:+91${whatsappNumber}`}
                    className="text-slate-300"
                  >
                    +91 84420 97839
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-300">
                    Udaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-semibold mb-1">Social</h4>
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

          {/* MAP */}
          <motion.div
            className="glass rounded-2xl border border-[rgba(243,208,122,0.25)] overflow-hidden"
            whileHover={glowHover}
          >
            <iframe
              src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
              loading="lazy"
              className="w-full h-[260px]"
              style={{ border: 0 }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
          whileHover={glowHover}
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm onSuccess={handleSuccess} />
        </motion.div>
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
        >
          <div>
            <h3 className="text-xl font-semibold">
              Ready to Discuss Your Project?
            </h3>
            <p className="text-slate-300">
              Message us and we’ll get back to you within 24 hours.
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

      {/* FLOATING WHATSAPP */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 bottom-6 right-6"
        whileHover={glowHover}
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg ring-4 ring-[rgba(243,208,122,0.08)]">
          <span className="text-white text-xl font-bold">WA</span>
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
            <motion.div className="absolute inset-0 bg-black/60" />
            <motion.div className="relative z-50 bg-[#0b1220] p-6 rounded-2xl max-w-md text-center">
              <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
              <p className="text-slate-300">
                Thanks for reaching out — we’ll contact you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
