"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-6 pb-32 pt-20 md:px-12 md:pb-40"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal>
        <div className="glass-panel relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr from-petal/55 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-bl from-lavender-deep/50 to-transparent blur-3xl"
            aria-hidden
          />
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-soft">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl text-ink md:text-4xl"
          >
            Tell me about your next daydream
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            New moon launches, rebrands with heart, or a tiny corner of the
            internet that needs a sprinkle of stardust—I&apos;d love to hear
            from you.
          </p>
          <motion.a
            href="mailto:hello@lunarose.studio"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-10 py-3.5 text-sm font-semibold text-cream shadow-[0_18px_40px_-14px_rgba(74,63,82,0.55)]"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 24px 50px -12px rgba(74,63,82,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            hello@lunarose.studio
          </motion.a>
          <p className="mt-6 text-sm text-ink-soft">
            Replies drift in within 2–3 business days · timezone: somewhere cozy
          </p>
        </div>
      </ScrollReveal>
      <p className="mx-auto mt-16 max-w-lg text-center text-xs text-ink-soft/80">
        © {new Date().getFullYear()} Luna Rose Studio. Crafted with blush tones
        &amp; borrowed starlight.
      </p>
    </section>
  );
}
