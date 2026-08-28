import Section from "@/components/Section";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";

const softwareHeroItems = [
  {
    type: "image" as const,
    src: "/images/apps.png",
    alt: "Software Applications",
    title: "Custom Software",
    category: "Engineering",
  },
  {
    type: "image" as const,
    src: "/images/appMerge-1024x709.png",
    alt: "Application Integration",
    title: "App Integration",
    category: "Cloud & Platform",
  },
  {
    type: "image" as const,
    src: "/images/monitoring.jpg",
    alt: "System Monitoring",
    title: "Observability",
    category: "DevOps",
  },
  {
    type: "image" as const,
    src: "/images/payment.jpg",
    alt: "Payment Systems",
    title: "Payment Integrations",
    category: "FinTech",
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <>
      <div className="bg-green-100/10">
        {/* ── Hero Carousel ─────────────────────────────────── */}
        <Section className="!pt-28 md:!pt-32 !pb-5 text-center !bg-transparent">
          <div className="flex items-center justify-center py-5 px-4 md:px-16">
            <ScrollReveal animation="scale-in" className="w-full">
              <HeroCarousel items={softwareHeroItems} />
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              Software Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Intelligent software engineering, data, and AI solutions that
              power industry at scale.
            </p>
          </ScrollReveal>
        </Section>

        {/* ── Intro Copy ────────────────────────────────────── */}
        <Section className="!bg-transparent !py-2">
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center px-4 md:px-20">
              Powering Industry Through Intelligent Software Engineering, Data,
              and AI Solutions
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 pb-3 font-light">
              NOK Inc designs, builds, modernizes, and operates production
              software across cloud, data, AI, web, mobile, and distributed
              systems. We work from architecture through implementation,
              deployment, observability, and ongoing support—giving clients one
              engineering partner accountable for delivery.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <p className="max-w-5xl mx-auto text-lg sm:text-xl text-gray-500 px-5 font-light">
              We design and deliver software for the cloud, data, AI, and
              platforms. From mobile and web apps to enterprise systems, APIs,
              data pipelines, and AI-driven intelligence.
            </p>
          </ScrollReveal>
        </Section>

        {/* ── Service Cards ─────────────────────────────────── */}
        <Section className="!bg-transparent !py-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Our Software Services
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Application Engineering</li>
                <li>• Cloud &amp; Platform Engineering</li>
                <li>• Data &amp; AI Engineering</li>
                <li>• DevOps &amp; Security</li>
                <li>• Systems Integration</li>
                <li>• End-to-End Delivery</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17365d] mb-4">
                Key Capabilities
              </h3>
              <ul className="space-y-2 text-lg sm:text-xl text-gray-600">
                <li>• Enterprise &amp; Mobile Applications</li>
                <li>• Multi-Cloud &amp; Kubernetes</li>
                <li>• Generative AI &amp; AI Agents</li>
                <li>• CI/CD &amp; Observability</li>
                <li>• Payment &amp; API Integrations</li>
                <li>• Discover → Architect → Build → Support</li>
              </ul>
            </ScrollReveal>
          </div>
        </Section>
      </div>

      {/* ── Detailed Service Breakdown ─────────────────────── */}
      <Section className="!pb-8 sm:!pb-12">
        <ScrollReveal animation="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#17365d] mb-5">
            Software Engineering, Data &amp; AI Solutions
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.2}>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            We design and deliver software for the cloud, data, AI, and platforms.
            From mobile and web apps to enterprise systems, APIs, data pipelines,
            and AI-driven intelligence.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal animation="fade-up" delay={0.1} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Application Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enterprise Applications</li>
              <li>• Mobile Apps</li>
              <li>• APIs &amp; Integrations</li>
              <li>• Microservices</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Cloud &amp; Platform Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-Cloud Solutions</li>
              <li>• Containers &amp; Kubernetes</li>
              <li>• Infrastructure as Code</li>
              <li>• Serverless Computing</li>
              <li>• Cloud Modernization</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.3} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Data &amp; AI Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data Engineering</li>
              <li>• Analytics Platforms</li>
              <li>• Generative AI</li>
              <li>• AI Agents &amp; Automation</li>
              <li>• Intelligent Search</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              DevOps &amp; Security
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• CI/CD Automation</li>
              <li>• Cloud Security</li>
              <li>• Monitoring &amp; Observability</li>
              <li>• Performance Optimization</li>
              <li>• Quality Assurance</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.5} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Systems Integration
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enterprise Integrations</li>
              <li>• Event-Driven Systems</li>
              <li>• Payment Integrations</li>
              <li>• Distributed Processing</li>
              <li>• API Management</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.6} className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              End-to-End Delivery
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Discover, Architect, Build</li>
              <li>• Test, Deploy, Monitor</li>
              <li>• Support</li>
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── App Downloads ─────────────────────────────────── */}
      <Section className="bg-gray-50 !pt-8 sm:!pt-12">
        <div className="flex-1 p-8 bg-white rounded-xl">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#17365d] mb-4">
              Software That Powers Real Work
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-gray-600 text-lg text-center mb-10">
              We at NOK Inc take pride in designing and developing software for our
              clients that makes daily work simpler, faster, and more transparent.{" "}
              <br />
              Our apps are designed to run on any device and can be accessed from
              anywhere, below are some of the apps we have developed for download
              and use.
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <ScrollReveal animation="slide-in-left" delay={0.4}>
              <Link
                href="https://apps.apple.com/ng/app/flur/id6759227491"
                className="flex items-center justify-center bg-white text-black border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-gray-50 transition-colors shadow-sm w-[170px]"
              >
                <svg
                  className="w-7 h-7 mr-2"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight">
                    Download on the
                  </span>
                  <span className="text-[17px] font-semibold leading-tight -mt-0.5">
                    App Store
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal animation="slide-in-right" delay={0.6}>
              <Link
                href="https://play.google.com/store/apps/details?id=pay.flur.app"
                className="flex items-center justify-center bg-gradient-to-r from-[#4d86ff] to-[#6d64ff] text-white rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity shadow-sm w-[170px]"
              >
                <svg
                  className="w-7 h-7 mr-2"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight font-medium uppercase tracking-wide">
                    Get it on
                  </span>
                  <span className="text-[17px] font-semibold leading-tight -mt-0.5">
                    Google Play
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
