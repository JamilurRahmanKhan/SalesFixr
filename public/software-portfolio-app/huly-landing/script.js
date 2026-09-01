document.documentElement.classList.add('js');

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');

if (header && navToggle) {
  navToggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  header.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

const raycastDemo = document.querySelector('[data-raycast-demo]');

if (raycastDemo) {
  const dock = raycastDemo.querySelector('[data-raycast-dock]');
  const tooltip = raycastDemo.querySelector('[data-raycast-tooltip]');
  const tabs = [...dock.querySelectorAll('[data-raycast-tab]')];
  const panels = [...raycastDemo.querySelectorAll('[data-raycast-panel]')];

  const showPanel = (name, focusTab = false) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.raycastTab === name;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });

    panels.forEach((panel) => {
      const active = panel.dataset.raycastPanel === name;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  };

  const showTooltip = (tab) => {
    tooltip.textContent = tab.dataset.label;
    tooltip.style.left = `${tab.offsetLeft + tab.offsetWidth / 2}px`;
    tooltip.classList.add('is-visible');
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showPanel(tab.dataset.raycastTab));
    tab.addEventListener('pointerenter', () => showTooltip(tab));
    tab.addEventListener('focus', () => showTooltip(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      showPanel(tabs[next].dataset.raycastTab, true);
    });
  });

  dock.addEventListener('pointerleave', () => tooltip.classList.remove('is-visible'));
  dock.addEventListener('focusout', () => tooltip.classList.remove('is-visible'));
  showPanel('clipboard');

  const animatedGroups = [
    [...raycastDemo.querySelectorAll('[data-raycast-panel="clipboard"] aside em')],
    [...raycastDemo.querySelectorAll('.emoji-grid span')],
    [...raycastDemo.querySelectorAll('.calculator-screen li')],
    [...raycastDemo.querySelectorAll('.window-screen aside em')]
  ];
  let motionStep = 0;
  if (!prefersReducedMotion) {
    window.setInterval(() => {
      motionStep += 1;
      animatedGroups.forEach((group, groupIndex) => {
        group.forEach((item) => item.classList.remove('is-selected'));
        if (group.length) group[(motionStep + groupIndex) % group.length].classList.add('is-selected');
      });
    }, 1300);
  }
}

const zkOrbit = document.querySelector('[data-zk-orbit]');

if (zkOrbit) {
  const { buildCurvedWire, samplePerspectiveOrbit } = window.OrbitGeometry;
  const orbitNodes = [...zkOrbit.querySelectorAll('.zk-node')];
  const orbitLinks = [...zkOrbit.querySelectorAll('[data-link]')];
  let pointerFrame = 0;

  zkOrbit.addEventListener('pointermove', (event) => {
    if (prefersReducedMotion) return;
    const bounds = zkOrbit.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      zkOrbit.style.setProperty('--orbit-px', `${(x * 9).toFixed(2)}px`);
      zkOrbit.style.setProperty('--orbit-py', `${(y * 7).toFixed(2)}px`);
      zkOrbit.style.setProperty('--floor-y', `${(y * 2.5).toFixed(2)}px`);
      zkOrbit.style.setProperty('--star-x', `${(x * -7).toFixed(2)}px`);
      zkOrbit.style.setProperty('--star-y', `${(y * -5).toFixed(2)}px`);
      pointerFrame = 0;
    });
  }, { passive: true });

  zkOrbit.addEventListener('pointerleave', () => {
    for (const property of ['--orbit-px', '--orbit-py', '--floor-y', '--star-x', '--star-y']) {
      zkOrbit.style.setProperty(property, '0px');
    }
  });
  const orbitModels = {
    1: { radiusX: 432, radiusY: 152, tilt: -8, speed: 0.0031 },
    2: { radiusX: 304, radiusY: 238, tilt: 14, speed: -0.0023 },
    3: { radiusX: 236, radiusY: 218, tilt: -24, speed: 0.0037 }
  };

  const paintOrbit = (elapsed) => {
    orbitNodes.forEach((node, index) => {
      const orbit = orbitModels[node.dataset.orbit];
      const angle = Number(node.dataset.angle) + elapsed * orbit.speed;
      const point = samplePerspectiveOrbit(orbit, angle);
      const bendDirection = (index + Number(node.dataset.orbit)) % 2 ? 1 : -1;

      node.style.setProperty('--x', `${(point.x / 10).toFixed(3)}%`);
      node.style.setProperty('--y', `${(point.y / 5.56).toFixed(3)}%`);
      node.style.setProperty('--depth-scale', point.scale.toFixed(3));
      node.style.setProperty('--depth-opacity', point.opacity.toFixed(3));
      node.style.setProperty('--depth-blur', `${point.blur.toFixed(2)}px`);
      node.style.zIndex = String(3 + Math.round(point.depth * 4));

      const link = orbitLinks[index];
      if (link) {
        link.setAttribute('d', buildCurvedWire({ x: 500, y: 278 }, point, bendDirection));
        link.style.setProperty('--wire-opacity', (.08 + point.depth * .2).toFixed(3));
        link.style.setProperty('--wire-width', (.52 + point.depth * .36).toFixed(2));
      }
    });
  };

  let orbitFrame = 0;
  let orbitElapsed = 0;
  let previousFrame = 0;
  const runOrbit = (now) => {
    if (previousFrame) orbitElapsed += Math.min(now - previousFrame, 64);
    previousFrame = now;
    paintOrbit(orbitElapsed);
    orbitFrame = requestAnimationFrame(runOrbit);
  };

  const startOrbit = () => {
    if (prefersReducedMotion || orbitFrame) return;
    previousFrame = 0;
    orbitFrame = requestAnimationFrame(runOrbit);
  };

  const stopOrbit = () => {
    if (orbitFrame) cancelAnimationFrame(orbitFrame);
    orbitFrame = 0;
  };

  paintOrbit(0);
  if (prefersReducedMotion) {
    zkOrbit.classList.add('is-active');
  } else {
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        zkOrbit.classList.add('is-active');
        startOrbit();
      }, 200);
    });
  }

  document.addEventListener('visibilitychange', () => {
    zkOrbit.classList.toggle('is-paused', document.hidden);
    if (document.hidden) stopOrbit();
    else startOrbit();
  });
}

