const fs = require('fs');
const path = require('path');

// 1. Define Universal Navigation & Split Mega Dropdown HTML
const splitMegaMenuHeaderHtml = `
  <header class="header-wrapper" id="mainHeader">
    <div class="container">
      <nav class="header-nav" aria-label="Main Navigation">
        <!-- Brand Logo -->
        <a class="brand-logo" href="/" aria-label="GreenNext Technologies — Home">
          <div class="brand-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M9 11V9h2M21 9h2v2M23 21v2h-2M11 23H9v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <rect x="13" y="13" width="6" height="6" fill="currentColor"/>
            </svg>
          </div>
          <div class="brand-title">
            <span class="brand-name">GreenNext</span>
            <span class="brand-tagline">Technologies</span>
          </div>
        </a>

        <!-- Desktop Navigation Items with Enterprise Split-Panel Mega Dropdowns -->
        <ul class="nav-menu" role="menubar">
          <!-- 1. Home -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="/" role="menuitem">Home</a>
          </li>

          <!-- 2. About -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="/about" role="menuitem">About</a>
          </li>

          <!-- 3. Asset Verticals (Split-Panel Mega Menu) -->
          <li class="nav-item has-mega-split" role="none">
            <a class="nav-link" href="/infrastructure" role="menuitem" aria-expanded="false" aria-haspopup="true">
              Asset Verticals
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            <div class="mega-dropdown-split" role="menu">
              <div class="dropdown-split-container">
                <!-- Left Sidebar: 5 Core Clusters -->
                <div class="dropdown-sidebar">
                  <div class="dropdown-sidebar-header">
                    <span>Strategic Architecture</span>
                    <span class="badge badge-evergreen" style="font-size:9px;">5 Clusters</span>
                  </div>
                  <ul class="dropdown-cat-list">
                    <li class="dropdown-cat-item active" data-target-cluster="cluster-it">
                      <span class="dropdown-cat-badge">01</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">IT &amp; Knowledge Parks</span>
                        <span class="dropdown-cat-sub">Grade-A Towers &amp; GCC Campuses</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="cluster-dc">
                      <span class="dropdown-cat-badge">02</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Hyperscale &amp; AI Data Centers</span>
                        <span class="dropdown-cat-sub">100+ MW &amp; Liquid Cooled GPU Halls</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="cluster-convention">
                      <span class="dropdown-cat-badge">03</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Convention &amp; Event Spaces</span>
                        <span class="dropdown-cat-sub">10,000+ Seat Exhibition Halls</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="cluster-hotel">
                      <span class="dropdown-cat-badge">04</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Corporate Hospitality</span>
                        <span class="dropdown-cat-sub">5-Star Business Hotels (Non-Res)</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="cluster-mfg">
                      <span class="dropdown-cat-badge">05</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Precision High-Tech Mfg</span>
                        <span class="dropdown-cat-sub">Drones, EV, SpaceTech &amp; Defense</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                  </ul>
                </div>

                <!-- Right Content Panel: Dynamic Capability Grids -->
                <div class="dropdown-content-panel">
                  <!-- Panel 01: IT & Knowledge -->
                  <div class="dropdown-cluster-panel active" id="cluster-it">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 01</span>
                        <h4 class="cluster-title">IT &amp; Knowledge Infrastructure</h4>
                      </div>
                      <p class="cluster-desc">Master-planned technology campuses and knowledge cities engineered for Fortune 500 GCCs, software giants, and university research districts.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">Grade-A Office Towers</div>
                        <div class="cluster-card-desc">LEED Platinum multi-tenant towers with 4.2m ceiling clear heights.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg></div>
                        <div class="cluster-card-title">Knowledge Cities</div>
                        <div class="cluster-card-desc">Integrated R&amp;D zones combining academia, enterprise labs &amp; civic cores.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">Dual Substation Power</div>
                        <div class="cluster-card-desc">100% DG backup with 2N uninterruptible utility redundancy.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                        <div class="cluster-card-title">Innovation Districts</div>
                        <div class="cluster-card-desc">Plug-and-play incubators, collaborative atriums &amp; testing beds.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Single-Window Approvals</div>
                        <div class="cluster-card-desc">ELCOT &amp; SIPCOT statutory sanctions with pre-cleared building plans.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-it">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Carrier-Neutral Fiber</div>
                        <div class="cluster-card-desc">Quad-redundant entry points connected to dark fiber backbones.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Verified</span> Grade-A commercial specifications strictly non-residential.</span>
                      <div class="cluster-footer-actions">
                        <a href="/infrastructure#cluster-it" class="btn btn-secondary btn-sm">Explore IT Parks Section →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Submit EOI / RFP</a>
                      </div>
                    </div>
                  </div>

                  <!-- Panel 02: Data Center -->
                  <div class="dropdown-cluster-panel" id="cluster-dc">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 02</span>
                        <h4 class="cluster-title">100+ MW Hyperscale &amp; AI Data Centers</h4>
                      </div>
                      <p class="cluster-desc">High-density liquid-cooled computing campuses powered by dedicated 230kV/110kV substations and 100% green energy wheeling.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
                        <div class="cluster-card-title">Hyperscale Powered Shell</div>
                        <div class="cluster-card-desc">Modular powered shell parcels ready for 30 MW to 100+ MW load.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        <div class="cluster-card-title">AI GPU Density (50kW+/rack)</div>
                        <div class="cluster-card-desc">Engineered for direct liquid cooling &amp; high-density Blackwell/H100 clusters.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">230kV Dedicated Substation</div>
                        <div class="cluster-card-desc">Direct high-voltage grid ingress with dual redundant line feeds.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg></div>
                        <div class="cluster-card-title">PUE ≤ 1.25 Efficiency</div>
                        <div class="cluster-card-desc">Closed-loop chilled water &amp; adiabatic cooling with zero potable water waste.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
                        <div class="cluster-card-title">100% Green Energy PPA</div>
                        <div class="cluster-card-desc">Dedicated solar &amp; wind farms feeding direct Open Access renewable tariffs.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-dc">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div>
                        <div class="cluster-card-title">Subsea Cable Interconnect</div>
                        <div class="cluster-card-desc">&lt;4ms ultra-low latency direct dark fiber to Chennai &amp; Mumbai landing stations.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Flagship</span> 100+ MW Tirunelveli &amp; Hosur Hyperscale Parks.</span>
                      <div class="cluster-footer-actions">
                        <a href="/infrastructure#cluster-dc" class="btn btn-secondary btn-sm">Explore Data Centers Section →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Hyperscaler Technical Inquiries</a>
                      </div>
                    </div>
                  </div>

                  <!-- Panel 03: Convention -->
                  <div class="dropdown-cluster-panel" id="cluster-convention">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 03</span>
                        <h4 class="cluster-title">International Convention &amp; Event Centers</h4>
                      </div>
                      <p class="cluster-desc">Pillarless exhibition halls, plenary auditoriums, and world-class trade centers designed for global tech summits and industrial expos.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                        <div class="cluster-card-title">10,000+ Seat Plenary Hall</div>
                        <div class="cluster-card-desc">Massive column-free span with motorized acoustic stage trusses.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
                        <div class="cluster-card-title">Trade Exhibition Pavilions</div>
                        <div class="cluster-card-desc">High-bay clear heights with heavy machinery floor load capacities.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                        <div class="cluster-card-title">VIP &amp; Delegate Lounges</div>
                        <div class="cluster-card-desc">Diplomatic security corridors and private state executive suites.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg></div>
                        <div class="cluster-card-title">Broadcast Media Center</div>
                        <div class="cluster-card-desc">4K UHD production suites with direct satellite &amp; fiber uplinks.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
                        <div class="cluster-card-title">Multi-Level Parking (MLCP)</div>
                        <div class="cluster-card-desc">Automated EV charging bays for 3,500+ vehicles with shuttle links.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-convention">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                        <div class="cluster-card-title">Hybrid Event Tech</div>
                        <div class="cluster-card-desc">High-density Wi-Fi 7 supporting 50,000+ concurrent live devices.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">MICE</span> Master-planned for Coimbatore &amp; Madurai growth corridors.</span>
                      <div class="cluster-footer-actions">
                        <a href="/infrastructure#cluster-convention" class="btn btn-secondary btn-sm">Explore Convention Venues →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Event Booking Desk</a>
                      </div>
                    </div>
                  </div>

                  <!-- Panel 04: Hospitality -->
                  <div class="dropdown-cluster-panel" id="cluster-hotel">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 04</span>
                        <h4 class="cluster-title">Corporate Hospitality (Non-Residential)</h4>
                      </div>
                      <p class="cluster-desc">5-Star business hotels, serviced corporate suites, and executive transit lounges situated directly within GreenNext commercial campuses.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/></svg></div>
                        <div class="cluster-card-title">5-Star Business Hotels</div>
                        <div class="cluster-card-desc">200+ room keys managed with global luxury hospitality operators.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>
                        <div class="cluster-card-title">Serviced Executive Suites</div>
                        <div class="cluster-card-desc">Long-stay suites for visiting technology leadership and engineers.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/></svg></div>
                        <div class="cluster-card-title">Boardroom Suites</div>
                        <div class="cluster-card-desc">Secure confidential meeting rooms with encrypted telepresence.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                        <div class="cluster-card-title">Fine Dining &amp; Banquets</div>
                        <div class="cluster-card-desc">Multi-cuisine executive restaurants and private dining facilities.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                        <div class="cluster-card-title">Wellness &amp; Health Hub</div>
                        <div class="cluster-card-desc">Comprehensive fitness, spa, and recuperative executive amenities.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-hotel">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Zero Residential Focus</div>
                        <div class="cluster-card-desc">100% zoned institutional commercial and business hospitality.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Hospitality</span> Integrated into Coimbatore, Madurai &amp; Pondicherry masterplans.</span>
                      <div class="cluster-footer-actions">
                        <a href="/infrastructure#cluster-hotel" class="btn btn-secondary btn-sm">Explore Hotels Section →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Operator Inquiries</a>
                      </div>
                    </div>
                  </div>

                  <!-- Panel 05: Manufacturing -->
                  <div class="dropdown-cluster-panel" id="cluster-mfg">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 05</span>
                        <h4 class="cluster-title">Precision Industrial &amp; High-Tech Engineering</h4>
                      </div>
                      <p class="cluster-desc">High-load precision manufacturing facilities engineered for Drone gigafactories, Aerospace, EV powertrains, Robotics, and Defense electronics.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                        <div class="cluster-card-title">Drone Gigafactories</div>
                        <div class="cluster-card-desc">FAA/DGCA compliant test ranges and automated assembly bays.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                        <div class="cluster-card-title">Aerospace &amp; SpaceTech</div>
                        <div class="cluster-card-desc">Cleanroom Class 1000/10000 facilities with vibration isolation.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="22" height="18" rx="2"/><line x1="1" y1="9" x2="23" y2="9"/><line x1="1" y1="15" x2="23" y2="15"/></svg></div>
                        <div class="cluster-card-title">EV Battery &amp; Powertrain</div>
                        <div class="cluster-card-desc">High-voltage heavy testing corridors and dry-room architectures.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg></div>
                        <div class="cluster-card-title">2,500+ kg/m² Floor Load</div>
                        <div class="cluster-card-desc">Engineered for heavy CNC robotics and semiconductor fab lines.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">Industrial Effluent &amp; ZLD</div>
                        <div class="cluster-card-desc">Zero Liquid Discharge (ZLD) statutory environmental compliance.</div>
                      </a>
                      <a class="cluster-card" href="/infrastructure#cluster-mfg">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Defense Industrial Corridor</div>
                        <div class="cluster-card-desc">Strategically positioned inside the Tamil Nadu Defense Corridor.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Industrial</span> Hosur &amp; Coimbatore high-tech precision parcels.</span>
                      <div class="cluster-footer-actions">
                        <a href="/infrastructure#cluster-mfg" class="btn btn-secondary btn-sm">Explore Precision Parks Section →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Submit Industrial EOI</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- 4. South India Hubs (Split-Panel Mega Menu) -->
          <li class="nav-item has-mega-split" role="none">
            <a class="nav-link" href="/locations" role="menuitem" aria-expanded="false" aria-haspopup="true">
              South India Hubs
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            <div class="mega-dropdown-split" role="menu">
              <div class="dropdown-split-container">
                <!-- Left Sidebar: 6 Urban Hubs -->
                <div class="dropdown-sidebar">
                  <div class="dropdown-sidebar-header">
                    <span>Strategic Hubs</span>
                    <span class="badge badge-evergreen" style="font-size:9px;">6 Cities</span>
                  </div>
                  <ul class="dropdown-cat-list">
                    <li class="dropdown-cat-item active" data-target-cluster="hub-cbe">
                      <span class="dropdown-cat-badge">CBE</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Coimbatore Flagship</span>
                        <span class="dropdown-cat-sub">Engineering &amp; IT Hub</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-hosur">
                      <span class="dropdown-cat-badge">HSR</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Hosur Gateway</span>
                        <span class="dropdown-cat-sub">Bengaluru Border Tech Core</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-madurai">
                      <span class="dropdown-cat-badge">MDU</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Madurai Tech Cluster</span>
                        <span class="dropdown-cat-sub">ELCOT SEZ &amp; GCC Corridor</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-tirunelveli">
                      <span class="dropdown-cat-badge">TNV</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Tirunelveli Power Hub</span>
                        <span class="dropdown-cat-sub">100+ MW Clean Energy DC</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-trichy">
                      <span class="dropdown-cat-badge">TRY</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Trichy Knowledge Corridor</span>
                        <span class="dropdown-cat-sub">Central Hub &amp; Connectivity</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-pondicherry">
                      <span class="dropdown-cat-badge">PDY</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Pondicherry Coastal Hub</span>
                        <span class="dropdown-cat-sub">Knowledge &amp; Executive City</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                  </ul>
                </div>

                <!-- Right Content Panel: Location Cards -->
                <div class="dropdown-content-panel">
                  <!-- Hub 01: Coimbatore -->
                  <div class="dropdown-cluster-panel active" id="hub-cbe">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">FLAGSHIP HUB</span>
                        <h4 class="cluster-title">Coimbatore — Integrated Knowledge &amp; IT City</h4>
                      </div>
                      <p class="cluster-desc">Avinashi Road / NH-544 frontage. 98+ contiguous acres with direct 110kV dedicated substation ingress and Grade-A GCC multi-tenant towers.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-cbe">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">98+ Contiguous Acres</div>
                        <div class="cluster-card-desc">100% clear freehold title with single-window DTCP/CMDA approvals.</div>
                      </a>
                      <a class="cluster-card" href="/locations#hub-cbe">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">110kV Substation (1.2 km)</div>
                        <div class="cluster-card-desc">Dual grid lines with 60 MVA initial utility sanction.</div>
                      </a>
                      <a class="cluster-card" href="/locations#hub-cbe">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg></div>
                        <div class="cluster-card-title">Engineering Talent Pool</div>
                        <div class="cluster-card-desc">30+ elite engineering universities within a 25 km radius.</div>
                      </a>
                      <a class="cluster-card" href="/locations#hub-cbe">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Dark Fiber Loop</div>
                        <div class="cluster-card-desc">Quad fiber ring from Airtel, Jio, BSNL &amp; Tata Communications.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Active</span> Phase-1 civil groundwork ready for built-to-suit co-development.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-cbe" class="btn btn-secondary btn-sm">View Coimbatore Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Site Visit Request</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hub 02: Hosur -->
                  <div class="dropdown-cluster-panel" id="hub-hosur">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">BENGALURU CORRIDOR</span>
                        <h4 class="cluster-title">Hosur — Precision High-Tech &amp; Data Center Gateway</h4>
                      </div>
                      <p class="cluster-desc">65 acres situated 35 mins from Electronic City, Bengaluru. High-density EV, drone engineering, and hyperscale edge compute hub.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-hosur">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="22" height="18" rx="2"/></svg></div>
                        <div class="cluster-card-title">65 Acres Tech Parcel</div>
                        <div class="cluster-card-desc">Strategic gateway directly on the Tamil Nadu-Karnataka border.</div>
                      </a>
                      <a class="cluster-card" href="/locations#hub-hosur">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">230kV Ingress Available</div>
                        <div class="cluster-card-desc">Massive power overhead suitable for 80+ MW compute capacity.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Border Gateway</span> Fast-track SIPCOT clearances.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-hosur" class="btn btn-secondary btn-sm">View Hosur Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">RFP Submission</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hub 03: Madurai -->
                  <div class="dropdown-cluster-panel" id="hub-madurai">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">SOUTH TAMIL NADU</span>
                        <h4 class="cluster-title">Madurai — ELCOT SEZ &amp; TechMax Hub</h4>
                      </div>
                      <p class="cluster-desc">93+ acres connecting ring road and ELCOT Vadapalanji IT Park. Lower attrition and premier cost-efficiency for Tier-1 IT services.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-madurai">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">93+ Acres Footprint</div>
                        <div class="cluster-card-desc">Zoned for multi-tenant IT parks, GCCs, and incubation centers.</div>
                      </a>
                      <a class="cluster-card" href="/locations#hub-madurai">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
                        <div class="cluster-card-title">110kV Substation Direct Feed</div>
                        <div class="cluster-card-desc">Uninterrupted industrial grade transmission infrastructure.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">SEZ Adjacent</span> Single window statutory support.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-madurai" class="btn btn-secondary btn-sm">View Madurai Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Request Dossier</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hub 04: Tirunelveli -->
                  <div class="dropdown-cluster-panel" id="hub-tirunelveli">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HYPERSCALE HUB</span>
                        <h4 class="cluster-title">Tirunelveli — 100+ MW Renewable Data Center Park</h4>
                      </div>
                      <p class="cluster-desc">40 acres with 230kV substation inside 800m. Direct access to Muppandal wind energy corridor &amp; sub-sea cables.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-tirunelveli">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
                        <div class="cluster-card-title">100+ MW Ready Ingress</div>
                        <div class="cluster-card-desc">Lowest green energy wheeling tariffs in South Asia.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Clean Energy</span> 100% wind/solar PPA integration.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-tirunelveli" class="btn btn-secondary btn-sm">View Tirunelveli Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Power Inquiry</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hub 05: Trichy -->
                  <div class="dropdown-cluster-panel" id="hub-trichy">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CENTRAL HUB</span>
                        <h4 class="cluster-title">Trichy — Knowledge City &amp; Central Node</h4>
                      </div>
                      <p class="cluster-desc">45 acres situated on the central Tamil Nadu junction. Adjacent to national research institutions (NIT, IIM, BHEL).</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-trichy">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg></div>
                        <div class="cluster-card-title">45 Acres Knowledge Hub</div>
                        <div class="cluster-card-desc">Academic-enterprise hybrid campus.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Central</span> Excellent airport &amp; multi-rail connectivity.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-trichy" class="btn btn-secondary btn-sm">View Trichy Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Submit Inquiry</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hub 06: Pondicherry -->
                  <div class="dropdown-cluster-panel" id="hub-pondicherry">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">COASTAL HUB</span>
                        <h4 class="cluster-title">Pondicherry — Knowledge &amp; Executive City</h4>
                      </div>
                      <p class="cluster-desc">35 acres on the East Coast Corridor. Premium lifestyle, executive hospitality, and green IT campuses.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="/locations#hub-pondicherry">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg></div>
                        <div class="cluster-card-title">35 Acres Coastal Campus</div>
                        <div class="cluster-card-desc">High-standard lifestyle &amp; technology campus.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Executive</span> Blended corporate hospitality and R&amp;D.</span>
                      <div class="cluster-footer-actions">
                        <a href="/locations#hub-pondicherry" class="btn btn-secondary btn-sm">View Pondicherry Specs →</a>
                        <a href="/contact" class="btn btn-primary btn-sm">Submit Inquiry</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- 5. Solutions -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="/solutions" role="menuitem">Solutions</a>
          </li>

          <!-- 6. Partnerships & JV -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="/partnership" role="menuitem">Partnerships &amp; JV</a>
          </li>

          <!-- 7. Contact -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="/contact" role="menuitem">Contact</a>
          </li>
        </ul>

        <!-- Navigation Action Buttons -->
        <div class="nav-actions">
          <a class="btn btn-primary btn-sm" href="/contact">
            <span>Submit EOI / RFP →</span>
          </a>
          <a class="btn btn-whatsapp btn-sm" href="https://wa.me/917708887878" target="_blank" rel="noopener noreferrer" aria-label="Chat with GreenNext on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
`;

