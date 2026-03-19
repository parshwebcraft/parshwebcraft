"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactClient() {
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

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">
          Let’s Discuss Your Website Project
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Need a website, SaaS, or digital system? Get in touch and we’ll guide
          you with the best approach.
        </p>
      </motion.div>

      {/* WHATSAPP CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-black px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* FORM */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <ContactForm onSuccess={handleSuccess} />
      </motion.div>

      {/* SUCCESS MESSAGE */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0b1220] text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent successfully ✅
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}