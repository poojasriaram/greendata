import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Download, Share2, Shield, CheckCircle2, TrendingUp, Cpu, MapPin } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import Breadcrumb from '../../components/layout/Breadcrumb';
import ConversionCtaBanner from '../../components/ui/ConversionCtaBanner';
import { marketOutlookData } from '../../data/industriesData';

const insightArticles = {
  'market-outlook': {
    title: 'India Data Center Capacity Forecast (2030–2047): The Emergence of South India Regional Corridors',
    badge: 'STRATEGIC RESEARCH PAPER',
    author: 'GreenNext Infrastructure Research Group',
    date: 'February 2026',
    readTime: '6 min read',
    lead: 'An institutional examination of India\'s expanding computing capacity from 4GW in 2030 to ~65GW by 2047, and why the next wave of multi-gigawatt computing must decentralize into secondary industrial corridors in Tamil Nadu.',
    sections: [
      {
        heading: '1. The Macro Computing Supercycle: 4GW to 65GW',
        content: `India is undergoing the fastest digital infrastructure scaling in Asia. Driven by sovereign data compliance, 5G enterprise networks, generative AI workloads, and massive digital public infrastructure (DPI), India's total data center capacity requirements are forecast to expand tenfold over the next two decades.

While Tier-1 metros (Mumbai, Chennai, NCR) currently represent the bulk of operational whitespace, they are encountering severe structural friction: grid saturation, escalating industrial land costs ($2M+ per acre in prime metro corridors), dual-grid feed delays of 24–36 months, and civic water constraints.`
      },
      {
        heading: '2. The 2030, 2035 & 2047 Horizon Benchmarks',
        content: `• 2030 (4 GW to 12 GW): The baseline cloud migration and enterprise colocation wave. Regional state policies mandate digital sovereignty, forcing high-reliability infrastructure beyond traditional coastal metro nodes.

• 2035 (~13.8 GW): The AI Workload Inflection Point. Dedicated model training and inferencing clusters demand up to 100kW+ per rack, requiring direct substation feeds and direct liquid cooling architectures. Over $71.6B in direct capital expenditure is projected across Indian data center infrastructure by this window.

• 2047 (~65 GW): The Centenary Digital Economy Superpower. Massive national compute clusters consuming 394 TWh annually, underpinning automated industries, nationwide robotic factories, and integrated utility grids.`
      },
      {
        heading: '3. Why Tamil Nadu\'s Secondary Hubs Offer Decisive Advantages',
        content: `Tamil Nadu is uniquely positioned with over 50% renewable energy installed in its state grid (highest wind & solar mix in India) and uninterrupted high-voltage transmission networks.

Coimbatore and Madurai represent the two primary growth valves:
1. High-Voltage Power Accessibility: Direct connections to 110kV and 230kV TANGEDCO/TANTRANSCO grid substations with multi-megawatt allocation feasibility within 6–12 months.
2. Contiguous Land Scale: GreenNext controls 191+ combined acres in Coimbatore (98 AC) and Madurai (93 AC), allowing single-tenant 50–100MW campus masterplans that are impossible in congested coastal metros.
3. Subsea & Terrestrial Connectivity: Direct, low-latency diverse fiber loops connecting back to Chennai landing stations (SMC, AAE-1, BBG) and onward to Mumbai with < 12ms latency.`
      }
    ],
    related: ['ai-power-trends', 'tamil-nadu-corridor']
  },
  'ai-power-trends': {
    title: 'How AI & Accelerated Workloads Are Reshaping Thermal & Power Infrastructure',
    badge: 'TECHNICAL RESEARCH PAPER',
    author: 'GreenNext Thermal & Power Engineering Team',
    date: 'January 2026',
    readTime: '5 min read',
    lead: 'A deep dive into high-density rack engineering, transitioning from traditional 8–10kW air-cooled whitespace to 40kW–100kW+ Direct Liquid Cooling (DLC) containment, high-discharge UPS arrays, and BESS peak shaving.',
    sections: [
      {
        heading: '1. The Thermal Density Crisis in Traditional Data Centers',
        content: `Modern AI accelerator clusters (such as NVIDIA H100, B200, and customized TPU clusters) have broken the thermodynamic envelope of traditional air-cooled enterprise whitespace. Standard air distribution systems struggle to efficiently cool rack densities exceeding 15kW to 20kW without massive fan energy penalties and severe thermal hotspots.

Hyperscale AI deployments now require average rack densities of 40kW to 100kW+, requiring architectural changes from the foundation slab upward.`
      },
      {
        heading: '2. Direct-to-Chip Liquid Cooling (DLC) Architecture',
        content: `GreenNext campuses are designed from the ground up for hybrid air-and-liquid thermal management:
• Dedicated Secondary Cooling Loops (SCL) with stainless steel manifold distribution.
• Non-conductive dielectric coolants and high-precision flow control valves.
• Real-time optical leak detection integrated into the centralized DCIM system.
• Rear-Door Heat Exchangers (RDHx) allowing existing legacy whitespace to accommodate 30kW racks without structural re-engineering.`
      },
      {
        heading: '3. Battery Energy Storage Systems (BESS) & Power Quality',
        content: `AI training workloads introduce sudden, violent load steps—surging from 20% to 100% compute load in milliseconds. Standard diesel generator sets and utility grid transformers cannot handle such dynamic transients without risk of frequency instability.

GreenNext incorporates utility-scale BESS arrays (Lithium Iron Phosphate / Solid-State) that absorb millisecond transients, perform frequency regulation, and shave peak daytime tariffs, ensuring seamless PUEs below 1.25 even under extreme ambient summer conditions.`
      }
    ],
    related: ['market-outlook', 'tamil-nadu-corridor']
  },
  'tamil-nadu-corridor': {
    title: 'Why Coimbatore & Madurai Are South India\'s Premier Computing Destinations',
    badge: 'REGIONAL ECONOMIC REPORT',
    author: 'GreenNext Site Selection & Land Intelligence',
    date: 'December 2025',
    readTime: '4 min read',
    lead: 'A comprehensive comparative analysis of land availability, grid stability, talent pipelines, and municipal clearances between Tier-1 coastal metros and Tier-2 growth corridors.',
    sections: [
      {
        heading: '1. The Congestion of Tier-1 Coastal Data Hubs',
        content: `While Chennai and Mumbai remain vital subsea cable landing gateways, their inland expansion is severely constrained by land fragmentation, astronomical parcel costs ($1.8M–$3.5M per acre), power substation saturation, and flood risk during monsoon seasons.

Hyperscale operators and enterprise GCCs are diversifying their digital footprint into stable, high-elevation, seismically secure Tier-2 inland hubs.`
      },
      {
        heading: '2. Coimbatore Flagship Corridor: Engineering & Industrial Powerhouse',
        content: `Coimbatore offers the ideal synthesis of engineering talent and robust electrical infrastructure:
• 98 Total Acres across multiple development zones, including a 40-acre Flagship Campus with 1.2M sq.ft. Tier-ready data center potential and 1.8M sq.ft. IT park zoning.
• 150+ Premier Engineering & Polytechnic Colleges producing 45,000+ STEM graduates annually.
• Dual-feed high-voltage utility infrastructure with dedicated 110kV/230kV substation yard feasibility.
• Pleasant year-round climate reducing ambient cooling loads and chilling energy consumption.`
      },
      {
        heading: '3. Madurai ELCOT Corridor: Strategic Southern Connectivity',
        content: `Madurai is the emerging southern hub of Tamil Nadu\'s digital triangle:
• 93 Total Acres across prime IT/SEZ corridors, including 48 acres adjacent to ELCOT IT Park (30 AC Data Center + 15 AC IT Park + 3 AC Edge Node).
• Direct fiber conduits along NH-44 and National Highway networks connecting seamlessly to Chennai subsea landings and Bangalore exchange points.
• Pro-business government incentives and single-window statutory approvals with clear freehold titles.`
      }
    ],
    related: ['market-outlook', 'ai-power-trends']
  }
};

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightArticles[slug];

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="page-insight-detail">
      <PageHero
        badge={article.badge}
        title={article.title}
        tagline={article.lead}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Insights & Research', link: '/insights' },
          { label: article.badge }
        ]}
      />

      <div className="gn-container" style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Meta Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '24px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
              <span style={{ color: '#00e599', fontWeight: 600 }}>{article.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {article.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {article.readTime}</span>
            </div>
            <Link
              to="/eoi"
              style={{
                color: '#00e599',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Download size={15} /> Download PDF Brief
            </Link>
          </div>

          {/* Article Body */}
          <div className="insight-article-content" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {article.sections.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: '1.4' }}>
                  {sec.heading}
                </h2>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Note */}
          <div style={{
            background: 'rgba(16, 34, 51, 0.8)',
            borderLeft: '4px solid #00e599',
            padding: '24px',
            borderRadius: '0 12px 12px 0',
            marginTop: '50px',
            marginBottom: '60px'
          }}>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
              Institutional Ground Verification
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
              All land parcel metrics, power substation capacities, and transmission routes cited in this paper are verified against GreenNext\'s proprietary land bank (Ref: DC-ITP-TN/JV/2026/001). To schedule a confidential site inspection or receive full engineering single-line diagrams, submit an official Expression of Interest.
            </p>
          </div>

          {/* Navigation to Other Articles */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <Link
              to="/insights"
              style={{
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              <ArrowLeft size={16} /> All Insights & Papers
            </Link>

            <Link
              to="/eoi"
              className="gn-btn gn-btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}
            >
              Explore Partnership <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <ConversionCtaBanner />
    </div>
  );
}
