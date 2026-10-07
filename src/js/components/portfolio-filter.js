// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Portfolio & Location Filter Controller
// ══════════════════════════════════════════════════════════════════════════

export function initPortfolioFilter() {
  const filterTabs = document.querySelectorAll('[data-portfolio-filter]');
  const portfolioCards = document.querySelectorAll('[data-location-cluster]');
  const ledgerRows = document.querySelectorAll('[data-ledger-cluster]');

  if (!filterTabs.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetCluster = tab.getAttribute('data-portfolio-filter');

      // Update active tab
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter Cards
      portfolioCards.forEach((card) => {
        const cardCluster = card.getAttribute('data-location-cluster');
        if (targetCluster === 'all' || cardCluster === targetCluster) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });

      // Filter Ledger rows if present
      ledgerRows.forEach((row) => {
        const rowCluster = row.getAttribute('data-ledger-cluster');
        if (targetCluster === 'all' || rowCluster === targetCluster) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}
