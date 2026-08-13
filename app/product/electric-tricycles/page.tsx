import Section from '@/components/Section';

export default function ElectricTricyclesPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24" bgWhite={false}>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
            Smart, Sustainable Mobility for Modern Transportation
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-200">
            NOK Inc provides reliable electric tricycles designed to deliver clean, efficient, and cost-effective transportation for passenger mobility, commercial operations, and last-mile logistics. Built for performance, safety, and low operating costs, our electric mobility solutions help businesses and communities transition toward a more sustainable future.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Passenger Electric Tricycles</li>
              <li>• Commercial & Cargo Tricycles</li>
              <li>• Fleet Deployment Solutions</li>
              <li>• Smart Fleet Management</li>
              <li>• Battery Swapping & Charging Support</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Features & Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Zero Tailpipe Emissions</li>
              <li>• Low Operating & Maintenance Costs</li>
              <li>• Long Battery Range</li>
              <li>• Quiet & Comfortable Ride</li>
              <li>• Durable, Weather-Resistant Design</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Public Transportation</li>
              <li>• Logistics & Last-Mile Delivery</li>
              <li>• Universities & Campuses</li>
              <li>• Tourism & Hospitality</li>
              <li>• Government & Smart City Projects</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
