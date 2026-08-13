import Section from '@/components/Section';

export default function AboutUsPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
          Our commitment to a sustainable and empowered future.
        </p>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Mission-Driven</h3>
            <p className="text-gray-600 text-lg">Cut fuel costs, improve uptime, and empower communities.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Team-Focused</h3>
            <p className="text-gray-600 text-lg">Local jobs in installation, service, and software support.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Sustainability</h3>
            <p className="text-gray-600 text-lg">Lower emissions, quieter streets, and safer spaces.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Partnerships</h3>
            <p className="text-gray-600 text-lg">Long-term collaboration with utilities, municipalities, & OEMs.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
