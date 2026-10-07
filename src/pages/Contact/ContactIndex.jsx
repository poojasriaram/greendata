import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building, ShieldCheck, Send, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import Breadcrumb from '../../components/layout/Breadcrumb';

export default function ContactIndex() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-contact-index">
      <PageHero
        badge="CORPORATE ENGAGEMENT"
        title="Contact GreenNext Technologies"
        tagline="Connect with our digital infrastructure development team, site planning engineers, and joint venture directors."
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <div className="gn-container" style={{ padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Contact Details & Office Channels */}
          <div>
            <span style={{ color: '#00e599', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              DIRECT CHANNELS
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginTop: '8px', marginBottom: '20px' }}>
              Institutional Offices & Ground Engagement
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '32px' }}>
              Whether you represent a hyperscale cloud provider seeking 50MW+ substation allocations, an enterprise building a dedicated GCC, or an institutional co-investor, our leadership team is available for confidential consultations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{
                background: 'rgba(16,34,51,0.6)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{ background: 'rgba(0,229,153,0.1)', padding: '10px', borderRadius: '10px', color: '#00e599' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Corporate Headquarters</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                    GreenNext Digital Infrastructure Hub<br />
                    Avinashi Road / ELCOT Corridor, Coimbatore & Madurai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(16,34,51,0.6)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{ background: 'rgba(0,229,153,0.1)', padding: '10px', borderRadius: '10px', color: '#00e599' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Electronic Inquiries</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                    <strong>General & Partnerships:</strong> contact@greennext.in<br />
                    <strong>EOI Desk:</strong> eoi-desk@greennext.in
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(16,34,51,0.6)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{ background: 'rgba(0,229,153,0.1)', padding: '10px', borderRadius: '10px', color: '#00e599' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Expression of Interest (EOI) Desk</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                    Official Reference: <strong>DC-ITP-TN/JV/2026/001</strong><br />
                    Dedicated single-window fast-track evaluation for operators, developers, and investors.
                  </p>
                  <Link
                    to="/eoi"
                    style={{
                      color: '#00e599',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    Open Formal EOI Portal <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16,34,51,0.9), rgba(7,16,25,0.95))',
            borderRadius: '16px',
            border: '1px solid rgba(0,229,153,0.3)',
            padding: '36px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={54} color="#00e599" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Inquiry Received</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', maxWidth: '400px', margin: '12px auto 24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our digital infrastructure specialist will review your details and connect within 1 business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', organization: '', inquiryType: 'general', message: '' }); }}
                  className="gn-btn gn-btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>Direct Inquiry Form</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '4px' }}>
                    Fill out the form below to reach our infrastructure team directly.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Organization Name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: '#0c1b29',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="general">General Enterprise Inquiry</option>
                    <option value="data-center">Data Center / AI Whitespace Lease</option>
                    <option value="it-park">IT Park & GCC Campus Leasing</option>
                    <option value="partnership">Joint Development / JV Partnership</option>
                    <option value="investor">Institutional Co-Investment</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                    Message & Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your capacity requirements, location preference (Coimbatore / Madurai), power envelope, or partnership scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="gn-btn gn-btn-primary"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '14px' }}
                >
                  <Send size={16} /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
