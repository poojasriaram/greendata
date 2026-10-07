// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Enterprise Main Application Entry
// ══════════════════════════════════════════════════════════════════════════

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections.css';
import '../styles/responsive.css';

import { initHeroCanvas } from './components/hero-canvas.js';
import { initEcosystemCanvas } from './components/ecosystem-canvas.js';
import { initPortfolioFilter } from './components/portfolio-filter.js';
import { initStatsCounter } from './components/stats-counter.js';
import { initModalSystem } from './components/modal-system.js';
import { initEOIWizard } from './components/eoi-wizard.js';
import { initSiteMatcher } from './components/site-matcher.js';
import { initTabbedWorkloads } from './components/tabbed-workloads.js';
import { initFAQAccordion } from './components/faq-accordion.js';
import { initCampusHotspots } from './components/campus-hotspots.js';

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Topbar Scroll State
  const topbar = document.getElementById('mainHeader');
  function onScroll() {
    if (topbar) {
      topbar.classList.toggle('scrolled', window.scrollY > 12);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      mobileDrawer.classList.toggle('active', !isOpen);
      mobileToggle.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      mobileToggle.setAttribute('aria-label', !isOpen ? 'Close menu' : 'Open menu');
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Initialize Canvas Visualizers
  initHeroCanvas();
  initEcosystemCanvas();

  // Initialize Interactive Filtering, Counters, Modals & EOI Wizard
  initPortfolioFilter();
  initStatsCounter();
  initModalSystem();
  initEOIWizard();

  // Initialize Enterprise Enhancements (isisecurity.in Benchmark Quality)
  initSiteMatcher();
  initTabbedWorkloads();
  initFAQAccordion();
  initCampusHotspots();

  // Scrollspy for Main Nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-spy]');

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.setAttribute('aria-current', 'location');
              link.style.color = 'var(--c-evergreen)';
            } else {
              link.removeAttribute('aria-current');
              link.style.color = '';
            }
          });
        }
      });
    }, { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 });

    sections.forEach((sec) => observer.observe(sec));
  }

  console.log('GreenNext Technologies Enterprise Platform Initialized.');
});

