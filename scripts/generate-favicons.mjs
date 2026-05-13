#!/usr/bin/env node
/**
 * generate-favicons.mjs
 * ------------------------------------------------------------
 * Genera el set completo de favicons + apple-touch-icon + PWA icons
 * desde logo-schema.png (logo de marca).
 *
 * Salida en public/:
 *   - favicon.ico        (32×32 multi-resolution)
 *   - favicon-48.png     (48×48 — Google SERP prefiere múltiplos de 48)
 *   - favicon-32.png     (32×32 — browsers clásicos)
 *   - favicon.svg        (copia optimizada del SVG)
 *   - apple-touch-icon.png  (180×180 — iOS home screen)
 *   - icon-192.png       (192×192 — PWA/Android)
 *   - icon-512.png       (512×512 — PWA maskable)
 *
 * Uso: node scripts/generate-favicons.mjs
 */
import sharp from 'sharp';
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');
const SRC_PNG = join(PUBLIC, 'images/logo/logo-schema.png');
const SRC_SVG = join(PUBLIC, 'images/logo/logo_sella_black.svg');

// Fondo cream cálido (var(--color-bg-warm)) para iconos que necesitan fondo opaco
// (Apple touch icon en iOS sin fondo queda con bordes recortados feos).
const BG_CREAM = { r: 246, g: 241, b: 227, alpha: 1 };

console.log('🎨 Generando favicons desde logo-schema.png...\n');

// 1. favicon-48.png (Google SERP)
await sharp(SRC_PNG)
  .resize(48, 48, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'favicon-48.png'));
console.log('✅ favicon-48.png (48×48)');

// 2. favicon-32.png
await sharp(SRC_PNG)
  .resize(32, 32, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'favicon-32.png'));
console.log('✅ favicon-32.png (32×32)');

// 3. favicon.ico (32×32 PNG renombrado · navegadores aceptan PNG en .ico)
// Para multi-resolution real usaríamos `to-ico` pero PNG en .ico funciona.
await sharp(SRC_PNG)
  .resize(32, 32, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'favicon.ico'));
console.log('✅ favicon.ico (32×32)');

// 4. apple-touch-icon.png (180×180, fondo opaco)
await sharp(SRC_PNG)
  .resize(180, 180, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'apple-touch-icon.png'));
console.log('✅ apple-touch-icon.png (180×180)');

// 5. icon-192.png (PWA / Android)
await sharp(SRC_PNG)
  .resize(192, 192, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'icon-192.png'));
console.log('✅ icon-192.png (192×192)');

// 6. icon-512.png (PWA maskable)
await sharp(SRC_PNG)
  .resize(512, 512, { fit: 'contain', background: BG_CREAM })
  .png()
  .toFile(join(PUBLIC, 'icon-512.png'));
console.log('✅ icon-512.png (512×512)');

// 7. favicon.svg (copia del SVG original optimizado)
const svg = await readFile(SRC_SVG, 'utf-8');
await writeFile(join(PUBLIC, 'favicon.svg'), svg);
console.log('✅ favicon.svg (vector)');

console.log('\n🎉 Set completo de favicons generado en public/.');
console.log('   No usar ?v=N cache-busters — colisiona con Disallow: /*?* en robots.txt.');
console.log('   Para invalidar cache: renombrar el archivo (favicon-v2.svg) no querystring.');
