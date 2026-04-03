"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CollectBurst } from "@/components/heart/CollectBurst";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

type Phase = "idle" | "gather" | "heart" | "message";

const FULL_HEART =
  "M50 88 C20 60 10 40 25 28 C35 18 50 35 50 35 C50 35 65 18 75 28 C90 40 80 60 50 88 Z";

const SHARD_SLOTS = [
  { x: "-32vw", y: "-28vh", r: -14 },
  { x: "30vw", y: "-22vh", r: 10 },
  { x: "-28vw", y: "26vh", r: 8 },
  { x: "32vw", y: "24vh", r: -10 },
  { x: "0vw", y: "34vh", r: 4 },
] as const;

const PATHS = [
  "M50 18 C38 18 28 28 26 40 C24 52 32 62 50 58 C42 48 40 36 50 18Z",
  "M50 18 C62 18 72 28 74 40 C76 52 68 62 50 58 C58 48 60 36 50 18Z",
  "M26 40 C22 52 28 68 42 78 C48 82 50 88 50 92 C38 78 30 62 26 40Z",
  "M74 40 C78 52 72 68 58 78 C52 82 50 88 50 92 C62 78 70 62 74 40Z",
  "M50 58 C44 64 42 72 46 80 C48 86 52 86 54 80 C58 72 56 64 50 58Z",
];

export function HeartCombineCeremony() {
  const { ceremonyOpen, setCeremonyOpen, savedKeepsake, setSavedKeepsake } =
    useHeartCollection();
  const [phase, setPhase] = useState<Phase>("idle");
  const [burst, setBurst] = useState(0);
  const [showKeepsakeLine, setShowKeepsakeLine] = useState(false);

  useEffect(() => {
    if (!ceremonyOpen) {
      setPhase("idle");
      setShowKeepsakeLine(false);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    setPhase("gather");
    const t1 = window.setTimeout(() => setPhase("heart"), 2200);
    const t2 = window.setTimeout(() => setPhase("message"), 4800);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [ceremonyOpen]);

  const onKeepsake = () => {
    setBurst((b) => b + 1);
    setSavedKeepsake(true);
    window.setTimeout(() => setShowKeepsakeLine(true), 420);
  };

  const onClose = () => setCeremonyOpen(false);

  if (!ceremonyOpen) return null;

  return (
    <>
      <CollectBurst burstKey={burst} origin="center" />
      <motion.div className="fixed inset-0 z-[220] flex items-center justify-center p-5 md:p-10">
        <motion.div
          className="absolute inset-0 bg-[#4a3f52]/34 backdrop-blur-sm backdrop-saturate-85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {SHARD_SLOTS.map((s, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 md:h-20 md:w-20"
              initial={{
                x: s.x,
                y: s.y,
                rotate: s.r,
                opacity: 0.85,
                scale: 0.92,
              }}
              animate={
                phase === "gather"
                  ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
                  : phase === "heart" || phase === "message"
                    ? { x: 0, y: 0, scale: 0.15, opacity: 0 }
                    : {}
              }
              transition={{
                delay: i * 0.12,
                duration: 1.35,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <defs>
                  <linearGradient
                    id={`cer-g-${i}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(255,248,252,0.95)" />
                    <stop offset="50%" stopColor="rgba(252,228,236,0.8)" />
                    <stop offset="100%" stopColor="rgba(244,165,194,0.6)" />
                  </linearGradient>
                </defs>
                <path
                  d={PATHS[i]}
                  fill={`url(#cer-g-${i})`}
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={0.9}
                  style={{
                    filter:
                      "drop-shadow(0 0 14px rgba(248,187,217,0.65)) drop-shadow(0 0 28px rgba(232,208,240,0.4))",
                  }}
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {phase === "heart" || phase === "message" ? (
            <motion.div
              key="full-heart"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{
                scale: phase === "message" ? 0.35 : [0.5, 1.05, 1],
                opacity: phase === "message" ? 0 : 1,
              }}
              transition={{
                duration: phase === "message" ? 0.85 : 1.2,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <motion.svg
                viewBox="0 0 100 100"
                className="h-40 w-40 overflow-visible md:h-52 md:w-52"
                animate={
                  phase === "heart"
                    ? {
                        filter: [
                          "drop-shadow(0 0 20px rgba(248,187,217,0.5))",
                          "drop-shadow(0 0 36px rgba(244,165,194,0.75))",
                          "drop-shadow(0 0 20px rgba(248,187,217,0.5))",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2.4, repeat: 1, ease: "easeInOut" }}
              >
                <defs>
                  <radialGradient id="cer-heart-glow" cx="50%" cy="45%" r="65%">
                    <stop offset="0%" stopColor="rgba(255,252,254,0.95)" />
                    <stop offset="45%" stopColor="rgba(252,228,236,0.85)" />
                    <stop offset="100%" stopColor="rgba(232,192,220,0.55)" />
                  </radialGradient>
                </defs>
                <motion.path
                  d={FULL_HEART}
                  fill="url(#cer-heart-glow)"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth={1.1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </motion.svg>
              {phase === "heart" ? (
                <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-petal/25 blur-3xl" />
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "message" ? (
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-lg rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/88 via-white/65 to-blush/45 p-8 text-center shadow-[0_32px_90px_-24px_rgba(74,63,82,0.45)] backdrop-blur-2xl md:p-11"
              initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-br from-petal/35 via-transparent to-lavender/30 opacity-90 blur-xl"
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="font-serif text-[1.15rem] leading-relaxed text-ink md:text-[1.35rem]">
                Энэ бүх жижиг хэсгүүд
                <br />
                зүгээр нэг тараагдсан зүйлс биш.
                <br />
                <br />
                Нэг нэгээрээ жижиг байсан ч
                <br />
                нийлээд
                <br />
                нэг л зүйл хэлэх гэсэн юм.
                <br />
                <br />
                Чи надад онцгой.
              </p>
              <p className="mt-8 font-serif text-xl text-ink md:text-2xl">
                Thank you for existing.
              </p>
              <p className="mt-5 font-serif text-sm text-ink-soft md:text-base">
                Надаас, чамд.
              </p>

              <div className="mt-10 flex flex-col items-center gap-3">
                {!savedKeepsake ? (
                  <motion.button
                    type="button"
                    onClick={onKeepsake}
                    className="rounded-full border border-white/60 bg-white/45 px-10 py-3 font-sans text-sm font-medium text-ink shadow-[var(--shadow-soft)] backdrop-blur-md"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Хадгалж үлдээх
                  </motion.button>
                ) : null}
                <AnimatePresence>
                  {showKeepsakeLine ? (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-serif text-sm text-ink/90"
                    >
                      Чамд зориулж хийсэн.
                    </motion.p>
                  ) : null}
                </AnimatePresence>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 font-sans text-xs text-ink-soft underline-offset-4 hover:underline"
                >
                  Хаах
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
