import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Copy, Mail, Check } from 'lucide-react';

export default function EoiWizardModal({ isOpen, onClose, prefillData = {} }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    orgType: '',
    location: '',
    devType: '',
    model: 'Joint Venture (JV)',
    financial: '$25M – $100M USD (₹200 Cr – ₹800 Cr)',
    timeline: 'Immediate / Q3-Q4 2026',
    experience: '',
    notes: '',
    consent: false
  });

  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (prefillData.location || prefillData.devType) {
      setFormData(prev => ({
        ...prev,
        location: prefillData.location || prev.location,
        devType: prefillData.devType || prev.devType
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const validateStep = (currentStep) => {
    const errs = {};
    if (currentStep === 1) {
      if (!formData.company.trim()) errs.company = 'Company name is required';
      if (!formData.contact.trim()) errs.contact = 'Contact person is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid work email is required';
      if (!formData.orgType) errs.orgType = 'Please select organisation type';
    } else if (currentStep === 2) {
      if (!formData.location) errs.location = 'Please select target location';
    } else if (currentStep === 4) {
      if (!formData.consent) errs.consent = 'You must confirm legal acknowledgment';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const getDossierText = () => {
    return `EXPRESSION OF INTEREST (EOI) DOSSIER
Reference: DC-ITP-TN/JV/2026/001
Recipient: eoi@greennext.in
Platform: GreenNext Technologies — Digital Infrastructure Platform (Tamil Nadu)

1. PROPOSING ENTITY:
- Company Name: ${formData.company}
- Contact Person: ${formData.contact}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}
- Entity Type: ${formData.orgType}

2. TARGET ASSET & MODEL:
- Target Parcel: ${formData.location}
- Proposed Workload: ${formData.devType || 'General Data Center / IT Infrastructure'}
- Collaboration Model: ${formData.model}

3. CAPABILITIES & READINESS:
- Capital Allocation: ${formData.financial}
- Target Timeline: ${formData.timeline}
- Past Experience: ${formData.experience || 'Not specified'}

4. SPECIFIC TECHNICAL INQUIRIES & NOTES:
${formData.notes || 'None specified'}

Status: Non-binding submission for preliminary due diligence and data room access.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getDossierText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:eoi@greennext.in?subject=${encodeURIComponent(`EOI Submission: ${formData.company} [Ref: DC-ITP-TN/JV/2026/001]`)}&body=${encodeURIComponent(getDossierText())}`;

  return (
    <div className="modal-backdrop" style={{ display: 'flex', position: 'fixed', inset: 0, backgroundColor: 'rgba(7, 29, 26, 0.75)', backdropFilter: 'blur(4px)', zIndex: 999, alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div className="modal-dialog" style={{ backgroundColor: 'var(--c-paper-surface)', borderRadius: 'var(--radius-lg)', maxWidth: '680px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: 'clamp(1.5rem, 3vw, 2.5rem)', boxShadow: 'var(--shadow-xl)', position: 'relative' }}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--c-muted-grey)' }}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="badge badge-evergreen" style={{ marginBottom: '6px' }}>Ref: DC-ITP-TN/JV/2026/001</span>
          <h3 style={{ fontSize: '1.4rem' }}>Expression of Interest (EOI) Portal</h3>
        </div>

        {/* Stepper Header */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--c-border-light)', paddingBottom: '12px' }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                backgroundColor: step >= s ? 'var(--c-evergreen)' : 'var(--c-border-light)',
                transition: 'background-color 200ms ease'
              }}
            />
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h4 style={{ marginBottom: '16px' }}>Step 1: Organisation Details</h4>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div>
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Acme Infrastructure Holdings"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                {errors.company && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.company}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Contact Person *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. John Doe, VP"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                  {errors.contact && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.contact}</span>}
                </div>
                <div>
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.email}</span>}
                </div>
              </div>

              <div>
                <label className="form-label">Organisation Type *</label>
                <select
                  className="form-control"
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                >
                  <option value="">Select Organisation Category...</option>
                  <option>Data Center Developer / Operator</option>
                  <option>IT Park Developer</option>
                  <option>EPC Partner</option>
                  <option>Power &amp; Telecom Partner</option>
                  <option>Technology Partner (Compute / Cloud / AI)</option>
                  <option>Hospitality &amp; Real Estate Developer</option>
                  <option>Financial / Institutional Investor</option>
                </select>
                {errors.orgType && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.orgType}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button type="button" className="btn btn-primary btn-arrow" onClick={handleNext}>
                <span>Continue to Opportunity Selection</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h4 style={{ marginBottom: '16px' }}>Step 2: Opportunity Selection</h4>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div>
                <label className="form-label">Target Location *</label>
                <select
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                  <option value="">Select Target Location...</option>
                  <option>All Locations (Portfolio Level Engagement)</option>
                  <option>Coimbatore Campus — 40 Acres (Zone A / Zone B)</option>
                  <option>Madurai ELCOT — 30 Acres (DC &amp; IT Park)</option>
                  <option>Madurai ELCOT — 15 Acres (Tech Park / GCC)</option>
                  <option>Madurai ELCOT — 3 Acres (Micro &amp; Edge DC)</option>
                  <option>MindSpace (Coimbatore) — 8 Acres</option>
                  <option>Sangarilla (Coimbatore) — 50 Acres</option>
                  <option>TechMax (Madurai) — 15 Acres</option>
                  <option>GreenMinds (Madurai) — 30 Acres</option>
                </select>
                {errors.location && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.location}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Development Workload</label>
                  <select
                    className="form-control"
                    value={formData.devType}
                    onChange={(e) => setFormData({ ...formData, devType: e.target.value })}
                  >
                    <option value="">Select Workload...</option>
                    <option value="datacenter">Hyperscale Data Center</option>
                    <option value="ai-gpu">AI / GPU Compute Campus</option>
                    <option value="it-gcc">Commercial IT Park / GCC</option>
                    <option value="edge">Edge Compute / Telecom PoP</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Collaboration Model</label>
                  <select
                    className="form-control"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  >
                    <option>Joint Venture (JV)</option>
                    <option>Special Purpose Vehicle (SPV)</option>
                    <option>Turnkey EPC Delivery</option>
                    <option>Long-Term Land Lease / Co-Development</option>
                    <option>Equity Investment</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
              <button type="button" className="btn btn-primary btn-arrow" onClick={handleNext}>
                <span>Continue to Capabilities</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h4 style={{ marginBottom: '16px' }}>Step 3: Capabilities &amp; Financials</h4>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Indicative Funding Scale</label>
                  <select
                    className="form-control"
                    value={formData.financial}
                    onChange={(e) => setFormData({ ...formData, financial: e.target.value })}
                  >
                    <option>Under $25M USD (₹200 Cr)</option>
                    <option>$25M – $100M USD (₹200 Cr – ₹800 Cr)</option>
                    <option>$100M – $250M USD (₹800 Cr – ₹2,000 Cr)</option>
                    <option>$250M+ USD (₹2,000+ Cr)</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Execution Timeline</label>
                  <select
                    className="form-control"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option>Immediate / Q3-Q4 2026</option>
                    <option>Phase 1: 2027</option>
                    <option>Multi-Year Phased Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Relevant Track Record / Reference Projects</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Briefly mention past data center, commercial or infrastructure projects..."
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
              <button type="button" className="btn btn-primary btn-arrow" onClick={handleNext}>
                <span>Review &amp; Verify</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h4 style={{ marginBottom: '16px' }}>Step 4: Additional Notes &amp; Verification</h4>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div>
                <label className="form-label">Specific Technical Requirements / Inquiries</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Substation requirements, FAR/FSI queries, power wheeling..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div>
                <label className="checkbox-card" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    style={{ marginTop: '3px' }}
                  />
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    I confirm that the provided information is accurate and represents my organization's genuine interest. I acknowledge this submission is non-binding and subject to bilateral due diligence. *
                  </span>
                </label>
                {errors.consent && <span className="form-error" style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.consent}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
              <button type="button" className="btn btn-primary btn-arrow" onClick={handleNext}>
                <span>Generate EOI Submission</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Success & Dispatch */}
        {step === 5 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: 'var(--c-soft-sage)', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
              <CheckCircle size={28} style={{ color: 'var(--c-evergreen)', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--c-evergreen)', display: 'block' }}>EOI Submission Package Compiled</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Ready for formal dispatch to <strong>eoi@greennext.in</strong></span>
              </div>
            </div>

            <pre style={{ background: 'var(--c-warm-offwhite)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border-light)', fontSize: '12px', maxHeight: '180px', overflowY: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>
              {getDossierText()}
            </pre>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
              <a href={mailtoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <Mail size={14} />
                <span>Send via Email Client</span>
              </a>
              <button type="button" className="btn btn-secondary" onClick={handleCopy}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied Dossier!' : 'Copy Dossier to Clipboard'}</span>
              </button>
              <button type="button" className="btn btn-quiet" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
