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
                src="/images/solar.png"
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
              Solar Power Systems
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              High-quality, reliable, and sustainable solar power systems for
              your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center px-4 md:px-20">
              Reliable Solar Power Systems for Homes, Businesses, and Critical
              Operations
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc delivers advanced solar power systems designed to provide
              uninterrupted power, improve energy efficiency, and ensure
              business continuity. Whether as a standalone backup system or
              integrated with solar energy, our solutions provide reliable,
              scalable and future-ready power for residential, commercial and
              industrial environments.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 font-light">
              Our solutions are designed to reduce energy costs, increase
              reliability, and accelerate the transition to cleaner, more
              efficient energy use.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Our Solar Power Systems
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Residential Solar Power Systems</li>
                <li>• Commercial Solar Power Systems</li>
                <li>• Industrial Solar Power Systems</li>
                <li>• Solar Hybrid Systems</li>
                <li>• Solar Installation & Maintenance Services</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• High- and low-voltage lithium packs</li>
                <li>• Hybrid-ready with solar, grid, or generator</li>
                <li>• Remote monitoring via web and mobile</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}

