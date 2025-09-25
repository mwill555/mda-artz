/**
 * Reads a JSON array of product metadata and emits:
 * 1) SEO JSON files in build/seo/{handle}.json
 * 2) A CSV file for PinGenerator at build/pins/pins.csv
 *
 * Expected input shape:
 * {
 *   handle: string;
 *   title: string;
 *   description: string;
 *   alt: string;
 *   board: string;
 *   url: string;
 *   tags: string[];
 *   image_url: string;
 * }
 */

import * as fs from 'fs';
import * as path from 'path';

interface ProductInput {
  handle: string;
  title: string;
  description: string;
  alt: string;
  board: string;
  url: string;
  tags: string[];
  image_url: string;
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max).trim() : str.trim();
}

function validateContent(text: string): void {
  const banned = ['pink', 'rainbow'];
  if (process.env.ALLOW_PASTEL === 'true') return;
  banned.forEach(word => {
    if (new RegExp(`\\b${word}\\b`, 'i').test(text)) {
      throw new Error(`Banned word "${word}" detected in: ${text}`);
    }
  });
}

function generateSeoFiles(products: ProductInput[]): void {
  products.forEach(product => {
    validateContent(product.title);
    validateContent(product.description);
    validateContent(product.alt);
    const meta = {
      product_handle: product.handle,
      meta_title: truncate(product.title, 60),
      meta_description: truncate(product.description, 160),
      image_alt_text: truncate(product.alt, 150),
    };
    const outDir = path.join('build', 'seo');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, `${product.handle}.json`),
      JSON.stringify(meta, null, 2),
      'utf8',
    );
  });
}

function generatePinsCsv(products: ProductInput[]): void {
  const lines = [
    ['Title', 'Description', 'Alt Text', 'Board', 'URL', 'Tags', 'Image_URL'].join(','),
  ];
  products.forEach(product => {
    validateContent(product.title);
    validateContent(product.description);
    validateContent(product.alt);
    const title = truncate(product.title, 60).replace(/"/g, '');
    const description = truncate(product.description, 160).replace(/"/g, '');
    const alt = truncate(product.alt, 150).replace(/"/g, '');
    const tags = product.tags.join(' ');
    const row = [title, description, alt, product.board, product.url, tags, product.image_url]
      .map(field => (field.includes(',') ? `"${field}"` : field))
      .join(',');
    lines.push(row);
  });
  const outDir = path.join('build', 'pins');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'pins.csv'), lines.join('\n'), 'utf8');
}

function main(): void {
  const [inputPath] = process.argv.slice(2);
  if (!inputPath) {
    console.error('Usage: node mdz-seo-pins.js <input-json>');
    process.exit(1);
  }
  const raw = fs.readFileSync(inputPath, 'utf8');
  const products: ProductInput[] = JSON.parse(raw);
  generateSeoFiles(products);
  generatePinsCsv(products);
  console.log(`Generated SEO and pins files for ${products.length} products.`);
}

if (require.main === module) {
  main();
}
