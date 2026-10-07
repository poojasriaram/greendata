import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsList } from '../../data/portfolioData';

export default function ProportionalLedger() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.clusterId === activeFilter);

  return (
    <div className="ledger-box" aria-label="Proportional Land Ledger Visualizer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--c-border-light)', paddingBottom: 'var(--space-3)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-muted-grey)' }}>
          PARCEL LEDGER · PROPORTIONAL SCALE (0 TO 50 ACRE MEASURE)
        </span>
        
        {/* Cluster Filter Buttons */}
        <div className="filter-tabs" role="tablist" aria-label="Cluster Filter">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Parcels (191+ AC)
          </button>
          <button
            className={`filter-tab ${activeFilter === 'coimbatore' ? 'active' : ''}`}
            onClick={() => setActiveFilter('coimbatore')}
          >
            Coimbatore (98 AC)
          </button>
          <button
            className={`filter-tab ${activeFilter === 'madurai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('madurai')}
          >
            Madurai (93 AC)
          </button>
        </div>
      </div>

      {/* Ledger Rows */}
      <div style={{ display: 'grid', gap: '14px' }}>
        {filteredProjects.map((project) => {
          const widthPct = Math.min(100, Math.max(12, (project.totalAcres / 50) * 100));

          return (
            <div className="ledger-row" key={project.id}>
              <div className="ledger-meta">
                <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4>{project.name}</h4>
                </Link>
                <span>{project.totalAcres} AC · {project.cluster}</span>
              </div>
              <div className="ledger-bar-container">
                <div
                  className={`ledger-segment ${project.id.includes('madurai') || project.id === 'coimbatore' ? 'seg-datacenter' : 'seg-mixed'}`}
                  style={{ width: `${widthPct}%` }}
                  title={`${project.name}: ${project.totalAcres} Acres`}
                >
                  {project.totalAcres} AC · {project.status.toUpperCase()}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-muted-grey)', display: 'flex', justifyContent: 'space-between' }}>
        <span>Scale Baseline · 0 Acres</span>
        <span>25 Acres</span>
        <span>50 Acres (Max Single Contiguous Canvas)</span>
      </div>
    </div>
  );
}
