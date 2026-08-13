import Section from '@/components/Section';

export default function FinancingPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Financing</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
          Flexible payment plans and options to make sustainable energy accessible.
        </p>
      </Section>
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-8">
            We offer various financing options to ensure you can transition to cleaner energy and smarter mobility without upfront financial strain.
          </p>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#17365d] mb-4">Talk to our experts</h3>
            <p className="text-gray-600 mb-6">Contact our sales team to discuss customized financing plans that suit your business or residential needs.</p>
            <a href="/contact/" className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#17365d] hover:bg-opacity-90">
              Contact Sales
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
