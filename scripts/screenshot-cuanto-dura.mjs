import { chromium } from 'playwright';

const browser = await chromium.launch({
  channel: 'chromium',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:4321/cuanto-dura/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

await page.screenshot({ path: '/tmp/cd-full.png', fullPage: true });
console.log('full:', '/tmp/cd-full.png');

const sections = [
  ['cdh', 'hero'],
  ['cdt', 'tabs'],
  ['cns', 'factores'],
  ['cdm', 'cta-medio'],
  ['cdc', 'comparativa'],
  ['cnq', 'consejos'],
  ['cdx', 'interlinking'],
  ['cnf', 'faq'],
  ['cncta', 'cta-final'],
];

for (const [cls, name] of sections) {
  const el = await page.$(`.${cls}`);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: `/tmp/cd-${name}.png` });
    console.log(`${name}: /tmp/cd-${name}.png`);
  } else {
    console.log(`${name}: NOT FOUND`);
  }
}

const tabComp = await page.$('[data-tab="comp"]');
if (tabComp) {
  await tabComp.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await tabComp.click();
  await page.waitForTimeout(700);
  const cdt = await page.$('.cdt');
  if (cdt) {
    await cdt.screenshot({ path: '/tmp/cd-tabs-completo.png' });
    console.log('tabs-completo: /tmp/cd-tabs-completo.png');
  }
}

await browser.close();
