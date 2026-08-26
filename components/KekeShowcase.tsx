"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react";

// The media items to display in the carousel
const mediaItems = [
  {
    type: "image",
    src: "/projects/ev-image-1.jpg",
    title: "Passenger Keke",
    category: "Passenger",
    alt: "Orange passenger Keke side view",
  },
  {
    type: "video",
    src: "/projects/keke-assembly.mp4",
    title: "Keke Assembly",
    category: "Assembly",
    alt: "Keke assembly process",
  },
  {
    type: "image",
    src: "/projects/keke-cargo.jpeg",
    title: "Cargo Keke",
    category: "Cargo",
    alt: "Cargo Keke side view",
  },
  {
    type: "image",
    src: "/projects/keks-covered.jpeg",
    title: "Covered Passenger Keke",
    category: "Passenger",
    alt: "Covered passenger Keke in warehouse",
  },
  {
    type: "video",
    src: "/projects/e-mobi.mp4",
    title: "E-Mobi Showcase",
    category: "Showcase",
    alt: "E-Mobi electric tricycle video",
  },
  {
    type: "image",
    src: "/projects/keks-full.jpeg",
    title: "Full Passenger Keke",
    category: "Passenger",
    alt: "Full view of covered passenger Keke",
  },
  {
    type: "image",
    src: "/projects/ev-cargo.jpeg",
    title: "EV Cargo Model",
    category: "Cargo",
    alt: "Electric cargo tricycle",
  },
  {
    type: "video",
    src: "/projects/ev.mp4",
    title: "EV Showcase",
    category: "Showcase",
    alt: "EV showcase video",
  },
  {
    type: "image",
    src: "/projects/keks-uncovered.jpeg",
    title: "Open Passenger Keke",
    category: "Passenger",
    alt: "Open top passenger Keke",
  },
  {
    type: "image",
    src: "/projects/ev-image-2.jpg",
    title: "Cargo Bed View",
    category: "Cargo",
    alt: "Cargo bed view of electric tricycle",
  },
  {
    type: "video",
    src: "/projects/keks.mp4",
    title: "Keke Operations",
    category: "Showcase",
    alt: "Keke operations video",
  },
  {
    type: "image",
    src: "/projects/ev-image-3.jpg",
    title: "Passenger Seating",
    category: "Passenger",
    alt: "Passenger seating area of Keke",
  },
  {
    type: "video",
    src: "/projects/keks-build.mp4",
    title: "Building Keke",
    category: "Assembly",
    alt: "Building process of Keke",
  },
  {
    type: "video",
    src: "/projects/keke-loaded.mp4",
    title: "Keke Loaded",
    category: "Showcase",
    alt: "Keke loaded with cargo and workers",
  },
];

type MediaItem = (typeof mediaItems)[0];

export function KekeShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedItem, setExpandedItem] = useState<MediaItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic (jump one slide every 3.5s)
  useEffect(() => {
    // If paused, or if a modal is open, stop auto-scrolling
    if (isPaused || expandedItem || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        // If we are at the end, smoothly go back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll forward by roughly one card width
          // We use Math.min to ensure we don't jump too far on ultrawide screens
          scrollContainerRef.current.scrollBy({
            left: Math.min(500, clientWidth * 0.7),
            behavior: "smooth",
          });
        }
      }
    }, 3500); // 3.5 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, expandedItem]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -Math.min(500, containerWidth * 0.7),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: Math.min(500, containerWidth * 0.7),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-zinc-950 py-24 sm:py-32">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#17365d]/20 via-zinc-950 to-zinc-950"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
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

        {/* Carousel Container */}
        <div
          className="relative z-10 w-full group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Gradient Mask */}
          <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>

          {/* Navigation Controls */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute right-4 sm:right-8 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused ? (
              <Play className="h-5 w-5 ml-1" />
            ) : (
              <Pause className="h-5 w-5" />
            )}
          </button>

          {/* Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-12 sm:px-32 py-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* We duplicate the items to create a seamless infinite loop effect visually */}
            {[...mediaItems, ...mediaItems].map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                onClick={() => setExpandedItem(item)}
                className="cursor-pointer relative flex-none w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] snap-center group/card"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
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

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300"></div>

                {/* Glassmorphism Caption */}
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

          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `,
          }}
        />
      </section>

      {/* Fullscreen Expansion Modal */}
      {expandedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-lg animate-in fade-in duration-300"
          onClick={() => setExpandedItem(null)} // Close when clicking the backdrop
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpandedItem(null);
            }}
            className="absolute top-6 right-6 z-[101] flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the media itself
          >
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
                src={expandedItem.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}

            {/* Expanded Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {expandedItem.title}
              </h3>
              <p className="text-lg text-zinc-300">
                {expandedItem.category} Model
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
