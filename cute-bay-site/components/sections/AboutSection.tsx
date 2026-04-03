"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { label: "Years crafting", value: "6+" },
  { label: "Brand worlds", value: "48" },
  { label: "Happy hearts", value: "∞" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center">
        <ScrollReveal>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-petal/50 to-lavender/40 blur-2xl"
              aria-hidden
            />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-soft">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl"
            >
              Hi, I&apos;m Luna—your calm in the creative storm.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              I blend illustration, styling, and digital design into hushed,
              luxurious experiences. My process is slow-intentional sketches,
              layered textures, and breathy motion—so your brand feels like a
              warm blanket and a brand-new journal at once.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              Based somewhere between daylight and golden hour, I work with
              founders, boutiques, and kindred spirits who believe softness is
              strength.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="space-y-5">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="glass-panel flex items-center justify-between rounded-2xl px-6 py-5"
                whileHover={{
                  y: -4,
                  boxShadow: "0 22px 50px -18px rgba(186, 144, 198, 0.4)",
                  transition: { type: "spring", stiffness: 380, damping: 22 },
                }}
              >
                <span className="text-sm text-ink-soft">{s.label}</span>
                <span className="font-serif text-3xl text-gradient-soft">
                  {s.value}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="rounded-2xl border border-white/50 bg-white/35 px-6 py-5 text-sm leading-relaxed text-ink-soft shadow-[var(--shadow-card)] backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <span className="font-medium text-ink">Currently</span> booking
              dreamy packaging, editorial sets, and gentle site art direction
              for spring launches.
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
