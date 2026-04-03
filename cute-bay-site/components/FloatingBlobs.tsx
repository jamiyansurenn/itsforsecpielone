"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const blobs = [
  {
    className:
      "left-[-12%] top-[8%] h-[min(420px,70vw)] w-[min(420px,70vw)] bg-gradient-to-br from-petal/45 via-rose-soft/32 to-lavender-deep/28",
    animationDuration: 38,
    delay: 0,
    parallax: 0.1,
  },
  {
    className:
      "right-[-8%] top-[22%] h-[min(340px,55vw)] w-[min(340px,55vw)] bg-gradient-to-tr from-lavender/50 via-blush/35 to-petal/38",
    animationDuration: 32,
    delay: 2,
    parallax: -0.06,
  },
  {
    className:
      "bottom-[-10%] left-[18%] h-[min(380px,65vw)] w-[min(380px,65vw)] bg-gradient-to-tl from-rose-soft/36 via-lavender-deep/25 to-cream/45",
    animationDuration: 36,
    delay: 4,
    parallax: 0.12,
  },
  {
    className:
      "bottom-[12%] right-[12%] h-[min(260px,45vw)] w-[min(260px,45vw)] bg-gradient-to-bl from-petal/38 to-lavender/35 opacity-70",
    animationDuration: 28,
    delay: 1,
    parallax: -0.08,
  },
];

function ParallaxBlob({
  className,
  animationDuration,
  delay,
  parallax,
}: (typeof blobs)[number]) {
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 420 * parallax]);
  const y = useSpring(rawY, { stiffness: 45, damping: 28 });

  return (
    <motion.div
      className={`absolute rounded-[52%] blur-[64px] ${className}`}
      style={{ y }}
      animate={{
        x: [0, 18, -14, 8, 0],
        scale: [1, 1.025, 0.99, 1.015, 1],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function FloatingBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {blobs.map((b, i) => (
        <ParallaxBlob key={i} {...b} />
      ))}
    </div>
  );
}
