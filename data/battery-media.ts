// Shared media data for the Battery & Inverter product pages
export const batteryMediaItems = [
  {
    type: "video",
    src: "/projects/inverter-instal.mp4",
    title: "Inverter Installation",
    category: "Installation",
    alt: "Installing inverter and battery system",
  },
  {
    type: "image",
    src: "/projects/Batter-sup.jpeg",
    title: "Battery Supply",
    category: "Storage",
    alt: "Battery supply view",
  },
  {
    type: "video",
    src: "/projects/Inverter-setup.mp4",
    title: "Inverter Setup",
    category: "Installation",
    alt: "Inverter setup process",
  },
  {
    type: "image",
    src: "/projects/battery-2.jpeg",
    title: "Battery System",
    category: "Storage",
    alt: "Secondary battery view",
  },
  {
    type: "video",
    src: "/projects/battery-2.mp4",
    title: "Battery Operations",
    category: "Performance",
    alt: "Battery in operation",
  },
  {
    type: "image",
    src: "/projects/battery.jpeg",
    title: "Battery Detail",
    category: "Storage",
    alt: "Battery close up",
  },
  {
    type: "video",
    src: "/projects/battery.mp4",
    title: "Battery Showcase",
    category: "Overview",
    alt: "Battery overview video",
  },
  {
    type: "video",
    src: "/projects/battries-series.mp4",
    title: "Series Connection",
    category: "Technical",
    alt: "Batteries connected in series",
  },
  {
    type: "image",
    src: "/projects/inverter-wiring.jpeg",
    title: "Inverter Wiring",
    category: "Installation",
    alt: "Detailed inverter wiring",
  },
] as const;

export type BatteryMediaItem = (typeof batteryMediaItems)[number];
