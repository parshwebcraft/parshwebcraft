"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ─────────────────────── STAT COUNTER ─────────────────────── */

const stats = [
  { value: 50, suffix: "+", label: "Websites Delivered" },
  { value: 4.9, suffix: "★", label: "Client Rating" },
  { value: 2,  suffix: " hr", label: "Avg. Response Time" },
  { value: 100, suffix: "%", label: "Project Completion" },
];

function CountUp({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setDisplay(target.toFixed(decimals)); return; }

    const duration = 1600;
    const start = performance.now();

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((eased * target).toFixed(decimals));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, decimals, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatStrip() {
  return (
    <section
      aria-label="ParshWebCraft trust statistics"
      className="py-10 border-y border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#f3d07a]">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  decimals={s.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TESTIMONIALS ─────────────────────── */

const testimonials = [
  {
    name: "Hemant Bhat",
    business: "Bahubali Hills Taxi Service",
    tag: "Website Design",
    quote:
      "ParshWebCraft built a professional website for our taxi service and helped us establish a stronger online presence. The process was smooth, communication was excellent, and the final website represented our business perfectly.",
    initials: "HB",
  },
  {
    name: "Mahapragya Vihar",
    business: "Jain Shewtambar Terapanth Samaj",
    tag: "Community Platform",
    quote:
      "We needed a modern digital platform for our community. ParshWebCraft delivered a clean, user-friendly solution and provided support throughout the project. The website made information more accessible for our members.",
    initials: "MV",
  },
  {
    name: "ATDC Udaipur",
    business: "Clinic ERP Project",
    tag: "Custom ERP System",
    quote:
      "The ERP system developed by ParshWebCraft streamlined our operations and improved day-to-day management. Their technical expertise and commitment to delivering a practical solution were impressive.",
    initials: "AU",
  },
  {
    name: "Him Cream Naturals",
    business: "Him Cream Naturals",
    tag: "QR Ordering System",
    quote:
      "The QR ordering system streamlined our customer experience and simplified operations. The implementation was smooth and professionally handled.",
    initials: "HC",
  },
  {
    name: "Mayur Talreja",
    business: "Sip n Crunch — A Fruit Full Delight",
    tag: "Café Website & QR App",
    quote:
      "The Cafe Portfolio Website and QR ordering app streamlined our customer experience and simplified operations. The implementation was smooth and professionally handled.",
    initials: "MT",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#f3d07a] fill-[#f3d07a]"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  /* Auto-advance every 4 s */
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [reduce]);

  /* Scroll track when active changes */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  }, [active]);

  /* Sync dot when user manually scrolls */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
      const idx = Math.round(track.scrollLeft / (cardWidth + 20));
      setActive(Math.min(idx, testimonials.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="py-20 px-6 lg:px-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f3d07a]">
            Real Clients · Real Results
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl md:text-4xl font-bold text-white"
          >
            What Udaipur Business Owners Say
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Every project is built around measurable outcomes — more calls,
            more enquiries, and a digital presence that actually works.
          </p>
        </motion.div>

        {/* Track */}
        <div ref={trackRef} className="testimonial-track">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testimonial-card glass rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 ${
                active === i
                  ? "border-[#f3d07a]/35 shadow-[0_0_28px_rgba(243,208,122,0.12)]"
                  : "border-white/8"
              }`}
            >
              <Stars />
              <blockquote className="text-slate-300 text-sm leading-7 flex-1">
                "{t.quote}"
              </blockquote>
              <footer className="flex items-center gap-3 pt-2 border-t border-white/5">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f3d07a] to-[#c8a84b] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.business}</p>
                </div>
                <span className="ml-auto text-[10px] font-medium text-[#f3d07a] bg-[#f3d07a14] px-2 py-0.5 rounded-full">
                  {t.tag}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={active === i}
              aria-label={`View testimonial from ${t.name}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-[#f3d07a]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/919521347419?text=Hi%20ParshWebCraft%2C%20I%20saw%20your%20client%20reviews%20and%20want%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#f3d07a] hover:underline"
          >
            <span>Discuss your project on WhatsApp</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
