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
            Planning a business website, landing page, SaaS platform, or internal
            system? Share your requirements and get honest guidance.
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
                    <p className="text-slate-300">
                      Udaipur, Rajasthan, India
                    </p>
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
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M16.01 3C9.383 3 4 8.383 4 15.01c0 2.65.865 5.1 2.33 7.08L4 29l7.1-2.28a11.9 11.9 0 0 0 4.91 1.04h.01C22.627 27.76 28 22.38 28 15.75 28 9.12 22.627 3 16.01 3z" />
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
