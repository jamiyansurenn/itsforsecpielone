"use client";

import { motion } from "framer-motion";

const parts = [
  "Чи ",
  "онцгой ",
  "байх ",
  "гэж ",
  "хичээдэггүй ",
  "мөртлөө ",
  "онцгой ",
  "санагддаг.",
];

export function FadeWords() {
  return (
    <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
      {parts.map((w, idx) => (
        <motion.span
          key={idx}
          className="inline"
          initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: idx * 0.08,
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
}
