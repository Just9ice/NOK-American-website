import Section from '@/components/Section';
import Image from 'next/image';

export default function SoftwareSolutionsPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24" bgWhite={false}>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
            Powering Industry Through Intelligent Software Engineering, Data, and AI Solutions
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-200">
            NOK Inc designs, builds, modernizes, and operates production software across cloud, data, AI, web, mobile, and distributed systems. We work from architecture through implementation, deployment, observability, and ongoing support—giving clients one engineering partner accountable for delivery.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Application Engineering</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enterprise Applications</li>
              <li>• Mobile Apps</li>
              <li>• APIs & Integrations</li>
              <li>• Microservices</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Cloud & Platform Engineering</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-Cloud Solutions</li>
              <li>• Containers & Kubernetes</li>
              <li>• Infrastructure as Code</li>
              <li>• Serverless Computing</li>
              <li>• Cloud Modernization</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Data & AI Engineering</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data Engineering</li>
              <li>• Analytics Platforms</li>
              <li>• Generative AI</li>
              <li>• AI Agents & Automation</li>
              <li>• Intelligent Search</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">DevOps & Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• CI/CD Automation</li>
              <li>• Cloud Security</li>
              <li>• Monitoring & Observability</li>
              <li>• Performance Optimization</li>
              <li>• Quality Assurance</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Systems Integration</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enterprise Integrations</li>
              <li>• Event-Driven Systems</li>
              <li>• Payment Integrations</li>
              <li>• Distributed Processing</li>
              <li>• API Management</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">End-to-End Delivery</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Discover, Architect, Build</li>
              <li>• Test, Deploy, Monitor</li>
              <li>• Support</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
