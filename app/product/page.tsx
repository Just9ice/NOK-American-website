import { ProductCard } from "@/components/ProductCard";
import Section from "@/components/Section";
import Image from "next/image";

const products = [
  {
    title: "Software & Web Development Services",
    href: "/product/software-solutions/",
    image: "/images/appMerge-1024x709.png",
    bullets: [
      "Enterprise Web, Mobile, & Cloud Applications",
      "Data Engineering, Integration & Automation",
      "AI Architecture, Agents & Generative AI",
    ],
  },
  {
    title: "Battery & Inverter Systems",
    href: "/product/battery-inverter-systems/",
    image: "/images/battery-1024x683.jpg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "Solar Power Systems",
    href: "/product/solar-power-systems/",
    image: "/images/solar-683x1024.jpg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "Electric Tricycles",
    href: "/product/electric-tricycles/",
    image: "/images/WhatsApp-Image-2026-06-11-at-10.35.15-AM-1024x768.jpeg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "EV & LFP Chargers",
    href: "/product/ev-lfp-chargers/",
    image: "/images/Frame-16-2.png",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "Solar & Security Lights",
    href: "/product/solar-security-lights/",
    image: "/images/shawn-xiao-sc_hcc9i-0E-unsplash-1024x768.jpg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "Industrial & Agricultural Equipment",
    href: "/product/industrial-agricultural-equipment/",
    image: "/images/farming-1024x767.jpg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    title: "Solar-Powered Cooling",
    href: "/product/solar-powered-cooling/",
    image: "/images/pavel-neznanov-hzU6dwy0unw-unsplash-683x1024.jpg",
    bullets: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
];

export default function ProductsPage() {
  return (
    <Section className="bg-gray-50 pt-10">
      <div className="text-center mb-16 mt-10">
        <Image
          src="/images/solar-farming.jpg"
          alt="Products"
          width={1000}
          height={500}
          className="rounded-lg mb-8 w-full h-119 object-cover"
        />
        <h1 className="text-4xl font-extrabold text-[#17365d] sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          Explore our range of sustainable energy solutions and software
          engineering services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </Section>
  );
}
