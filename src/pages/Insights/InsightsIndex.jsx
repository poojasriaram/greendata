import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Cpu, MapPin, ArrowRight, Download, Calendar, Clock, FileText } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import Breadcrumb from '../../components/layout/Breadcrumb';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { marketOutlookData } from '../../data/industriesData';

export default function InsightsIndex() {
  return (
    <div className="page-insights-index">
      <PageHero
        badge="RESEARCH & PERSPECTIVES"
        title="Institutional Insights & Market Research"
        tagline="Strategic analyses, power density forecasts, and regional digital infrastructure papers shaping South India's computing horizon."
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Insights & Research' }
        ]}
      />

      <div className="gn-container" style={{ padding: '60px 24px' }}>
        {/* Macro Forecast Infographic Strip */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16,34,51,0.95), rgba(7,16,25,0.98))',
          borderRadius: '16px',
          border: '1px solid rgba(0,229,153,0.3)',
          padding: '40px',
          marginBottom: '60px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#00e599', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
              NATIONAL COMPUTING THESIS
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '8px' }}>
              India Data Center Growth Trajectory (2030 – 2047)
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '8px auto 0' }}>
              Long-range capacity forecasts underpinning GreenNext's strategic land positioning and high-voltage grid allocations in Tamil Nadu.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {marketOutlookData.benchmarks.map((bm, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ color: '#00e599', fontSize: '1.75rem', fontWeight: 900 }}>{bm.year}</span>
                    <span style={{ background: 'rgba(0,229,153,0.1)', color: '#00e599', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {bm.range}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px', fontWeight: 700 }}>{bm.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.6' }}>{bm.description}</p>
                </div>
                {bm.investment && (
                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}>
                    Investment: {bm.investment}
                  </div>
                )}
                {bm.powerDemand && (
                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}>
                    Power Demand: {bm.powerDemand}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div>
              <span style={{ color: '#00e599', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
                PUBLICATIONS & BRIEFS
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
                Featured Research Papers & Industry Dossiers
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {marketOutlookData.insightsList.map((item) => (
              <article key={item.id} style={{
                background: 'rgba(16, 34, 51, 0.6)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ color: '#00e599', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                      {item.category}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {item.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: '1.4', marginBottom: '14px' }}>
                    <Link to={`/insights/${item.slug}`} style={{ color: '#fff', textDecoration: 'none' }}>
                      {item.title}
                    </Link>
                  </h3>

                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {item.summary}
                  </p>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={14} color="#00e599" /> {item.date}
                  </span>
                  <Link
                    to={`/insights/${item.slug}`}
                    style={{
                      color: '#00e599',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reports & Downloads Area */}
        <div style={{
          background: 'rgba(0,229,153,0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(0,229,153,0.2)',
          padding: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <span style={{ color: '#00e599', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              OFFICIAL RESEARCH BRIEFING
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
              Download GreenNext Strategic Land & Power Portfolio Dossier (2026 Edition)
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '4px', maxWidth: '650px' }}>
              Comprehensive technical metrics, parcel breakdown across 191+ acres in Coimbatore and Madurai, single-line diagrams, and statutory roadmaps.
            </p>
          </div>
          <Link
            to="/eoi"
            className="gn-btn gn-btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={16} /> Request Institutional Dossier
          </Link>
        </div>
      </div>

      <ConversionCtaBanner />
    </div>
  );
}
