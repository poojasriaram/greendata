const fs = require('fs');

// Also update locations.html and views/locations.ejs with proper anchor IDs for each hub:
// #hub-cbe, #hub-hosur, #hub-madurai, #hub-tirunelveli, #hub-trichy, #hub-pondicherry
const locationsPageContent = `
    <!-- Locations Hero -->
    <section class="hero-section" style="padding: clamp(4rem, 6vw, 6rem) 0; background: linear-gradient(135deg, var(--c-dark-green) 0%, #071D1A 100%); color: #fff;">
      <div class="container">
        <div style="max-width: 860px;">
          <div class="hero-badge" style="background: rgba(107, 199, 167, 0.15); color: var(--c-accent-mint); border: 1px solid rgba(107, 199, 167, 0.3);">
            <span>390+ VERIFIED ACRES · 6 STRATEGIC HUBS</span>
          </div>
          <h1 style="font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 4.2rem); color: #fff; line-height: 1.1; margin-bottom: 20px;">
            South India <em>Infrastructure Grid</em>.
          </h1>
          <p style="color: #DDEBE4; font-size: clamp(1.1rem, 1.3vw, 1.25rem); line-height: 1.6; margin-bottom: 24px;">
            Contiguous, clear-title institutional land parcels across Tamil Nadu and Pondicherry with high-voltage substations, dark fiber loops, and multimodal transit corridors.
          </p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="#hub-cbe" class="btn btn-secondary btn-sm">Coimbatore (98+ AC)</a>
            <a href="#hub-hosur" class="btn btn-secondary btn-sm">Hosur (65 AC)</a>
            <a href="#hub-madurai" class="btn btn-secondary btn-sm">Madurai (93+ AC)</a>
            <a href="#hub-tirunelveli" class="btn btn-secondary btn-sm">Tirunelveli (40 AC)</a>
            <a href="#hub-trichy" class="btn btn-secondary btn-sm">Trichy (45 AC)</a>
            <a href="#hub-pondicherry" class="btn btn-secondary btn-sm">Pondicherry (35 AC)</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 1: Coimbatore -->
    <section class="section section-bordered" id="hub-cbe">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <span class="badge badge-mint" style="font-size:11px;">FLAGSHIP HUB · 98+ ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Coimbatore — Integrated Knowledge &amp; IT City</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              Positioned directly on Avinashi Road / NH-544 frontage. 98+ contiguous acres with a 110kV dedicated substation within 1.2 km, Grade-A IT towers, and single-window DTCP/CMDA master-plan clearances.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>110kV Substation (1.2 km)</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Dual-feed industrial power redundancy.</p>
              </div>
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>Avinashi Rd / NH-544</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">15 mins to Coimbatore International Airport.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Request Coimbatore Site Dossier →</a>
          </div>
          <div>
            <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Coimbatore Campus" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 2: Hosur -->
    <section class="section" id="hub-hosur" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:40px; align-items:center;">
          <div>
            <img src="/images/precision_engineering_park_1791444195155.jpg" alt="Hosur High Tech Park" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
          <div>
            <span class="badge badge-mint" style="font-size:11px;">BENGALURU BORDER · 65 ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Hosur — Precision High-Tech &amp; Data Center Gateway</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              Located 35 minutes from Electronic City, Bengaluru. High-load precision industrial and 80+ MW hyperscale compute parcel with direct 230kV substation power ingress and SIPCOT approvals.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>230kV Direct Ingress</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Heavy power overhead for AI data halls.</p>
              </div>
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>EV &amp; Drone Corridor</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Tamil Nadu Defense Corridor linkage.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Submit Hosur RFP →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 3: Madurai -->
    <section class="section section-bordered" id="hub-madurai">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <span class="badge badge-mint" style="font-size:11px;">ELCOT SEZ ADJACENT · 93+ ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Madurai — ELCOT SEZ &amp; TechMax Hub</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              93+ acres connecting the 4-lane Ring Road and ELCOT Vadapalanji IT Park. Ideal for Tier-1 technology GCCs looking for elite cost efficiency and deep engineering talent pools.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>110kV Dedicated Feed</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Industrial transmission grid stability.</p>
              </div>
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>Low Cost &amp; High Retention</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">35% lower operating expenses vs Tier-1 metros.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Request Madurai Specs →</a>
          </div>
          <div>
            <img src="/images/convention_center_1791444158406.jpg" alt="Madurai Campus" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 4: Tirunelveli -->
    <section class="section" id="hub-tirunelveli" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:40px; align-items:center;">
          <div>
            <img src="/images/hyperscale_data_center_1791444139983.jpg" alt="Tirunelveli Data Center" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
          <div>
            <span class="badge badge-mint" style="font-size:11px;">100+ MW GREEN ENERGY · 40 ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Tirunelveli — 100+ MW Renewable Data Center Park</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              40 acres with an active 230kV substation inside 800 meters. Direct access to the Muppandal wind energy corridor, offering India's lowest green power tariffs and subsea cable interconnects.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>230kV Substation (800m)</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">100+ MW high-voltage line ready.</p>
              </div>
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>Muppandal Wind PPA</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">100% renewable power wheeling.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Hyperscaler Technical Inquiries →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 5: Trichy -->
    <section class="section section-bordered" id="hub-trichy">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <span class="badge badge-mint" style="font-size:11px;">CENTRAL NODE · 45 ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Trichy — Knowledge City &amp; Central Node</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              45 acres at Tamil Nadu's central transit nexus. Adjacent to national premier institutions (NIT Trichy, IIM Trichy, BHEL) for high-end academic research collaborations and software incubation.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>NIT &amp; IIM Ecosystem</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Direct access to elite tier-1 researchers.</p>
              </div>
              <div style="background:#f8faf9; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>International Airport</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Direct Southeast Asia &amp; Gulf flight links.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Submit Trichy Inquiry →</a>
          </div>
          <div>
            <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Trichy Campus" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Hub 6: Pondicherry -->
    <section class="section" id="hub-pondicherry" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:40px; align-items:center;">
          <div>
            <img src="/images/business_hotel_hospitality_1791444176465.jpg" alt="Pondicherry Coastal Hub" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg);" />
          </div>
          <div>
            <span class="badge badge-mint" style="font-size:11px;">EAST COAST CORRIDOR · 35 ACRES</span>
            <h2 style="font-size:2.4rem; margin:12px 0 16px;">Pondicherry — Knowledge &amp; Executive City</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              35 acres on the East Coast Road (ECR). Designed for executive corporate retreats, specialized R&amp;D campuses, 5-star hospitality, and lifestyle-driven technology centers.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>ECR Highway Frontage</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">Scenic 4-lane connectivity to Chennai.</p>
              </div>
              <div style="background:#fff; padding:12px; border-radius:8px; border:1px solid var(--c-border-light);">
                <strong>Executive Living &amp; Hospitality</strong>
                <p style="font-size:12px; color:var(--c-muted-grey); margin:2px 0 0;">5-Star luxury hotels and corporate suites.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Request Pondicherry Dossier →</a>
          </div>
        </div>
      </div>
    </section>
`;

