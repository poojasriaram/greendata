const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. MEGA DROPDOWNS MARKUP FOR ASSET VERTICALS & HUBS
const newNavMenu = `        <!-- Desktop Navigation Items with Enterprise Split-Panel Mega Dropdowns -->
        <ul class="nav-menu" role="menubar">
          <!-- 1. Home -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="#hero" role="menuitem">Home</a>
          </li>

          <!-- 2. About -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="#about" role="menuitem">About</a>
          </li>

          <!-- 3. Asset Verticals (Split-Panel Mega Menu) -->
          <li class="nav-item" role="none">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              Asset Verticals
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
            <div class="mega-dropdown-split" role="menu">
              <div class="dropdown-split-container">
                <!-- Left Sidebar: 5 Category Clusters -->
                <div class="dropdown-sidebar">
                  <div class="dropdown-sidebar-header">
                    <span>V5 Strategic Architecture</span>
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
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">Grade-A Office Towers</div>
                        <div class="cluster-card-desc">LEED Platinum multi-tenant towers with 4.2m ceiling clear heights.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg></div>
                        <div class="cluster-card-title">Knowledge Cities</div>
                        <div class="cluster-card-desc">Integrated R&amp;D zones combining academia, enterprise labs &amp; civic cores.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">Dual Substation Power</div>
                        <div class="cluster-card-desc">100% DG backup with 2N uninterruptible utility redundancy.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                        <div class="cluster-card-title">Innovation Districts</div>
                        <div class="cluster-card-desc">Plug-and-play incubators, collaborative atriums &amp; testing beds.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Single-Window Approvals</div>
                        <div class="cluster-card-desc">ELCOT &amp; SIPCOT statutory sanctions with pre-cleared building plans.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Carrier-Neutral Fiber</div>
                        <div class="cluster-card-desc">Quad-redundant entry points connected to dark fiber backbones.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Verified</span> Grade-A commercial specifications strictly non-residential.</span>
                      <div class="cluster-footer-actions">
                        <a href="#asset-showcase" class="btn btn-secondary btn-sm">Explore IT Parks →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit EOI / RFP</a>
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
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
                        <div class="cluster-card-title">Hyperscale Powered Shell</div>
                        <div class="cluster-card-desc">Modular powered shell parcels ready for 30 MW to 100+ MW load.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        <div class="cluster-card-title">AI GPU Density (50kW+/rack)</div>
                        <div class="cluster-card-desc">Engineered for direct liquid cooling &amp; high-density Blackwell/H100 clusters.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">230kV Dedicated Substation</div>
                        <div class="cluster-card-desc">Direct high-voltage grid ingress with dual redundant line feeds.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg></div>
                        <div class="cluster-card-title">PUE ≤ 1.25 Efficiency</div>
                        <div class="cluster-card-desc">Closed-loop adiabatic and direct-to-chip cooling loops.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                        <div class="cluster-card-title">Subsea Cable Interconnects</div>
                        <div class="cluster-card-desc">Sub-4ms latency to Chennai &amp; Mumbai international landing stations.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Tier III / IV Architecture</div>
                        <div class="cluster-card-desc">Concurrently maintainable power and thermal infrastructure (2N / N+1).</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">100+ MW Ready</span> Tirunelveli &amp; Hosur Hyperscale parcels with active power allotments.</span>
                      <div class="cluster-footer-actions">
                        <a href="#asset-showcase" class="btn btn-secondary btn-sm">Explore DC Campus →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Request Power RFP</a>
                      </div>
                    </div>
                  </div>

                  <!-- Panel 03: Convention -->
                  <div class="dropdown-cluster-panel" id="cluster-convention">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">CLUSTER 03</span>
                        <h4 class="cluster-title">Convention &amp; Event Spaces</h4>
                      </div>
                      <p class="cluster-desc">Large-scale institutional venues hosting global summits, tech expos, industry exhibitions, and corporate shareholder conventions.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                        <div class="cluster-card-title">10,000+ Seat Plenary Hall</div>
                        <div class="cluster-card-desc">Pillarless grand hall for global tech summits &amp; state assemblies.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></div>
                        <div class="cluster-card-title">Exhibition Pavilions</div>
                        <div class="cluster-card-desc">Multi-hall modular trade expo pavilions with heavy floor loading.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/></svg></div>
                        <div class="cluster-card-title">Corporate Auditoriums</div>
                        <div class="cluster-card-desc">Acoustically tuned keynote auditoriums with broadcast studio suites.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/></svg></div>
                        <div class="cluster-card-title">Multi-Modal Transit Access</div>
                        <div class="cluster-card-desc">Dedicated expressway flyovers &amp; helipad integration.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
                        <div class="cluster-card-title">Smart Registration Atriums</div>
                        <div class="cluster-card-desc">High-throughput automated delegate check-in lounges.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Hotel Integration</div>
                        <div class="cluster-card-desc">Direct skybridge connection to on-campus 5-star business hotels.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Flagship</span> Pondicherry &amp; Trichy major convention complexes.</span>
                      <div class="cluster-footer-actions">
                        <a href="#asset-showcase" class="btn btn-secondary btn-sm">Explore Venues →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Inquire Booking</a>
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
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/></svg></div>
                        <div class="cluster-card-title">5-Star Business Hotels</div>
                        <div class="cluster-card-desc">200+ room keys managed with global luxury hospitality operators.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>
                        <div class="cluster-card-title">Serviced Executive Suites</div>
                        <div class="cluster-card-desc">Long-stay suites for visiting technology leadership and engineers.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/></svg></div>
                        <div class="cluster-card-title">Boardroom Suites</div>
                        <div class="cluster-card-desc">Secure confidential meeting rooms with encrypted telepresence.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                        <div class="cluster-card-title">Fine Dining &amp; Banquets</div>
                        <div class="cluster-card-desc">Multi-cuisine executive restaurants and private dining facilities.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                        <div class="cluster-card-title">Wellness &amp; Health Hub</div>
                        <div class="cluster-card-desc">Comprehensive fitness, spa, and recuperative executive amenities.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Zero Residential Focus</div>
                        <div class="cluster-card-desc">100% zoned institutional commercial and business hospitality.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Hospitality</span> Integrated into Coimbatore, Madurai &amp; Pondicherry masterplans.</span>
                      <div class="cluster-footer-actions">
                        <a href="#asset-showcase" class="btn btn-secondary btn-sm">Explore Hotels →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Operator Inquiries</a>
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
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                        <div class="cluster-card-title">Drone Gigafactories</div>
                        <div class="cluster-card-desc">FAA/DGCA compliant test ranges and automated assembly bays.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                        <div class="cluster-card-title">Aerospace &amp; SpaceTech</div>
                        <div class="cluster-card-desc">Cleanroom Class 1000/10000 facilities with vibration isolation.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="22" height="18" rx="2"/><line x1="1" y1="9" x2="23" y2="9"/><line x1="1" y1="15" x2="23" y2="15"/></svg></div>
                        <div class="cluster-card-title">EV Battery &amp; Powertrain</div>
                        <div class="cluster-card-desc">High-voltage heavy testing corridors and dry-room architectures.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg></div>
                        <div class="cluster-card-title">2,500+ kg/m² Floor Load</div>
                        <div class="cluster-card-desc">Engineered for heavy CNC robotics and semiconductor fab lines.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">Industrial Effluent &amp; ZLD</div>
                        <div class="cluster-card-desc">Zero Liquid Discharge (ZLD) statutory environmental compliance.</div>
                      </a>
                      <a class="cluster-card" href="#asset-showcase">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Defense Industrial Corridor</div>
                        <div class="cluster-card-desc">Strategically positioned inside the Tamil Nadu Defense Corridor.</div>
                      </a>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Industrial</span> Hosur &amp; Coimbatore high-tech precision parcels.</span>
                      <div class="cluster-footer-actions">
                        <a href="#asset-showcase" class="btn btn-secondary btn-sm">Explore Precision Parks →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit Industrial EOI</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- 4. South India Hubs (Split-Panel Mega Menu) -->
          <li class="nav-item" role="none">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              South India Hubs
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
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
                    <li class="dropdown-cat-item" data-target-cluster="hub-mdu">
                      <span class="dropdown-cat-badge">MDU</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Madurai ELCOT Hub</span>
                        <span class="dropdown-cat-sub">IT &amp; Fintech Park</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-hsr">
                      <span class="dropdown-cat-badge">HSR</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Hosur SpaceTech &amp; EV</span>
                        <span class="dropdown-cat-sub">Bengaluru Border Industrial</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-try">
                      <span class="dropdown-cat-badge">TRY</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Trichy Knowledge City</span>
                        <span class="dropdown-cat-sub">Central TN IT Corridor</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-tnv">
                      <span class="dropdown-cat-badge">TNV</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Tirunelveli AI &amp; Green Power</span>
                        <span class="dropdown-cat-sub">100% Wind/Solar AI DC</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                    <li class="dropdown-cat-item" data-target-cluster="hub-pdy">
                      <span class="dropdown-cat-badge">PDY</span>
                      <div class="dropdown-cat-info">
                        <span class="dropdown-cat-title">Pondicherry Innovation</span>
                        <span class="dropdown-cat-sub">Convention &amp; Tech District</span>
                      </div>
                      <span class="dropdown-cat-chevron">›</span>
                    </li>
                  </ul>
                </div>

                <!-- Right Content Panel: Dynamic Hub Details -->
                <div class="dropdown-content-panel">
                  <!-- Coimbatore Panel -->
                  <div class="dropdown-cluster-panel active" id="hub-cbe">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 01</span>
                        <h4 class="cluster-title">Coimbatore Flagship Mega Campus</h4>
                      </div>
                      <p class="cluster-desc">South India's premier engineering and deep-tech capital, featuring contiguous IT park towers, high-density AI data centers, and advanced manufacturing zones.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">230kV Substation Access</div>
                        <div class="cluster-card-desc">Dual grid high-voltage lines with dedicated bay hookup.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">LEED Platinum IT Park</div>
                        <div class="cluster-card-desc">Grade-A multi-tenant office towers with smart BMS controls.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                        <div class="cluster-card-title">15 Min to CJB Airport</div>
                        <div class="cluster-card-desc">Direct highway frontage along Avinashi Road &amp; L&amp;T Bypass.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                        <div class="cluster-card-title">Premier Talent Pipeline</div>
                        <div class="cluster-card-desc">Surrounded by PSG Tech, CIT, Amrita &amp; Kumaraguru institutes.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
                        <div class="cluster-card-title">Hyperscale AI DC Zone</div>
                        <div class="cluster-card-desc">Pre-approved for high-density liquid-cooled server racks.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/></svg></div>
                        <div class="cluster-card-title">5-Star Business Hotel</div>
                        <div class="cluster-card-desc">Integrated hospitality &amp; conference center on campus.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Active</span> Ready-to-build plots with clear statutory titles.</span>
                      <div class="cluster-footer-actions">
                        <a href="#coimbatore" class="btn btn-secondary btn-sm">View Coimbatore Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit EOI for Site</a>
                      </div>
                    </div>
                  </div>

                  <!-- Madurai Panel -->
                  <div class="dropdown-cluster-panel" id="hub-mdu">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 02</span>
                        <h4 class="cluster-title">Madurai ELCOT IT &amp; Data Center Hub</h4>
                      </div>
                      <p class="cluster-desc">South Tamil Nadu's emerging technological capital, offering dedicated ELCOT SEZ benefits, ultra-low occupancy costs, and vast power availability.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">ELCOT SEZ Statutory Status</div>
                        <div class="cluster-card-desc">Direct single-window tax incentives &amp; fast approvals.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">110kV Substation Dedicated</div>
                        <div class="cluster-card-desc">High reliability dual feeders with clean power availability.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                        <div class="cluster-card-title">Direct Airport Expressway</div>
                        <div class="cluster-card-desc">10 mins to Madurai International Airport along Ring Road.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">Fintech &amp; BPO Campuses</div>
                        <div class="cluster-card-desc">Grade-A space suited for tier-2 expansion and low attrition.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Dark Fiber Rings</div>
                        <div class="cluster-card-desc">Multi-operator carrier neutral fiber interconnects.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        <div class="cluster-card-title">Superior Cost Arbitrage</div>
                        <div class="cluster-card-desc">40% operating cost advantage over primary Tier-1 metros.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">ELCOT Hub</span> Immediate possession with masterplan approvals.</span>
                      <div class="cluster-footer-actions">
                        <a href="#madurai" class="btn btn-secondary btn-sm">View Madurai Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit EOI for Site</a>
                      </div>
                    </div>
                  </div>

                  <!-- Hosur Panel -->
                  <div class="dropdown-cluster-panel" id="hub-hsr">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 03</span>
                        <h4 class="cluster-title">Hosur Precision Engineering &amp; SpaceTech</h4>
                      </div>
                      <p class="cluster-desc">Directly on the Bengaluru border (Electronic City 25 mins), engineered for EV battery manufacturing, drone testing, robotics, and defense hardware.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                        <div class="cluster-card-title">Bengaluru Border Closeness</div>
                        <div class="cluster-card-desc">Seamless integration with Electronic City tech &amp; hardware clusters.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">Dedicated High Power Lines</div>
                        <div class="cluster-card-desc">Dual grid feeds engineered for heavy manufacturing &amp; edge compute.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                        <div class="cluster-card-title">Drone &amp; Aerospace Parks</div>
                        <div class="cluster-card-desc">DGCA certified flight testing corridors &amp; cleanroom fab zones.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="22" height="18" rx="2"/></svg></div>
                        <div class="cluster-card-title">EV Gigafactory Infrastructure</div>
                        <div class="cluster-card-desc">Heavy testing bays and chemical fire suppression systems.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg></div>
                        <div class="cluster-card-title">2,500+ kg/m² Floor Loads</div>
                        <div class="cluster-card-desc">Heavy-duty reinforced structural foundations for precision robotics.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Fast Statutory Sanctions</div>
                        <div class="cluster-card-desc">Single-window industrial clearance through SIPCOT &amp; TN Guidance.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Precision Park</span> Ideal for EV, Drone, Defense &amp; AI Edge Hardware.</span>
                      <div class="cluster-footer-actions">
                        <a href="#locations" class="btn btn-secondary btn-sm">View Hosur Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit EOI for Site</a>
                      </div>
                    </div>
                  </div>

                  <!-- Trichy Panel -->
                  <div class="dropdown-cluster-panel" id="hub-try">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 04</span>
                        <h4 class="cluster-title">Trichy Knowledge City &amp; Central Corridor</h4>
                      </div>
                      <p class="cluster-desc">Central Tamil Nadu’s academic and logistics axis, featuring premier educational anchor institutions (NIT Trichy, IIM) and direct international airport links.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg></div>
                        <div class="cluster-card-title">Knowledge City Campus</div>
                        <div class="cluster-card-desc">R&amp;D park integrated with premier national universities.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">High-Voltage Substation</div>
                        <div class="cluster-card-desc">Reliable central grid connectivity with 100% DG backup.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                        <div class="cluster-card-title">Convention Hall (5,000 Seats)</div>
                        <div class="cluster-card-desc">Central Tamil Nadu premier venue for scientific &amp; tech summits.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                        <div class="cluster-card-title">Trichy Int'l Airport (TRZ)</div>
                        <div class="cluster-card-desc">12 mins to terminal with direct daily flights to Singapore/Dubai.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">ELCOT IT Corridor</div>
                        <div class="cluster-card-desc">Zoned for tech enterprises, animation, and business processing.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Quad Fiber Entry</div>
                        <div class="cluster-card-desc">Redundant high-capacity dark fiber bandwidth corridors.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Knowledge City</span> Ideal for Enterprise IT, R&amp;D &amp; Tech Universities.</span>
                      <div class="cluster-footer-actions">
                        <a href="#locations" class="btn btn-secondary btn-sm">View Trichy Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Submit EOI for Site</a>
                      </div>
                    </div>
                  </div>

                  <!-- Tirunelveli Panel -->
                  <div class="dropdown-cluster-panel" id="hub-tnv">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 05</span>
                        <h4 class="cluster-title">Tirunelveli AI &amp; 100% Green Energy DC</h4>
                      </div>
                      <p class="cluster-desc">South Asia's prime green computing corridor with direct access to India's largest wind and solar farms, 400kV substations, and Tuticorin port logistics.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="cluster-card-title">100+ MW Direct Green Power</div>
                        <div class="cluster-card-desc">Direct wheeling from Muppandal Wind &amp; Solar belts.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div>
                        <div class="cluster-card-title">AI Supercomputing Park</div>
                        <div class="cluster-card-desc">Engineered for large language model (LLM) clusters &amp; liquid cooling.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">Gangaikondan SEZ Status</div>
                        <div class="cluster-card-desc">Statutory tax exemptions and single-window clearances.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg></div>
                        <div class="cluster-card-title">Zero Carbon PUE ≤ 1.22</div>
                        <div class="cluster-card-desc">Lowest levelized cost of green computing electricity in India.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">Tuticorin Deepwater Port</div>
                        <div class="cluster-card-desc">35 mins to major container seaport for heavy hardware imports.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Dual Subsea Landings</div>
                        <div class="cluster-card-desc">Direct fiber landing link to Tuticorin-Colombo subsea cable cables.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">Green Compute</span> Ideal for Hyperscale AI, GPU Cloud &amp; Sovereign Data.</span>
                      <div class="cluster-footer-actions">
                        <a href="#locations" class="btn btn-secondary btn-sm">View Tirunelveli Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Request Power RFP</a>
                      </div>
                    </div>
                  </div>

                  <!-- Pondicherry Panel -->
                  <div class="dropdown-cluster-panel" id="hub-pdy">
                    <div class="cluster-header">
                      <div class="cluster-title-row">
                        <span class="badge badge-mint" style="font-size:10px;">HUB 06</span>
                        <h4 class="cluster-title">Pondicherry Innovation &amp; Event Hub</h4>
                      </div>
                      <p class="cluster-desc">Coastal technological retreat &amp; premier international MICE destination, combining global convention facilities, business hospitality, and AI edge computing.</p>
                    </div>
                    <div class="cluster-cards-grid">
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                        <div class="cluster-card-title">Int'l Convention Center</div>
                        <div class="cluster-card-desc">7,500+ seat waterfront plenary hall for global summits.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/></svg></div>
                        <div class="cluster-card-title">5-Star Business Resort</div>
                        <div class="cluster-card-desc">Luxury corporate hospitality with executive meeting suites.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 11l6 4v6"/></svg></div>
                        <div class="cluster-card-title">AI Edge Compute Node</div>
                        <div class="cluster-card-desc">Edge data center cluster for low latency coastal delivery.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div class="cluster-card-title">UT Tax &amp; Single-Window</div>
                        <div class="cluster-card-desc">Attractive Union Territory regulatory framework and incentives.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                        <div class="cluster-card-title">ECR Coastal Expressway</div>
                        <div class="cluster-card-desc">Scenic 90 min multi-lane highway connection to Chennai.</div>
                      </div>
                      <div class="cluster-card">
                        <div class="cluster-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                        <div class="cluster-card-title">Subsea Cable Proximity</div>
                        <div class="cluster-card-desc">Direct high-speed link to Chennai global submarine landing stations.</div>
                      </div>
                    </div>
                    <div class="cluster-footer-bar">
                      <span class="cluster-footer-text"><span class="badge badge-mint" style="font-size:9px;">MICE &amp; Tech</span> Premier coastal convention and innovation district.</span>
                      <div class="cluster-footer-actions">
                        <a href="#locations" class="btn btn-secondary btn-sm">View Pondicherry Specs →</a>
                        <a href="#eoi" class="btn btn-primary btn-sm">Inquire Booking / EOI</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- 5. Partnerships Dropdown -->
          <li class="nav-item" role="none">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              Partnerships &amp; JV
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
            <div class="mega-dropdown mega-dropdown-medium" role="menu">
              <div class="dropdown-header-strip">
                <span>Institutional Participation</span>
                <span class="badge badge-mint" style="font-size: 9px;">JV &amp; SPV Models</span>
              </div>
              <div class="dropdown-inner">
                <div class="dropdown-grid-1col">
                  <a class="dropdown-card" href="#opportunities" role="menuitem">
                    <div class="dropdown-card-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 9h6"/></svg>
                    </div>
                    <div class="dropdown-card-text">
                      <h5>Active Development Packages</h5>
                      <p>Turnkey data center, IT park &amp; precision park co-development</p>
                    </div>
                  </a>
                  <a class="dropdown-card" href="#partnership" role="menuitem">
                    <div class="dropdown-card-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div class="dropdown-card-text">
                      <h5>Strategic JV Framework</h5>
                      <p>SPV structures with global operators, EPC firms &amp; utility providers</p>
                    </div>
                  </a>
                  <a class="dropdown-card" href="#partnership" role="menuitem">
                    <div class="dropdown-card-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <div class="dropdown-card-text">
                      <h5>Institutional Capital &amp; REITs</h5>
                      <p>Equity, structured debt &amp; long-term yield vehicle financing</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="dropdown-footer-bar">
                <a href="#eoi">Access EOI Submission Portal →</a>
              </div>
            </div>
          </li>

          <!-- 6. Market Outlook -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="#market" role="menuitem">Market Thesis</a>
          </li>

          <!-- 7. Contact -->
          <li class="nav-item" role="none">
            <a class="nav-link" href="#contact" role="menuitem">Contact</a>
          </li>
        </ul>`;

