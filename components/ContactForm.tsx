"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ContactFormProps = {
  onSuccess?: () => void;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // status text for bottom area
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setStatus("");
  }

  function validate() {
    const { name, email, phone, message } = form;
    const next: Record<string, string> = {};

    if (!name.trim()) next.name = "Name is required.";
    if (!message.trim()) next.message = "Message is required.";

    if (!email.trim() && !phone.trim()) {
      next.form = "Please provide either an email or a phone number.";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (phone.trim() && !/^\d{10}$/.test(phone.trim())) {
      next.phone = "Enter a valid 10-digit phone number.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");

    // Re-validate synchronously before submitting
    if (!validate()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) {
        const el = document.querySelector(
          `[name="${firstKey}"]`
        ) as HTMLElement | null;
        if (el) el.focus();
      }
      return;
    }

    setSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("Message sent — thank you!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        try {
          if (typeof onSuccess === "function") onSuccess();
        } catch (err) {
          console.warn("onSuccess callback error", err);
        }
      } else {
        setStatus("Error: " + (data.error || "Server error"));
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      setStatus("Network error: " + message);
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full p-3 rounded-md bg-[rgba(255,255,255,0.02)] border transition";
  const inputError = "border-red-400 ring-1 ring-red-400";
  const inputNormal =
    "border-[rgba(255,255,255,0.04)] focus:border-[#f3d07a] focus:ring-0";

  return (
    <form
      id="contact"
      onSubmit={onSubmit}
      className="max-w-xl mx-auto space-y-6 py-2 px-0"
      noValidate
    >
      <h2 className="text-3xl font-bold mb-1 text-left">Contact Me</h2>
      <p className="text-sm text-slate-400 max-w-md mb-4">
        Share a brief about your project. Provide either an email or phone so I
        can reach out.
      </p>

      {/* NAME */}
      <div>
        <label className="text-sm text-slate-300 mb-1 block">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name && (
          <div id="err-name" className="text-sm text-red-300 mt-1">
            {errors.name}
          </div>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm text-slate-300 mb-1 block">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          placeholder="your@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && (
          <div id="err-email" className="text-sm text-red-300 mt-1">
            {errors.email}
          </div>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="text-sm text-slate-300 mb-1 block">
          Phone (10 digits)
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
          placeholder="9876543210"
          inputMode="numeric"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "err-phone" : undefined}
        />
        {errors.phone && (
          <div id="err-phone" className="text-sm text-red-300 mt-1">
            {errors.phone}
          </div>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm text-slate-300 mb-1 block">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          className={`${inputBase} ${
            errors.message ? inputError : inputNormal
          } h-36`}
          placeholder="Tell me about your project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <div id="err-message" className="text-sm text-red-300 mt-1">
            {errors.message}
          </div>
        )}
      </div>

      {/* BUTTON + STATUS */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold ${
            sending
              ? "bg-[#d8c186] text-black/70 cursor-wait"
              : "bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black"
          } transition`}
          aria-busy={sending}
        >
          {sending ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="4"
                ></circle>
                <path
                  d="M22 12a10 10 0 00-10-10"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        <div className="flex-1">
          {status ? (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`text-sm ${
                status.startsWith("Message sent")
                  ? "text-green-300"
                  : "text-amber-100"
              }`}
              role="status"
            >
              {status}
            </motion.div>
          ) : (
            <div className="text-sm text-slate-400">
              I usually reply within 24 hours.
            </div>
          )}
        </div>
      </div>

      {errors.form && (
        <div className="text-sm text-red-300 mt-2">{errors.form}</div>
      )}
    </form>
  );
}
