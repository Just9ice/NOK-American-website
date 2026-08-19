import Section from "@/components/Section";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <div className="flex justify-center pt-5 justify-center">
        <Section className="bg-[#17365d] w-fit">
          <ScrollReveal animation="slide-in-left">
            <Image
              src="/images/contact.jpg"
              alt="Contact Us"
              width={700}
              height={800}
              quality={100}
              priority={true}
              className="w-[700px] h-[800px] object-fill rounded-3xl"
            />
          </ScrollReveal>
        </Section>
        <Section>
          <div className="pb-5">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl font-medium sm:text-5xl mb-1 w-fit">
                Contact Us
              </h1>
              <p className="mt-1 max-w-2xl text-lg text-gray-700">
                Get in touch with our team for inquiries, support, or
                partnerships.
              </p>
            </ScrollReveal>
            <ScrollReveal
              animation="scale-in"
              delay={0.2}
              className="bg-white p-8"
            >
              <div className="max-w-4xl mx-auto mt-2">
                <div>
                  <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2 pb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@nokinc.com"
                          className="text-[#17365d] hover:underline"
                        >
                          info@nokinc.com
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Phone
                      </h3>
                      <p className="text-gray-600">+1 (240) 394-6641</p>
                      <p className="text-gray-600">+234-903-893-8856</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Office Address
                      </h3>
                      <p className="text-gray-600">
                        9017 Amelung St, Frederick, <br /> MD 21704 USA
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">Mon – Fri: 7.00 – 22.00</p>
                      <p className="text-gray-600">Sat – Sun: 9.00 – 20.00</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm pb-2">
                    Fill out this form to schedule a consultation or service
                    call:
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              animation="slide-in-right"
              delay={0.2}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#17365d] mb-6">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="group w-1/2 flex justify-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-500"
                >
                  Submit
                  <span className="group-hover:translate-x-2 transition-transform duration-200">
                    →
                  </span>
                </button>
              </form>
            </ScrollReveal>
          </div>
        </Section>
      </div>
    </>
  );
}