// Replace nav menu in index.html
const navMenuStart = html.indexOf('<ul class="nav-menu" role="menubar">');
const navMenuEnd = html.indexOf('</ul>', navMenuStart) + '</ul>'.length;

if (navMenuStart !== -1 && navMenuEnd !== -1) {
  html = html.substring(0, navMenuStart) + newNavMenu + html.substring(navMenuEnd);
}

// 2. HERO SECTION REPLACEMENT WITH 7-SLIDE CAROUSEL SLIDER (5s Auto-Rotation)
const heroSectionStart = html.indexOf('<section class="section-hero hero-section" id="hero"');
const heroSectionEnd = html.indexOf('</section>', heroSectionStart) + '</section>'.length;

const newHeroCarousel = `<section class="hero-slider-wrapper" id="hero" aria-label="GreenNext Institutional Infrastructure Showcase">
      <div class="container">
        <div class="hero-slider" tabindex="0" aria-roledescription="carousel" aria-label="GreenNext Infrastructure Pillars">
          <!-- Slide 1: Primary Overview -->
          <div class="hero-slide active" role="group" aria-roledescription="slide" aria-label="1 of 7: Institutional Real Estate & Digital Infrastructure">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
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
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Explore Asset Classes</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#portfolio">
                    Explore Strategic Grid
                  </a>
                  <button class="btn btn-quiet" data-open-modal="eoiDocDialog" type="button" style="margin-left: 8px;">
                    Request EOI Dossier →
                  </button>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  EOI Reference Ref. DC-ITP-TN/JV/2026/001 · Institutional JV, SPV &amp; Co-Development
                </p>
              </div>
              <div class="hero-visual" aria-label="Interactive Regional Topology Map">
                <div class="visual-header">
                  <span>SOUTH INDIA STRATEGIC INFRASTRUCTURE GRID</span>
                  <span class="text-mono" style="color: var(--c-accent-mint);">LIVE INTERCONNECT</span>
                </div>
                <div class="visual-canvas-container">
                  <canvas id="heroCanvas"></canvas>
                </div>
                <div class="visual-overlay-card">
                  <div>
                    <strong style="display:block; font-size:12px; font-weight:600;">6 Strategic Hubs Connected</strong>
                    <span style="font-size: 11px; color: var(--c-dark-text-secondary);">High-Voltage Dual Feeds · Direct Subsea &amp; Express Highway Corridors</span>
                  </div>
                  <a href="#portfolio" class="badge badge-mint" style="text-decoration:none;">Inspect Hubs →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2: IT & Knowledge Infrastructure -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="2 of 7: Grade-A IT Parks & Knowledge Cities">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Pillar 01 · IT Parks &amp; Knowledge Cities</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  Grade-A Technology Parks &amp; <em>Innovation Districts</em>.
                </h2>
                <p class="hero-lede">
                  LEED Platinum multi-tenant office towers, corporate headquarters, and university-linked research cities designed for Fortune 500 Global Capability Centers (GCCs) and deep-tech enterprises with 4.2m ceiling heights, smart building management, and single-window statutory sanctions.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Inspect IT Parks</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#coimbatore">
                    View Coimbatore Campus
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  Anchor Locations: Coimbatore (Avinashi Rd) · Madurai (ELCOT SEZ) · Trichy (Knowledge City)
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Grade-A IT Park with glass towers and skybridges" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">Grade-A Commercial · GCC Ecosystem</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">Integrated Master-Planned Knowledge Cities</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3: Hyperscale & AI Data Centers -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="3 of 7: 100+ MW Hyperscale Data Centers">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Pillar 02 · Hyperscale &amp; AI Compute</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  100+ MW Hyperscale &amp; <em>AI GPU Data Centers</em>.
                </h2>
                <p class="hero-lede">
                  High-density liquid-cooled computing campuses equipped with dedicated 230kV/110kV substations, dual-grid feeder lines, direct green wind/solar energy wheeling, PUE ≤ 1.25 efficiency, and sub-4ms fiber interconnects to subsea cable landing stations.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Explore Data Centers</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#tirunelveli">
                    View Tirunelveli 100+ MW Hub
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  Target Verticals: Global Hyperscalers · AI Clusters · Sovereign Cloud · Colocation SPVs
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="/images/hyperscale_data_center_1791444139983.jpg" alt="Hyperscale AI data center with high-voltage substation and liquid cooling loops" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">100+ MW Dual Feeds · Liquid Cooling</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">Tirunelveli &amp; Hosur Hyperscale AI Campuses</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 4: Convention & Event Spaces -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="4 of 7: International Convention Centers">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Pillar 03 · International Convention Spaces</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  10,000+ Capacity <em>Convention &amp; Event Venues</em>.
                </h2>
                <p class="hero-lede">
                  Pillarless grand plenary halls, multi-hall exhibition pavilions, and acoustically tuned corporate auditoriums designed to host global tech summits, industrial expos, state assemblies, and global shareholder conferences.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Inspect Convention Centers</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#locations">
                    View Pondicherry Hub
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  Key Locations: Pondicherry Waterfront · Trichy Central Corridor · Coimbatore Plenary
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="/images/convention_center_1791444158406.jpg" alt="Grand convention center with glass atrium and multi-hall exhibition space" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">10,000+ Attendee Plenary · MICE Infrastructure</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">World-Class Exhibition &amp; Summit Venues</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 5: Corporate Hospitality -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="5 of 7: 5-Star Corporate Hospitality">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Pillar 04 · Corporate Hospitality (Non-Res)</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  5-Star Business Hotels &amp; <em>Executive Suites</em>.
                </h2>
                <p class="hero-lede">
                  Integrated luxury corporate hotels, serviced executive suites, confidential boardroom facilities, and fine dining banquets situated directly within GreenNext commercial campuses to host global delegations and executive leadership.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Explore Hospitality</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#eoi">
                    Hotel Operator Inquiries
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  100% Commercial Asset Class · Zero Residential Diversion
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="/images/business_hotel_hospitality_1791444176465.jpg" alt="5-Star luxury business hotel and executive suites" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">5-Star Business Hospitality · Executive Suites</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">Campus-Integrated Executive Accommodation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 6: Precision Industrial & SpaceTech -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="6 of 7: High-Tech Precision Engineering">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Pillar 05 · Precision High-Tech Engineering</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  Drone Gigafactories, EV &amp; <em>SpaceTech Parks</em>.
                </h2>
                <p class="hero-lede">
                  Heavy floor-load manufacturing campuses (2,500+ kg/m²), ISO cleanroom environments, dedicated testing ranges, and high-voltage feeder lines purpose-built for aerospace, defense hardware, electric vehicle powertrains, and robotics automation.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#asset-showcase">
                    <span>Explore Precision Parks</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#locations">
                    View Hosur Industrial Hub
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  Key Locations: Hosur (Aerospace &amp; EV) · Coimbatore (Defense &amp; Robotics)
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="/images/precision_engineering_park_1791444195155.jpg" alt="High-tech precision engineering park with drone testing and robotics bays" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">2,500+ kg/m² Loading · Cleanroom Architecture</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">Hosur &amp; Coimbatore High-Tech Precision Hubs</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 7: Institutional Co-Development & SPVs -->
          <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="7 of 7: Strategic JV & Co-Development">
            <div class="hero-slide-grid">
              <div class="hero-slide-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>Institutional Capital · Co-Development</span>
                </div>
                <h2 class="hero-title" style="font-size: clamp(2.4rem, 4vw, 3.8rem);">
                  Institutional Joint Ventures &amp; <em>SPV Co-Development</em>.
                </h2>
                <p class="hero-lede">
                  GreenNext structures risk-mitigated Special Purpose Vehicles (SPVs), turnkey built-to-suit packages, and long-term yield partnerships alongside global hyperscale operators, sovereign wealth funds, and institutional real estate REITs.
                </p>
                <div class="hero-actions">
                  <a class="btn btn-primary btn-lg btn-arrow" href="#partnership">
                    <span>Explore JV Framework</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </a>
                  <a class="btn btn-secondary btn-lg" href="#eoi">
                    Submit Institutional EOI
                  </a>
                </div>
                <p style="font-size: 13px; color: var(--c-muted-grey); font-family: var(--font-mono);">
                  Structures: Equity Co-Investment · Built-to-Suit · Long-Term Master Lease
                </p>
              </div>
              <div class="hero-slide-visual">
                <img class="hero-slide-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="Institutional commercial tower" loading="lazy" />
                <div class="hero-slide-overlay">
                  <div>
                    <span class="hero-slide-overlay-tag">Institutional SPV &amp; Capital Alignment</span>
                    <h4 style="color:#fff; font-size:16px; margin-top:4px;">Turnkey Co-Development with Global Leaders</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Navigation & Indicators Bar (5s auto-rotate with pause on hover) -->
        <div class="hero-slider-controls">
          <div class="hero-slider-pagination">
            <div class="hero-counter">
              <span class="hero-counter-current">01</span>
              <span class="hero-counter-sep">/</span>
              <span class="hero-counter-total">07</span>
            </div>
            <div class="hero-slider-dots"></div>
          </div>
          <div class="hero-slider-arrows">
            <button class="hero-arrow-btn hero-slide-prev" aria-label="Previous Slide" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button class="hero-arrow-btn hero-slide-next" aria-label="Next Slide" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>`;

