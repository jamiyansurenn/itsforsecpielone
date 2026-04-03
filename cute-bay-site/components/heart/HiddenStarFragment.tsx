"use client";

import { motion } from "framer-motion";
import { HeartShardVisual } from "@/components/heart/HeartShardVisual";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

export function HiddenStarFragment() {
  const { has, collect } = useHeartCollection();
  if (has(3)) return null;

  return (
    <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-2">
      <p className="text-heart-clue text-center font-sans text-xs md:text-sm">
        Энд жижиг од — дарна уу ✦
      </p>
      <motion.button
        type="button"
        aria-label="Нууц од"
        onClick={() => collect(3)}
        className="relative flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-petal/45 bg-white/36 shadow-[0_14px_44px_-16px_rgba(210,170,195,0.45)] backdrop-blur-lg md:h-14 md:w-14"
        initial={{ opacity: 0.55, scale: 0.94 }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.94, 1.02, 0.94] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.92 }}
      >
        <span className="absolute text-[11px] text-petal/70" aria-hidden>
          ✦
        </span>
        <HeartShardVisual
          fragmentId={3}
          interaction="shimmer"
          className="pointer-events-none h-9 w-9 opacity-100 md:h-10 md:w-10"
        />
      </motion.button>
    </div>
  );
}
