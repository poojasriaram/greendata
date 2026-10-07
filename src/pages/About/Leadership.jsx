import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';

export default function Leadership({ onOpenEoiModal }) {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Leadership & Governance' }
  ];

  const leaders = [
    {
      name: 'Executive Management & Master Planning',
      title: 'Strategic Development Board',
      initials: 'GN',
      bio: 'Decades of combined expertise in mega-scale commercial land assembly, power utility grid planning, institutional real estate finance, and EPC contract execution across South India.'
    },
    {
      name: 'Power & Utility Advisory Team',
      title: 'High-Voltage Engineering & Grid Integration',
      initials: 'UT',
      bio: 'Senior electrical transmission and substation engineers specializing in high-voltage dual 110/230kV feeds, captive substation design, and Battery Energy Storage Systems (BESS).'
    },
    {
      name: 'Statutory & Land Diligence Counsel',
      title: 'Legal & Regulatory Compliance',
      initials: 'LG',
      bio: 'Leading corporate and infrastructure legal advisors ensuring rigorous 30-year title diligence, environmental clearances, and SEZ single-window statutory sanctions.'
    }
  ];

  return (
    <div className="page-leadership">
      <PageHero
        eyebrow="Governance & Team"
        title="Institutional leadership with deep execution"
        titleEmphasis="pedigree."
        lede="Our advisory board and executive development teams bring together decades of expertise in utility power grids, commercial master planning, and capital markets."
        breadcrumbs={breadcrumbs}
      />

      <div className="subpage-nav-bar">
        <div className="container subpage-nav-inner">
          <Link to="/about" className="subpage-nav-link">About Overview</Link>
          <Link to="/about/vision-mission" className="subpage-nav-link">Vision &amp; Mission</Link>
          <Link to="/about/leadership" className="subpage-nav-link active">Leadership &amp; Team</Link>
          <Link to="/about/capabilities" className="subpage-nav-link">Platform Capabilities</Link>
          <Link to="/about/sustainability" className="subpage-nav-link">Sustainability &amp; ESG</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="leadership-grid">
            {leaders.map((leader, idx) => (
              <div className="leader-card" key={idx}>
                <div className="leader-avatar">{leader.initials}</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--c-evergreen)' }}>{leader.name}</h4>
                <span className="text-mono" style={{ fontSize: '12px', color: 'var(--c-muted-grey)', marginBottom: '14px' }}>{leader.title}</span>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionCtaBanner onOpenEoiModal={onOpenEoiModal} />
    </div>
  );
}
