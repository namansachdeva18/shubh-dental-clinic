'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, X, Phone, MapPin, Clock, ChevronDown, ChevronRight, Calendar,
  MessageCircle, BookMarked, PhoneCall, Sparkles, UserCheck,
  Image as ImageIcon, Building, Tag, ArrowRight, ArrowUpRight,
  Zap, Award, Globe2, Smile, Stethoscope, Compass
} from 'lucide-react';
import OfferBanner from './OfferBanner';
import { trackConversion, CONVERSION_EVENTS } from '../lib/conversionTracking';

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
    group: 'Airway, TMJ & Sleep', items: [
      { name: 'Airway Orthodontics', href: '/treatments/airway-orthodontics' },
      { name: 'Sleep Apnea Treatment', href: '/treatments/sleep-apnea-treatment' },
      { name: 'TMJ Specialist Care', href: '/treatments/tmj-disorder-treatment' },
      { name: 'Tongue Tie Release (Laser)', href: '/treatments/tongue-tie-release' },
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
  const [mobileAlignersOpen, setMobileAlignersOpen] = useState(false);
  const [mobileClinicOpen, setMobileClinicOpen] = useState(false);

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
      <OfferBanner />
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} aria-label="Site header">

        {/* Top Announcement Bar */}
        <div className="top-bar" aria-label="Contact information">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <MapPin size={12} aria-hidden="true" />
                Tilak Nagar, Rohtak
              </span>
              <span className="top-bar-divider" />
              <a href="#book" className="top-bar-item top-bar-video-badge" style={{ color: '#FFB380', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
                📹 Online Video Consultation Available
              </a>
              <span className="top-bar-divider hide-mobile" />
              <span className="top-bar-item hide-mobile">
                <Clock size={12} aria-hidden="true" />
                Mon–Sat: 9:30 AM – 8:00 PM
              </span>
            </div>
            <div className="top-bar-right">
              <a 
                href="tel:+918685048414" 
                className="top-bar-item top-bar-link" 
                aria-label="Call clinic"
                onClick={() => trackConversion(CONVERSION_EVENTS.PHONE_CLICK, { source: 'HeaderPrimary' })}
              >
                <Phone size={12} aria-hidden="true" />
                +91-8685048414
              </a>
              <span className="top-bar-divider" />
              <a 
                href="tel:01262469393" 
                className="top-bar-item top-bar-link" 
                aria-label="Call clinic landline"
                onClick={() => trackConversion(CONVERSION_EVENTS.PHONE_CLICK, { source: 'HeaderLandline' })}
              >
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
                <Image src="/logo.webp?v=2" alt="Shubh Dental Clinic Logo" width={64} height={64} priority style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                    <div className="mega-menu-bottom-bar" style={{ padding: '0.75rem 1.5rem', background: '#F8F6F3', borderTop: '1px solid rgba(214, 122, 65, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#6A564D' }}>Explore all 17 clinical disciplines &amp; procedures</span>
                      <Link 
                        href="/treatments" 
                        onClick={() => setMegaOpen(false)}
                        style={{ fontSize: '0.82rem', fontWeight: 700, color: '#B85D26', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                      >
                        <span>View All Treatments Hub →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* SkyAlign Direct Nav Link */}
              <Link href="/treatments/skyalign-clear-aligners" className="nav-link">SkyAlign</Link>

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
                    <Link href="/why-choose-us" className="dropdown-item" onClick={() => setAboutOpen(false)}>
                      <Award size={14} className="dropdown-icon" />
                      <div>
                        <strong>Why Choose Us</strong>
                        <span>20+ years legacy &amp; in-house 3D lab</span>
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
              <Link href="/contact" className="nav-link">Contact</Link>

              {/* Special Offer Badge Pill (Matching Reference) */}
              <Link href="/special-offer" className="nav-offer-pill-btn" aria-label="Limited-time special dental offer">
                <Tag size={13} className="nav-offer-icon" />
                <span>Special Offer</span>
              </Link>

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

        {/* Mobile Slide-Over Overlay — Elite Luxury Healthcare Navigation */}
        {mobileOpen && (
          <div className="mobile-nav-overlay" role="dialog" aria-label="Mobile navigation" aria-modal="true">

            {/* Mobile Header Bar */}
            <div className="mobile-nav-header">
              <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                <div className="logo-icon-wrap" style={{ width: 38, height: 38 }}>
                  <Image src="/logo.webp?v=2" alt="Logo" width={38} height={38} style={{ objectFit: 'contain' }} />
                </div>
                <div className="logo-text">
                  <span className="logo-dr-name" style={{ color: '#9A4616' }}>Prof. Dr. S. K. Yadav&apos;s</span>
                  <span className="logo-name" style={{ fontSize: '0.98rem', color: '#110805' }}>Shubh Dental Clinic</span>
                </div>
              </Link>
              <button className="mob-close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-scroll-body">

              {/* Clean Professional Nav List (Matching Laptop Navigation Exactly) */}
              <div className="mob-nav-list-simple">

                {/* 1. Home */}
                <Link href="/" className="mob-simple-link" onClick={() => setMobileOpen(false)}>
                  <span>Home</span>
                </Link>

                {/* 2. Treatments Row with direct link + dropdown toggle */}
                <div className="mob-simple-accordion">
                  <div className="mob-treatments-row">
                    <Link 
                      href="/treatments" 
                      className="mob-treatments-main-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>Treatments</span>
                    </Link>
                    <button
                      type="button"
                      className="mob-treatments-chevron-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileTreatmentsOpen(!mobileTreatmentsOpen);
                      }}
                      aria-expanded={mobileTreatmentsOpen}
                      aria-label="Toggle Treatments submenu"
                    >
                      <ChevronDown size={18} className={`mob-simple-chevron ${mobileTreatmentsOpen ? 'open' : ''}`} />
                    </button>
                  </div>

                  {mobileTreatmentsOpen && (
                    <div className="mob-simple-submenu mob-treatments-submenu-compact">
                      {NAV_TREATMENTS.map((group, gIdx) => (
                        <div key={gIdx} className="mob-treatment-cat-group">
                          <span className="mob-treatment-cat-label">{group.group}</span>
                          <div className="mob-treatment-items-grid">
                            {group.items.map((item, iIdx) => (
                              <Link
                                key={iIdx}
                                href={item.href}
                                className="mob-treatment-compact-item"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="mob-treatment-dot" />
                                <span className="mob-treatment-item-name">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link href="/treatments" className="mob-simple-subitem mob-simple-subitem--all" onClick={() => setMobileOpen(false)}>
                        <span>View All Treatments Directory</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. SkyAlign Direct Nav Link */}
                <Link href="/treatments/skyalign-clear-aligners" className="mob-simple-link" onClick={() => setMobileOpen(false)}>
                  <span>SkyAlign</span>
                </Link>

                {/* 4. Clinic Accordion */}
                <div className="mob-simple-accordion">
                  <button
                    type="button"
                    className="mob-simple-toggle"
                    onClick={() => setMobileClinicOpen(!mobileClinicOpen)}
                    aria-expanded={mobileClinicOpen}
                  >
                    <span>Clinic</span>
                    <ChevronDown size={15} className={`mob-simple-chevron ${mobileClinicOpen ? 'open' : ''}`} />
                  </button>

                  {mobileClinicOpen && (
                    <div className="mob-simple-submenu">
                      <Link href="/doctors" className="mob-simple-subitem" onClick={() => setMobileOpen(false)}>
                        Our Specialists
                      </Link>
                      <Link href="/about" className="mob-simple-subitem" onClick={() => setMobileOpen(false)}>
                        About Shubh Dental
                      </Link>
                      <Link href="/why-choose-us" className="mob-simple-subitem" onClick={() => setMobileOpen(false)}>
                        Why Choose Us
                      </Link>
                      <Link href="/gallery" className="mob-simple-subitem" onClick={() => setMobileOpen(false)}>
                        Smile Gallery
                      </Link>
                      <Link href="/visiting-centres" className="mob-simple-subitem" onClick={() => setMobileOpen(false)}>
                        Visiting Centres
                      </Link>
                    </div>
                  )}
                </div>

                {/* 5. NRI Tourism */}
                <Link href="/dental-tourism" className="mob-simple-link" onClick={() => setMobileOpen(false)}>
                  <span>NRI Tourism</span>
                </Link>

                {/* 6. Contact */}
                <Link href="/contact" className="mob-simple-link" onClick={() => setMobileOpen(false)}>
                  <span>Contact</span>
                </Link>

                {/* 8. Special Offer Pill */}
                <div className="mob-simple-offer-wrap">
                  <Link href="/special-offer" className="mob-simple-offer-btn" onClick={() => setMobileOpen(false)}>
                    <Tag size={14} />
                    <span>Special Offer</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="mobile-bottom-bar" aria-label="Quick contact bar">
        <div className="mobile-bottom-bar-inner">

          {/* 1. Book Consult */}
          <a href="#book" className="mobile-bar-btn" aria-label="Book consultation">
            <div className="icon-wrapper icon-book-wrapper">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D67A41" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M9 16l2 2 4-4" stroke="#10B981" strokeWidth="2.2" />
              </svg>
            </div>
            <span>Book<br />Consult</span>
          </a>

          <div className="mobile-bar-divider" />

          {/* 2. WhatsApp Chat (with pulse beacon) */}
          <a
            href="https://api.whatsapp.com/send/?phone=918685048414&text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Shubh%20Orthodontic%20%26%20Dental%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn"
            aria-label="WhatsApp clinic"
          >
            <div className="icon-wrapper icon-wa-wrapper">
              <span className="wa-beacon-pulse" />
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
                <path fill="#FFFFFF" d="M17.52 14.33C17.22 14.18 15.75 13.45 15.48 13.35C15.2 13.25 15 13.2 14.81 13.5C14.61 13.8 14.04 14.47 13.86 14.67C13.69 14.87 13.51 14.9 13.21 14.75C12.92 14.6 11.96 14.28 10.83 13.27C9.94 12.48 9.35 11.51 9.17 11.21C9 10.91 9.15 10.75 9.3 10.6C9.43 10.47 9.6 10.25 9.75 10.08C9.9 9.9 9.95 9.77 10.05 9.57C10.15 9.37 10.1 9.2 10.02 9.05C9.95 8.9 9.37 7.48 9.13 6.9C8.9 6.33 8.66 6.41 8.49 6.4C8.32 6.39 8.13 6.39 7.93 6.39C7.73 6.39 7.41 6.46 7.14 6.76C6.87 7.06 6.1 7.78 6.1 9.25C6.1 10.72 7.17 12.14 7.32 12.34C7.47 12.54 9.42 15.53 12.41 16.82C13.12 17.13 13.68 17.31 14.12 17.45C14.84 17.68 15.49 17.65 16.01 17.57C16.59 17.48 17.8 16.84 18.05 16.14C18.3 15.44 18.3 14.84 18.22 14.72C18.15 14.59 17.97 14.51 17.67 14.36" />
              </svg>
            </div>
            <span>WhatsApp<br />Chat</span>
          </a>

          <div className="mobile-bar-divider" />

          {/* 3. Call Now */}
          <a href="tel:+918685048414" className="mobile-bar-btn" aria-label="Call clinic directly">
            <div className="icon-wrapper icon-call-wrapper">
              <span className="call-beacon-pulse" />
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D67A41" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>Call<br />Now</span>
          </a>

          <div className="mobile-bar-divider" />

          {/* 4. Instagram Profile */}
          <a
            href="https://www.instagram.com/dr.s.k._yadav_orthodontist"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn"
            aria-label="Instagram profile and cases"
          >
            <div className="icon-wrapper icon-ig-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <defs>
                  <linearGradient id="igBarGradSubtle" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FED373" />
                    <stop offset="0.25" stopColor="#F15245" />
                    <stop offset="0.5" stopColor="#D92E7F" />
                    <stop offset="0.75" stopColor="#9B36B7" />
                    <stop offset="1" stopColor="#515ECF" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igBarGradSubtle)" />
                <circle cx="12" cy="12" r="4.5" stroke="#FFFFFF" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
              </svg>
            </div>
            <span>Instagram<br />Profile</span>
          </a>

          <div className="mobile-bar-divider" />

          {/* 5. Official Google Maps */}
          <a
            href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn"
            aria-label="Google Maps directions to clinic"
          >
            <div className="icon-wrapper icon-map-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                {/* Official Multi-Color Google Maps Pin */}
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#EA4335" />
                <path d="M12 2C10.5 2 9.1 2.5 8 3.3L12 11.5L16 3.3C14.9 2.5 13.5 2 12 2Z" fill="#EA4335" />
                <path d="M5 9C5 11.5 6.4 14.5 8.5 17.5L12 11.5L8 3.3C6.2 4.7 5 6.7 5 9Z" fill="#FBBC04" />
                <path d="M12 22C12 22 8.5 17.5 8.5 17.5L12 11.5L15.5 17.5C15.5 17.5 12 22 12 22Z" fill="#34A853" />
                <path d="M19 9C19 6.7 17.8 4.7 16 3.3L12 11.5L15.5 17.5C17.6 14.5 19 11.5 19 9Z" fill="#4285F4" />
                <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
              </svg>
            </div>
            <span>Google<br />Maps</span>
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
          min-width: 0;
          flex: 1;
          max-width: 100%;
        }
        .logo-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .logo-dr-name {
          font-size: 0.66rem;
          font-weight: 700;
          color: #8A7063;
          letter-spacing: 0.02em;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .logo-name {
          font-family: var(--font-heading, sans-serif);
          font-weight: 900;
          font-size: clamp(0.88rem, 2.5vw, 1.08rem);
          color: #0E0604;
          line-height: 1.15;
          letter-spacing: -0.01em;
          word-break: break-word;
        }
        .logo-tagline {
          font-size: 0.64rem;
          color: #D67A41;
          font-weight: 700;
          margin-top: 1px;
          white-space: nowrap;
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

        /* SPECIAL OFFER NAV PILL */
        .nav-offer-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFF3EB;
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          color: #B85922;
          padding: 0.45rem 0.85rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.12);
        }
        .nav-offer-pill-btn:hover {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(214, 122, 65, 0.25);
        }
        .nav-offer-icon {
          color: currentColor;
        }

        .mob-nav-offer-link {
          background: #FFF3EB !important;
          border: 1px solid rgba(214, 122, 65, 0.3) !important;
          border-radius: 12px !important;
          padding: 0.75rem 1rem !important;
          color: #B85922 !important;
          font-weight: 800 !important;
          margin-bottom: 0.5rem !important;
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

        /* ── ELITE LIGHT THEME MOBILE SLIDE-OVER OVERLAY ── */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #FAF8F5;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(214, 122, 65, 0.18);
          box-shadow: 0 2px 10px rgba(74, 37, 24, 0.04);
          flex-shrink: 0;
        }

        .mob-close-btn {
          background: #FFF4EC;
          border: 1px solid rgba(214, 122, 65, 0.28);
          color: #8C370B;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mob-close-btn:active {
          background: #FFE8D6;
          transform: scale(0.92);
        }

        .mobile-nav-scroll-body {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1rem 2.5rem;
          -webkit-overflow-scrolling: touch;
        }

        /* ── SIMPLE & PROFESSIONAL MOBILE NAV LIST (MATCHING LAPTOP NAVBAR) ── */
        .mob-nav-list-simple {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.35rem 0;
        }

        .mob-simple-link {
          display: flex;
          align-items: center;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #2D1E17;
          text-decoration: none;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.14);
          border-radius: 12px;
          transition: all 0.18s ease;
          box-shadow: 0 1px 4px rgba(74, 37, 24, 0.02);
        }
        .mob-simple-link:active {
          background: #FFF4EC;
          color: #9A4616;
          border-color: #D67A41;
        }

        .mob-simple-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        /* Treatments row: link + chevron in one unified bar */
        .mob-treatments-row {
          display: flex;
          align-items: stretch;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.14);
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(74, 37, 24, 0.02);
          overflow: hidden;
        }
        .mob-treatments-main-link {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #2D1E17;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(214, 122, 65, 0.12);
          transition: background 0.18s ease, color 0.18s ease;
        }
        .mob-treatments-main-link:active {
          background: #FFF4EC;
          color: #9A4616;
        }
        .mob-treatments-chevron-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          flex-shrink: 0;
          background: none;
          border: none;
          border-left: 1px solid rgba(214, 122, 65, 0.14);
          color: #B85D26;
          cursor: pointer;
          padding: 0;
          -webkit-tap-highlight-color: rgba(214, 122, 65, 0.12);
          transition: background 0.18s ease;
        }
        .mob-treatments-chevron-btn:active {
          background: #FFF4EC;
        }

        .mob-simple-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #2D1E17;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.14);
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.18s ease;
          box-shadow: 0 1px 4px rgba(74, 37, 24, 0.02);
        }
        .mob-simple-toggle:active {
          background: #FFFDFB;
          border-color: #D67A41;
        }

        .mob-simple-chevron {
          color: #B85D26;
          transition: transform 0.22s ease;
        }
        .mob-simple-chevron.open {
          transform: rotate(180deg);
        }

        .mob-simple-submenu {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          background: #FAF8F5;
          border-radius: 12px;
          border: 1px solid rgba(214, 122, 65, 0.12);
        }

        .mob-treatments-submenu-compact {
          padding: 0.65rem 0.6rem !important;
          gap: 0.6rem !important;
        }

        .mob-treatment-cat-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mob-treatment-cat-label {
          font-size: 0.66rem;
          font-weight: 800;
          color: #B85D26;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-left: 0.2rem;
          margin-bottom: 0.1rem;
        }

        .mob-treatment-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.3rem;
        }

        .mob-treatment-compact-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.42rem 0.55rem;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.12);
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 1px 3px rgba(74, 37, 24, 0.02);
          transition: all 0.15s ease;
          min-height: 38px;
          box-sizing: border-box;
        }
        .mob-treatment-compact-item:active {
          background: #FFF4EC;
          border-color: #D67A41;
          transform: scale(0.98);
        }
        .mob-treatment-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #D67A41;
          flex-shrink: 0;
        }
        .mob-treatment-item-name {
          font-size: 0.74rem;
          font-weight: 700;
          color: #2D1E17;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .mob-simple-subitem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #4A352B;
          text-decoration: none;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.1);
          border-radius: 8px;
          transition: all 0.18s ease;
        }
        .mob-simple-subitem:active {
          background: #FFF4EC;
          color: #9A4616;
          border-color: #D67A41;
        }
        .mob-simple-subitem--all {
          color: #9A4616;
          font-weight: 800;
          background: #FFF8F3;
        }

        .mob-simple-offer-wrap {
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(214, 122, 65, 0.12);
        }

        .mob-simple-offer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          width: 100%;
          padding: 0.75rem 1rem;
          background: #FFF3EB;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          color: #B85922;
          font-size: 0.88rem;
          font-weight: 800;
          border-radius: 99px;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.1);
          box-sizing: border-box;
          transition: all 0.2s ease;
        }
        .mob-simple-offer-btn:active {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1120px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 768px) {
          .top-bar { display: none !important; }
          .nav-main-inner { height: 68px !important; min-height: 68px !important; padding: 0 !important; }
          .logo-icon-wrap { width: 56px !important; height: 56px !important; min-width: 56px !important; }
          .logo-name { font-size: 0.98rem; font-weight: 900; line-height: 1.15; }
          .logo-dr-name { font-size: 0.65rem; line-height: 1.2; font-weight: 750; }
          .logo-tagline { display: block; font-size: 0.63rem; line-height: 1.2; color: #D67A41; font-weight: 750; margin-top: 1px; }
          
          .mobile-bottom-bar {
            display: block !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 9999 !important;
            background: rgba(255, 255, 255, 0.97) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-top: 1.5px solid rgba(214, 122, 65, 0.22) !important;
            border-radius: 26px 26px 0 0 !important;
            padding: 0.65rem 0.35rem !important;
            padding-bottom: max(0.6rem, env(safe-area-inset-bottom)) !important;
            box-shadow: 0 -8px 30px rgba(45, 24, 16, 0.12) !important;
          }
          .mobile-bottom-bar-inner {
            display: flex !important;
            justify-content: space-around !important;
            align-items: center !important;
            max-width: 520px !important;
            margin: 0 auto !important;
            gap: 2px !important;
          }
          .mobile-bar-divider {
            width: 1px !important;
            height: 24px !important;
            background: rgba(94, 74, 66, 0.12) !important;
            flex-shrink: 0 !important;
          }
          .mobile-bar-btn {
            display: flex !important;
            flex: 1 !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.25rem !important;
            color: #2D1E17 !important;
            font-size: 0.65rem !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            text-align: center !important;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            cursor: pointer !important;
            text-decoration: none !important;
            position: relative !important;
            min-width: 0 !important;
          }
          .mobile-bar-btn:active {
            transform: scale(0.92) !important;
          }
          .icon-wrapper {
            width: 40px !important;
            height: 40px !important;
            background: #FFFFFF !important;
            border: 1px solid rgba(214, 122, 65, 0.22) !important;
            border-radius: 13px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 2px 8px rgba(74, 37, 24, 0.05) !important;
            position: relative !important;
            transition: all 0.25s ease !important;
          }
          .icon-book-wrapper {
            background: #FFFDFC !important;
            border-color: rgba(214, 122, 65, 0.25) !important;
          }
          .icon-wa-wrapper {
            background: #F4FDF7 !important;
            border-color: rgba(37, 211, 102, 0.3) !important;
          }
          .icon-call-wrapper {
            background: #FFF8F3 !important;
            border-color: rgba(214, 122, 65, 0.3) !important;
          }
          .icon-ig-wrapper {
            background: #FEF9FB !important;
            border-color: rgba(217, 46, 127, 0.25) !important;
          }
          .icon-map-wrapper {
            background: #F8FAFF !important;
            border-color: rgba(66, 133, 244, 0.25) !important;
          }
          .wa-beacon-pulse {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #25D366;
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            animation: waBeaconAnim 2s infinite;
          }
          .call-beacon-pulse {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #FF7E33;
            box-shadow: 0 0 0 0 rgba(230, 106, 31, 0.8);
            animation: callBeaconAnim 2s infinite;
          }

          @keyframes phoneRingContinuous {
            0% { transform: rotate(0deg) scale(1); }
            4% { transform: rotate(-22deg) scale(1.15); }
            8% { transform: rotate(22deg) scale(1.15); }
            12% { transform: rotate(-18deg) scale(1.15); }
            16% { transform: rotate(18deg) scale(1.15); }
            20% { transform: rotate(-10deg) scale(1.08); }
            24% { transform: rotate(10deg) scale(1.08); }
            28% { transform: rotate(0deg) scale(1); }
            100% { transform: rotate(0deg) scale(1); }
          }
          .icon-call-wrapper svg {
            animation: phoneRingContinuous 2.2s infinite ease-in-out !important;
            transform-origin: center center !important;
            display: block !important;
          }

          @keyframes waIconContinuous {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .icon-wa-wrapper svg {
            animation: waIconContinuous 2s infinite ease-in-out !important;
            transform-origin: center center !important;
          }

          @keyframes waBeaconAnim {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(37, 211, 102, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          @keyframes callBeaconAnim {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 126, 51, 0.8); }
            70% { transform: scale(1.15); box-shadow: 0 0 0 8px rgba(255, 126, 51, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 126, 51, 0); }
          }
        }
        @media (max-width: 420px) {
          .logo-name { font-size: 0.86rem; line-height: 1.15; }
          .logo-dr-name { font-size: 0.58rem; }
          .logo-tagline { font-size: 0.56rem; }
          .logo-icon-wrap { width: 48px; height: 48px; min-width: 48px; }
          .icon-wrapper { width: 35px !important; height: 35px !important; border-radius: 10px !important; }
          .mobile-bar-btn { font-size: 0.62rem !important; }
        }
      `}} />
    </>
  );
}
