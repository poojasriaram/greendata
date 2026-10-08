import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { infrastructureCategories } from './src/data/infrastructureData.js';
import { locationsData } from './src/data/locationsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable Gzip/Brotli compression for high performance
app.use(compression());

// Body Parsers for AJAX JSON and Form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure EJS View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve Static Assets with caching
app.use('/src', express.static(path.join(__dirname, 'src'), { maxAge: '7d' }));
app.use('/public', express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// In-Memory Storage for Demo RFP & Inquiry Submissions
const inMemorySubmissions = {
  inquiries: [],
  rfps: []
};

// ══════════════════════════════════════════════════════════════════════════
// 1. PAGE ROUTES
// ══════════════════════════════════════════════════════════════════════════

// Homepage / Master Dashboard
app.get('/', (req, res) => {
  res.render('index', {
    title: 'GreenNext Technologies | Digital Infrastructure, IT Parks & Hyperscale DC',
    description: 'South India premier 390+ acre institutional platform across Hosur, Tirunelveli, Trichy, Coimbatore, Madurai, and Pondicherry. IT Parks, 100+ MW Hyperscale Data Centers, Convention Halls & Precision Industrial Campuses.',
    currentPath: '/',
    infrastructureCategories,
    locationsData,
    canonicalUrl: 'https://greennext.in/',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  });
});

// Infrastructure Catalog Overview
app.get('/infrastructure', (req, res) => {
  res.render('infrastructure', {
    title: 'Non-Residential Infrastructure Catalog',
    description: 'Master-planned IT Parks, Knowledge Cities, 100+ MW Hyperscale AI Data Centers, Convention Halls, Corporate Hotels, and Precision Industrial Campuses.',
    currentPath: '/infrastructure',
    infrastructureCategories,
    locationsData,
    canonicalUrl: 'https://greennext.in/infrastructure',
    ogImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  });
});

// Category Deep Dive
app.get('/infrastructure/:slug', (req, res) => {
  const category = infrastructureCategories.find(c => c.slug === req.params.slug);
  if (!category) {
    return res.redirect('/infrastructure');
  }
  res.render('infrastructure-detail', {
    title: `${category.title} — Architectural & Engineering Specs`,
    description: `${category.subtitle}. ${category.overview}`,
    currentPath: `/infrastructure/${category.slug}`,
    category,
    infrastructureCategories,
    locationsData,
    canonicalUrl: `https://greennext.in/infrastructure/${category.slug}`,
    ogImage: category.heroImage
  });
});

// Locations Footprint Overview
app.get('/locations', (req, res) => {
  res.render('locations', {
    title: 'South India Institutional Footprint (390+ Acres)',
    description: 'Contiguous, clear-title land parcels across Hosur, Tirunelveli, Trichy, Coimbatore, Madurai, and Pondicherry with high-voltage substations.',
    currentPath: '/locations',
    locationsData,
    infrastructureCategories,
    canonicalUrl: 'https://greennext.in/locations',
    ogImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
  });
});

// Individual City Campus Deep Dive
app.get('/locations/:slug', (req, res) => {
  const location = locationsData.find(l => l.slug === req.params.slug);
  if (!location) {
    return res.redirect('/locations');
  }
  res.render('location-detail', {
    title: `${location.name} Campus (${location.landBank}) — Strategic Dossier`,
    description: `${location.name} (${location.state}): ${location.tagline}. ${location.overview}`,
    currentPath: `/locations/${location.slug}`,
    location,
    locationsData,
    infrastructureCategories,
    canonicalUrl: `https://greennext.in/locations/${location.slug}`,
    ogImage: location.image
  });
});

// Delivery Models (Powered Shell, Turnkey BTS, Colocation)
app.get('/solutions', (req, res) => {
  res.render('solutions', {
    title: 'Enterprise Delivery Models (Powered Shell & Turnkey BTS)',
    description: 'Flexible institutional delivery models for global cloud hyperscalers, multinational enterprise occupiers, and semiconductor manufacturers.',
    currentPath: '/solutions',
    locationsData,
    infrastructureCategories,
    canonicalUrl: 'https://greennext.in/solutions',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  });
});

// Institutional Joint Venture & Co-Development
app.get('/partnership', (req, res) => {
  res.render('partnership', {
    title: 'Institutional Joint Venture & Co-Development Framework',
    description: 'Direct investment platform for Sovereign Wealth Funds, Global Private Equity, and Prime South India Master Landowners under single-purpose SPVs.',
    currentPath: '/partnership',
    locationsData,
    infrastructureCategories,
    canonicalUrl: 'https://greennext.in/partnership',
    ogImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
  });
});

// Contact & Institutional RFP Submission Portal
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Institutional RFP Portal & Campus Tour Scheduling',
    description: 'Submit institutional RFP or schedule private helicopter/ground inspection delegation for South India digital infrastructure campuses.',
    currentPath: '/contact',
    locationsData,
    infrastructureCategories,
    canonicalUrl: 'https://greennext.in/contact',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  });
});

