// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Verified Portfolio Land Ledger & Projects Data
// ══════════════════════════════════════════════════════════════════════════

export const portfolioSummary = {
  totalAcres: '191+ Verified Acres (200+ AC Scalable)',
  locationsCount: 6,
  clustersCount: 2,
  eoiReference: 'DC-ITP-TN/JV/2026/001'
};

export const projectsList = [
  {
    id: 'coimbatore',
    slug: 'coimbatore',
    name: 'Coimbatore Flagship Campus',
    cluster: 'Coimbatore Cluster',
    clusterId: 'coimbatore',
    totalAcres: 40,
    tagline: 'Dual-Zone Hyperscale Data Center & High-Rise IT Park Flagship',
    status: 'Active Flagship',
    featured: true,
    zones: [
      {
        name: 'Zone A · Dedicated Data Center Campus',
        acres: 15,
        type: 'datacenter',
        specs: [
          'Dedicated High-Voltage Substation Yard',
          'Dual 110kV/230kV Grid Feeds from TANGEDCO',
          'Direct-to-Chip Liquid Cooling (DLC) Ready',
          'Target PUE ≤ 1.35 with Closed-Loop Water Recovery',
          'Fast-Start Diesel Gen-Sets + BESS Battery Storage',
          'Carrier-Neutral Dual MMRs with Diverse Fiber Paths'
        ],
        desc: 'Master-planned for enterprise colocation, hyperscale deployments, AI/GPU acceleration clusters (30–100kW+ rack density), and high-performance computing.'
      },
      {
        name: 'Zone B · Integrated IT Park & Digital Workspace',
        acres: 25,
        type: 'itpark',
        specs: [
          'Building Potential up to 25 Floors (Subject to statutory sanctions)',
          '25,000–50,000 sq.ft. Column-Free Efficient Floor Plates',
          'Integrated Central Command Hub: NOC · SOC · BOC · AI DCIM',
          '5-Star Business Hotel & Conference Convention Center',
          'Executive Residences & Dedicated EV Charging Plaza',
          'Sustainable STP Water Treatment & Stormwater Management'
        ],
        desc: 'Premium commercial technology workspace engineered for SaaS headquarters, Global Capability Centers (GCCs), and technology innovation labs.'
      }
    ],
    highlights: [
      'Strategic arterial frontage along Coimbatore tech growth corridor',
      'Direct connectivity to Tier-1 universities and engineering talent',
      'Dual utility power lines with N+1 / 2N concurrent maintainability',
      'Clear unencumbered legal title with complete statutory diligence'
    ]
  },
  {
    id: 'madurai',
    slug: 'madurai',
    name: 'Madurai ELCOT Corridor Parcels',
    cluster: 'Madurai Cluster (ELCOT)',
    clusterId: 'madurai',
    totalAcres: 48,
    tagline: 'Modular 30 AC, 15 AC & 3 AC Parcels in State IT Industrial Ecosystem',
    status: 'Active ELCOT',
    featured: true,
    parcels: [
      {
        name: 'Parcel 01 · Flagship Data Center & IT Park',
        acres: 30,
        type: 'datacenter',
        desc: 'Optimized for mid-scale, high-density data centers and complementary enterprise workspace serving southern Tamil Nadu and industrial automation corridors.',
        power: 'Dedicated ELCOT Substation Feed (25MW–60MW Ready)'
      },
      {
        name: 'Parcel 02 · Specialized Technology Park & GCC',
        acres: 15,
        type: 'itpark',
        desc: 'Engineered for Global Capability Centers (GCCs), software development, and specialized product engineering centers with immediate SEZ and statutory benefits.',
        power: 'High-Reliability Industrial Grid Feed'
      },
      {
        name: 'Parcel 03 · Nodal Edge Micro-Data Center & PoP',
        acres: 3,
        type: 'edge',
        desc: 'Designed for a regional telecom point-of-presence (PoP), managed interconnect node, or micro-DC delivering single-digit millisecond latency to local enterprises.',
        power: 'Nodal High-Reliability Power Corridors (2MW–5MW)'
      }
    ],
    highlights: [
      'Situated within the official ELCOT IT Park ecosystem in Madurai',
      'Established statutory infrastructure and streamlined single-window clearances',
      'Direct highway access to Madurai International Airport and logistics corridors',
      'Abundant engineering university graduate pipeline across southern districts'
    ]
  },
  {
    id: 'sangarilla',
    slug: 'sangarilla',
    name: 'Sangarilla Mega Campus',
    cluster: 'Coimbatore Cluster',
    clusterId: 'coimbatore',
    totalAcres: 50,
    tagline: 'The Portfolio\'s Largest Contiguous Master-Planned Tech District',
    status: 'Indicative Opportunity',
    featured: true,
    type: 'mixed',
    desc: 'The largest single contiguous canvas in the GreenNext portfolio. Engineered for multi-stage phased institutional development spanning hyperscale data center clusters, large-scale commercial IT campuses, and integrated lifestyle amenities.',
    power: 'High-Capacity Substation Feeds (50MW–100MW+ Scale)',
    highlights: [
      '50 acres of contiguous land for phased institutional investment',
      'Supports unified campus design with shared power substation and green power corridors',
      'Ideal for large-scale technology parks, enterprise training universities, and cloud campuses'
    ]
  },
  {
    id: 'mindspace',
    slug: 'mindspace',
    name: 'MindSpace Campus',
    cluster: 'Coimbatore Cluster',
    clusterId: 'coimbatore',
    totalAcres: 8,
    tagline: 'Compact, High-Efficiency Campus for Single-Tenant GCCs & Engineering',
    status: 'Indicative Opportunity',
    featured: false,
    type: 'itpark',
    desc: 'A right-sized footprint optimized for single-tenant Global Capability Centers (GCCs), managed engineering offices, and enterprise SaaS headquarters requiring fast time-to-market.',
    power: 'Dedicated Enterprise Power Substation Connection',
    highlights: [
      'Lean master plan facilitates rapid statutory approval and fast-track EPC delivery',
      'Direct connectivity to key transit corridors and educational institutes in Coimbatore',
      'Modern floor plates optimized for collaborative tech workspace'
    ]
  },
  {
    id: 'techmax',
    slug: 'techmax',
    name: 'TechMax Technology Park',
    cluster: 'Madurai Cluster',
    clusterId: 'madurai',
    totalAcres: 15,
    tagline: 'Specialized Technology Park in Madurai\'s Growing IT Corridor',
    status: 'Indicative Opportunity',
    featured: false,
    type: 'itpark',
    desc: 'Specialized tech park designed to serve regional manufacturing automation, automotive component software, digital healthcare, and enterprise cloud applications.',
    power: 'Industrial Grid Feeds with Backup Generation',
    highlights: [
      'Strategic location along Madurai\'s primary industrial tech growth belt',
      'Designed for enterprise technology firms and localized IT operations',
      'Cost-effective operating environment with strong talent retention'
    ]
  },
  {
    id: 'greenminds',
    slug: 'greenminds',
    name: 'GreenMinds Campus',
    cluster: 'Madurai Cluster',
    clusterId: 'madurai',
    totalAcres: 30,
    tagline: 'Mid-Scale Energy-Conscious Data Center & Complementary IT Park',
    status: 'Indicative Opportunity',
    featured: false,
    type: 'datacenter',
    desc: 'Mid-scale site tailored for sustainable, energy-conscious data center deployments and complementary technology development, addressing regional disaster recovery and cloud demand.',
    power: 'Renewable Wheeling Corridors & Substation Integration',
    highlights: [
      'Engineered for green energy integration and solar/wind power wheeling',
      'Supports high-density colocation and modular IT workspaces',
      'Ideal disaster recovery (DR) location for national cloud operators'
    ]
  }
];
