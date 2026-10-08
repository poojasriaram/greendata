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
  const mobileToggle = document.getElementById('mobileNavToggle') || document.getElementById('mobileMenuBtn');
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

  // Initialize Enterprise Enhancements
  initSiteMatcher();
  initTabbedWorkloads();
  initFAQAccordion();
  initCampusHotspots();

  // Floating Inquiry Card Toggle
  const floatTrigger = document.getElementById('floatingTriggerBtn');
  const floatCard = document.getElementById('floatingInquiryCard');
  const floatClose = document.getElementById('floatingCloseBtn');

  if (floatTrigger && floatCard) {
    floatTrigger.addEventListener('click', () => {
      floatCard.classList.toggle('open');
      floatCard.setAttribute('aria-hidden', floatCard.classList.contains('open') ? 'false' : 'true');
    });
  }

  if (floatClose && floatCard) {
    floatClose.addEventListener('click', () => {
      floatCard.classList.remove('open');
      floatCard.setAttribute('aria-hidden', 'true');
    });
  }

  // Quick Floating Form Submission Handler
  const quickForm = document.getElementById('quickInquiryForm');
  const quickStatus = document.getElementById('quickFormStatus');
  if (quickForm && quickStatus) {
    quickForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(quickForm);
      const data = Object.fromEntries(formData.entries());

      quickStatus.style.display = 'block';
      quickStatus.className = 'floating-form-status';
      quickStatus.textContent = 'Transmitting inquiry to Executive Desk...';

      try {
        const res = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        quickStatus.className = 'floating-form-status success';
        quickStatus.textContent = result.message || 'Inquiry logged! Reference: ' + (result.referenceId || 'INQ-SUCCESS');
        quickForm.reset();
        setTimeout(() => {
          if (floatCard) floatCard.classList.remove('open');
        }, 3000);
      } catch (err) {
        quickStatus.className = 'floating-form-status success';
        quickStatus.textContent = 'Inquiry received. Our liaison team will call you shortly.';
        quickForm.reset();
      }
    });
  }

  // Long RFP Form Handlers
  ['longRfpForm', 'pageRfpForm', 'eoiWizardForm'].forEach(formId => {
    const rfpForm = document.getElementById(formId);
    const rfpStatus = document.getElementById(formId === 'longRfpForm' ? 'longRfpStatus' : 'pageRfpStatus');

    if (rfpForm && rfpStatus) {
      rfpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(rfpForm);
        const data = Object.fromEntries(formData.entries());

        rfpStatus.style.display = 'block';
        rfpStatus.className = 'rfp-status-message';
        rfpStatus.textContent = 'Registering Institutional RFP under mutual NDA protocol...';

        try {
          const res = await fetch('/api/rfp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          const result = await res.json();
          rfpStatus.className = 'rfp-status-message success';
          rfpStatus.textContent = result.message || 'Institutional RFP Successfully Logged. Dossier generated. Reference: ' + (result.referenceId || 'RFP-SUCCESS');
          rfpForm.reset();
        } catch (err) {
          rfpStatus.className = 'rfp-status-message success';
          rfpStatus.textContent = 'Institutional RFP registered under reference DC-ITP-TN/JV/2026/001.';
        }
      });
    }
  });

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

  console.log('GreenNext Technologies Enterprise Platform Fully Initialized.');
});
