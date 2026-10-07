import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Cpu, Building2, Network, ShieldCheck } from 'lucide-react';
import { solutionsData } from '../../data/solutionsData';

export default function WorkloadTabShowcase() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);

  const activeSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];

  return (
    <div className="workload-showcase-container">
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-6)' }}>
        <span className="badge badge-evergreen" style={{ marginBottom: '8px' }}>Technical Benchmarks</span>
        <h3 style={{ fontSize: '1.6rem' }}>Detailed Workload Engineering Standards</h3>
        <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>Select a digital workload to inspect technical specifications, cooling models, power densities, and compliance ratings.</p>
      </div>

      <div className="workload-tabs-header" role="tablist" aria-label="Workload Architecture Tabs">
        {solutionsData.map((sol) => (
          <button
            key={sol.id}
            className={`workload-tab-btn ${activeTab === sol.id ? 'active' : ''}`}
            onClick={() => setActiveTab(sol.id)}
            role="tab"
            aria-selected={activeTab === sol.id}
          >
            {sol.title}
          </button>
        ))}
      </div>

      <div className="workload-tab-content">
        <div className="workload-panel active">
          <div className="workload-panel-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-mint">{activeSolution.badge}</span>
              </div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--c-evergreen)', marginBottom: '8px' }}>
                {activeSolution.title}
              </h4>
              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                {activeSolution.summary}
              </p>

              <div style={{ marginTop: '20px' }}>
                <Link to={`/solutions/${activeSolution.slug}`} className="btn btn-primary btn-sm btn-arrow">
                  <span>View Dedicated Solution Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div>
              <div className="spec-table-mini">
                {activeSolution.specs.map((sp, idx) => (
                  <div className="spec-row" key={idx}>
                    <span>{sp.label}</span>
                    <strong>{sp.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
