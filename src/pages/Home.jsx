import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Cpu, Building2, Network, ShieldCheck, Layers, CheckCircle, Zap, TrendingUp, Users } from 'lucide-react';
import InteractiveTopologyCanvas from '../components/ui/InteractiveTopologyCanvas';
import TrustComplianceStrip from '../components/ui/TrustComplianceStrip';
import ProportionalLedger from '../components/ui/ProportionalLedger';
import SiteCapacityMatcher from '../components/ui/SiteCapacityMatcher';
import WorkloadTabShowcase from '../components/ui/WorkloadTabShowcase';
import CampusHotspotExplorer from '../components/ui/CampusHotspotExplorer';
import ConversionCtaBanner from '../components/ui/ConversionCtaBanner';
import { solutionsData } from '../data/solutionsData';
import { projectsList } from '../data/portfolioData';
import { industriesData, marketOutlookData } from '../data/industriesData';
import { partnerCategories } from '../data/partnersData';

export default function Home({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  return (
    <div className="page-home">
      {/* 01. Hero Section */}
      <section className="section-hero hero-section" id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="dot"></span>
                <span>Strategic Digital Infrastructure Development · Tamil Nadu, India</span>
              </div>
              <h1 className="hero-title">
                Building the infrastructure behind South India's <em>next digital economy</em>.
              </h1>
              <p className="lede hero-lede">
                GreenNext Technologies develops strategic, scalable digital infrastructure opportunities spanning hyperscale data center campuses, AI/GPU facilities, Grade-A IT parks, and connected technology ecosystems across Coimbatore and Madurai.
              </p>
              <div className="hero-actions">
                <Link to="/infrastructure" className="btn btn-primary btn-lg btn-arrow">
                  <span>Explore Infrastructure</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/partners" className="btn btn-secondary btn-lg">
                  Partner With GreenNext
                </Link>
                <button
                  type="button"
                  className="btn btn-quiet"
                  onClick={onOpenEoiModal}
                  style={{ marginLeft: '8px' }}
                >
                  Request EOI Document →
                </button>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--c-muted-grey)', fontFamily: 'var(--font-mono)', marginTop: '16px' }}>
                EOI Reference: DC-ITP-TN/JV/2026/001 · Institutional JV &amp; SPV Opportunities
              </p>
            </div>

            {/* Right Topology Canvas */}
            <InteractiveTopologyCanvas />
          </div>
        </div>
      </section>

      {/* 02. Trust & Scale Statistics */}
      <section className="stats-strip" aria-label="Key Portfolio Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-strip-item">
              <span className="stat-strip-val">6+</span>
              <span className="stat-strip-lbl">Strategic Locations</span>
              <span className="stat-strip-sub">Flagship campuses &amp; prime growth corridors</span>
            </div>
            <div className="stat-strip-item">
              <span className="stat-strip-val">200+</span>
              <span className="stat-strip-lbl">Portfolio Acres</span>
              <span className="stat-strip-sub">191+ ac verified parcels with modular expansion</span>
            </div>
            <div className="stat-strip-item">
              <span className="stat-strip-val">2</span>
              <span className="stat-strip-lbl">Primary Development Clusters</span>
              <span className="stat-strip-sub">Coimbatore (98 AC) &amp; Madurai (93 AC)</span>
            </div>
            <div className="stat-strip-item">
              <span className="stat-strip-val" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>Data Center + IT</span>
              <span className="stat-strip-lbl">Integrated Infrastructure</span>
              <span className="stat-strip-sub">AI/GPU, Hyperscale, GCC &amp; NOC/SOC Ecosystem</span>
            </div>
          </div>
        </div>
      </section>

      <TrustComplianceStrip />

      {/* 03. What We Build (6 Solution Cards) */}
      <section className="section bg-soft border-top" id="solutions-overview">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> 01 — Core Solutions</span>
            <h2>Infrastructure built around the workloads of tomorrow.</h2>
            <p className="lede">
              Engineered to accommodate enterprise compute today, scale into high-density accelerated computing tomorrow, and support sovereign digital infrastructure across India.
            </p>
          </div>

          <div className="capabilities-grid">
            {solutionsData.map((sol, idx) => (
              <div className="card capability-card card-architectural" key={sol.id}>
                <div>
                  <div className="cap-top">
                    <span className="cap-num">0{idx + 1} / {sol.badge.toUpperCase()}</span>
                    <div className="cap-icon">
                      {idx === 0 && <Server size={22} />}
                      {idx === 1 && <Cpu size={22} />}
                      {idx === 2 && <Building2 size={22} />}
                      {idx === 3 && <Network size={22} />}
                      {idx === 4 && <ShieldCheck size={22} />}
                      {idx === 5 && <Layers size={22} />}
                    </div>
                  </div>
                  <div className="cap-body">
                    <h3>{sol.title}</h3>
                    <p>{sol.summary}</p>
                  </div>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <Link to={`/solutions/${sol.slug}`} className="btn btn-outline btn-sm btn-arrow">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Workload Showcase */}
          <WorkloadTabShowcase />
        </div>
      </section>

      {/* 04. Why GreenNext (Strategic Advantages) */}
      <section className="section border-top" id="why-greennext">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span class="dot"></span> 02 — Platform Advantages</span>
            <h2>Why global operators &amp; investors partner with GreenNext.</h2>
            <p className="lede">
              Tamil Nadu is India's leading industrial and export state, backed by reliable power grids, robust telecom connectivity, and deep engineering university talent.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>Dedicated Power Substations</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Direct connectivity to TANGEDCO dual 110/230kV grid feeds, on-site step-down transformers, and BESS battery integration ensuring continuous N+1 / 2N concurrent maintainability.
              </p>
            </div>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>Carrier-Neutral Interconnects</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Diverse dark fiber entry routes with dual Meet-Me Rooms (MMRs) connecting seamlessly to Chennai subsea cable landings and national Internet Exchanges.
              </p>
            </div>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>100% Clear Title Landholdings</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                191+ acres of contiguous, verified land parcels across Coimbatore and Madurai with complete statutory diligence and single-window clearances.
              </p>
            </div>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>Deep Engineering Talent Pool</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Over 150,000 engineering and polytechnic graduates annually across Coimbatore and Madurai educational belts, ensuring high workforce retention at competitive operational costs.
              </p>
            </div>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>Flexible JV / SPV Co-Development</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Customized joint-venture structures, turnkey EPC delivery, long-term concession models, and institutional equity alignment designed to minimize execution risk.
              </p>
            </div>
            <div className="card card-architectural">
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>Superior Total Cost of Occupancy</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Significantly lower land and operational overhead compared to saturated Tier-1 metros, delivering superior risk-adjusted internal rates of return (IRR).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Featured Projects & Interactive Land Ledger */}
      <section className="section bg-soft border-top" id="featured-projects">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: 'var(--space-6)' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> 03 — Land Platform</span>
              <h2>Strategic Portfolio &amp; Featured Projects</h2>
              <p className="lede">
                Contiguous, high-density development parcels mapped across Tamil Nadu's prime industrial corridors.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-arrow">
              <span>View All 6 Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <ProportionalLedger />

          <div style={{ marginTop: 'var(--space-10)' }}>
            <SiteCapacityMatcher onOpenEoiWithPrefill={onOpenEoiWithPrefill} />
          </div>

          <CampusHotspotExplorer />
        </div>
      </section>

      {/* 06. Industries Served */}
      <section className="section border-top" id="industries">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> 04 — Industries</span>
            <h2>Engineered for mission-critical industry demands.</h2>
            <p className="lede">
              From global cloud operators to regional smart manufacturing, GreenNext provides purpose-built infrastructure tailored to specific industry verticals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {industriesData.slice(0, 4).map((ind) => (
              <div className="card industry-card" key={ind.id}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px', color: 'var(--c-evergreen)' }}>{ind.title}</h4>
                <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--c-muted-grey)', marginBottom: '12px' }}>{ind.tagline}</p>
                <div className="industry-flow-box">
                  <strong>REQUIREMENT:</strong>
                  <span>{ind.requirement}</span>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <Link to={`/industries/${ind.slug}`} className="btn btn-outline btn-sm btn-arrow">
                    <span>Explore Industry Solution</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/industries" className="btn btn-secondary">
              View All 7 Industry Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* 07. Market Opportunity (Compressed Thesis) */}
      <section className="section-dark" id="market-opportunity">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="badge badge-mint" style={{ marginBottom: '12px' }}>MACRO OUTLOOK</span>
            <h2 style={{ color: 'var(--c-dark-text-primary)' }}>India's Data Center Capacity Expansion (2030–2047)</h2>
            <p style={{ color: 'var(--c-dark-text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
              India is poised to transition from 4GW in 2030 to ~13.8GW ($71.6B direct spend) by 2035 and ~65GW (394 TWh) by 2047, driving demand into secondary growth hubs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {marketOutlookData.benchmarks.map((b, idx) => (
              <div className="card" style={{ background: 'var(--c-dark-card)', borderColor: 'var(--c-dark-border)', color: 'var(--c-dark-text-primary)' }} key={idx}>
                <span className="text-mono" style={{ fontSize: '13px', color: 'var(--c-accent-mint)', fontWeight: 700 }}>{b.year} HORIZON</span>
                <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: '8px 0 4px' }}>{b.range}</h3>
                <p style={{ color: 'var(--c-accent-mint)', fontSize: '12.5px', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>{b.investment || b.powerDemand || b.title}</p>
                <p style={{ color: 'var(--c-dark-text-secondary)', fontSize: '13.5px', lineHeight: 1.5 }}>{b.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/insights/market-outlook" className="btn btn-accent btn-arrow">
              <span>Read Full Market Research Report</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 08. Strategic Partnerships */}
      <section className="section border-top" id="partnerships">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> 05 — Collaboration</span>
            <h2>Tailored participation models for institutional partners.</h2>
            <p className="lede">
              GreenNext collaborates across seven distinct partnership verticals to co-create scalable digital infrastructure campuses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
            {partnerCategories.slice(0, 6).map((cat) => (
              <div className="partner-card" key={cat.id}>
                <div>
                  <div className="partner-type">{cat.title}</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>{cat.scope}</p>
                </div>
                <Link to="/partners" className="btn btn-outline btn-sm btn-arrow">
                  <span>{cat.ctaText}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. Latest Insights */}
      <section className="section bg-soft border-top" id="insights">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: 'var(--space-6)' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> 06 — Intelligence</span>
              <h2>Latest Infrastructure Insights</h2>
            </div>
            <Link to="/insights" className="btn btn-secondary btn-arrow">
              <span>View All Research</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="insights-grid">
            {marketOutlookData.insightsList.map((ins) => (
              <div className="card insight-card" key={ins.id}>
                <div className="insight-meta">
                  <span>{ins.category}</span>
                  <span className="badge badge-evergreen">{ins.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{ins.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>{ins.summary}</p>
                <Link to={`/insights/${ins.slug}`} className="text-mono" style={{ fontSize: '12px', color: 'var(--c-evergreen)', fontWeight: 600, marginTop: 'auto', textDecoration: 'none' }}>
                  Read Intelligence Dossier →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Conversion CTA Banner */}
      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
