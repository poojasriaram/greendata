import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, ShieldCheck, Zap } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { partnerCategories, partnershipProcess } from '../../data/partnersData';

export default function PartnersIndex({ onOpenEoiModal, onOpenEoiWithPrefill }) {
  const breadcrumbs = [{ label: 'Partners & Collaboration' }];

  return (
    <div className="page-partners">
      <PageHero
        eyebrow="Institutional Collaboration"
        title="Structured partnership models for"
        titleEmphasis="co-development."
        lede="GreenNext partners with global data center operators, IT park developers, EPC firms, power & telecom providers, and institutional capital to execute landmark digital infrastructure."
        breadcrumbs={breadcrumbs}
      />

      {/* Partner Profiles */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> Partner Profiles</span>
            <h2>Seven Targeted Collaboration Verticals</h2>
            <p className="lede">
              Each engagement is structured to leverage partner strengths while GreenNext provides land assembly, power curation, master planning, and local statutory execution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {partnerCategories.map((cat) => (
              <div className="card partner-card" key={cat.id}>
                <div>
                  <div className="partner-type">{cat.title}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '10px 0 14px' }}>
                    {cat.scope}
                  </p>

                  <h5 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--c-evergreen)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Collaboration Benefits:
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '6px', marginBottom: '16px' }}>
                    {cat.benefits.map((b, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--c-evergreen)', flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm btn-arrow"
                    onClick={() => onOpenEoiWithPrefill && onOpenEoiWithPrefill({ orgType: cat.title })}
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 6-Stage Process */}
          <div style={{ marginTop: 'var(--space-12)', background: 'var(--c-paper-surface)', border: '1px solid var(--c-border-light)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)' }}>
            <span className="eyebrow"><span className="dot"></span> Execution Roadmap</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-6)' }}>6-Stage Structured Collaboration Process</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px' }}>
              {partnershipProcess.map((step) => (
                <div key={step.step} style={{ borderLeft: '2px solid var(--c-evergreen)', paddingLeft: '14px' }}>
                  <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-evergreen)', display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                    {step.step} / {step.title}
                  </strong>
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
