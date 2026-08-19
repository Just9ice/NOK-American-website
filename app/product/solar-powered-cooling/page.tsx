import Section from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <div className="bg-green-100/10">
        <Section className="!pt-28 md:!pt-32 !pb-5 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/solar-cooling.png"
                alt="NOK Inc Banner"
                width={1200}
                height={600}
                quality={70}
                priority={true}
                className="w-full max-w-[1200px] h-[300px] md:h-[500px] object-cover rounded-3xl"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              Solar Powered Cooling Systems
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              High-quality, reliable, and sustainable solar powered cooling
              systems for your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center px-4 md:px-20">
              Sustainable Cooling Solutions for Homes, Businesses, & Industries
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc delivers advanced solar powered cooling systems designed
              to provide uninterrupted cooling, improve energy efficiency, and
              ensure business continuity.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 font-light">
              Whether you need to cool offices, homes, warehouses, cold storage
              facilities, or agricultural products, our systems are engineered
              for maximum efficiency, performance, and long-term reliability.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Our Cooling Solutions
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Solar Air Conditioning Systems</li>
                <li>• Solar Powered Refrigeration Systems</li>
                <li>• Solar Powered Cold Storage Solutions</li>
                <li>• Solar Powered Evaporative Cooling Systems</li>
                <li>• Solar Powered Ventilation Systems</li>
                <li>• Commercial Refrigeration Systems</li>
                <li>• Industrial Refrigeration Systems</li>
                <li>• Commercial Air Conditioning Systems</li>
                <li>• Industrial Air Conditioning Systems</li>
                <li>• Commercial Ventilation Systems</li>
                <li>• Industrial Ventilation Systems</li>
                <li>• Hybrid Cooling Solutions</li>
                <li>• Off-Grid Cooling Systems</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Key Features & Benefits
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• High-energy-efficient components</li>
                <li>• Solar, grid, or generator</li>
                <li>• Remote monitoring via web and mobile</li>
                <li>
                  • Scalable systems for residential, commercial, and industrial
                  applications
                </li>
                <li>
                  • Environmentally friendly with reduced carbon footprint
                </li>
                <li>• Cost-effective with long-term energy savings</li>
                <li>• Reliable performance in various climates</li>
                <li>• Low maintenance requirements</li>
                <li>• Enhanced energy security and independence</li>
                <li>• Protection against power outages and fluctuations</li>
                <li>• Optimized for solar energy integration</li>
                <li>• Compatible with battery storage systems</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}

