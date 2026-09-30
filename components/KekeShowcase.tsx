"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react";
import { kekeMediaItems } from "@/data/keke-media";

type MediaItem = (typeof kekeMediaItems)[number];

const ITEMS = kekeMediaItems as readonly MediaItem[];

export function KekeShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const expandedItem = expandedIndex !== null ? ITEMS[expandedIndex] : null;

  useEffect(() => {
    if (isPaused || expandedIndex !== null || !scrollContainerRef.current)
      return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({
            left: Math.min(500, clientWidth * 0.7),
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, expandedIndex]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -Math.min(500, scrollContainerRef.current.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: Math.min(500, scrollContainerRef.current.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedIndex((prev) =>
      prev === null ? 0 : prev <= 0 ? ITEMS.length - 1 : prev - 1
    );
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedIndex((prev) =>
      prev === null ? 0 : prev >= ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (expandedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") setExpandedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expandedIndex]);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-zinc-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#17365d]/20 via-zinc-950 to-zinc-950"></div>

        <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90%] px-4 sm:px-6 lg:px-8 mb-12">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-[#17365d]/30 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-500/20 mb-4">
                Premium Electric Fleet
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                The Future of Mobility
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Discover our range of locally assembled passenger and cargo
                electric tricycles designed for African roads.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="relative z-10 w-full group"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setIsPaused(true);
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setIsPaused(false);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-12 sm:px-32 py-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...kekeMediaItems, ...kekeMediaItems].map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                onClick={() => setExpandedIndex(index % ITEMS.length)}
                className="cursor-pointer relative flex-none w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] 2xl:w-[1000px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] snap-center group/card"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, (max-width: 1536px) 800px, 1000px"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        {item.category}
                      </span>
                      {item.type === "video" && (
                        <span className="flex items-center text-xs font-medium text-zinc-300 bg-black/50 px-2 py-1 rounded-md">
                          <Play className="h-3 w-3 mr-1" /> Video
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 flex justify-center items-center mt-2 sm:mt-6">
          <div className="flex items-center rounded-full bg-white/5 p-2 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
            <button
              onClick={scrollLeft}
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-transparent text-white transition-all hover:bg-white/10 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="mx-2 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-600/80 text-white backdrop-blur-md transition-all hover:bg-green-500 active:scale-95 shadow-lg shadow-green-900/50 border border-green-400/20"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? (
                <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-1" />
              ) : (
                <Pause className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
            <button
              onClick={scrollRight}
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-transparent text-white transition-all hover:bg-white/10 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`,
          }}
        />
      </section>

      {/* ── Fullscreen Lightbox ── */}
      {expandedItem && expandedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-lg"
          onClick={() => setExpandedIndex(null)}
        >
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}
            style={{ position: "fixed", top: "1.25rem", right: "1.25rem", zIndex: 201 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 text-white shadow-xl hover:bg-zinc-700 active:scale-95 transition-all"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div
            style={{ position: "fixed", top: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: 201 }}
            className="flex items-center rounded-full bg-zinc-800 border border-zinc-600 px-4 py-1.5 shadow-xl"
          >
            <span className="text-sm font-semibold text-white tabular-nums">
              {expandedIndex + 1} / {ITEMS.length}
            </span>
          </div>

          {/* Prev */}
          <button
            onClick={goToPrev}
            style={{ position: "fixed", top: "50%", left: "0.75rem", transform: "translateY(-50%)", zIndex: 201 }}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 text-white shadow-xl hover:bg-zinc-700 active:scale-95 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Next */}
          <button
            onClick={goToNext}
            style={{ position: "fixed", top: "50%", right: "0.75rem", transform: "translateY(-50%)", zIndex: 201 }}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 text-white shadow-xl hover:bg-zinc-700 active:scale-95 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Media */}
          <div
            className="absolute inset-0 flex items-center justify-center p-16 sm:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {expandedItem.type === "image" ? (
                <Image
                  src={expandedItem.src}
                  alt={expandedItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              ) : (
                <video
                  key={expandedItem.src + expandedIndex}
                  src={expandedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-0.5">
                  {expandedItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {expandedItem.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export { kekeMediaItems };
