/**
 * Image Compression Script — Run from project root
 * node compress-images.mjs
 */
import sharp from 'sharp';
import { stat, rename } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

const targets = [
  { src: 'hero-image.webp',         quality: 75, maxWidth: 1600 },
  { src: 'logo.webp',               quality: 88, maxWidth: 200  },
  { src: 'invisalign.webp',         quality: 75, maxWidth: 1400 },
  { src: 'clinic-gallery-1.webp',   quality: 78, maxWidth: 1200 },
  { src: 'clinic-gallery-2.webp',   quality: 78, maxWidth: 1200 },
  { src: 'clinic-interior.webp',    quality: 78, maxWidth: 1200 },
  { src: 'case-1-before.webp',      quality: 78, maxWidth: 1200 },
  { src: 'case-1-after.webp',       quality: 78, maxWidth: 1200 },
  { src: 'patient-braces.webp',     quality: 78, maxWidth: 900  },
  { src: 'patient-implant.webp',    quality: 78, maxWidth: 900  },
  { src: 'patient-veneer.webp',     quality: 78, maxWidth: 900  },
  { src: 'patient-whitening.webp',  quality: 78, maxWidth: 900  },
  { src: 'doctors-combined.webp',   quality: 85, maxWidth: 600  },
  { src: 'dr-sk-yadav.webp',        quality: 85, maxWidth: 500  },
  { src: 'hero/photography/clinic-exterior.webp', quality: 78, maxWidth: 1600 },
  // Convert big PNGs to WebP
  { src: 'clinic/clinic-1.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-2.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-3.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-4.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-5.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-7.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-8.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-9.png',  quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'clinic/clinic-10.png', quality: 78, maxWidth: 1400, outExt: '.webp' },
  { src: 'hero/products/skyalign-case.png', quality: 82, maxWidth: 500, outExt: '.webp' },
];

async function compress(target) {
  const srcPath = path.join(PUBLIC_DIR, target.src);
  const outPath = target.outExt
    ? srcPath.replace(/\.(png|jpg|jpeg)$/i, target.outExt)
    : srcPath;
  const tmpPath = outPath + '.tmp.webp';

  try {
    const before = (await stat(srcPath)).size;
    await sharp(srcPath)
      .resize({ width: target.maxWidth, withoutEnlargement: true })
      .webp({ quality: target.quality })
      .toFile(tmpPath);

    await rename(tmpPath, outPath);
    const after = (await stat(outPath)).size;
    const saved = ((1 - after / before) * 100).toFixed(1);
    const beforeKB = (before / 1024).toFixed(0);
    const afterKB  = (after  / 1024).toFixed(0);
    console.log(`✅ ${target.src} → ${afterKB}KB  (was ${beforeKB}KB, saved ${saved}%)`);
  } catch (e) {
    console.warn(`⚠️  Skipped ${target.src}: ${e.message}`);
  }
}

console.log('🚀 Compressing images...\n');
for (const t of targets) {
  await compress(t);
}
console.log('\n✨ Done! Re-check image sizes to confirm savings.');
