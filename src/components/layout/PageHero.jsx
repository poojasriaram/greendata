import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export default function PageHero({
  eyebrow,
  title,
  titleEmphasis,
  lede,
  breadcrumbs = [],
  children,
  badge
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}

          {eyebrow && (
            <div className="hero-badge" style={{ marginBottom: '12px' }}>
              <span className="dot"></span>
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="page-hero-title">
            {title} {titleEmphasis && <em>{titleEmphasis}</em>}
          </h1>

          {lede && <p className="page-hero-lede">{lede}</p>}

          {badge && (
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span className="badge badge-mint">{badge}</span>
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
