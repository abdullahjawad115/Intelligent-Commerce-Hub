import puppeteer from 'puppeteer';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const DOMAIN = process.env.REPLIT_DOMAINS?.split(',')[0];
if (!DOMAIN) throw new Error('REPLIT_DOMAINS not set');

const BASE = `https://${DOMAIN}/__mockup/preview/modus`;

const SCREENS = [
  { name: '01 — Onboarding · Store Setup',  slug: 'Onboarding' },
  { name: '02 — Dashboard',                 slug: 'Dashboard' },
  { name: '03 — Sales & Analytics',         slug: 'Sales' },
  { name: '04 — AI Recommendations',        slug: 'Recommendations' },
  { name: '05 — Inventory Intelligence',    slug: 'Inventory' },
  { name: '06 — Integrations & Settings',   slug: 'Integrations' },
];

const OUT_DIR = path.join(process.cwd(), 'exports');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');
const PDF_PATH = path.join(OUT_DIR, 'Modus-Screens.pdf');

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  const screenshotPaths: string[] = [];

  for (const screen of SCREENS) {
    const url = `${BASE}/${screen.slug}`;
    console.log(`Capturing ${screen.name}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1200));

    const shotPath = path.join(SCREENSHOTS_DIR, `${screen.slug}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    screenshotPaths.push(shotPath);
    console.log(`  ✓ Saved ${shotPath}`);
  }

  await browser.close();

  console.log('\nCompiling PDF...');
  const doc = new PDFDocument({ size: 'A4', margin: 0, autoFirstPage: false });
  doc.pipe(fs.createWriteStream(PDF_PATH));

  const A4_W = 595.28;
  const A4_H = 841.89;

  for (let i = 0; i < screenshotPaths.length; i++) {
    const screen = SCREENS[i];
    doc.addPage();

    // Header bar
    doc.rect(0, 0, A4_W, 36).fill('#0F1829');
    doc.font('Helvetica-Bold').fontSize(11).fillColor('#E4E9F2')
      .text('MODUS', 20, 11, { continued: true })
      .font('Helvetica').fillColor('#8494B0')
      .text(`  ·  ${screen.name}`, { continued: false });

    // Page number
    doc.font('Helvetica').fontSize(9).fillColor('#3D5070')
      .text(`${i + 1} / ${SCREENS.length}`, A4_W - 60, 13, { width: 50, align: 'right' });

    // Screenshot
    const imgH = A4_H - 36 - 24;
    doc.image(screenshotPaths[i], 0, 36, { width: A4_W, height: imgH, fit: [A4_W, imgH], align: 'center' });

    // Footer
    doc.rect(0, A4_H - 24, A4_W, 24).fill('#080E1A');
    doc.font('Helvetica').fontSize(8).fillColor('#3D5070')
      .text('Modus — AI Commerce Intelligence · Confidential', 20, A4_H - 16, { width: A4_W - 40 });
  }

  doc.end();
  console.log(`\n✓ PDF written to ${PDF_PATH}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
