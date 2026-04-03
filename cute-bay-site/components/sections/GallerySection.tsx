"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    title: "Blush Blossom Lookbook",
    tag: "Editorial",
    hues: "from-petal/60 via-blush/40 to-cream",
  },
  {
    title: "Velvet Hour Cafe",
    tag: "Branding",
    hues: "from-lavender-deep/55 via-lavender/35 to-white",
  },
  {
    title: "Pearl & Ink Stationery",
    tag: "Print",
    hues: "from-rose-soft/50 via-petal/40 to-lavender-deep/30",
  },
  {
    title: "Softfolio Micro-site",
    tag: "Web",
    hues: "from-blush/55 via-lavender/40 to-cream-deep",
  },
  {
    title: "Moonlace Jewelry",
    tag: "Packaging",
    hues: "from-lavender/50 via-petal/35 to-rose-soft/40",
  },
  {
    title: "Daydream Diary App",
    tag: "UI/UX",
    hues: "from-cream-deep/80 via-petal/45 to-lavender-deep/40",
  },
];

function GalleryCard({
  title,
  tag,
  hues,
  delay,
}: (typeof projects)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 280, damping: 28 });
  const sy = useSpring(my, { stiffness: 280, damping: 28 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(255,255,255,0.55), transparent 55%)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    mx.set(w / 2);
    my.set(h / 2);
  }, [mx, my]);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <ScrollReveal delay={delay}>
      <motion.article
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => {
          const el = ref.current;
          if (!el) return;
          mx.set(el.clientWidth / 2);
          my.set(el.clientHeight / 2);
        }}
        className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/55 shadow-[var(--shadow-card)]"
        initial={{ rotate: 0 }}
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 360, damping: 24 } }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${hues} opacity-95 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent p-6 pt-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/85">
            {tag}
          </p>
          <h3 className="mt-1 font-serif text-xl text-white md:text-2xl">
            {title}
          </h3>
        </div>
        <motion.div
          className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/35 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      </motion.article>
    </ScrollReveal>
  );
}

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative px-6 py-24 md:px-12 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-soft">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-serif text-3xl text-ink md:text-4xl"
          >
            Portfolio vignettes
          </h2>
          <p className="mt-4 text-base text-ink-soft md:text-lg">
            Hover softly—the light follows your cursor like fairy dust on glass.
          </p>
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <GalleryCard key={p.title} {...p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
