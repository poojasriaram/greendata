import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Layers } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { solutionsData } from '../../data/solutionsData';
import { projectsList } from '../../data/portfolioData';

export default function SolutionDetail({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const { slug } = useParams();
  const solution = solutionsData.find(s => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const breadcrumbs = [
    { label: 'Solutions', path: '/solutions' },
    { label: solution.title }
  ];

  return (
    <div className="page-solution-detail">
      <PageHero
        eyebrow="Solution Architecture"
        title={solution.title}
        titleEmphasis=""
        lede={solution.subtitle}
        badge={solution.badge}
        breadcrumbs={breadcrumbs}
      />

      {/* Sub Navigation */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          {solutionsData.map((s) => (
            <Link
              key={s.id}
              to={`/solutions/${s.slug}`}
              className={`subpage-nav-link ${s.slug === slug ? 'active' : ''}`}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Engineering Overview</span>
              <h2 style={{ marginBottom: '16px' }}>Architectural Overview &amp; Capabilities</h2>
              <p className="lede" style={{ marginBottom: '20px' }}>
                {solution.summary}
              </p>

              <h4 style={{ fontSize: '1.2rem', marginTop: 'var(--space-6)', marginBottom: '14px', color: 'var(--c-evergreen)' }}>
                Key Technical Features &amp; Infrastructure
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                {solution.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--c-evergreen)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'var(--space-8)' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-arrow"
                  onClick={() => onOpenEoiWithPrefill && onOpenEoiWithPrefill({ devType: solution.id })}
                >
                  <span>Inquire About {solution.title} Development</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Spec Matrix Card */}
            <div>
              <div className="spec-matrix-card">
                <span className="badge badge-evergreen" style={{ marginBottom: '12px' }}>Engineering Standards</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Technical Parameters</h3>
                <div className="spec-table-mini" style={{ marginTop: '16px' }}>
                  {solution.specs.map((sp, idx) => (
                    <div className="spec-row" key={idx}>
                      <span>{sp.label}</span>
                      <strong>{sp.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Campuses */}
              <div className="card" style={{ marginTop: 'var(--space-6)', background: 'var(--c-soft-sage)', borderColor: 'var(--c-evergreen)' }}>
                <span className="text-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--c-evergreen)', textTransform: 'uppercase' }}>
                  READY CANVASES AVAILABLE
                </span>
                <h4 style={{ fontSize: '1.2rem', marginTop: '6px', marginBottom: '8px' }}>
                  Coimbatore Flagship &amp; Madurai ELCOT
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  Contiguous pre-zoned parcels ready for joint-venture development with dedicated substation feeds.
                </p>
                <Link to="/projects" className="btn btn-outline btn-sm btn-arrow">
                  <span>Explore Available Parcels</span>
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
