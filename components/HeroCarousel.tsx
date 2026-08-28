"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

export interface HeroMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface HeroCarouselProps {
  items: HeroMediaItem[];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const go = useCallback(
    (target: number | "next" | "prev") => {
      if (isAnimating || items.length <= 1) return;
      setIsAnimating(true);
      setCurrentIndex((cur) => {
        if (target === "next") return cur === items.length - 1 ? 0 : cur + 1;
        if (target === "prev") return cur === 0 ? items.length - 1 : cur - 1;
        return target;
      });
      setIsPlaying(true);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, items.length]
  );

  // Auto-advance every 5s for images, 8s for videos
  useEffect(() => {
    resetTimer();
    const delay = items[currentIndex]?.type === "video" ? 8000 : 5000;
    timerRef.current = setTimeout(() => go("next"), delay);
    return resetTimer;
  }, [currentIndex, go, items, resetTimer]);

  // Sync video element play/pause state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  if (!items.length) return null;

  const current = items[currentIndex];

  return (
    // Outer wrapper: needs overflow-visible so buttons can bleed outside on md+
    <div className="relative w-full max-w-[1400px] mx-auto select-none px-0 md:px-14">

      {/* ── Left button (outside the image on md+, inside on mobile) ──────── */}
      {items.length > 1 && (
        <>
          <button
            onClick={() => go("prev")}
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-30
              md:left-0 md:-translate-y-1/2 md:top-[calc(50%-1.5rem)]
              flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              bg-white/90 hover:bg-white
              shadow-xl text-gray-800
              transition-all duration-200
              hover:scale-110 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => go("next")}
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-30
              md:right-0 md:-translate-y-1/2 md:top-[calc(50%-1.5rem)]
              flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              bg-white/90 hover:bg-white
              shadow-xl text-gray-800
              transition-all duration-200
              hover:scale-110 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* ── Slide viewport ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-[520px] xl:h-[620px] w-full bg-zinc-900 shadow-2xl">

        {items.map((item, idx) => (
          <div
            key={item.src + idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={80}
                priority={idx === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1400px"
              />
            ) : (
              <video
                ref={idx === currentIndex ? videoRef : undefined}
                src={item.src}
                autoPlay
                loop
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Caption row */}
            {(item.title || item.category || item.type === "video") && (
              <div className="absolute bottom-5 left-5 z-20 flex flex-wrap items-center gap-2">
                {item.category && (
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {item.category}
                  </span>
                )}
                {item.title && (
                  <span className="text-sm md:text-base font-semibold text-white drop-shadow-lg bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {item.title}
                  </span>
                )}
              </div>
            )}

            {/* Video controls overlay (only on current video slide) */}
            {item.type === "video" && idx === currentIndex && (
              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
                {/* Play / Pause */}
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    /* Pause icon (two bars) */
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                {/* Mute / Unmute */}
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
                  aria-label={muted ? "Unmute video" : "Mute video"}
                >
                  {muted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Dot indicators ──────────────────────────────────────────────────── */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-green-600 w-7"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* show tiny video icon inside active dot if it's a video */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
