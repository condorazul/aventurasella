#!/usr/bin/env node
const URL = 'http://localhost:4321/reserva-premium/';
const CHECKS = [
  // SEO meta + H1
  { type: 'present', needle: 'Reserva Premium del descenso del Sella',          label: 'Title · keyword principal' },
  { type: 'present', needle: 'Todo Incluido + Picnic Asturiano',                 label: 'Title · USP diferencial' },
  { type: 'present', needle: 'rel="canonical"',                                  label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/reserva-premium/"', label: 'Canonical URL correcta' },
  { type: 'present', needle: 'id="rpH-title"',                                   label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                                     label: 'H1 · accent italic' },
  // Schema
  { type: 'present', needle: '"@type":"Article"',                                label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"Product"',                                label: 'Schema · Product' },
  { type: 'present', needle: '"@type":"Offer"',                                  label: 'Schema · Offer' },
  { type: 'present', needle: '"@type":"FAQPage"',                                label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',                         label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"@type":"AggregateRating"',                        label: 'Schema · AggregateRating' },
  { type: 'present', needle: '"ratingValue":4.5',                                 label: 'Schema · 4.5 rating' },
  { type: 'present', needle: '"reviewCount":147',                                 label: 'Schema · 147 reviews' },
  { type: 'present', needle: '"price":"40"',                                      label: 'Schema · precio adulto 40€' },
  { type: 'present', needle: '"price":"30"',                                      label: 'Schema · precio niño 30€' },
  { type: 'present', needle: '"datePublished":"2026-04-22"',                      label: 'Schema · datePublished' },
  // Keywords Premium long-tail
  { type: 'present', needle: 'Descenso del Sella Premium',                        label: 'KW · Descenso del Sella Premium' },
  { type: 'present', needle: 'todo incluido',                                     label: 'KW · todo incluido' },
  { type: 'present', needle: 'picnic asturiano',                                  label: 'KW · picnic asturiano' },
  { type: 'present', needle: 'Premium',                                           label: 'KW · Premium' },
  // Palabra PROHIBIDA (memory)
  { type: 'absent',  needle: 'VIP',                                               label: 'Sin "VIP" (memoria)' },
  // Copy canónico · frases prohibidas
  { type: 'absent',  needle: 'efectivo',                                          label: 'Sin "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                                     label: 'Sin "enlace seguro"' },
  // Precios + USPs
  { type: 'present', needle: '40',                                                label: 'Precio · 40€ adulto' },
  { type: 'present', needle: '30',                                                label: 'Precio · 30€ niño' },
  { type: 'present', needle: 'mascotas',                                          label: 'USP · mascotas gratis' },
  { type: 'present', needle: 'picnic',                                            label: 'USP · picnic' },
  { type: 'present', needle: 'bidón',                                             label: 'Incluido · bidón estanco' },
  { type: 'present', needle: 'transfer',                                          label: 'Incluido · transfer' },
  { type: 'present', needle: 'duchas',                                            label: 'Incluido · duchas calientes' },
  { type: 'present', needle: 'monitor',                                           label: 'Incluido · monitor' },
  { type: 'present', needle: 'Taquillas con llave',                               label: 'Incluido · taquillas con llave (diferencial)' },
  { type: 'present', needle: 'Vestuarios con duchas',                             label: 'Incluido · vestuarios + duchas' },
  { type: 'present', needle: 'Parking privado',                                   label: 'Incluido · parking privado (diferencial)' },
  { type: 'present', needle: 'Seguros obligatorios',                              label: 'Incluido · seguros' },
  { type: 'present', needle: 'Canoa insumergible',                                label: 'Incluido · canoa insumergible' },
  { type: 'present', needle: 'Traje de neopreno',                                 label: 'Incluido · neopreno en fechas frías' },
  { type: 'present', needle: 'Rampa de embarque',                                 label: 'Incluido · rampa (opcional y gratuita)' },
  { type: 'present', needle: 'a pie de río',                                      label: 'Honestidad · alternativa pie de río' },
  { type: 'present', needle: 'Pala doble',                                        label: 'Incluido · pala doble' },
  { type: 'present', needle: 'empanada de bonito',                                label: 'Picnic · empanada de bonito (real)' },
  { type: 'present', needle: 'bollín preñao',                                     label: 'Picnic · bollín preñao (real)' },
  { type: 'present', needle: 'No tenemos opción vegana',                          label: 'Picnic · constraint honesto (no vegan)' },
  // Interlinking obligatorio
  { type: 'present', needle: 'href="/reservar/"',                                label: 'Link interno · reservar' },
  { type: 'present', needle: 'href="/precios/"',                                 label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/con-ninos/"',                               label: 'Link interno · con-ninos' },
  { type: 'present', needle: 'href="/recorrido-y-mapa/"',                        label: 'Link interno · recorrido' },
  { type: 'present', needle: 'href="/mejor-epoca/"',                             label: 'Link interno · mejor-epoca' },
  { type: 'present', needle: 'href="/opiniones/"',                               label: 'Link interno · opiniones' },
  { type: 'present', needle: 'href="/contacto/"',                                label: 'Link interno · contacto' },
  // Testimonios reales
  { type: 'present', needle: 'Nacho',                                            label: 'Testimonio · Nacho' },
  { type: 'present', needle: 'Carlos',                                           label: 'Testimonio · Carlos' },
  { type: 'present', needle: 'Anaïs',                                            label: 'Testimonio · Anaïs' },
  // A11y
  { type: 'present', needle: 'aria-label="Breadcrumb"',                          label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="rp-faq"',                                    label: 'FAQ · acordeón exclusive' },
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
