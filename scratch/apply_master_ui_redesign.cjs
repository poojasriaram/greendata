const fs = require('fs');

// 1. UPDATE src/styles/components.css to include the exact split-panel mega menu styles from the screenshot
let cssComponents = fs.readFileSync('src/styles/components.css', 'utf8');

const splitMenuCSS = `
/* ══════════════════════════════════════════════════════════════════════════
   EXACT SPLIT-PANEL MEGA MENU SYSTEM (TRUSTGRID / ISI BENCHMARK QUALITY)
   ══════════════════════════════════════════════════════════════════════════ */
.mega-dropdown-split {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: min(1080px, 96vw);
  background-color: #ffffff;
  border: 1px solid rgba(18, 59, 53, 0.14);
  border-radius: 18px;
  box-shadow: 0 28px 64px rgba(18, 59, 53, 0.18), 0 4px 16px rgba(0, 0, 0, 0.04);
  padding: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1), visibility 240ms;
  z-index: 500;
  overflow: hidden;
}

.nav-item:hover .mega-dropdown-split,
.nav-item:focus-within .mega-dropdown-split {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.dropdown-split-container {
  display: flex;
  min-height: 440px;
}

/* Sidebar */
.dropdown-sidebar {
  width: 295px;
  padding: 20px 14px;
  background-color: #f8faf9;
  border-right: 1px solid var(--c-border-light);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.dropdown-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px 14px;
  border-bottom: 1px solid var(--c-border-light);
  margin-bottom: 12px;
}

.dropdown-sidebar-header span {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--c-evergreen);
  text-transform: uppercase;
}

.dropdown-cat-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-cat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 180ms ease;
}

.dropdown-cat-item:hover,
.dropdown-cat-item.active {
  background-color: #ffffff;
  border-color: rgba(18, 59, 53, 0.12);
  box-shadow: 0 2px 8px rgba(18, 59, 53, 0.05);
}

.dropdown-cat-item.active {
  border-left: 3px solid var(--c-accent-mint);
}

.dropdown-cat-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  background-color: var(--c-evergreen);
  color: #ffffff;
  padding: 2px 7px;
  border-radius: 4px;
  flex-shrink: 0;
}

.dropdown-cat-item.active .dropdown-cat-badge {
  background-color: var(--c-accent-mint);
  color: var(--c-dark-green);
}

.dropdown-cat-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.dropdown-cat-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-evergreen);
  line-height: 1.25;
}

.dropdown-cat-sub {
  font-size: 11px;
  color: var(--c-muted-grey);
  line-height: 1.35;
  margin-top: 2px;
}

.dropdown-cat-chevron {
  color: var(--c-muted-grey);
  font-size: 12px;
  transition: transform 180ms ease;
}

.dropdown-cat-item.active .dropdown-cat-chevron {
  color: var(--c-evergreen);
  transform: translateX(3px);
}

/* Right Content Panel */
.dropdown-content-panel {
  flex: 1;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

.dropdown-cluster-panel {
  display: none;
  flex-direction: column;
  gap: 16px;
  animation: dropdownPanelFade 220ms ease;
}

.dropdown-cluster-panel.active {
  display: flex;
}

@keyframes dropdownPanelFade {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cluster-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-border-light);
}

.cluster-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cluster-title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--c-evergreen);
  line-height: 1.15;
}

.cluster-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.cluster-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 4px 0;
}

.cluster-card {
  background-color: #ffffff;
  border: 1px solid var(--c-border-light);
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  transition: all 180ms ease;
}

.cluster-card:hover {
  border-color: var(--c-evergreen);
  background-color: var(--c-warm-offwhite);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(18, 59, 53, 0.08);
}

.cluster-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(107, 199, 167, 0.15);
  color: var(--c-evergreen);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cluster-card-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-evergreen);
  line-height: 1.25;
}

.cluster-card-desc {
  font-size: 11.5px;
  color: var(--c-muted-grey);
  line-height: 1.4;
}

.cluster-footer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid var(--c-border-light);
  margin-top: auto;
}

.cluster-footer-text {
  font-size: 12.5px;
  color: var(--c-muted-grey);
  display: flex;
  align-items: center;
  gap: 6px;
}

.cluster-footer-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
`;

if (!cssComponents.includes('.mega-dropdown-split')) {
  cssComponents += '\n' + splitMenuCSS;
  fs.writeFileSync('src/styles/components.css', cssComponents, 'utf8');
}

// 2. UPDATE src/styles/sections.css to include Hero Carousel Slider CSS
let cssSections = fs.readFileSync('src/styles/sections.css', 'utf8');

const heroSliderCSS = `
/* ══════════════════════════════════════════════════════════════════════════
   HERO CAROUSEL SLIDER (7 SLIDES · 5-SECOND AUTO-ROTATE · ISI BENCHMARK)
   ══════════════════════════════════════════════════════════════════════════ */
.hero-slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 85% 20%, rgba(107, 199, 167, 0.12) 0%, transparent 50%),
              linear-gradient(180deg, var(--c-warm-offwhite) 0%, rgba(221, 235, 228, 0.45) 100%);
  border-bottom: 1px solid var(--c-border-light);
}

.hero-slider {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(0.99);
  pointer-events: none;
  display: flex;
  align-items: center;
  padding: clamp(2.5rem, 5vw, 4rem) 0;
}

.hero-slide.active {
  position: relative;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  pointer-events: auto;
}

.hero-slide-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
  width: 100%;
}

.hero-slide-content {
  position: relative;
  z-index: 2;
}

.hero-slide-visual {
  position: relative;
  height: 460px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(18, 59, 53, 0.15);
  box-shadow: var(--shadow-xl);
}

.hero-slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-slide.active .hero-slide-img {
  transform: scale(1.05);
}

.hero-slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(7, 29, 26, 0.85) 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px 24px;
  color: #ffffff;
}

.hero-slide-overlay-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--c-accent-mint);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Slider Controls & Indicators */
.hero-slider-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 24px;
  border-top: 1px solid rgba(18, 59, 53, 0.1);
  margin-top: var(--space-4);
}

.hero-slider-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-counter {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--c-evergreen);
}

.hero-counter-current {
  color: var(--c-evergreen);
  font-size: 15px;
}

.hero-counter-sep {
  color: var(--c-muted-grey);
  margin: 0 2px;
}

.hero-counter-total {
  color: var(--c-muted-grey);
}

.hero-slider-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-dot {
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(18, 59, 53, 0.2);
  border: none;
  cursor: pointer;
  transition: all 240ms ease;
  padding: 0;
}

.hero-dot.active {
  width: 48px;
  background-color: var(--c-evergreen);
}

.hero-slider-arrows {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-arrow-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--c-border-medium);
  background-color: #ffffff;
  color: var(--c-evergreen);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 180ms ease;
}

.hero-arrow-btn:hover {
  background-color: var(--c-evergreen);
  color: #ffffff;
  border-color: var(--c-evergreen);
  transform: translateY(-1px);
}
`;

if (!cssSections.includes('.hero-slider-wrapper')) {
  cssSections += '\n' + heroSliderCSS;
  fs.writeFileSync('src/styles/sections.css', cssSections, 'utf8');
}

console.log('Successfully updated CSS files with split-panel mega menu and hero carousel styles!');
