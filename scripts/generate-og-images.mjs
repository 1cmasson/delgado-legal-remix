import { chromium } from 'playwright';
import sharp from 'sharp';
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const outputDir = path.join(projectRoot, 'public/images/og');

const WIDTH = 1200;
const HEIGHT = 630;

const cards = [
  { id: 'og-site', name: 'default' },
  { id: 'og-michael', name: 'michael' },
  { id: 'og-vanessa', name: 'vanessa' },
];

const mimeTypes = {
  '.html': 'text/html',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

/**
 * A static server rooted at the repo, so the template can reference
 * `/public/...` and `/node_modules/...` directly. It has to be HTTP: Chromium
 * refuses to load a CSS mask image from a file:// origin, which would blank the
 * lockup with no error.
 */
function serveProjectRoot() {
  const server = http.createServer(async (req, res) => {
    const filePath = path.join(projectRoot, decodeURIComponent(req.url.split('?')[0]));
    if (!filePath.startsWith(projectRoot)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const body = await fs.readFile(filePath);
      res.writeHead(200, { 'content-type': mimeTypes[path.extname(filePath)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

async function generateOgImages() {
  console.log('Rendering Open Graph cards from scripts/og-template.html...\n');

  await fs.mkdir(outputDir, { recursive: true });

  const { server, port } = await serveProjectRoot();
  const browser = await chromium.launch();
  const page = await browser.newPage({
    // Capture at 2x and downscale, so the Playfair headlines stay crisp.
    deviceScaleFactor: 2,
    viewport: { width: 1400, height: 900 },
  });

  await page.goto(`http://127.0.0.1:${port}/scripts/og-template.html`, { waitUntil: 'networkidle' });

  // A screenshot taken before the webfonts and images settle silently falls back
  // to system type and blank boxes, so wait for both explicitly.
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => Promise.all([...document.images].map((img) => img.decode())));

  // The lockup glyphs are CSS mask images, not <img>, so they are not covered by
  // the decode() wait above. Fail loudly rather than shipping a blank logo.
  const lockupPainted = await page.evaluate(async () => {
    const layer = document.querySelector('.lockup .word');
    const src = getComputedStyle(layer).maskImage.match(/url\("?([^")]+)"?\)/)?.[1];
    if (!src) return false;
    const response = await fetch(src);
    return response.ok;
  });
  if (!lockupPainted) throw new Error('Lockup mask images failed to load — the logo would render blank.');

  for (const { id, name } of cards) {
    const shot = await page.locator(`#${id}`).screenshot({ type: 'png' });
    const outputPath = path.join(outputDir, `${name}.jpg`);

    await sharp(shot)
      .resize(WIDTH, HEIGHT)
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(outputPath);

    const { size } = await fs.stat(outputPath);
    const meta = await sharp(outputPath).metadata();
    console.log(
      `✓ ${name}: ${meta.width}x${meta.height}, ${(size / 1024).toFixed(0)} KB → ${outputPath.split('/public')[1]}`,
    );
  }

  await browser.close();
  server.close();

  // The legacy /og-image.jpg URL is already cached by the social scrapers, so keep
  // it alive and pointed at the current artwork.
  await fs.copyFile(path.join(outputDir, 'default.jpg'), path.join(projectRoot, 'public/og-image.jpg'));
  console.log('✓ legacy: copied default.jpg → /og-image.jpg');

  console.log('\nDone!');
}

generateOgImages().catch((error) => {
  console.error(error);
  process.exit(1);
});