const hero = document.querySelector('.hero');
const heroCursorStage = document.querySelector('[data-hero-cursor]');
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const lazyVideos = document.querySelectorAll('[data-lazy-video]');
if (lazyVideos.length) {
  const loadAndPlay = (video) => {
    const source = video.querySelector('source[data-src]');
    if (source) {
      source.src = source.dataset.src;
      delete source.dataset.src;
      video.load();
    }
    video.play().catch(() => {});
  };

  if (!('IntersectionObserver' in window)) {
    lazyVideos.forEach(loadAndPlay);
  } else {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadAndPlay(entry.target);
          videoObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    lazyVideos.forEach((video) => videoObserver.observe(video));
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    lazyVideos.forEach((video) => {
      if (!video.querySelector('source[data-src]')) video.play().catch(() => {});
    });
  });
}

if (hero && heroCursorStage && hasFinePointer && !prefersReducedMotion) {
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  const paintCursorReveal = () => {
    frame = 0;
    const rect = heroCursorStage.getBoundingClientRect();
    heroCursorStage.style.setProperty('--hero-mask-x', `${pointerX - rect.left}px`);
    heroCursorStage.style.setProperty('--hero-mask-y', `${pointerY - rect.top}px`);
  };

  hero.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    heroCursorStage.dataset.active = 'true';
    if (!frame) frame = requestAnimationFrame(paintCursorReveal);
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    heroCursorStage.dataset.active = 'false';
  });
}

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  reveals.forEach((element) => observer.observe(element));
}

const cardStack = document.querySelector('[data-card-stack]');

if (cardStack) {
  const stackCards = Array.from(cardStack.querySelectorAll('.stack-card'));
  const HOLD_MS = 2000;
  const TRANS_MS = 950;
  let stackIdx = 0;

  const startCardStack = () => {
    if (!stackCards.length) return;
    stackCards[0].classList.add('is-active');
    if (prefersReducedMotion || stackCards.length < 2) return;
    setInterval(() => {
      const current = stackCards[stackIdx];
      current.classList.remove('is-active');
      current.classList.add('is-exit');
      stackIdx = (stackIdx + 1) % stackCards.length;
      stackCards[stackIdx].classList.add('is-active');
      setTimeout(() => current.classList.remove('is-exit'), TRANS_MS);
    }, HOLD_MS + TRANS_MS);
  };

  if (!('IntersectionObserver' in window)) {
    startCardStack();
  } else {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCardStack();
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });

    cardObserver.observe(cardStack);
  }
}

(function () {
  var cards = document.querySelectorAll('.ai-card');
  if (!cards.length || prefersReducedMotion) return;
  cards.forEach(function (card) {
    var rect = null;
    card.addEventListener('pointerenter', function () {
      rect = card.getBoundingClientRect();
      card.classList.add('tilting');
    });
    card.addEventListener('pointermove', function (e) {
      if (!rect) rect = card.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width;
      var py = (e.clientY - rect.top) / rect.height;
      card.style.setProperty('--rx', ((px - 0.5) * 14) + 'deg');
      card.style.setProperty('--ry', ((0.5 - py) * 10) + 'deg');
      card.style.setProperty('--mx', (px * 100) + '%');
      card.style.setProperty('--my', (py * 100) + '%');
    });
    card.addEventListener('pointerleave', function () {
      card.classList.remove('tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      rect = null;
    });
  });
})();

(function () {
  var hero = document.querySelector('.hero');
  var heroCta = document.querySelector('.hero-cta');
  var heroProduct = document.querySelector('.hero-product');
  var touchTomorrow = document.querySelector('.touch-tomorrow');
  if (!hero || !heroProduct || !touchTomorrow) return;
  var GAP = 40;
  var CTA_GAP = 32;
  function syncGap() {
    heroProduct.style.top = '';
    touchTomorrow.style.marginTop = '0px';
    var heroRect = hero.getBoundingClientRect();
    if (heroCta) {
      var ctaBottomRel = heroCta.getBoundingClientRect().bottom - heroRect.top;
      heroProduct.style.top = (ctaBottomRel + CTA_GAP) + 'px';
    }
    var productBottom = heroProduct.getBoundingClientRect().bottom;
    var overflow = productBottom - heroRect.bottom;
    touchTomorrow.style.marginTop = (overflow > 0 ? overflow + GAP : GAP) + 'px';
  }
  syncGap();
  window.addEventListener('resize', syncGap);
  window.addEventListener('load', syncGap);
})();
