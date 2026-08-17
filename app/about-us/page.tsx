import Section from "@/components/Section";
import Image from "next/image";
import { Target, Users, Leaf, Handshake } from "lucide-react";

export default function AboutUsPage() {
  return (
    <>
      <div className="bg-green-100/15">
        <Section className="pt-16 !pb-10 text-center !bg-transparent">
          {/* Page Image Banner */}
          <div className="flex items-center justify-center py-5">
            <Image
              src="/images/about.jpg"
              alt="NOK Inc Banner"
              width={1200}
              height={600}
              quality={100}
              priority={true}
              className="w-[1200px] h-[500px] object-cover rounded-3xl"
            />
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">About Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our commitment to a sustainable and empowered future.
          </p>
          <p className="text-sm mt-4 mx-auto text-gray-600">
            At NOK Inc., our mission is simple: deliver dependable, affordable,
            and sustainable energy and mobility solutions. We believe clean
            power as smarter transport should be practical, accessible, and easy
            to use for everyone - from household to factories.
          </p>
        </Section>
      </div>
      <Section className="!bg-green-100/15 !pt-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-green-900 text-xl">🌿</span>
            <span className="text-green-900 font-medium text-sm tracking-wide uppercase">
              Commitment
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Commitment
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Mission-Driven
            </h3>
            <p className="text-gray-500 text-sm">
              Cut fuel costs, improve uptime, and empower communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Team-Focused
            </h3>
            <p className="text-gray-500 text-sm">
              Local jobs in installation, service, and software support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <Leaf size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-500 text-sm">
              Lower emissions, quieter streets, and safer spaces.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <Handshake size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Partnerships
            </h3>
            <p className="text-gray-500 text-sm">
              Long-term collaboration with utilities, municipalities, & OEMs.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
