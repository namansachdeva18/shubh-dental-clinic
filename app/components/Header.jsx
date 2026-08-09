'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, Clock, ChevronDown, Calendar, MessageCircle, BookMarked, PhoneCall } from 'lucide-react';

const NAV_TREATMENTS = [
  { group: 'Orthodontics', items: [
    { name: 'Dental Braces', href: '/treatments/dental-braces' },
    { name: 'Invisalign® Clear Aligners', href: '/treatments/invisalign-clear-aligners' },
    { name: 'SkyAlign™ In-House Aligners', href: '/treatments/invisalign-clear-aligners' },
    { name: 'Lingual Braces', href: '/treatments/lingual-braces' },
  ]},
  { group: 'Implantology', items: [
    { name: 'Same-Day Dental Implants', href: '/treatments/dental-implants' },
    { name: 'Full Mouth Implants', href: '/treatments/dental-implants' },
    { name: 'Implant-Supported Dentures', href: '/treatments/dental-implants' },
  ]},
  { group: 'Cosmetic Dentistry', items: [
    { name: 'Smile Makeover', href: '/treatments/smile-makeover' },
    { name: 'Porcelain Veneers', href: '/treatments/porcelain-veneers' },
    { name: 'Teeth Whitening', href: '/treatments/teeth-whitening' },
    { name: 'Composite Bonding', href: '/treatments/composite-bonding' },
  ]},
  { group: 'General & Restorative', items: [
    { name: 'Root Canal Treatment', href: '/treatments/root-canal-treatment' },
    { name: 'Crowns & Bridges', href: '/treatments/crowns-and-bridges' },
    { name: 'Teeth Cleaning', href: '/treatments/teeth-cleaning-scaling' },
    { name: 'Wisdom Tooth Extraction', href: '/treatments/teeth-cleaning-scaling' },
  ]},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} aria-label="Site header">
        {/* Top Bar */}
        <div className="top-bar" aria-label="Contact information">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <MapPin size={13} aria-hidden="true" />
                Tilak Nagar Lane 9, Delhi Bypass Road, Rohtak 124001
              </span>
              <span className="top-bar-divider" />
              <span className="top-bar-item">
                <Clock size={13} aria-hidden="true" />
                Mon–Sat: 9:30 AM – 8:00 PM
              </span>
            </div>
            <div className="top-bar-right">
              <a href="tel:+918685048414" className="top-bar-item top-bar-link" aria-label="Call clinic">
                <Phone size={13} aria-hidden="true" />
                +91-8685048414
              </a>
              <span className="top-bar-divider" />
              <a href="tel:01262469393" className="top-bar-item top-bar-link" aria-label="Call clinic landline">
                01262-469393
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="nav-main">
          <div className="container nav-main-inner">
            {/* Logo */}
            <Link href="/" className="nav-logo" aria-label="Shubh Orthodontic & Dental Clinic — Home">
              <div className="logo-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', padding: '0' }}>
                <Image src="/logo.webp" alt="Shubh Dental Clinic Logo" width={64} height={64} priority style={{ objectFit: 'contain' }} />
              </div>
              <div className="logo-text" style={{ gap: '0px' }}>
                <span className="logo-dr-name" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Dr. S.K. Yadav's</span>
                <span className="logo-name" style={{ fontFamily: '"Dancing Script", cursive', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-color)', whiteSpace: 'nowrap', lineHeight: '1' }}>Shubh Orthodontic & Dental Clinic</span>
                <span className="logo-tagline" style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>A Multi Speciality Dental Care Center</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-desktop" aria-label="Main navigation">
              <Link href="/" className="nav-link">Home</Link>

              {/* Treatments Mega Menu */}
              <div
                className="nav-link-group"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                ref={megaRef}
              >
                <button className="nav-link nav-link-has-sub" aria-expanded={megaOpen} aria-haspopup="true">
                  Treatments <ChevronDown size={14} className={`nav-chevron${megaOpen ? ' open' : ''}`} aria-hidden="true" />
                </button>
                {megaOpen && (
                  <div className="mega-menu" role="menu" aria-label="Treatments menu">
                    <div className="mega-menu-inner">
                      {NAV_TREATMENTS.map(group => (
                        <div key={group.group} className="mega-col">
                          <h3 className="mega-group-title">{group.group}</h3>
                          <ul>
                            {group.items.map(item => (
                              <li key={item.name}>
                                <Link href={item.href} className="mega-link" role="menuitem" onClick={() => setMegaOpen(false)}>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/doctors" className="nav-link">Specialists</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/dental-tourism" className="nav-link">Dental Tourism (NRI)</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/contact" className="nav-link">Contact</Link>

              <a href="#book" className="btn btn-primary btn-sm nav-cta header-cta-desktop" aria-label="Book an appointment">
                <Calendar size={15} aria-hidden="true" />
                Book Appointment
              </a>
            </nav>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{ display: 'none' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div className="mobile-nav-overlay" role="dialog" aria-label="Mobile navigation" aria-modal="true">
            <div className="mobile-nav-header">
              <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                <div className="logo-icon-wrap" style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                  <Image src="/logo.webp" alt="Logo" width={44} height={44} style={{ objectFit: 'contain' }} />
                </div>
                <div className="logo-text" style={{ gap: '0px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Dr. S.K. Yadav's</span>
                  <span className="logo-name" style={{ fontFamily: '"Dancing Script", cursive', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-color)', lineHeight: '1' }}>Shubh Orthodontic & Dental Clinic</span>
                </div>
              </Link>
              <button className="hamburger" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links" aria-label="Mobile navigation links">
              <Link href="/" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

              <button
                className="mob-nav-link mob-nav-link-sub"
                onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                aria-expanded={mobileTreatmentsOpen}
              >
                Treatments <ChevronDown size={16} className={mobileTreatmentsOpen ? 'open' : ''} />
              </button>
              {mobileTreatmentsOpen && (
                <div className="mob-sub-menu">
                  {NAV_TREATMENTS.map(group => (
                    <div key={group.group}>
                      <div className="mob-sub-group">{group.group}</div>
                      {group.items.map(item => (
                        <Link key={item.name} href={item.href} className="mob-sub-link" onClick={() => setMobileOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <Link href="/doctors" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Specialists</Link>
              <Link href="/about" className="mob-nav-link" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/gallery" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Gallery</Link>
              <Link href="/dental-tourism" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Dental Tourism (NRI)</Link>
              <Link href="/blog" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>

              <div className="mob-nav-cta-group">
                <a href="tel:+918685048414" className="btn btn-outline-white" style={{ width: '100%', justifyContent: 'center' }}>
                  <Phone size={16} /> Call Now
                </a>
                <a href="#book" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  <Calendar size={16} /> Book Appointment
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Bar (Redesigned) */}
      <div className="mobile-bottom-bar" aria-label="Quick contact bar">
        <div className="mobile-bottom-bar-inner">
          <a href="#book" className="mobile-bar-btn" aria-label="Book appointment">
            <div className="icon-wrapper">
              <BookMarked aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>Book<br/>Appointment</span>
          </a>
          
          <div className="mobile-bar-divider" />
          
          <a
            href="https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn"
            aria-label="Get directions"
          >
            <div className="icon-wrapper">
              <MapPin aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>Find<br/>Clinic</span>
          </a>

          <div className="mobile-bar-divider" />

          <a
            href="https://api.whatsapp.com/send/?phone=918685048414&text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Shubh%20Orthodontic%20%26%20Dental%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn"
            aria-label="WhatsApp clinic"
          >
            <div className="icon-wrapper">
              <MessageCircle aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>WhatsApp<br/>Chat</span>
          </a>

          <div className="mobile-bar-divider" />

          <a href="tel:+918685048414" className="mobile-bar-btn" aria-label="Call clinic">
            <div className="icon-wrapper">
              <PhoneCall aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>Instant<br/>Callback</span>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .site-header {
          position: sticky;
          top: 0 !important;
          z-index: var(--z-sticky);
          width: 100%;
          transition: all var(--transition-base);
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .top-bar {
          background: var(--bg-dark);
          color: rgba(255,255,255,0.75);
          font-size: 0.8rem;
          padding: 0.5rem 0;
          font-family: var(--font-body);
          margin: 0 !important;
        }
        .top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .top-bar-link {
          color: var(--accent-gold-light);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .top-bar-link:hover { color: #fff; }
        .top-bar-divider {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.2);
        }
        .nav-main {
          background: rgba(251, 249, 246, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-color);
          transition: all var(--transition-base);
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .scrolled .nav-main {
          box-shadow: var(--shadow-md);
        }
        .nav-main-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          height: 80px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--accent-light);
          flex-shrink: 0;
          position: relative;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .logo-subtitle {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.65rem;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .logo-tagline {
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-top: 0.15rem;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-link {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
        }
        .nav-link:hover, .nav-link:focus-visible {
          color: var(--accent-color);
          background: var(--accent-light);
        }
        .nav-link-group {
          position: relative;
        }
        
        /* Dropdown / Mega Menu Animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .mega-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(251, 249, 246, 0.98);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          z-index: var(--z-dropdown);
          min-width: 700px;
          animation: fadeInDown 0.2s ease;
        }
        .mega-menu-inner {
          display: grid;
          grid-template-columns: 250px 1fr;
          padding: 1.5rem;
          gap: 2rem;
        }
        .mega-menu-sidebar {
          border-right: 1px solid var(--border-color);
          padding-right: 1.5rem;
        }
        .mega-menu-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .mega-cat-btn {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mega-cat-btn:hover { background: var(--bg-secondary); }
        .mega-cat-btn.active {
          background: var(--bg-secondary);
          color: var(--accent-color);
        }
        .mega-link {
          display: block;
          padding: 0.4rem 0.6rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .mega-link:hover {
          color: var(--accent-color);
          background: var(--accent-light);
          transform: translateX(3px);
        }
        .nav-cta { margin-left: 0.5rem; }
        
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          min-height: 44px;
          min-width: 44px;
        }
        .hamburger:hover { background: var(--accent-light); color: var(--accent-color); }
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: calc(var(--z-sticky) + 1);
          overflow-y: auto;
          animation: slideInRight 0.3s ease;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .mobile-nav-header .logo-name,
        .mobile-nav-header .logo-subtitle { color: var(--text-primary); }
        .mobile-nav-header .hamburger { color: var(--text-primary); }
        .mobile-nav-links {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mob-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          border-radius: var(--radius-md);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: all var(--transition-fast);
        }
        .mob-nav-link:hover { background: var(--accent-light); color: var(--accent-color); }
        .mob-nav-link .open { transform: rotate(180deg); }
        .mob-sub-menu {
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          border-left: 2px solid var(--accent-color);
          margin: 0 0 0.5rem 0.5rem;
        }
        .mob-sub-group {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.5rem 0.5rem 0.25rem;
          margin-top: 0.5rem;
        }
        .mob-sub-link {
          display: block;
          padding: 0.5rem 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .mob-sub-link:hover { color: var(--accent-color); background: var(--accent-light); }
        .mob-nav-cta-group {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        @media (max-width: 1300px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .header-cta-desktop { display: none !important; }
        }
        @media (max-width: 768px) {
          .top-bar { display: none !important; }
          .nav-main-inner { height: 70px; }
          .mobile-bottom-bar { display: block; }
          .logo-tagline { display: none; }
          .logo-icon-wrap { width: 42px !important; height: 42px !important; }
          .logo-name { font-size: 1.1rem !important; }
          .logo-subtitle { font-size: 0.6rem !important; }
        }
      `}} />
    </>
  );
}
