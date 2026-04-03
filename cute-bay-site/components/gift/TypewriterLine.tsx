"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const line = "Гэхдээ энэ бүхэн чамд л өгөхийг хүссэн зүйл.";

export function TypewriterLine() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= line.length) return;
    const t = window.setTimeout(() => setI((n) => n + 1), 42);
    return () => window.clearTimeout(t);
  }, [i]);

  return (
    <motion.p
      className="font-serif text-lg text-ink/95 md:text-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {line.slice(0, i)}
      {i < line.length ? (
        <span className="ml-0.5 inline-block h-[1.1em] w-px translate-y-0.5 animate-pulse bg-petal align-middle" />
      ) : null}
    </motion.p>
  );
}
