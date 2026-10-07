// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Solutions & Infrastructure Data
// ══════════════════════════════════════════════════════════════════════════

export const solutionsData = [
  {
    id: 'data-centers',
    slug: 'data-centers',
    title: 'Data Center Infrastructure',
    subtitle: 'Enterprise, Colocation & Hyperscale Campuses',
    badge: 'Tier III / IV Ready',
    icon: 'Server',
    summary: 'Master-planned hyperscale and colocation data center canvases engineered with dedicated utility substations, dual high-voltage feeds, carrier-neutral MMRs, and high availability.',
    specs: [
      { label: 'Power Architecture', value: 'Dedicated Substation Yards · Dual 110/230kV Feeds' },
      { label: 'Cooling Design', value: 'Closed-loop chilled water & Direct Liquid Cooling (DLC)' },
      { label: 'Target PUE', value: '≤ 1.35 with optimized seasonal economization' },
      { label: 'Redundancy', value: 'N+1 / 2N concurrent maintainability' },
      { label: 'Security', value: '5-Tier physical security, biometrics & vehicle traps' },
      { label: 'Capacity Range', value: '15MW to 100MW+ expandable per campus' }
    ],
    features: [
      'Contiguous 15 to 50 acre parcels mapped directly to high-voltage power grids',
      'Dual diverse fiber entry conduits with carrier-neutral Meet-Me Rooms',
      'Captive fast-start diesel generator farms with 48-hour on-site fuel reserves',
      'Battery Energy Storage Systems (BESS) for load smoothing and instantaneous transition'
    ]
  },
  {
    id: 'ai-gpu',
    slug: 'ai-gpu',
    title: 'AI & GPU Infrastructure',
    subtitle: 'High-Density Accelerated Compute (30–100kW+ Per Rack)',
    badge: 'Liquid Cooling Ready',
    icon: 'Cpu',
    summary: 'Specialized thermal and electrical infrastructure designed for heavy AI model training clusters, LLM inference pipelines, GPU supercomputing, and Direct-to-Chip Liquid Cooling (DLC).',
    specs: [
      { label: 'Rack Density', value: '30kW to 100kW+ per high-density rack' },
      { label: 'Cooling Model', value: 'Direct-to-Chip (DLC) & Rear-Door Heat Exchangers' },
      { label: 'Structural Load', value: 'Up to 2,500 kg/m² floor weight rating' },
      { label: 'Fabric Topology', value: 'Ultra-low latency InfiniBand & RoCE ready' },
      { label: 'Telemetry', value: 'AI DCIM with real-time thermal gradient mapping' },
      { label: 'Power Backup', value: 'High-discharge UPS arrays + Dedicated BESS' }
    ],
    features: [
      'Precision fluid loop management with secondary containment and leak telemetry',
      'Engineered for NVIDIA HGX, Blackwell, and AMD Instinct enterprise compute architectures',
      'Modular whitespace layouts supporting progressive power density upgrades',
      'Dedicated high-capacity substation transformers capable of handling sharp load surges'
    ]
  },
  {
    id: 'it-parks-gcc',
    slug: 'it-parks-gcc',
    title: 'IT Parks & GCC Campuses',
    subtitle: 'Grade-A Workspaces Scaling Up to 25 Floors',
    badge: 'Up to 25 Floors',
    icon: 'Building2',
    summary: 'Vertical technology hubs and Global Capability Center (GCC) office environments designed for enterprise software, SaaS headquarters, and engineering development centers.',
    specs: [
      { label: 'Building Scale', value: 'Up to 25 floors (subject to statutory approvals)' },
      { label: 'Floor Plates', value: '25,000–50,000 sq.ft. column-free spaces' },
      { label: 'Backup Power', value: '100% captive generator and UPS backup' },
      { label: 'Green Rating', value: 'LEED / IGBC Platinum compatible master plan' },
      { label: 'Smart Building', value: 'Integrated BMS with IAQ & demand-driven HVAC' },
      { label: 'Mobility', value: 'Dedicated multi-level parking & high-speed EV plazas' }
    ],
    features: [
      'Tailored for enterprise SaaS, Global Capability Centers (GCCs), and product development',
      'Integrated Command & Control Centre orchestrating building operations',
      'High-speed vertical transport with destination dispatch elevator systems',
      'On-site executive dining, convention facilities, and lifestyle amenities'
    ]
  },
  {
    id: 'edge-computing',
    slug: 'edge-computing',
    title: 'Edge Computing & Micro-DCs',
    subtitle: 'Ultra-Low Latency Regional Infrastructure',
    badge: '<5ms Latency',
    icon: 'Network',
    summary: 'Localized micro-data center facilities delivering single-digit millisecond latency to regional manufacturing clusters, logistics hubs, smart healthcare, and industrial IoT belts.',
    specs: [
      { label: 'Latency Target', value: '< 5ms intra-regional round-trip' },
      { label: 'Capacity Range', value: '2MW to 5MW turnkey modular blocks' },
      { label: 'Footprint', value: '3 to 5 acre compact development sites' },
      { label: 'Deployment', value: 'Containerized & prefabricated modular delivery' },
      { label: 'Management', value: 'Lights-out remote management via central NOC' },
      { label: 'Connectivity', value: 'Direct peering to regional and national Internet Exchanges' }
    ],
    features: [
      'Ideal for Madurai 3-acre ELCOT parcel and regional industrial automation corridors',
      'Rapid turnkey deployment timelines reducing time to market',
      'Hardened physical enclosures with full biometric and remote surveillance access',
      'Carrier-diverse dual uplink rings'
    ]
  },
  {
    id: 'digital-infrastructure',
    slug: 'digital-infrastructure',
    title: 'Integrated Digital Infrastructure',
    subtitle: 'NOC, SOC, BOC & Predictive AI DCIM Command',
    badge: '24/7 Operations',
    icon: 'ShieldCheck',
    summary: 'Unified command and control facilities integrating Network Operations (NOC), Security Operations (SOC), Building Operations (BOC), and predictive AI DCIM telemetry across all sites.',
    specs: [
      { label: 'Uptime Standard', value: '24/7/365 continuous command center monitoring' },
      { label: 'NOC Telemetry', value: 'Live fiber packet loss, route latency & bandwidth' },
      { label: 'SOC Security', value: 'SIEM / SOAR automated multi-vector threat isolation' },
      { label: 'BOC Facilities', value: 'Chiller plant, HVAC, STP water & power SCADA' },
      { label: 'DCIM Engine', value: 'Predictive thermal & capacity forecasting' },
      { label: 'Compliance', value: 'ISO 27001, SOC 2 Type II and Tier ready standards' }
    ],
    features: [
      'Centralized visibility across both Coimbatore and Madurai development clusters',
      'Automated load balancing and thermal anomaly detection using machine intelligence',
      'Multi-tenant and dedicated customer management portals with real-time SLA metrics',
      'Dedicated disaster-resilient communications backup'
    ]
  },
  {
    id: 'technology-ecosystems',
    slug: 'technology-ecosystems',
    title: 'Connected Technology Ecosystems',
    subtitle: 'Integrated Mixed-Use Master-Planned Districts',
    badge: 'Full Ecosystem',
    icon: 'Layers',
    summary: 'Master-planned technology districts combining computing infrastructure with 5-Star business hotels, executive housing, convention centers, and sustainable environmental systems.',
    specs: [
      { label: 'Hospitality', value: '5-Star premium business hotel & serviced suites' },
      { label: 'Executive Living', value: 'Gated executive residences & corporate guest houses' },
      { label: 'Conventions', value: 'State-of-the-art auditorium & tech exhibition hall' },
      { label: 'EV Mobility', value: 'Multi-point ultra-fast EV charging hubs' },
      { label: 'Water Management', value: '100% wastewater recycling (STP) & rainwater harvesting' },
      { label: 'Open Space', value: 'Green biophilic landscaping & pedestrian corridors' }
    ],
    features: [
      'Comprehensive campus lifestyle retaining top global technology engineering talent',
      'Seamless transition between high-security computing zones and commercial hospitality',
      'Zero-discharge environmental stewardship reducing municipal dependency',
      'Complete retail, recreation, and wellness amenities on-site'
    ]
  }
];

