import os

pages = {
    'solar-power-systems': 'Solar Power Systems',
    'ev-lfp-chargers': 'EV & LFP Chargers',
    'solar-security-lights': 'Solar & Security Lights',
    'industrial-agricultural-equipment': 'Industrial & Agricultural Equipment',
    'solar-powered-cooling': 'Solar-Powered Cooling',
    'electric-tricycles': 'Electric Tricycles',
    'software-solutions': 'Software Solutions'
}

template = """import Section from '@/components/Section';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ProductPage() {
  return (
    <>
      <Section className="bg-[#17365d] text-white pt-16 pb-24 text-center" bgWhite={false}>
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">{TITLE}</h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.2}>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
            High-quality, reliable, and sustainable {TITLE_LOWER} for your needs.
          </p>
        </ScrollReveal>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal animation="fade-up" className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-[#17365d] mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• High- and low-voltage lithium packs</li>
              <li>• Hybrid-ready with solar, grid, or generator</li>
              <li>• Remote monitoring via web and mobile</li>
            </ul>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
"""

for slug, title in pages.items():
    d = f'c:/codebase/nok-inc/app/product/{slug}'
    os.makedirs(d, exist_ok=True)
    with open(f'{d}/page.tsx', 'w', encoding='utf-8') as f:
        content = template.replace('{TITLE}', title).replace('{TITLE_LOWER}', title.lower())
        f.write(content)

print('Pages generated.')
