"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react";

// The media items to display in the carousel
export const solarMediaItems = [
  {
    type: "image",
    src: "/images/solar-farming.jpg",
    title: "Agrivoltaics",
    category: "Agricultural",
    alt: "Solar farming",
  },
  {
    type: "video",
    src: "/projects/solar-instal.mp4",
    title: "Solar Installation",
    category: "Installation",
    alt: "Solar panel installation",
  },
  {
    type: "video",
    src: "/projects/cable-tray.mp4",
    title: "Cable Tray",
    category: "Installation",
    alt: "Cable tray installation",
  },
  {
    type: "video",
    src: "/projects/solar-wiring.mp4",
    title: "Solar Wiring",
    category: "Installation",
    alt: "Solar panel wiring",
  },
  {
    type: "image",
    src: "/images/solar.png",
    title: "Residential Solar",
    category: "Residential",
    alt: "Residential solar setup",
  },
  {
    type: "image",
    src: "/projects/cable-tray.jpg",
    title: "Cable Tray",
    category: "Installation",
    alt: "Cable tray installation",
  },
  {
    type: "image",
    src: "/images/solar-scaled.jpg",
    title: "Commercial Solar",
    category: "Commercial",
    alt: "Commercial solar array",
  },
  {
    type: "image",
    src: "/projects/solar-components-3.jpeg",
    title: "Solar Components",
    category: "Hardware",
    alt: "Solar panel components",
  },
];

type MediaItem = (typeof solarMediaItems)[0];

export function SolarShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedItem, setExpandedItem] = useState<MediaItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic (jump one slide every 3.5s)
  useEffect(() => {
    if (isPaused || expandedItem || !scrollContainerRef.current) return;

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
                Premium Solar Solutions
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Clean Energy for All
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Discover our range of sustainable solar power systems for
                residential, commercial, and agricultural use.
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

          {/* Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-12 sm:px-32 py-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* We duplicate the items to create a seamless infinite loop effect visually */}
            {[...solarMediaItems, ...solarMediaItems, ...solarMediaItems].map(
              (item, index) => (
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
              ),
            )}
          </div>

          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>
        </div>

        {/* Navigation Controls (Below the media) */}
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
              {isPaused ? <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-1" /> : <Pause className="h-6 w-6 sm:h-7 sm:w-7" />}
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
          onClick={() => setExpandedItem(null)}
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
            onClick={(e) => e.stopPropagation()}
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
                {expandedItem.category} Solution
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
