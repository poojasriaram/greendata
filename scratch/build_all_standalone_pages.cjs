const fs = require('fs');

// 1. UPDATE src/styles/sections.css for full-width background hero carousel
let cssSections = fs.readFileSync('src/styles/sections.css', 'utf8');

const fullWidthHeroCSS = `
/* ══════════════════════════════════════════════════════════════════════════
   FULL-WIDTH BACKGROUND HERO CAROUSEL SLIDER (ISI SECURITY BENCHMARK)
   ══════════════════════════════════════════════════════════════════════════ */
.hero-slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--c-dark-green);
  border-bottom: 1px solid var(--c-dark-border);
}

.hero-slider {
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: center;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1.02);
  pointer-events: none;
  display: flex;
  align-items: center;
  padding: clamp(4rem, 7vw, 6rem) 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-slide.active {
  position: relative;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  pointer-events: auto;
}

.hero-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 29, 26, 0.94) 0%, rgba(11, 41, 37, 0.88) 50%, rgba(7, 29, 26, 0.72) 100%),
              linear-gradient(180deg, rgba(7, 29, 26, 0.4) 0%, rgba(7, 29, 26, 0.85) 100%);
  z-index: 1;
}

.hero-slide .container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-slide-body {
  max-width: 860px;
}

.hero-slide .hero-badge {
  background: rgba(107, 199, 167, 0.14);
  border: 1px solid rgba(107, 199, 167, 0.35);
  color: var(--c-accent-mint);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: var(--space-4);
}

.hero-slide .hero-title {
  color: #ffffff;
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 5vw, 4.4rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin-bottom: var(--space-4);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
}

.hero-slide .hero-title em {
  color: var(--c-accent-mint);
  font-style: italic;
}

.hero-slide .hero-lede {
  color: #DDEBE4;
  font-size: clamp(1.05rem, 1.3vw, 1.22rem);
  line-height: 1.65;
  margin-bottom: var(--space-6);
  max-width: 740px;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
}

.hero-slide .hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-bottom: var(--space-4);
}

.hero-slide .hero-meta-strip {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--c-accent-mint);
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Slider Controls & Indicators */
.hero-slider-controls {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 24px;
  border-top: 1px solid rgba(221, 235, 228, 0.15);
  background-color: var(--c-dark-green);
}

.hero-slider-pagination {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hero-counter {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--c-dark-text-primary);
}

.hero-counter-current {
  color: var(--c-accent-mint);
  font-size: 16px;
}

.hero-counter-sep {
  color: var(--c-dark-text-muted);
  margin: 0 2px;
}

.hero-counter-total {
  color: var(--c-dark-text-muted);
}

.hero-slider-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-dot {
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(221, 235, 228, 0.25);
  border: none;
  cursor: pointer;
  transition: all 240ms ease;
  padding: 0;
}

.hero-dot.active {
  width: 54px;
  background-color: var(--c-accent-mint);
}

.hero-slider-arrows {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-arrow-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--c-dark-border);
  background-color: rgba(16, 51, 46, 0.85);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 180ms ease;
}

.hero-arrow-btn:hover {
  background-color: var(--c-accent-mint);
  color: var(--c-dark-green);
  border-color: var(--c-accent-mint);
  transform: translateY(-1px);
}
`;

// Replace previous hero slider CSS in sections.css
const oldSliderStart = cssSections.indexOf('/* ══════════════════════════════════════════════════════════════════════════\n   HERO CAROUSEL SLIDER');
if (oldSliderStart !== -1) {
  cssSections = cssSections.substring(0, oldSliderStart) + fullWidthHeroCSS;
} else {
  cssSections += '\n' + fullWidthHeroCSS;
}
fs.writeFileSync('src/styles/sections.css', cssSections, 'utf8');

console.log('Successfully updated sections.css with full-width background hero carousel!');
