"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Website Developer in Udaipur | ParshWebCraft",
  description:
    "Contact ParshWebCraft for professional website design and web development services in Udaipur. Get expert guidance for business websites, SaaS, and digital systems.",
  openGraph: {
    title: "Contact Website Developer in Udaipur | ParshWebCraft",
    description:
      "Get in touch for website development, SaaS, and business systems in Udaipur.",
    url: "https://www.parshwebcraft.in/contact",
    siteName: "ParshWebCraft",
    type: "website",
  },
};

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

  const whatsappNumber = "919521347419";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi ParshWebCraft! I want to discuss a website or web development project."
  )}`;

  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18)",
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
          Planning a business website in Udaipur or anywhere in India? Share
          your requirements and get honest guidance.
        </motion.p>

        {/* CTA BUTTONS */}
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-black px-6 py-3 rounded-lg font-semibold"
          >
            Chat on WhatsApp
          </a>

          <a
            href="#contact-form"
            className="border border-[#f3d07a] px-6 py-3 rounded-lg text-[#f3d07a]"
          >
            Fill Form
          </a>
        </div>

        {/* TRUST LINE */}
        <div className="text-sm text-slate-400 mt-6">
          Trusted by local businesses in Udaipur • Multiple live projects
          delivered
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-10">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
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
                    +91 95213 47419
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

          {/* MAP */}
          <motion.div
            className="glass rounded-2xl overflow-hidden border border-[rgba(243,208,122,0.2)]"
            whileHover={glowHover}
          >
            <iframe
              title="ParshWebCraft Location - Udaipur"
              src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
              loading="lazy"
              className="w-full h-65"
              style={{ border: 0 }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT */}
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
            Share your idea and we’ll suggest the best approach.
          </p>

          <div id="contact-form">
            <ContactForm onSuccess={handleSuccess} />
          </div>
        </motion.div>
      </section>

      {/* FLOATING WHATSAPP */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="fixed z-50 bottom-6 right-6"
        whileHover={glowHover}
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">💬</span>
        </div>
      </motion.a>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative bg-[#0b1220] p-6 rounded-2xl max-w-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Thanks! Your message is sent.
              </h3>
              <p className="text-slate-300 mb-3">
                We’ll review your requirements and get back to you shortly.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                className="text-[#f3d07a] underline"
              >
                Or chat instantly on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}