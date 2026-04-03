"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#highlights", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <nav
        className="glass-panel mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="group flex items-center gap-2 font-serif text-lg tracking-tight text-ink transition-colors hover:text-ink-soft"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-petal/60 to-lavender/50 text-sm font-semibold text-ink shadow-sm transition-transform group-hover:scale-105">
            LR
          </span>
          <span className="hidden sm:inline">Luna Rose</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-1 text-sm text-ink-soft md:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/50 hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
