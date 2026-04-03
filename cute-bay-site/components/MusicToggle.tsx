"use client";

import { motion } from "framer-motion";
import { Music, Volume2 } from "lucide-react";
import { useGiftMusic } from "@/components/GiftMusicContext";

export function MusicToggle() {
  const { playing, toggle } = useGiftMusic();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2">
        {playing ? (
          <span className="glass-panel hidden max-w-[230px] rounded-2xl px-3.5 py-2.5 text-right shadow-sm sm:block">
            <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Одоо тоглож байна
            </span>
            <span className="mt-1 block font-serif text-[12px] leading-snug text-ink">
              Taylor Swift — Lover
            </span>
          </span>
        ) : (
          <span className="glass-panel text-heart-clue-soft hidden max-w-[220px] rounded-2xl px-3 py-2 text-right text-[10px] leading-relaxed shadow-sm sm:block">
            Доорх товч эсвэл «Нээх» —{" "}
            <span className="font-semibold text-heart-clue">Lover</span>
          </span>
        )}
        <motion.button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Дуу зогсоох" : "Хөгжим тоглуулах"}
          className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center overflow-hidden rounded-full border border-white/42 bg-gradient-to-br from-white/48 via-white/30 to-blush/26 text-ink/90 shadow-[var(--shadow-soft)] backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-petal/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8fa]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          {!playing ? (
            <motion.span
              className="absolute inset-0 rounded-full bg-petal/25"
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.12, 0.35] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
          <span className="relative flex h-6 w-6 items-center justify-center text-ink">
            {playing ? (
              <motion.span
                className="flex items-center justify-center"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Volume2 className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </motion.span>
            ) : (
              <Music className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            )}
          </span>
        </motion.button>
      </div>
    </>
  );
}
