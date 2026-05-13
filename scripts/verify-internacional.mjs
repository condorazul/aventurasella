#!/usr/bin/env node
/**
 * verify-internacional.mjs
 * Verifica que la landing /descenso-internacional-del-sella/ renderiza bien
 * y contiene todos los bloques SEO críticos.
 */
const URL = 'http://localhost:4321/descenso-internacional-del-sella/';

const CHECKS = [
  // SEO meta + H1
  { type: 'present', needle: 'Descenso Internacional',                     label: 'H1 · keyword literal' },
  { type: 'present', needle: 'rel="canonical"',                            label: 'Canonical link' },
  { type: 'present', needle: '8 de agosto',                                label: 'Fecha 2026' },
  // Schema · @graph completo (paridad con como-llegar + contacto + opiniones)
  { type: 'present', needle: '"@type":"Article"',                          label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"Event"',                            label: 'Schema · Event' },
  { type: 'present', needle: '"@type":"LocalBusiness"',                    label: 'Schema · LocalBusiness' },
  { type: 'present', needle: '"@type":"FAQPage"',                          label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',                   label: 'Schema · BreadcrumbList' },
  // Article freshness + enrich
  { type: 'present', needle: '"datePublished":"2026-04-22"',               label: 'Schema · datePublished' },
  { type: 'present', needle: '"dateModified":"2026-05-11"',                label: 'Schema · dateModified (freshness)' },
  { type: 'present', needle: '"articleSection"',                            label: 'Schema · articleSection' },
  { type: 'present', needle: '"keywords"',                                  label: 'Schema · keywords array' },
  // Event enrichment
  { type: 'present', needle: 'startDate":"2026-08-08T11:30',               label: 'Event · startDate 11:30' },
  { type: 'present', needle: 'schema.org/EventScheduled',                   label: 'Event · status scheduled' },
  { type: 'present', needle: 'OfflineEventAttendanceMode',                  label: 'Event · attendance mode' },
  { type: 'present', needle: '"alternateName":"Les Piragües"',              label: 'Event · alternateName' },
  { type: 'present', needle: '"@type":"Offer"',                             label: 'Event · Offer (35€)' },
  { type: 'present', needle: '"price":"35"',                                label: 'Event · price 35' },
  { type: 'present', needle: '"priceCurrency":"EUR"',                       label: 'Event · currency EUR' },
  { type: 'present', needle: 'LimitedAvailability',                         label: 'Event · availability limited' },
  { type: 'present', needle: '"subEvent"',                                  label: 'Event · subEvent (programa multi-día)' },
  { type: 'present', needle: 'isAccessibleForFree',                         label: 'Event · accesible gratis (ribera)' },
  { type: 'present', needle: 'maximumAttendeeCapacity',                     label: 'Event · capacidad espectadores' },
  // LocalBusiness paridad
  { type: 'present', needle: 'TouristAttraction',                           label: 'LocalBusiness · additionalType TouristAttraction' },
  { type: 'present', needle: 'SportsActivityLocation',                      label: 'LocalBusiness · additionalType SportsActivityLocation' },
  { type: 'present', needle: '"latitude":43.3874223',                       label: 'LocalBusiness · lat exacta' },
  { type: 'present', needle: '"longitude":-5.1866022',                      label: 'LocalBusiness · lng exacta' },
  { type: 'present', needle: 'info@aventuraenelsella.es',                   label: 'LocalBusiness · email correcto' },
  { type: 'present', needle: '"hasMap"',                                    label: 'LocalBusiness · hasMap' },
  { type: 'present', needle: '"@type":"AggregateRating"',                   label: 'LocalBusiness · AggregateRating' },
  { type: 'present', needle: '"ratingValue":"4.5"',                         label: 'LocalBusiness · rating 4.5' },
  { type: 'present', needle: '"reviewCount":"147"',                         label: 'LocalBusiness · reviewCount 147' },
  { type: 'present', needle: '0xd36195b04532889',                           label: 'LocalBusiness · FID Google Business' },
  { type: 'absent',  needle: 'ChIJiShTBFsZNg0R',                            label: 'Sin Place ID competidor Disfruta del Sella' },
  // Contenido clave del evento
  { type: 'present', needle: 'Fiesta de Interés Turístico',                 label: 'Badge oficial' },
  { type: 'present', needle: 'Germade',                                     label: 'Palmarés 2025' },
  { type: 'present', needle: 'Llovio',                                      label: 'Recorrido · Llovio' },
  { type: 'present', needle: 'Dionisio de la Huerta',                       label: 'Historia · fundador 1930' },
  { type: 'present', needle: 'Les Piragües',                                label: 'Nombre oficial popular' },
  { type: 'present', needle: 'Toraño',                                      label: 'Ruta · Toraño (Mini)' },
  { type: 'present', needle: 'Fríes',                                       label: 'Ruta · Fríes (Completo)' },
  // CTAs
  { type: 'present', needle: '/reservar/?dia=2026-08-08',                   label: 'CTA reserva 8 ago' },
  // Reglas operativas del día (35€ · 9:30 · 12:00 · 11:30 · 2 días antes)
  { type: 'present', needle: '35',                                          label: 'Precio día D · 35€' },
  { type: 'present', needle: '9:30',                                        label: 'Check-in antes 9:30' },
  { type: 'present', needle: '12:00',                                       label: 'Salida turística 12:00' },
  { type: 'present', needle: '11:30',                                       label: 'Salida élite 11:30' },
  { type: 'present', needle: 'mascotas',                                    label: 'Warning mascotas' },
  { type: 'present', needle: '2 días antes',                                label: 'Reserva hasta 2d antes' },
  // Bug fix: NO "12:30" como hora oficial (era contradicción con startDate)
  { type: 'absent',  needle: 'competición a las 12:30',                     label: 'Bug fix · sin "competición a las 12:30"' },
  // Sin contradicciones operacionales globales
  // (nota: FinalCTA usa reservas@ correctamente — CTAs transaccionales · memoria canónica)
  { type: 'absent',  needle: 'última salida 13:00',                         label: 'Sin "última salida 13:00" obsoleto' },
  { type: 'absent',  needle: 'salidas escalonadas',                         label: 'Sin "salidas escalonadas" obsoleto' },
  // A11y
  { type: 'present', needle: 'aria-label="Breadcrumb"',                     label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="faq-internacional"',                    label: 'FAQ · acordeón exclusive' },
];

console.log(`→ GET ${URL}`);
let html;
try {
  const resp = await fetch(URL, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } });
  console.log(`  status: ${resp.status}`);
  if (!resp.ok) {
    console.error(`❌ Dev server no responde OK. ¿Está corriendo? tail -20 /tmp/astro.log`);
    process.exit(2);
  }
  html = await resp.text();
} catch (e) {
  console.error(`❌ No pude conectar: ${e.message}`);
  process.exit(2);
}

let ok = 0, fail = 0;
for (const c of CHECKS) {
  const found = html.includes(c.needle);
  const pass = c.type === 'present' ? found : !found;
  console.log(`  ${pass ? '✅' : '❌'} [${c.type}] "${c.needle}" — ${c.label}`);
  pass ? ok++ : fail++;
}

console.log(`\n${fail === 0 ? '✅ TODO OK' : '❌ FALLOS'} · ${ok} pass · ${fail} fail`);
process.exit(fail === 0 ? 0 : 1);
