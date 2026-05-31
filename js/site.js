const FLASH_IMAGES = [
  '/screenshots/homepage-original.png',
  '/screenshots/game-select-small.png',
  '/screenshots/hiscores-small.png',
  '/screenshots/hiscores-full.png',
];

async function showContent(name) {
  const panel = document.getElementById('content-panel');
  const body = document.getElementById('content-body');
  const title = document.getElementById('content-title');

  panel.hidden = false;
  body.innerHTML = '<p class="rsc-loading">Loading…</p>';
  if (title) title.textContent = name.replace(/-/g, ' ');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    const resp = await fetch('/content/' + name + '.md');
    if (!resp.ok) throw new Error('missing');
    const md = await resp.text();
    const html = typeof marked !== 'undefined'
      ? marked.parse(md)
      : md.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>');
    body.innerHTML = injectFlashes(html);
  } catch {
    body.innerHTML = '<p>Content coming soon.</p>';
  }
}

function closeContent() {
  document.getElementById('content-panel').hidden = true;
}

function injectFlashes(html) {
  const parts = html.split('</p>');
  let flashCount = 0;
  return parts.map((part, i) => {
    if (i === parts.length - 1) return part;
    const block = part + '</p>';
    if ((i + 1) % 2 === 0 && i < parts.length - 2) {
      return block + makeFlash(flashCount++);
    }
    return block;
  }).join('');
}

function makeFlash(seed) {
  const imgs = [0, 1, 2].map(j => {
    const src = FLASH_IMAGES[(seed * 3 + j) % FLASH_IMAGES.length];
    return '<img src="' + src + '" alt="RuneScape 2004" loading="lazy">';
  }).join('');
  return '<div class="rsc-img-flash">' + imgs + '</div>';
}
