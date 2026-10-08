// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Split-Panel Interactive Mega Dropdown Handler
// ══════════════════════════════════════════════════════════════════════════

export function initSplitDropdowns() {
  const dropdowns = document.querySelectorAll('.mega-dropdown-split');
  if (!dropdowns.length) return;

  dropdowns.forEach((dropdown) => {
    const sidebarItems = dropdown.querySelectorAll('.dropdown-cat-item');
    const panels = dropdown.querySelectorAll('.dropdown-cluster-panel');

    if (!sidebarItems.length || !panels.length) return;

    sidebarItems.forEach((item, index) => {
      function activate() {
        sidebarItems.forEach(i => i.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        item.classList.add('active');
        const targetId = item.getAttribute('data-target-cluster');
        let targetPanel = null;
        if (targetId) {
          targetPanel = dropdown.querySelector(`#${targetId}`);
        }
        if (!targetPanel && panels[index]) {
          targetPanel = panels[index];
        }
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      }

      item.addEventListener('mouseenter', activate);
      item.addEventListener('focus', activate);
      item.addEventListener('click', (e) => {
        // If it's a mobile touch, switch panel without following href immediately
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          activate();
        }
      });
    });
  });
}
