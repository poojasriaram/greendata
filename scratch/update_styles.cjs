const fs = require('fs');
const path = require('path');

// 1. Update src/styles/components.css for mega dropdown alignment fix
let componentsCss = fs.readFileSync('src/styles/components.css', 'utf8');

// Replace mega-dropdown-split definition
const megaDropdownRegex = /\.mega-dropdown-split\s*\{[\s\S]*?z-index:\s*1000;\s*overflow:\s*hidden;\s*\}/;
const newMegaDropdownCss = `.nav-item.has-mega-split,
.nav-item:has(.mega-dropdown-split) {
  position: static !important;
}

.header-nav {
  position: relative !important;
}

.mega-dropdown-split {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: min(1140px, calc(100% - 24px));
  max-width: 1140px;
  background-color: #ffffff;
  border: 1px solid rgba(18, 59, 53, 0.14);
  border-radius: 18px;
  box-shadow: 0 28px 64px rgba(18, 59, 53, 0.22), 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 220ms cubic-bezier(0.16, 1, 0.3, 1), transform 220ms cubic-bezier(0.16, 1, 0.3, 1), visibility 220ms;
  z-index: 1000;
  overflow: hidden;
}`;

if (megaDropdownRegex.test(componentsCss)) {
  componentsCss = componentsCss.replace(megaDropdownRegex, newMegaDropdownCss);
  fs.writeFileSync('src/styles/components.css', componentsCss, 'utf8');
  console.log('Updated mega dropdown CSS in components.css');
}

// 2. Update src/styles/sections.css for Hero Slide Grid, increased typography, and right-side showcase cards
let sectionsCss = fs.readFileSync('src/styles/sections.css', 'utf8');
const heroSlideBodyRegex = /\.hero-slide-body\s*\{[\s\S]*?max-width:\s*860px;\s*\}/;
const newHeroSlideGridCss = `.hero-slide-grid {
  display: grid;
  grid-template-columns: 1.18fr 0.82fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  width: 100%;
}

.hero-slide-body {
  max-width: 780px;
}

.hero-slide-card {
  background: rgba(11, 41, 37, 0.82);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(107, 199, 167, 0.35);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 2vw, 1.75rem);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  position: relative;
  overflow: hidden;
}

.hero-card-img-wrap {
  position: relative;
  height: 200px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(107, 199, 167, 0.25);
}

.hero-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-slide:hover .hero-card-img-wrap img {
  transform: scale(1.05);
}

.hero-card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(7, 29, 26, 0.88);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(107, 199, 167, 0.4);
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--c-accent-mint);
  font-weight: 600;
}

.hero-card-specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.hero-card-spec-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 10px 12px;
}

.hero-card-spec-val {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  display: block;
}

.hero-card-spec-lbl {
  font-size: 11px;
  color: #A3BFB3;
  margin-top: 2px;
  display: block;
}

@media (max-width: 991px) {
  .hero-slide-grid {
    grid-template-columns: 1fr;
  }
  .hero-slide-card {
    display: none;
  }
}`;

if (heroSlideBodyRegex.test(sectionsCss)) {
  sectionsCss = sectionsCss.replace(heroSlideBodyRegex, newHeroSlideGridCss);
}

// Increase hero title font size
sectionsCss = sectionsCss.replace(
  /font-size:\s*clamp\(2\.75rem,\s*5vw,\s*4\.4rem\);/,
  'font-size: clamp(3rem, 5.5vw, 4.8rem);'
);
sectionsCss = sectionsCss.replace(
  /font-size:\s*clamp\(1\.05rem,\s*1\.3vw,\s*1\.22rem\);/,
  'font-size: clamp(1.15rem, 1.4vw, 1.32rem);'
);

fs.writeFileSync('src/styles/sections.css', sectionsCss, 'utf8');
console.log('Updated hero slider styles in sections.css');
