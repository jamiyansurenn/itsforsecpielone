"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center px-6 pb-24 pt-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.p
          className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-ink-soft md:text-sm"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          Creative studio · soft art direction
        </motion.p>
        <motion.h1
          className="font-serif text-[clamp(2.6rem,8vw,4.75rem)] font-medium leading-[1.08] tracking-tight text-ink"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Gentle stories,{" "}
          <span className="text-gradient-soft">woven in pastels</span>
          <br className="hidden sm:block" /> &amp; moonlit detail.
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
        >
          I craft dreamy visuals and tender brand worlds—where blush pinks meet
          lavender dusk, and every edge feels like a sigh of silk.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-petal/90 via-rose-soft/85 to-lavender-deep/90 px-9 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] backdrop-blur-sm transition-[box-shadow] hover:shadow-[0_22px_48px_-14px_rgba(192,132,184,0.55)]"
            >
              View portfolio
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="glass-panel inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/55"
            >
              Say hello
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 h-14 w-8 -translate-x-1/2 rounded-full border border-white/60 bg-white/25 shadow-inner backdrop-blur-md"
        aria-hidden
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="mx-auto mt-2 block h-2 w-2 rounded-full bg-gradient-to-b from-petal to-lavender-deep"
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
