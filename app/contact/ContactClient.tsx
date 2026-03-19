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
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Page Working ✅
      </h1>

      <ContactForm onSuccess={handleSuccess} />

      <AnimatePresence>
        {showSuccess && <div>Success</div>}
      </AnimatePresence>
    </main>
  );
}