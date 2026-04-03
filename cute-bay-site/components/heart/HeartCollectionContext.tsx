"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type FragmentId = 1 | 2 | 3 | 4 | 5;

const HINTS: Record<number, string> = {
  1: "1/5 — Нэг нь олдлоо.",
  2: "2/5 — Аажмаар бүрдэж байна.",
  3: "3/5 — Одоо илүү ойртлоо.",
  4: "4/5 — Сүүлчийнх нь хамгийн онцгой.",
  5: "5/5 — Одоо бүгд бүрдлээ.",
};

type Ctx = {
  collected: Set<FragmentId>;
  count: number;
  has: (id: FragmentId) => boolean;
  collect: (id: FragmentId) => void;
  hint: string | null;
  burstKey: number;
  ceremonyOpen: boolean;
  setCeremonyOpen: (v: boolean) => void;
  savedKeepsake: boolean;
  setSavedKeepsake: (v: boolean) => void;
  fifthRevealed: boolean;
};

const HeartCollectionContext = createContext<Ctx | null>(null);

export function HeartCollectionProvider({ children }: { children: ReactNode }) {
  const [collected, setCollected] = useState<Set<FragmentId>>(() => new Set());
  const [hint, setHint] = useState<string | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [ceremonyOpen, setCeremonyOpen] = useState(false);
  const [savedKeepsake, setSavedKeepsake] = useState(false);
  const [fifthRevealed, setFifthRevealed] = useState(false);
  const ceremonyScheduledRef = useRef(false);

  const collect = useCallback((id: FragmentId) => {
    setCollected((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setBurstKey((k) => k + 1);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  }, []);

  useEffect(() => {
    const n = collected.size;
    if (n === 0) return;
    const h = HINTS[n];
    if (h) {
      setHint(h);
      const t = window.setTimeout(() => setHint(null), 3400);
      return () => window.clearTimeout(t);
    }
  }, [collected.size]);

  useEffect(() => {
    if (collected.size !== 5 || ceremonyOpen || ceremonyScheduledRef.current) {
      return;
    }
    ceremonyScheduledRef.current = true;
    const t = window.setTimeout(() => setCeremonyOpen(true), 450);
    return () => window.clearTimeout(t);
  }, [collected.size, ceremonyOpen]);

  useEffect(() => {
    if (collected.has(5)) {
      setFifthRevealed(false);
      return;
    }
    if (collected.size >= 4) {
      const t = window.setTimeout(() => setFifthRevealed(true), 800);
      return () => window.clearTimeout(t);
    }
    setFifthRevealed(false);
  }, [collected]);

  const count = collected.size;
  const has = useCallback((id: FragmentId) => collected.has(id), [collected]);

  const value = useMemo(
    () => ({
      collected,
      count,
      has,
      collect,
      hint,
      burstKey,
      ceremonyOpen,
      setCeremonyOpen,
      savedKeepsake,
      setSavedKeepsake,
      fifthRevealed,
    }),
    [
      collected,
      count,
      has,
      collect,
      hint,
      burstKey,
      ceremonyOpen,
      savedKeepsake,
      fifthRevealed,
    ],
  );

  return (
    <HeartCollectionContext.Provider value={value}>
      {children}
    </HeartCollectionContext.Provider>
  );
}

export function useHeartCollection() {
  const c = useContext(HeartCollectionContext);
  if (!c) throw new Error("useHeartCollection needs provider");
  return c;
}
