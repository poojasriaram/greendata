const fs = require('fs');

// 1. Update src/styles/sections.css
let sectionsCss = fs.readFileSync('src/styles/sections.css', 'utf8');

// Replace hero-slide layout and controls
const heroSlideSectionRegex = /\/\* ═+\s*FULL-WIDTH BACKGROUND HERO CAROUSEL SLIDER[\s\S]*?(?=\/\* ───────────────────────── 2\. SCALE STRIP|$)/;

const newHeroCss = `/* ══════════════════════════════════════════════════════════════════════════
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
  min-height: 620px;
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
  padding: clamp(5rem, 8vw, 7.5rem) 0 clamp(4.5rem, 7vw, 6.5rem);
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
  background: linear-gradient(90deg, rgba(7, 29, 26, 0.92) 0%, rgba(11, 41, 37, 0.82) 45%, rgba(7, 29, 26, 0.65) 100%),
              linear-gradient(180deg, rgba(7, 29, 26, 0.3) 0%, rgba(7, 29, 26, 0.8) 100%);
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
  background: rgba(107, 199, 167, 0.15);
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
  font-size: clamp(3rem, 5.2vw, 4.6rem);
  line-height: 1.1;
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
  font-size: clamp(1.12rem, 1.35vw, 1.28rem);
  line-height: 1.68;
  margin-bottom: var(--space-6);
  max-width: 880px;
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

/* Minimalist Dot Indicators (ISI Benchmark Quality) */
.hero-slider-controls {
  position: absolute;
  bottom: 22px;
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
  background: rgba(7, 29, 26, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(107, 199, 167, 0.25);
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
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.15);
}

.hero-dot.active {
  width: 22px;
  border-radius: 10px;
  background-color: var(--c-accent-mint);
  border-color: var(--c-accent-mint);
  box-shadow: 0 0 10px rgba(107, 199, 167, 0.6);
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

if (heroSlideSectionRegex.test(sectionsCss)) {
  sectionsCss = sectionsCss.replace(heroSlideSectionRegex, newHeroCss.trim() + '\n\n');
  fs.writeFileSync('src/styles/sections.css', sectionsCss, 'utf8');
  console.log('Updated hero slider styles in sections.css');
}

// 2. Define Clean Full-Width Hero HTML (No right-side cards, extended text width, clean dot indicators)
const cleanHeroSectionHtml = `
    <section class="hero-slider-wrapper" id="hero" aria-label="GreenNext Institutional Infrastructure Showcase">
      <div class="hero-slider" tabindex="0" aria-roledescription="carousel" aria-label="GreenNext Infrastructure Pillars">
        
        <!-- Slide 1: Primary Overview -->
        <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop');" role="group" aria-roledescription="slide" aria-label="1 of 7: Institutional Real Estate & Digital Infrastructure">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Commercial Infrastructure &amp; Institutional Real Estate · South India</span>
              </div>
              <h1 class="hero-title">
                Building South India's Next-Generation <em>Digital &amp; Commercial Infrastructure</em>.
              </h1>
              <p class="hero-lede">
                GreenNext curates, master-plans, and co-develops landmark commercial and technological infrastructure across <strong>Coimbatore, Madurai, Hosur, Trichy, Tirunelveli &amp; Pondicherry</strong> — focusing exclusively on Grade-A IT Parks, Knowledge Cities, Hyperscale Data Centers, Convention Centers, Corporate Hospitality, and Precision High-Tech Engineering Complexes.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure">
                  <span>Explore Asset Classes</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/locations">
                  <span>Explore Strategic Grid</span>
                </a>
                <a class="btn btn-quiet" href="/contact" style="color: var(--c-accent-mint); margin-left: 8px;">
                  Request Institutional Dossier (PDF) →
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Ref: DC-ITP-TN/JV/2026/001 · Institutional JV, SPV &amp; Co-Development · 390+ Verified Acres</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2: IT & Knowledge Infrastructure -->
        <div class="hero-slide" style="background-image: url('/images/it_park_knowledge_city_1791444121901.jpg');" role="group" aria-roledescription="slide" aria-label="2 of 7: Grade-A IT Parks & Knowledge Cities">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Pillar 01 · IT &amp; Knowledge Infrastructure</span>
              </div>
              <h2 class="hero-title">
                Grade-A Technology Parks &amp; <em>Innovation Districts</em>.
              </h2>
              <p class="hero-lede">
                LEED Platinum multi-tenant office towers, corporate headquarters, and university-linked research cities designed for Fortune 500 Global Capability Centers (GCCs) and deep-tech enterprises with 4.2m ceiling heights, smart building management, and single-window statutory sanctions.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure#cluster-it">
                  <span>Inspect IT Parks</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/locations#hub-cbe">
                  <span>View Coimbatore Campus</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Anchor Hubs: Coimbatore (Avinashi Rd) · Madurai (ELCOT SEZ) · Trichy (Knowledge City)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3: Hyperscale & AI Data Centers -->
        <div class="hero-slide" style="background-image: url('/images/hyperscale_data_center_1791444139983.jpg');" role="group" aria-roledescription="slide" aria-label="3 of 7: 100+ MW Hyperscale Data Centers">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Pillar 02 · Hyperscale &amp; AI Compute</span>
              </div>
              <h2 class="hero-title">
                100+ MW Hyperscale &amp; <em>AI GPU Data Centers</em>.
              </h2>
              <p class="hero-lede">
                High-density liquid-cooled computing campuses equipped with dedicated 230kV/110kV substations, dual-grid feeder lines, direct green wind/solar energy wheeling, PUE ≤ 1.25 efficiency, and sub-4ms fiber interconnects to subsea cable landing stations.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure#cluster-dc">
                  <span>Explore Data Centers</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/locations#hub-tirunelveli">
                  <span>View Tirunelveli 100+ MW Hub</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Target Verticals: Global Hyperscalers · AI Clusters · Sovereign Cloud · Colocation SPVs</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 4: Convention & Event Spaces -->
        <div class="hero-slide" style="background-image: url('/images/convention_center_1791444158406.jpg');" role="group" aria-roledescription="slide" aria-label="4 of 7: International Convention Centers">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Pillar 03 · International Convention Spaces</span>
              </div>
              <h2 class="hero-title">
                10,000+ Capacity <em>Convention &amp; Event Venues</em>.
              </h2>
              <p class="hero-lede">
                Pillarless grand plenary halls, multi-hall exhibition pavilions, and acoustically tuned corporate auditoriums designed to host global tech summits, industrial expos, state assemblies, and global shareholder conferences.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure#cluster-convention">
                  <span>Inspect Convention Specs</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/contact">
                  <span>Host Your Summit</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Highlights: Column-free spans · 4K Broadcast Suites · 3,500+ Vehicle MLCP · Wi-Fi 7 Hub</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 5: Corporate Hospitality -->
        <div class="hero-slide" style="background-image: url('/images/business_hotel_hospitality_1791444176465.jpg');" role="group" aria-roledescription="slide" aria-label="5 of 7: 5-Star Corporate Hospitality">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Pillar 04 · Corporate Hospitality (Non-Residential)</span>
              </div>
              <h2 class="hero-title">
                5-Star Business Hotels &amp; <em>Executive Suites</em>.
              </h2>
              <p class="hero-lede">
                Integrated hospitality assets including 200+ key luxury hotels, serviced corporate residences for visiting tech leadership, boardroom suites with encrypted telepresence, fine dining banquets, and executive wellness facilities.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure#cluster-hotel">
                  <span>Inspect Hospitality Assets</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/contact">
                  <span>Operator JV Inquiries</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Zoning: 100% Non-Residential Commercial · Managed by Global Hotel Operators</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 6: Precision High-Tech Manufacturing -->
        <div class="hero-slide" style="background-image: url('/images/precision_engineering_park_1791444195155.jpg');" role="group" aria-roledescription="slide" aria-label="6 of 7: Precision Industrial & Defense Parks">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Pillar 05 · Precision Engineering &amp; High-Tech Manufacturing</span>
              </div>
              <h2 class="hero-title">
                High-Load Precision Parks for <em>Drone, EV &amp; Aerospace</em>.
              </h2>
              <p class="hero-lede">
                Heavy-load industrial campuses engineered for Drone gigafactories, SpaceTech propulsion, EV battery powertrains, robotics, and defense electronics with 2,500+ kg/m² floor loading, Cleanroom Class 1000/10000, and Zero Liquid Discharge (ZLD).
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/infrastructure#cluster-mfg">
                  <span>Inspect Industrial Parks</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/locations#hub-hosur">
                  <span>Explore Hosur Corridor</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Location: Tamil Nadu Defense Industrial Corridor · Ready for Advanced Robotics &amp; CNC</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 7: Strategic Land Bank & JV Co-Development -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop');" role="group" aria-roledescription="slide" aria-label="7 of 7: Strategic Land Bank & Co-Development">
          <div class="container">
            <div class="hero-slide-body">
              <div class="hero-badge">
                <span class="dot"></span>
                <span>Institutional Co-Development &amp; JV Platform</span>
              </div>
              <h2 class="hero-title">
                390+ Verified Acres. <em>Transparent SPV Frameworks</em>.
              </h2>
              <p class="hero-lede">
                GreenNext provides institutional investors, global sovereign funds, and Fortune 500 enterprises with pre-cleared, litigation-free land parcels, single-window state statutory sanctions, and turnkey built-to-suit co-development across South India.
              </p>
              <div class="hero-actions">
                <a class="btn btn-accent btn-lg btn-arrow" href="/partnership">
                  <span>Explore JV Framework</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <a class="btn btn-dark-secondary btn-lg" href="/contact">
                  <span>Schedule Executive Meeting</span>
                </a>
              </div>
              <div class="hero-meta-strip">
                <span>Structured Equity · Built-to-Suit · Long-Term Land Leases · Turnkey EPC</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Minimalist Slider Controls with Small Dots (ISI Benchmark Quality) -->
      <div class="hero-slider-controls">
        <div class="hero-slider-controls-inner">
          <button class="hero-arrow-btn hero-slide-prev" type="button" aria-label="Previous Slide">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="hero-slider-dots" role="tablist" aria-label="Hero Slide Selector">
            <button class="hero-dot active" type="button" role="tab" aria-selected="true" aria-label="Slide 1" data-slide-index="0"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 2" data-slide-index="1"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 3" data-slide-index="2"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 4" data-slide-index="3"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 5" data-slide-index="4"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 6" data-slide-index="5"></button>
            <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 7" data-slide-index="6"></button>
          </div>
          <button class="hero-arrow-btn hero-slide-next" type="button" aria-label="Next Slide">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
`;

// 3. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const heroStart = indexHtml.indexOf('<section class="hero-slider-wrapper"');
const heroEnd = indexHtml.indexOf('</section>', indexHtml.indexOf('<div class="hero-slider-controls">', heroStart)) + 10;
if (heroStart !== -1 && heroEnd !== -1) {
  indexHtml = indexHtml.substring(0, heroStart) + cleanHeroSectionHtml.trim() + indexHtml.substring(heroEnd);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Updated index.html with clean full-width hero and dots');
}

// 4. Update views/index.ejs
let indexEjs = fs.readFileSync('views/index.ejs', 'utf8');
const ejsHeroStart = indexEjs.indexOf('<section class="hero-slider-wrapper"');
const ejsHeroEnd = indexEjs.indexOf('</section>', indexEjs.indexOf('<div class="hero-slider-controls">', ejsHeroStart)) + 10;
if (ejsHeroStart !== -1 && ejsHeroEnd !== -1) {
  indexEjs = indexEjs.substring(0, ejsHeroStart) + cleanHeroSectionHtml.trim() + indexEjs.substring(ejsHeroEnd);
  fs.writeFileSync('views/index.ejs', indexEjs, 'utf8');
  console.log('Updated views/index.ejs with clean full-width hero and dots');
}
