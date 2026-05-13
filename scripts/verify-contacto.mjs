#!/usr/bin/env node
const URL = 'http://localhost:4321/contacto/';
const CHECKS = [
  // Core SEO
  { type: 'present', needle: '<h1',                           label: 'Hero H1 presente' },
  { type: 'present', needle: 'Contacto',                      label: 'H1 · keyword "Contacto"' },
  { type: 'present', needle: 'rel="canonical"',               label: 'Canonical link' },
  // Schema · @graph
  { type: 'present', needle: '"@type":"ContactPage"',         label: 'Schema · ContactPage' },
  { type: 'present', needle: '"@type":"LocalBusiness"',       label: 'Schema · LocalBusiness' },
  { type: 'present', needle: '"@type":"FAQPage"',             label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',      label: 'Schema · BreadcrumbList' },
  { type: 'present', needle: '"@type":"PostalAddress"',       label: 'Schema · PostalAddress' },
  { type: 'present', needle: '"@type":"GeoCoordinates"',      label: 'Schema · GeoCoordinates' },
  { type: 'present', needle: '"@type":"AggregateRating"',     label: 'Schema · AggregateRating' },
  // Schema · enrich
  { type: 'present', needle: 'TouristAttraction',             label: 'Schema · additionalType TouristAttraction' },
  { type: 'present', needle: 'SportsActivityLocation',        label: 'Schema · additionalType SportsActivityLocation' },
  { type: 'present', needle: 'alternateName',                 label: 'Schema · alternateName (Google Business)' },
  { type: 'present', needle: '"hasMap"',                      label: 'Schema · hasMap' },
  { type: 'present', needle: '"ratingValue":"4.5"',           label: 'Schema · rating 4.5' },
  { type: 'present', needle: '"reviewCount":"147"',           label: 'Schema · reviewCount 147' },
  // Geo · coords reales validadas 2026-05-11
  { type: 'present', needle: '"latitude":43.3874223',         label: 'Schema · lat exacta Aventura en el Sella' },
  { type: 'present', needle: '"longitude":-5.1866022',        label: 'Schema · lng exacta Aventura en el Sella' },
  { type: 'present', needle: '0xd36195b04532889',             label: 'FID Google Business · cellId' },
  { type: 'present', needle: '0x9b2face87069ecfc',            label: 'FID Google Business · CID' },
  { type: 'absent',  needle: '"latitude":43.38667',           label: 'Sin coords antiguas (43.38667)' },
  { type: 'absent',  needle: 'ChIJiShTBFsZNg0R',              label: 'Sin Place ID de Disfruta del Sella (competidor)' },
  // sameAs (Google + TripAdvisor)
  { type: 'present', needle: 'share.google/huLLaIz31FiYohuTV', label: 'sameAs · Google Business' },
  { type: 'present', needle: 'tripadvisor.es/Attraction_Review-g608995-d12635919', label: 'sameAs · TripAdvisor' },
  // NAP visible
  { type: 'present', needle: '"closes":"20:00"',              label: 'NAP Schema · cierra 20:00 (consistente con Home)' },
  { type: 'present', needle: '+34 681 09 36 73',              label: 'NAP · teléfono visible' },
  { type: 'present', needle: 'info@aventuraenelsella.es',     label: 'NAP · email visible' },
  { type: 'present', needle: 'Calle Juan Carlos',             label: 'NAP · dirección visible' },
  { type: 'present', needle: 'Arriondas',                     label: 'NAP · ciudad' },
  { type: 'present', needle: '<address',                      label: 'Semántica · <address>' },
  // Hero / lead
  { type: 'present', needle: 'Respondemos en minutos',        label: 'Lead gramática correcta' },
  { type: 'present', needle: 'descenso del Sella',            label: 'Lead · keyword principal' },
  // Mapa
  { type: 'present', needle: '43.3874223,-5.1866022',         label: 'Mapa embed · coords exactas' },
  { type: 'present', needle: 'output=embed',                  label: 'Mapa · URL embed correcta' },
  { type: 'present', needle: 'Abrir en Google Maps',          label: 'CTA · Abrir en Google Maps' },
  { type: 'present', needle: 'Cómo llegar (direcciones)',     label: 'CTA · Direcciones (FID embedded)' },
  // A11y / perf
  { type: 'present', needle: 'aria-label="Breadcrumb"',       label: 'A11y · breadcrumb nav' },
  { type: 'present', needle: 'loading="lazy"',                label: 'Perf · iframe lazy' },
  // Reglas operacionales · sin contradicciones (memory canónica)
  { type: 'absent',  needle: 'Responde en minutos',           label: 'Typo corregido' },
  { type: 'absent',  needle: '"closes":"19:00"',              label: 'Sin conflicto NAP con Home' },
  { type: 'absent',  needle: 'asegurar hora',                 label: 'Sin "asegurar hora" (horario abierto)' },
  { type: 'absent',  needle: 'escoger hora',                  label: 'Sin "escoger hora" (horario abierto)' },
  { type: 'absent',  needle: 'última salida 13:00',           label: 'Sin "última salida 13:00" obsoleto' },
  { type: 'absent',  needle: 'reservas@aventuraenelsella.es', label: 'Email migrado · sin reservas@' },
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
