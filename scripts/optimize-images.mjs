#!/usr/bin/env node
/**
 * optimize-images.mjs
 * ------------------------------------------------------------
 * Pipeline de optimización de imágenes según Documentos/image-optimize.md
 *
 * - Lee imágenes de public/images/originals/
 * - Genera 3 cortes responsivos (sm 640w, md 1024w, lg 1920w)
 * - Cada corte en 3 formatos: AVIF, WebP, JPG fallback
 * - Idempotente: re-ejecutar es seguro (sobrescribe outputs)
 * - Nunca escala imágenes más pequeñas que el corte (withoutEnlargement)
 *
 * Uso:
 *   node scripts/optimize-images.mjs             # procesa todas
 *   node scripts/optimize-images.mjs hero-canoa  # solo una (por basename)
 */
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const SRC_DIR = join(PROJECT_ROOT, 'public/images/originals');
const OUT_DIR = join(PROJECT_ROOT, 'public/images/optimized');

// Configuración de cortes — basado en image-optimize.md
const SIZES = [
  { suffix: '-sm', width: 640,  avifQ: 42, webpQ: 55 },  // Mobiles pequeños
  { suffix: '',    width: 1024, avifQ: 45, webpQ: 60 },  // Tablets / mobiles grandes
  { suffix: '-lg', width: 1920, avifQ: 52, webpQ: 68 },  // Desktop
];

const JPG_FALLBACK_WIDTH = 1920;
const JPG_QUALITY = 78;

function kb(bytes) { return (bytes / 1024).toFixed(1) + ' KB'; }

async function ensureDir(path) {
  try { await mkdir(path, { recursive: true }); } catch {}
}

async function fileExists(path) {
  try { await stat(path); return true; } catch { return false; }
}

async function processImage(srcPath, baseName) {
  const results = [];

  for (const { suffix, width, avifQ, webpQ } of SIZES) {
    const name = baseName + suffix;

    // AVIF
    const avifBuffer = await sharp(srcPath)
      .resize(width, null, { withoutEnlargement: true })
      .avif({ quality: avifQ, effort: 6 })
      .toBuffer();
    const avifPath = join(OUT_DIR, `${name}.avif`);
    await sharp(avifBuffer).toFile(avifPath);

    // WebP
    const webpBuffer = await sharp(srcPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: webpQ, effort: 5 })
      .toBuffer();
    const webpPath = join(OUT_DIR, `${name}.webp`);
    await sharp(webpBuffer).toFile(webpPath);

    results.push({
      name,
      width,
      avif: avifBuffer.length,
      webp: webpBuffer.length,
    });
  }

  // JPG fallback (una sola versión grande)
  const jpgPath = join(OUT_DIR, `${baseName}.jpg`);
  const jpgInfo = await sharp(srcPath)
    .resize(JPG_FALLBACK_WIDTH, null, { withoutEnlargement: true })
    .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
    .toFile(jpgPath);

  return { variants: results, jpgSize: jpgInfo.size };
}

async function main() {
  const onlyBaseName = process.argv[2]; // opcional: procesar solo uno

  await ensureDir(OUT_DIR);

  if (!await fileExists(SRC_DIR)) {
    console.error(`❌ No existe ${SRC_DIR}`);
    process.exit(1);
  }

  const files = (await readdir(SRC_DIR))
    .filter(f => /\.(jpe?g|png|tiff?|webp)$/i.test(f))
    .filter(f => !onlyBaseName || parse(f).name === onlyBaseName);

  if (files.length === 0) {
    console.log('⚠️  No hay imágenes para procesar en originals/');
    return;
  }

  console.log(`🖼  Procesando ${files.length} imagen(es)...\n`);

  let totalBytesOriginal = 0;
  let totalBytesAvif = 0;
  let totalBytesWebp = 0;

  for (const file of files) {
    const srcPath = join(SRC_DIR, file);
    const srcStat = await stat(srcPath);
    const baseName = parse(file).name;

    const meta = await sharp(srcPath).metadata();
    console.log(`📸 ${file} (${meta.width}×${meta.height}, ${kb(srcStat.size)})`);

    totalBytesOriginal += srcStat.size;

    try {
      const { variants, jpgSize } = await processImage(srcPath, baseName);

      for (const v of variants) {
        totalBytesAvif += v.avif;
        totalBytesWebp += v.webp;
        console.log(
          `  └─ ${v.name.padEnd(28)} ${String(v.width).padStart(4)}w  ` +
          `AVIF ${kb(v.avif).padStart(9)}  WebP ${kb(v.webp).padStart(9)}`
        );
      }
      console.log(`  └─ ${baseName}.jpg              fallback   JPG  ${kb(jpgSize).padStart(9)}\n`);
    } catch (err) {
      console.error(`  ❌ Error procesando ${file}:`, err.message);
    }
  }

  console.log('─'.repeat(64));
  console.log(`Total originales:  ${kb(totalBytesOriginal)}`);
  console.log(`Total AVIF (3x):   ${kb(totalBytesAvif)}  (${((totalBytesAvif / totalBytesOriginal) * 100).toFixed(0)}% del original)`);
  console.log(`Total WebP (3x):   ${kb(totalBytesWebp)}  (${((totalBytesWebp / totalBytesOriginal) * 100).toFixed(0)}% del original)`);
  console.log('─'.repeat(64));
  console.log(`✅ Listo. Output: ${OUT_DIR}`);
}

main().catch(err => { console.error(err); process.exit(1); });
