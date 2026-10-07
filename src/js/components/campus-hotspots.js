// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Interactive Campus Masterplan Hotspot Explorer
// ══════════════════════════════════════════════════════════════════════════

export function initCampusHotspots() {
  const hotspotPins = document.querySelectorAll('.masterplan-hotspot');
  const infoCard = document.getElementById('masterplanInfoCard');
  const infoTitle = document.getElementById('masterplanInfoTitle');
  const infoAcreage = document.getElementById('masterplanInfoAcreage');
  const infoSpecs = document.getElementById('masterplanInfoSpecs');
  const infoDesc = document.getElementById('masterplanInfoDesc');

  if (!hotspotPins.length || !infoCard) return;

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

  hotspotPins.forEach((pin) => {
    pin.addEventListener('click', () => {
      const zoneKey = pin.getAttribute('data-zone');
      const details = zoneDetails[zoneKey];

      hotspotPins.forEach((p) => p.classList.remove('active'));
      pin.classList.add('active');

      if (details) {
        infoTitle.textContent = details.title;
        infoAcreage.textContent = details.acreage;
        infoSpecs.textContent = details.specs;
        infoDesc.textContent = details.desc;
        infoCard.classList.add('highlight');
        setTimeout(() => infoCard.classList.remove('highlight'), 300);
      }
    });
  });
}
