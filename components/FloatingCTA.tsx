"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const whatsappUrl =
    "https://wa.me/919521347419?text=Hi%20ParshWebCraft%2C%20I%20want%20a%20free%20consultation.";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ParshWebCraft on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg transition hover:-translate-y-1"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>
      <Link
        href="/contact"
        className="hidden rounded-full bg-[#f3d07a] px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-1 sm:inline-flex"
      >
        Free Consultation
      </Link>
    </div>
  );
}
