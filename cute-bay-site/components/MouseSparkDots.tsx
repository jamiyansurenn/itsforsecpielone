"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseSparkDots() {
  const [on, setOn] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 35 });
  const sy = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setOn(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!on) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[6] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(248,187,217,0.95)]"
      style={{
        x: sx,
        y: sy,
        translateX: 12,
        translateY: 12,
      }}
      aria-hidden
    />
  );
}