// Technical Audit & AI Prompt Engineering Repository
app.get('/audit', (req, res) => {
  res.render('audit', {
    title: '10-Point Technical Audit & Generative AI Prompts Repository',
    description: 'Complete UI/UX, accessibility, performance, and SEO evaluation with ready-to-use AI prompts for CTAs, content generation, and design.',
    currentPath: '/audit',
    locationsData,
    infrastructureCategories,
    canonicalUrl: 'https://greennext.in/audit',
    ogImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
  });
});

// ══════════════════════════════════════════════════════════════════════════
// 2. SEO & AGENTIC DISCOVERY SPECIFICATIONS
// ══════════════════════════════════════════════════════════════════════════

// Dynamic Sitemap XML Generator
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  const baseUrl = 'https://greennext.in';
  const pages = [
    '',
    '/infrastructure',
    '/locations',
    '/solutions',
    '/partnership',
    '/contact',
    '/audit',
    ...infrastructureCategories.map(c => `/infrastructure/${c.slug}`),
    ...locationsData.map(l => `/locations/${l.slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;
  res.send(xml);
});

// LLMs.txt Agentic Specification
app.get('/llms.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'llms.txt'));
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// ══════════════════════════════════════════════════════════════════════════
// 3. REST API ENDPOINTS
// ══════════════════════════════════════════════════════════════════════════

// Quick Floating Inquiry Endpoint
app.post('/api/inquiry', (req, res) => {
  const { name, email, phone, location, category, message } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and phone number.' });
  }

  const referenceId = `INQ-${Date.now().toString().slice(-6)}`;
  const submission = {
    referenceId,
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    location: location || 'Not Specified',
    category: category || 'Not Specified',
    message: message || 'N/A'
  };

  inMemorySubmissions.inquiries.push(submission);
  console.log('⚡ [Quick Inquiry Received]:', submission);

  return res.status(200).json({
    success: true,
    message: `Inquiry successfully registered with Executive Desk. Reference: ${referenceId}`,
    referenceId
  });
});

// Detailed Institutional RFP Endpoint
app.post('/api/rfp', (req, res) => {
  const { company, contactName, email, phone, headquarters, assetType, targetHub, powerRequirement, footprint, deliveryModel, timelineAndNotes } = req.body;

  if (!company || !contactName || !email) {
    return res.status(400).json({ success: false, message: 'Please provide company name, contact person, and official email.' });
  }

  const referenceId = `RFP-GN-${Date.now().toString().slice(-6)}`;
  const rfpEntry = {
    referenceId,
    timestamp: new Date().toISOString(),
    company,
    contactName,
    email,
    phone: phone || 'N/A',
    headquarters: headquarters || 'N/A',
    assetType: assetType || 'Custom Hybrid',
    targetHub: targetHub || 'Multiple',
    powerRequirement: powerRequirement || 'TBD',
    footprint: footprint || 'TBD',
    deliveryModel: deliveryModel || 'Turnkey BTS',
    timelineAndNotes: timelineAndNotes || 'None'
  };

  inMemorySubmissions.rfps.push(rfpEntry);
  console.log('🏛️ [Institutional RFP Registered]:', rfpEntry);

  return res.status(200).json({
    success: true,
    message: `Institutional RFP successfully logged under reference ${referenceId}. NDA dossier transmitted.`,
    referenceId
  });
});

// Data APIs
app.get('/api/locations', (req, res) => {
  res.json({ success: true, count: locationsData.length, data: locationsData });
});

app.get('/api/infrastructure', (req, res) => {
  res.json({ success: true, count: infrastructureCategories.length, data: infrastructureCategories });
});

// Global Search API
app.get('/api/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  if (!query) {
    return res.json({ success: true, results: [] });
  }

  const matchedLocations = locationsData.filter(l => 
    l.name.toLowerCase().includes(query) || 
    l.tagline.toLowerCase().includes(query) ||
    l.infrastructureFocus.some(f => f.toLowerCase().includes(query))
  );

  const matchedInfra = infrastructureCategories.filter(c => 
    c.title.toLowerCase().includes(query) ||
    c.overview.toLowerCase().includes(query) ||
    c.subcategories.some(s => s.title.toLowerCase().includes(query))
  );

  res.json({
    success: true,
    query,
    results: {
      locations: matchedLocations,
      infrastructure: matchedInfra
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('index', {
    title: 'Page Not Found | GreenNext Technologies',
    description: 'Strategic digital infrastructure platform across South India.',
    currentPath: req.path,
    infrastructureCategories,
    locationsData,
    canonicalUrl: 'https://greennext.in/',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 GreenNext Technologies Full Node.js Platform running at http://localhost:${PORT}`);
  console.log(`📋 Serving dynamic EJS templates, API endpoints, sitemap.xml, and llms.txt\n`);
});
