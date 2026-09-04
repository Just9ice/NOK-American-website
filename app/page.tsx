import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import {
  ShieldCheck,
  BadgeDollarSign,
  CircleCheck,
  ChartNoAxesColumnIncreasing,
  Leaf,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShowcaseMarquee } from "@/components/ShowcaseMarquee";

export default function Home() {
  return (
    <>
      <Section
        className="relative overflow-hidden text-white min-h-screen flex flex-col items-center justify-center text-center"
        bgWhite={false}
      >
        <Image
          src="/images/windFarm.jpg"
          alt="Alternative Energy Source"
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pt-28 sm:pt-32 pb-16 md:py-0">
          <ScrollReveal animation="scale-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
              Alternative Energy. Smarter Mobility.{" "}
              <br className="hidden md:block" />
              Software Engineering, Data, AI Solutions.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-lg sm:text-xl text-gray-200 mb-10 px-2 sm:px-0">
              At{" "}
              <span className="font-[family-name:var(--font-orbitron)] font-bold tracking-widest text-xl">
                <span className="text-2xl">n</span>OK inc
              </span>
              , we help homes, businesses, and communities transition to a
              sustainable future.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-[280px] sm:max-w-none mx-auto">
              <Link
                href="/product/"
                className="w-full sm:w-auto group flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-[50px] text-white bg-green-900 hover:bg-white hover:text-green-600 md:py-4 md:text-lg md:px-10"
              >
                Explore Products
                <span className="ml-2 text-white group-hover:text-green-600 transition-all duration-300 ease-out group-hover:translate-x-2">
                  →
                </span>
              </Link>
              <Link
                href="/contact/"
                className="w-full sm:w-auto group flex items-center justify-center px-8 py-3.5 border border-white/10 backdrop-blur-xl text-base font-medium rounded-[50px] text-white bg-black/10 hover:bg-green-600 hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
              >
                Get in Touch
                <span className="ml-2 text-white group-hover:text-white transition-all duration-300 ease-out group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <ScrollReveal
            animation="slide-in-left"
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/e-filling.png"
              alt="EV Charging Station Close-up"
              width={2200}
              height={2200}
              className="rounded-xl object-cover"
            />
          </ScrollReveal>

          <ScrollReveal
            animation="slide-in-right"
            delay={0.2}
            className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-[#17365d]">
              At{" "}
              <span className="font-[family-name:var(--font-orbitron)] font-bold tracking-wider">
                <span className="text-6xl font-semibold">n</span>OK inc
              </span>
              , we help homes, businesses, and communities
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl">
              take control of their energy and transport. From reliable solar
              power and smart batteries to electric rickshaws and cooling
              systems. Our portfolio is designed to reduce costs, cut emissions,
              and keep life moving forward.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-green-100/10" bgWhite={false}>
        <div className="text-center mb-16 flex justify-center items-center gap-4">
          <ScrollReveal animation="blur-in" className="flex items-center gap-4">
            <Image
              src="/images/nok-logo-cropped.png"
              alt="Nok Inc Logo"
              width={35}
              height={35}
              className="shrink-0"
            />
            <h2 className="text-2xl font-light text-[#17365d] sm:text-3xl">
              Why Choose Us
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <ScrollReveal
            animation="fade-up"
            delay={0.1}
            className="bg-white p-8 rounded-3xl bg-gray-50 md:col-span-2"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-900">
              <ShieldCheck className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Reliable</h3>
            <p className="text-gray-600">
              High-quality components, certified installers, and 24/7 support.
            </p>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={0.2}
            className="bg-white p-8 rounded-3xl md:col-span-2"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-900">
              <BadgeDollarSign className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Affordable
            </h3>
            <p className="text-gray-600">
              Lower running costs than diesel with flexible financing options.
            </p>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={0.3}
            className="bg-white p-8 rounded-3xl md:col-span-2"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-900">
              <CircleCheck className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Simple</h3>
            <p className="text-gray-600">
              Easy to buy, install, and use with plain-language guides and
              mobile apps.
            </p>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={0.4}
            className="bg-white p-8 rounded-3xl md:col-span-2 md:col-start-2"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-900">
              <ChartNoAxesColumnIncreasing className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Scalable</h3>
            <p className="text-gray-600">
              Start small and expand as your needs grow.
            </p>
          </ScrollReveal>

          <ScrollReveal
            animation="fade-up"
            delay={0.5}
            className="bg-white p-8 rounded-3xl md:col-span-2"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-900">
              <Leaf className="text-white h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Sustainable
            </h3>
            <p className="text-gray-600">
              Cleaner, quieter, and better for communities.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <section className="bg-gray-100/10 py-8 px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          animation="scale-in"
          className="relative overflow-hidden rounded-4xl h-[400px] max-w-7xl 2xl:max-w-[90%] mx-auto"
        >
          {/* Background Image */}
          <Image
            src="/images/charging.jpg"
            alt="EV Charging Station"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* Bottom gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content pinned to bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-4">
              {/* Text — top/left */}
              <div className="w-full">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                  Contact Us!
                </h2>
                <p className="text-gray-200 text-lg sm:text-xl max-w-xl">
                  Discover how we can help electrify your homes, fleets, or
                  communities
                </p>
              </div>

              {/* Buttons — bottom right */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto justify-center group inline-flex items-center gap-2 px-5 py-2.5 bg-green-800 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all duration-300"
                >
                  Get in Touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/product/"
                  className="w-full sm:w-auto justify-center group inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white text-sm font-semibold rounded-full transition-all duration-300"
                >
                  Explore Products
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ShowcaseMarquee />
    </>
  );
}
