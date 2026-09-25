import { useEffect, useRef } from "react";

export interface YTPlayer {
  destroy: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  playVideo: () => void;
  getCurrentTime: () => number;
}

interface PlayerProps {
  videoId: string;
  onReady?: (player: YTPlayer) => void;
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined" || !window.YT) {
    if (apiPromise) return apiPromise;
    apiPromise = new Promise<void>((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previous) previous();
        resolve();
      };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    });
    return apiPromise;
  }
  return Promise.resolve();
}

/**
 * Embeds a YouTube player. The API replaces the target node, so we give it a
 * freshly-created child each mount (survives StrictMode's effect re-run) and
 * hand the live player instance up via onReady.
 */
export default function Player({ videoId, onReady }: PlayerProps) {
  const host = useRef<HTMLDivElement | null>(null);
  const player = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let cancelled = false;

    void loadYouTubeApi().then(() => {
      const yt = window.YT;
      if (cancelled || !host.current || !yt) return;
      const target = document.createElement("div");
      host.current.appendChild(target);
      player.current = new yt.Player(target, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onReady: (e: { target: YTPlayer }) => onReady && onReady(e.target),
        },
      }) as YTPlayer;
    });

    return () => {
      cancelled = true;
      try {
        if (player.current) player.current.destroy();
      } catch {
        /* player already gone */
      }
      player.current = null;
      if (host.current) host.current.innerHTML = "";
    };
  }, [videoId, onReady]);

  return (
    <div className="player">
      <div ref={host} />
    </div>
  );
}
