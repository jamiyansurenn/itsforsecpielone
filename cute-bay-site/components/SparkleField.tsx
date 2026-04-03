"use client";

import { motion } from "framer-motion";

const sparklePositions: {
  left: string;
  top: string;
  size: number;
  delay: number;
}[] = [
  { left: "8%", top: "18%", size: 6, delay: 0 },
  { left: "22%", top: "42%", size: 4, delay: 0.4 },
  { left: "78%", top: "12%", size: 5, delay: 0.8 },
  { left: "88%", top: "38%", size: 4, delay: 1.1 },
  { left: "14%", top: "72%", size: 5, delay: 0.2 },
  { left: "52%", top: "8%", size: 3, delay: 1.4 },
  { left: "64%", top: "58%", size: 4, delay: 0.6 },
  { left: "36%", top: "88%", size: 5, delay: 1 },
  { left: "92%", top: "78%", size: 4, delay: 0.3 },
  { left: "46%", top: "48%", size: 3, delay: 1.2 },
];

export function SparkleField({ boost = false }: { boost?: boolean }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
      aria-hidden
    >
      {sparklePositions.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/95 shadow-[0_0_20px_rgba(255,210,230,0.55)]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size * (boost ? 1.15 : 1),
            height: s.size * (boost ? 1.15 : 1),
          }}
          animate={{
            opacity: boost
              ? [0.32, 0.9, 0.4, 0.84, 0.32]
              : [0.18, 0.82, 0.25, 0.76, 0.18],
            scale: boost
              ? [0.93, 1.14, 0.97, 1.1, 0.93]
              : [0.91, 1.1, 0.95, 1.06, 0.91],
            rotate: boost ? [0, 16, -10, 12, 0] : [0, 14, -6, 10, 0],
          }}
          transition={{
            duration: (boost ? 3.6 : 5.2) + (i % 3) * (boost ? 0.35 : 0),
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay * (boost ? 0.65 : 1),
          }}
        />
      ))}
    </div>
  );
}
