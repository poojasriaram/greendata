import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { navigationMenu } from '../../data/navigationData';

export default function Header({ onOpenEoiModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`topbar ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="container topbar-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="GreenNext Technologies — Home">
          <div className="brand-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M9 11V9h2M21 9h2v2M23 21v2h-2M11 23H9v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x="13" y="13" width="6" height="6" fill="currentColor" />
            </svg>
          </div>
          <div className="brand-title">
            <span className="brand-name">GreenNext</span>
            <span className="brand-tagline">Technologies</span>
          </div>
        </Link>

        {/* Primary Desktop Nav */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list" role="menubar">
            {navigationMenu.map((item, idx) => {
              const hasDropdown = item.columns && item.columns.length > 0;
              const isCurrent = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));

              if (!hasDropdown) {
                return (
                  <li className="nav-item" key={idx} role="none">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      role="menuitem"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              }

              return (
                <li
                  className="nav-item"
                  key={idx}
                  role="none"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link ${isCurrent ? 'active' : ''}`}
                    aria-expanded={activeDropdown === idx}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={12} className="chevron-icon" />
                  </button>

                  <div className={`mega-dropdown mega-dropdown-${item.dropdownWidth || 'wide'} ${activeDropdown === idx ? 'show-dropdown' : ''}`} role="menu">
                    <div className="dropdown-inner">
                      <div className={`dropdown-grid-${item.columns.length > 1 ? '2col' : '1col'}`}>
                        {item.columns.map((col, colIdx) => (
                          <div className="dropdown-col" key={colIdx}>
                            <div className="dropdown-col-header">
                              <span>{col.title}</span>
                              {col.badge && <span className="badge badge-mint">{col.badge}</span>}
                            </div>
                            {col.items.map((subItem, subIdx) => (
                              <Link
                                to={subItem.path}
                                className="dropdown-card"
                                key={subIdx}
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="dropdown-card-text">
                                  <h5>
                                    {subItem.name}
                                    {subItem.badge && (
                                      <span className="badge badge-evergreen" style={{ marginLeft: '6px', fontSize: '9px' }}>
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </h5>
                                  <p>{subItem.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {item.footerLink && (
                      <div className="dropdown-footer-bar">
                        <Link to={item.footerLink.path} onClick={() => setActiveDropdown(null)}>
                          {item.footerLink.text}
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right Nav Action CTAs */}
          <div className="nav-actions">
            <Link to="/projects" className="btn btn-secondary btn-sm">
              Explore Projects
            </Link>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-arrow"
              onClick={onOpenEoiModal}
            >
              <span>Submit EOI</span>
              <ArrowRight size={13} />
            </button>
            <button
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer active" aria-label="Mobile Navigation">
          <div className="mobile-drawer-inner" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ paddingBottom: '10px', borderBottom: '1px solid var(--c-border-light)' }}>
              <span className="text-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--c-evergreen)', textTransform: 'uppercase' }}>
                Navigation Menu
              </span>
            </div>

            <Link to="/" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Home</Link>
            <Link to="/about" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>About GreenNext</Link>
            <Link to="/solutions" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Solutions (6 Workloads)</Link>
            <Link to="/infrastructure" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Infrastructure &amp; Power</Link>
            <Link to="/projects" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Projects (191+ Acres)</Link>
            <Link to="/industries" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Industries Served</Link>
            <Link to="/insights" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Insights &amp; Market Outlook</Link>
            <Link to="/partners" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Partnership Models</Link>
            <Link to="/contact" className="nav-link" style={{ fontSize: '1.05rem', padding: '6px 0' }}>Contact Hub</Link>

            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '14px', borderTop: '1px solid var(--c-border-light)' }}>
              <button className="btn btn-primary" onClick={onOpenEoiModal}>
                Submit Expression of Interest (EOI)
              </button>
              <Link to="/contact" className="btn btn-secondary">
                Request Introductory Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
