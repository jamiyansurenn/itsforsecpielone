"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type GiftMusicCtx = {
  playing: boolean;
  toggle: () => void;
  play: () => void;
  iframeKey: number;
};

const GiftMusicContext = createContext<GiftMusicCtx | null>(null);

export function GiftMusicProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const play = useCallback(() => {
    setIframeKey((k) => k + 1);
    setPlaying(true);
  }, []);

  const toggle = useCallback(() => {
    setPlaying((p) => {
      if (!p) setIframeKey((k) => k + 1);
      return !p;
    });
  }, []);

  const value = useMemo(
    () => ({ playing, toggle, play, iframeKey }),
    [playing, toggle, play, iframeKey],
  );

  return (
    <GiftMusicContext.Provider value={value}>{children}</GiftMusicContext.Provider>
  );
}

export function useGiftMusic() {
  const c = useContext(GiftMusicContext);
  if (!c) throw new Error("useGiftMusic needs GiftMusicProvider");
  return c;
}