// 2. Generate Hero Slides with Rich Right-Side Showcase Cards
const enhancedHeroSectionHtml = `
    <section class="hero-slider-wrapper" id="hero" aria-label="GreenNext Institutional Infrastructure Showcase">
      <div class="hero-slider" tabindex="0" aria-roledescription="carousel" aria-label="GreenNext Infrastructure Pillars">
        
        <!-- Slide 1: Primary Overview -->
        <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop');" role="group" aria-roledescription="slide" aria-label="1 of 7: Institutional Real Estate & Digital Infrastructure">
          <div class="container">
            <div class="hero-slide-grid">
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
                  <span>Ref: DC-ITP-TN/JV/2026/001 · Institutional JV, SPV &amp; Co-Development</span>
                </div>
              </div>

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop" alt="Institutional Commercial Platform" loading="eager" />
                  <span class="hero-card-badge">VERIFIED PLATFORM</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">390+ Acres</span>
                    <span class="hero-card-spec-lbl">Clear Freehold Titles</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">6 Core Hubs</span>
                    <span class="hero-card-spec-lbl">High-Growth Corridor</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">100+ MW</span>
                    <span class="hero-card-spec-lbl">Power Capacity</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">IGBC Platinum</span>
                    <span class="hero-card-spec-lbl">ESG &amp; Tier-III/IV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2: IT & Knowledge Infrastructure -->
        <div class="hero-slide" style="background-image: url('/images/it_park_knowledge_city_1791444121901.jpg');" role="group" aria-roledescription="slide" aria-label="2 of 7: Grade-A IT Parks & Knowledge Cities">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Grade-A IT Park Towers" loading="lazy" />
                  <span class="hero-card-badge">LEED PLATINUM</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">4.2m Floor-to-Ceiling</span>
                    <span class="hero-card-spec-lbl">Clear Workspaces</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">2N Power Grid</span>
                    <span class="hero-card-spec-lbl">100% DG Redundancy</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Quad Carrier</span>
                    <span class="hero-card-spec-lbl">Dark Fiber Ingress</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Single-Window</span>
                    <span class="hero-card-spec-lbl">ELCOT &amp; SIPCOT Sanction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3: Hyperscale & AI Data Centers -->
        <div class="hero-slide" style="background-image: url('/images/hyperscale_data_center_1791444139983.jpg');" role="group" aria-roledescription="slide" aria-label="3 of 7: 100+ MW Hyperscale Data Centers">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/hyperscale_data_center_1791444139983.jpg" alt="100+ MW Hyperscale Data Center" loading="lazy" />
                  <span class="hero-card-badge">TIER III / IV</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">100+ MW</span>
                    <span class="hero-card-spec-lbl">Dedicated Ingress</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">50kW+/Rack</span>
                    <span class="hero-card-spec-lbl">Liquid Cooling Ready</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">PUE ≤ 1.25</span>
                    <span class="hero-card-spec-lbl">Energy Efficiency</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">&lt;4ms Latency</span>
                    <span class="hero-card-spec-lbl">To Landing Stations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 4: Convention & Event Spaces -->
        <div class="hero-slide" style="background-image: url('/images/convention_center_1791444158406.jpg');" role="group" aria-roledescription="slide" aria-label="4 of 7: International Convention Centers">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/convention_center_1791444158406.jpg" alt="10,000+ Seat Convention Center" loading="lazy" />
                  <span class="hero-card-badge">PLENARY VENUE</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">10,000+ Seats</span>
                    <span class="hero-card-spec-lbl">Pillarless Plenary</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">3,500 MLCP</span>
                    <span class="hero-card-spec-lbl">EV Parking Bays</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">50,000+</span>
                    <span class="hero-card-spec-lbl">Concurrent Wi-Fi 7</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">VIP Corridors</span>
                    <span class="hero-card-spec-lbl">Diplomatic Suites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 5: Corporate Hospitality -->
        <div class="hero-slide" style="background-image: url('/images/business_hotel_hospitality_1791444176465.jpg');" role="group" aria-roledescription="slide" aria-label="5 of 7: 5-Star Corporate Hospitality">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/business_hotel_hospitality_1791444176465.jpg" alt="5-Star Business Hotel" loading="lazy" />
                  <span class="hero-card-badge">5-STAR LUXURY</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">200+ Keys</span>
                    <span class="hero-card-spec-lbl">Global Operator</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Executive Suites</span>
                    <span class="hero-card-spec-lbl">Long-Stay Tech Housing</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Encrypted Telepresence</span>
                    <span class="hero-card-spec-lbl">Boardroom Suites</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Fine Dining</span>
                    <span class="hero-card-spec-lbl">Banquets &amp; Wellness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 6: Precision High-Tech Manufacturing -->
        <div class="hero-slide" style="background-image: url('/images/precision_engineering_park_1791444195155.jpg');" role="group" aria-roledescription="slide" aria-label="6 of 7: Precision Industrial & Defense Parks">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/precision_engineering_park_1791444195155.jpg" alt="Precision High-Tech Engineering" loading="lazy" />
                  <span class="hero-card-badge">DEFENSE CORRIDOR</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">2,500+ kg/m²</span>
                    <span class="hero-card-spec-lbl">Floor Load Capacity</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Class 1000</span>
                    <span class="hero-card-spec-lbl">Cleanroom ISO-6</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">ZLD Compliant</span>
                    <span class="hero-card-spec-lbl">Industrial Effluent</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">DGCA Compliant</span>
                    <span class="hero-card-spec-lbl">Drone Test Ranges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 7: Strategic Land Bank & JV Co-Development -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop');" role="group" aria-roledescription="slide" aria-label="7 of 7: Strategic Land Bank & Co-Development">
          <div class="container">
            <div class="hero-slide-grid">
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

              <div class="hero-slide-card">
                <div class="hero-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop" alt="Institutional Platform JV" loading="lazy" />
                  <span class="hero-card-badge">CO-DEVELOPMENT</span>
                </div>
                <div class="hero-card-specs-grid">
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">100% Freehold</span>
                    <span class="hero-card-spec-lbl">Clear Land Title</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">SPV Ready</span>
                    <span class="hero-card-spec-lbl">Institutional JV</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">6 Hubs</span>
                    <span class="hero-card-spec-lbl">South India Grid</span>
                  </div>
                  <div class="hero-card-spec-box">
                    <span class="hero-card-spec-val">Fast-Track</span>
                    <span class="hero-card-spec-lbl">State Approvals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Slider Controls & Indicators -->
      <div class="hero-slider-controls">
        <div class="container">
          <div class="hero-slider-controls-inner">
            <button class="hero-slider-prev" type="button" aria-label="Previous Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="hero-slider-indicators" role="tablist" aria-label="Hero Slide Selector">
              <button class="hero-indicator active" type="button" role="tab" aria-selected="true" aria-label="Slide 1: Institutional Platform" data-slide-index="0"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 2: IT Parks" data-slide-index="1"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 3: Data Centers" data-slide-index="2"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 4: Convention" data-slide-index="3"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 5: Hospitality" data-slide-index="4"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 6: Precision Mfg" data-slide-index="5"></button>
              <button class="hero-indicator" type="button" role="tab" aria-selected="false" aria-label="Slide 7: Land & JV" data-slide-index="6"></button>
            </div>
            <button class="hero-slider-next" type="button" aria-label="Next Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
`;

