"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const LOVER_VIDEO_ID = "TLatHUqhTnU";

function youtubeEmbedSrc() {
  return `https://www.youtube-nocookie.com/embed/${LOVER_VIDEO_ID}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`;
}

type GiftMusicCtx = {
  playing: boolean;
  toggle: () => void;
  play: () => void;
};

const GiftMusicContext = createContext<GiftMusicCtx | null>(null);

export function GiftMusicProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const play = useCallback(() => {
    setPlaying((wasPlaying) => {
      if (wasPlaying) return true;
      const el = iframeRef.current;
      if (el) el.src = youtubeEmbedSrc();
      return true;
    });
  }, []);

  const toggle = useCallback(() => {
    setPlaying((p) => {
      const el = iframeRef.current;
      if (!p) {
        if (el) el.src = youtubeEmbedSrc();
        return true;
      }
      if (el) el.src = "about:blank";
      return false;
    });
  }, []);

  const value = useMemo(
    () => ({ playing, toggle, play }),
    [playing, toggle, play],
  );

  return (
    <GiftMusicContext.Provider value={value}>
      <iframe
        ref={iframeRef}
        title="Taylor Swift — Lover (YouTube)"
        src="about:blank"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="pointer-events-none fixed bottom-[5.5rem] right-6 z-40 h-[3px] w-[3px] max-h-[3px] max-w-[3px] overflow-hidden opacity-[0.02] [clip:rect(0,0,0,0)]"
      />
      {children}
    </GiftMusicContext.Provider>
  );
}

export function useGiftMusic() {
  const c = useContext(GiftMusicContext);
  if (!c) throw new Error("useGiftMusic needs GiftMusicProvider");
  return c;
}
