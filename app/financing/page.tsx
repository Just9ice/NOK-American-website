import Image from "next/image";
import Section from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function FinancingPage() {
  return (
    <>
      <div className="bg-green-100/15">
        <Section className="!bg-transparent !pt-28 md:!pt-32 !pb-10 text-center">
          {/* Page Image Banner */}
          <div className="text-center mb-10 mt-10">
            <ScrollReveal animation="scale-in">
              <Image
                src="/images/financing.jpg"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              Financing
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
              Flexible payment plans and options to make sustainable energy
              accessible.
            </p>
          </ScrollReveal>
        </Section>

        <Section className="!bg-transparent !pt-5">
          {/* Financing Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <ScrollReveal animation="fade-up" delay={0.1} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="bg-green-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                01
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/images/payment.jpg"
                  alt="Flexible Payment Plans"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Flexible Payment Plans
              </h3>
              <p className="text-gray-500 text-sm">
                Spread the cost of your energy systems with affordable monthly
                installments
              </p>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal animation="fade-up" delay={0.2} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="bg-green-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                02
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/images/lease.jpg"
                  alt="Lease-to-Own"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Lease-to-Own
              </h3>
              <p className="text-gray-500 text-sm">
                Start using clean energy today and own your system over time
              </p>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal animation="fade-up" delay={0.3} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="bg-green-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                03
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/images/corpo.jpg"
                  alt="Corporate Financing"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Corporate Financing
              </h3>
              <p className="text-gray-500 text-sm">
                Custom financing solutions for fleet and enterprise deployments
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                We offer various financing options to ensure you can transition to
                cleaner energy and smarter mobility without upfront financial
                strain.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#17365d] mb-4">
                Talk to our experts
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our sales team to discuss customized financing plans
                that suit your business or residential needs.
              </p>
              <a
                href="/contact/"
                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#17365d] hover:bg-green-700"
              >
                Contact Sales
              </a>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}
