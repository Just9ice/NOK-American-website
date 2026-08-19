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
                src="/images/agric.png"
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
              Industrial & Agricultural Equipment
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              High-quality, reliable, and sustainable Industrial & Agricultural
              Equipments for your needs.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-3xl font-medium sm:text-4xl mb-6 text-center px-20">
              Innovative Equipments for Industrial, Agricultural &
              Infrastructure
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc delivers advanced equipments designed to provide powerful,
              efficient and sustainable solutions to meet the evolving needs of
              modern agriculture, industry and infrastructure. We provide
              high-quality equipment backed by expert technical support and
              exceptional after-sales service.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-xl text-gray-500 px-5 font-light">
              From precision agriculture to heavy-duty industrial machinery, our
              products combine cutting-edge technology, robust engineering, and
              eco-friendly design to optimize performance, minimize downtime,
              and enhance productivity for our valued clients. reliability, and
              accelerate the transition to cleaner, more efficient energy use.{" "}
              <br /> <br />
              Whether you're expanding your agricultural operations, upgrading
              your industrial facilities, or developing new infrastructure
              projects, NOK Inc has the right equipment and expertise to support
              your goals.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-3xl font-bold text-[#17365d] mb-4">
                Our Battery & Inverter Solutions
              </h3>
              <ul className="space-y-2 text-xl text-gray-600">
                <li>• Residential Backup Power Systems</li>
                <li>• Commercial & Industrial Power Solutions</li>
                <li>• Lithium Ion Battery Systems</li>
                <li>• Hybrid-Ready Systems</li>
                <li>• Installation & Maintenance Services</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-3xl font-bold text-[#17365d] mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-xl text-gray-600">
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
