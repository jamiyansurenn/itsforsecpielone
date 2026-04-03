"use client";

import { motion, type SVGMotionProps } from "framer-motion";
import { useId } from "react";

const SHARD_PATHS: Record<
  1 | 2 | 3 | 4 | 5,
  { d: string; opacity?: number }
> = {
  1: {
    d: "M50 18 C38 18 28 28 26 40 C24 52 32 62 50 58 C42 48 40 36 50 18Z",
  },
  2: {
    d: "M50 18 C62 18 72 28 74 40 C76 52 68 62 50 58 C58 48 60 36 50 18Z",
  },
  3: {
    d: "M26 40 C22 52 28 68 42 78 C48 82 50 88 50 92 C38 78 30 62 26 40Z",
  },
  4: {
    d: "M74 40 C78 52 72 68 58 78 C52 82 50 88 50 92 C62 78 70 62 74 40Z",
  },
  5: {
    d: "M50 58 C44 64 42 72 46 80 C48 86 52 86 54 80 C58 72 56 64 50 58Z",
    opacity: 0.95,
  },
};

export type ShardInteraction =
  | "rotate"
  | "pulse"
  | "shimmer"
  | "drop"
  | "particles";

type Props = {
  fragmentId: 1 | 2 | 3 | 4 | 5;
  interaction?: ShardInteraction;
  className?: string;
} & Omit<SVGMotionProps<SVGSVGElement>, "children">;

export function HeartShardVisual({
  fragmentId,
  interaction = "pulse",
  className = "",
  ...rest
}: Props) {
  const uid = useId();
  const gid = `shard-grad-${fragmentId}-${uid}`;
  const shineId = `shard-shine-${fragmentId}-${uid}`;
  const path = SHARD_PATHS[fragmentId];

  const hoverProps =
    interaction === "rotate"
      ? { whileHover: { rotate: 8, scale: 1.04 } }
      : interaction === "pulse"
        ? { whileHover: { scale: 1.08 } }
        : interaction === "shimmer"
          ? { whileHover: { scale: 1.05 } }
          : {};

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`overflow-visible ${className}`}
      initial={interaction === "drop" ? { y: -18, opacity: 0 } : false}
      animate={
        interaction === "drop"
          ? { y: 0, opacity: 1 }
          : interaction === "particles"
            ? { opacity: [0, 0.4, 0.85, 1], scale: [0.85, 1.02, 1] }
            : { opacity: 1 }
      }
      transition={
        interaction === "drop"
          ? { type: "spring", stiffness: 180, damping: 20, delay: 0.15 }
          : interaction === "particles"
            ? { duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }
            : undefined
      }
      {...hoverProps}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,252,253,0.96)" />
          <stop offset="40%" stopColor="rgba(252,228,236,0.85)" />
          <stop offset="75%" stopColor="rgba(236,201,214,0.72)" />
          <stop offset="100%" stopColor="rgba(212,168,188,0.55)" />
        </linearGradient>
        <linearGradient id={shineId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <motion.path
        d={path.d}
        fill={`url(#${gid})`}
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={0.95}
        style={{
          filter:
            "drop-shadow(0 0 8px rgba(255,255,255,0.4)) drop-shadow(0 0 20px rgba(232,192,210,0.45)) drop-shadow(0 0 36px rgba(200,160,190,0.22))",
          opacity: path.opacity ?? 0.92,
        }}
      />
      {interaction === "shimmer" ? (
        <motion.path
          d={path.d}
          fill={`url(#${shineId})`}
          className="pointer-events-none mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0, 0.35, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ) : null}
    </motion.svg>
  );
}
