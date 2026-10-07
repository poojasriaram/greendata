import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Zap, ShieldCheck, Layers, FileText } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import CampusHotspotExplorer from '../../components/ui/CampusHotspotExplorer';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { projectsList } from '../../data/portfolioData';

export default function ProjectDetail({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const { slug } = useParams();
  const project = projectsList.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const breadcrumbs = [
    { label: 'Projects', path: '/projects' },
    { label: project.name }
  ];

  return (
    <div className="page-project-detail">
      <PageHero
        eyebrow={`${project.cluster} · ${project.totalAcres} Acres`}
        title={project.name}
        titleEmphasis=""
        lede={project.tagline}
        badge={project.status}
        breadcrumbs={breadcrumbs}
      />

      {/* Sub Navigation */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/projects" className="subpage-nav-link">All Projects</Link>
          {projectsList.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className={`subpage-nav-link ${p.slug === slug ? 'active' : ''}`}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Project Overview</span>
              <h2>Strategic Location &amp; Campus Parameters</h2>
              <p className="lede" style={{ margin: '14px 0 20px' }}>
                {project.desc || project.tagline}
              </p>

              {/* Zones or Parcels Breakdown */}
              {project.zones && (
                <div style={{ marginTop: 'var(--space-6)', display: 'grid', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--c-evergreen)' }}>Campus Zoning Architecture</h3>
                  {project.zones.map((zone, zIdx) => (
                    <div className="card" key={zIdx} style={{ background: 'var(--c-paper-surface)' }}>
                      <span className="badge badge-evergreen" style={{ marginBottom: '8px' }}>{zone.name}</span>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{zone.desc}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
                        {zone.specs.map((sp, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                            <CheckCircle size={14} style={{ color: 'var(--c-evergreen)', flexShrink: 0 }} />
                            <span>{sp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {project.parcels && (
                <div style={{ marginTop: 'var(--space-6)', display: 'grid', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--c-evergreen)' }}>Modular Parcels Breakdown</h3>
                  {project.parcels.map((parcel, pIdx) => (
                    <div className="card" key={pIdx} style={{ background: 'var(--c-paper-surface)' }}>
                      <span className="badge badge-evergreen" style={{ marginBottom: '8px' }}>{parcel.name} ({parcel.acres} AC)</span>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{parcel.desc}</p>
                      <span className="text-mono" style={{ fontSize: '12px', color: 'var(--c-evergreen)', fontWeight: 600 }}>{parcel.power}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <h4 style={{ fontSize: '1.2rem', marginTop: 'var(--space-6)', marginBottom: '12px', color: 'var(--c-evergreen)' }}>
                Key Development Advantages
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                {project.highlights.map((hl, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--c-evergreen)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Action & Spec Matrix */}
            <div>
              <div className="card card-architectural" style={{ background: 'var(--c-warm-offwhite)', padding: 'var(--space-6)' }}>
                <span className="badge badge-evergreen" style={{ marginBottom: '10px' }}>EOI REF: DC-ITP-TN/JV/2026/001</span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Development Co-Investment</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Open for operator co-development, joint venture SPV structuring, and institutional capital co-investment.
                </p>

                <div style={{ display: 'grid', gap: '10px', marginBottom: '18px' }}>
                  <div style={{ background: 'var(--c-paper-surface)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border-light)' }}>
                    <strong style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--c-evergreen)', display: 'block' }}>TOTAL SCALE</strong>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{project.totalAcres} Verified Acres</span>
                  </div>
                  <div style={{ background: 'var(--c-paper-surface)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border-light)' }}>
                    <strong style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--c-evergreen)', display: 'block' }}>TITLE STATUS</strong>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>100% Clear Title Diligence</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block btn-arrow"
                  onClick={() => onOpenEoiWithPrefill && onOpenEoiWithPrefill({ location: `${project.name} (${project.totalAcres} AC)` })}
                >
                  <span>Submit EOI for {project.name}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* If Coimbatore, show interactive hotspot explorer */}
          {project.id === 'coimbatore' && (
            <div style={{ marginTop: 'var(--space-12)' }}>
              <CampusHotspotExplorer />
            </div>
          )}
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
