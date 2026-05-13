#!/usr/bin/env node
const URL = 'http://localhost:4321/como-llegar/';
const CHECKS = [
  // SEO meta
  { type: 'present', needle: 'Cómo llegar a Arriondas',         label: 'Title · keyword exacta' },
  { type: 'present', needle: '50 m de las estaciones',          label: 'Title · USP 50m estaciones' },
  { type: 'present', needle: 'rel="canonical"',                 label: 'Canonical link' },
  { type: 'present', needle: 'canonical" href="https://aventuraenelsella.es/como-llegar/"', label: 'Canonical URL correcta' },
  // OG / Twitter
  { type: 'present', needle: 'og:type',                         label: 'OG · type' },
  { type: 'present', needle: 'twitter:card',                    label: 'Twitter · card' },
  { type: 'present', needle: 'como-llegar-cta-lg.jpg',          label: 'OG image · como-llegar-cta (foto nueva)' },
  // H1 + headings
  { type: 'present', needle: 'id="clh-title"',                  label: 'H1 único con id' },
  { type: 'present', needle: 'serif-italic',                    label: 'H1 · accent italic' },
  // Schema · Article enriquecido
  { type: 'present', needle: '"@type":"Article"',               label: 'Schema · Article' },
  { type: 'present', needle: '"@type":"FAQPage"',               label: 'Schema · FAQPage' },
  { type: 'present', needle: '"@type":"BreadcrumbList"',        label: 'Schema · Breadcrumb' },
  { type: 'present', needle: '"datePublished":"2026-04-20"',    label: 'Schema · datePublished' },
  { type: 'present', needle: '"dateModified":"2026-05-11"',     label: 'Schema · dateModified (freshness)' },
  { type: 'present', needle: '"articleSection":"Planificación · Cómo llegar"', label: 'Schema · articleSection' },
  { type: 'present', needle: '"keywords"',                      label: 'Schema · keywords array' },
  // Schema · Place (local SEO)
  { type: 'present', needle: '"@type":"Place"',                 label: 'Schema · Place · local SEO' },
  { type: 'present', needle: '"@type":"GeoCoordinates"',        label: 'Schema · GeoCoordinates Arriondas' },
  { type: 'present', needle: '"latitude":43.3874223',           label: 'Schema · lat exacta Aventura en el Sella' },
  { type: 'present', needle: '"longitude":-5.1866022',          label: 'Schema · lng exacta Aventura en el Sella' },
  { type: 'present', needle: '0xd36195b04532889',               label: 'FID Google Business · cellId' },
  { type: 'present', needle: '0x9b2face87069ecfc',              label: 'FID Google Business · CID' },
  { type: 'absent',  needle: 'ChIJiShTBFsZNg0R',                 label: 'Sin Place ID de Disfruta del Sella (competidor)' },
  { type: 'present', needle: '"@type":"PostalAddress"',         label: 'Schema · PostalAddress' },
  { type: 'present', needle: '"addressLocality":"Arriondas"',   label: 'Schema · localidad Arriondas' },
  { type: 'present', needle: '"addressRegion":"Asturias"',      label: 'Schema · región Asturias' },
  // Foto CTA con alt SEO
  { type: 'present', needle: 'Arriondas y el valle del Sella',  label: 'Alt CTA descriptiva' },
  { type: 'present', needle: 'como-llegar-cta',                 label: 'Foto nueva · CTA' },
  // Panel "¿Tienes más preguntas?"
  { type: 'present', needle: 'clfMore',                         label: 'Panel "más preguntas" en FAQ aside' },
  { type: 'present', needle: 'Respondemos',                     label: 'Panel · lead respondemos en minutos' },
  // Reglas operacionales
  { type: 'present', needle: '10:30 y las 12:30',               label: 'Horario abierto Premium 10:30-12:30' },
  { type: 'present', needle: '300 plazas',                      label: 'USP · parking 300 plazas' },
  { type: 'present', needle: 'autocaravanas',                   label: 'USP · autocaravanas admitidas' },
  { type: 'present', needle: 'hasta las 18:00',                 label: 'Confederación · río cierra 18:00' },
  { type: 'present', needle: 'Confederación',                   label: 'Mención Confederación Hidrográfica' },
  // Transporte
  { type: 'present', needle: 'ALSA',                            label: 'Transporte · autobús ALSA' },
  { type: 'present', needle: 'Renfe Cercanías AM',              label: 'Transporte · tren Renfe AM' },
  // USP 50m estaciones (regla memoria 2026-05-11)
  { type: 'present', needle: '50 metros andando',               label: 'USP · 50m andando estaciones' },
  { type: 'present', needle: 'puerta-a-puerta',                 label: 'USP · puerta-a-puerta' },
  { type: 'present', needle: 'A 50 m de la estación de autobuses', label: 'Schema · amenity 50m bus' },
  { type: 'present', needle: 'A 50 m de la estación de tren',   label: 'Schema · amenity 50m tren' },
  { type: 'present', needle: 'Sin coche · sin problema',        label: 'Signpost · kicker sin coche' },
  { type: 'present', needle: 'A-8',                             label: 'Transporte · autovía A-8' },
  { type: 'present', needle: 'A-64',                            label: 'Transporte · A-64 Oviedo' },
  { type: 'present', needle: 'AS-114',                          label: 'Transporte · AS-114 desde Gijón' },
  // Distancias clave
  { type: 'present', needle: 'Oviedo',                          label: 'Distancia · Oviedo' },
  { type: 'present', needle: 'Gijón',                           label: 'Distancia · Gijón' },
  { type: 'present', needle: 'Santander',                       label: 'Distancia · Santander' },
  { type: 'present', needle: 'Bilbao',                          label: 'Distancia · Bilbao' },
  { type: 'present', needle: 'Madrid',                          label: 'Distancia · Madrid' },
  // Sin contradicciones (regla memoria)
  { type: 'absent',  needle: 'efectivo',                         label: 'Sin palabra "efectivo"' },
  { type: 'absent',  needle: 'enlace seguro',                    label: 'Sin "enlace seguro"' },
  { type: 'absent',  needle: 'Cancela gratis 24',                label: 'Sin "Cancela gratis 24"' },
  { type: 'absent',  needle: 'última salida 13:00',              label: 'Sin "última salida 13:00" obsoleto' },
  { type: 'absent',  needle: 'salidas escalonadas',              label: 'Sin "salidas escalonadas" obsoleto' },
  // Interlinking
  { type: 'present', needle: 'href="/reservar/"',               label: 'Link interno · reservar' },
  { type: 'present', needle: 'href="/contacto/"',               label: 'Link interno · contacto' },
  { type: 'present', needle: 'href="/precios/"',                label: 'Link interno · precios' },
  { type: 'present', needle: 'tel:+34681093673',                label: 'Canal · Llámanos (tel:)' },
  { type: 'present', needle: 'wa.me/34681093673',               label: 'Canal · WhatsApp' },
  { type: 'present', needle: 'alsa.com',                        label: 'Link externo · ALSA oficial' },
  { type: 'present', needle: 'renfe.com',                       label: 'Link externo · Renfe oficial' },
  // Accesibilidad
  { type: 'present', needle: 'aria-label="Breadcrumb"',         label: 'A11y · breadcrumb' },
  { type: 'present', needle: 'name="clf-faq"',                  label: 'FAQ · acordeón exclusive' },
  // Mapa "Estamos aquí" (sección 3b)
  { type: 'present', needle: 'id="estamos-aqui"',               label: 'Sección "Estamos aquí" · id ancla' },
  { type: 'present', needle: 'google.com/maps?q=43.3874223,-5.1866022', label: 'Mapa Google embed con coordenadas exactas' },
  { type: 'present', needle: 'autovía, autobús y tren',         label: 'Lead acceso · autovía+bus+tren' },
  { type: 'present', needle: 'Abrir en Google Maps',            label: 'CTA · Abrir en Maps' },
  { type: 'present', needle: 'Cómo llegar (direcciones)',       label: 'CTA · Direcciones' },
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
