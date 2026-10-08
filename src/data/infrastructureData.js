// GreenNext Technologies — Non-Residential Institutional Infrastructure Catalog
// Strictly Commercial, Tech, Data Center, Industrial & Institutional Hospitality (No Residential)

export const infrastructureCategories = [
  {
    id: "it-knowledge",
    slug: "it-parks-knowledge-cities",
    title: "IT & Knowledge Infrastructure",
    subtitle: "Future-Ready Campuses, R&D Clusters & Global Capability Centers",
    icon: "building-2",
    badge: "Grade A Institutional",
    stats: {
      developedArea: "12M+ Sq.Ft.",
      efficiency: "84% Floorplate Efficiency",
      greenRating: "IGBC Platinum Certified",
      powerBackup: "100% N+1 Redundancy"
    },
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    overview: "Integrated IT campuses engineered for multinational technology enterprises, Global Capability Centers (GCCs), semiconductor design labs, and software engineering headquarters.",
    subcategories: [
      {
        title: "IT Parks",
        tagline: "High-Efficiency Grade-A Commercial Towers & Incubation Labs",
        description: "Modern, sustainable multi-tenanted and single-tenant IT office towers featuring flexible floor plates (40,000 to 80,000 sq.ft.), high floor-to-ceiling heights (4.2m), advanced air filtration (MERV-13), smart BMS automation, and dedicated incubation ecosystems.",
        features: [
          "Super large contiguous floor plates with zero column obstruction",
          "Dedicated 24/7 dual grid substations with auto bus-coupler transfer",
          "Incubation centers with rapid plug-and-play scaling for tech teams",
          "Multi-tier biometric physical security and command control rooms"
        ],
        idealFor: ["Global Capability Centers (GCCs)", "Software Engineering & SaaS Hubs", "Fintech & Insurtech R&D", "AI & ML Product Centers"]
      },
      {
        title: "Knowledge Cities",
        tagline: "Self-Sustaining Integrated Innovation Hubs & Research Universities",
        description: "Expansive 50+ to 100+ acre master-planned institutional ecosystems integrating advanced corporate research facilities, academic research tie-ups, corporate auditoriums, executive transit hubs, and lifestyle amenities.",
        features: [
          "Seamless blend of university research labs and corporate innovation centres",
          "Shared high-performance computing clusters and prototyping facilities",
          "Zero-discharge water recycling and 100% solar micro-grid integration",
          "Dedicated conference districts and executive seminar spaces"
        ],
        idealFor: ["Semiconductor Design Campuses", "Biotech & Genomics Research", "Corporate University Headquarters", "DeepTech Innovation Hubs"]
      },
      {
        title: "Innovation Districts",
        tagline: "Co-Working Ecosystems, Prototyping Labs & Venture Accelerators",
        description: "Dense urban and suburban tech nodes combining open-concept co-working studios, rapid prototyping fabrication labs, venture studio spaces, and collaborative tech testbeds.",
        features: [
          "Rapid-scale modular office suites from 50 to 1,500 seats",
          "Hardware fabrication labs equipped with precision 3D printing & testing benches",
          "Community amphitheatres and technology showcase atriums",
          "Direct venture partner and institutional funding connection nodes"
        ],
        idealFor: ["Startups & High-Growth Scaleups", "Hardware & IoT Accelerators", "Venture Studio Labs", "Creative & Engineering Guilds"]
      }
    ]
  },
  {
    id: "data-centers",
    slug: "hyperscale-data-centers",
    title: "Hyperscale & AI Data Centers",
    subtitle: "Carrier-Neutral, High-Density Computing & Liquid-Cooled Infrastructure",
    icon: "server",
    badge: "Tier III / IV Ready",
    stats: {
      powerCapacity: "350+ MW Dedicated",
      pue: "1.25 Design Target",
      uptime: "99.995% Availability",
      cooling: "Direct-to-Chip Liquid Ready"
    },
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    overview: "Mission-critical, ultra-low latency digital infrastructure platforms engineered to sustain cloud hyperscalers, generative AI model training, enterprise BFSI, and telecom edge networks.",
    subcategories: [
      {
        title: "Hyperscale Data Centers",
        tagline: "100+ MW Capacity Campuses for Global Cloud Providers",
        description: "Multi-building campus developments offering dedicated substation hookups (230kV / 110kV), custom building designs, dual fiber ring conduits, and carrier-neutral telecommunication meet-me rooms.",
        features: [
          "100+ MW dedicated scalable power capacity from direct grid & green captive solar/wind",
          "N+N electrical redundancy with rotary UPS and fuel backup for 72+ continuous hours",
          "Direct-to-chip liquid cooling and rear-door heat exchanger compatibility",
          "Multi-tenant and dedicated compound security with anti-ram perimeter barriers"
        ],
        idealFor: ["Global Cloud Service Providers (CSPs)", "Sovereign AI Infrastructure", "Global OTT & Media Streaming Platforms", "Tier-1 Telecom Telcos"]
      },
      {
        title: "Enterprise Data Centers",
        tagline: "Mid-Scale Resilient Colocation for BFSI, Healthcare & Pharma",
        description: "High-security Tier-III and Tier-IV compliant facilities tailored for regulated industries requiring physical cage isolation, stringent compliance auditing (PCI-DSS, SOC 2, HIPAA), and zero downtime.",
        features: [
          "Private dedicated server suites and secured biometric cages",
          "Real-time environmental telemetry and PUE monitoring dashboards",
          "Multi-cloud on-ramps (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect)",
          "Dual active-active power feeds with 2N power distribution units"
        ],
        idealFor: ["Commercial Banks & Payment Gateways", "Healthcare Data Repositories", "Pharma R&D Data Vaults", "Automotive & Industrial Telemetry"]
      },
      {
        title: "Colocation Facilities",
        tagline: "Shared Hosting Infrastructure with Modular Density Expansion",
        description: "Flexible, scalable retail and wholesale colocation environments designed for organizations seeking high connectivity, rapid deployment, and elastic rack power configurations.",
        features: [
          "Cabinet power provisioning from 3kW to 30kW per rack",
          "Remote-hands technical engineering available 24/7/365",
          "Diverse meet-me rooms connecting 12+ national and international carriers",
          "Rapid SLA-backed cross-connect provisioning within 4 hours"
        ],
        idealFor: ["Regional Enterprises", "Fintech API Platforms", "Managed IT Service Providers", "Content Delivery Networks (CDNs)"]
      },
      {
        title: "AI-Optimized Data Centers",
        tagline: "Ultra-High-Density GPU Clusters & Next-Gen Thermal Architecture",
        description: "Specialized infrastructure engineered explicitly for AI/LLM model training, generative inference, and high-performance computing (HPC) with extreme power density (40kW to 100kW+ per rack).",
        features: [
          "Closed-loop liquid cooling and immersion tank compatibility",
          "Ultra-low latency InfiniBand and RoCE networking fabric topologies",
          "Reinforced structural floor loading (>2,500 kg/sq.m.) for dense GPU server racks",
          "100% renewable power matching with real-time green energy sourcing"
        ],
        idealFor: ["AI Foundation Model Creators", "Autonomous Vehicle Simulation Labs", "Scientific & Quantum Supercomputing", "Bio-molecular Simulation Engines"]
      }
    ]
  },
  {
    id: "convention-spaces",
    slug: "convention-event-spaces",
    title: "Convention & Event Spaces",
    subtitle: "World-Class Exhibition Halls, Trade Centers & Mega Auditoriums",
    icon: "mic",
    badge: "Global MICE Standard",
    stats: {
      capacity: "10,000+ Delegates",
      clearHeight: "14m Column-Free",
      exhibitionFloor: "250,000 Sq.Ft.",
      parking: "3,500+ Vehicle Capacity"
    },
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    overview: "State-of-the-art MICE (Meetings, Incentives, Conferences & Exhibitions) infrastructure engineered for global technology expos, industrial trade fairs, shareholder meets, and corporate summits.",
    subcategories: [
      {
        title: "Convention Halls",
        tagline: "Massive Column-Free Halls for Global Tech Summits & Expos",
        description: "Versatile, acoustically isolated column-free convention spaces with operable acoustic partition walls, heavy floor loading, and integrated broadcast-grade audiovisual systems.",
        features: [
          "Seating flexibility for 500 to 5,000+ delegates in plenary configurations",
          "Integrated VIP lounges, bilateral meeting suites, and press conference studios",
          "Overhead motorized rigging grids with 10-ton point load capacity",
          "High-capacity gigabit Wi-Fi 6E infrastructure handling 20,000+ concurrent connections"
        ],
        idealFor: ["Global Technology Summits", "International Government Summits", "Annual Corporate Shareholder Conclaves", "Industry Award Galas"]
      },
      {
        title: "Exhibition Centers",
        tagline: "Heavy-Duty Floor Loading for Industrial & Technology Fairs",
        description: "Industrial-grade exposition halls with ground-level roll-in access, high ceilings (12m to 16m), in-floor utility trenches (power, water, compressed air, fiber), and logistics marshaling yards.",
        features: [
          "Heavy structural floor loading of up to 50 kN/sq.m. for heavy machinery displays",
          "Direct container truck drive-in access doors (6m x 6m clearance)",
          "Integrated customs warehousing and bonded cargo holding facilities",
          "Modular electrical tap-off boxes every 6 meters across exhibition floors"
        ],
        idealFor: ["Aerospace & Defense Trade Fairs", "EV & Automotive Showcases", "Robotics & Automation Expos", "Global Trade & Export Expos"]
      },
      {
        title: "Auditoriums & Amphitheatres",
        tagline: "Acoustically Tuned Venues for Keynotes & Seminars",
        description: "Ergonomically designed tiered seating auditoriums with Meyer Sound acoustic optimization, motorized LED video walls, and multilingual simultaneous interpretation booths.",
        features: [
          "Fixed tiered seating ranging from 300 to 1,500 seats with integrated writing tablets",
          "Simultaneous translation booths for 8 international languages",
          "Broadcast-grade 4K live streaming and production control rooms",
          "Green rooms and speaker hospitality suites"
        ],
        idealFor: ["Product Keynotes & Unpack Events", "Academic Convocations", "Scientific Symposia", "Investor Day Presentations"]
      }
    ]
  },
  {
    id: "hospitality",
    slug: "corporate-hospitality",
    title: "Hospitality (Non-Residential)",
    subtitle: "Enterprise Business Hotels, Convention Accommodations & Serviced Suites",
    icon: "hotel",
    badge: "Executive Business Class",
    stats: {
      roomInventory: "2,000+ Keys",
      fAndB: "Fine Dining & Exec Lounges",
      wellness: "24/7 Fitness & Transit Hubs",
      location: "Direct IT Park & Airport Proximity"
    },
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    overview: "Institutional non-residential hospitality assets integrated into technology campuses and logistics gateways to support traveling executives, conference delegates, and corporate leadership.",
    subcategories: [
      {
        title: "Business Hotels",
        tagline: "Efficient Comfort & Seamless Connectivity for Corporate Travelers",
        description: "4-star and 5-star standard business hotels featuring ergonomic in-room workstations, 24/7 business centers, express laundry, and direct pedestrian connectivity to IT park towers.",
        features: [
          "High-speed fiber connectivity with in-room secure VPN support",
          "Smart room automation (climate, lighting, keyless mobile entry)",
          "Round-the-clock grab-and-go executive dining and business center facilities",
          "Quiet work-pods in hotel lobby lounges"
        ],
        idealFor: ["IT & Consulting Traveling Professionals", "Visiting Executive Teams", "Client Audit Delegations", "Transit Business Travelers"]
      },
      {
        title: "Convention Hotels",
        tagline: "Integrated Hospitality for Mega Event Attendees & Organizers",
        description: "Large-capacity hotels (300+ to 600+ keys) physically connected via skybridges to our exhibition and convention centers, featuring dedicated group check-in foyers and extensive ballrooms.",
        features: [
          "Direct enclosed all-weather skybridge access to convention halls",
          "Dedicated mass group check-in and luggage staging zones",
          "Grand ballrooms (15,000+ sq.ft.) for VIP dinners and breakout sessions",
          "Helipad access and executive motorcade staging areas"
        ],
        idealFor: ["Mega Conference Attendees", "Exhibitor Delegations", "Government & Diplomatic Corps", "International Trade Organizers"]
      },
      {
        title: "Luxury Hotels",
        tagline: "World-Class Executive Suites & Private Corporate Boardrooms",
        description: "Ultra-premium 5-star luxury hospitality properties curated for C-suite leadership, institutional investors, and international dignitaries.",
        features: [
          "Private presidential and diplomatic suites with dedicated butler service",
          "High-security private boardroom suites with secure video conferencing",
          "Curated fine-dining restaurants and executive cigar lounges",
          "Chauffeured EV fleet and private airport lounge fast-track protocols"
        ],
        idealFor: ["C-Suite Executives & Board Members", "Institutional Private Equity Teams", "International Diplomatic Delegations", "Global Tech Founders"]
      },
      {
        title: "Serviced Corporate Apartments",
        tagline: "Turnkey Long-Stay Accommodations for Relocating Professionals",
        description: "Fully-furnished, non-residential extended-stay suites designed for IT engineers, project managers, and technical consultants on 1 to 12 month corporate assignments.",
        features: [
          "Fully equipped modular kitchenettes and in-suite washer-dryers",
          "Daily housekeeping, linen service, and high-speed dedicated broadband",
          "Access to shared corporate co-working lounges and gym facilities",
          "Consolidated single-invoice corporate billing with GST invoicing"
        ],
        idealFor: ["Project Migration Teams", "Expatriate Engineering Consultants", "Transition & Training Specialists", "Long-term Contractor Teams"]
      }
    ]
  },
  {
    id: "precision-industrial",
    slug: "precision-industrial",
    title: "High-End Industrial & Precision Engineering",
    subtitle: "Advanced Manufacturing, Aerospace, SpaceTech & Robotics Hubs",
    icon: "cpu",
    badge: "Industry 4.0 Ready",
    stats: {
      powerFeed: "Up to 50 MVA Substation",
      craneCapacity: "Up to 25 Ton Overhead",
      floorLoad: "80 kN/sq.m. Heavy Duty",
      clearance: "12m to 18m Clear Height"
    },
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    overview: "Specialized, heavy-duty precision manufacturing campuses engineered for aerospace, defense, electric mobility, industrial robotics, space technology, and telecommunication hardware.",
    subcategories: [
      {
        title: "Drone & UAV Manufacturing Facilities",
        tagline: "Precision Cleanrooms, Avionics Labs & Dedicated Flight Test Corridors",
        description: "Specialized facilities designed for unmanned aerial vehicle (UAV) assembly, composite materials fabrication, sensor calibration, and avionics testing with integrated outdoor test flight zones.",
        features: [
          "ISO Class 7 and Class 8 cleanrooms for sensor assembly and optical alignment",
          "Anti-static ESD flooring throughout precision manufacturing bays",
          "Designated GPS-coordinated test flight cages and drone tethering systems",
          "Hazardous material battery storage (Li-ion/solid-state) with explosion-proof fire suppression"
        ],
        idealFor: ["Commercial & Agricultural Drone Manufacturers", "Defense UAV Developers", "Avionics & Sensor Calibration Labs", "Autonomous Navigation Systems"]
      },
      {
        title: "EV & Battery Manufacturing Plants",
        tagline: "High-Power Gigafactory Infrastructure & Precision Assembly Lines",
        description: "High-capacity plants engineered for electric vehicle battery pack assembly, motor winding, power electronics manufacturing, and end-of-line vehicle dyno testing.",
        features: [
          "Ultra-dry rooms (Dew Point < -40°C) for lithium battery cell staging",
          "Dedicated high-voltage testing and thermal runaway containment chambers",
          "Heavy overhead crane runways with 15 to 25-ton lifting capacities",
          "Effluent treatment plants (ETP) with zero liquid discharge (ZLD) certification"
        ],
        idealFor: ["2-Wheeler & 4-Wheeler EV OEMs", "Battery Pack Assemblers", "EV Fast-Charger Manufacturers", "Power Electronics & Inverter Makers"]
      },
      {
        title: "Robotics & Automation Manufacturing Units",
        tagline: "Motion Control Labs, Cobot Assembly & Precision Mechatronics",
        description: "Clean, high-precision industrial facilities tailored for industrial articulated robots, collaborative robots (Cobots), CNC machine centers, and automated guided vehicles (AGVs).",
        features: [
          "Vibration-isolated precision testing slabs for micro-machining and robotic calibration",
          "High-capacity pneumatic compressed air network (8–10 bar continuous)",
          "Integrated hardware-in-the-loop (HIL) automation simulation zones",
          "Heavy-duty industrial floor coatings with chemical and scratch resistance"
        ],
        idealFor: ["Industrial Robotics Manufacturers", "Warehouse Automation OEMs", "Precision CNC Tooling Companies", "Servo Motors & Actuator Producers"]
      },
      {
        title: "SpaceTech Manufacturing Complexes",
        tagline: "Satellite Assembly, Cleanrooms & Propulsion Testing Labs",
        description: "High-security aerospace and SpaceTech facilities engineered for small satellite bus fabrication, payload integration, thermal vacuum testing, and propulsion sub-assembly.",
        features: [
          "Class 10,000 / ISO 7 laminar airflow cleanrooms for satellite integration",
          "Thermal vacuum chamber (TVAC) and acoustic vibration testing pads",
          "Reinforced propulsion sub-system test cells with blast-deflection architecture",
          "Stringent security zoning with compartmentalized access control"
        ],
        idealFor: ["Small-Sat & CubeSat Manufacturers", "Launch Vehicle Subsystem Builders", "Satellite Ground Equipment Makers", "Space Optics & Payload Specialists"]
      },
      {
        title: "Communication Technology Manufacturing Hubs",
        tagline: "5G/6G Hardware, Optical Transceivers & Telecom Equipment",
        description: "State-of-the-art facilities for high-frequency telecommunications equipment, optical fiber cable manufacturing, RF antenna testing, and printed circuit board assembly (PCBA).",
        features: [
          "Anechoic RF testing chambers for electromagnetic compatibility (EMC) certification",
          "High-speed SMT (Surface Mount Technology) clean production lines",
          "Nitrogen gas supply line integration and continuous humidity control",
          "Secure bonded export warehousing with green customs clearance"
        ],
        idealFor: ["5G/6G Base Station Manufacturers", "Optical Fiber & Transceiver Producers", "Satellite Telecom Hardware", "Network Switch & Router Assemblers"]
      },
      {
        title: "Multi-Storied Industrial Complexes",
        tagline: "High-Density Vertical Manufacturing for Complex Electronic Systems",
        description: "Vertical, multi-tier industrial buildings that maximize land footprint, equipped with heavy-duty goods elevators, ramp-up vehicle logistics, and modular plug-and-play manufacturing floors.",
        features: [
          "Heavy structural floor loading: 15 to 25 kN/sq.m. on upper levels",
          "High-capacity 5-ton to 10-ton industrial freight elevators",
          "Drive-up vehicular ramps for medium-sized logistics trucks to upper floors",
          "Dedicated vertical MEP shafts for custom exhaust, compressed air, and gases"
        ],
        idealFor: ["Semiconductor Assembly & Test (OSAT)", "Medical Device Manufacturing", "Precision Watch & Sensor Fabrication", "High-Density Consumer Electronics"]
      }
    ]
  }
];
