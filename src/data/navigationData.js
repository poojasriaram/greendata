// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Mega Menu & Site Navigation Hierarchy (ISI Reference)
// ══════════════════════════════════════════════════════════════════════════

export const navigationMenu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
    dropdownWidth: 'compact',
    columns: [
      {
        title: 'Corporate Platform',
        badge: 'Enterprise',
        items: [
          { name: 'About GreenNext', desc: 'Platform overview, mission & values', path: '/about' },
          { name: 'Vision & Mission', desc: 'Building South India\'s digital infrastructure', path: '/about/vision-mission' },
          { name: 'Leadership & Governance', desc: 'Executive leadership & development team', path: '/about/leadership' },
          { name: 'Core Capabilities', desc: 'Master planning, power & co-development', path: '/about/capabilities' },
          { name: 'Sustainability & ESG', desc: 'Green power, BESS & stormwater management', path: '/about/sustainability' },
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    path: '/solutions',
    dropdownWidth: 'wide',
    columns: [
      {
        title: 'Compute & Workspaces',
        badge: 'Tier III/IV Ready',
        items: [
          { name: 'Data Center Infrastructure', desc: 'Hyperscale & enterprise colocation campuses', path: '/solutions/data-centers', badge: 'Hyperscale' },
          { name: 'AI & GPU Infrastructure', desc: 'High-density (30–100kW+), liquid-cooled clusters', path: '/solutions/ai-gpu', badge: '30-100kW+' },
          { name: 'IT Parks & GCC Campuses', desc: 'Grade-A tech workspaces scaling up to 25 floors', path: '/solutions/it-parks-gcc' },
        ]
      },
      {
        title: 'Edge & Connected Ecosystems',
        badge: 'Integrated',
        items: [
          { name: 'Edge Computing & Nodes', desc: 'Ultra-low latency micro-DCs for regional industry', path: '/solutions/edge-computing' },
          { name: 'Digital Infrastructure', desc: 'Integrated NOC, SOC, BOC & AI DCIM command', path: '/solutions/digital-infrastructure' },
          { name: 'Integrated Ecosystems', desc: '5-Star business hotel, executive housing & EV', path: '/solutions/technology-ecosystems' },
        ]
      }
    ],
    footerLink: { text: 'Explore All 6 Development Solutions →', path: '/solutions' }
  },
  {
    title: 'Infrastructure',
    path: '/infrastructure',
    dropdownWidth: 'wide',
    columns: [
      {
        title: 'Power & Cooling Architecture',
        badge: 'Mission-Critical',
        items: [
          { name: 'Power Infrastructure', desc: 'Dedicated high-voltage substations, dual 110/230kV feeds & BESS', path: '/infrastructure/power' },
          { name: 'Cooling & Thermal', desc: 'Direct liquid-to-chip (DLC) & target PUE ≤ 1.35', path: '/infrastructure/cooling' },
          { name: 'Command & Control', desc: 'Centralized 24/7 NOC, SOC, BOC & predictive AI DCIM', path: '/infrastructure/command-control' },
        ]
      },
      {
        title: 'Connectivity & Security',
        badge: 'Redundant',
        items: [
          { name: 'Connectivity & Fiber', desc: 'Carrier-neutral dual MMRs and diverse dark fiber rings', path: '/infrastructure/connectivity' },
          { name: 'Security & Compliance', desc: '5-Tier physical security, biometrics & SEZ clearances', path: '/infrastructure/security' },
        ]
      }
    ],
    footerLink: { text: 'View Infrastructure Technical Specifications →', path: '/infrastructure' }
  },
  {
    title: 'Projects',
    path: '/projects',
    dropdownWidth: 'wide',
    columns: [
      {
        title: 'Coimbatore Cluster (98 AC)',
        badge: 'Flagship Hub',
        items: [
          { name: 'Coimbatore Flagship (40 AC)', desc: 'Zone A (15 AC DC) + Zone B (25 AC IT Park)', path: '/projects/coimbatore', badge: 'Flagship' },
          { name: 'MindSpace Campus (8 AC)', desc: 'Single-tenant GCC & engineering workspace', path: '/projects/mindspace' },
          { name: 'Sangarilla Mega Campus (50 AC)', desc: 'Large-scale canvas for integrated tech district', path: '/projects/sangarilla' },
        ]
      },
      {
        title: 'Madurai Cluster (93 AC)',
        badge: 'Southern Corridor',
        items: [
          { name: 'Madurai ELCOT (48 AC)', desc: '30 AC (DC/IT), 15 AC (Tech), 3 AC (Edge Node)', path: '/projects/madurai', badge: 'ELCOT' },
          { name: 'TechMax Technology Park (15 AC)', desc: 'Specialized technology park for regional SaaS', path: '/projects/techmax' },
          { name: 'GreenMinds Campus (30 AC)', desc: 'Mid-scale energy-conscious DC & IT campus', path: '/projects/greenminds' },
        ]
      }
    ],
    footerLink: { text: 'Open Interactive Land Ledger (191+ Verified Acres) →', path: '/projects' }
  },
  {
    title: 'Industries',
    path: '/industries',
    dropdownWidth: 'wide',
    columns: [
      {
        title: 'Hyperscale & Enterprise',
        items: [
          { name: 'Cloud & Hyperscale', desc: 'Sovereign cloud regions, sub-stations & high availability', path: '/industries/cloud-hyperscale' },
          { name: 'Artificial Intelligence & HPC', desc: 'High thermal density power clusters & model training', path: '/industries/artificial-intelligence' },
          { name: 'Global Capability Centers (GCC)', desc: 'Turnkey enterprise workspaces with deep tech talent', path: '/industries/gcc' },
        ]
      },
      {
        title: 'Industry Verticals',
        items: [
          { name: 'Enterprise Technology', desc: 'SaaS headquarters, R&D labs & software engineering', path: '/industries/enterprise' },
          { name: 'Manufacturing & IoT', desc: 'Low-latency edge compute for industrial corridors', path: '/industries/manufacturing' },
          { name: 'Healthcare & Telecom', desc: 'Mission-critical telemetry & telecom PoP infrastructure', path: '/industries/healthcare' },
        ]
      }
    ],
    footerLink: { text: 'Discover Solutions by Industry →', path: '/industries' }
  },
  {
    title: 'Insights',
    path: '/insights',
    dropdownWidth: 'compact',
    columns: [
      {
        title: 'Research & Outlook',
        badge: '2030–2047',
        items: [
          { name: 'Market Outlook (2030–2047)', desc: 'India data center capacity forecasts (4GW to 65GW)', path: '/insights/market-outlook' },
          { name: 'AI Thermal & Power Trends', desc: 'From air cooling to 100kW+ direct liquid cooling', path: '/insights/ai-power-trends' },
          { name: 'Tamil Nadu Digital Corridor', desc: 'Why Coimbatore & Madurai lead regional expansion', path: '/insights/tamil-nadu-corridor' },
        ]
      }
    ],
    footerLink: { text: 'Browse Executive Intelligence Dossiers →', path: '/insights' }
  },
  {
    title: 'Partners',
    path: '/partners',
  },
  {
    title: 'Contact',
    path: '/contact',
  }
];
