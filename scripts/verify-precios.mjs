#!/usr/bin/env node
const URL = 'http://localhost:4321/precios/';
const CHECKS = [
  { type: 'present', needle: 'Precios del',                   label: 'H1 · "Precios del"' },
  { type: 'present', needle: 'descenso del Sella',            label: 'H1 · keyword principal' },
  { type: 'present', needle: '"@type":"Product"',             label: 'Schema · Product' },
  { type: 'present', needle: '"@type":"FAQPage"',             label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',      label: 'Schema · Breadcrumbs' },
  { type: 'present', needle: '"price":"30.00"',               label: 'Schema · Offer 30€ niños' },
  { type: 'present', needle: '"price":"40.00"',               label: 'Schema · Offer 40€ adultos' },
  { type: 'present', needle: '"price":"35.00"',               label: 'Schema · Offer 35€ día D' },
  { type: 'present', needle: 'Niños · 5–12',                  label: 'Hero stat · niños' },
  { type: 'present', needle: 'Un solo precio',                label: 'Copy editorial' },
  { type: 'present', needle: 'Eliges ruta en el agua',        label: 'Differentiator · un precio ambas rutas' },
  { type: 'present', needle: 'Mini Sella',                    label: 'Ruta Mini mencionada' },
  { type: 'present', needle: 'sin pagar ahora',               label: 'USP · sin pago adelantado' },
  { type: 'present', needle: 'Cambios y cancelaciones flexibles', label: 'USP · cancelación flexible' },
  { type: 'absent',  needle: 'llover',                         label: 'Sin "llover"' },
  { type: 'absent',  needle: 'Cancela gratis 24',              label: 'Sin "Cancela gratis 24"' },
  { type: 'present', needle: 'descenso-internacional-del-sella', label: 'Enlace interno · Internacional' },
  { type: 'present', needle: 'aria-label="Breadcrumb"',       label: 'A11y · breadcrumb' },
];

console.log(`→ GET ${URL}`);
let html;
try {
  const resp = await fetch(URL, { cache: 'no-store' });
  console.log(`  status: ${resp.status}`);
  if (!resp.ok) { console.error('❌ no OK'); process.exit(2); }
  html = await resp.text();
} catch (e) { console.error(`❌ ${e.message}`); process.exit(2); }

let ok = 0, fail = 0;
for (const c of CHECKS) {
  const found = html.includes(c.needle);
  const pass = c.type === 'present' ? found : !found;
  console.log(`  ${pass ? '✅' : '❌'} [${c.type}] "${c.needle}" — ${c.label}`);
  pass ? ok++ : fail++;
}
console.log(`\n${fail === 0 ? '✅ TODO OK' : '❌ FALLOS'} · ${ok} pass · ${fail} fail`);
process.exit(fail === 0 ? 0 : 1);
