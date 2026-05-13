#!/usr/bin/env node
const URL = 'http://localhost:4321/con-perro/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: 'Descenso del Sella con perro',   label: 'Title · keyword exacta' },
  { type: 'present', needle: 'mascota',                        label: 'Title/desc · long-tail' },
  { type: 'present', needle: 'rel="canonical"',                label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/con-perro/"', label: 'Canonical URL correcta' },
  // OG / Twitter
  { type: 'present', needle: 'og:type',                        label: 'OG · type' },
  { type: 'present', needle: 'twitter:card',                   label: 'Twitter · card' },
  { type: 'present', needle: 'con-perro-cta-lg.jpg',           label: 'OG image · con-perro-cta (foto nueva)' },
  // H1 + headings
  { type: 'present', needle: 'id="cnh-title"',                 label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                   label: 'H1 · accent italic' },
  { type: 'present', needle: 'cnh__swoosh',                    label: 'H1 · swoosh bajo "perro"' },
  // Schema · Article enriquecido
  { type: 'present', needle: '"@type":"Article"',              label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"Service"',              label: 'Schema · Service' },
  { type: 'present', needle: '"@type":"AggregateRating"',      label: 'Schema · AggregateRating · star snippet' },
  { type: 'present', needle: '"@type":"FAQPage"',              label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',       label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-19"',   label: 'Schema · datePublished' },
  { type: 'present', needle: '"dateModified":"2026-05-11"',    label: 'Schema · dateModified (freshness)' },
  { type: 'present', needle: '"articleSection":"Mascotas"',    label: 'Schema · articleSection' },
  { type: 'present', needle: '"keywords"',                     label: 'Schema · keywords array' },
  // Schema · Service AggregateOffer (0€ mascota · 30€ niño · 40€ adulto)
  { type: 'present', needle: '"@type":"AggregateOffer"',       label: 'Schema · AggregateOffer (rango precios)' },
  { type: 'present', needle: '"lowPrice":"0.00"',              label: 'Schema · lowPrice 0€ (mascota gratis)' },
  { type: 'present', needle: '"highPrice":"40.00"',            label: 'Schema · highPrice 40€ (adulto)' },
  { type: 'present', needle: '"serviceType"',                  label: 'Schema · Service serviceType' },
  // Fotos nuevas + alts SEO
  { type: 'present', needle: 'con-perro-intro-1',              label: 'Foto nueva · intro grande' },
  { type: 'present', needle: 'con-perro-intro-2',              label: 'Foto nueva · intro pequeña' },
  { type: 'present', needle: 'con-perro-cta',                  label: 'Foto nueva · CTA bg' },
  { type: 'present', needle: 'Perro a bordo de una canoa',     label: 'Alt intro-1 descriptiva' },
  { type: 'present', needle: 'Perro disfrutando del río Sella',label: 'Alt intro-2 descriptiva' },
  { type: 'present', needle: 'Familia con perro disfrutando',  label: 'Alt CTA descriptiva' },
  // USPs dog-friendly
  { type: 'present', needle: 'Mascotas 100% gratis',           label: 'USP · mascotas gratis · protagonista' },
  { type: 'present', needle: 'El perro va suelto',             label: 'Seguridad · suelto en canoa (nunca atado)' },
  { type: 'present', needle: 'Correa obligatoria',             label: 'Seguridad · correa en tierra' },
  { type: 'present', needle: 'Chaleco canino',                 label: 'Seguridad · chaleco canino' },
  { type: 'present', needle: 'Monitores con experiencia canina',label: 'USP · monitores dog-friendly' },
  // Reglas operacionales (regla memoria)
  { type: 'present', needle: 'lo ponemos nosotros',            label: 'Chaleco canino · lo ponemos nosotros' },
  { type: 'present', needle: 'hasta agotar existencias',       label: 'Chaleco canino · stock limitado' },
  { type: 'absent',  needle: 'orientamos dónde conseguir',     label: 'Sin contradicción "orientamos dónde"' },
  { type: 'absent',  needle: 'Nuestra + la tuya',              label: 'Sin claim falso de toalla' },
  // Canonical copy coherence
  { type: 'present', needle: 'sin pagar ahora',                label: 'USP · sin pago adelantado' },
  { type: 'present', needle: 'avisando con 24 h',              label: 'Política cancelación · 24h si tarjeta' },
  { type: 'present', needle: '147 reseñas',                    label: 'Trust · reseñas' },
  { type: 'absent',  needle: 'efectivo',                        label: 'Sin palabra "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                   label: 'Sin "enlace seguro"' },
  { type: 'absent',  needle: 'Cancela gratis 24',               label: 'Sin "Cancela gratis 24"' },
  // Interlinking
  { type: 'present', needle: 'href="/precios/"',               label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/con-ninos/"',             label: 'Link interno · con-ninos (sibling)' },
  { type: 'present', needle: 'href="/cuanto-dura/"',           label: 'Link interno · cuanto-dura' },
  { type: 'present', needle: 'href="/recorrido-y-mapa/"',      label: 'Link interno · recorrido-y-mapa' },
  { type: 'present', needle: 'tel:+34681093673',               label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',              label: 'Canal · WhatsApp' },
  // Accesibilidad
  { type: 'present', needle: 'aria-label="Breadcrumb"',        label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="cnf-faq"',                 label: 'FAQ · acordeón exclusive' },
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
