// The site's own small motion layer (see assets/site.css):
//  - [data-reveal]: a list whose items rise in one after the other when it scrolls into view
//  - [data-steps]: the mandate's steps; the rule fills and each step lights up as the section scrolls by
// html.rv is set in the <head> only when motion is allowed and IntersectionObserver exists, so without
// script (or under reduced motion) everything simply stands.
const root = document.documentElement;
const live = root.classList.contains('rv');

/* reveal */
const groups = [...document.querySelectorAll('[data-reveal]')];
groups.forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--i', i)));
if (live) {
  const io = new IntersectionObserver(entries => {
    // in view, or already passed (a jump to an anchor below it): show it
    for (const e of entries) if (e.isIntersecting || e.boundingClientRect.bottom < 0) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -12% 0px' });
  groups.forEach(g => io.observe(g));
  // printing shows everything
  addEventListener('beforeprint', () => groups.forEach(g => g.classList.add('is-in')));
}

/* steps */
const steps = [...document.querySelectorAll('[data-steps]')];
if (steps.length) {
  const items = steps.map(s => [...s.querySelectorAll('.steps__item')]);
  // the rail runs exactly from the first number's centre to the last one's (across on a desktop, down on a phone)
  const place = () => steps.forEach(s => {
    const nums = s.querySelectorAll('.steps__num'), rail = s.querySelector('.steps__rail');
    if (nums.length < 2 || !rail) return;
    const o = s.getBoundingClientRect(), a = nums[0].getBoundingClientRect(), b = nums[nums.length - 1].getBoundingClientRect();
    const ax = a.left + a.width / 2 - o.left, ay = a.top + a.height / 2 - o.top, bx = b.left + b.width / 2 - o.left, by = b.top + b.height / 2 - o.top;
    const across = Math.abs(by - ay) < Math.abs(bx - ax);
    Object.assign(rail.style, across
      ? { left: ax + 'px', top: ay - 1 + 'px', width: bx - ax + 'px', height: '2px', right: 'auto', bottom: 'auto' }
      : { left: ax - 1 + 'px', top: ay + 'px', width: '2px', height: by - ay + 'px', right: 'auto', bottom: 'auto' });
  });
  place();
  addEventListener('resize', place);
  addEventListener('load', place);
  document.fonts?.ready.then(place);
  if (!live) {
    steps.forEach((s, k) => { s.style.setProperty('--p', 1); items[k].forEach(it => it.classList.add('is-on')); });
  } else {
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = innerHeight;
      steps.forEach((s, k) => {
        const r = s.getBoundingClientRect();
        // 0 when the steps' top reaches 85% of the screen, 1 when their foot passes 55%
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / Math.max(1, r.height + vh * 0.3)));
        s.style.setProperty('--p', p.toFixed(3));
        const n = items[k].length;
        items[k].forEach((it, i) => it.classList.toggle('is-on', p >= (n === 1 ? 0 : i / (n - 1)) * 0.92 + 0.04));
      });
    };
    const ask = () => { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener('scroll', ask, { passive: true });
    addEventListener('resize', ask);
    addEventListener('beforeprint', () => steps.forEach((s, k) => { s.style.setProperty('--p', 1); items[k].forEach(it => it.classList.add('is-on')); }));
    update();
  }
}
