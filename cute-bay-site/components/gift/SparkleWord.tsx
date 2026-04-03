"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SparkleWord({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="relative inline-block"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.span
        className="pointer-events-none absolute -inset-2 -z-10 rounded-lg bg-petal/20 blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.85 }}
      />
      {children}
    </motion.span>
  );
}
