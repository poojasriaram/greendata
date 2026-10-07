import React, { useState } from 'react';
import { ArrowRight, Zap, MapPin, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SiteCapacityMatcher({ onOpenEoiWithPrefill }) {
  const [workload, setWorkload] = useState('datacenter');
  const [power, setPower] = useState('50mw-100mw');
  const [acreage, setAcreage] = useState('15ac');
  const navigate = useNavigate();

  const parcelData = {
    'cbe-zone-a': {
      title: 'Coimbatore Campus · Zone A (Data Center Flagship)',
      cluster: 'Coimbatore Cluster',
      acreage: '15 Acres',
      power: 'Dedicated High-Voltage Substation · Dual 110/230kV Feeds',
      desc: 'Tier III/IV ready hyperscale canvas with liquid-cooling integration, BESS backup, and carrier-neutral fiber MMR.',
      slug: 'coimbatore'
    },
    'cbe-zone-b': {
      title: 'Coimbatore Campus · Zone B (Integrated IT Park & GCC)',
      cluster: 'Coimbatore Cluster',
      acreage: '25 Acres',
      power: 'Commercial Grid with AI Command NOC/SOC/DCIM',
      desc: 'Grade-A workspace scaling up to 25 floors with integrated 5-Star business hotel, conference center, and executive housing.',
      slug: 'coimbatore'
    },
    'sangarilla': {
      title: 'Sangarilla Mega Campus',
      cluster: 'Coimbatore Cluster',
      acreage: '50 Acres',
      power: 'High-Capacity Substation Feeds (50MW–100MW+ Scale)',
      desc: 'Largest single master-plan canvas in the portfolio. Supports multi-phase data centers, IT parks, and executive amenities.',
      slug: 'sangarilla'
    },
    'mindspace': {
      title: 'MindSpace Campus',
      cluster: 'Coimbatore Cluster',
      acreage: '8 Acres',
      power: 'Dedicated Enterprise Power Infrastructure',
      desc: 'Compact, high-efficiency campus tailored for single-tenant Global Capability Centers (GCCs) and product engineering headquarters.',
      slug: 'mindspace'
    },
    'mdu-parcel-30': {
      title: 'Madurai ELCOT · Parcel 01',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '30 Acres',
      power: 'Dedicated ELCOT Substation Feed (25MW–60MW Ready)',
      desc: 'Mid-scale high-density data center campus combined with enterprise IT park serving Southern Tamil Nadu industrial corridors.',
      slug: 'madurai'
    },
    'mdu-parcel-15': {
      title: 'Madurai ELCOT · Parcel 02',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '15 Acres',
      power: 'ELCOT IT Park Grid & Backup Corridors',
      desc: 'Specialized technology park and GCC campus with immediate plug-and-play statutory advantages and engineering university talent.',
      slug: 'madurai'
    },
    'mdu-parcel-3': {
      title: 'Madurai ELCOT · Parcel 03 (Edge Node)',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '3 Acres',
      power: 'Nodal High-Reliability Feed (2MW–5MW)',
      desc: 'Micro-data center and telecom PoP hub delivering single-digit millisecond latency to regional manufacturing enterprises.',
      slug: 'madurai'
    },
    'greenminds': {
      title: 'GreenMinds Campus',
      cluster: 'Madurai Cluster',
      acreage: '30 Acres',
      power: 'Renewable Wheeling & High-Capacity Substations',
      desc: 'Sustainable, energy-conscious mid-scale data center and IT campus with green power integration.',
      slug: 'greenminds'
    }
  };

  let matchedKey = 'cbe-zone-a';
  if (workload === 'ai-gpu' || power === '100mw+' || acreage === '50ac') {
    matchedKey = acreage === '50ac' ? 'sangarilla' : 'cbe-zone-a';
  } else if (workload === 'it-gcc') {
    if (acreage === '8ac') matchedKey = 'mindspace';
    else if (acreage === '15ac') matchedKey = 'mdu-parcel-15';
    else matchedKey = 'cbe-zone-b';
  } else if (workload === 'edge' || acreage === '3ac' || power === '<5mw') {
    matchedKey = 'mdu-parcel-3';
  } else if (workload === 'datacenter') {
    if (power === '25mw-50mw') matchedKey = 'mdu-parcel-30';
    else if (acreage === '30ac') matchedKey = 'greenminds';
    else matchedKey = 'cbe-zone-a';
  }

  const match = parcelData[matchedKey] || parcelData['cbe-zone-a'];

  const handleSelectAndPrefill = () => {
    if (onOpenEoiWithPrefill) {
      onOpenEoiWithPrefill({
        location: match.title,
        devType: workload
      });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="site-matcher-container">
      <div className="site-matcher-header">
        <div>
          <span className="badge badge-mint" style={{ marginBottom: '6px' }}>Developer &amp; Investor Tool</span>
          <h3 style={{ color: 'var(--c-dark-text-primary)', fontSize: '1.5rem', marginBottom: '4px' }}>Capacity &amp; Parcel Matcher</h3>
          <p style={{ color: 'var(--c-dark-text-secondary)', fontSize: '14px' }}>Select your workload profile, power requirement, and land scale to match optimal GreenNext parcels.</p>
        </div>
        <span className="text-mono" style={{ fontSize: '11px', color: 'var(--c-accent-mint)' }}>LIVE CALCULATOR</span>
      </div>

      <div className="site-matcher-grid">
        <div className="matcher-inputs">
          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="form-label" style={{ color: 'var(--c-dark-text-primary)' }}>Target Workload</label>
            <select
              value={workload}
              onChange={(e) => setWorkload(e.target.value)}
              className="form-control"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <option value="datacenter">Hyperscale / Colocation Data Center</option>
              <option value="ai-gpu">High-Density AI &amp; GPU Compute Cluster</option>
              <option value="it-gcc">IT Park / Commercial GCC Workspace</option>
              <option value="edge">Edge Micro Data Center / Telecom PoP</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="form-label" style={{ color: 'var(--c-dark-text-primary)' }}>Indicative Power Demand</label>
            <select
              value={power}
              onChange={(e) => setPower(e.target.value)}
              className="form-control"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <option value="50mw-100mw">50MW – 100MW+ (Substation Scale)</option>
              <option value="25mw-50mw">25MW – 50MW (Mid-Scale Campus)</option>
              <option value="10mw-25mw">10MW – 25MW (Enterprise IT/DC)</option>
              <option value="<5mw">&lt; 5MW (Edge / Micro Facility)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ color: 'var(--c-dark-text-primary)' }}>Acreage Scale Preference</label>
            <select
              value={acreage}
              onChange={(e) => setAcreage(e.target.value)}
              className="form-control"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <option value="15ac">15 Acres (Focused DC Campus)</option>
              <option value="25ac">25 Acres (High-Rise IT &amp; GCC)</option>
              <option value="30ac">30 Acres (Mid-Scale Integrated)</option>
              <option value="40ac">40 Acres (Flagship Dual Zone)</option>
              <option value="50ac">50 Acres (Mega Integrated District)</option>
              <option value="8ac">8 Acres (Compact GCC Campus)</option>
              <option value="3ac">3 Acres (Ultra-Low Latency Node)</option>
            </select>
          </div>
        </div>

        {/* Matched Result Card */}
        <div className="matcher-result-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <span className="badge badge-mint">{match.cluster}</span>
            <span className="text-mono" style={{ color: 'var(--c-accent-mint)', fontWeight: 700 }}>{match.acreage}</span>
          </div>
          <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '8px' }}>{match.title}</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13.5px', lineHeight: 1.5, marginBottom: '14px' }}>
            {match.desc}
          </p>
          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
            <span style={{ display: 'block', fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--c-accent-mint)', textTransform: 'uppercase' }}>Grid Infrastructure Match:</span>
            <span style={{ fontSize: '13px', color: '#fff' }}>{match.power}</span>
          </div>
          <button
            type="button"
            className="btn btn-accent btn-sm btn-arrow"
            onClick={handleSelectAndPrefill}
          >
            <span>Select &amp; Submit EOI</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
