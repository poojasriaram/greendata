// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Interactive Parcel & Workload Matcher
// ══════════════════════════════════════════════════════════════════════════

export function initSiteMatcher() {
  const workloadSelect = document.getElementById('calc_workload');
  const powerSelect = document.getElementById('calc_power');
  const acreageSelect = document.getElementById('calc_acreage');
  const resultCard = document.getElementById('matcherResultCard');
  const resultTitle = document.getElementById('matcherResultTitle');
  const resultCluster = document.getElementById('matcherResultCluster');
  const resultAcreage = document.getElementById('matcherResultAcreage');
  const resultPower = document.getElementById('matcherResultPower');
  const resultDesc = document.getElementById('matcherResultDesc');
  const resultEoiBtn = document.getElementById('matcherEoiBtn');

  if (!workloadSelect || !resultCard) return;

  const parcelData = {
    'cbe-zone-a': {
      title: 'Coimbatore Campus · Zone A (Data Center Flagship)',
      cluster: 'Coimbatore Cluster',
      acreage: '15 Acres',
      power: 'Dedicated High-Voltage Substation · Dual 110/230kV Feeds',
      desc: 'Tier III/IV ready hyperscale canvas with liquid-cooling integration, BESS backup, and carrier-neutral fiber MMR.',
      locationVal: 'Coimbatore Campus — 40 Acres (Zone A / Zone B)',
      devTypeVal: 'Hyperscale Data Center'
    },
    'cbe-zone-b': {
      title: 'Coimbatore Campus · Zone B (Integrated IT Park & GCC)',
      cluster: 'Coimbatore Cluster',
      acreage: '25 Acres',
      power: 'Commercial Grid with AI Command NOC/SOC/DCIM',
      desc: 'Grade-A workspace scaling up to 25 floors with integrated 5-Star business hotel, conference center, and executive housing.',
      locationVal: 'Coimbatore Campus — 40 Acres (Zone A / Zone B)',
      devTypeVal: 'Commercial IT Park / GCC Workspace'
    },
    'sangarilla': {
      title: 'Sangarilla Mega Campus',
      cluster: 'Coimbatore Cluster',
      acreage: '50 Acres',
      power: 'High-Capacity Substation Feeds (50MW–100MW+ Scale)',
      desc: 'Largest single master-plan canvas in the portfolio. Supports multi-phase data centers, IT parks, and executive amenities.',
      locationVal: 'Sangarilla (Coimbatore) — 50 Acres',
      devTypeVal: 'Integrated Mixed-Use Technology District'
    },
    'mindspace': {
      title: 'MindSpace Campus',
      cluster: 'Coimbatore Cluster',
      acreage: '8 Acres',
      power: 'Dedicated Enterprise Power Infrastructure',
      desc: 'Compact, high-efficiency campus tailored for single-tenant Global Capability Centers (GCCs) and product engineering headquarters.',
      locationVal: 'MindSpace (Coimbatore) — 8 Acres',
      devTypeVal: 'Commercial IT Park / GCC Workspace'
    },
    'mdu-parcel-30': {
      title: 'Madurai ELCOT · Parcel 01',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '30 Acres',
      power: 'Dedicated ELCOT Substation Feed (25MW–60MW Ready)',
      desc: 'Mid-scale high-density data center campus combined with enterprise IT park serving Southern Tamil Nadu industrial corridors.',
      locationVal: 'Madurai ELCOT — 30 Acres (DC & IT Park)',
      devTypeVal: 'Hyperscale Data Center'
    },
    'mdu-parcel-15': {
      title: 'Madurai ELCOT · Parcel 02',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '15 Acres',
      power: 'ELCOT IT Park Grid & Backup Corridors',
      desc: 'Specialized technology park and GCC campus with immediate plug-and-play statutory advantages and engineering university talent.',
      locationVal: 'Madurai ELCOT — 15 Acres (Tech Park / GCC)',
      devTypeVal: 'Commercial IT Park / GCC Workspace'
    },
    'mdu-parcel-3': {
      title: 'Madurai ELCOT · Parcel 03 (Edge Node)',
      cluster: 'Madurai Cluster (ELCOT)',
      acreage: '3 Acres',
      power: 'Nodal High-Reliability Feed (2MW–5MW)',
      desc: 'Micro-data center and telecom PoP hub delivering single-digit millisecond latency to regional manufacturing enterprises.',
      locationVal: 'Madurai ELCOT — 3 Acres (Micro & Edge DC)',
      devTypeVal: 'Edge Compute / Telecom PoP'
    },
    'greenminds': {
      title: 'GreenMinds Campus',
      cluster: 'Madurai Cluster',
      acreage: '30 Acres',
      power: 'Renewable Wheeling & High-Capacity Substations',
      desc: 'Sustainable, energy-conscious mid-scale data center and IT campus with green power integration.',
      locationVal: 'GreenMinds (Madurai) — 30 Acres',
      devTypeVal: 'AI / GPU Compute Campus'
    },
    'techmax': {
      title: 'TechMax Technology Park',
      cluster: 'Madurai Cluster',
      acreage: '15 Acres',
      power: 'Industrial Power Grid Connection',
      desc: 'Specialized technology park engineered for regional product development, IoT, and edge computing.',
      locationVal: 'TechMax (Madurai) — 15 Acres',
      devTypeVal: 'Commercial IT Park / GCC Workspace'
    }
  };

  function computeMatch() {
    const workload = workloadSelect.value;
    const power = powerSelect.value;
    const acreage = acreageSelect.value;

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

    resultTitle.textContent = match.title;
    resultCluster.textContent = match.cluster;
    resultAcreage.textContent = match.acreage;
    resultPower.textContent = match.power;
    resultDesc.textContent = match.desc;

    if (resultEoiBtn) {
      resultEoiBtn.onclick = (e) => {
        e.preventDefault();
        const locSelect = document.getElementById('eoi_location');
        const devSelect = document.getElementById('eoi_devtype');
        if (locSelect) locSelect.value = match.locationVal;
        if (devSelect) devSelect.value = match.devTypeVal;

        const eoiSec = document.getElementById('eoi');
        if (eoiSec) {
          eoiSec.scrollIntoView({ behavior: 'smooth' });
          const companyInput = document.getElementById('eoi_company');
          if (companyInput) companyInput.focus();
        }
      };
    }
  }

  workloadSelect.addEventListener('change', computeMatch);
  powerSelect.addEventListener('change', computeMatch);
  acreageSelect.addEventListener('change', computeMatch);

  computeMatch();
}
