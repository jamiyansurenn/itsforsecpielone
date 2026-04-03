"use client";

import { motion } from "framer-motion";

export function HeartbeatMoon() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-16 h-14 w-14 -translate-x-1/2 rounded-full bg-gradient-to-br from-champagne/85 via-white/65 to-lavender/35 shadow-[0_0_44px_rgba(235,200,220,0.28)] md:top-20 md:h-16 md:w-16"
      aria-hidden
      animate={{
        scale: [1, 1.045, 1, 1.03, 1],
        boxShadow: [
          "0 0 36px rgba(235,200,220,0.2)",
          "0 0 52px rgba(228,195,215,0.32)",
          "0 0 36px rgba(235,200,220,0.2)",
          "0 0 48px rgba(220,205,232,0.26)",
          "0 0 36px rgba(235,200,220,0.2)",
        ],
      }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
  );
}
