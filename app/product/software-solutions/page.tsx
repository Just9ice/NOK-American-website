import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function SoftwareSolutionsPage() {
  return (
    <>
      <Section
        className="relative overflow-hidden text-white flex flex-col items-center justify-center text-center !pt-10 pb-15"
        bgWhite={false}
      >
        <Image
          src="/images/apps.png"
          alt="Application Merging"
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl shadow-green-100 rounded-lg p-10 mt-15">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
            Powering Industry Through Intelligent Software Engineering, Data,
            and AI Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-100">
            NOK Inc designs, builds, modernizes, and operates production
            software across cloud, data, AI, web, mobile, and distributed
            systems. We work from architecture through implementation,
            deployment, observability, and ongoing support—giving clients one
            engineering partner accountable for delivery.
          </p>
        </div>

        {/* Flickering Scroll Indicator */}
        <div className="relative z-20 mt-16 animate-bounce">
          <div className="animate-pulse text-green-500/80 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] mb-2 font-medium">
              Scroll
            </span>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </Section>

      <Section className="!pb-8 sm:!pb-12">
        <h1 className="text-5xl font-bold text-center text-[#17365d] mb-5">
          Software Engineering, Data & AI Solutions
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          We design and deliver software for the cloud, data, AI, and platforms.
          From mobile and web apps to enterprise systems, APIs, data pipelines,
          and AI-driven intelligence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Application Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enterprise Applications</li>
              <li>• Mobile Apps</li>
              <li>• APIs & Integrations</li>
              <li>• Microservices</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Cloud & Platform Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-Cloud Solutions</li>
              <li>• Containers & Kubernetes</li>
              <li>• Infrastructure as Code</li>
              <li>• Serverless Computing</li>
              <li>• Cloud Modernization</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              Data & AI Engineering
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data Engineering</li>
              <li>• Analytics Platforms</li>
              <li>• Generative AI</li>
              <li>• AI Agents & Automation</li>
              <li>• Intelligent Search</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              DevOps & Security
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• CI/CD Automation</li>
              <li>• Cloud Security</li>
              <li>• Monitoring & Observability</li>
              <li>• Performance Optimization</li>
              <li>• Quality Assurance</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
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
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">
              End-to-End Delivery
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Discover, Architect, Build</li>
              <li>• Test, Deploy, Monitor</li>
              <li>• Support</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 !pt-8 sm:!pt-12">
        {/* Proven Product section */}
        <div className="flex-1 p-8 bg-white rounded-xl">
          <h3 className="text-3xl font-bold text-center text-[#17365d] mb-4">
            Software That Powers Real Work
          </h3>
          <p className="text-gray-600 text-lg text-center mb-10">
            We at NOK in take pride in designing and developing software for our
            clients that makes daily work simpler, faster, and more transparent.{" "}
            <br />
            Our apps are designed to run on any device and can be accessed from
            anywhere, below are some of the apps we have developed for download
            and use.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
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
          </div>
        </div>
      </Section>
    </>
  );
}
