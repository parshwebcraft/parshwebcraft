// components/FloatingParticles.tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

type Particle = {
  leftPercent: number;
  topPercent: number;
  scale: number;
  delay: number;
  duration: number;
  bg: string;
};

// deterministic color palette
const COLORS = ["#f3d07a", "#9ee7ff", "#ffd6a5", "#c1fba4", "#d0c9ff"];

/**
 * Deterministic function to generate pseudo-random-ish numbers from an index.
 * No Math.random used — result depends only on index and constants.
 */
function deterministicValue(i: number, multiplier: number, offset: number, mod: number) {
  // simple integer arithmetic -> produce 0..mod-1
  const v = (i * multiplier + offset) % mod;
  return v / (mod - 1); // normalized 0..1
}

export default function FloatingParticles() {
  // compute particle set deterministically using useMemo (client-only component)
  const particles = useMemo<Particle[]>(() => {
    const count = 24;
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      // deterministic positions based on index
      const leftPercent = Math.round(deterministicValue(i, 37, 11, 101) * 100); // 0..100
      const topPercent = Math.round(deterministicValue(i, 61, 17, 101) * 100); // 0..100

      // deterministic scale between 0.4 and 1.6
      const scale = 0.4 + deterministicValue(i, 13, 3, 101) * 1.2;

      // deterministic delay and duration
      const delay = 0.2 + deterministicValue(i, 29, 7, 101) * 6; // 0.2..6.2
      const duration = 5 + deterministicValue(i, 19, 5, 101) * 8; // 5..13

      // deterministic color pick
      const colorIndex = Math.floor(deterministicValue(i, 17, 9, COLORS.length) * (COLORS.length - 0.0001));
      const bg = COLORS[colorIndex];

      arr.push({
        leftPercent,
        topPercent,
        scale,
        delay,
        duration,
        bg,
      });
    }
    return arr;
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {particles.map((p, i) => {
        // position style (centered)
        const style: React.CSSProperties = {
          left: `${p.leftPercent}%`,
          top: `${p.topPercent}%`,
          transform: `translate(-50%, -50%) scale(${p.scale})`,
          willChange: "transform, opacity",
          background: p.bg,
        };

        // Use simple, deterministic animation values (no randomness here)
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-6, -28, -6],
            }}
            transition={{
              delay: p.delay,
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full"
            style={style}
          />
        );
      })}
    </div>
  );
}
