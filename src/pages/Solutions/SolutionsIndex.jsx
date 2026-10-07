import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Cpu, Building2, Network, ShieldCheck, Layers } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import WorkloadTabShowcase from '../../components/ui/WorkloadTabShowcase';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { solutionsData } from '../../data/solutionsData';

export default function SolutionsIndex({ onOpenEoiModal }) {
  const breadcrumbs = [{ label: 'Solutions' }];

  return (
    <div className="page-solutions">
      <PageHero
        eyebrow="Development Solutions"
        title="Purpose-built infrastructure for tomorrow's"
        titleEmphasis="workloads."
        lede="From hyperscale data center campuses and high-density AI clusters to high-rise IT parks and ultra-low latency edge nodes, GreenNext develops comprehensive digital infrastructure."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container">
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
                    <span>Inspect Solution &amp; Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Tabbed Architecture */}
          <div style={{ marginTop: 'var(--space-12)' }}>
            <WorkloadTabShowcase />
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
