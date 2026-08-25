import Section from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import { KekeShowcase } from "@/components/KekeShowcase";

export default function ProductPage() {
  return (
    <>
      <div className="bg-green-100/10">
        <Section className="!pt-28 md:!pt-32 !pb-5 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/rick-saw.jpeg"
                alt="NOK Inc Banner"
                width={1200}
                height={600}
                quality={70}
                priority={true}
                className="w-full max-w-[1200px] h-[300px] md:h-[500px] object-fit rounded-3xl"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              Electric Tricycles / Rickshaws
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              High-quality, reliable, and sustainable electric Tricycles &
              Rickshaws for your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center px-4 md:px-20">
              Smart, Sustainable Mobility for Modern Transportation
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc provides a range of reliable electric tricycles designed
              for various applications including passenger transport, cargo
              delivery, and agricultural use. Our solutions provide quiet,
              reliable, efficient and sustainable transportation for your needs.
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
                Our Electric Tricycle Solutions
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Passenger Tricycles</li>
                <li>• Cargo Tricycles</li>
                <li>• Agricultural Tricycles</li>
                <li>• Durable Frame Design</li>
                <li>• High-Efficiency Motors</li>
                <li>• Long-Lasting Batteries</li>
                <li>• Easy-to-Use Controls</li>
                <li>• Reliable Braking Systems</li>
                <li>• Low Maintenance Requirements</li>
                <li>• Optional Solar Charging</li>
                <li>• Smart Fleet Management Systems</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Zero Tailpipe Emissiions</li>
                <li>• Low Running and Maintenance Costs</li>
                <li>• Reduced Noise Pollution</li>
                <li>• Versatile Cargo Options</li>
                <li>• Battery Swapping</li>
                <li>• Long Range Battery</li>
                <li>• Robust Construction</li>
                <li>• Quick Charging Capability</li>
                <li>• Smart Battery Management Systems</li>
                <li>• Optional GPS Tracking</li>
                <li>• Durable, Weather-Resistant Design</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>

      <KekeShowcase />
    </>
  );
}

