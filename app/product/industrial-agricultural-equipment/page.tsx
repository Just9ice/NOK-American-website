import Section from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";
import { IndustrialShowcase } from "@/components/IndustrialShowcase";
import { industrialMediaItems } from "@/data/industrial-media";

export default function ProductPage() {
  const heroItems = industrialMediaItems.map((item) => ({
    type: item.type as "image" | "video",
    src: item.src,
    alt: item.alt,
    title: item.title,
    category: item.category,
  }));

  return (
    <>
      <div className="bg-green-100/10">
        <Section className="!pt-28 md:!pt-32 !pb-5 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5 px-4 md:px-16">
            <ScrollReveal animation="scale-in" className="w-full">
              <HeroCarousel items={heroItems} />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              Industrial & Agricultural Equipment
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              High-quality, reliable, and sustainable Industrial & Agricultural
              Equipments for your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center px-4 md:px-20">
              Innovative Equipments for Industrial, Agricultural &
              Infrastructure
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc delivers advanced equipments designed to provide powerful,
              efficient and sustainable solutions to meet the evolving needs of
              modern agriculture, industry and infrastructure. We provide
              high-quality equipment backed by expert technical support and
              exceptional after-sales service.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 font-light">
              From precision agriculture to heavy-duty industrial machinery, our
              products combine cutting-edge technology, robust engineering, and
              eco-friendly design to optimize performance, minimize downtime,
              and enhance productivity for our valued clients. reliability, and
              accelerate the transition to cleaner, more efficient energy use.{" "}
              <br /> <br />
              Whether you&apos;re expanding your agricultural operations, upgrading
              your industrial facilities, or developing new infrastructure
              projects, NOK Inc has the right equipment and expertise to support
              your goals.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Our Equipment Solutions
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Agricultural Machinery & Implements</li>
                <li>• Industrial Machinery & Equipment</li>
                <li>• Material Handling Equipment</li>
                <li>• Irrigation & Water Management Systems</li>
                <li>• Processing & Production Equipment</li>
                <li>• Construction & Infrastructure Equipment</li>
                <li>• Power Generation & Utility Equipment</li>
                <li>• Equipment Supply, Installation & Support</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Features & Benefits
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• High-Performance Equipment</li>
                <li>• Durable & Reliable Construction</li>
                <li>• Energy-Efficient Operation</li>
                <li>• Increased Productivity</li>
                <li>• Reduced Operating Costs</li>
                <li>• Operator Safety & Compliance</li>
                <li>• Professional Installation & Training</li>
                <li>• Comprehensive Maintenance & After-Sales Support</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Industries We Serve
              </h3>
              <p className="text-lg text-gray-500 mb-3">
                Our equipment solutions support:
              </p>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Agriculture & Agribusiness</li>
                <li>• Manufacturing & Processing</li>
                <li>• Construction & Engineering</li>
                <li>• Mining & Natural Resources</li>
                <li>• Food Processing</li>
                <li>• Logistics & Warehousing</li>
                <li>• Government & Public Infrastructure</li>
                <li>• Commercial & Industrial Enterprises</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Available Solutions
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Farm Machinery & Implements</li>
                <li>• Industrial Processing Equipment</li>
                <li>• Material Handling Systems</li>
                <li>• Irrigation & Water Solutions</li>
                <li>• Construction Equipment</li>
                <li>• Maintenance & Spare Parts Support</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>

      <IndustrialShowcase />
    </>
  );
}
