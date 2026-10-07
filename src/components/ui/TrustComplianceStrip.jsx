import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function TrustComplianceStrip() {
  const certifications = [
    'Tier III / Tier IV Facility Compatibility',
    'TANGEDCO Dedicated Dual-Grid Feeds',
    'ELCOT IT Ecosystem & SEZ Clearances',
    '100% Verified Clear Title Landholdings',
    'Direct Liquid Cooling (DLC) Ready'
  ];

  return (
    <section className="trust-strip" aria-label="Statutory & Technical Compliance Certifications">
      <div className="container">
        <div className="trust-strip-inner">
          {certifications.map((item, idx) => (
            <div className="trust-pill" key={idx}>
              <span className="trust-pill-icon">
                <CheckCircle size={14} />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
