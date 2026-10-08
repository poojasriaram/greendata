const fs = require('fs');

let sectionsCss = fs.readFileSync('src/styles/sections.css', 'utf8');

const heroSectionRegex = /\/\* ═+\s*FULL-WIDTH BACKGROUND HERO CAROUSEL SLIDER[\s\S]*?(?=\/\* ───────────────────────── 2\. SCALE STRIP|$)/;

const newHeroCss = `/* ══════════════════════════════════════════════════════════════════════════
   FULL-WIDTH BACKGROUND HERO CAROUSEL SLIDER (100% Full Bleed, 50% Overlay)
   ══════════════════════════════════════════════════════════════════════════ */
.hero-slider-wrapper {
  position: relative;
  width: 100%;
  min-height: 640px;
  overflow: hidden;
  background-color: var(--c-dark-green);
  border-bottom: 1px solid var(--c-dark-border);
}

.hero-slider {
  position: relative;
  width: 100%;
  min-height: 640px;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 640px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1.02);
  pointer-events: none;
  display: flex;
  align-items: center;
  padding: clamp(5rem, 8vw, 7.5rem) 0 clamp(4.5rem, 7vw, 6.5rem);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 1;
}

.hero-slide.active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  pointer-events: auto;
  z-index: 2;
}

.hero-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(7, 29, 26, 0.88) 0%, rgba(7, 29, 26, 0.65) 50%, rgba(7, 29, 26, 0.35) 85%, rgba(7, 29, 26, 0.25) 100%),
              rgba(7, 29, 26, 0.35);
  z-index: 1;
}

.hero-slide .container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-slide-body {
  max-width: 980px;
}

.hero-slide .hero-badge {
  background: rgba(107, 199, 167, 0.2);
  border: 1px solid rgba(107, 199, 167, 0.4);
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
  backdrop-filter: blur(8px);
}

.hero-slide .hero-title {
  color: #ffffff;
  font-family: var(--font-display);
  font-size: clamp(3rem, 5.2vw, 4.6rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: var(--space-4);
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.65);
}

.hero-slide .hero-title em {
  color: var(--c-accent-mint);
  font-style: italic;
}

.hero-slide .hero-lede {
  color: #E6F3EC;
  font-size: clamp(1.12rem, 1.35vw, 1.28rem);
  line-height: 1.68;
  margin-bottom: var(--space-6);
  max-width: 880px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.55);
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
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
}

/* Minimalist Dot Indicators (ISI Benchmark Quality) */
.hero-slider-controls {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero-slider-controls-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  pointer-events: auto;
}

.hero-slider-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(7, 29, 26, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(107, 199, 167, 0.3);
}

.hero-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: all 220ms ease;
  padding: 0;
}

.hero-dot:hover {
  background-color: rgba(255, 255, 255, 0.85);
  transform: scale(1.15);
}

.hero-dot.active {
  width: 22px;
  border-radius: 10px;
  background-color: var(--c-accent-mint);
  border-color: var(--c-accent-mint);
  box-shadow: 0 0 10px rgba(107, 199, 167, 0.7);
}

.hero-arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(107, 199, 167, 0.3);
  background-color: rgba(7, 29, 26, 0.75);
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
}
`;

if (heroSectionRegex.test(sectionsCss)) {
  sectionsCss = sectionsCss.replace(heroSectionRegex, newHeroCss.trim() + '\n\n');
  fs.writeFileSync('src/styles/sections.css', sectionsCss, 'utf8');
  console.log('Fixed hero slider CSS in sections.css');
}
