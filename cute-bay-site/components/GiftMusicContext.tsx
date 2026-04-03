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

export const LOVER_VIDEO_ID = "TLatHUqhTnU";

/** Шууд харагдах хуудас — утасны WebView дээр embed тогтворгүй үед илүү найдвартай */
export const LOVER_YOUTUBE_WATCH = `https://www.youtube.com/watch?v=${LOVER_VIDEO_ID}`;

function youtubeEmbedSrc() {
  const base = `https://www.youtube.com/embed/${LOVER_VIDEO_ID}`;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "0",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });
  if (typeof window !== "undefined") {
    params.set("origin", window.location.origin);
  }
  return `${base}?${params.toString()}`;
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
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="pointer-events-none fixed bottom-[4.25rem] right-3 z-40 aspect-video w-[min(200px,46vw)] max-w-[200px] rounded-md border-0 opacity-[0.03] outline-none"
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
