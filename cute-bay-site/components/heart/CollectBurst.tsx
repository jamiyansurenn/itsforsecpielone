"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CollectBurst({
  burstKey,
  origin = "top-right",
}: {
  burstKey: number;
  origin?: "top-right" | "center";
}) {
  const [particles, setParticles] = useState<
    { id: number; angle: number; dist: number }[]
  >([]);

  useEffect(() => {
    if (burstKey === 0) return;
    const next = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      angle: (i / 10) * Math.PI * 2 + Math.random() * 0.4,
      dist: 28 + Math.random() * 36,
    }));
    setParticles(next);
    const t = window.setTimeout(() => setParticles([]), 700);
    return () => window.clearTimeout(t);
  }, [burstKey]);

  const posClass =
    origin === "top-right"
      ? "right-8 top-24 md:right-10 md:top-28"
      : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      className={`pointer-events-none fixed z-[210] ${posClass}`}
      aria-hidden
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-rose-50 shadow-[0_0_12px_rgba(248,100,115,0.95)]"
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(p.angle) * p.dist,
              y: Math.sin(p.angle) * p.dist,
              opacity: 0,
              scale: 0.3,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
