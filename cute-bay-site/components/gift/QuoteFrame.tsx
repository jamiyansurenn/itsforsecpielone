"use client";

import type { ReactNode } from "react";

export function QuoteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-xl px-2">
      <span
        className="pointer-events-none absolute -left-1 top-0 font-serif text-5xl leading-none text-petal/35 md:text-6xl"
        aria-hidden
      >
        “
      </span>
      <div className="border-y border-white/30 bg-white/18 py-10 pl-6 pr-4 backdrop-blur-lg md:py-12 md:pl-10 md:pr-8">
        {children}
      </div>
      <span
        className="pointer-events-none absolute -bottom-4 right-2 font-serif text-5xl leading-none text-petal/35 md:text-6xl"
        aria-hidden
      >
        ”
      </span>
    </div>
  );
}
