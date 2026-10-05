/* Scroll storytelling with a requestAnimationFrame fallback on every browser.
   Product requirement: system reduced-motion preference does not disable motion. */
(() => {
  const story = document.querySelector('.story');
  const slides = [...document.querySelectorAll('.story-slide')];
  const dots = [...document.querySelectorAll('[data-go]')];
  const device = document.querySelector('.story-device');
  const preferences = document.querySelector('.preferences');
  const background = document.querySelector('.background');
  let scheduled = false, active = -1;
  const clamp = n => Math.max(0, Math.min(1, n));
  function render() {
    scheduled = false;
    const maximum = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--reading', `${clamp(scrollY / maximum) * 100}%`);
    const rect = story.getBoundingClientRect();
    const p = clamp(-rect.top / Math.max(1, rect.height - innerHeight));
    const next = Math.min(2, Math.floor(p * 3));
    if (active !== next) {
      active = next;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === active);
        dot.setAttribute('aria-pressed', String(i === active));
      });
      story.dataset.step = String(active);
    }
    const narrow = innerWidth < 800;
    device.style.transform = narrow ? `translateY(${(1-p)*16}px) scale(${.93+p*.07})` :
      `perspective(1500px) rotateY(${-12+p*17}deg) rotateX(${4-p*5}deg) translateY(${18-p*36}px) scale(${.92+p*.08})`;
    preferences.style.opacity = String(clamp((p-.28)*8) * (1-clamp((p-.72)*8)));
    background.style.opacity = String(clamp((p-.65)*8));
    const chapters = [...document.querySelectorAll('[data-chapter]')];
    let nearest = chapters[0];
    chapters.forEach(chapter => { if (chapter.getBoundingClientRect().top < innerHeight*.5) nearest = chapter; });
    document.querySelectorAll('.chapter-nav a, .header nav a[href^="#"]').forEach(link => {
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
    scrollTo({top: top + (story.offsetHeight-innerHeight) * ((Number(dot.dataset.go)+.35)/3), behavior: 'smooth'});
  }));
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate([{opacity:0, transform:'translateY(36px)'}, {opacity:1, transform:'translateY(0)'}],
      {duration:850, easing:'cubic-bezier(.16,1,.3,1)', fill:'both'});
    reveal.unobserve(entry.target);
  }), {threshold:.1});
  document.querySelectorAll('.hero-copy, .preview-top, .preview .screen, .features>h2, .feature, .settings-copy, .guide-heading, .steps, .closing')
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
