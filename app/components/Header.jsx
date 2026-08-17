'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, Clock, ChevronDown, Calendar, MessageCircle, BookMarked, PhoneCall, Sparkles, UserCheck, Image as ImageIcon, Building } from 'lucide-react';

const NAV_TREATMENTS = [
  {
    group: 'Orthodontics', items: [
      { name: 'Dental Braces', href: '/treatments/dental-braces' },
      { name: 'Invisalign® Clear Aligners', href: '/treatments/invisalign-clear-aligners' },
      { name: 'SkyAlign™ In-House Aligners', href: '/treatments/skyalign-clear-aligners' },
      { name: 'Lingual Braces', href: '/treatments/lingual-braces' },
    ]
  },
  {
    group: 'Implantology', items: [
      { name: 'Same-Day Dental Implants', href: '/treatments/same-day-dental-implants' },
      { name: 'Full Mouth Implants', href: '/treatments/dental-implants' },
      { name: 'Implant-Supported Dentures', href: '/treatments/dentures-full-partial' },
    ]
  },
  {
    group: 'Cosmetic Dentistry', items: [
      { name: 'Smile Makeover', href: '/treatments/smile-makeover' },
      { name: 'Porcelain Veneers', href: '/treatments/porcelain-veneers' },
      { name: 'Teeth Whitening', href: '/treatments/teeth-whitening' },
      { name: 'Composite Laser Fillings', href: '/treatments/cosmetic-laser-fillings' },
    ]
  },
  {
    group: 'General & Restorative', items: [
      { name: 'Root Canal Treatment (RCT)', href: '/treatments/root-canal-treatment' },
      { name: 'Crowns & Bridges', href: '/treatments/crowns-and-bridges' },
      { name: 'Laser Scaling & Gum Care', href: '/treatments/teeth-cleaning-scaling' },
      { name: 'Wisdom Tooth Surgery', href: '/treatments/wisdom-tooth-surgery' },
    ]
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [alignersOpen, setAlignersOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  
  const megaRef = useRef(null);
  const alignersRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
        
        {/* Top Announcement Bar */}
        <div className="top-bar" aria-label="Contact information">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <MapPin size={12} aria-hidden="true" />
                Tilak Nagar Lane 9, Delhi Bypass Road, Rohtak 124001
              </span>
              <span className="top-bar-divider" />
              <span className="top-bar-item">
                <Clock size={12} aria-hidden="true" />
                Mon–Sat: 9:30 AM – 8:00 PM
              </span>
            </div>
            <div className="top-bar-right">
              <a href="tel:+918685048414" className="top-bar-item top-bar-link" aria-label="Call clinic">
                <Phone size={12} aria-hidden="true" />
                +91-8685048414
              </a>
              <span className="top-bar-divider" />
              <a href="tel:01262469393" className="top-bar-item top-bar-link" aria-label="Call clinic landline">
                01262-469393
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="nav-main">
          <div className="container nav-main-inner">
            
            {/* Clinic Logo */}
            <Link href="/" className="nav-logo" aria-label="Shubh Orthodontic & Dental Clinic — Home">
              <div className="logo-icon-wrap">
                <Image src="/logo.webp?v=2" alt="Shubh Dental Clinic Logo" width={48} height={48} priority style={{ objectFit: 'contain' }} />
              </div>
              <div className="logo-text">
                <span className="logo-dr-name">Prof. Dr. S. K. Yadav&apos;s</span>
                <span className="logo-name">Shubh Orthodontic &amp; Dental Clinic</span>
                <span className="logo-tagline">Advanced Orthodontics &amp; Implant Centre</span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Luxury Grouped Layout */}
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
                  Treatments <ChevronDown size={13} className={`nav-chevron${megaOpen ? ' open' : ''}`} aria-hidden="true" />
                </button>
                {megaOpen && (
                  <div className="mega-menu" role="menu" aria-label="Treatments menu">
                    <div className="mega-menu-inner">
                      {NAV_TREATMENTS.map(group => (
                        <div key={group.group} className="mega-col">
                          <h3 className="mega-group-title font-heading">{group.group}</h3>
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

              {/* Aligners Dropdown */}
              <div
                className="nav-link-group"
                onMouseEnter={() => setAlignersOpen(true)}
                onMouseLeave={() => setAlignersOpen(false)}
                ref={alignersRef}
              >
                <button className="nav-link nav-link-has-sub" aria-expanded={alignersOpen} aria-haspopup="true">
                  Aligners <ChevronDown size={13} className={`nav-chevron${alignersOpen ? ' open' : ''}`} aria-hidden="true" />
                </button>
                {alignersOpen && (
                  <div className="dropdown-menu-simple" role="menu">
                    <Link href="/clear-aligners" className="dropdown-item" onClick={() => setAlignersOpen(false)}>
                      <Sparkles size={14} className="dropdown-icon" />
                      <div>
                        <strong>Invisalign® Clear Aligners</strong>
                        <span>Global gold standard aligners</span>
                      </div>
                    </Link>
                    <Link href="/skyalign" className="dropdown-item" onClick={() => setAlignersOpen(false)}>
                      <Sparkles size={14} className="dropdown-icon" />
                      <div>
                        <strong>SkyAlign™ In-House</strong>
                        <span>Custom German polymer aligners</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* About & Clinic Dropdown */}
              <div
                className="nav-link-group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
                ref={aboutRef}
              >
                <button className="nav-link nav-link-has-sub" aria-expanded={aboutOpen} aria-haspopup="true">
                  Clinic <ChevronDown size={13} className={`nav-chevron${aboutOpen ? ' open' : ''}`} aria-hidden="true" />
                </button>
                {aboutOpen && (
                  <div className="dropdown-menu-simple" role="menu">
                    <Link href="/doctors" className="dropdown-item" onClick={() => setAboutOpen(false)}>
                      <UserCheck size={14} className="dropdown-icon" />
                      <div>
                        <strong>Our Specialists</strong>
                        <span>Prof. Dr. S. K. Yadav &amp; Dr. Achla</span>
                      </div>
                    </Link>
                    <Link href="/about" className="dropdown-item" onClick={() => setAboutOpen(false)}>
                      <Building size={14} className="dropdown-icon" />
                      <div>
                        <strong>About Shubh Dental</strong>
                        <span>PGI heritage &amp; digital technology</span>
                      </div>
                    </Link>
                    <Link href="/gallery" className="dropdown-item" onClick={() => setAboutOpen(false)}>
                      <ImageIcon size={14} className="dropdown-icon" />
                      <div>
                        <strong>Smile Gallery</strong>
                        <span>Real patient before &amp; after results</span>
                      </div>
                    </Link>
                    <Link href="/visiting-centres" className="dropdown-item" onClick={() => setAboutOpen(false)}>
                      <MapPin size={14} className="dropdown-icon" />
                      <div>
                        <strong>Visiting Centres</strong>
                        <span>Delhi, Gurgaon, Panipat &amp; Sonipat</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/dental-tourism" className="nav-link">NRI Tourism</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/contact" className="nav-link">Contact</Link>

              {/* Header CTA Button */}
              <a href="#book" className="btn-header-reserve" aria-label="Book an appointment">
                <Calendar size={14} aria-hidden="true" />
                <span>Book Appointment</span>
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Slide-Over Overlay */}
        {mobileOpen && (
          <div className="mobile-nav-overlay" role="dialog" aria-label="Mobile navigation" aria-modal="true">
            <div className="mobile-nav-header">
              <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                <div className="logo-icon-wrap" style={{ width: 40, height: 40 }}>
                  <Image src="/logo.webp?v=2" alt="Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
                </div>
                <div className="logo-text">
                  <span className="logo-name" style={{ fontSize: '1.05rem' }}>Shubh Dental Clinic</span>
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
                    <div key={group.group} style={{ marginBottom: '0.5rem' }}>
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

              <Link href="/clear-aligners" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Invisalign® Aligners</Link>
              <Link href="/skyalign" className="mob-nav-link" onClick={() => setMobileOpen(false)}>SkyAlign™ In-House</Link>
              <Link href="/doctors" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Our Specialists</Link>
              <Link href="/about" className="mob-nav-link" onClick={() => setMobileOpen(false)}>About Clinic</Link>
              <Link href="/gallery" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Smile Gallery</Link>
              <Link href="/dental-tourism" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Dental Tourism (NRI)</Link>
              <Link href="/visiting-centres" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Visiting Centres</Link>
              <Link href="/contact" className="mob-nav-link" onClick={() => setMobileOpen(false)}>Contact &amp; Location</Link>

              <div className="mob-nav-cta-group">
                <a href="tel:+918685048414" className="btn btn-action-call" style={{ width: '100%', justifyContent: 'center' }}>
                  <Phone size={16} /> Call Clinic
                </a>
                <a href="#book" className="btn btn-action-wa" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  <Calendar size={16} /> Book Consultation
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="mobile-bottom-bar" aria-label="Quick contact bar">
        <div className="mobile-bottom-bar-inner">
          <a href="#book" className="mobile-bar-btn" aria-label="Book appointment">
            <div className="icon-wrapper">
              <BookMarked aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>Book<br />Consult</span>
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
            <span>Clinic<br />Map</span>
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
            <span>WhatsApp<br />Chat</span>
          </a>

          <div className="mobile-bar-divider" />

          <a href="tel:+918685048414" className="mobile-bar-btn" aria-label="Call clinic">
            <div className="icon-wrapper">
              <PhoneCall aria-hidden="true" strokeWidth={1.5} />
            </div>
            <span>Call<br />Doctor</span>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .site-header {
          position: sticky;
          top: 0 !important;
          z-index: 1000;
          width: 100%;
          transition: all 0.3s ease;
        }

        .top-bar {
          background: #110805;
          color: rgba(255,255,255,0.75);
          font-size: 0.76rem;
          padding: 0.4rem 0;
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
        }
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .top-bar-link {
          color: #EAA77C;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .top-bar-link:hover { color: #FFFFFF; }
        .top-bar-divider {
          width: 1px;
          height: 10px;
          background: rgba(255,255,255,0.2);
        }

        .nav-main {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          transition: all 0.3s ease;
        }
        .scrolled .nav-main {
          box-shadow: 0 10px 30px rgba(17, 8, 5, 0.06);
        }
        .nav-main-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          height: 74px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-dr-name {
          font-size: 0.68rem;
          font-weight: 700;
          color: #8A7063;
          letter-spacing: 0.02em;
        }
        .logo-name {
          font-family: var(--font-heading, sans-serif);
          font-weight: 900;
          font-size: 1.08rem;
          color: #0E0604;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .logo-tagline {
          font-size: 0.64rem;
          color: #D67A41;
          font-weight: 700;
          margin-top: 1px;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
        }
        .nav-link {
          font-size: 0.84rem;
          font-weight: 700;
          color: #4A3A33;
          padding: 0.45rem 0.65rem;
          border-radius: 10px;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: #D67A41;
          background: rgba(214, 122, 65, 0.08);
        }
        .nav-chevron {
          transition: transform 0.2s ease;
        }
        .nav-chevron.open {
          transform: rotate(180deg);
        }

        .nav-link-group {
          position: relative;
        }

        /* MEGA MENU */
        .mega-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #FFFFFF;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(17, 8, 5, 0.12);
          border: 1.5px solid rgba(74, 37, 24, 0.08);
          z-index: 1000;
          min-width: 680px;
          padding: 1.5rem;
        }
        .mega-menu-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .mega-group-title {
          font-size: 0.78rem;
          font-weight: 900;
          color: #D67A41;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.65rem;
          padding-bottom: 0.35rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
        }
        .mega-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .mega-link {
          font-size: 0.8rem;
          color: #381E15;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          display: block;
          padding: 0.2rem 0;
        }
        .mega-link:hover {
          color: #D67A41;
          transform: translateX(2px);
        }

        /* SIMPLE DROPDOWN MENU */
        .dropdown-menu-simple {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          background: #FFFFFF;
          border-radius: 18px;
          box-shadow: 0 16px 45px rgba(17, 8, 5, 0.1);
          border: 1.5px solid rgba(74, 37, 24, 0.08);
          z-index: 1000;
          min-width: 250px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.6rem 0.75rem;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .dropdown-item:hover {
          background: #FAF8F5;
        }
        .dropdown-icon {
          color: #D67A41;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .dropdown-item strong {
          display: block;
          font-size: 0.82rem;
          color: #0E0604;
          font-weight: 800;
        }
        .dropdown-item span {
          display: block;
          font-size: 0.7rem;
          color: #8A7063;
          font-weight: 500;
        }

        /* HEADER CTA */
        .btn-header-reserve {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          color: #FFFFFF;
          padding: 0.55rem 1.05rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(17, 8, 5, 0.15);
          white-space: nowrap;
          margin-left: 0.4rem;
          transition: all 0.25s ease;
        }
        .btn-header-reserve:hover {
          background: #D67A41;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(214, 122, 65, 0.3);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          color: #0E0604;
          cursor: pointer;
          padding: 0.4rem;
        }

        /* MOBILE OVERLAY */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #FFFFFF;
          z-index: 9999;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          margin-bottom: 1.5rem;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mob-nav-link {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0E0604;
          text-decoration: none;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          text-align: left;
          width: 100%;
          cursor: pointer;
        }
        .mob-sub-menu {
          padding-left: 1rem;
          border-left: 2px solid rgba(214, 122, 65, 0.3);
          margin-bottom: 0.5rem;
        }
        .mob-sub-group {
          font-size: 0.72rem;
          font-weight: 800;
          color: #D67A41;
          text-transform: uppercase;
          margin: 0.5rem 0 0.25rem;
        }
        .mob-sub-link {
          display: block;
          font-size: 0.9rem;
          color: #4A3A33;
          text-decoration: none;
          padding: 0.35rem 0;
          font-weight: 600;
        }
        .mob-nav-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1120px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 768px) {
          .top-bar { display: none !important; }
          .nav-main-inner { height: 62px; }
          .logo-tagline { display: none; }
        }
      `}} />
    </>
  );
}
