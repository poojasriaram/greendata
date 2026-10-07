import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import TopUtilityBar from './components/layout/TopUtilityBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import QuickContactWidget from './components/layout/QuickContactWidget';

// Pages
import Home from './pages/Home';

// About Pages
import AboutIndex from './pages/About/AboutIndex';
import VisionMission from './pages/About/VisionMission';
import Leadership from './pages/About/Leadership';
import Capabilities from './pages/About/Capabilities';
import Sustainability from './pages/About/Sustainability';

// Solutions Pages
import SolutionsIndex from './pages/Solutions/SolutionsIndex';
import SolutionDetail from './pages/Solutions/SolutionDetail';

// Infrastructure Pages
import InfrastructureIndex from './pages/Infrastructure/InfrastructureIndex';
import InfrastructureDetail from './pages/Infrastructure/InfrastructureDetail';

// Projects Pages
import ProjectsIndex from './pages/Projects/ProjectsIndex';
import ProjectDetail from './pages/Projects/ProjectDetail';

// Industries Pages
import IndustriesIndex from './pages/Industries/IndustriesIndex';
import IndustryDetail from './pages/Industries/IndustryDetail';

// Partners Pages
import PartnersIndex from './pages/Partners/PartnersIndex';

// Insights Pages
import InsightsIndex from './pages/Insights/InsightsIndex';
import InsightDetail from './pages/Insights/InsightDetail';

// Contact & EOI Pages
import ContactIndex from './pages/Contact/ContactIndex';
import EoiSubmissionPage from './pages/Contact/EoiSubmissionPage';

export default function App() {
  return (
    <div className="gn-app-wrapper">
      <ScrollToTop />
      <TopUtilityBar />
      <Header />
      
      <main className="gn-main-content">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About Section */}
          <Route path="/about" element={<AboutIndex />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/capabilities" element={<Capabilities />} />
          <Route path="/about/sustainability" element={<Sustainability />} />

          {/* Solutions Section */}
          <Route path="/solutions" element={<SolutionsIndex />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />

          {/* Infrastructure Section */}
          <Route path="/infrastructure" element={<InfrastructureIndex />} />
          <Route path="/infrastructure/:slug" element={<InfrastructureDetail />} />

          {/* Projects / Portfolio Section */}
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* Industries Section */}
          <Route path="/industries" element={<IndustriesIndex />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          {/* Partners Section */}
          <Route path="/partners" element={<PartnersIndex />} />

          {/* Insights / Research Section */}
          <Route path="/insights" element={<InsightsIndex />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />

          {/* Contact & EOI Portal */}
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/eoi" element={<EoiSubmissionPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <QuickContactWidget />
    </div>
  );
}
