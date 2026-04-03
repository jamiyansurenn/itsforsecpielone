"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export function PageEntrance({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!done ? (
          <motion.div
            key="veil"
            className="fixed inset-0 z-[300] flex items-center justify-center bg-[#faf7f9]"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="h-12 w-12 rounded-full border border-white/45 bg-gradient-to-br from-blush/50 to-lavender/45 shadow-[var(--shadow-soft)]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className={!done ? "opacity-0" : "opacity-100 transition-opacity duration-700 ease-out"}>
        {children}
      </div>
    </>
  );
}
