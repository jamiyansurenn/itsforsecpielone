"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SoftScrollButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link
        href={href}
        className="relative inline-flex overflow-hidden rounded-full border border-white/38 bg-gradient-to-r from-white/38 to-blush/28 px-10 py-3 font-sans text-sm font-normal text-ink/90 shadow-[var(--shadow-soft)] backdrop-blur-lg"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden
        />
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}
