import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Droplets, Network, Radio } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { infrastructurePillars } from '../../data/solutionsData';

export default function InfrastructureDetail({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const { slug } = useParams();
  const pillar = infrastructurePillars.find(p => p.slug === slug);

  if (!pillar) {
    return <Navigate to="/infrastructure" replace />;
  }

  const breadcrumbs = [
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: pillar.title }
  ];

  return (
    <div className="page-infrastructure-detail">
      <PageHero
        eyebrow="Mission-Critical Pillar"
        title={pillar.title}
        titleEmphasis=""
        lede={pillar.summary}
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          {infrastructurePillars.map((p) => (
            <Link
              key={p.id}
              to={`/infrastructure/${p.slug}`}
              className={`subpage-nav-link ${p.slug === slug ? 'active' : ''}`}
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Technical Overview</span>
              <h2 style={{ marginBottom: '16px' }}>Engineering Specifications &amp; Architecture</h2>
              <p className="lede" style={{ marginBottom: '20px' }}>
                {pillar.summary}
              </p>

              <h4 style={{ fontSize: '1.2rem', marginTop: 'var(--space-6)', marginBottom: '14px', color: 'var(--c-evergreen)' }}>
                Performance Metrics &amp; Redundancy
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                {pillar.metrics.map((metric, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--c-evergreen)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'var(--space-8)' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-arrow"
                  onClick={onOpenEoiModal}
                >
                  <span>Request Technical Interconnect Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div>
              <div className="card" style={{ background: 'var(--c-warm-offwhite)', border: '1px solid var(--c-border-medium)' }}>
                <span className="badge badge-evergreen" style={{ marginBottom: '10px' }}>Grid Integrity</span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>High-Voltage Feasibility</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
                  Dual-source 110kV/230kV feeds direct from TANGEDCO substations with fast-start backup generation and battery storage (BESS).
                </p>
                <Link to="/projects" className="btn btn-outline btn-sm btn-arrow">
                  <span>View Connected Campuses</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
