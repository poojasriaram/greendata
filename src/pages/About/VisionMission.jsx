import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';

export default function VisionMission({ onOpenEoiModal }) {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Vision & Mission' }
  ];

  return (
    <div className="page-vision">
      <PageHero
        eyebrow="Corporate Purpose"
        title="Anchoring India's sovereign digital growth in"
        titleEmphasis="South India."
        lede="Our long-term ambition is to position Tamil Nadu as the most resilient, cost-competitive, and sustainable computing corridor in Asia."
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/about" className="subpage-nav-link">About Overview</Link>
          <Link to="/about/vision-mission" className="subpage-nav-link active">Vision &amp; Mission</Link>
          <Link to="/about/leadership" className="subpage-nav-link">Leadership &amp; Team</Link>
          <Link to="/about/capabilities" className="subpage-nav-link">Platform Capabilities</Link>
          <Link to="/about/sustainability" className="subpage-nav-link">Sustainability &amp; ESG</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>
            <div className="card card-architectural" style={{ padding: 'var(--space-8)' }}>
              <span className="cap-num">OUR VISION</span>
              <h3 style={{ fontSize: '1.6rem', margin: '12px 0 16px', color: 'var(--c-evergreen)' }}>
                The Sovereign Digital Corridor
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>
                To create world-class, multi-gigawatt digital infrastructure campuses across South India that empower hyperscalers, artificial intelligence pioneers, and multinational enterprises with reliable power, carrier neutrality, and ultra-high uptime.
              </p>
            </div>

            <div className="card card-architectural" style={{ padding: 'var(--space-8)' }}>
              <span className="cap-num">OUR MISSION</span>
              <h3 style={{ fontSize: '1.6rem', margin: '12px 0 16px', color: 'var(--c-evergreen)' }}>
                Integrated Infrastructure Delivery
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>
                To de-risk digital infrastructure development through rigorous master planning, proactive high-voltage substation integration, verified unencumbered land banks, and institutional co-development partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
