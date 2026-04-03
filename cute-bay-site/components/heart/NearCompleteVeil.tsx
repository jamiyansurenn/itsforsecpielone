"use client";

import { motion } from "framer-motion";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

export function NearCompleteVeil() {
  const { count, collected } = useHeartCollection();
  const on = count >= 4 && !collected.has(5);

  if (!on) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 22%, rgba(252,232,240,0.22), transparent 60%), radial-gradient(ellipse 65% 55% at 82% 78%, rgba(232,218,240,0.16), transparent 52%)",
        }}
      />
    </motion.div>
  );
}
