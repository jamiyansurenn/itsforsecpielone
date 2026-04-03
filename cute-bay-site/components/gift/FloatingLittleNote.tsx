"use client";

import { motion } from "framer-motion";

export function FloatingLittleNote() {
  return (
    <motion.div
      className="pointer-events-none fixed left-6 top-[42%] z-[15] hidden max-w-[140px] rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-left shadow-[var(--shadow-soft)] backdrop-blur-lg md:block"
      animate={{ y: [0, -10, 0], rotate: [-2, 1, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <p className="font-serif text-[12px] leading-snug text-ink/90">
        Өнөөдөр чи гайхалтай харагдаж байна ✦
      </p>
    </motion.div>
  );
}
