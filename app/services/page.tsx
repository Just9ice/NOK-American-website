import Section from "@/components/Section";
import Image from "next/image";
import { HardHat, Wrench, MonitorCheck, Headset } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-green-100/15">
        <Section className="!bg-transparent text-center !pt-28 md:!pt-32">
          {/* Page Image Banner */}
          <div className="text-center mb-10 mt-10">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/services-hero.jpg"
                alt="NOK Inc Banner"
                width={1200}
                height={600}
                quality={70}
                priority={true}
                className="rounded-3xl mb-8 w-full h-[300px] md:h-[500px] object-cover"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#17365d]">
              Our Services
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
              Professional installation, maintenance, and support for all your
              sustainable energy solutions.
            </p>
          </ScrollReveal>
        </Section>
        <Section className="!bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fade-up" delay={0.1} className="bg-white p-8 rounded-xl shadow border border-gray-100 items-center text-center">
              <div className="bg-green-900 p-3 rounded-lg w-fit mx-auto mb-5">
                <HardHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Installation
              </h3>
              <p className="text-gray-400 text-lg">
                Certified teams set up your systems safely and efficiently.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2} className="bg-white p-8 rounded-xl shadow border border-gray-100 items-center text-center">
              <div className="bg-green-900 p-3 rounded-lg w-fit mx-auto mb-5">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Maintenance
              </h3>
              <p className="text-gray-400 text-lg">
                Preventive checks and timely repairs to maximize uptime.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.3} className="bg-white p-8 rounded-xl shadow border border-gray-100 items-center text-center">
              <div className="bg-green-900 p-3 rounded-lg w-fit mx-auto mb-5">
                <MonitorCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Monitoring
              </h3>
              <p className="text-gray-400 text-lg">
                Remote dashboards for batteries, solar, and fleets.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.4} className="bg-white p-8 rounded-xl shadow border border-gray-100 items-center text-center">
              <div className="bg-green-900 p-3 rounded-lg w-fit mx-auto mb-5">
                <Headset className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Support</h3>
              <p className="text-gray-400 text-lg">
                A dedicated help desk, spare-parts stock, and clear SLAs.
              </p>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}
