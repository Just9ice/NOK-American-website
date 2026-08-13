import Section from '@/components/Section';

export default function ProductPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Industrial & Agricultural Equipment</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
          High-quality, reliable, and sustainable industrial & agricultural equipment for your needs.
        </p>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• High- and low-voltage lithium packs</li>
              <li>• Hybrid-ready with solar, grid, or generator</li>
              <li>• Remote monitoring via web and mobile</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
