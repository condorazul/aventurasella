#!/usr/bin/env node
/**
 * verify-home.mjs
 * ------------------------------------------------------------
 * Verifica que los cambios en la Home se reflejen en el render real
 * del dev server. Útil cuando el watcher de Astro en WSL no detecta
 * cambios o cuando hay caché del navegador.
 *
 * Uso:
 *   node scripts/verify-home.mjs
 *
 * Salida:
 *   - Logs con checks pass/fail
 *   - Exit code != 0 si algún check crítico falla
 *
 * Requisitos:
 *   - Dev server corriendo en http://localhost:4321/
 *
 * Ante fallos:
 *   1. pkill -9 -f "astro dev" && sleep 2
 *   2. cd WEB/aventuraenelsella && nohup npm run dev -- --host > /tmp/astro.log 2>&1 &
 *   3. sleep 7 && node scripts/verify-home.mjs
 *   4. Si ok, el problema es caché del navegador → Ctrl+Shift+R
 */
const URL = 'http://localhost:4321/';

// Cada check verifica que un texto esté (present) o no esté (absent) en el HTML
const CHECKS = [
  { type: 'present', needle: 'Descenso del',                    label: 'Hero H1 · keyword' },
  { type: 'present', needle: '"@type":"LocalBusiness"',         label: 'Schema · LocalBusiness' },
  { type: 'present', needle: '"@type":"TouristAttraction"',     label: 'Schema · TouristAttraction' },
  { type: 'present', needle: '"@type":"Product"',               label: 'Schema · Product+Offer' },
  { type: 'present', needle: '"@type":"AggregateRating"',       label: 'Schema · AggregateRating 4.5' },
  { type: 'present', needle: '"@type":"FAQPage"',               label: 'Schema · FAQPage' },
  { type: 'present', needle: 'Preguntas frecuentes',            label: 'FAQ · sección cargada' },
  { type: 'present', needle: 'Un solo precio',      label: 'IncludesB editorial · título' },
  { type: 'present', needle: 'Solo bajo reserva',   label: 'IncludesB · bloque 02 reserva' },
  { type: 'present', needle: 'Pagar es fácil',      label: 'IncludesB · bloque 03 pago' },
  { type: 'present', needle: 'incEd__num',          label: 'IncludesB · números gigantes' },
  { type: 'present', needle: 'Reservar en 2 minutos', label: 'IncludesB · CTA principal' },
  { type: 'absent',  needle: 'Un único precio',     label: 'Bloque viejo Experiences removido' },
  { type: 'absent',  needle: 'IncludesText',        label: 'Opción B text archivada' },
  { type: 'absent',  needle: 'IncludesCards',       label: 'Opción C cards archivada' },
  { type: 'present', needle: 'reviewsB__slider',     label: 'Reviews carrusel cargado' },
  { type: 'present', needle: 'reviewsB__bar-fill',   label: 'Reviews barra animada 4,5/5' },
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
  console.error(`❌ No pude conectar a ${URL}: ${e.message}`);
  console.error(`   ¿Servidor muerto? → cd WEB/aventuraenelsella && nohup npm run dev -- --host > /tmp/astro.log 2>&1 &`);
  process.exit(2);
}

let ok = 0, fail = 0;
for (const c of CHECKS) {
  const found = html.includes(c.needle);
  const pass = c.type === 'present' ? found : !found;
  const icon = pass ? '✅' : '❌';
  const detail = c.type === 'present'
    ? (found ? 'encontrado'      : 'NO encontrado (debería estar)')
    : (found ? 'PRESENTE (debería estar ausente)' : 'ausente');
  console.log(`  ${icon} [${c.type}] "${c.needle}" — ${c.label} — ${detail}`);
  pass ? ok++ : fail++;
}

console.log(`\n${fail === 0 ? '✅ TODO OK' : '❌ FALLOS DETECTADOS'} · ${ok} pass · ${fail} fail`);
if (fail > 0) {
  console.log('\n💡 Si los fallos son "presente pero debería estar ausente":');
  console.log('   → watcher WSL no detectó edits. Reinicia el server:');
  console.log('     pkill -9 -f "astro dev" && sleep 2 && nohup npm run dev -- --host > /tmp/astro.log 2>&1 & disown');
}
process.exit(fail === 0 ? 0 : 1);
