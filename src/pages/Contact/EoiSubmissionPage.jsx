import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, Lock, ArrowRight, Download, Building, MapPin, Zap, Users } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import Breadcrumb from '../../components/layout/Breadcrumb';

export default function EoiSubmissionPage() {
  const [formData, setFormData] = useState({
    organization: '',
    entityType: 'Data Center Operator',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    preferredLocation: 'Coimbatore Flagship Campus (98 AC Total)',
    requiredPowerMW: '25MW – 50MW',
    targetFootprintSqFt: '100,000 – 300,000 sq.ft.',
    timeline: 'Within 6–12 Months',
    collaborationModel: 'Joint Development / JV Structure',
    confidentialityAgreed: true,
    ndaRequested: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-eoi-submission">
      <PageHero
        badge="STATUTORY EXPRESSION OF INTEREST"
        title="Formal EOI Submission Portal"
        tagline="Official Reference: DC-ITP-TN/JV/2026/001 — Direct JV, Colocation, and Land Allocation Channel for GreenNext Campuses in Tamil Nadu."
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact', link: '/contact' },
          { label: 'Expression of Interest (EOI)' }
        ]}
      />

      <div className="gn-container" style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Official Dossier Callout Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,229,153,0.1), rgba(16,34,51,0.8))',
            borderRadius: '16px',
            border: '1px solid rgba(0,229,153,0.3)',
            padding: '28px 32px',
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00e599', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em' }}>
                <ShieldCheck size={18} /> CONFIDENTIAL INSTITUTIONAL PROCEDURE
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
                Ref ID: DC-ITP-TN/JV/2026/001 — Institutional Verification
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: '4px 0 0', maxWidth: '650px' }}>
                All submissions undergo single-window evaluation by the GreenNext Board of Directors. Formal land title records, soil reports, and single-line power diagrams are dispatched under mutual NDA.
              </p>
            </div>
            <div style={{ background: '#0a1622', padding: '10px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}>
              Status: Active Allocation Window
            </div>
          </div>

          {submitted ? (
            <div style={{
              background: 'rgba(16,34,51,0.8)',
              borderRadius: '16px',
              border: '1px solid rgba(0,229,153,0.4)',
              padding: '60px 40px',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={64} color="#00e599" style={{ margin: '0 auto 20px' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
                Expression of Interest Successfully Registered
              </h2>
              <div style={{
                background: 'rgba(0,229,153,0.08)',
                padding: '12px 24px',
                borderRadius: '8px',
                display: 'inline-block',
                margin: '20px 0',
                color: '#00e599',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}>
                Receipt ID: GN-EOI-2026-{(Math.random() * 9000 + 1000).toFixed(0)} · Ref: DC-ITP-TN/JV/2026/001
              </div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.7' }}>
                Thank you, <strong>{formData.contactPerson}</strong> ({formData.organization}). An automated confirmation and mutual NDA template have been dispatched to <strong>{formData.email}</strong>. Our Managing Director for Institutional Infrastructure will contact you within 24 hours.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/" className="gn-btn gn-btn-primary">
                  Return to Homepage
                </Link>
                <Link to="/projects" className="gn-btn gn-btn-outline">
                  Explore Project Portfolios
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: 'linear-gradient(135deg, rgba(16,34,51,0.9), rgba(7,16,25,0.95))',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '40px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  Institutional EOI Application Form
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginTop: '4px' }}>
                  Please complete the technical and commercial parameters below to initiate formal land allotment and joint development review.
                </p>
              </div>

              {/* Step 1: Corporate Entity Information */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: '#00e599', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building size={18} /> 1. Corporate & Legal Entity Profile
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Organization Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hyperscale Global Infrastructure Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Entity Classification *
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: '#0c1b29', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    >
                      <option value="Data Center Operator">Data Center Operator / Hyperscaler</option>
                      <option value="IT Park Developer">IT Park / Commercial Real Estate Developer</option>
                      <option value="EPC Contractor">EPC / Infrastructure Contractor</option>
                      <option value="Enterprise / GCC">Enterprise / Global Capability Center (GCC)</option>
                      <option value="Institutional Investor">Institutional Investor / Infrastructure Fund</option>
                      <option value="Utility / Telecom">Power Utility / Telecom Carrier</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Authorized Representative *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="representative@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Site Selection & Infrastructure Requirements */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: '#00e599', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={18} /> 2. Site Selection & Technical Envelope
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Preferred GreenNext Location *
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: '#0c1b29', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    >
                      <option value="Coimbatore Flagship Campus (40 AC)">Coimbatore Flagship Campus (40 AC)</option>
                      <option value="Coimbatore MindSpace (8 AC)">Coimbatore MindSpace Campus (8 AC)</option>
                      <option value="Coimbatore Sangarilla (50 AC)">Coimbatore Sangarilla Mega Campus (50 AC)</option>
                      <option value="Madurai ELCOT Campus (48 AC Total)">Madurai ELCOT Campus (48 AC Total)</option>
                      <option value="Madurai TechMax (15 AC)">Madurai TechMax Technology Park (15 AC)</option>
                      <option value="Madurai GreenMinds (30 AC)">Madurai GreenMinds Campus (30 AC)</option>
                      <option value="Multi-Location Portfolio (191+ AC)">Multi-Location Portfolio (191+ AC)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Required Power Envelope *
                    </label>
                    <select
                      value={formData.requiredPowerMW}
                      onChange={(e) => setFormData({ ...formData, requiredPowerMW: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: '#0c1b29', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    >
                      <option value="5MW – 15MW">5MW – 15MW (Edge / Enterprise Node)</option>
                      <option value="15MW – 30MW">15MW – 30MW (Regional Hyperscale Phase 1)</option>
                      <option value="30MW – 60MW">30MW – 60MW (Hyperscale / AI Training Cluster)</option>
                      <option value="60MW – 100MW+">60MW – 100MW+ (Multi-Tenant Mega Substation Yard)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Engagement / Collaboration Structure *
                    </label>
                    <select
                      value={formData.collaborationModel}
                      onChange={(e) => setFormData({ ...formData, collaborationModel: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: '#0c1b29', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    >
                      <option value="Joint Development / JV Structure">Joint Development / SPV Joint Venture</option>
                      <option value="Long-Term Land Lease">Long-Term Land Lease (30–99 Years)</option>
                      <option value="Turnkey Built-to-Suit (BTS)">Turnkey Built-to-Suit (BTS) Core & Shell</option>
                      <option value="Powered Land Acquisition">Powered Land Allotment with Substation Feeds</option>
                      <option value="Institutional Co-Investment">Institutional Equity / Co-Investment</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Target Commissioning Horizon
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', background: '#0c1b29', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    >
                      <option value="Immediate (Within 6 Months)">Immediate (Within 6 Months)</option>
                      <option value="Within 6–12 Months">Within 6–12 Months</option>
                      <option value="12–24 Months">12–24 Months</option>
                      <option value="Long-Range Expansion (2027+)">Long-Range Expansion (2027+)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Additional Notes & NDA Acceptance */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                  Specific Requirements or Technical Comments
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail any specific substation voltage requirements, direct liquid cooling needs, or custom floor loading criteria..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', resize: 'vertical' }}
                />
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px 20px', borderRadius: '8px', marginBottom: '32px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.confidentialityAgreed}
                    onChange={(e) => setFormData({ ...formData, confidentialityAgreed: e.target.checked })}
                    style={{ accentColor: '#00e599', width: '16px', height: '16px' }}
                  />
                  I confirm authorization on behalf of the organization and request execution of mutual Non-Disclosure Agreement (NDA) under Ref: DC-ITP-TN/JV/2026/001.
                </label>
              </div>

              <button
                type="submit"
                className="gn-btn gn-btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', fontWeight: 800, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              >
                <Lock size={18} /> Submit Formal Expression of Interest (Ref: DC-ITP-TN/JV/2026/001)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
