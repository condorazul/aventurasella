#!/usr/bin/env node
const URL = 'http://localhost:4321/opiniones/';
const CHECKS = [
  // SEO meta + H1
  { type: 'present', needle: 'Opiniones del descenso del Sella',          label: 'Title · keyword exacta' },
  { type: 'present', needle: '4,5★ en Google y TripAdvisor',              label: 'Title · stars + fuentes' },
  { type: 'present', needle: 'rel="canonical"',                            label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/opiniones/"', label: 'Canonical URL correcta' },
  { type: 'present', needle: 'id="opH-title"',                             label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                               label: 'H1 · accent italic' },
  // Schema
  { type: 'present', needle: '"@type":"Article"',                          label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',                          label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',                   label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"@type":"LocalBusiness"',                    label: 'Schema · LocalBusiness' },
  { type: 'present', needle: '"@type":"AggregateRating"',                  label: 'Schema · AggregateRating' },
  { type: 'present', needle: '"ratingValue":4.5',                           label: 'Schema · 4.5 rating' },
  { type: 'present', needle: '"reviewCount":147',                           label: 'Schema · 147 reviews' },
  { type: 'present', needle: '"@type":"Review"',                           label: 'Schema · Review entries' },
  { type: 'present', needle: '"datePublished":"2026-04-22"',               label: 'Schema · datePublished' },
  { type: 'present', needle: '"dateModified":"2026-05-11"',                label: 'Schema · dateModified (freshness)' },
  { type: 'present', needle: '"articleSection"',                            label: 'Schema · articleSection' },
  { type: 'present', needle: '"keywords"',                                  label: 'Schema · keywords array' },
  // LocalBusiness enriquecido (paridad con como-llegar + contacto)
  { type: 'present', needle: 'TouristAttraction',                           label: 'Schema · additionalType TouristAttraction' },
  { type: 'present', needle: 'SportsActivityLocation',                      label: 'Schema · additionalType SportsActivityLocation' },
  { type: 'present', needle: 'alternateName',                               label: 'Schema · alternateName (Google Business)' },
  { type: 'present', needle: '"@type":"PostalAddress"',                     label: 'Schema · PostalAddress' },
  { type: 'present', needle: '"@type":"GeoCoordinates"',                    label: 'Schema · GeoCoordinates' },
  { type: 'present', needle: '"latitude":43.3874223',                       label: 'Schema · lat exacta' },
  { type: 'present', needle: '"longitude":-5.1866022',                      label: 'Schema · lng exacta' },
  { type: 'present', needle: '"hasMap"',                                    label: 'Schema · hasMap' },
  { type: 'present', needle: '0xd36195b04532889',                           label: 'FID Google Business · cellId' },
  { type: 'present', needle: '0x9b2face87069ecfc',                          label: 'FID Google Business · CID' },
  { type: 'present', needle: '"openingHoursSpecification"',                 label: 'Schema · openingHours' },
  { type: 'present', needle: '"closes":"20:00"',                            label: 'Schema · cierra 20:00' },
  { type: 'present', needle: 'info@aventuraenelsella.es',                   label: 'Schema · email correcto' },
  { type: 'absent',  needle: 'ChIJiShTBFsZNg0R',                            label: 'Sin Place ID de Disfruta del Sella (competidor)' },
  // Keywords principales
  { type: 'present', needle: 'opiniones',                                   label: 'Keyword · opiniones' },
  { type: 'present', needle: 'reseñas',                                     label: 'Keyword · reseñas' },
  { type: 'present', needle: 'descenso del Sella',                          label: 'Keyword · descenso del Sella' },
  { type: 'present', needle: '147',                                         label: 'Dato · 147 reviews total' },
  { type: 'present', needle: '4,5',                                          label: 'Dato · 4,5 media' },
  { type: 'present', needle: 'Google',                                      label: 'Fuente · Google' },
  { type: 'present', needle: 'TripAdvisor',                                 label: 'Fuente · TripAdvisor' },
  // Testimonios reales (nombres y fuentes)
  { type: 'present', needle: 'Anaïs',                                       label: 'Testimonio · Anaïs' },
  { type: 'present', needle: 'Nacho',                                        label: 'Testimonio · Nacho' },
  { type: 'present', needle: 'Carlos',                                       label: 'Testimonio · Carlos' },
  { type: 'present', needle: 'me ha encantado',                              label: 'Quote · Anaïs exacta' },
  { type: 'present', needle: 'Todo puntual y muy amables',                   label: 'Quote · Nacho exacta' },
  { type: 'present', needle: 'Merece la pena',                               label: 'Quote · Carlos exacta' },
  // Perfiles
  { type: 'present', needle: 'Familias',                                     label: 'Perfil · Familias' },
  { type: 'present', needle: 'Parejas',                                      label: 'Perfil · Parejas' },
  { type: 'present', needle: 'Amigos',                                       label: 'Perfil · Amigos' },
  // Copy canónico · frases prohibidas
  { type: 'absent',  needle: 'efectivo',                                     label: 'Sin "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                                label: 'Sin "enlace seguro"' },
  { type: 'absent',  needle: 'asegurar hora',                                label: 'Sin "asegurar hora" (horario abierto)' },
  { type: 'absent',  needle: 'última salida 13:00',                          label: 'Sin "última salida 13:00" obsoleto' },
  { type: 'absent',  needle: 'salidas escalonadas',                          label: 'Sin "salidas escalonadas" obsoleto' },
  { type: 'absent',  needle: 'reservas@aventuraenelsella.es',                label: 'Email migrado · sin reservas@' },
  // Interlinking obligatorio
  { type: 'present', needle: 'href="/reservar/"',                           label: 'Link interno · reservar' },
  { type: 'present', needle: 'href="/precios/"',                            label: 'Link interno · precios' },
  { type: 'present', needle: 'href="/con-ninos/"',                          label: 'Link interno · con-ninos' },
  { type: 'present', needle: 'href="/con-perro/"',                          label: 'Link interno · con-perro' },
  { type: 'present', needle: 'href="/recorrido-y-mapa/"',                   label: 'Link interno · recorrido' },
  { type: 'present', needle: 'href="/contacto/"',                           label: 'Link interno · contacto' },
  // Links externos a plataformas de reseñas
  { type: 'present', needle: 'share.google/huLLaIz31FiYohuTV',              label: 'Link externo · Google Business' },
  { type: 'present', needle: 'tripadvisor.es/Attraction_Review-g608995-d12635919', label: 'Link externo · TripAdvisor' },
  // A11y + breadcrumb
  { type: 'present', needle: 'aria-label="Breadcrumb"',                     label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="op-faq"',                               label: 'FAQ · acordeón exclusive' },
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
