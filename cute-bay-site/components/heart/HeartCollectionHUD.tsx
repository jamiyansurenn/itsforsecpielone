"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CollectBurst } from "@/components/heart/CollectBurst";
import { HeartShardVisual } from "@/components/heart/HeartShardVisual";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

const ORDER: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5];

export function HeartCollectionHUD() {
  const { count, has, hint, burstKey } = useHeartCollection();

  return (
    <>
      <CollectBurst burstKey={burstKey} origin="top-right" />
      <div className="pointer-events-none fixed right-4 top-4 z-[205] flex flex-col items-end gap-2 md:right-6 md:top-6">
        <AnimatePresence>
          {count > 0 ? (
            <motion.div
              key="heart-hud"
              initial={{ opacity: 0, x: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 14, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <motion.div
                className="glass-panel rounded-[1.35rem] px-3.5 py-3 shadow-[var(--shadow-soft)] backdrop-blur-lg"
                animate={
                  count >= 4
                    ? {
                        boxShadow: [
                          "0 16px 48px -20px rgba(199,164,207,0.18)",
                          "0 20px 52px -16px rgba(232,190,210,0.28)",
                          "0 16px 48px -20px rgba(199,164,207,0.18)",
                        ],
                      }
                    : {}
                }
                transition={
                  count >= 4
                    ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    : undefined
                }
              >
          <p className="text-heart-clue text-right font-sans text-[10px] uppercase tracking-[0.22em]">
            Зүрхний хэсгүүд
          </p>
          <p className="text-heart-clue mt-1 text-right font-serif text-lg tabular-nums">
            {count}/5
          </p>
          <div className="mt-2 flex gap-1.5">
            {ORDER.map((id) => {
              const filled = has(id);
              return (
                <motion.div
                  key={id}
                  className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-white/26"
                  animate={
                    filled
                      ? {
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(248,187,217,0)",
                            "0 0 16px 2px rgba(248,187,217,0.55)",
                            "0 0 0 0 rgba(248,187,217,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 0.55 }}
                >
                  {filled ? (
                    <motion.div
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                      className="h-7 w-7"
                    >
                      <HeartShardVisual
                        fragmentId={id}
                        interaction="pulse"
                        className="h-full w-full"
                      />
                    </motion.div>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-ink-soft/15" />
                  )}
                </motion.div>
              );
            })}
          </div>
          <AnimatePresence>
            {count === 5 ? (
              <motion.div
                key="merged"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-petal/30 to-lavender/25 blur-sm"
              />
            ) : null}
          </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {hint ? (
            <motion.p
              key={hint}
              initial={{ opacity: 0, y: 6, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(3px)" }}
              transition={{ duration: 0.45 }}
              className="text-heart-clue max-w-[220px] text-right font-serif text-[13px] leading-snug md:max-w-[260px] md:text-sm"
            >
              {hint}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
