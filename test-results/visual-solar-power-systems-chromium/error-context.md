# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> solar-power-systems
- Location: tests\visual.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://nokinc.com/product/solar-power-systems/", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - banner [ref=e3]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: https://nokinc.com
      - navigation "Menu" [ref=e11]:
        - list [ref=e12]:
          - listitem [ref=e13]:
            - link "Product" [ref=e14] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e15]:
            - link "Services" [ref=e16] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e17]:
            - link "Financing" [ref=e18] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e19]:
            - link "Contact" [ref=e20] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e21]:
            - link "About" [ref=e22] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
      - link "Get in Touch" [ref=e25] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e31]:
    - generic [ref=e33]:
      - heading "Solar Power Systems" [level=2] [ref=e35]
      - paragraph [ref=e37]: Our portfolio covers product lines which are designed to work together or stand alone.
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Recent Product" [level=2] [ref=e44]
        - list [ref=e47]:
          - heading "Battery & Inverter Systems" [level=1] [ref=e55]
          - heading "Solar Power Systems" [level=1] [ref=e63]
          - heading "Electric Tricycles" [level=1] [ref=e71]
      - generic [ref=e72]:
        - heading "Reliable Solar Energy Solutions for Homes, Businesses & Industry" [level=2] [ref=e74]
        - paragraph [ref=e76]: NOK Inc designs, supplies, installs, and maintains high-performance solar power systems that provide reliable, cost-effective electricity for residential, commercial, and industrial applications. Our solutions help reduce energy costs, improve power reliability, and support long-term sustainability.
        - paragraph [ref=e78]: Whether you need a standalone solar installation, a hybrid energy solution, or backup power integration, we deliver systems engineered for efficiency, durability, and future growth.
        - generic [ref=e79]:
          - heading "Our Solar Solutions" [level=2] [ref=e80]
          - list [ref=e81]:
            - listitem [ref=e82]: Residential Solar Systems
            - listitem [ref=e83]: Commercial & Industrial Solar Installations
            - listitem [ref=e84]: Hybrid Solar & Battery Storage
            - listitem [ref=e85]: Off-Grid Power Systems
            - listitem [ref=e86]: Grid-Tied Solar Solutions
            - listitem [ref=e87]: Solar Street & Outdoor Lighting
            - listitem [ref=e88]: Solar Water Pumping Systems
            - listitem [ref=e89]: Custom Energy System Design
        - generic [ref=e90]:
          - heading "Features & Benefits" [level=2] [ref=e91]
          - list [ref=e92]:
            - listitem [ref=e93]: High-Efficiency Solar Panels
            - listitem [ref=e94]: Intelligent Energy Monitoring
            - listitem [ref=e95]: Reliable Battery Backup
            - listitem [ref=e96]: Scalable System Design
            - listitem [ref=e97]: Reduced Electricity Costs
            - listitem [ref=e98]: Low Maintenance Requirements
            - listitem [ref=e99]: Environmentally Friendly Energy
            - listitem [ref=e100]: Professional Installation & Support
        - generic [ref=e101]:
          - heading "Industries We Serve" [level=2] [ref=e102]
          - paragraph [ref=e103]: "We provide tailored solar energy solutions for:"
          - list [ref=e104]:
            - listitem [ref=e105]: Residential Properties
            - listitem [ref=e106]: Commercial Buildings
            - listitem [ref=e107]: Manufacturing Facilities
            - listitem [ref=e108]: Educational Institutions
            - listitem [ref=e109]: Healthcare Facilities
            - listitem [ref=e110]: Agricultural Operations
            - listitem [ref=e111]: Government & Public Infrastructure
            - listitem [ref=e112]: Hospitality & Retail Businesses
        - generic [ref=e113]:
          - heading "Why Choose NOK Inc?" [level=2] [ref=e114]
          - paragraph [ref=e115]: Our engineering team combines technical expertise with industry best practices to deliver solar systems that maximize performance, reliability, and return on investment. From initial site assessment to installation, monitoring, and ongoing maintenance, we provide end-to-end energy solutions you can depend on.
          - paragraph [ref=e116]
          - heading "Our Process" [level=2] [ref=e117]
          - paragraph [ref=e118]:
            - strong [ref=e119]: Consult → Design → Install → Test → Commission → Monitor → Maintain
        - link "Get in Touch" [ref=e124] [cursor=pointer]:
          - /url: "#"
  - contentinfo [ref=e130]:
    - generic [ref=e132]:
      - link [ref=e135] [cursor=pointer]:
        - /url: https://nokinc.com/wp-content/uploads/2025/10/NOK-Inc-Company-LogoFinal-02-2.png
      - generic [ref=e137]:
        - generic [ref=e138]:
          - strong [ref=e140]: Working hours
          - list [ref=e142]:
            - listitem [ref=e143]:
              - generic [ref=e144]: "Mon – Fri: 7.00 – 22.00"
            - listitem [ref=e145]:
              - generic [ref=e146]: "Sat – Sun: 9.00 – 20.00"
        - generic [ref=e147]:
          - strong [ref=e149]: We are here
          - list [ref=e151]:
            - listitem [ref=e152]:
              - generic [ref=e153]: 9017 Amelung St, Frederick, MD 21704 USA
            - listitem
        - generic [ref=e154]:
          - strong [ref=e156]: Call us
          - list [ref=e158]:
            - listitem [ref=e159]:
              - generic [ref=e160]: +1-240-394-6641
            - listitem [ref=e161]:
              - generic [ref=e162]: +234-903-893-8856
    - paragraph [ref=e166]:
      - text: Visit our NOK Inc Africa Website:-
      - link "NOK Inc | Sustainable Energy Solutions" [ref=e167] [cursor=pointer]:
        - /url: https://nok-website.vercel.app/
    - generic [ref=e174]:
      - list [ref=e177]:
        - listitem [ref=e178]:
          - generic [ref=e179] [cursor=pointer]: Facebook
        - listitem [ref=e183]:
          - generic [ref=e184] [cursor=pointer]: Instagram
        - listitem [ref=e188]:
          - generic [ref=e189] [cursor=pointer]: X-twitter
      - navigation "Menu" [ref=e195]:
        - list [ref=e196]:
          - listitem [ref=e197]:
            - link "Product" [ref=e198] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e199]:
            - link "Services" [ref=e200] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e201]:
            - link "Financing" [ref=e202] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e203]:
            - link "Contact" [ref=e204] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e205]:
            - link "About" [ref=e206] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const baseUrl = process.env.SITE_URL ?? 'https://nokinc.com';
  4  | const pages = [
  5  |   { name: 'home', path: '/' },
  6  |   { name: 'products', path: '/product/' },
  7  |   { name: 'software-solutions', path: '/product/software-solutions/' },
  8  |   { name: 'electric-tricycles', path: '/product/electric-tricycles/' },
  9  |   { name: 'battery-inverter-systems', path: '/product/battery-inverter-systems/' },
  10 |   { name: 'solar-power-systems', path: '/product/solar-power-systems/' },
  11 |   { name: 'ev-lfp-chargers', path: '/product/ev-lfp-chargers/' },
  12 |   { name: 'solar-security-lights', path: '/product/solar-security-lights/' },
  13 |   { name: 'industrial-agricultural-equipment', path: '/product/industrial-agricultural-equipment/' },
  14 |   { name: 'solar-powered-cooling', path: '/product/solar-powered-cooling/' },
  15 |   { name: 'services', path: '/services/' },
  16 |   { name: 'financing', path: '/financing/' },
  17 |   { name: 'about-us', path: '/about-us/' },
  18 |   { name: 'contact', path: '/contact/' },
  19 | ];
  20 | 
  21 | for (const item of pages) {
  22 |   test(item.name, async ({ page }) => {
> 23 |     await page.goto(`${baseUrl}${item.path}`, { waitUntil: 'networkidle' });
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  24 |     await expect(page).toHaveScreenshot(`${item.name}.png`, {
  25 |       fullPage: true,
  26 |       animations: 'disabled',
  27 |     });
  28 |   });
  29 | }
  30 | 
```