"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SecretWhisper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-auto fixed bottom-[6.5rem] left-5 z-[100] md:left-8">
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border border-white/50 bg-white/35 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-ink-soft shadow-sm backdrop-blur-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-expanded={open}
      >
        Нууц
      </motion.button>
      {open ? (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 max-w-[200px] rounded-2xl border border-white/45 bg-white/55 px-3 py-2 font-serif text-[12px] text-ink/90 shadow-sm backdrop-blur-md"
        >
          Зүрхнүүдийг цуглуул — сюрприз тэнд байгаа.
        </motion.p>
      ) : null}
    </div>
  );
}
