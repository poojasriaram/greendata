import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { ShieldCheck, Zap, HardHat, FileText, Layers, TrendingUp } from 'lucide-react';

export default function Capabilities({ onOpenEoiModal }) {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Core Capabilities' }
  ];

  const caps = [
    {
      title: 'Land Assembly & Master Planning',
      desc: 'Identifying, surveying, and securing contiguous 8 to 50+ acre canvases mapped directly to high-voltage power transmission routes and state IT corridors.',
      icon: Layers
    },
    {
      title: 'High-Voltage Power Curation',
      desc: 'Engineering dedicated substation yards, dual 110/230kV utility grid connections from TANGEDCO, and Battery Energy Storage Systems (BESS).',
      icon: Zap
    },
    {
      title: 'Statutory Clearances & Single-Window Approvals',
      desc: 'Streamlining building plan approvals, environmental sanctions, ELCOT SEZ integration, and multi-department statutory compliances.',
      icon: ShieldCheck
    },
    {
      title: 'Joint Venture & SPV Structuring',
      desc: 'Creating bankable, risk-mitigated corporate frameworks tailored to institutional developers, global hyperscalers, and infrastructure funds.',
      icon: FileText
    },
    {
      title: 'Turnkey EPC Program Management',
      desc: 'Overseeing design-build execution across structural civil works, electrical switchyards, Direct Liquid Cooling loops, and 24/7 command centers.',
      icon: HardHat
    },
    {
      title: 'Asset Monetization & Commercialization',
      desc: 'Connecting development whitespace with Global Capability Centers (GCCs), cloud operators, and enterprise technology tenants.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="page-capabilities">
      <PageHero
        eyebrow="Platform Scope"
        title="Comprehensive lifecycle capabilities from"
        titleEmphasis="ground to grid."
        lede="From land curation and substation engineering to institutional JV structuring and turnkey delivery, GreenNext provides end-to-end digital infrastructure execution."
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/about" className="subpage-nav-link">About Overview</Link>
          <Link to="/about/vision-mission" className="subpage-nav-link">Vision &amp; Mission</Link>
          <Link to="/about/leadership" className="subpage-nav-link">Leadership &amp; Team</Link>
          <Link to="/about/capabilities" className="subpage-nav-link active">Platform Capabilities</Link>
          <Link to="/about/sustainability" className="subpage-nav-link">Sustainability &amp; ESG</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {caps.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <div className="card card-architectural" key={idx}>
                  <IconComp size={28} style={{ color: 'var(--c-evergreen)', marginBottom: '12px' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--c-evergreen)' }}>{c.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
