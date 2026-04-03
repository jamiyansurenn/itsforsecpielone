"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative flex justify-center py-10 md:py-14" aria-hidden>
      <motion.div
        className="h-px w-[min(70%,360px)] bg-gradient-to-r from-transparent via-petal/35 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ originX: 0.5 }}
      />
      <motion.span
        className="absolute top-1/2 text-[10px] text-petal/80"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        ✦
      </motion.span>
    </div>
  );
}
