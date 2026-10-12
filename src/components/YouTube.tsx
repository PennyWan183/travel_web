"use client";

import { useState } from "react";
import { LanternIcon } from "./Motifs";

/**
 * A YouTube video that loads only when clicked: the page stays fast and
 * YouTube sets no cookies until the visitor presses play.
 * Without an id it shows a "video coming soon" frame.
 */
export function YouTube({ id, title, playLabel, soonLabel }: { id: string; title: string; playLabel: string; soonLabel: string }) {
  const [playing, setPlaying] = useState(false);

  if (!id) {
    return (
      <div className="tile-frame flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-[20px] text-cobalt-mid">
        <LanternIcon size={34} />
        <span className="text-sm">{soonLabel}</span>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-ink">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title || playLabel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={title ? `${playLabel}: ${title}` : playLabel}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-[20px] border-0 bg-ink p-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-18 w-18 items-center justify-center rounded-full bg-white/95 text-cobalt shadow-lg transition-transform group-hover:scale-105">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
