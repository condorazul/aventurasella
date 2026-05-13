#!/usr/bin/env node
const URL = 'http://localhost:4321/con-ninos/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: 'Descenso del Sella con niños',   label: 'Title · keyword exacta' },
  { type: 'present', needle: 'Aventura en familia',            label: 'Title · long-tail secundaria' },
  { type: 'present', needle: 'rel="canonical"',                label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/con-ninos/"', label: 'Canonical URL correcta' },
  // OG / Twitter
  { type: 'present', needle: 'og:type',                        label: 'OG · type' },
  { type: 'present', needle: 'twitter:card',                   label: 'Twitter · card' },
  { type: 'present', needle: 'peques-cta-lg.jpg',              label: 'OG image · peques-cta (foto nueva)' },
  // H1 + headings
  { type: 'present', needle: 'id="cnh-title"',                 label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                   label: 'H1 · accent italic' },
  // Schema · Article enriquecido
  { type: 'present', needle: '"@type":"Article"',              label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',              label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',       label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-17"',   label: 'Schema · datePublished' },
  { type: 'present', needle: '"dateModified":"2026-05-08"',    label: 'Schema · dateModified (freshness)' },
  { type: 'present', needle: '"articleSection":"Familia"',     label: 'Schema · articleSection' },
  { type: 'present', needle: '"keywords"',                     label: 'Schema · keywords array' },
  // Schema · Service AggregateOffer
  { type: 'present', needle: '"@type":"AggregateOffer"',       label: 'Schema · AggregateOffer (rango precios)' },
  { type: 'present', needle: '"lowPrice":"30.00"',             label: 'Schema · lowPrice 30€ (niño)' },
  { type: 'present', needle: '"highPrice":"40.00"',            label: 'Schema · highPrice 40€ (adulto)' },
  { type: 'present', needle: '"serviceType"',                  label: 'Schema · Service serviceType' },
  // Imágenes con alt descriptiva (SEO + a11y)
  { type: 'present', needle: 'Familia con niños bajando',      label: 'Alt polaroid-1 descriptiva' },
  { type: 'present', needle: 'Niño remando con pala doble',    label: 'Alt polaroid-2 descriptiva' },
  { type: 'present', needle: 'Familia con niños disfrutando',  label: 'Alt CTA descriptiva' },
  // Imágenes nuevas
  { type: 'present', needle: 'peques-polaroid-1',              label: 'Foto nueva · polaroid 1' },
  { type: 'present', needle: 'peques-polaroid-2',              label: 'Foto nueva · polaroid 2' },
  { type: 'present', needle: 'peques-polaroid-3',              label: 'Foto nueva · polaroid 3' },
  { type: 'present', needle: 'peques-cta',                     label: 'Foto nueva · CTA bg' },
  // Canonical copy (regla de memoria)
  { type: 'present', needle: '5 años y 1,15 m',                label: 'Edad mínima canónica (5 años y 1,15 m)' },
  { type: 'present', needle: 'sin pagar ahora',                label: 'USP · sin pago adelantado' },
  { type: 'present', needle: 'avisando con 24 h',              label: 'Política cancelación · 24h si tarjeta' },
  { type: 'absent',  needle: 'efectivo',                        label: 'Sin palabra "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                   label: 'Sin "enlace seguro"' },
  { type: 'absent',  needle: 'Cancela gratis 24',               label: 'Sin "Cancela gratis 24"' },
  // Trust / diferenciación
  { type: 'present', needle: 'Monitores titulados',            label: 'USP · monitores titulados' },
  { type: 'present', needle: 'Mascotas gratis',                label: 'USP · mascotas gratis' },
  { type: 'present', needle: 'canoa compartida',               label: 'Info · canoa compartida con adulto' },
  { type: 'present', needle: '147 reseñas',                    label: 'Trust · reseñas' },
  // Interlinking
  { type: 'present', needle: 'href="/precios/"',               label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/cuanto-dura/"',           label: 'Link interno · cuanto-dura' },
  { type: 'present', needle: 'href="/con-perro/"',             label: 'Link interno · con-perro' },
  { type: 'present', needle: 'href="/recorrido-y-mapa/"',      label: 'Link interno · recorrido-y-mapa' },
  { type: 'present', needle: 'tel:+34681093673',               label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',              label: 'Canal · WhatsApp' },
  // Accesibilidad
  { type: 'present', needle: 'aria-label="Breadcrumb"',        label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="cnf-faq"',                 label: 'FAQ · acordeón exclusive' },
  // Marquee sage (banda editorial)
  { type: 'present', needle: 'marquee--sage',                  label: 'Marquee sage (banda entre Beneficios y Reviews)' },
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
