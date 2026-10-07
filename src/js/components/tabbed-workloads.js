// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Tabbed Workload Specifications Controller
// ══════════════════════════════════════════════════════════════════════════

export function initTabbedWorkloads() {
  const tabButtons = document.querySelectorAll('[data-workload-tab]');
  const panels = document.querySelectorAll('[data-workload-panel]');

  if (!tabButtons.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-workload-tab');

      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach((p) => {
        if (p.getAttribute('data-workload-panel') === targetId) {
          p.style.display = 'block';
          p.classList.add('active');
        } else {
          p.style.display = 'none';
          p.classList.remove('active');
        }
      });
    });
  });
}
