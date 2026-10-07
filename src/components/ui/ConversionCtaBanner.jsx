import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ConversionCtaBanner({ onOpenEoiModal }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="badge badge-mint" style={{ marginBottom: '16px' }}>STRATEGIC ENGAGEMENT</span>
            <h2 style={{ color: 'var(--c-dark-text-primary)', marginBottom: '16px' }}>
              Have the capability to build at scale? Let's explore the opportunity.
            </h2>
            <p style={{ color: 'var(--c-dark-text-secondary)', fontSize: '17px', lineHeight: 1.6, marginBottom: '24px' }}>
              We invite leading data center operators, IT park developers, EPC firms, power &amp; telecom partners, and institutional investors to co-create South India’s next-generation digital infrastructure ecosystem.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-accent btn-lg btn-arrow"
                onClick={onOpenEoiModal}
              >
                <span>Submit an Expression of Interest (EOI)</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/partners" className="btn btn-dark-secondary btn-lg">
                Discuss Strategic Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
