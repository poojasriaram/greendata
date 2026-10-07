import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { industriesData } from '../../data/industriesData';

export default function IndustryDetail({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const { slug } = useParams();
  const industry = industriesData.find(i => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const breadcrumbs = [
    { label: 'Industries', path: '/industries' },
    { label: industry.title }
  ];

  return (
    <div className="page-industry-detail">
      <PageHero
        eyebrow="Industry Specific Solution"
        title={industry.title}
        titleEmphasis=""
        lede={industry.tagline}
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/industries" className="subpage-nav-link">All Industries</Link>
          {industriesData.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.slug}`}
              className={`subpage-nav-link ${ind.slug === slug ? 'active' : ''}`}
            >
              {ind.title}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Requirement &amp; Architecture</span>
              <h2>Enterprise Requirements &amp; Dedicated Solution</h2>

              <div className="industry-flow-box" style={{ marginTop: '20px' }}>
                <strong>CRITICAL REQUIREMENT:</strong>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-secondary)' }}>{industry.requirement}</p>
              </div>

              <div className="industry-flow-box" style={{ background: 'var(--c-soft-sage)' }}>
                <strong>GREENNEXT INFRASTRUCTURE SOLUTION:</strong>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--c-evergreen)', fontWeight: 500 }}>{industry.solution}</p>
              </div>

              <h4 style={{ fontSize: '1.2rem', marginTop: 'var(--space-6)', marginBottom: '14px', color: 'var(--c-evergreen)' }}>
                Target Capabilities &amp; SLA Controls
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                {industry.keyFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--c-evergreen)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Matching Projects */}
            <div>
              <div className="card card-architectural" style={{ background: 'var(--c-warm-offwhite)' }}>
                <span className="badge badge-evergreen" style={{ marginBottom: '10px' }}>Recommended Campuses</span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Optimal Project Locations</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  The following GreenNext development parcels are tailored to support {industry.title} deployments:
                </p>

                <div style={{ display: 'grid', gap: '8px', marginBottom: '20px' }}>
                  {industry.matchingProjects.map((proj, pIdx) => (
                    <div key={pIdx} style={{ background: 'var(--c-paper-surface)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border-light)', fontSize: '13.5px', fontWeight: 600, color: 'var(--c-evergreen)' }}>
                      • {proj}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block btn-arrow"
                  onClick={() => onOpenEoiWithPrefill && onOpenEoiWithPrefill({ devType: industry.id })}
                >
                  <span>Inquire for {industry.title}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
