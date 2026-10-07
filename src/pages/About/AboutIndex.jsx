import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Award, Leaf, Zap } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';

export default function AboutIndex({ onOpenEoiModal }) {
  const breadcrumbs = [{ label: 'About GreenNext' }];

  return (
    <div className="page-about">
      <PageHero
        eyebrow="01 — Corporate Overview"
        title="Infrastructure designed for the next generation of"
        titleEmphasis="digital growth."
        lede="GreenNext Technologies is a strategic digital infrastructure platform focused on master planning, power curation, and co-developing landmark Data Center, AI/GPU Compute, and Grade-A IT Park campuses across South India."
        breadcrumbs={breadcrumbs}
      />

      {/* Sub-Navigation Bar */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/about" className="subpage-nav-link active">About Overview</Link>
          <Link to="/about/vision-mission" className="subpage-nav-link">Vision &amp; Mission</Link>
          <Link to="/about/leadership" className="subpage-nav-link">Leadership &amp; Team</Link>
          <Link to="/about/capabilities" className="subpage-nav-link">Platform Capabilities</Link>
          <Link to="/about/sustainability" className="subpage-nav-link">Sustainability &amp; ESG</Link>
        </div>
      </div>

      {/* Corporate Philosophy */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div>
              <span className="eyebrow"><span className="dot"></span> Platform Mission</span>
              <h2>Moving beyond traditional commercial real estate.</h2>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--c-evergreen)', marginTop: '16px' }}>
                MASTER PLANNING · CO-DEVELOPMENT · INSTITUTIONAL CAPITAL ALIGNMENT
              </p>
            </div>
            <div>
              <p className="lede" style={{ marginBottom: '20px' }}>
                GreenNext creates interconnected <strong>Technology &amp; Digital Infrastructure Business Districts</strong>. By combining high-density power corridors, dual-grid utility feeds, carrier-neutral telecom backbones, and Global Capability Center (GCC) workspaces, we position Tamil Nadu's secondary economic powerhouses as premier national computing destinations.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '15px' }}>
                Our strategic land platform in Coimbatore and Madurai offers global operators, hyperscalers, and institutional investors ready-to-scale canvases with streamlined statutory frameworks, deep technical talent access, and lower total cost of occupancy.
              </p>
            </div>
          </div>

          {/* Three Core Principles */}
          <div className="principles-grid" style={{ marginTop: 'var(--space-12)' }}>
            <div className="principle-card">
              <div className="principle-num">01 / FOUNDATION</div>
              <div className="principle-title">Infrastructure Scale</div>
              <div className="principle-desc">
                Dedicated power substations, high-voltage dual feeders, battery energy storage systems (BESS), and advanced cooling infrastructure engineered for hyperscale and AI workloads.
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-num">02 / WORKLOADS</div>
              <div className="principle-title">Technology Ecosystem</div>
              <div className="principle-desc">
                Command &amp; Control operations integrating Network Operations (NOC), Security Operations (SOC), Building Operations (BOC), and AI-enabled DCIM predictive management.
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-num">03 / COLLABORATION</div>
              <div className="principle-title">Strategic Partnership</div>
              <div className="principle-desc">
                Institutional development alignment through Joint Ventures (JV), Special Purpose Vehicles (SPV), and tailored commercialization structures with risk mitigation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="section bg-soft border-top">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> Compliance &amp; Governance</span>
            <h2>Statutory rigor and unencumbered land clarity.</h2>
            <p className="lede">
              All parcels under the GreenNext platform undergo comprehensive legal title search, environmental review, and utility alignment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="card">
              <ShieldCheck size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>100% Clear Title Verification</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>All 191+ verified acres carry complete 30-year title diligence reports prepared by leading real estate law practices.</p>
            </div>
            <div className="card">
              <Zap size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Grid Allocation Protocols</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Direct coordination with TANGEDCO for high-voltage dual-feeder substation interconnection feasibility.</p>
            </div>
            <div className="card">
              <Leaf size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Green Energy Wheeling</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Designed to facilitate solar and wind captive power open access agreements for low-carbon compute.</p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
