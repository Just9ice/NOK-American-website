import Section from '@/components/Section';

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
          Professional installation, maintenance, and support for all your sustainable energy solutions.
        </p>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Installation</h3>
            <p className="text-gray-600 text-lg">Certified teams set up your systems safely and efficiently.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Maintenance</h3>
            <p className="text-gray-600 text-lg">Preventive checks and timely repairs to maximize uptime.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Monitoring</h3>
            <p className="text-gray-600 text-lg">Remote dashboards for batteries, solar, and fleets.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Support</h3>
            <p className="text-gray-600 text-lg">A dedicated help desk, spare-parts stock, and clear SLAs.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
