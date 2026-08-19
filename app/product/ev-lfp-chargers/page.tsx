import Section from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <div className="bg-green-100/10">
        <Section className="!pb-5 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/ev.png"
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
              LFP EV Chargers
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              High-quality, reliable, and sustainable LFP EV chargers for your
              needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-3xl font-medium sm:text-4xl mb-6 text-center px-20">
              NOK Inc. EV LFP Chargers Deliver Reliable, Safe, and Efficient
              Charging for All Electric Vehicles
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc delivers a complete line of LFP battery-based EV chargers
              that are safe, reliable, and designed to support the growing need
              for electric vehicle charging infrastructure. These chargers
              combine the safety and longevity of lithium iron phosphate (LFP)
              batteries with advanced charging technology to provide flexible
              charging options for homes, businesses, and multi-unit
              developments. Whether as part of a solar-plus-storage system or a
              standalone charging station, our EV LFP chargers enable efficient,
              cost-effective, and sustainable electric mobility.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-xl text-gray-500 px-5 font-light">
              With a focus on performance and safety, NOK Inc. EV LFP chargers
              support a wide range of electric vehicles and charging needs. Our
              products are designed to integrate seamlessly with solar energy
              systems, providing a complete solution for renewable-powered EV
              charging. By combining the safety and stability of LFP battery
              technology with smart charging features, we deliver charging
              solutions that are reliable, efficient, and ready for the future
              of transportation.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-3xl font-bold text-[#17365d] mb-4">
                Product Highlights
              </h3>
              <ul className="space-y-2 text-xl text-gray-600">
                <li>• Wide Range of Charging Powers</li>
                <li>• Flexible Installation Options</li>
                <li>• Smart Charging Capabilities</li>
                <li>• Safety and Reliability</li>
                <li>• Integrated with Solar and Storage</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-3xl font-bold text-[#17365d] mb-4">
                Applications
              </h3>
              <ul className="space-y-2 text-xl text-gray-600">
                <li>• Residential EV Charging</li>
                <li>• Commercial Fleet Charging</li>
                <li>• Public Charging Stations</li>
                <li>• Multi-Unit Residential Complexes</li>
                <li>• Workplace Charging</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}
