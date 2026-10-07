import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Network, Droplets, Shield, Radio } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import TrustComplianceStrip from '../../components/ui/TrustComplianceStrip';
import WorkloadTabShowcase from '../../components/ui/WorkloadTabShowcase';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { infrastructurePillars } from '../../data/solutionsData';

export default function InfrastructureIndex({ onOpenEoiModal }) {
  const breadcrumbs = [{ label: 'Infrastructure' }];

  return (
    <div className="page-infrastructure">
      <PageHero
        eyebrow="Mission-Critical Engineering"
        title="High-voltage power, carrier neutrality, and"
        titleEmphasis="resilient compute."
        lede="Explore GreenNext's comprehensive digital infrastructure foundations—from dedicated substation utility yards and closed-loop liquid cooling to 24/7 centralized command telemetry."
        breadcrumbs={breadcrumbs}
      />

      <TrustComplianceStrip />

      {/* Sub Navigation */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/infrastructure" className="subpage-nav-link active">Infrastructure Overview</Link>
          <Link to="/infrastructure/power" className="subpage-nav-link">Power Infrastructure</Link>
          <Link to="/infrastructure/connectivity" className="subpage-nav-link">Connectivity &amp; Fiber</Link>
          <Link to="/infrastructure/cooling" className="subpage-nav-link">Cooling &amp; Thermal</Link>
          <Link to="/infrastructure/security" className="subpage-nav-link">Security &amp; Compliance</Link>
          <Link to="/infrastructure/command-control" className="subpage-nav-link">Command NOC/SOC</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> Core Engineering Pillars</span>
            <h2>Foundational pillars of enterprise reliability.</h2>
            <p className="lede">
              Each GreenNext campus is master-planned to provide concurrent maintainability, high thermal dissipation capability, and low-latency digital transit.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {infrastructurePillars.map((p, idx) => (
              <div className="card card-architectural" key={p.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className="cap-num">PILLAR 0{idx + 1}</span>
                  <div className="cap-icon">
                    {idx === 0 && <Zap size={22} />}
                    {idx === 1 && <Network size={22} />}
                    {idx === 2 && <Droplets size={22} />}
                    {idx === 3 && <Shield size={22} />}
                    {idx === 4 && <Radio size={22} />}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>{p.summary}</p>
                <div style={{ marginTop: 'auto' }}>
                  <Link to={`/infrastructure/${p.slug}`} className="btn btn-outline btn-sm btn-arrow">
                    <span>Inspect Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-12)' }}>
            <WorkloadTabShowcase />
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
