// Builds every page of the site into the repository root.
//   node src/build.mjs
// Content lives in src/content/<lang>.mjs, shared markup in src/parts.mjs, legal pages in src/legal.mjs.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { page } from './parts.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const write = (out, html) => { const f = join(root, out); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); console.log('wrote', out); };

const langs = ['de', 'tr', 'en'];
for (const l of langs) {
  const file = join(root, 'src', 'content', l + '.mjs');
  if (!existsSync(file)) continue;
  const { T, pages } = await import('./content/' + l + '.mjs');
  for (const pg of pages()) write(pg.out, page(pg, T));
}

if (existsSync(join(root, 'src', 'legal.mjs'))) {
  const { legalPages } = await import('./legal.mjs');
  for (const [out, html] of legalPages()) write(out, html);
}

// old addresses of the previous site that have no page of their own any more
const redirects = {
  'contact-us/index.html': '../kontakt/',
  'blog/index.html': '../',
  'tuerkce/hakkimizda/index.html': '../',
  'english/about-us/index.html': '../',
};
for (const [out, to] of Object.entries(redirects)) {
  write(out, `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Weiterleitung</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}"></head><body><p><a href="${to}">Weiter zur neuen Seite</a></p></body></html>\n`);
}
