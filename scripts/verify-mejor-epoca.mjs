#!/usr/bin/env node
const URL = 'http://localhost:4321/mejor-epoca/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: 'Mejor época para hacer el descenso del Sella', label: 'Title · keyword exacta' },
  { type: 'present', needle: 'mes a mes',                                      label: 'Title · long-tail' },
  { type: 'present', needle: 'rel="canonical"',                                label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/mejor-epoca/"', label: 'Canonical URL correcta' },
  // H1 + headings
  { type: 'present', needle: 'id="meh-title"',                                 label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                                   label: 'H1 · accent italic' },
  // Schema
  { type: 'present', needle: '"@type":"Article"',                              label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',                              label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',                       label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-20"',                   label: 'Schema · datePublished' },
  { type: 'absent',  needle: '"@type":"Service"',                              label: 'Sin Service (página informativa)' },
  // Keywords principales
  { type: 'present', needle: 'mejor época',                                    label: 'Keyword · "mejor época"' },
  { type: 'present', needle: 'descenso del Sella',                             label: 'Keyword · "descenso del Sella"' },
  { type: 'present', needle: 'cuándo hacer',                                   label: 'Long-tail · "cuándo hacer"' },
  { type: 'present', needle: 'descenso del Sella en verano',                   label: 'Long-tail · verano' },
  { type: 'present', needle: 'primavera',                                      label: 'Estación · primavera' },
  { type: 'present', needle: 'septiembre',                                     label: 'Mes ideal · septiembre' },
  { type: 'present', needle: 'agosto',                                         label: 'Mes pico · agosto' },
  { type: 'present', needle: 'afluencia',                                      label: 'Concepto · afluencia' },
  { type: 'present', needle: 'caudal',                                         label: 'Concepto · caudal' },
  // Canonical copy
  { type: 'present', needle: 'Confederación Hidrográfica del Cantábrico',      label: 'Autoridad · CHC' },
  { type: 'present', needle: '10:30 y las 12:30',                              label: 'Horario abierto Premium · llegada' },
  { type: 'present', needle: 'hasta las 18:00 h',                              label: 'Normativa · permanencia río' },
  { type: 'present', needle: 'Arriondas',                                       label: 'Local SEO · ubicación' },
  { type: 'present', needle: 'Reserva sin pagar ahora',                        label: 'USP · sin pago adelantado' },
  { type: 'present', needle: 'mascotas gratis',                                label: 'USP · mascotas gratis' },
  { type: 'present', needle: '5 años y 1,15 m',                                label: 'Canonical · edad' },
  { type: 'present', needle: 'monitor titulado',                               label: 'USP · monitor titulado' },
  { type: 'absent',  needle: 'efectivo',                                        label: 'Sin "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                                   label: 'Sin "enlace seguro"' },
  // Interlinking
  { type: 'present', needle: 'href="/cuanto-dura/"',                           label: 'Link interno · /cuanto-dura/' },
  { type: 'present', needle: 'href="/precios/"',                               label: 'Link interno · /precios/' },
  { type: 'present', needle: 'href="/con-ninos/"',                             label: 'Link interno · /con-ninos/' },
  { type: 'present', needle: 'href="/con-perro/"',                             label: 'Link interno · /con-perro/' },
  { type: 'present', needle: 'href="/reservar/"',                              label: 'Link interno · /reservar/' },
  { type: 'present', needle: 'href="/contacto/"',                              label: 'Link interno · /contacto/' },
  { type: 'present', needle: 'tel:+34681093673',                               label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',                              label: 'Canal · WhatsApp' },
  // Tabs + Calendar + Bars (nuevos componentes)
  { type: 'present', needle: 'data-tab="primavera"',                           label: 'Tab · primavera' },
  { type: 'present', needle: 'data-tab="verano"',                              label: 'Tab · verano' },
  { type: 'present', needle: 'data-tab="otono"',                               label: 'Tab · otoño' },
  { type: 'present', needle: 'data-tab="invierno"',                            label: 'Tab · invierno' },
  { type: 'present', needle: 'class="mec__grid"',                              label: 'Calendar · 12 meses grid' },
  { type: 'present', needle: 'class="mea__chart"',                             label: 'Barras · afluencia chart' },
  // A11y
  { type: 'present', needle: 'aria-label="Breadcrumb"',                        label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'role="tablist"',                                 label: 'A11y · tablist' },
  { type: 'present', needle: 'role="tabpanel"',                                label: 'A11y · tabpanel' },
  { type: 'present', needle: 'name="mef-faq"',                                 label: 'FAQ · acordeón exclusive' },
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
