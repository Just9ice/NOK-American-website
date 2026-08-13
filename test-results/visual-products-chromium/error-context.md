# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> products
- Location: tests\visual.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://nokinc.com/product/", waiting until "networkidle"

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
      - heading "Our Products" [level=2] [ref=e35]
      - generic [ref=e36]: Powering progress. Building trust. Driving change.
    - generic [ref=e40]:
      - generic [ref=e41]:
        - link "Software & Web Development Services Enterprise Web, Mobile, & Cloud Applications Data Engineering, Integration & Automation AI Architecture, Agents & Generative AI" [ref=e42] [cursor=pointer]:
          - /url: https://nokinc.com/product/software-solutions/
          - heading "Software & Web Development Services" [level=2] [ref=e44]
          - list [ref=e47]:
            - listitem [ref=e48]:
              - generic [ref=e52]: Enterprise Web, Mobile, & Cloud Applications
          - list [ref=e54]:
            - listitem [ref=e55]:
              - generic [ref=e59]: Data Engineering, Integration & Automation
          - list [ref=e61]:
            - listitem [ref=e62]:
              - generic [ref=e66]: AI Architecture, Agents & Generative AI
        - link "Battery & Inverter Systems High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e67] [cursor=pointer]:
          - /url: https://nokinc.com/product/battery-inverter-systems/
          - heading "Battery & Inverter Systems" [level=2] [ref=e69]
          - list [ref=e72]:
            - listitem [ref=e73]:
              - generic [ref=e77]: High- and low-voltage lithium packs
          - list [ref=e79]:
            - listitem [ref=e80]:
              - generic [ref=e84]: Hybrid-ready with solar, grid, or generator
          - list [ref=e86]:
            - listitem [ref=e87]:
              - generic [ref=e91]: Remote monitoring via web and mobile
        - link "Solar Power Systems High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e92] [cursor=pointer]:
          - /url: https://nokinc.com/product/solar-power-systems/
          - heading "Solar Power Systems" [level=2] [ref=e94]
          - list [ref=e97]:
            - listitem [ref=e98]:
              - generic [ref=e102]: High- and low-voltage lithium packs
          - list [ref=e104]:
            - listitem [ref=e105]:
              - generic [ref=e109]: Hybrid-ready with solar, grid, or generator
          - list [ref=e111]:
            - listitem [ref=e112]:
              - generic [ref=e116]: Remote monitoring via web and mobile
        - link "Electric Tricycles High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e117] [cursor=pointer]:
          - /url: https://nokinc.com/product/electric-tricycles/
          - heading "Electric Tricycles" [level=2] [ref=e119]
          - list [ref=e122]:
            - listitem [ref=e123]:
              - generic [ref=e127]: High- and low-voltage lithium packs
          - list [ref=e129]:
            - listitem [ref=e130]:
              - generic [ref=e134]: Hybrid-ready with solar, grid, or generator
          - list [ref=e136]:
            - listitem [ref=e137]:
              - generic [ref=e141]: Remote monitoring via web and mobile
        - link "EV & LFP Chargers High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e142] [cursor=pointer]:
          - /url: https://nokinc.com/product/ev-lfp-chargers/
          - heading "EV & LFP Chargers" [level=2] [ref=e144]
          - list [ref=e147]:
            - listitem [ref=e148]:
              - generic [ref=e152]: High- and low-voltage lithium packs
          - list [ref=e154]:
            - listitem [ref=e155]:
              - generic [ref=e159]: Hybrid-ready with solar, grid, or generator
          - list [ref=e161]:
            - listitem [ref=e162]:
              - generic [ref=e166]: Remote monitoring via web and mobile
        - link "Solar & Security Lights High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e167] [cursor=pointer]:
          - /url: https://nokinc.com/product/solar-security-lights/
          - heading "Solar & Security Lights" [level=2] [ref=e169]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - generic [ref=e177]: High- and low-voltage lithium packs
          - list [ref=e179]:
            - listitem [ref=e180]:
              - generic [ref=e184]: Hybrid-ready with solar, grid, or generator
          - list [ref=e186]:
            - listitem [ref=e187]:
              - generic [ref=e191]: Remote monitoring via web and mobile
      - generic [ref=e192]:
        - link "Industrial & Agricultural Equipment High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e193] [cursor=pointer]:
          - /url: https://nokinc.com/product/industrial-agricultural-equipment/
          - heading "Industrial & Agricultural Equipment" [level=2] [ref=e195]
          - list [ref=e198]:
            - listitem [ref=e199]:
              - generic [ref=e203]: High- and low-voltage lithium packs
          - list [ref=e205]:
            - listitem [ref=e206]:
              - generic [ref=e210]: Hybrid-ready with solar, grid, or generator
          - list [ref=e212]:
            - listitem [ref=e213]:
              - generic [ref=e217]: Remote monitoring via web and mobile
        - link "Solar-Powered Cooling High- and low-voltage lithium packs Hybrid-ready with solar, grid, or generator Remote monitoring via web and mobile" [ref=e218] [cursor=pointer]:
          - /url: https://nokinc.com/product/solar-powered-cooling/
          - heading "Solar-Powered Cooling" [level=2] [ref=e220]
          - list [ref=e223]:
            - listitem [ref=e224]:
              - generic [ref=e228]: High- and low-voltage lithium packs
          - list [ref=e230]:
            - listitem [ref=e231]:
              - generic [ref=e235]: Hybrid-ready with solar, grid, or generator
          - list [ref=e237]:
            - listitem [ref=e238]:
              - generic [ref=e242]: Remote monitoring via web and mobile
  - contentinfo [ref=e243]:
    - generic [ref=e245]:
      - link [ref=e248] [cursor=pointer]:
        - /url: https://nokinc.com/wp-content/uploads/2025/10/NOK-Inc-Company-LogoFinal-02-2.png
      - generic [ref=e250]:
        - generic [ref=e251]:
          - strong [ref=e253]: Working hours
          - list [ref=e255]:
            - listitem [ref=e256]:
              - generic [ref=e257]: "Mon – Fri: 7.00 – 22.00"
            - listitem [ref=e258]:
              - generic [ref=e259]: "Sat – Sun: 9.00 – 20.00"
        - generic [ref=e260]:
          - strong [ref=e262]: We are here
          - list [ref=e264]:
            - listitem [ref=e265]:
              - generic [ref=e266]: 9017 Amelung St, Frederick, MD 21704 USA
            - listitem
        - generic [ref=e267]:
          - strong [ref=e269]: Call us
          - list [ref=e271]:
            - listitem [ref=e272]:
              - generic [ref=e273]: +1-240-394-6641
            - listitem [ref=e274]:
              - generic [ref=e275]: +234-903-893-8856
    - paragraph [ref=e279]:
      - text: Visit our NOK Inc Africa Website:-
      - link "NOK Inc | Sustainable Energy Solutions" [ref=e280] [cursor=pointer]:
        - /url: https://nok-website.vercel.app/
    - generic [ref=e287]:
      - list [ref=e290]:
        - listitem [ref=e291]:
          - generic [ref=e292] [cursor=pointer]: Facebook
        - listitem [ref=e296]:
          - generic [ref=e297] [cursor=pointer]: Instagram
        - listitem [ref=e301]:
          - generic [ref=e302] [cursor=pointer]: X-twitter
      - navigation "Menu" [ref=e308]:
        - list [ref=e309]:
          - listitem [ref=e310]:
            - link "Product" [ref=e311] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e312]:
            - link "Services" [ref=e313] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e314]:
            - link "Financing" [ref=e315] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e316]:
            - link "Contact" [ref=e317] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e318]:
            - link "About" [ref=e319] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
  - generic [ref=e320]: desktop
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