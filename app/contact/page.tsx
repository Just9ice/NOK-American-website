import Section from '@/components/Section';

export default function ContactPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
          Get in touch with our team for inquiries, support, or partnerships.
        </p>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#17365d] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600"><a href="mailto:info@nokinc.com" className="text-[#17365d] hover:underline">info@nokinc.com</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (240) 394-6641</p>
                <p className="text-gray-600">+234-903-893-8856</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                <p className="text-gray-600">9017 Amelung St, Frederick, MD 21704 USA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">Mon – Fri: 7.00 – 22.00</p>
                <p className="text-gray-600">Sat – Sun: 9.00 – 20.00</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#17365d] mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17365d] focus:ring-[#17365d] sm:text-sm p-2 border"></textarea>
              </div>
              <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#17365d] hover:bg-opacity-90">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
