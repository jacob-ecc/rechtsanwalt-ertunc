// Shared markup for every page: head, nav, hero, sections, footer. Built on the taste-skill kit
// (assets/system.css, assets/layout, assets/moments); see the deal comment in each page's <body>.
import { PHOTOS, widths, hasPhone } from './photos.mjs';

export const SITE = 'https://www.rechtsanwalt-ertunc.com/';
export const YEAR = 2026;
export const PHONE = { label: '08031 209 24 48', href: 'tel:+4980312092448' };
export const FAX = '08031 232 88 49';
export const EMAIL = 'info@rechtsanwalt-ertunc.com';
export const MAP = 'https://www.openstreetmap.org/search?query=Adlzreiterstra%C3%9Fe%202%2083022%20Rosenheim';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ARROW = '<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg>';
const CHEV = '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** an <img> of a stand-in photograph; p = path prefix to the site root */
export function photo(p, key, lang, { sizes = '(max-width: 639px) 800px, (max-width: 1023px) 1200px, 1060px', lazy = true, cls = 'frame__img', pos = '', alt } = {}) {
  const ph = PHOTOS[key]; const ws = widths(ph.id);
  const src = ws.includes(1024) ? 1024 : ws[ws.length - 1];
  const srcset = ws.map(w => `${p}assets/img/photo-${ph.id}-${w}.webp ${w}w`).join(', ');
  const h = Math.round(src / ph.ratio);
  return `<img${cls ? ` class="${cls}"` : ''} src="${p}assets/img/photo-${ph.id}-${src}.webp" srcset="${srcset}" sizes="${sizes}" width="${src}" height="${h}" alt="${esc(alt || ph.alt[lang])}"${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}${pos ? ` style="--pos: ${pos}; object-position: ${pos}"` : ''} data-source="stand-in" data-subject="${esc(ph.subject)}">`;
}

/** the hero's photograph: a phone crop in a <picture>, the landscape file from 640px */
export function heroPhoto(p, key, lang, pos = '50% 50%') {
  const ph = PHOTOS[key]; const ws = widths(ph.id);
  const srcset = ws.map(w => `${p}assets/img/photo-${ph.id}-${w}.webp ${w}w`).join(', ');
  const src = ws.includes(1600) ? 1600 : ws[ws.length - 1];
  const phone = hasPhone(ph.id) ? `<source media="(max-width: 639px)" srcset="${p}assets/img/photo-${ph.id}-phone.webp" width="760" height="1600">` : '';
  return `<picture>${phone}<img src="${p}assets/img/photo-${ph.id}-${src}.webp" srcset="${srcset}" sizes="(max-width: 1023px) 1500px, 1280px" width="${src}" height="${Math.round(src / ph.ratio)}" alt="${esc(ph.alt[lang])}" style="--ly-pos: ${pos}" fetchpriority="high" data-source="stand-in" data-subject="${esc(ph.subject)}"></picture>`;
}

export const btn = (href, label, kind = 'primary', arrow = false) =>
  `<a class="btn btn--${kind}" href="${href}">${label}${arrow ? ARROW : ''}</a>`;

