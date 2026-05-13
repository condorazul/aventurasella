#!/usr/bin/env node
const URL = 'http://localhost:4321/cuanto-dura/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: '¿Cuánto dura el descenso del Sella?',   label: 'Title · keyword exacta' },
  { type: 'present', needle: 'Tiempos por tramo',                      label: 'Title · long-tail secundaria' },
  { type: 'present', needle: 'rel="canonical"',                        label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/cuanto-dura/"', label: 'Canonical URL correcta' },
  // H1 + headings
  { type: 'present', needle: 'id="cdh-title"',                         label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                           label: 'H1 · accent italic' },
  // Schema
  { type: 'present', needle: '"@type":"Article"',                      label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',                      label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',               label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-20"',           label: 'Schema · datePublished' },
  { type: 'absent',  needle: '"@type":"Service"',                      label: 'Sin Schema Service (página informativa)' },
  // Keywords principales del copy
  { type: 'present', needle: 'Mini Sella',                             label: 'Keyword · Mini Sella' },
  { type: 'present', needle: 'Descenso Completo',                      label: 'Keyword · Descenso Completo' },
  { type: 'present', needle: '14,5 km',                                label: 'Dato · distancia completa' },
  { type: 'present', needle: '7 km',                                   label: 'Dato · distancia Mini' },
  { type: 'present', needle: '2 – 3 h',                                label: 'Dato · duración Mini' },
  { type: 'present', needle: '4 – 5 h',                                label: 'Dato · duración Completo' },
  { type: 'present', needle: 'Toraño',                                 label: 'Dato · Toraño (salida anticipada)' },
  { type: 'present', needle: 'Fríes',                                  label: 'Dato · Fríes (final Completa)' },
  { type: 'present', needle: 'Arriondas',                              label: 'Dato · Arriondas (inicio)' },
  { type: 'present', needle: 'caudal',                                 label: 'Factor · caudal' },
  { type: 'present', needle: 'ritmo de remo',                          label: 'Factor · ritmo de remo' },
  // Canonical copy (reglas de memoria)
  { type: 'present', needle: 'Reserva sin pagar ahora',                label: 'USP · sin pago adelantado' },
  { type: 'absent',  needle: '3 rutas',                                 label: 'Sin mencionar 3 rutas (sólo tenemos 2)' },
  { type: 'absent',  needle: 'tramo intermedio',                       label: 'Sin tramo intermedio (no existe)' },
  // Interlinking
  { type: 'present', needle: 'href="/precios/"',                       label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/con-ninos/"',                     label: 'Link interno · con-ninos' },
  { type: 'present', needle: 'href="/con-perro/"',                     label: 'Link interno · con-perro' },
  // Accesibilidad
  { type: 'present', needle: 'aria-label="Breadcrumb"',                label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="cnf-faq"',                         label: 'FAQ · acordeón exclusive' },
  // Long-tail + USP (refuerzo SEO)
  { type: 'present', needle: 'tiempo del descenso del Sella',          label: 'Long-tail · "tiempo del descenso del Sella"' },
  { type: 'present', needle: 'cuánto se tarda',                         label: 'Long-tail · "cuánto se tarda"' },
  { type: 'present', needle: 'monitores titulados',                    label: 'USP · monitores titulados' },
  { type: 'present', needle: 'mascotas gratis',                        label: 'USP · mascotas gratis (meta)' },
  { type: 'present', needle: '24 h',                                    label: 'Política · cancelación 24 h' },
  { type: 'present', needle: 'Confederación Hidrográfica',             label: 'Autoridad · CHC (trust)' },
  // Tabs + animaciones
  { type: 'present', needle: 'data-tab="mini"',                        label: 'Tabs · atributo Mini' },
  { type: 'present', needle: 'data-tab="comp"',                        label: 'Tabs · atributo Completo' },
  { type: 'present', needle: 'role="tabpanel"',                        label: 'A11y · tabpanel' },
  // Interlinking + reserva
  { type: 'present', needle: 'tel:+34681093673',                       label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',                      label: 'Canal · WhatsApp (wa.me)' },
  { type: 'present', needle: 'href="/contacto/"',                      label: 'Link interno · contacto' },
  { type: 'present', needle: 'href="/reservar/"',                      label: 'Link interno · reservar' },
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
