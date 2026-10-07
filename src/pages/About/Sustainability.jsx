import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { Leaf, Droplets, Sun, Wind, BatteryCharging, Shield } from 'lucide-react';

export default function Sustainability({ onOpenEoiModal }) {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Sustainability & ESG' }
  ];

  return (
    <div className="page-sustainability">
      <PageHero
        eyebrow="Environmental Stewardship"
        title="Engineering low-carbon infrastructure for"
        titleEmphasis="sustainable compute."
        lede="GreenNext integrates clean power wheeling, closed-loop water management, and high-efficiency thermal architecture to meet global net-zero commitments."
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/about" className="subpage-nav-link">About Overview</Link>
          <Link to="/about/vision-mission" className="subpage-nav-link">Vision &amp; Mission</Link>
          <Link to="/about/leadership" className="subpage-nav-link">Leadership &amp; Team</Link>
          <Link to="/about/capabilities" className="subpage-nav-link">Platform Capabilities</Link>
          <Link to="/about/sustainability" className="subpage-nav-link active">Sustainability &amp; ESG</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="card">
              <Sun size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Renewable Power Wheeling</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Facilitating dedicated solar and wind open-access corridors through Tamil Nadu's high-capacity renewable energy transmission grid.</p>
            </div>

            <div className="card">
              <Droplets size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Zero Liquid Discharge (ZLD)</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>On-site Sewage Treatment Plants (STP) and closed-loop chilled water loops ensuring 100% water recovery and zero municipal wastewater disposal.</p>
            </div>

            <div className="card">
              <BatteryCharging size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>BESS Battery Integration</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Advanced grid-scale battery energy storage systems (BESS) for peak shaving, instantaneous frequency regulation, and reducing generator runtime.</p>
            </div>

            <div className="card">
              <Leaf size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>IGBC / LEED Platinum Readiness</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Master planning conforming to international green building rating systems for energy conservation, IAQ, and low-embodied carbon construction.</p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
