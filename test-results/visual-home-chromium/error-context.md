# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> home
- Location: tests\visual.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://nokinc.com/", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - banner:
    - generic [ref=e4]:
      - navigation "Menu" [ref=e9]:
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Product" [ref=e12] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e13]:
            - link "Services" [ref=e14] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e15]:
            - link "Financing" [ref=e16] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e17]:
            - link "Contact" [ref=e18] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e19]:
            - link "About" [ref=e20] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
      - link "Get in Touch" [ref=e23] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e29]:
    - generic [ref=e31]:
      - heading "Alternative Energy. Smarter Mobility. Software Engineering, Data, AI Solutions." [level=2] [ref=e36]
      - generic [ref=e37]:
        - link "Get in Touch" [ref=e39] [cursor=pointer]:
          - /url: "#"
        - link "Explore Products" [ref=e46] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e56]:
      - heading "At NOK Inc, we help homes, businesses, and communities" [level=2] [ref=e58]
      - generic [ref=e59]: take control of their energy and transport. From reliable solar power and smart batteries to electric tricycles and cooling systems, our portfolio is designed to reduce costs, cut emissions, and keep life moving.
    - generic [ref=e61]:
      - list [ref=e63]:
        - listitem [ref=e64]:
          - generic [ref=e68]: Why Choose Us
      - generic [ref=e69]:
        - generic [ref=e81]:
          - heading "Reliable" [level=3] [ref=e82]
          - paragraph [ref=e83]: High-quality components, certified installers, and 24/7 support
        - generic [ref=e95]:
          - heading "Affordable" [level=3] [ref=e96]
          - paragraph [ref=e97]: Lower running costs than diesel with flexible financing options.
        - generic [ref=e109]:
          - heading "Simple" [level=3] [ref=e110]
          - paragraph [ref=e111]: Easy to buy, install, and use with plain-language guides and mobile apps
      - generic [ref=e112]:
        - generic [ref=e124]:
          - heading "Scalable" [level=3] [ref=e125]
          - paragraph [ref=e126]: Start small and expand as your needs grow.
        - generic [ref=e138]:
          - heading "Sustainable" [level=3] [ref=e139]
          - paragraph [ref=e140]: Cleaner, quieter, and better for communities
      - generic [ref=e145]:
        - generic [ref=e146]:
          - heading "Contact Us!" [level=2] [ref=e148]
          - paragraph [ref=e150]: Discover how we can help electrify your homes, fleets, or communities
        - generic [ref=e151]:
          - link "Get in Touch" [ref=e153] [cursor=pointer]:
            - /url: "#"
          - link "Explore Products" [ref=e160] [cursor=pointer]:
            - /url: "#"
  - contentinfo [ref=e166]:
    - generic [ref=e168]:
      - link [ref=e171] [cursor=pointer]:
        - /url: https://nokinc.com/wp-content/uploads/2025/10/NOK-Inc-Company-LogoFinal-02-2.png
      - generic [ref=e173]:
        - generic [ref=e174]:
          - strong [ref=e176]: Working hours
          - list [ref=e178]:
            - listitem [ref=e179]:
              - generic [ref=e180]: "Mon – Fri: 7.00 – 22.00"
            - listitem [ref=e181]:
              - generic [ref=e182]: "Sat – Sun: 9.00 – 20.00"
        - generic [ref=e183]:
          - strong [ref=e185]: We are here
          - list [ref=e187]:
            - listitem [ref=e188]:
              - generic [ref=e189]: 9017 Amelung St, Frederick, MD 21704 USA
            - listitem
        - generic [ref=e190]:
          - strong [ref=e192]: Call us
          - list [ref=e194]:
            - listitem [ref=e195]:
              - generic [ref=e196]: +1-240-394-6641
            - listitem [ref=e197]:
              - generic [ref=e198]: +234-903-893-8856
    - paragraph [ref=e202]:
      - text: Visit our NOK Inc Africa Website:-
      - link "NOK Inc | Sustainable Energy Solutions" [ref=e203] [cursor=pointer]:
        - /url: https://nok-website.vercel.app/
    - generic [ref=e210]:
      - list [ref=e213]:
        - listitem [ref=e214]:
          - generic [ref=e215] [cursor=pointer]: Facebook
        - listitem [ref=e219]:
          - generic [ref=e220] [cursor=pointer]: Instagram
        - listitem [ref=e224]:
          - generic [ref=e225] [cursor=pointer]: X-twitter
      - navigation "Menu" [ref=e231]:
        - list [ref=e232]:
          - listitem [ref=e233]:
            - link "Product" [ref=e234] [cursor=pointer]:
              - /url: https://nokinc.com/product/
          - listitem [ref=e235]:
            - link "Services" [ref=e236] [cursor=pointer]:
              - /url: https://nokinc.com/services/
          - listitem [ref=e237]:
            - link "Financing" [ref=e238] [cursor=pointer]:
              - /url: https://nokinc.com/financing/
          - listitem [ref=e239]:
            - link "Contact" [ref=e240] [cursor=pointer]:
              - /url: https://nokinc.com/contact/
          - listitem [ref=e241]:
            - link "About" [ref=e242] [cursor=pointer]:
              - /url: https://nokinc.com/about-us/
  - generic [ref=e243]: desktop
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