/* ---------- head ---------- */
export function head(pg, T) {
  const p = pg.p;
  const moments = pg.moments || [];
  const canon = SITE + pg.out.replace(/index\.html$/, '');
  const alts = (pg.alternates || []).map(a => `<link rel="alternate" hreflang="${a.lang}" href="${SITE}${a.href}">`).join('\n');
  return `<!doctype html>
<html lang="${pg.lang}" data-type="service" data-radius="soft" data-buttons="tonal" data-motion>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(pg.title)}</title>
<meta name="description" content="${esc(pg.desc)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(pg.title)}">
<meta property="og:description" content="${esc(pg.ogDesc || pg.desc)}">
<meta property="og:image" content="${SITE}share.jpg">
<meta property="og:locale" content="${{ de: 'de_DE', tr: 'tr_TR', en: 'en_GB' }[pg.lang]}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${p}favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#e2e2e2">
<link rel="canonical" href="${canon}">
${alts}
<meta name="site-kind" content="other">
<meta name="page-type" content="service">
<!-- fonts are served from this site (assets/fonts), never from Google: no third-party request (DSGVO) -->
<link rel="preload" href="${p}assets/fonts/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${p}assets/fonts/pxicypc9vsFDm051Uf6KVwgkfoSbT2lB.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${p}assets/fonts/fonts.css">
<link rel="stylesheet" href="${p}assets/system.css">
<link rel="stylesheet" href="${p}assets/ui/cards.css">
<link rel="stylesheet" href="${p}assets/motion/motion.css">
<link rel="stylesheet" href="${p}assets/layout/layout.css">
<link rel="stylesheet" href="${p}assets/icons/icon.css">
<style>
:root {
  --p-bg: #e2e2e2; --p-surface: #d6d6d6; --p-ink: #7d0c14; --p-muted: #7a4a4e;
  --p-accent: #7d0c14; --p-accent-ink: #e2e2e2; --p-action: #7d0c14; --p-action-ink: #e2e2e2;
  --p-inv-bg: #7d0c14; --p-inv-surface: #862323; --p-inv-ink: #e2e2e2; --p-inv-muted: #d0b3af;
  --p-inv-accent: #e2e2e2; --p-inv-accent-ink: #7d0c14; --p-inv-action: #e2e2e2; --p-inv-action-ink: #7d0c14;
  --font-display: "Instrument Serif", Georgia, serif;
  --font-text: "Instrument Sans", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.012em;
  --display-tracking-xl: -0.016em;
  --ly-scale: 1.12;
}
</style>
<link rel="stylesheet" href="${p}assets/site.css">
<script>document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)</script>${moments.length ? `
<script>document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)</script>
<link rel="modulepreload" href="${p}assets/moments/moments.js"><link rel="modulepreload" href="${p}assets/moments/lib.js">
${moments.map(m => `<link rel="modulepreload" href="${p}assets/moments/${m}/moment.js">`).join('')}` : ''}
</head>
<body>
<!-- type: service (Kanzlei, site-kind other)
     deal: hero film (no film: the poster is a stand-in photograph, no play control), nav nav-split, close close-photo,
     footer footer-columns, rhythm space, buttons tonal, mark stack, palette oxblood-grey, type instrument-serif
     moments: ${moments.join(', ') || 'none'}
     Built by src/build.mjs: edit the content in src/content/*.mjs and run "node src/build.mjs". -->
`;
}

/* ---------- nav ---------- */
export function nav(pg, T) {
  const p = pg.p;
  const items = T.nav.map(it => {
    const cur = it.key === pg.navKey ? ' aria-current="page"' : '';
    if (!it.menu) return `      <div class="nav__item"><a class="nav__link" href="${p}${it.href}"${cur}>${it.label}</a></div>`;
    const cols = it.menu.cols.map(c => `            <div class="menu-col span-3">
              <p class="t-label">${c.head}</p>
${c.links.map(l => `              <a href="${p}${l.href}">${l.label}<span>${l.line}</span></a>`).join('\n')}
            </div>`).join('\n');
    const card = it.menu.card ? `
            <a class="menu-card span-3 start-10" href="${p}${it.menu.card.href}">
              <div class="panel">${photo(p, it.menu.card.photo, pg.lang, { sizes: '282px', lazy: false })}</div>
              <span class="t-card">${it.menu.card.title}</span>
              <span class="t-small muted">${it.menu.card.line}</span>
            </a>` : '';
    return `      <div class="nav__item">
        <a class="nav__link" href="${p}${it.href}"${cur}>${it.label} ${CHEV}</a>
        <div class="nav__menu">
          <div class="wrap grid">
${cols}${card}
          </div>
        </div>
      </div>`;
  }).join('\n');
  const langs = T.langs.map(l => `<a class="nav__link nav__lang" href="${p}${pg.langLinks?.[l.code] ?? l.home}" hreflang="${l.code}" lang="${l.code}" aria-label="${l.name}">${l.short}</a>`).join('');
  return `<header class="nav nav--split">
  <div class="wrap nav__bar">
    <a class="skip-link" href="#top">${T.skip}</a>
    <a class="nav__logo" href="${(p + T.home) || './'}"><span class="mark" data-mark="stack" aria-hidden="true"></span>Dr. Kenan Ertunc</a>
    <nav class="nav__links" aria-label="${T.navLabel}">
${items}
${T.langs.map(l => `      <div class="nav__item nav__item--lang"><a class="nav__link" href="${p}${pg.langLinks?.[l.code] ?? l.home}" hreflang="${l.code}" lang="${l.code}">${l.name}</a></div>`).join('\n')}
    </nav>
    <div class="nav__actions">
      <span class="nav__langs">${langs}</span>
      ${btn(p + T.actionHref, T.action)}
    </div>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-label="${T.menu}">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>
`;
}

/* ---------- hero (film, no play control) ---------- */
export function hero(pg, h) {
  const p = pg.p;
  return `  <section class="hero hero--film" data-enter aria-labelledby="hero-h">
    <div class="wrap"><div class="hero-text hero__in">
      <div class="hero__media hero__fill">
        ${heroPhoto(p, h.photo, pg.lang, h.pos)}
        <div class="hero__over">
          <div>
            <h1 id="hero-h">${h.h1}</h1>
            <p class="hero__lead">${h.lead}</p>
            <div class="btn-row">${h.buttons.map((b, i) => btn(b.href.startsWith('#') || /^(tel|mailto):/.test(b.href) ? b.href : p + b.href, b.label, i ? 'secondary' : 'primary', !i)).join('')}</div>
          </div>
        </div>
      </div>
    </div></div>
  </section>
`;
}

