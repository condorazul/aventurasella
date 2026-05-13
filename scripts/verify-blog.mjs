#!/usr/bin/env node
/**
 * verify-blog.mjs
 * ------------------------------------------------------------
 * Verifica que el Blog (hub + 6 entradas) se renderiza correctamente
 * en el dev server y que cada entrada tiene los elementos SEO clave:
 * schema BlogPosting, BreadcrumbList, canonical, título, meta description.
 *
 * Uso:
 *   node scripts/verify-blog.mjs
 *
 * Requisitos:
 *   - Dev server corriendo en http://localhost:4321/
 */

const BASE = 'http://localhost:4321';

// [url, [checks...]]
const SUITES = [
  {
    url: '/blog/',
    checks: [
      { type: 'present', needle: '<title>Blog del descenso del Sella',  label: 'Hub · title SEO' },
      { type: 'present', needle: '"@type":"Blog"',                      label: 'Hub · schema Blog' },
      { type: 'present', needle: '"@type":"ItemList"',                  label: 'Hub · schema ItemList' },
      { type: 'present', needle: '"@type":"BreadcrumbList"',            label: 'Hub · schema Breadcrumb' },
      { type: 'present', needle: 'rel="canonical"',                     label: 'Hub · canonical' },
      { type: 'present', needle: 'blogF__card',                         label: 'Hub · featured card' },
      { type: 'present', needle: 'blogG__card',                         label: 'Hub · grid cards' },
      { type: 'present', needle: 'Guías, historia',                     label: 'Hub · H1' },
    ],
  },
  {
    url: '/blog/que-llevar-al-descenso-del-sella/',
    checks: [
      { type: 'present', needle: 'Qué llevar al descenso del Sella',    label: 'P1 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P1 · schema BlogPosting' },
      { type: 'present', needle: '"@type":"FAQPage"',                   label: 'P1 · schema FAQ' },
      { type: 'present', needle: '"@type":"BreadcrumbList"',            label: 'P1 · schema Breadcrumb' },
      { type: 'present', needle: 'rel="canonical"',                     label: 'P1 · canonical' },
      { type: 'present', needle: 'og:type',                             label: 'P1 · OG type' },
      { type: 'present', needle: 'escarpines',                          label: 'P1 · contenido calzado' },
      { type: 'present', needle: 'bidón estanco',                       label: 'P1 · contenido bidón' },
    ],
  },
  {
    url: '/blog/mejor-hora-descenso-sella/',
    checks: [
      { type: 'present', needle: 'Mejor hora',                          label: 'P2 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P2 · schema BlogPosting' },
      { type: 'present', needle: '"@type":"FAQPage"',                   label: 'P2 · schema FAQ' },
      { type: 'present', needle: 'Primera hora',                        label: 'P2 · contenido franjas' },
      { type: 'present', needle: 'post__table',                         label: 'P2 · tabla comparativa' },
    ],
  },
  {
    url: '/blog/descenso-sella-con-ninos-pequenos/',
    checks: [
      { type: 'present', needle: 'niños pequeños',                      label: 'P3 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P3 · schema BlogPosting' },
      { type: 'present', needle: '5 años',                              label: 'P3 · edad mínima' },
      { type: 'present', needle: '1,15 m',                              label: 'P3 · altura mínima' },
      { type: 'present', needle: '30 €',                                label: 'P3 · precio niño' },
    ],
  },
  {
    url: '/blog/pozo-del-arco-sella/',
    checks: [
      { type: 'present', needle: 'Pozo del Arco',                       label: 'P4 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P4 · schema BlogPosting' },
      { type: 'present', needle: 'playa fluvial',                       label: 'P4 · contenido playa' },
      { type: 'present', needle: 'km 3,5',                              label: 'P4 · ubicación km' },
    ],
  },
  {
    url: '/blog/historia-descenso-sella/',
    checks: [
      { type: 'present', needle: '1929',                                label: 'P5 · año origen' },
      { type: 'present', needle: 'Dionisio de la Huerta',               label: 'P5 · padre del Sella' },
      { type: 'present', needle: 'Fiesta de Interés Turístico',         label: 'P5 · declaración' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P5 · schema BlogPosting' },
    ],
  },
  {
    url: '/blog/chiringuitos-descenso-sella/',
    checks: [
      { type: 'present', needle: 'Riverland',                           label: 'P6 · chiringuito 1' },
      { type: 'present', needle: 'El Oasis',                            label: 'P6 · chiringuito 2' },
      { type: 'present', needle: 'El Prau',                             label: 'P6 · chiringuito 3' },
      { type: 'present', needle: 'El Bosque',                           label: 'P6 · chiringuito 4' },
      { type: 'present', needle: 'La Mediana',                          label: 'P6 · chiringuito 5' },
      { type: 'present', needle: 'Toraño',                              label: 'P6 · chiringuito 6' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P6 · schema BlogPosting' },
    ],
  },
  {
    url: '/blog/cansa-descenso-sella/',
    checks: [
      { type: 'present', needle: '¿Cansa mucho',                        label: 'P7 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P7 · schema BlogPosting' },
      { type: 'present', needle: '"@type":"FAQPage"',                   label: 'P7 · schema FAQ' },
      { type: 'present', needle: 'clase I',                             label: 'P7 · clasificación río' },
      { type: 'present', needle: 'post__table',                         label: 'P7 · tabla comparativa' },
    ],
  },
  {
    url: '/blog/descenso-sella-grupos-despedidas/',
    checks: [
      { type: 'present', needle: 'Descenso del Sella en grupo',         label: 'P8 · H1' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P8 · schema BlogPosting' },
      { type: 'present', needle: 'despedida',                           label: 'P8 · contenido despedida' },
      { type: 'present', needle: 'empresa',                             label: 'P8 · contenido empresa' },
    ],
  },
  {
    url: '/blog/que-hacer-despues-descenso-sella-ribadesella/',
    checks: [
      { type: 'present', needle: 'Ribadesella',                         label: 'P9 · keyword Ribadesella' },
      { type: 'present', needle: 'Cangas de Onís',                      label: 'P9 · Cangas' },
      { type: 'present', needle: 'Covadonga',                           label: 'P9 · Covadonga' },
      { type: 'present', needle: '"@type":"BlogPosting"',               label: 'P9 · schema BlogPosting' },
    ],
  },
];

async function run() {
  let totalPass = 0;
  let totalFail = 0;

  for (const suite of SUITES) {
    console.log(`\n→ GET ${BASE}${suite.url}`);
    let html;
    try {
      const res = await fetch(`${BASE}${suite.url}`, { headers: { Accept: 'text/html' } });
      console.log(`  status: ${res.status}`);
      if (!res.ok) {
        console.log(`  ❌ Error HTTP · no se puede continuar con esta URL`);
        totalFail += suite.checks.length;
        continue;
      }
      html = await res.text();
    } catch (e) {
      console.log(`  ❌ fetch error: ${e.message}`);
      totalFail += suite.checks.length;
      continue;
    }

    for (const check of suite.checks) {
      const found = html.includes(check.needle);
      const ok = check.type === 'present' ? found : !found;
      if (ok) {
        totalPass++;
        console.log(`  ✅ [${check.type}] "${check.needle}" — ${check.label}`);
      } else {
        totalFail++;
        console.log(`  ❌ [${check.type}] "${check.needle}" — ${check.label} — ${check.type === 'present' ? 'NO encontrado' : 'encontrado (debería estar ausente)'}`);
      }
    }
  }

  console.log(`\n${totalFail === 0 ? '✅' : '❌'} ${totalPass} pass · ${totalFail} fail`);
  process.exit(totalFail === 0 ? 0 : 1);
}

run();
