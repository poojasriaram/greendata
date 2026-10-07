import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText, Shield, CheckCircle } from 'lucide-react';

export default function TopUtilityBar({ onOpenEoiModal }) {
  return (
    <div className="top-utility-bar" aria-label="Corporate Utility Bar">
      <div className="container utility-bar-inner">
        <div className="utility-left">
          <div className="utility-item">
            <span className="utility-badge">EOI REF: DC-ITP-TN/JV/2026/001</span>
            <span className="utility-sep">|</span>
            <span className="utility-text">Tamil Nadu ICT Policy &amp; Data Center Compliant</span>
          </div>
        </div>

        <div className="utility-right">
          <a href="tel:+914220000000" className="utility-link" title="Corporate Enquiry Desk">
            <Phone size={12} />
            <span>Corporate Desk: +91 422 298 0000</span>
          </a>
          <span className="utility-sep">|</span>
          <a href="mailto:eoi@greennext.in" className="utility-link">
            <span>eoi@greennext.in</span>
          </a>
          <span className="utility-sep">|</span>
          <button 
            type="button" 
            className="utility-link utility-btn-action" 
            onClick={onOpenEoiModal}
            title="Download Official Expression of Interest Package"
          >
            <FileText size={12} />
            <span>Request EOI Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