fs.writeFileSync('views/locations.ejs', `
<%- include('partials/head') %>
<body id="top">
  <%- include('partials/header') %>
  <main id="main-content" role="main">
    ${locationsPageContent}
  </main>
  <%- include('partials/footer') %>
  <%- include('partials/floating-widget') %>
  <%- include('partials/modal-rfp') %>
</body>
</html>
`, 'utf8');

const splitMegaMenuHeaderHtml = fs.readFileSync('views/partials/header.ejs', 'utf8');

fs.writeFileSync('locations.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>South India Locations (390+ Acres) | GreenNext Technologies</title>
  <meta name="description" content="Strategic commercial land parcels: Coimbatore, Hosur, Madurai, Tirunelveli, Trichy, and Pondicherry with dedicated substations." />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230B2925'/%3E%3Cpath d='M9 11v-2h2M21 9h2v2M23 21v2h-2M11 23H9v-2' stroke='%236BC7A7' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3Crect x='13' y='13' width='6' height='6' fill='%236BC7A7'/%3E%3C/svg%3E" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/styles/tokens.css" />
  <link rel="stylesheet" href="/src/styles/base.css" />
  <link rel="stylesheet" href="/src/styles/components.css" />
  <link rel="stylesheet" href="/src/styles/sections.css" />
  <link rel="stylesheet" href="/src/styles/responsive.css" />
</head>
<body id="top">
  ${splitMegaMenuHeaderHtml.trim()}
  <main id="main-content" role="main">
    ${locationsPageContent}
  </main>
  <footer class="footer-wrapper" role="contentinfo" style="background:var(--c-deep-green); color:#fff; padding:60px 0 30px;">
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:30px; margin-bottom:30px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:36px; height:36px; border-radius:8px; background:var(--c-evergreen); display:flex; align-items:center; justify-content:center; color:var(--c-accent-mint); font-weight:700;">GN</div>
          <span style="font-size:18px; font-weight:700;">GreenNext Technologies</span>
        </div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--c-accent-mint);">+91 77088 87878 · info@greennext.in</div>
      </div>
      <div style="text-align:center; font-size:13px; color:rgba(255,255,255,0.6);">© 2026 GreenNext Technologies Private Limited. All institutional rights reserved.</div>
    </div>
  </footer>
  <script type="module" src="/src/js/main.js"></script>
</body>
</html>
`, 'utf8');

console.log('Synchronized locations.ejs and locations.html');
