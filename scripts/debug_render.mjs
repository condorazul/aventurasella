import { chromium } from 'playwright';

const URL = 'https://aventuraenelsella.es/';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
const page = await ctx.newPage();

const consoleErrors = [];
const failedRequests = [];
const allRequests = [];

page.on('console', m => {
  if (m.type() === 'error' || m.type() === 'warning') {
    consoleErrors.push(`[${m.type()}] ${m.text()}`);
  }
});
page.on('requestfailed', r => {
  failedRequests.push(`FAILED ${r.method()} ${r.url()} :: ${r.failure()?.errorText}`);
});
page.on('response', r => {
  const u = r.url();
  if (u.includes(URL.replace(/\/$/,'')) || u.includes('aventuraenelsella') || u.includes('rutevia') || u.includes('googletag')) {
    allRequests.push(`${r.status()} ${r.request().resourceType().padEnd(11)} ${u}`);
  }
});

try {
  const resp = await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  console.log('=== Status', resp.status(), '===');

  // Read computed styles of key elements
  const checks = await page.evaluate(() => {
    const out = {};
    const body = document.body;
    out.bodyFont = getComputedStyle(body).fontFamily;
    out.bodyBg = getComputedStyle(body).backgroundColor;
    out.bodyDisplay = getComputedStyle(body).display;
    const h1 = document.querySelector('h1');
    out.h1Text = h1 ? h1.textContent.trim().slice(0, 80) : '(no h1)';
    out.h1Font = h1 ? getComputedStyle(h1).fontFamily : null;
    out.h1Size = h1 ? getComputedStyle(h1).fontSize : null;
    const linkCss = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
    out.stylesheets = linkCss;
    out.stylesheetsLoaded = linkCss.map(href => {
      // Check if loaded via document.styleSheets
      return Array.from(document.styleSheets).some(s => s.href === href);
    });
    // CSS variable check
    out.tokenBgBase = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-base');
    out.tokenFontSans = getComputedStyle(document.documentElement).getPropertyValue('--font-sans');
    // Check skinned header
    const header = document.querySelector('header');
    out.headerExists = !!header;
    out.headerDisplay = header ? getComputedStyle(header).display : null;
    // Reveal markers
    out.hasJsReady = document.documentElement.classList.contains('js-ready');
    out.totalElements = document.querySelectorAll('*').length;
    return out;
  });
  console.log('=== Computed styles ===');
  console.log(JSON.stringify(checks, null, 2));

  // Screenshot
  await page.screenshot({ path: '/tmp/debug_render.png', fullPage: false });
  console.log('\nScreenshot saved to /tmp/debug_render.png');

} catch (e) {
  console.log('NAV ERROR:', e.message);
}

console.log('\n=== Failed requests ===');
failedRequests.forEach(r => console.log(r));
console.log('\n=== Console errors/warnings ===');
consoleErrors.forEach(r => console.log(r));
console.log('\n=== All asset responses ===');
allRequests.slice(0, 40).forEach(r => console.log(r));

await browser.close();
