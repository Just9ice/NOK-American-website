# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> electric-tricycles
- Location: tests\visual.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://nokinc.com/product/electric-tricycles/", waiting until "networkidle"

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
      - heading "Electric Tricycles" [level=2] [ref=e35]
      - paragraph [ref=e37]: Our portfolio covers product lines that are designed to work together or stand alone.
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Recent Product" [level=2] [ref=e44]
        - list [ref=e47]:
          - heading "Battery & Inverter Systems" [level=1] [ref=e55]
          - heading "Solar Power Systems" [level=1] [ref=e63]
          - heading "Electric Tricycles" [level=1] [ref=e71]
      - generic [ref=e72]:
        - heading "Smart, Sustainable Mobility for Modern Transportation" [level=2] [ref=e74]
        - generic [ref=e75]:
          - paragraph [ref=e76]: NOK Inc provides reliable electric tricycles designed to deliver clean, efficient, and cost-effective transportation for passenger mobility, commercial operations, and last-mile logistics. Built for performance, safety, and low operating costs, our electric mobility solutions help businesses and communities transition toward a more sustainable future.
          - paragraph [ref=e77]: Whether you’re expanding a transport fleet, launching an e-mobility initiative, or modernizing urban transportation, our electric tricycles offer dependable performance backed by professional support.
        - generic [ref=e78]:
          - heading "Our Electric Mobility Solutions" [level=2] [ref=e79]
          - list [ref=e80]:
            - listitem [ref=e81]: Passenger Electric Tricycles
            - listitem [ref=e82]: Commercial & Cargo Tricycles
            - listitem [ref=e83]: Fleet Deployment Solutions
            - listitem [ref=e84]: Smart Fleet Management
            - listitem [ref=e85]: Battery Swapping & Charging Support
            - listitem [ref=e86]: Custom Branding & Fleet Customization
            - listitem [ref=e87]: Fleet Maintenance & Technical Support
            - listitem [ref=e88]: Spare Parts & After-Sales Services
        - generic [ref=e89]:
          - heading "Features & Benefits" [level=2] [ref=e90]
          - list [ref=e91]:
            - listitem [ref=e92]: Zero Tailpipe Emissions
            - listitem [ref=e93]: Low Operating & Maintenance Costs
            - listitem [ref=e94]: Long Battery Range
            - listitem [ref=e95]: Quiet & Comfortable Ride
            - listitem [ref=e96]: Durable, Weather-Resistant Design
            - listitem [ref=e97]: Smart Battery Management
            - listitem [ref=e98]: High Passenger & Cargo Capacity
            - listitem [ref=e99]: Reliable After-Sales Support
        - generic [ref=e100]:
          - heading "Industries We Serve" [level=2] [ref=e101]
          - paragraph [ref=e102]: "Our electric mobility solutions are ideal for:"
          - list [ref=e103]:
            - listitem [ref=e104]: Public Transportation
            - listitem [ref=e105]: Ride-Hailing & Mobility Services
            - listitem [ref=e106]: Logistics & Last-Mile Delivery
            - listitem [ref=e107]: Corporate & Institutional Fleets
            - listitem [ref=e108]: Universities & Campuses
            - listitem [ref=e109]: Tourism & Hospitality
            - listitem [ref=e110]: Government & Smart City Projects
            - listitem [ref=e111]: Community Transport Programs
        - generic [ref=e112]:
          - heading "Why Choose NOK Inc?" [level=2] [ref=e113]
          - paragraph [ref=e114]: We deliver more than electric vehicles—we provide complete mobility solutions. From vehicle supply and fleet planning to charging infrastructure, maintenance, and technical support, NOK Inc helps organizations adopt sustainable transportation with confidence.
        - generic [ref=e115]:
          - heading "Available Solutions" [level=2] [ref=e116]
          - list [ref=e117]:
            - listitem [ref=e118]: Passenger Electric Rickshaws
            - listitem [ref=e119]: Cargo & Utility Tricycles
            - listitem [ref=e120]: Fleet Management Solutions
            - listitem [ref=e121]: Charging Infrastructure
            - listitem [ref=e122]: Battery Replacement Programs
            - listitem [ref=e123]: Fleet Expansion & Maintenance Services
        - link "Get in Touch" [ref=e128] [cursor=pointer]:
          - /url: "#"
  - contentinfo [ref=e134]:
    - generic [ref=e136]:
      - link [ref=e139] [cursor=pointer]:
        - /url: https://nokinc.com/wp-content/uploads/2025/10/NOK-Inc-Company-LogoFinal-02-2.png
      - generic [ref=e141]:
        - generic [ref=e142]:
          - strong [ref=e144]: Working hours
          - list [ref=e146]:
            - listitem [ref=e147]:
              - generic [ref=e148]: "Mon – Fri: 7.00 – 22.00"
            - listitem [ref=e149]:
              - generic [ref=e150]: "Sat – Sun: 9.00 – 20.00"
        - generic [ref=e151]:
          - strong [ref=e153]: We are here
          - list [ref=e155]:
            - listitem [ref=e156]:
              - generic [ref=e157]: 9017 Amelung St, Frederick, MD 21704 USA
            - listitem
        - generic [ref=e158]:
          - strong [ref=e160]: Call us
          - list [ref=e162]:
            - listitem [ref=e163]:
              - generic [ref=e164]: +1-240-394-6641
            - listitem [ref=e165]:
              - generic [ref=e166]: +234-903-893-8856
    - paragraph [ref=e170]:
      - text: Visit our NOK Inc Africa Website:-
      - link "NOK Inc | Sustainable Energy Solutions" [ref=e171] [cursor=pointer]:
        - /url: https://nok-website.vercel.app/
    - generic [ref=e178]:
      - list [ref=e181]:
        - listitem [ref=e182]:
          - generic [ref=e183] [cursor=pointer]: Facebook
        - listitem [ref=e187]:
          - generic [ref=e188] [cursor=pointer]: Instagram
        - listitem [ref=e192]:
          - generic [ref=e193] [cursor=pointer]: X-twitter
      - navigation "Menu" [ref=e199]:
        - list [ref=e200]:
          - listitem [ref=e201]:
            - link "Product" [ref=e202] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e203]:
            - link "Services" [ref=e204] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e205]:
            - link "Financing" [ref=e206] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e207]:
            - link "Contact" [ref=e208] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e209]:
            - link "About" [ref=e210] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
  - generic [ref=e211]: desktop
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