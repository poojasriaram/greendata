import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenEoiModal }) {
  return (
    <footer className="footer-main" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Positioning */}
          <div className="footer-brand">
            <Link to="/" className="brand-logo" style={{ color: 'var(--c-dark-text-primary)' }} aria-label="GreenNext Technologies — Home">
              <div className="brand-icon" style={{ background: 'var(--c-dark-card)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <path d="M9 11V9h2M21 9h2v2M23 21v2h-2M11 23H9v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <rect x="13" y="13" width="6" height="6" fill="currentColor" />
                </svg>
              </div>
              <div className="brand-title">
                <span className="brand-name" style={{ color: 'var(--c-dark-text-primary)' }}>GreenNext</span>
                <span className="brand-tagline" style={{ color: 'var(--c-accent-mint)' }}>Technologies</span>
              </div>
            </Link>
            <p>
              Strategic digital infrastructure development platform delivering scalable Data Center campuses, AI/GPU computing clusters, and Grade-A IT parks across South India.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--c-accent-mint)', marginTop: '12px' }}>
              Ref. DC-ITP-TN/JV/2026/001 · Coimbatore &amp; Madurai
            </p>
          </div>

          {/* Column 2: Solutions & Infrastructure */}
          <div className="footer-col">
            <h5>Solutions &amp; Infrastructure</h5>
            <ul className="footer-links">
              <li><Link to="/solutions/data-centers">Data Center Infrastructure</Link></li>
              <li><Link to="/solutions/ai-gpu">AI &amp; GPU Compute (30–100kW+)</Link></li>
              <li><Link to="/solutions/it-parks-gcc">IT Parks &amp; GCC Campuses</Link></li>
              <li><Link to="/solutions/edge-computing">Edge Computing &amp; Nodes</Link></li>
              <li><Link to="/infrastructure/power">Power &amp; Substation Infrastructure</Link></li>
              <li><Link to="/infrastructure/cooling">Direct Liquid Cooling (DLC)</Link></li>
              <li><Link to="/infrastructure/command-control">Command NOC / SOC / DCIM</Link></li>
            </ul>
          </div>

          {/* Column 3: Projects & Portfolio */}
          <div className="footer-col">
            <h5>Verified Land Portfolio</h5>
            <ul className="footer-links">
              <li><Link to="/projects/coimbatore">Coimbatore Flagship (40 AC)</Link></li>
              <li><Link to="/projects/madurai">Madurai ELCOT Corridor (48 AC)</Link></li>
              <li><Link to="/projects/sangarilla">Sangarilla Mega Campus (50 AC)</Link></li>
              <li><Link to="/projects/mindspace">MindSpace Campus (8 AC)</Link></li>
              <li><Link to="/projects/techmax">TechMax Technology Park (15 AC)</Link></li>
              <li><Link to="/projects/greenminds">GreenMinds Campus (30 AC)</Link></li>
              <li><Link to="/projects">Interactive Land Ledger (191+ AC)</Link></li>
            </ul>
          </div>

          {/* Column 4: Governance & Engagement */}
          <div className="footer-col">
            <h5>Partnerships &amp; Governance</h5>
            <ul className="footer-links">
              <li><Link to="/about">About GreenNext</Link></li>
              <li><Link to="/industries">Industries Served</Link></li>
              <li><Link to="/partners">Strategic JV / SPV Models</Link></li>
              <li><Link to="/insights/market-outlook">Market Outlook 2030–2047</Link></li>
              <li><Link to="/contact">Contact &amp; Advisory Desk</Link></li>
              <li><button type="button" onClick={onOpenEoiModal} style={{ background: 'none', border: 'none', color: 'var(--c-accent-mint)', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}>Submit EOI Package →</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 GreenNext Technologies. Strictly Private &amp; Confidential. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Coimbatore · Madurai · Bengaluru</span>
            <span>Ref: DC-ITP-TN/JV/2026/001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
