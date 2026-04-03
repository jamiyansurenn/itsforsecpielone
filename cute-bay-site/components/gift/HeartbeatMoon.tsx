"use client";

import { motion } from "framer-motion";

export function HeartbeatMoon() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-16 h-14 w-14 -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-100/90 via-red-50/75 to-red-200/40 shadow-[0_0_44px_rgba(220,80,90,0.22)] md:top-20 md:h-16 md:w-16"
      aria-hidden
      animate={{
        scale: [1, 1.045, 1, 1.03, 1],
        boxShadow: [
          "0 0 36px rgba(248,150,160,0.22)",
          "0 0 52px rgba(220,70,85,0.32)",
          "0 0 36px rgba(248,150,160,0.22)",
          "0 0 48px rgba(235,120,130,0.28)",
          "0 0 36px rgba(248,150,160,0.22)",
        ],
      }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
  );
}
