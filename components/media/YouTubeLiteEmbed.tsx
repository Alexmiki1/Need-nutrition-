"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type YouTubeLiteEmbedProps = {
  videoId: string;
  title: string;
  playLabel: string;
  placeholderLabel: string;
  className?: string;
};

/**
 * Lightweight embed: shows a thumbnail facade until the user clicks play,
 * then loads a privacy-enhanced YouTube iframe.
 */
export function YouTubeLiteEmbed({
  videoId,
  title,
  playLabel,
  placeholderLabel,
  className,
}: YouTubeLiteEmbedProps) {
  const [active, setActive] = useState(false);

  if (!videoId) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center rounded-need bg-gradient-to-br from-need-green-800 to-need-green-950 text-center text-sm text-white/80",
          className,
        )}
        role="img"
        aria-label={placeholderLabel}
      >
        <div className="px-6">
          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-need-orange text-white">
            ▶
          </span>
          <p>{placeholderLabel}</p>
        </div>
      </div>
    );
  }

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className={cn(
          "group relative block aspect-video w-full overflow-hidden rounded-need bg-need-green-950",
          className,
        )}
        aria-label={playLabel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-need-orange text-2xl text-white shadow-soft transition group-hover:scale-105">
            ▶
          </span>
        </span>
        <span className="sr-only">{title}</span>
      </button>
    );
  }

  return (
    <div className={cn("aspect-video overflow-hidden rounded-need", className)}>
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