/* ---------- rows ---------- */
export const rows = (items, cls = 'rows') => `<ul class="${cls}">
${items.map(r => `            <li${r.id ? ` id="${r.id}"` : ''}><span class="rows__name">${r.name}</span>${r.line ? `<p>${r.line}</p>` : ''}${r.value ? `<span class="rows__value">${r.value}</span>` : ''}</li>`).join('\n')}
          </ul>`;

/** a split: words on span-5, the photograph on span-6 start-7 */
export function split(pg, s) {
  const p = pg.p;
  if (s.hm === undefined) s = { ...s, hm: 2 };
  const media = s.develop
    ? `<figure class="develop span-6 start-7" data-moment="picture-develops">${photo(p, s.photo, pg.lang, { cls: '', pos: s.pos })}</figure>`
    : `<div class="frame frame--photo split__media span-6 start-7">${photo(p, s.photo, pg.lang, { pos: s.pos })}</div>`;
  return `  <section class="section${s.cls ? ' ' + s.cls : ''}" id="${s.id}"${s.h || s.hm ? ` style="${s.h ? `--h: ${s.h};` : ''}${s.hm ? ` --hm: ${s.hm}` : ''}"` : ''} aria-labelledby="${s.id}-h">
    <div class="wrap grid grid--top split">
      <div class="span-5 split__text">
        <div class="section-head">
          <h2 id="${s.id}-h">${s.h2}</h2>
          ${s.lead ? `<p>${s.lead}</p>` : ''}
        </div>
        ${s.body || ''}
      </div>
      ${media}
    </div>
  </section>
`;
}

/** word-highlight: one statement in a section of its own */
export const statement = (s) => `  <section class="section statement" id="${s.id}" data-moment="word-highlight" aria-label="${esc(s.label)}">
    <div class="wrap">
      <p class="t-label">${s.label}</p>
      <p class="mo-wh__text">${s.text}</p>${s.after || ''}
    </div>
  </section>
`;

/** pinned-chapters: the steps of a mandate beside one frame, two screens */
export function chapters(pg, s) {
  const p = pg.p;
  return `  <section class="section" id="${s.id}" style="--h: 2; --hm: 2" data-moment="pinned-chapters" aria-labelledby="${s.id}-h">
    <div class="wrap mo-pc__grid">
      <div class="mo-pc__text">
        <h2 id="${s.id}-h">${s.h2}</h2>
        <ol class="mo-pc__steps">
${s.steps.map(st => `          <li class="mo-pc__step">
            <h3>${st.title}</h3>
            <p>${st.text}</p>
            <figure class="mo-pc__visual">${photo(p, st.photo, pg.lang, { cls: '', sizes: '(max-width: 1023px) 100vw, 628px' })}</figure>
          </li>`).join('\n')}
        </ol>
      </div>
      <div class="mo-pc__visuals frame"></div>
    </div>
  </section>
`;
}

/** fees: the head, three ways of billing side by side, one wide photograph under them */
export function fees(pg, s) {
  const p = pg.p;
  return `  <section class="section" id="${s.id}" style="--hm: 2" aria-labelledby="${s.id}-h">
    <div class="wrap">
      <div class="section-head section-head--split">
        <div><h2 id="${s.id}-h">${s.h2}</h2><p class="t-lead">${s.lead}</p></div>
      </div>
      <div class="grid fees">
${s.items.map(it => `        <div class="span-4 fee"><p class="fee__value">${it.value}</p><p class="fee__name">${it.name}</p><p>${it.line}</p></div>`).join('\n')}
      </div>
      <div class="wide-photo">${photo(p, s.photo, pg.lang, { cls: '', sizes: '(max-width: 1440px) calc(100vw - 48px), 1280px', pos: s.pos })}</div>
      ${s.link ? `<p class="split__more"><a class="link" href="${p}${s.link.href}">${s.link.label}</a></p>` : ''}
    </div>
  </section>
`;
}

/** a split of words left and the FAQ right (no picture: the page's calm section) */
export function faqSplit(s) {
  return `  <section class="section" id="${s.id}" aria-labelledby="${s.id}-h">
    <div class="wrap grid grid--top">
      <div class="span-5">
        <div class="section-head">
          <h2 id="${s.id}-h">${s.h2}</h2>
          ${s.lead ? `<p>${s.lead}</p>` : ''}
        </div>
        ${s.left || ''}
      </div>
      <div class="faq span-6 start-7">
${s.faq.map(f => `        <div class="faq__item"><h3>${f.q}</h3><p>${f.a}</p></div>`).join('\n')}
      </div>
    </div>
  </section>
`;
}