// 3. Update index.html and views/partials/header.ejs
// Replace header in index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const headerStart = indexHtml.indexOf('<header class="header-wrapper"');
const headerEnd = indexHtml.indexOf('</header>', headerStart) + 9;
if (headerStart !== -1 && headerEnd !== -1) {
  indexHtml = indexHtml.substring(0, headerStart) + splitMegaMenuHeaderHtml.trim() + indexHtml.substring(headerEnd);
}

// Replace Hero in index.html
const heroStart = indexHtml.indexOf('<section class="hero-slider-wrapper"');
const heroEnd = indexHtml.indexOf('</section>', indexHtml.indexOf('<div class="hero-slider-controls">', heroStart)) + 10;
if (heroStart !== -1 && heroEnd !== -1) {
  indexHtml = indexHtml.substring(0, heroStart) + enhancedHeroSectionHtml.trim() + indexHtml.substring(heroEnd);
}
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html with enhanced hero & navigation');

// 4. Update views/partials/header.ejs
fs.writeFileSync('views/partials/header.ejs', splitMegaMenuHeaderHtml.trim() + '\n', 'utf8');
console.log('Updated views/partials/header.ejs');

// 5. Update views/index.ejs to synchronize with full hero and components
fs.writeFileSync('views/index.ejs', `
<%- include('partials/head') %>
<body id="top">
  <%- include('partials/header') %>

  <main id="main-content" role="main">
    ${enhancedHeroSectionHtml.trim()}

    <!-- Scale Strip -->
    <section class="trust-strip">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-badge-card">
            <span class="stat-number" style="font-size:2rem; font-weight:800; color:var(--c-evergreen);">390+</span>
            <div><strong>Verified Acres</strong><br><small style="color:var(--c-muted-grey);">Clear Title Land Bank</small></div>
          </div>
          <div class="trust-badge-card">
            <span class="stat-number" style="font-size:2rem; font-weight:800; color:var(--c-evergreen);">6</span>
            <div><strong>Strategic Hubs</strong><br><small style="color:var(--c-muted-grey);">South India Footprint</small></div>
          </div>
          <div class="trust-badge-card">
            <span class="stat-number" style="font-size:2rem; font-weight:800; color:var(--c-evergreen);">100+</span>
            <div><strong>Megawatts Power</strong><br><small style="color:var(--c-muted-grey);">230kV Grid &amp; Wind PPA</small></div>
          </div>
          <div class="trust-badge-card">
            <span class="stat-number" style="font-size:2rem; font-weight:800; color:var(--c-evergreen);">5</span>
            <div><strong>Asset Verticals</strong><br><small style="color:var(--c-muted-grey);">Non-Residential Core</small></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Asset Classes Section -->
    <section class="section section-bordered" id="pillars">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-eyebrow">ASSET VERTICALS</span>
          <h2 class="section-title">Institutional Development Architecture</h2>
          <p class="section-lede">Five strategic non-residential infrastructure clusters designed for institutional co-development, hyperscale compute, and precision manufacturing.</p>
        </div>

        <div class="grid grid-cols-3" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:24px; margin-top:40px;">
          <!-- 01 -->
          <div class="card" style="padding:28px; background:#fff; border:1px solid var(--c-border-light); border-radius:16px;">
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:12px;">CLUSTER 01</div>
            <h3 style="margin-bottom:10px;">IT &amp; Knowledge Infrastructure</h3>
            <p style="color:var(--c-slate-text); font-size:14px; line-height:1.6; margin-bottom:20px;">Grade-A office towers, R&amp;D campuses, and collaborative innovation districts for Fortune 500 GCCs.</p>
            <a href="/infrastructure#cluster-it" class="btn btn-secondary btn-sm">Explore IT Parks Section →</a>
          </div>
          <!-- 02 -->
          <div class="card" style="padding:28px; background:#fff; border:1px solid var(--c-border-light); border-radius:16px;">
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:12px;">CLUSTER 02</div>
            <h3 style="margin-bottom:10px;">100+ MW Hyperscale &amp; AI Data Centers</h3>
            <p style="color:var(--c-slate-text); font-size:14px; line-height:1.6; margin-bottom:20px;">Dedicated 230kV substations, liquid cooling infrastructure, and sub-4ms dark fiber links.</p>
            <a href="/infrastructure#cluster-dc" class="btn btn-secondary btn-sm">Explore Data Centers Section →</a>
          </div>
          <!-- 03 -->
          <div class="card" style="padding:28px; background:#fff; border:1px solid var(--c-border-light); border-radius:16px;">
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:12px;">CLUSTER 03</div>
            <h3 style="margin-bottom:10px;">Convention &amp; Event Centers</h3>
            <p style="color:var(--c-slate-text); font-size:14px; line-height:1.6; margin-bottom:20px;">10,000+ seat pillarless plenary halls, trade exhibition pavilions, and MLCP for international summits.</p>
            <a href="/infrastructure#cluster-convention" class="btn btn-secondary btn-sm">Explore Convention Venues →</a>
          </div>
          <!-- 04 -->
          <div class="card" style="padding:28px; background:#fff; border:1px solid var(--c-border-light); border-radius:16px;">
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:12px;">CLUSTER 04</div>
            <h3 style="margin-bottom:10px;">Corporate Hospitality (Non-Res)</h3>
            <p style="color:var(--c-slate-text); font-size:14px; line-height:1.6; margin-bottom:20px;">200+ room 5-star business hotels, serviced executive suites, and encrypted telepresence boardrooms.</p>
            <a href="/infrastructure#cluster-hotel" class="btn btn-secondary btn-sm">Explore Hospitality Assets →</a>
          </div>
          <!-- 05 -->
          <div class="card" style="padding:28px; background:#fff; border:1px solid var(--c-border-light); border-radius:16px;">
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:12px;">CLUSTER 05</div>
            <h3 style="margin-bottom:10px;">Precision High-Tech Mfg</h3>
            <p style="color:var(--c-slate-text); font-size:14px; line-height:1.6; margin-bottom:20px;">Heavy load (2,500+ kg/m²), cleanroom Class 1000, and ZLD facilities for Drone, EV, and Aerospace.</p>
            <a href="/infrastructure#cluster-mfg" class="btn btn-secondary btn-sm">Explore Precision Parks →</a>
          </div>
          <!-- 06 -->
          <div class="card" style="padding:28px; background:var(--c-dark-green); color:#fff; border-radius:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-family:var(--font-mono); color:var(--c-accent-mint); font-weight:700; margin-bottom:12px;">CO-DEVELOPMENT</div>
              <h3 style="color:#fff; margin-bottom:10px;">Institutional Partnership &amp; JV</h3>
              <p style="color:#DDEBE4; font-size:14px; line-height:1.6; margin-bottom:20px;">Direct SPV investment, structured equity, and built-to-suit co-development across 390+ acres.</p>
            </div>
            <a href="/partnership" class="btn btn-accent btn-sm">Inspect JV Structure →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Grid Section -->
    <section class="section" id="locations" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-eyebrow">STRATEGIC FOOTPRINT</span>
          <h2 class="section-title">South India Grid (390+ Acres)</h2>
          <p class="section-lede">Contiguous land banks with dedicated high-voltage substation feeds and high-speed highway connectivity across 6 urban growth engines.</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:24px; margin-top:40px;">
          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">CBE · 98+ ACRES</span>
            <h3 style="margin:12px 0 8px;">Coimbatore Flagship Campus</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">110kV Substation (1.2 km) · NH-544 Frontage · Engineering Capital</p>
            <a href="/locations#hub-cbe" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">HSR · 65 ACRES</span>
            <h3 style="margin:12px 0 8px;">Hosur Precision Gateway</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">230kV Ingress · 35 Mins from Electronic City · EV &amp; Drone Corridor</p>
            <a href="/locations#hub-hosur" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">MDU · 93+ ACRES</span>
            <h3 style="margin:12px 0 8px;">Madurai ELCOT SEZ Hub</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">110kV Direct Feed · Adjacent to Vadapalanji SEZ · GCC Hub</p>
            <a href="/locations#hub-madurai" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">TNV · 40 ACRES</span>
            <h3 style="margin:12px 0 8px;">Tirunelveli 100+ MW DC</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">230kV Substation (800m) · Muppandal Wind PPA · Hyperscale AI</p>
            <a href="/locations#hub-tirunelveli" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">TRY · 45 ACRES</span>
            <h3 style="margin:12px 0 8px;">Trichy Knowledge Corridor</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">Central TN Rail/Air Node · Adjacent to NIT &amp; IIM</p>
            <a href="/locations#hub-trichy" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>

          <div style="background:#fff; border:1px solid var(--c-border-light); border-radius:16px; padding:24px;">
            <span class="badge badge-mint" style="font-size:10px;">PDY · 35 ACRES</span>
            <h3 style="margin:12px 0 8px;">Pondicherry Coastal Hub</h3>
            <p style="color:var(--c-slate-text); font-size:14px; margin-bottom:16px;">East Coast Road Frontage · Executive Living &amp; Technology City</p>
            <a href="/locations#hub-pondicherry" class="btn btn-secondary btn-sm">View Technical Specs →</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <%- include('partials/footer') %>
  <%- include('partials/floating-widget') %>
  <%- include('partials/modal-rfp') %>
</body>
</html>
`, 'utf8');
console.log('Updated views/index.ejs');

