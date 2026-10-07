// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Subtle Viewport Number Counter
// ══════════════════════════════════════════════════════════════════════════

export function initStatsCounter() {
  const statElements = document.querySelectorAll('[data-counter-target]');
  if (!statElements.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);

        if (prefersReduced) {
          el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          obs.unobserve(el);
          return;
        }

        const duration = 1200; // ms
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = target * easeOut;

          el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  statElements.forEach((el) => observer.observe(el));
}
