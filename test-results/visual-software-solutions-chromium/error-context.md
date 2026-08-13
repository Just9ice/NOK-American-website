# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> software-solutions
- Location: tests\visual.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://nokinc.com/product/software-solutions/", waiting until "networkidle"

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
      - heading "Software Engineering, Data & AI Solutions" [level=2] [ref=e35]
      - paragraph [ref=e37]: Our portfolio covers eight product lines, designed to work together or stand alone.
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Recent Product" [level=2] [ref=e44]
        - list [ref=e47]:
          - heading "Battery & Inverter Systems" [level=1] [ref=e55]
          - heading "Solar Power Systems" [level=1] [ref=e63]
          - heading "Electric Tricycles" [level=1] [ref=e71]
      - generic [ref=e72]:
        - heading "Powering Industry Through Intelligent Software Engineering, Data, and AI Solutions" [level=2] [ref=e74]
        - link "Download on the PlayStore" [ref=e76] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=pay.flur.app
        - link "Download on the Apple Store" [ref=e83] [cursor=pointer]:
          - /url: https://apps.apple.com/ng/app/flur/id6759227491
        - paragraph [ref=e90]: NOK Inc designs, builds, modernizes, and operates production software across cloud, data, AI, web, mobile, and distributed systems. We work from architecture through implementation, deployment, observability, and ongoing support—giving clients one engineering partner accountable for delivery.
        - generic [ref=e91]:
          - heading "Application Engineering" [level=2] [ref=e92]
          - list [ref=e93]:
            - listitem [ref=e94]: Enterprise Applications
            - listitem [ref=e95]: Mobile Apps
            - listitem [ref=e96]: APIs & Integrations
            - listitem [ref=e97]: Microservices
            - listitem [ref=e98]: Progressive Web Apps
          - heading "Cloud & Platform Engineering" [level=2] [ref=e99]
          - list [ref=e100]:
            - listitem [ref=e101]: Multi-Cloud Solutions
            - listitem [ref=e102]: Containers & Kubernetes
            - listitem [ref=e103]: Infrastructure as Code
            - listitem [ref=e104]: Serverless Computing
            - listitem [ref=e105]: Cloud Modernization
          - heading "Data & AI Engineering" [level=2] [ref=e106]
          - list [ref=e107]:
            - listitem [ref=e108]: Data Engineering
            - listitem [ref=e109]: Analytics Platforms
            - listitem [ref=e110]: Generative AI
            - listitem [ref=e111]: AI Agents & Automation
            - listitem [ref=e112]: Intelligent Search
          - heading "DevOps & Security" [level=2] [ref=e113]
          - list [ref=e114]:
            - listitem [ref=e115]: CI/CD Automation
            - listitem [ref=e116]: Cloud Security
            - listitem [ref=e117]: Monitoring & Observability
            - listitem [ref=e118]: Performance Optimization
            - listitem [ref=e119]: Quality Assurance
          - heading "Systems Integration" [level=2] [ref=e120]
          - list [ref=e121]:
            - listitem [ref=e122]: Enterprise Integrations
            - listitem [ref=e123]: Event-Driven Systems
            - listitem [ref=e124]: Payment Integrations
            - listitem [ref=e125]: Distributed Processing
            - listitem [ref=e126]: API Management
          - heading "End-to-End Delivery" [level=2] [ref=e127]
          - list [ref=e128]:
            - listitem [ref=e129]: Discover
            - listitem [ref=e130]: Architect
            - listitem [ref=e131]: Build
            - listitem [ref=e132]: Test
            - listitem [ref=e133]: Deploy
            - listitem [ref=e134]: Monitor
            - listitem [ref=e135]: Support
        - generic [ref=e136]:
          - heading [level=2] [ref=e137]:
            - strong [ref=e138]: Proven Products
          - heading [level=3] [ref=e139]:
            - strong [ref=e140]: Flur
          - paragraph [ref=e141]: Offline-first digital payment platform with secure QR transactions.
          - heading [level=3] [ref=e142]:
            - strong [ref=e143]: MyKeke
          - paragraph [ref=e144]: Offline-first mobility and rewards platform with cloud-native infrastructure.
        - link "Get in Touch" [ref=e149] [cursor=pointer]:
          - /url: "#"
  - contentinfo [ref=e157]:
    - generic [ref=e159]:
      - link [ref=e162] [cursor=pointer]:
        - /url: https://nokinc.com/wp-content/uploads/2025/10/NOK-Inc-Company-LogoFinal-02-2.png
      - generic [ref=e164]:
        - generic [ref=e165]:
          - strong [ref=e167]: Working hours
          - list [ref=e169]:
            - listitem [ref=e170]:
              - generic [ref=e171]: "Mon – Fri: 7.00 – 22.00"
            - listitem [ref=e172]:
              - generic [ref=e173]: "Sat – Sun: 9.00 – 20.00"
        - generic [ref=e174]:
          - strong [ref=e176]: We are here
          - list [ref=e178]:
            - listitem [ref=e179]:
              - generic [ref=e180]: 9017 Amelung St, Frederick, MD 21704 USA
            - listitem
        - generic [ref=e181]:
          - strong [ref=e183]: Call us
          - list [ref=e185]:
            - listitem [ref=e186]:
              - generic [ref=e187]: +1-240-394-6641
            - listitem [ref=e188]:
              - generic [ref=e189]: +234-903-893-8856
    - paragraph [ref=e193]:
      - text: Visit our NOK Inc Africa Website:-
      - link "NOK Inc | Sustainable Energy Solutions" [ref=e194] [cursor=pointer]:
        - /url: https://nok-website.vercel.app/
    - generic [ref=e201]:
      - list [ref=e204]:
        - listitem [ref=e205]:
          - generic [ref=e206] [cursor=pointer]: Facebook
        - listitem [ref=e210]:
          - generic [ref=e211] [cursor=pointer]: Instagram
        - listitem [ref=e215]:
          - generic [ref=e216] [cursor=pointer]: X-twitter
      - navigation "Menu" [ref=e222]:
        - list [ref=e223]:
          - listitem [ref=e224]:
            - link "Product" [ref=e225] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e226]:
            - link "Services" [ref=e227] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e228]:
            - link "Financing" [ref=e229] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e230]:
            - link "Contact" [ref=e231] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e232]:
            - link "About" [ref=e233] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
  - generic [ref=e234]: desktop
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