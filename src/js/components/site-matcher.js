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
      title: 'Coimbatore Campus · Zone A (Hyperscale Data Center)',
      cluster: 'Coimbatore Cluster (98 Acres)',
      acreage: '15 Acres',
      power: 'Dedicated High-Voltage Substation · Dual 110/230kV Feeds',
      desc: 'Tier III/IV ready hyperscale canvas with liquid-cooling integration, BESS backup, and carrier-neutral fiber MMR.',
      locationVal: 'Coimbatore Campus — 40 Acres (Zone A / Zone B)',
      devTypeVal: 'Hyperscale Data Center (100+ MW)'
    },
    'cbe-zone-b': {
      title: 'Coimbatore Campus · Zone B (IT Park & Knowledge Hub)',
      cluster: 'Coimbatore Cluster (98 Acres)',
      acreage: '25 Acres',
      power: 'Commercial Grid with AI Command NOC/SOC/DCIM',
      desc: 'Grade-A workspace scaling up to 25 floors with integrated 5-Star business hotel, convention center, and executive corporate facilities.',
      locationVal: 'Coimbatore Campus — 40 Acres (Zone A / Zone B)',
      devTypeVal: 'IT Parks & Knowledge Cities'
    },
    'sangarilla': {
      title: 'Sangarilla Mega Campus',
      cluster: 'Coimbatore Cluster (98 Acres)',
      acreage: '50 Acres',
      power: 'High-Capacity Substation Feeds (50MW–100MW+ Scale)',
      desc: 'Largest single master-plan canvas in the portfolio. Supports multi-phase data centers, IT parks, and executive amenities.',
      locationVal: 'Sangarilla (Coimbatore) — 50 Acres',
      devTypeVal: 'Knowledge Cities & Innovation Districts'
    },
    'mindspace': {
      title: 'MindSpace Campus',
      cluster: 'Coimbatore Cluster (98 Acres)',
      acreage: '8 Acres',
      power: 'Dedicated Enterprise Power Infrastructure',
      desc: 'Compact, high-efficiency campus tailored for single-tenant Global Capability Centers (GCCs) and product engineering headquarters.',
      locationVal: 'MindSpace (Coimbatore) — 8 Acres',
      devTypeVal: 'IT Parks & Knowledge Cities'
    },
    'mdu-parcel-30': {
      title: 'Madurai ELCOT · Parcel 01',
      cluster: 'Madurai Cluster (93 Acres)',
      acreage: '30 Acres',
      power: 'Dedicated ELCOT Substation Feed (25MW–60MW Ready)',
      desc: 'Mid-scale high-density data center campus combined with enterprise IT park serving Southern Tamil Nadu industrial corridors.',
      locationVal: 'Madurai ELCOT — 30 Acres (DC & IT Park)',
      devTypeVal: 'Enterprise Data Centers & Colocation'
    },
    'mdu-parcel-15': {
      title: 'Madurai ELCOT · Parcel 02',
      cluster: 'Madurai Cluster (93 Acres)',
      acreage: '15 Acres',
      power: 'ELCOT IT Park Grid & Backup Corridors',
      desc: 'Specialized technology park and GCC campus with immediate plug-and-play statutory advantages and engineering university talent.',
      locationVal: 'Madurai ELCOT — 15 Acres (Tech Park / GCC)',
      devTypeVal: 'IT Parks & Knowledge Cities'
    },
    'mdu-parcel-3': {
      title: 'Madurai ELCOT · Parcel 03 (Edge Node)',
      cluster: 'Madurai Cluster (93 Acres)',
      acreage: '3 Acres',
      power: 'Nodal High-Reliability Feed (2MW–5MW)',
      desc: 'Micro-data center and telecom PoP hub delivering single-digit millisecond latency to regional manufacturing enterprises.',
      locationVal: 'Madurai ELCOT — 3 Acres (Micro & Edge DC)',
      devTypeVal: 'Edge & AI-Optimized Data Centers'
    },
    'greenminds': {
      title: 'GreenMinds Campus',
      cluster: 'Madurai Cluster (93 Acres)',
      acreage: '30 Acres',
      power: 'Renewable Wheeling & High-Capacity Substations',
      desc: 'Sustainable, energy-conscious mid-scale data center and IT campus with green power integration.',
      locationVal: 'GreenMinds (Madurai) — 30 Acres',
      devTypeVal: 'AI-Optimized Data Centers (GPU-Dense)'
    },
    'techmax': {
      title: 'TechMax Technology Park',
      cluster: 'Madurai Cluster (93 Acres)',
      acreage: '15 Acres',
      power: 'Industrial Power Grid Connection',
      desc: 'Specialized technology park engineered for regional product development, IoT, and edge computing.',
      locationVal: 'TechMax (Madurai) — 15 Acres',
      devTypeVal: 'IT Parks & Knowledge Cities'
    },
    'hosur-hub': {
      title: 'Hosur SpaceTech, EV & Precision Engineering Complex',
      cluster: 'Hosur Cluster (65 Acres)',
      acreage: '65 Acres',
      power: '230kV Dual Substation Feeds · Heavy Industrial HT Power',
      desc: 'High-density multi-storied precision engineering complex for UAV/Drone manufacturing, EV battery assembly, Robotics, and SpaceTech propulsion.',
      locationVal: 'Hosur — 65 Acres (Precision Engineering & SpaceTech Hub)',
      devTypeVal: 'High-End Industrial & Precision Engineering Spaces'
    },
    'trichy-hub': {
      title: 'Trichy Knowledge City & Digital Campus',
      cluster: 'Trichy Cluster (45 Acres)',
      acreage: '45 Acres',
      power: '110kV Substation Grid · Redundant Fiber Highways',
      desc: 'Integrated Knowledge City with IT park towers, R&D incubation centers, and AI-optimized data center zone in Central Tamil Nadu.',
      locationVal: 'Trichy — 45 Acres (Knowledge City & IT Park)',
      devTypeVal: 'Knowledge Cities & Innovation Districts'
    },
    'tirunelveli-hub': {
      title: 'Tirunelveli AI Data Center & Renewable Power Park',
      cluster: 'Tirunelveli Cluster (55 Acres)',
      acreage: '55 Acres',
      power: 'Direct 400kV/230kV Wind & Solar Green Grid Interconnect',
      desc: 'GPU-dense AI computing data center campus (100+ MW capability) powered by 100% renewable green energy wheeling in Southern TN.',
      locationVal: 'Tirunelveli — 55 Acres (Hyperscale AI & Clean Energy Park)',
      devTypeVal: 'Hyperscale Data Center (100+ MW)'
    },
    'pondicherry-hub': {
      title: 'Puducherry Innovation District & International Convention Hub',
      cluster: 'Pondicherry Cluster (35 Acres)',
      acreage: '35 Acres',
      power: 'Urban Coastal Dual Power Grid · Fiber Ring Infrastructure',
      desc: 'World-class Convention Halls, Exhibition Center, 5-Star Business & Convention Hotel with integrated startup Innovation District.',
      locationVal: 'Pondicherry — 35 Acres (Convention, Hospitality & Innovation Hub)',
      devTypeVal: 'Convention & Event Spaces / Hospitality'
    }
  };

  function computeMatch() {
    const workload = workloadSelect.value;
    const power = powerSelect.value;
    const acreage = acreageSelect.value;

    let matchedKey = 'cbe-zone-a';

    if (workload === 'precision-ind') {
      matchedKey = 'hosur-hub';
    } else if (workload === 'convention-hotel') {
      matchedKey = 'pondicherry-hub';
    } else if (workload === 'ai-gpu' || power === '50mw-100mw' || power === '100mw+') {
      if (acreage === '55ac') matchedKey = 'tirunelveli-hub';
      else if (acreage === '50ac') matchedKey = 'sangarilla';
      else matchedKey = 'cbe-zone-a';
    } else if (workload === 'it-gcc' || workload === 'knowledge-city') {
      if (acreage === '45ac') matchedKey = 'trichy-hub';
      else if (acreage === '8ac') matchedKey = 'mindspace';
      else if (acreage === '15ac') matchedKey = 'mdu-parcel-15';
      else matchedKey = 'cbe-zone-b';
    } else if (workload === 'edge' || acreage === '3ac' || power === '<5mw') {
      matchedKey = 'mdu-parcel-3';
    } else if (workload === 'datacenter') {
      if (acreage === '55ac') matchedKey = 'tirunelveli-hub';
      else if (power === '25mw-50mw') matchedKey = 'mdu-parcel-30';
      else if (acreage === '30ac') matchedKey = 'greenminds';
      else matchedKey = 'cbe-zone-a';
    } else {
      matchedKey = 'cbe-zone-a';
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