export const infrastructurePillars = [
  {
    id: 'power',
    slug: 'power',
    title: 'Power Infrastructure',
    summary: 'Dedicated utility substation yards, dual 110/230kV feeds from TANGEDCO, captive generation farms, and Battery Energy Storage Systems (BESS).',
    metrics: ['Dual 110/230kV Feeds', 'Dedicated Substation Yards', 'BESS Battery Integration', 'Green Power Wheeling Corridors']
  },
  {
    id: 'connectivity',
    slug: 'connectivity',
    title: 'Connectivity & Fiber',
    summary: 'Carrier-neutral dual Meet-Me Rooms (MMRs), diverse entry points, dark fiber conduits, and ultra-low latency interconnects to Chennai and Bengaluru exchange hubs.',
    metrics: ['Carrier-Neutral Dual MMRs', 'Diverse Physical Conduits', 'Dark Fiber Backbone', '<10ms Regional Interconnect']
  },
  {
    id: 'cooling',
    slug: 'cooling',
    title: 'Cooling & Thermal',
    summary: 'High-efficiency closed-loop chilled water plants, Direct Liquid Cooling (DLC), rear-door heat exchangers, and target PUE ≤ 1.35.',
    metrics: ['Direct-to-Chip (DLC) Ready', 'Target PUE ≤ 1.35', 'Closed-Loop Chilled Water', 'Zero Water Waste Design']
  },
  {
    id: 'security',
    slug: 'security',
    title: 'Security & Compliance',
    summary: '5-tier perimetral security, anti-ram barriers, multi-factor biometric authentication, SEZ statutory clearances, and unencumbered land titles.',
    metrics: ['5-Tier Perimetral Controls', 'Biometric & CCTV Analytics', '100% Clear Title Diligence', 'ELCOT SEZ Statutory Ease']
  },
  {
    id: 'command-control',
    slug: 'command-control',
    title: 'Command & Control (NOC/SOC/DCIM)',
    summary: 'Consolidated mission control facilities with integrated Network Operations (NOC), Security Operations (SOC), Building Operations (BOC), and predictive AI DCIM telemetry.',
    metrics: ['24/7/365 Continuous Watch', 'AI-Driven DCIM Telemetry', 'Automated Threat Isolation', 'Unified SCADA Automation']
  }
];