if (heroSectionStart !== -1 && heroSectionEnd !== -1) {
  html = html.substring(0, heroSectionStart) + newHeroCarousel + html.substring(heroSectionEnd);
}

// 3. UPDATE LOCATIONS / STRATEGIC GRID SECTION TO EMPHASIZE SPECIFICATIONS RATHER THAN ACRES
const locSectionStart = html.indexOf('<section class="section border-top" id="portfolio"');
const locSectionEnd = html.indexOf('</section>', locSectionStart) + '</section>'.length;

const newLocationsGrid = `<section class="section border-top" id="portfolio" aria-labelledby="portfolio-heading">
      <div class="container">
        <div style="max-width: 840px; margin-bottom: var(--space-8);">
          <span class="eyebrow"><span class="dot"></span> 05 — Strategic Regional Grid</span>
          <h2 id="portfolio-heading">South India Multi-City Infrastructure Network</h2>
          <p class="lede">
            Strategically distributed urban hubs across Tamil Nadu &amp; Puducherry, each purpose-engineered with dedicated high-voltage substation feeds, carrier-neutral dark fiber ingress, and immediate expressway logistics.
          </p>
        </div>

        <!-- 6 Strategic Hub Specification Cards -->
        <div class="asset-showcase-grid">
          <!-- Hub 1: Coimbatore -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Coimbatore Flagship Campus" loading="lazy" />
              <span class="asset-card-badge">Engineering &amp; DeepTech Hub</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 01 · COIMBATORE</div>
              <h3 class="asset-card-title">Coimbatore Flagship Tech &amp; AI Campus</h3>
              <p class="asset-card-desc">
                High-density computing &amp; Grade-A IT park masterplan with direct Avinashi Road frontage and dedicated high-voltage power feeds.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Power Specs:</strong> Dedicated 230kV substation line with dual-feed 2N transformer bay.</li>
                <li><strong>Connectivity:</strong> Quad dark fiber routes, sub-3ms latency to Chennai transit exchange.</li>
                <li><strong>Ecosystem:</strong> 15 mins to Coimbatore Int'l Airport; adjacent to PSG Tech &amp; CIT institutes.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#coimbatore" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Site EOI</a>
              </div>
            </div>
          </div>

          <!-- Hub 2: Madurai -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/it_park_knowledge_city_1791444121901.jpg" alt="Madurai ELCOT IT Campus" loading="lazy" />
              <span class="asset-card-badge">ELCOT SEZ Statutory Hub</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 02 · MADURAI</div>
              <h3 class="asset-card-title">Madurai ELCOT IT &amp; Data Center Park</h3>
              <p class="asset-card-desc">
                Designated ELCOT SEZ parcel offering single-window tax incentives, 40% operating cost arbitrage, and direct airport expressway link.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Power Specs:</strong> Dedicated 110kV high-reliability substation with 100% DG backup.</li>
                <li><strong>Connectivity:</strong> Carrier-neutral dark fiber ring with multi-operator presence.</li>
                <li><strong>Ecosystem:</strong> 10 mins to Madurai Int'l Airport; recognized financial technology &amp; GCC belt.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#madurai" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Site EOI</a>
              </div>
            </div>
          </div>

          <!-- Hub 3: Hosur -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/precision_engineering_park_1791444195155.jpg" alt="Hosur SpaceTech & Precision Park" loading="lazy" />
              <span class="asset-card-badge">Bengaluru Border Industrial Hub</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 03 · HOSUR</div>
              <h3 class="asset-card-title">Hosur Precision Engineering &amp; SpaceTech</h3>
              <p class="asset-card-desc">
                High-load precision manufacturing and AI edge computing campus positioned 25 mins from Bengaluru Electronic City on NH-44.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Power Specs:</strong> Dual high-voltage industrial grid feeders with captive substation capacity.</li>
                <li><strong>Structural:</strong> Heavy floor load (2,500+ kg/m²) for drone gigafactories &amp; robotics testing.</li>
                <li><strong>Ecosystem:</strong> Seamless access to Bengaluru hardware engineering &amp; Defense Corridor.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#locations" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Site EOI</a>
              </div>
            </div>
          </div>

          <!-- Hub 4: Trichy -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/convention_center_1791444158406.jpg" alt="Trichy Knowledge City" loading="lazy" />
              <span class="asset-card-badge">Central TN Knowledge Axis</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 04 · TRICHY</div>
              <h3 class="asset-card-title">Trichy Knowledge City &amp; Convention Hub</h3>
              <p class="asset-card-desc">
                Central Tamil Nadu academic and technology corridor integrated with NIT Trichy, regional convention halls, and international airport.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Power Specs:</strong> High-reliability substation grid with zero outage record.</li>
                <li><strong>Facilities:</strong> 5,000+ seat convention hall &amp; technology incubation district.</li>
                <li><strong>Logistics:</strong> 12 mins to Trichy Int'l Airport (TRZ) with daily Southeast Asia flights.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#locations" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Site EOI</a>
              </div>
            </div>
          </div>

          <!-- Hub 5: Tirunelveli -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/hyperscale_data_center_1791444139983.jpg" alt="Tirunelveli AI Data Center" loading="lazy" />
              <span class="asset-card-badge">100% Green Energy Compute</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 05 · TIRUNELVELI</div>
              <h3 class="asset-card-title">Tirunelveli AI Hyperscale Data Center</h3>
              <p class="asset-card-desc">
                Dedicated green computing haven powered directly by India's premier wind and solar farms with ultra-low levelized power costs.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Power Specs:</strong> 100+ MW direct green energy wheeling with dedicated 400kV grid lines.</li>
                <li><strong>Cooling &amp; PUE:</strong> Direct-to-chip liquid cooling loops achieving PUE ≤ 1.22.</li>
                <li><strong>Connectivity:</strong> Direct high-speed fiber link to Tuticorin subsea cable landings &amp; port.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#locations" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Power RFP</a>
              </div>
            </div>
          </div>

          <!-- Hub 6: Pondicherry -->
          <div class="asset-showcase-card">
            <div class="asset-card-media">
              <img src="/images/business_hotel_hospitality_1791444176465.jpg" alt="Pondicherry Convention & Resort Hub" loading="lazy" />
              <span class="asset-card-badge">Coastal MICE &amp; Innovation</span>
            </div>
            <div class="asset-card-body">
              <div class="asset-card-cat">HUB 06 · PONDICHERRY</div>
              <h3 class="asset-card-title">Pondicherry Waterfront Convention &amp; Tech</h3>
              <p class="asset-card-desc">
                International MICE summit destination combining waterfront convention facilities, 5-star business hospitality, and AI edge compute.
              </p>
              <ul class="asset-subtypes-list">
                <li><strong>Facilities:</strong> 7,500+ seat plenary convention center &amp; luxury executive suites.</li>
                <li><strong>Regulatory:</strong> Attractive Union Territory single-window fiscal incentives.</li>
                <li><strong>Connectivity:</strong> ECR Coastal Expressway access; 90 mins to Chennai international hubs.</li>
              </ul>
              <div class="asset-card-actions" style="margin-top: 16px; display: flex; gap: 10px;">
                <a href="#locations" class="btn btn-secondary btn-sm">Inspect Hub Specs →</a>
                <a href="#eoi" class="btn btn-primary btn-sm">Submit Site EOI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

if (locSectionStart !== -1 && locSectionEnd !== -1) {
  html = html.substring(0, locSectionStart) + newLocationsGrid + html.substring(locSectionEnd);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with new split mega dropdowns, 7-slide hero carousel, and specification-focused locations!');
