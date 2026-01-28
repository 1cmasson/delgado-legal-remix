import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const inputPath = path.join(projectRoot, 'public/images/uncompressed/Delgado-Legal-Logo.svg');
const outputDir = path.join(projectRoot, 'public/images/logos');

const sizes = [
  { name: 'desktop', width: 400 },
  { name: 'tablet', width: 300 },
  { name: 'mobile', width: 200 },
];

async function optimizeImage() {
  console.log('Optimizing Delgado-Legal-Logo.svg...\n');

  for (const { name, width } of sizes) {
    const outputPath = path.join(outputDir, `logo-${name}.webp`);
    
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`✓ ${name}: ${stats.width}x${stats.height} → ${outputPath.split('/public')[1]}`);
  }

  console.log('\nDone!');
}

optimizeImage().catch(console.error);
