"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  {
    id: "craft",
    title: "Paper & pigment",
    body: "Hand-torn edges, pearlescent foil, and whisper-thin line art—tactile joy you can almost feel through the screen.",
  },
  {
    id: "motion",
    title: "Breathing motion",
    body: "Micro-interactions float instead of snap; easing curves borrowed from petals landing on water.",
  },
  {
    id: "strategy",
    title: "Quiet strategy",
    body: "Positioning that doesn’t shout—story arcs that invite your audience to lean in and stay awhile.",
  },
  {
    id: "collab",
    title: "Kind collaboration",
    body: "Moodboards as love letters, feedback as tea-time chat—every milestone celebrated with confetti (metaphorical, unless you insist).",
  },
];

export function HighlightsSection() {
  const [open, setOpen] = useState<string | null>("craft");

  return (
    <section
      id="highlights"
      className="relative px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-soft">
            Interactive highlights
          </p>
          <h2
            id="highlights-heading"
            className="mt-3 font-serif text-3xl text-ink md:text-4xl"
          >
            Little worlds, gently interactive
          </h2>
          <p className="mt-4 text-base text-ink-soft md:text-lg">
            Tap a petal to unfold the story—each panel opens with a hush, not a
            slam.
          </p>
        </ScrollReveal>
        <ScrollReveal className="mt-14" delay={0.05}>
          <div className="glass-panel grid gap-3 rounded-[2rem] p-3 md:grid-cols-2 md:p-4">
            {highlights.map((h) => {
              const isOpen = open === h.id;
              return (
                <motion.button
                  key={h.id}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : h.id)}
                  className={`relative overflow-hidden rounded-2xl px-5 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    isOpen
                      ? "bg-white/60 shadow-[var(--shadow-card)]"
                      : "bg-white/25 hover:bg-white/45"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-serif text-lg text-ink md:text-xl">
                      {h.title}
                    </span>
                    <motion.span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-petal/70 to-lavender/50 text-lg text-ink"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </span>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                          {h.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
