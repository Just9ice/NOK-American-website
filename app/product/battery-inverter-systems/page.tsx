import Section from "@/components/Section";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ProductPage() {
  return (
    <>
      <div className="bg-green-100/10">
        <Section className="pb-24 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/battery.jpg"
                alt="NOK Inc Banner"
                width={1200}
                height={600}
                quality={70}
                priority={true}
                className="w-[1200px] h-[500px] object-cover rounded-3xl"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-4xl font-medium sm:text-5xl mb-6">
              Battery & Inverter Systems
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              High-quality, reliable, and sustainable battery & inverter systems
              for your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent">
          <div className="text-center">
            <ScrollReveal animation="fade-up" className="bg-white p-8 rounded-xl shadow border border-gray-100 max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-[#17365d] mb-4">
                Features
              </h3>
              <ul className="space-y-2 text-gray-600">
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
