#!/usr/bin/env node
/**
 * generate-favicons.mjs
 * ------------------------------------------------------------
 * Genera el set completo de favicons + apple-touch-icon + PWA icons
 * desde el SVG monograma (favicon-mono-s.svg · cuadrado coral con "S"
 * en negro tipo bicisendadeloso · mucha mejor lectura a 16-48px que
 * el logo completo).
 *
 * Para volver al logo completo: cambiar SRC a logo-schema.png y
 * añadir background cream en cada `.resize({ fit, background })`.
 *
 * Salida en public/:
 *   - favicon.ico        (32×32)
 *   - favicon-48.png     (48×48 — Google SERP prefiere múltiplos de 48)
 *   - favicon-32.png     (32×32 — browsers clásicos)
 *   - favicon.svg        (vector · escala perfecta en pestañas modernas)
 *   - apple-touch-icon.png  (180×180 — iOS home screen)
 *   - icon-192.png       (192×192 — PWA/Android)
 *   - icon-512.png       (512×512 — PWA maskable)
 *
 * Uso: node scripts/generate-favicons.mjs
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');
// Source único · SVG monograma "S" en cuadrado coral con esquinas redondeadas.
// El SVG ya incluye su propio fondo (#E9856F) → no necesitamos background en resize.
const SRC_SVG = join(PUBLIC, 'images/logo/favicon-mono-s.svg');

console.log('🎨 Generando favicons desde favicon-mono-s.svg...\n');

// Sharp lee el SVG y lo rasteriza a cada tamaño. density=300 para que
// el texto se renderice con buena resolución antes del downscale.
const svgBuffer = await readFile(SRC_SVG);
const fromSvg = (size) => sharp(svgBuffer, { density: 300 }).resize(size, size).png();

// 1. favicon-48.png (Google SERP)
await fromSvg(48).toFile(join(PUBLIC, 'favicon-48.png'));
console.log('✅ favicon-48.png (48×48)');

// 2. favicon-32.png
await fromSvg(32).toFile(join(PUBLIC, 'favicon-32.png'));
console.log('✅ favicon-32.png (32×32)');

// 3. favicon.ico (32×32 PNG renombrado · navegadores aceptan PNG en .ico)
await fromSvg(32).toFile(join(PUBLIC, 'favicon.ico'));
console.log('✅ favicon.ico (32×32)');

// 4. apple-touch-icon.png (180×180)
await fromSvg(180).toFile(join(PUBLIC, 'apple-touch-icon.png'));
console.log('✅ apple-touch-icon.png (180×180)');

// 5. icon-192.png (PWA / Android)
await fromSvg(192).toFile(join(PUBLIC, 'icon-192.png'));
console.log('✅ icon-192.png (192×192)');

// 6. icon-512.png (PWA maskable)
await fromSvg(512).toFile(join(PUBLIC, 'icon-512.png'));
console.log('✅ icon-512.png (512×512)');

// 7. favicon.svg (copia del vector · navegadores modernos lo prefieren)
const svgText = await readFile(SRC_SVG, 'utf-8');
await writeFile(join(PUBLIC, 'favicon.svg'), svgText);
console.log('✅ favicon.svg (vector)');

console.log('\n🎉 Set completo de favicons generado en public/.');
console.log('   No usar ?v=N cache-busters — colisiona con Disallow: /*?* en robots.txt.');
console.log('   Para invalidar cache: hard refresh navegador o renombrar archivo.');
