import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CampusHotspotExplorer() {
  const [activeZone, setActiveZone] = useState('zone-a');

  const zoneDetails = {
    'zone-a': {
      title: 'Zone A · Dedicated Data Center Campus',
      acreage: '15 Acres',
      specs: 'Dedicated Substation · Dual 110/230kV Feeds · BESS · Liquid Cooling',
      desc: 'Master-planned for hyperscale & colocation deployments with tier-level physical & logical security, carrier-neutral meet-me rooms, and advanced closed-loop thermal systems.'
    },
    'zone-b': {
      title: 'Zone B · Integrated IT Park & GCC Campus',
      acreage: '25 Acres',
      specs: 'Building Potential up to 25 Floors · Command Hub (NOC/SOC/BOC/DCIM)',
      desc: 'Premium commercial workspace for SaaS headquarters and Global Capability Centers with AI-enabled predictive monitoring and smart BMS automation.'
    },
    'substation': {
      title: 'Dedicated Utility Power Substation Yard',
      acreage: 'Utility Enclave',
      specs: 'Dual-Source High Voltage Grid Feeds · On-Site Step-Down Transformers',
      desc: 'Engineered for uninterrupted N+1 / 2N power redundancy with direct high-capacity TANGEDCO feeder lines and green energy wheeling corridors.'
    },
    'amenities': {
      title: 'Executive Amenities, Business Hotel & Residences',
      acreage: 'Campus Enclave',
      specs: '5-Star Business Hotel · Executive Apartments · Convention & Retail Hub',
      desc: 'Integrated lifestyle and conference infrastructure supporting global corporate teams, visiting executives, and workforce retention.'
    },
    'noc-soc': {
      title: 'Centralized Command & Control Centre',
      acreage: 'Integrated Facilities',
      specs: 'Network Operations (NOC) · Security Operations (SOC) · Building Ops (BOC)',
      desc: 'Mission-critical 24/7 facilities management hub with AI-enabled predictive environmental and power DCIM telemetry.'
    }
  };

  const details = zoneDetails[activeZone];

  return (
    <div className="masterplan-explorer-container">
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-6)' }}>
        <span className="badge badge-evergreen" style={{ marginBottom: '6px' }}>Campus Architecture</span>
        <h3 style={{ fontSize: '1.5rem' }}>Coimbatore Flagship Masterplan Layout</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Click on any campus sector pin to inspect zoning parameters, power feeds, and infrastructure readiness.</p>
      </div>

      <div className="masterplan-layout-grid">
        <div className="masterplan-visual-frame" aria-label="Interactive Masterplan Hotspot Canvas">
          <button
            className={`masterplan-hotspot ${activeZone === 'zone-a' ? 'active' : ''}`}
            style={{ top: '25%', left: '30%' }}
            onClick={() => setActiveZone('zone-a')}
            aria-label="Zone A Data Center Hotspot"
          >
            <span>01</span>
          </button>
          <button
            className={`masterplan-hotspot ${activeZone === 'zone-b' ? 'active' : ''}`}
            style={{ top: '55%', left: '65%' }}
            onClick={() => setActiveZone('zone-b')}
            aria-label="Zone B IT Park Hotspot"
          >
            <span>02</span>
          </button>
          <button
            className={`masterplan-hotspot ${activeZone === 'substation' ? 'active' : ''}`}
            style={{ top: '18%', left: '75%' }}
            onClick={() => setActiveZone('substation')}
            aria-label="Substation Yard Hotspot"
          >
            <span>03</span>
          </button>
          <button
            className={`masterplan-hotspot ${activeZone === 'noc-soc' ? 'active' : ''}`}
            style={{ top: '70%', left: '35%' }}
            onClick={() => setActiveZone('noc-soc')}
            aria-label="Command NOC/SOC Hotspot"
          >
            <span>04</span>
          </button>
          <button
            className={`masterplan-hotspot ${activeZone === 'amenities' ? 'active' : ''}`}
            style={{ top: '78%', left: '78%' }}
            onClick={() => setActiveZone('amenities')}
            aria-label="Executive Amenities Hotspot"
          >
            <span>05</span>
          </button>
        </div>

        {/* Masterplan Detail Card */}
        <div className="masterplan-info-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span className="badge badge-evergreen">{details.acreage}</span>
            <span className="text-mono" style={{ fontSize: '11px', color: 'var(--c-muted-grey)' }}>SECTOR DETAIL</span>
          </div>
          <h4 style={{ fontSize: '1.3rem', color: 'var(--c-evergreen)', marginBottom: '8px' }}>{details.title}</h4>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
            {details.desc}
          </p>
          <div style={{ background: 'var(--c-paper-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border-light)', marginBottom: '16px' }}>
            <strong style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--c-evergreen)', display: 'block', marginBottom: '4px' }}>ENGINEERING SPECIFICATION:</strong>
            <span style={{ fontSize: '13px', color: 'var(--c-slate-text)' }}>{details.specs}</span>
          </div>
          <Link to="/projects/coimbatore" className="btn btn-outline btn-sm btn-arrow">
            <span>Explore Coimbatore Flagship Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
