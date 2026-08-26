"use client";

import React from "react";
import Image from "next/image";
import { kekeMediaItems } from "./KekeShowcase";
import { batteryMediaItems } from "./BatteryShowcase";
import { solarMediaItems } from "./SolarShowcase";

// Combine and filter to get only images (dynamically fetched from the showcases)
const allImages = [
  ...kekeMediaItems,
  ...batteryMediaItems,
  ...solarMediaItems,
].filter((item) => item.type === "image");

export function ShowcaseMarquee() {
  return (
    <div className="w-full overflow-hidden bg-zinc-200/30 backdrop-blur-xl py-10  relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-zinc-950 to-zinc-950 opacity-50 z-0"></div>

      <div className="text-center mb-6 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
          Our Innovations
        </span>
      </div>

      <div className="relative z-10 w-full flex overflow-hidden group">
        {/* Left and right gradient masks for a premium fade effect */}
        <div className="absolute left-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-r from-zinc-500 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-l from-zinc-500 to-transparent pointer-events-none"></div>

        {/* The scrolling track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {/* We render the images 4 times for a seamless continuous loop even on ultrawide screens */}
          {[...allImages, ...allImages, ...allImages, ...allImages].map(
            (item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="mx-3 sm:mx-4 relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-xl transition-all duration-300 hover:scale-110 hover:border-white/30 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                title={item.title}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
