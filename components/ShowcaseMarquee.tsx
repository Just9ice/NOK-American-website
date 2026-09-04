"use client";

import React from "react";
import Image from "next/image";
import { kekeMediaItems } from "@/data/keke-media";
import { batteryMediaItems } from "@/data/battery-media";
import { solarMediaItems } from "@/data/solar-media";

import { Play, X } from "lucide-react";
import { useState } from "react";

// Combine to get all media (dynamically fetched from the showcases)
const allMedia = [
  ...kekeMediaItems,
  ...batteryMediaItems,
  ...solarMediaItems,
];

// Need a shared type for the item
type MediaItem = typeof allMedia[0];

export function ShowcaseMarquee() {
  const [expandedItem, setExpandedItem] = useState<MediaItem | null>(null);

  return (
    <div className="w-full overflow-hidden bg-zinc-200  py-10  relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] backdrop-blur-xl from-white/5 via-zinc-950 to-zinc-950 opacity-50 z-0"></div>

      <div className="text-center mb-6 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
          Our Innovations
        </span>
      </div>

      <div className="relative z-10 w-full flex overflow-hidden group">
        {/* Left and right gradient masks for a premium fade effect */}
        <div className="absolute left-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>

        {/* The scrolling track */}
        <div className="flex animate-marquee md:group-hover:[animation-play-state:paused] w-max">
          {/* We render the items 4 times for a seamless continuous loop even on ultrawide screens */}
          {[...allMedia, ...allMedia, ...allMedia, ...allMedia].map(
            (item, i) => (
              <div
                key={`${item.src}-${i}`}
                onClick={() => setExpandedItem(item)}
                className="mx-3 sm:mx-4 relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl transition-all duration-300 hover:scale-110 hover:border-white/30 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group/thumb"
                title={item.title}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 96px, 112px"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                      <Play className="text-white w-6 h-6" />
                    </div>
                  </>
                )}
              </div>
            ),
          )}
        </div>
      </div>

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
            className="relative w-[95vw] h-[95vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300"
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
                {expandedItem.category} Innovation
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
