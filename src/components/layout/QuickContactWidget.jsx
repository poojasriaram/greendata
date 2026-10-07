import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export default function QuickContactWidget({ onOpenEoiModal }) {
  return (
    <div className="floating-action-widget" aria-label="Quick Actions">
      <button
        type="button"
        className="btn btn-primary btn-sm btn-arrow"
        onClick={onOpenEoiModal}
        style={{ boxShadow: '0 6px 20px rgba(18,59,53,0.35)', padding: '10px 18px' }}
      >
        <FileText size={14} />
        <span>Submit EOI (Ref: 2026/001)</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
