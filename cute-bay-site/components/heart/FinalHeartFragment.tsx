"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeartShardVisual } from "@/components/heart/HeartShardVisual";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

export function FinalHeartFragment() {
  const { has, collect, fifthRevealed } = useHeartCollection();
  const [shardVisible, setShardVisible] = useState(false);

  const active = fifthRevealed && !has(5);

  useEffect(() => {
    if (!active) {
      setShardVisible(false);
      return;
    }
    const t = window.setTimeout(() => setShardVisible(true), 2600);
    return () => window.clearTimeout(t);
  }, [active]);

  if (!fifthRevealed && !active) return null;
  if (has(5)) return null;

  return (
    <div className="pointer-events-auto relative mt-10 flex w-full max-w-xl flex-col items-center px-1 pb-2">
      <AnimatePresence>
        {active && !shardVisible ? (
          <motion.button
            key="outline"
            type="button"
            aria-label="Сүүлийн хэсгийг илрүүлэх"
            onClick={() => setShardVisible(true)}
            className="text-heart-clue mb-5 min-h-[3.5rem] min-w-[200px] rounded-[2rem] border border-heart-clue/35 bg-white/15 px-5 py-3 font-serif text-sm shadow-[0_0_36px_rgba(159,27,61,0.18)] backdrop-blur-sm md:min-w-[240px] md:text-base"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{
              opacity: [0.65, 1, 0.65],
              boxShadow: [
                "0 0 24px rgba(248,187,217,0.22)",
                "0 0 52px rgba(244,165,194,0.42)",
                "0 0 24px rgba(248,187,217,0.22)",
              ],
            }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            exit={{ opacity: 0, scale: 0.96 }}
          >
            Энд нэг зүйл нуугдсан байж магадгүй…
          </motion.button>
        ) : null}
      </AnimatePresence>

      {active ? (
        <p className="text-heart-clue-soft mb-3 max-w-[280px] text-center font-serif text-xs leading-relaxed md:text-sm">
          Сүүлчийнх нь хамгийн онцгой — зөөлхөн илэрнэ.
        </p>
      ) : null}

      <AnimatePresence>
        {shardVisible && !has(5) ? (
          <motion.button
            key="fifth-shard"
            type="button"
            aria-label="Сүүлийн зүрхний хэсэг"
            initial={{ opacity: 0, scale: 0.45, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.35, y: -80 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={() => collect(5)}
            className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl border border-white/55 bg-white/30 shadow-[0_0_40px_rgba(248,187,217,0.6)] backdrop-blur-xl md:h-[4.75rem] md:w-[4.75rem]"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
          >
            <HeartShardVisual
              fragmentId={5}
              interaction="particles"
              className="h-[3.25rem] w-[3.25rem] md:h-14 md:w-14"
            />
            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-petal/50" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      {active && !shardVisible ? (
        <p className="text-heart-clue mt-3 font-sans text-[10px] uppercase tracking-[0.18em] opacity-90">
          Товшино уу эсвэл хэдэн мөчийг хүлээнэ үү
        </p>
      ) : null}
    </div>
  );
}
