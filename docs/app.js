/* Scroll storytelling with a requestAnimationFrame fallback on every browser.
   Product requirement: system reduced-motion preference does not disable motion. */
(() => {
  const root = document.documentElement;
  const story = document.querySelector('.story');
  const slides = [...document.querySelectorAll('.story-slide')];
  const dots = [...document.querySelectorAll('[data-go]')];
  const device = document.querySelector('.story-device');
  const images = [...document.querySelectorAll('.story-image')];
  const hero = document.querySelector('.hero-device');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const links = [...document.querySelectorAll('.chapter-nav a, .header nav a[href^="#"]')];
  const count = slides.length;
  let scheduled = false, active = -1;
  const clamp = n => Math.max(0, Math.min(1, n));
  function render() {
    scheduled = false;
    root.style.setProperty('--reading', `${clamp(scrollY / Math.max(1, root.scrollHeight - innerHeight)) * 100}%`);
    const narrow = innerWidth < 800;
    // The hero window turns to face the reader as the page starts to scroll.
    const lift = clamp(scrollY / 520);
    hero.style.transform = innerWidth <= 1000 ? `perspective(1800px) rotateX(${3 - lift * 3}deg)` :
      `perspective(1800px) rotateY(${-10 + lift * 10}deg) rotateX(${4 - lift * 4}deg) scale(${1 - lift * .03})`;
    const rect = story.getBoundingClientRect();
    const p = clamp(-rect.top / Math.max(1, rect.height - innerHeight));
    const next = Math.min(count - 1, Math.floor(p * count));
    if (active !== next) {
      active = next;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === active);
        dot.setAttribute('aria-pressed', String(i === active));
      });
      story.dataset.step = String(active);
    }
    device.style.transform = narrow ? `translateY(${(1-p)*16}px) scale(${.93+p*.07})` :
      `perspective(1500px) rotateY(${-12+p*17}deg) rotateX(${4-p*5}deg) translateY(${18-p*36}px) scale(${.92+p*.08})`;
    // Later screens sit on top of earlier ones, so each only needs to fade in.
    images.forEach((image, i) => { if (i) image.style.opacity = String(clamp((p - i / count + .05) * 8)); });
    let nearest = chapters[0];
    chapters.forEach(chapter => { if (chapter.getBoundingClientRect().top < innerHeight * .5) nearest = chapter; });
    links.forEach(link => {
      const selected = link.hash === `#${nearest.id}`;
      link.classList.toggle('is-active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(render); } };
  addEventListener('scroll', schedule, {passive: true});
  addEventListener('resize', schedule);
  dots.forEach(dot => dot.addEventListener('click', () => {
    const top = story.getBoundingClientRect().top + scrollY;
    scrollTo({top: top + (story.offsetHeight - innerHeight) * ((Number(dot.dataset.go) + .35) / count), behavior: 'smooth'});
  }));
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate([{opacity: 0, transform: 'translateY(36px)'}, {opacity: 1, transform: 'translateY(0)'}],
      {duration: 850, delay: Number(entry.target.dataset.delay || 0), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'both'});
    reveal.unobserve(entry.target);
  }), {threshold: .1});
  // Side-by-side tiles and the three steps arrive one after another.
  let column = 0;
  document.querySelectorAll('.tile').forEach(tile => {
    column = tile.classList.contains('wide') ? 0 : column;
    tile.dataset.delay = String(column * 110);
    column = tile.classList.contains('wide') ? 0 : (column + 1) % 2;
  });
  document.querySelectorAll('.steps li').forEach((step, i) => { step.dataset.delay = String(i * 120); });
  document.querySelectorAll('.hero-copy, .section-head, .tile, .extras, .steps li, .account-copy, .account-visual, .faq-group, .closing')
    .forEach(element => reveal.observe(element));
  render();
})();

/* Direct ZIP links follow the newest release asset when GitHub answers. */
(() => {
  const links = document.querySelectorAll('[data-download]');
  if (!links.length || !window.fetch) return;
  fetch('https://api.github.com/repos/deuxdoom/ChzzkDownloader/releases/latest', {headers: {Accept: 'application/vnd.github+json'}})
    .then(response => response.ok ? response.json() : null)
    .then(release => {
      const asset = release && (release.assets || []).find(item => /^ChzzkDownloader_v\d+\.zip$/.test(item.name));
      if (!asset) return;
      links.forEach(link => { link.href = asset.browser_download_url; link.title = asset.name; });
    })
    .catch(() => {});
})();