// 6. Update views/infrastructure.ejs and infrastructure.html
const singleInfrastructurePageContent = `
    <!-- Subpage Hero -->
    <section class="hero-section" style="padding: clamp(4rem, 6vw, 6rem) 0; background: linear-gradient(135deg, var(--c-dark-green) 0%, #071D1A 100%); color: #fff;">
      <div class="container">
        <div style="max-width: 860px;">
          <div class="hero-badge" style="background: rgba(107, 199, 167, 0.15); color: var(--c-accent-mint); border: 1px solid rgba(107, 199, 167, 0.3);">
            <span>NON-RESIDENTIAL PORTFOLIO</span>
          </div>
          <h1 style="font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 4.2rem); color: #fff; line-height: 1.1; margin-bottom: 20px;">
            5 Core Institutional <em>Asset Verticals</em>.
          </h1>
          <p style="color: #DDEBE4; font-size: clamp(1.1rem, 1.3vw, 1.25rem); line-height: 1.6; margin-bottom: 24px;">
            Engineered exclusively for Grade-A commercial real estate, 100+ MW hyperscale compute, international conventions, corporate hospitality, and high-load precision manufacturing across South India.
          </p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="#cluster-it" class="btn btn-secondary btn-sm">01. IT Parks</a>
            <a href="#cluster-dc" class="btn btn-secondary btn-sm">02. Data Centers</a>
            <a href="#cluster-convention" class="btn btn-secondary btn-sm">03. Convention</a>
            <a href="#cluster-hotel" class="btn btn-secondary btn-sm">04. Hospitality</a>
            <a href="#cluster-mfg" class="btn btn-secondary btn-sm">05. Precision Mfg</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Vertical 01: IT & Knowledge Infrastructure -->
    <section class="section section-bordered" id="cluster-it">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:10px;">CLUSTER 01</div>
            <h2 style="font-size:2.4rem; margin-bottom:16px;">IT &amp; Knowledge Infrastructure</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              Master-planned technology campuses and knowledge cities engineered for Fortune 500 GCCs, software development centers, and research universities. Built with 4.2m ceiling clear heights, smart building management, and dual-substation power redundancy.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>LEED Platinum</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">IGBC certified green building standards.</p>
              </div>
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>2N Power Redundancy</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">100% uninterrupted DG backup systems.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Submit IT Park EOI / RFP →</a>
          </div>
          <div>
            <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Grade-A IT Park" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--c-border-light);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Vertical 02: Hyperscale & AI Data Centers -->
    <section class="section" id="cluster-dc" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:40px; align-items:center;">
          <div>
            <img src="/images/hyperscale_data_center_1791444139983.jpg" alt="Hyperscale AI Data Center" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--c-border-light);" />
          </div>
          <div>
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:10px;">CLUSTER 02</div>
            <h2 style="font-size:2.4rem; margin-bottom:16px;">100+ MW Hyperscale &amp; AI Data Centers</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              High-density liquid-cooled computing campuses powered by dedicated 230kV/110kV substations, dual-grid feeder lines, direct green wind/solar energy wheeling, PUE ≤ 1.25 efficiency, and sub-4ms fiber interconnects to subsea cable landing stations.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px;">
              <div style="background:#fff; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>50kW+/Rack AI Density</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Direct-to-chip liquid cooling architectures.</p>
              </div>
              <div style="background:#fff; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>Dedicated 230kV Ingress</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Direct high-voltage grid ingress without bottlenecks.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Request Hyperscaler Tech Specs →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Vertical 03: Convention & Event Spaces -->
    <section class="section section-bordered" id="cluster-convention">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:10px;">CLUSTER 03</div>
            <h2 style="font-size:2.4rem; margin-bottom:16px;">International Convention &amp; Event Centers</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              Pillarless grand plenary halls, multi-hall exhibition pavilions, and acoustically tuned corporate auditoriums designed to host global tech summits, industrial expos, state assemblies, and global shareholder conferences.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>10,000+ Seat Plenary</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Column-free span with acoustic stage trusses.</p>
              </div>
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>3,500+ Vehicle MLCP</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Automated EV charging bays &amp; VIP lounges.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Event Booking &amp; Summit Desk →</a>
          </div>
          <div>
            <img src="/images/convention_center_1791444158406.jpg" alt="Convention & Event Centers" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--c-border-light);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Vertical 04: Corporate Hospitality -->
    <section class="section" id="cluster-hotel" style="background-color: var(--c-paper-surface);">
      <div class="container">
        <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap:40px; align-items:center;">
          <div>
            <img src="/images/business_hotel_hospitality_1791444176465.jpg" alt="Corporate Business Hotel" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--c-border-light);" />
          </div>
          <div>
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:10px;">CLUSTER 04</div>
            <h2 style="font-size:2.4rem; margin-bottom:16px;">Corporate Hospitality (Non-Residential)</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              5-Star business hotels, serviced corporate suites, and executive transit lounges situated directly within GreenNext commercial campuses. Zero residential focus — 100% institutional business zoning.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px;">
              <div style="background:#fff; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>200+ Room Keys</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Managed by global luxury hotel operators.</p>
              </div>
              <div style="background:#fff; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>Encrypted Boardrooms</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Confidential executive telepresence suites.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Hospitality Operator Inquiries →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Vertical 05: Precision High-Tech Manufacturing -->
    <section class="section section-bordered" id="cluster-mfg">
      <div class="container">
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:40px; align-items:center;">
          <div>
            <div style="font-family:var(--font-mono); color:var(--c-evergreen); font-weight:700; margin-bottom:10px;">CLUSTER 05</div>
            <h2 style="font-size:2.4rem; margin-bottom:16px;">Precision Industrial &amp; High-Tech Engineering</h2>
            <p style="color:var(--c-slate-text); font-size:16px; line-height:1.65; margin-bottom:20px;">
              High-load precision manufacturing facilities engineered for Drone gigafactories, Aerospace, EV powertrains, Robotics, and Defense electronics inside the Tamil Nadu Defense Corridor.
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px;">
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>2,500+ kg/m² Floor Load</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Engineered for heavy CNC &amp; semiconductor lines.</p>
              </div>
              <div style="background:#f8faf9; padding:14px; border-radius:10px; border:1px solid var(--c-border-light);">
                <strong>ZLD Effluent Compliance</strong>
                <p style="font-size:13px; color:var(--c-muted-grey); margin:4px 0 0;">Zero Liquid Discharge statutory clearance.</p>
              </div>
            </div>
            <a href="/contact" class="btn btn-primary btn-sm">Submit Industrial EOI →</a>
          </div>
          <div>
            <img src="/images/precision_engineering_park_1791444195155.jpg" alt="Precision High Tech Engineering" style="width:100%; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--c-border-light);" />
          </div>
        </div>
      </div>
    </section>
`;

// Update views/infrastructure.ejs
fs.writeFileSync('views/infrastructure.ejs', `
<%- include('partials/head') %>
<body id="top">
  <%- include('partials/header') %>
  <main id="main-content" role="main">
    ${singleInfrastructurePageContent}
  </main>
  <%- include('partials/footer') %>
  <%- include('partials/floating-widget') %>
  <%- include('partials/modal-rfp') %>
</body>
</html>
`, 'utf8');

// Update infrastructure.html for static vite build
fs.writeFileSync('infrastructure.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Asset Verticals — 5 Core Clusters | GreenNext Technologies</title>
  <meta name="description" content="Master-planned non-residential infrastructure: IT Parks, 100+ MW Hyperscale AI Data Centers, Convention Venues, Corporate Hotels & Precision Industrial Campuses." />
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
    ${singleInfrastructurePageContent}
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
console.log('Updated views/infrastructure.ejs and infrastructure.html');
