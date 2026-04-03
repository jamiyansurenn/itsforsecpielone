"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HeartShardVisual } from "@/components/heart/HeartShardVisual";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  { id: "m1", label: "Нэг дурсамж", secret: "Чамтай ярилцахад бүх юм арай удаан болчихдог юм шиг." },
  { id: "m2", label: "Нэг үг", secret: "Чи хэлэх үгээ үргэлж зөөлөн сонсдог тэгээд Чи их сонирхолтой хүн." },
  { id: "m3", label: "Нэг мэдрэмж", secret: "Чамтай ярихад  тайван байдаг ." },
  { id: "m4", label: "Нэг орой", secret: "Нэг удаа орой удаан алхмаар санагддаг." },
];

const HOVER_SHARD_CARD_INDEX = 1;

function MemoryCard({
  label,
  secret,
  delay,
  index,
  showHoverShard,
  onOpenChange,
}: (typeof cards)[number] & {
  delay: number;
  index: number;
  showHoverShard: boolean;
  onOpenChange: (idx: number, open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 32 });
  const sy = useSpring(my, { stiffness: 260, damping: 32 });
  const trail = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, rgba(255,255,255,0.55), rgba(248,187,217,0.15) 45%, transparent 62%)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    mx.set(el.clientWidth / 2);
    my.set(el.clientHeight / 2);
  }, [mx, my]);

  const { has, collect } = useHeartCollection();
  const shardHere = showHoverShard && hovered && !has(2);

  return (
    <ScrollReveal delay={delay}>
      <div
        className="relative"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <motion.button
          ref={ref}
          type="button"
          onClick={() => {
            setOpen((prev) => {
              const next = !prev;
              if (next) {
                queueMicrotask(() => onOpenChange(index, true));
              }
              return next;
            });
          }}
          onPointerMove={(e) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            mx.set(e.clientX - r.left);
            my.set(e.clientY - r.top);
          }}
          onPointerLeave={() => {
            const el = ref.current;
            if (!el) return;
            mx.set(el.clientWidth / 2);
            my.set(el.clientHeight / 2);
          }}
          className="group relative w-full overflow-hidden rounded-[1.35rem] border border-white/38 bg-white/26 text-left shadow-[var(--shadow-card)] backdrop-blur-xl transition-[box-shadow,transform] duration-500 hover:shadow-[0_20px_50px_-18px_rgba(192,132,184,0.2)]"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          aria-expanded={open}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: trail }}
          />
          <div className="relative z-10 px-6 py-6 md:px-7 md:py-7">
            <p className="font-serif text-sm tracking-wide text-ink-soft">
              {label}
            </p>
            <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink/90">
              {open ? secret : "Дарж нууц мессежийг нээнэ үү ✦"}
            </p>
          </div>
        </motion.button>

        {shardHere ? (
          <div className="absolute -right-1 -top-2 z-20 flex flex-col items-center gap-1 md:-right-2 md:-top-3">
            <p className="text-heart-clue text-center text-[10px] font-medium md:text-[11px]">
              Жижиг зүрх — дарна уу
            </p>
            <motion.button
              type="button"
              aria-label="Зүрхний хэсэг цуглуулах"
              initial={{ opacity: 0, y: -8, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              onClick={(e) => {
                e.stopPropagation();
                collect(2);
              }}
              className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-white/45 bg-white/38 shadow-[0_8px_32px_-12px_rgba(200,150,180,0.28)] backdrop-blur-lg md:h-16 md:w-16"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <motion.span
                className="flex h-full w-full items-center justify-center"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HeartShardVisual
                  fragmentId={2}
                  interaction="pulse"
                  className="h-10 w-10 md:h-11 md:w-11"
                />
              </motion.span>
            </motion.button>
          </div>
        ) : null}
      </div>
    </ScrollReveal>
  );
}

export function MemoryFeelingsCards() {
  const { collect, has } = useHeartCollection();
  const memoryFragDone = useRef(false);
  const hasRef = useRef(has);
  hasRef.current = has;

  const onOpenChange = useCallback(
    (_idx: number, open: boolean) => {
      if (!open) return;
      if (memoryFragDone.current || hasRef.current(4)) return;
      memoryFragDone.current = true;
      collect(4);
    },
    [collect],
  );

  return (
    <section
      id="memories"
      className="relative px-6 py-24 md:px-10 md:py-28"
      aria-labelledby="memories-heading"
    >
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2
          id="memories-heading"
          className="font-serif text-2xl text-ink md:text-3xl"
        >
          Жижиг дурсамж, мэдрэмж
        </h2>
        <p className="mt-4 font-sans text-sm text-ink-soft md:text-base">
          Картууд дээр дарвал зөөлөн мессеж гарч ирнэ.
        </p>
      </ScrollReveal>
      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
        {cards.map((c, i) => (
          <MemoryCard
            key={c.id}
            {...c}
            index={i}
            delay={i * 0.06}
            showHoverShard={i === HOVER_SHARD_CARD_INDEX}
            onOpenChange={onOpenChange}
          />
        ))}
      </div>
    </section>
  );
}
