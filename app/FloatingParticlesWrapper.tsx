// app/FloatingParticlesWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const FloatingParticles = dynamic(
  () => import("../components/FloatingParticles"),
  { ssr: false } // client-only, prevents server/client HTML mismatch
);

export default function FloatingParticlesWrapper() {
  return <FloatingParticles />;
}
