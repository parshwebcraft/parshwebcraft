"use client";

import Head from "next/head";
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
    "Hi ParshWebCraft! I want to discuss a website or web development project."
  )}`;

  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
      }
    : {};

  return (
    <>
      {/* ================= SEO META + FAQ SCHEMA ================= */}
      <Head>
        <title>Contact Website Developer in Udaipur | ParshWebCraft</title>
        <meta
          name="description"
          content="Contact ParshWebCraft for professional website design and web development services in Udaipur. Get expert guidance for business websites, SaaS, and digital systems."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can I contact ParshWebCraft for website development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact ParshWebCraft via the contact form on our website or directly through WhatsApp for quick discussion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide website development services in Udaipur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ParshWebCraft provides professional website design and web development services in Udaipur and across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the initial consultation free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the initial discussion is completely free.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* ================= HERO ================= */}
        <section className="max-w-5xl mx-auto text-center py-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-block text-sm text-[#f3d07a] font-semibold"
          >
            Contact Web Developer in Udaipur
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold mt-3"
          >
            Let’s Discuss Your{" "}
            <span className="text-[#f3d07a]">Website Project</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-slate-300 mt-4 max-w-2xl mx-auto"
          >
            Planning a business website, landing page, SaaS platform, or
            internal system? Share your requirements and get honest guidance.
          </motion.p>
        </section>

        {/* ================= CONTACT GRID ================= */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-10">
          {/* LEFT COLUMN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CONTACT DETAILS */}
            <motion.div
              className="glass p-6 rounded-2xl border border-[rgba(255,255,255,0.06)]"
              whileHover={glowHover}
            >
              <h2 className="text-xl font-bold mb-2">Contact Details</h2>
              <p className="text-slate-300 text-sm mb-4">
                Quick response • Clear communication • No obligation discussion
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold">Phone / WhatsApp</h4>
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
                    <h4 className="font-semibold">Service Location</h4>
                    <p className="text-slate-300">Udaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ✅ MAP SECTION (RE-ADDED) */}
            <motion.div
              className="glass rounded-2xl overflow-hidden border border-[rgba(243,208,122,0.2)]"
              whileHover={glowHover}
            >
              <iframe
                title="ParshWebCraft Location - Udaipur"
                src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
                loading="lazy"
                className="w-full h-[260px]"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
            whileHover={glowHover}
          >
            <h2 className="text-2xl font-bold mb-2">
              Get a Free Project Consultation
            </h2>

            <p className="text-slate-300 text-sm mb-6">
              Share your idea and we’ll suggest the best approach — website,
              landing page, or custom system.
            </p>

            <ContactForm onSuccess={handleSuccess} />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M380.9 97.1C339-1.2 256.5-1.1 224.5.4 101.5 6.1 7.5 113.2 7.5 235.1c0 44.2 11.8 87.4 34.3 125.3L0 512l155.5-40.7c35.1 19.1 74.6 29.2 114.9 29.2h.1c123 0 223.5-94.4 223.6-216.4.1-54.7-21.2-106.1-60.2-143zM224.5 438.7h-.1c-33.6 0-66.6-9-95.5-26l-6.9-4.1-92.2 24.1 24.6-89.8-4.5-7.3c-19.3-30.8-29.5-66.4-29.5-103C20.4 135.3 109.8 47.2 224.5 47.2c54.6 0 105.9 21.3 144.5 60.1 38.6 38.8 59.8 90.2 59.7 144.8-.1 114.8-93.4 207.6-203.2 207.6zm111.8-155.4c-6.1-3.1-36.1-17.8-41.7-19.8-5.6-2-9.7-3.1-13.8 3.1-4.1 6.1-15.8 19.8-19.4 23.9-3.6 4.1-7.1 4.6-13.2 1.5-6.1-3.1-25.9-9.5-49.3-30.4-18.2-16.2-30.5-36.2-34.1-42.3-3.6-6.1-.4-9.4 2.7-12.5 2.8-2.8 6.1-7.1 9.2-10.7 3.1-3.6 4.1-6.1 6.1-10.2 2-4.1 1-7.7-.5-10.7-1.5-3.1-13.8-33.2-18.9-45.5-5-12-10-10.4-13.8-10.6-3.6-.2-7.7-.2-11.8-.2-4.1 0-10.7 1.5-16.3 7.7-5.6 6.1-21.4 20.9-21.4 51 0 30.1 21.9 59.2 25 63.3 3.1 4.1 43.1 65.9 104.5 92.4 14.6 6.3 26 10.1 34.9 12.9 14.7 4.7 28.1 4 38.7 2.4 11.8-1.8 36.1-14.8 41.2-29.1 5.1-14.3 5.1-26.5 3.6-29.1-1.5-2.6-5.6-4.1-11.7-7.2z" />
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
              <motion.div className="absolute inset-0 bg-black/60" />
              <motion.div className="relative z-50 bg-[#0b1220] p-6 rounded-2xl max-w-md text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Thanks! Your message is sent.
                </h3>
                <p className="text-slate-300">
                  We’ll review your requirements and get back to you shortly.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
