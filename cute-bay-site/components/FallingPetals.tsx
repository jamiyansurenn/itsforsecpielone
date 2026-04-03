"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PETAL_COUNT = 22;

function random(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

type Petal = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  hue: "petal" | "lavender";
};

function buildPetals(): Petal[] {
  return Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: `${(random(i) * 100).toFixed(1)}%`,
    delay: random(i + 1) * 8,
    duration: 9 + random(i + 2) * 10,
    size: 10 + random(i + 3) * 14,
    drift: random(i + 4) * 80 - 40,
    hue: random(i + 5) > 0.5 ? "petal" : "lavender",
  }));
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[] | null>(null);

  useEffect(() => {
    setPetals(buildPetals());
  }, []);

  if (!petals) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-[2] overflow-hidden"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[2] overflow-hidden"
      aria-hidden
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className={`petal-fall absolute rounded-[60%_40%_60%_40%] shadow-sm ${
            p.hue === "petal"
              ? "bg-petal/45"
              : "bg-lavender-deep/35"
          }`}
          style={{
            left: p.left,
            top: "-8%",
            width: `${p.size}px`,
            height: `${p.size * 1.15}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--petal-drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