/* ---------- the enquiry form (mailto: the client has no form service yet) ---------- */
export function form(pg, F) {
  const opts = F.areas.map(a => `<option>${a}</option>`).join('');
  return `<form class="form" action="mailto:${EMAIL}?subject=${encodeURIComponent(F.subject)}" method="post" enctype="text/plain" data-endpoint="" novalidate>
          <div class="field field--full"><label for="f-name">${F.name}</label>
            <input id="f-name" name="${F.nameKey}" type="text" autocomplete="name" required aria-describedby="f-name-err">
            <p class="field__error" id="f-name-err" hidden>${F.nameErr}</p></div>
            <div class="field"><label for="f-email">${F.email}</label>
              <input id="f-email" name="${F.emailKey}" type="email" autocomplete="email" inputmode="email" required aria-describedby="f-email-err">
              <p class="field__error" id="f-email-err" hidden>${F.emailErr}</p></div>
            <div class="field"><label for="f-tel">${F.tel}</label>
              <input id="f-tel" name="${F.telKey}" type="tel" autocomplete="tel" inputmode="tel"></div>
          <div class="field field--full"><label for="f-area">${F.area}</label>
            <select id="f-area" name="${F.areaKey}">${opts}</select></div>
          <div class="field field--full"><label for="f-msg">${F.msg}</label>
            <textarea id="f-msg" name="${F.msgKey}" rows="4" required aria-describedby="f-msg-err"></textarea>
            <p class="field__error" id="f-msg-err" hidden>${F.msgErr}</p></div>
          <div class="btn-row"><button class="btn btn--primary" type="submit">${F.button}</button></div>
          <p class="form__status" role="status" data-form-status></p>
          <p class="t-small muted">${typeof F.note === 'function' ? F.note(pg.p) : F.note}</p>
        </form>`;
}

/* ---------- footer: close-photo + footer-columns ---------- */
export function footer(pg, T, c) {
  const p = pg.p;
  const cols = T.footer.cols.map(col => `        <div class="span-2 footer__col${col.phoneHide ? ' footer__col--wide' : ''}${col.phoneOff ? ' footer__col--nophone' : ''}"><h3>${col.head}</h3><ul>${col.links.map(l => `<li>${l.href !== undefined ? `<a href="${/^(tel|mailto|https?):/.test(l.href) ? l.href : p + l.href}"${l.lang ? ` lang="${l.lang}" hreflang="${l.lang}"` : ''}>${l.label}</a>` : `<span>${l.label}</span>`}</li>`).join('')}</ul></div>`).join('\n');
  return `<footer class="footer closing" id="contact" aria-labelledby="close-h">
  <div class="wrap">
    <div class="closing__cta close--photo">
      <div class="section-head--split">
        <div><h2 id="close-h">${c.h2}</h2><p class="t-lead">${c.line}</p></div>
        ${btn(p + T.actionHref, T.action, 'primary', true)}
      </div>
      <div class="close__media">${photo(p, c.photo, pg.lang, { cls: '', sizes: '(max-width: 639px) 600px, (max-width: 1440px) calc(100vw - 48px), 1280px', pos: c.pos })}</div>
    </div>
    <div class="closing__links">
      <div class="grid">
        <div class="span-4 stack-4">
          <a class="nav__logo" href="${(p + T.home) || './'}"><span class="mark" data-mark="stack" aria-hidden="true"></span>Dr. Kenan Ertunc</a>
          <p class="footer__lede">${T.footer.lede}</p>
        </div>
${cols}
      </div>
      <div class="footer__legal">
        <span>&copy; ${YEAR} ${T.footer.firm} &nbsp; <a href="${p}impressum/">${T.footer.imprint}</a> &nbsp; <a href="${p}datenschutz/">${T.footer.privacy}</a></span>
        <div class="socials"></div>
        <a class="credits" href="${p}credits.html">${T.footer.credits}</a>
      </div>
    </div>
  </div>
</footer>
<nav class="actionbar" aria-label="${T.quick}">
  ${btn(p + T.actionHref, T.action)}
</nav>
<script type="module" src="${p}assets/system.js"></script>
<script type="module" src="${p}assets/motion/motion.js"></script>
<script type="module" src="${p}assets/layout/layout.js"></script>
</body>
</html>
`;
}

export function page(pg, T) {
  return head(pg, T) + nav(pg, T) + `
<main id="top">
${hero(pg, pg.hero)}
${pg.sections.join('\n')}
</main>

` + footer(pg, T, pg.close);
}
