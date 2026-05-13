#!/usr/bin/env node
const URL = 'http://localhost:4321/recorrido-y-mapa/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: 'Recorrido y mapa del descenso del Sella',  label: 'Title · keyword exacta' },
  { type: 'present', needle: 'Arriondas → Fríes',                        label: 'Title · ruta completa' },
  { type: 'present', needle: 'rel="canonical"',                          label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/recorrido-y-mapa/"', label: 'Canonical URL correcta' },
  // H1 + headings
  { type: 'present', needle: 'id="rrh-title"',                           label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                             label: 'H1 · accent italic' },
  // Schema
  { type: 'present', needle: '"@type":"Article"',                        label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',                        label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',                 label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-21"',             label: 'Schema · datePublished hoy' },
  // Keywords principales recorrido
  { type: 'present', needle: 'recorrido del descenso',                   label: 'Keyword · "recorrido del descenso"' },
  { type: 'present', needle: '14,5 km',                                   label: 'Dato · km Completo' },
  { type: 'present', needle: '7 km',                                      label: 'Dato · km Mini' },
  { type: 'present', needle: 'Arriondas',                                 label: 'Geo · Arriondas' },
  { type: 'present', needle: 'Toraño',                                    label: 'Geo · Toraño' },
  { type: 'present', needle: 'Fríes',                                     label: 'Geo · Fríes' },
  { type: 'present', needle: 'chiringuito',                               label: 'Concepto · chiringuito' },
  { type: 'present', needle: 'playa fluvial',                             label: 'Concepto · playa fluvial' },
  { type: 'present', needle: 'Pasarela',                                  label: 'Concepto · pasarela' },
  // Chiringuitos reales (6)
  { type: 'present', needle: 'Riverland',                                 label: 'Chiringuito · Riverland' },
  { type: 'present', needle: 'El Oasis',                                  label: 'Chiringuito · El Oasis' },
  { type: 'present', needle: 'El Prau',                                   label: 'Chiringuito · El Prau' },
  { type: 'present', needle: 'El Bosque',                                 label: 'Chiringuito · El Bosque' },
  { type: 'present', needle: 'La Mediana',                                label: 'Chiringuito · La Mediana' },
  { type: 'present', needle: 'Pozo del Arco',                             label: 'Hito · Pozo del Arco' },
  // Canonical copy + USPs
  { type: 'present', needle: 'Confederación Hidrográfica',                label: 'Autoridad · CHC' },
  { type: 'present', needle: 'hasta las 18:00',                           label: 'Normativa · permanencia' },
  { type: 'present', needle: 'mascotas gratis',                           label: 'USP · mascotas gratis' },
  { type: 'absent',  needle: 'efectivo',                                   label: 'Sin "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                              label: 'Sin "enlace seguro"' },
  // Interlinking
  { type: 'present', needle: 'href="/cuanto-dura/"',                     label: 'Link interno · cuanto-dura' },
  { type: 'present', needle: 'href="/mejor-epoca/"',                     label: 'Link interno · mejor-epoca' },
  { type: 'present', needle: 'href="/precios/"',                         label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/como-llegar/"',                     label: 'Link interno · como-llegar' },
  { type: 'present', needle: 'href="/reservar/"',                        label: 'Link interno · reservar' },
  { type: 'present', needle: 'href="/contacto/"',                        label: 'Link interno · contacto' },
  { type: 'present', needle: 'tel:+34681093673',                         label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',                        label: 'Canal · WhatsApp' },
  // Componentes reutilizados
  { type: 'present', needle: 'id="routeV2-map"',                         label: 'Componente · MapaInteractivoSella reutilizado' },
  { type: 'present', needle: 'data-rrs-track',                           label: 'Carrusel hitos · track' },
  { type: 'present', needle: 'data-drag-scroll',                         label: 'Drag-scroll activado' },
  // A11y
  { type: 'present', needle: 'aria-label="Breadcrumb"',                  label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="rrf-faq"',                           label: 'FAQ · acordeón exclusive' },
  // Nuevos tramos · long-tail SEO (hitos históricos del río)
  { type: 'present', needle: 'Puente de las Piraguas',                   label: 'Tramo · Puente de las Piraguas' },
  { type: 'present', needle: 'La Raíz',                                   label: 'Tramo · La Raíz (primer rápido)' },
  { type: 'present', needle: 'La Remolina',                              label: 'Tramo · La Remolina' },
  { type: 'present', needle: 'El Ricao',                                  label: 'Tramo · El Ricao' },
  { type: 'present', needle: 'Triongo',                                   label: 'Tramo · Triongo' },
  { type: 'present', needle: 'El Picu La Vieya',                         label: 'Tramo · El Picu La Vieya' },
  { type: 'present', needle: 'Rabión del Diablu',                        label: 'Tramo · Rabión del Diablu' },
  { type: 'present', needle: 'La Requexada',                             label: 'Tramo · La Requexada' },
  { type: 'present', needle: 'Llordón',                                   label: 'Tramo · Llordón' },
  { type: 'present', needle: 'Pasarela de Cuevas',                       label: 'Tramo · Pasarela de Cuevas' },
  { type: 'present', needle: 'Pasarela de La Uña',                       label: 'Tramo · Pasarela de La Uña' },
  { type: 'present', needle: 'Manés Fernández',                          label: 'E-E-A-T · origen histórico 1929' },
  { type: 'present', needle: '1929',                                      label: 'E-E-A-T · año de origen' },
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
