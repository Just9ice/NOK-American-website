import { test, expect } from '@playwright/test';

const baseUrl = process.env.SITE_URL ?? 'https://nokinc.com';
const pages = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/product/' },
  { name: 'software-solutions', path: '/product/software-solutions/' },
  { name: 'electric-tricycles', path: '/product/electric-tricycles/' },
  { name: 'battery-inverter-systems', path: '/product/battery-inverter-systems/' },
  { name: 'solar-power-systems', path: '/product/solar-power-systems/' },
  { name: 'ev-lfp-chargers', path: '/product/ev-lfp-chargers/' },
  { name: 'solar-security-lights', path: '/product/solar-security-lights/' },
  { name: 'industrial-agricultural-equipment', path: '/product/industrial-agricultural-equipment/' },
  { name: 'solar-powered-cooling', path: '/product/solar-powered-cooling/' },
  { name: 'services', path: '/services/' },
  { name: 'financing', path: '/financing/' },
  { name: 'about-us', path: '/about-us/' },
  { name: 'contact', path: '/contact/' },
];

for (const item of pages) {
  test(item.name, async ({ page }) => {
    await page.goto(`${baseUrl}${item.path}`, { waitUntil: 'networkidle' });
    await expect(page).toHaveScreenshot(`${item.name}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
