// Shared media data for the Solar product pages
export const solarMediaItems = [
  {
    type: "video",
    src: "/projects/roofing.mp4",
    title: "Roofing Preparations",
    category: "Roofing Preparations",
    alt: "Roofing Preparations",
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
  {
    type: "video",
    src: "/projects/sol-ar.mp4",
    title: "Solar Rooftop Installation",
    category: "Installation",
    alt: "Solar Rooftop Installation",
  },
] as const;

export type SolarMediaItem = (typeof solarMediaItems)[number];
