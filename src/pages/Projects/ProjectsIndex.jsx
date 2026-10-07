import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, CheckCircle } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ProportionalLedger from '../../components/ui/ProportionalLedger';
import SiteCapacityMatcher from '../../components/ui/SiteCapacityMatcher';
import CampusHotspotExplorer from '../../components/ui/CampusHotspotExplorer';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { projectsList, portfolioSummary } from '../../data/portfolioData';

export default function ProjectsIndex({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const breadcrumbs = [{ label: 'Projects & Land Portfolio' }];

  return (
    <div className="page-projects">
      <PageHero
        eyebrow="191+ Verified Acres"
        title="Contiguous land parcels mapped across"
        titleEmphasis="Tamil Nadu."
        lede="Strategic, high-density development campuses across Coimbatore and Madurai offering unencumbered titles, dedicated power substation feeds, and modular multi-phase expansion."
        breadcrumbs={breadcrumbs}
      />

      {/* Sub Navigation */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/projects" className="subpage-nav-link active">All Projects (191+ AC)</Link>
          {projectsList.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`} className="subpage-nav-link">
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Proportional Ledger Visualizer */}
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <ProportionalLedger />
          </div>

          {/* Project Cards Grid */}
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> Strategic Development Sites</span>
            <h2>Six Landmark Development Campuses</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {projectsList.map((project) => (
              <div className="card card-architectural" key={project.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span className="badge badge-evergreen">{project.cluster}</span>
                  <span className="text-mono" style={{ fontWeight: 700, color: 'var(--c-evergreen)', fontSize: '13px' }}>{project.totalAcres} Acres</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>{project.name}</h3>
                <p style={{ fontStyle: 'italic', fontSize: '13.5px', color: 'var(--c-muted-grey)', marginBottom: '14px' }}>
                  {project.tagline}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to={`/projects/${project.slug}`} className="btn btn-outline btn-sm btn-arrow">
                    <span>Inspect Campus Dossier</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Capacity Matcher & Hotspot Tool */}
          <div style={{ marginTop: 'var(--space-12)' }}>
            <SiteCapacityMatcher onOpenEoiWithPrefill={onOpenEoiWithPrefill} />
          </div>

          <CampusHotspotExplorer />
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
