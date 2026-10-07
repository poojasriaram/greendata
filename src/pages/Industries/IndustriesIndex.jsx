import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Cpu, Building, Briefcase, Factory, Activity, Radio } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { industriesData } from '../../data/industriesData';

export default function IndustriesIndex({ onOpenEoiModal }) {
  const breadcrumbs = [{ label: 'Industries' }];

  return (
    <div className="page-industries">
      <PageHero
        eyebrow="Industry Solutions"
        title="Custom digital infrastructure tailored to"
        titleEmphasis="industry demand."
        lede="GreenNext connects specialized enterprise requirements—from extreme GPU thermal density and sovereign cloud regulations to low-latency edge manufacturing—with purpose-built infrastructure."
        breadcrumbs={breadcrumbs}
      />

      {/* Sub Navigation */}
      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/industries" className="subpage-nav-link active">All Industries</Link>
          {industriesData.map((ind) => (
            <Link key={ind.id} to={`/industries/${ind.slug}`} className="subpage-nav-link">
              {ind.title}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="industry-flow-grid">
            {industriesData.map((ind, idx) => (
              <div className="industry-card" key={ind.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-mint">INDUSTRY 0{idx + 1}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '4px', color: 'var(--c-evergreen)' }}>{ind.title}</h3>
                <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--c-muted-grey)', marginBottom: '12px' }}>{ind.tagline}</p>

                <div className="industry-flow-box">
                  <strong>INDUSTRY CHALLENGE:</strong>
                  <span>{ind.requirement}</span>
                </div>

                <div className="industry-flow-box" style={{ background: 'var(--c-soft-sage)' }}>
                  <strong>GREENNEXT INFRASTRUCTURE SOLUTION:</strong>
                  <span>{ind.solution}</span>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
                  <Link to={`/industries/${ind.slug}`} className="btn btn-outline btn-sm btn-arrow">
                    <span>Inspect Full Industry Case</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
