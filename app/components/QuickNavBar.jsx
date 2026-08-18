'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

// Custom Bespoke Dental & Medical Vector Icons
const DentalVectors = {
  // Treatments / Comprehensive Care: Tooth shield with medical cross
  treatments: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2C7.5 2 4 4.5 4 8c0 4.5 3 8 4.5 11 .8 1.5 1.7 3 3.5 3s2.7-1.5 3.5-3C17 16 20 12.5 20 8c0-3.5-3.5-6-8-6z" />
      <path d="M12 7v6M9 10h6" strokeWidth="2" />
    </svg>
  ),

  // Specialists: PGI Doctor badge with stethoscope
  specialists: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M9 13.5v3a3 3 0 0 0 6 0v-3" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),

  // About Clinic / Legacy: High-tech clinic facade with medical emblem
  about: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M12 7v4M10 9h4" strokeWidth="2" />
      <path d="M9 17h6M9 21v-4h6v4" />
    </svg>
  ),

  // Gallery: Before/After Smile Transformation Lens with golden ratio sparkle
  gallery: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="9" cy="12" r="2.5" />
      <path d="M15 10l2 2-2 2" />
      <path d="M19 8.5l.5-1M19.5 8.5l-.5-1" />
      <path d="M6.5 16c2 1.5 5 1.5 7 0" />
    </svg>
  ),

  // Dental Tourism: Global flight arc & international NRI medical care
  tourism: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
      <path d="M11.5 3a15 15 0 0 0 0 18M12.5 3a15 15 0 0 1 0 18" />
      <path d="M16 5l5 2-2 2-4-1" strokeWidth="2" />
    </svg>
  ),

  // Visiting Centers: Multi-hub regional map network
  visit: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a6.5 6.5 0 0 0-6.5 6.5C5.5 13.5 12 21 12 21s6.5-7.5 6.5-12.5A6.5 6.5 0 0 0 12 2z" />
      <circle cx="12" cy="8.5" r="2.5" />
      <path d="M4 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM20 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  ),

  // SkyAlign™: In-House 3D Orthodontic Clear Aligner Tray
  skyalign: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.5 16C4 9.5 8 5 12 5s8 4.5 8.5 11c0 1.5-1.2 2.5-2.5 2.5-2 0-2.5-1.5-3-3-.6-1.8-1.6-2.5-3-2.5s-2.4.7-3 2.5c-.5 1.5-1 3-3 3-1.3 0-2.5-1-2.5-2.5z" />
      <path d="M12 2.5l.8 1.6 1.7.3-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.3L12 2.5z" fill="currentColor" stroke="none" />
    </svg>
  ),

  // Same-Day Implants: Precision Titanium Implant & Crown Abutment
  implants: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 4h10a2 2 0 0 1 2 2v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2z" />
      <path d="M10 11v9a2 2 0 0 0 4 0v-9" />
      <path d="M9 14h6M9 17h6" />
      <path d="M19 2l-2.5 4h3.5l-3 4" strokeWidth="1.5" />
    </svg>
  ),

  // Braces: Orthodontic Brackets & Tension Archwire
  braces: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12h20" strokeWidth="2" />
      <rect x="4" y="8.5" width="4" height="7" rx="1" />
      <rect x="10" y="8.5" width="4" height="7" rx="1" />
      <rect x="16" y="8.5" width="4" height="7" rx="1" />
      <path d="M6 6v2.5M6 15.5V18M12 6v2.5M12 15.5V18M18 6v2.5M18 15.5V18" />
    </svg>
  ),

  // Clear Aligners (Invisalign® certified)
  aligners: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 15C3 8.5 7 4 12 4s9 4.5 9 11" />
      <path d="M6 15c0-4.5 2.7-8 6-8s6 3.5 6 8" strokeDasharray="2 2.5" />
      <circle cx="6.5" cy="14.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="14.5" r="1.5" fill="currentColor" />
    </svg>
  ),

  // Contact Us: Clinical direct helpline
  contact: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14 3a6 6 0 0 1 6 6M14 7a2 2 0 0 1 2 2" />
    </svg>
  ),

  // Book Now: Priority Consultation Booking
  book: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M9 16l2 2 4-4" />
    </svg>
  ),
};

const CATEGORIES = [
  { id: 'all', label: 'All Directory' },
  { id: 'treatments', label: 'Treatments & Ortho' },
  { id: 'specialists', label: 'Doctors & Clinic' },
  { id: 'tourism', label: 'NRI & Centers' },
];

const NAV_ITEMS = [
  {
    id: 'treatments',
    category: 'treatments',
    label: 'Treatments',
    sublabel: 'Comprehensive Care',
    badge: 'All Care',
    href: '#treatments',
    theme: 'copper',
    vectorKey: 'treatments',
  },
  {
    id: 'invisalign',
    category: 'treatments',
    label: 'Invisalign® Aligners',
    sublabel: 'Global Gold Standard',
    badge: 'Invisalign',
    href: '/clear-aligners',
    theme: 'copper',
    vectorKey: 'aligners',
  },
  {
    id: 'skyalign',
    category: 'treatments',
    label: 'SkyAlign™ In-House',
    sublabel: 'Custom German Polymer',
    badge: 'In-House 3D',
    href: '/skyalign',
    theme: 'gold',
    vectorKey: 'skyalign',
  },
  {
    id: 'specialists',
    category: 'specialists',
    label: 'Our Specialists',
    sublabel: 'Prof. Dr. S. K. Yadav & Team',
    badge: 'Ex-PGI Gold',
    href: '/doctors',
    theme: 'forest',
    vectorKey: 'specialists',
  },
  {
    id: 'about',
    category: 'specialists',
    label: 'About Clinic',
    sublabel: 'PGI Heritage & Tech',
    badge: '15+ Yrs',
    href: '/about',
    theme: 'sapphire',
    vectorKey: 'about',
  },
  {
    id: 'gallery',
    category: 'specialists',
    label: 'Smile Gallery',
    sublabel: 'Real Patient Transformations',
    badge: '10K+ Smiles',
    href: '/gallery',
    theme: 'purple',
    vectorKey: 'gallery',
  },
  {
    id: 'tourism',
    category: 'tourism',
    label: 'Dental Tourism (NRI)',
    sublabel: 'Overseas Patient Concierge',
    badge: 'Global NRI',
    href: '/dental-tourism',
    theme: 'amber',
    vectorKey: 'tourism',
  },
  {
    id: 'visit',
    category: 'tourism',
    label: 'Visiting Centres',
    sublabel: 'Delhi, Gurgaon, Panipat',
    badge: '6 Hubs',
    href: '/visiting-centres',
    theme: 'teal',
    vectorKey: 'visit',
  },
  {
    id: 'contact',
    category: 'specialists',
    label: 'Contact & Help',
    sublabel: 'Direct Clinic Helpline',
    badge: 'Helpline',
    href: '/contact',
    theme: 'blue',
    vectorKey: 'contact',
  },
  {
    id: 'book',
    category: 'all',
    label: 'Book Free Consult',
    sublabel: 'Priority Doctor Slot',
    badge: 'Instant',
    href: '#book',
    isHighlight: true,
    theme: 'highlight',
    vectorKey: 'book',
  },
];

export default function QuickNavBar() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [activeCategory]);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -280 : 280;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const filteredItems = NAV_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (item.isHighlight) return true; // Always show Book Now CTA
    return item.category === activeCategory;
  });

  return (
    <section 
      className={`qnb-luxury-root${mounted ? ' is-ready' : ''}`} 
      aria-label="Quick Clinical Navigation Directory"
      role="region"
    >
      {/* Top Header Bar: Modern Clinical Badge & Category Pills */}
      <div className="qnb-header">
        <div className="qnb-header-left">
          <div className="qnb-badge">
            <span className="qnb-badge-pulse" />
            <Compass size={14} className="qnb-badge-icon" aria-hidden="true" />
            <span className="qnb-badge-text">QUICK DIRECTORY</span>
          </div>
          <span className="qnb-header-sub">Explore Clinical Departments & Services</span>
        </div>

        {/* Category Filter Pills */}
        <div className="qnb-filters" role="tablist" aria-label="Filter navigation categories">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`qnb-filter-pill${isActive ? ' active' : ''}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Navigation Arrows for Track Scrolling */}
        <div className="qnb-arrows" aria-hidden="true">
          <button 
            type="button"
            onClick={() => handleScroll('left')} 
            disabled={!canScrollLeft}
            className={`qnb-arrow-btn${!canScrollLeft ? ' disabled' : ''}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            type="button"
            onClick={() => handleScroll('right')} 
            disabled={!canScrollRight}
            className={`qnb-arrow-btn${!canScrollRight ? ' disabled' : ''}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Navigation Carousel Track */}
      <div className="qnb-track-wrapper">
        {/* Left / Right Edge Fade Masks for visual scroll affordance */}
        <div className={`qnb-edge-fade qnb-edge-left${canScrollLeft ? ' visible' : ''}`} />
        <div className={`qnb-edge-fade qnb-edge-right${canScrollRight ? ' visible' : ''}`} />

        <nav 
          ref={trackRef} 
          className="qnb-track" 
          aria-label="Clinical quick links"
          tabIndex={0}
        >
          {filteredItems.map((item) => {
            const VectorIcon = DentalVectors[item.vectorKey];
            const isBook = item.isHighlight;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`qnb-card theme-${item.theme}${isBook ? ' qnb-card-highlight' : ''}`}
                aria-label={`${item.label} — ${item.sublabel}`}
              >
                {/* Visual Icon Badge */}
                <div className="qnb-card-icon-box">
                  {VectorIcon && <VectorIcon className="qnb-vector-svg" aria-hidden="true" />}
                  {isBook && <span className="qnb-live-dot" />}
                </div>

                {/* Card Text Content */}
                <div className="qnb-card-body">
                  <div className="qnb-card-top-row">
                    <span className="qnb-card-title">{item.label}</span>
                    {item.badge && !isBook && (
                      <span className="qnb-micro-tag">{item.badge}</span>
                    )}
                  </div>
                  <span className="qnb-card-sub">{item.sublabel}</span>
                </div>

                {/* Subtle Action Arrow Indicator */}
                <div className="qnb-card-arrow" aria-hidden="true">
                  <ChevronRight size={14} />
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .qnb-luxury-root {
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }
        .qnb-luxury-root.is-ready {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header Bar ── */
        .qnb-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.1rem;
          flex-wrap: wrap;
        }

        .qnb-header-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .qnb-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.12), rgba(214, 122, 65, 0.05));
          border: 1px solid rgba(214, 122, 65, 0.22);
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.06);
        }

        .qnb-badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D67A41;
          box-shadow: 0 0 8px rgba(214, 122, 65, 0.8);
          animation: qnbPulseDot 2s ease-in-out infinite;
        }

        @keyframes qnbPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .qnb-badge-icon {
          color: #D67A41;
        }

        .qnb-badge-text {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #8C471E;
        }

        .qnb-header-sub {
          font-size: 0.82rem;
          color: var(--text-secondary, #6E5D57);
          font-weight: 600;
        }

        /* ── Category Filters ── */
        .qnb-filters {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(74, 37, 24, 0.04);
          padding: 4px;
          border-radius: 9999px;
          border: 1px solid rgba(74, 37, 24, 0.07);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .qnb-filters::-webkit-scrollbar { display: none; }

        .qnb-filter-pill {
          border: none;
          background: transparent;
          font-family: var(--font-body, sans-serif);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--text-secondary, #5E4A42);
          padding: 6px 14px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .qnb-filter-pill:hover {
          color: #D67A41;
          background: rgba(255, 255, 255, 0.6);
        }

        .qnb-filter-pill.active {
          background: #FFFFFF;
          color: #4A2518;
          font-weight: 800;
          box-shadow: 0 2px 8px rgba(74, 37, 24, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.2);
        }

        /* ── Navigation Arrows ── */
        .qnb-arrows {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .qnb-arrow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(74, 37, 24, 0.12);
          background: #FFFFFF;
          color: #4A2518;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .qnb-arrow-btn:hover:not(.disabled) {
          background: #4A2518;
          color: #FFFFFF;
          border-color: #4A2518;
          transform: scale(1.06);
        }

        .qnb-arrow-btn.disabled {
          opacity: 0.35;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* ── Carousel Track & Edge Fades ── */
        .qnb-track-wrapper {
          position: relative;
          width: 100%;
        }

        .qnb-edge-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 36px;
          pointer-events: none;
          z-index: 5;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .qnb-edge-fade.visible {
          opacity: 1;
        }
        .qnb-edge-left {
          left: 0;
          background: linear-gradient(90deg, var(--bg-primary, #FCFBF8) 15%, transparent);
        }
        .qnb-edge-right {
          right: 0;
          background: linear-gradient(270deg, var(--bg-primary, #FCFBF8) 15%, transparent);
        }

        .qnb-track {
          display: flex;
          align-items: stretch;
          gap: 0.75rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 4px 2px 14px 2px;
        }
        .qnb-track::-webkit-scrollbar { display: none; }
        .qnb-track:focus-visible {
          outline: 2px solid #D67A41;
          outline-offset: 4px;
          border-radius: 12px;
        }

        /* ── Individual Directory Card ── */
        .qnb-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.7rem 1.05rem 0.7rem 0.85rem;
          border-radius: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.09);
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
          text-decoration: none;
          flex-shrink: 0;
          min-width: 195px;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .qnb-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(74, 37, 24, 0.08), 0 0 0 1px rgba(214, 122, 65, 0.35);
          border-color: rgba(214, 122, 65, 0.4);
          background: #FFFFFF;
        }

        .qnb-card:active {
          transform: translateY(-1px) scale(0.98);
        }

        /* ── Vector Icon Badge ── */
        .qnb-card-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          flex-shrink: 0;
          transition: all 0.28s ease;
          position: relative;
        }

        .qnb-vector-svg {
          width: 22px;
          height: 22px;
          transition: transform 0.28s ease;
        }

        .qnb-card:hover .qnb-vector-svg {
          transform: scale(1.1);
        }

        /* Color Theme Badges */
        .theme-copper .qnb-card-icon-box {
          background: rgba(214, 122, 65, 0.12);
          color: #C2632B;
        }
        .theme-forest .qnb-card-icon-box {
          background: rgba(39, 174, 96, 0.12);
          color: #1E874B;
        }
        .theme-sapphire .qnb-card-icon-box {
          background: rgba(52, 152, 219, 0.12);
          color: #2475AC;
        }
        .theme-purple .qnb-card-icon-box {
          background: rgba(155, 89, 182, 0.12);
          color: #813C9E;
        }
        .theme-amber .qnb-card-icon-box {
          background: rgba(243, 156, 18, 0.12);
          color: #C67607;
        }
        .theme-teal .qnb-card-icon-box {
          background: rgba(22, 160, 133, 0.12);
          color: #117A65;
        }
        .theme-gold .qnb-card-icon-box {
          background: rgba(201, 168, 76, 0.14);
          color: #A37F2C;
        }
        .theme-steel .qnb-card-icon-box {
          background: rgba(100, 116, 139, 0.12);
          color: #475569;
        }
        .theme-coral .qnb-card-icon-box {
          background: rgba(231, 76, 60, 0.12);
          color: #C0392B;
        }
        .theme-blue .qnb-card-icon-box {
          background: rgba(41, 128, 185, 0.12);
          color: #1F618D;
        }

        /* ── Typography & Tags ── */
        .qnb-card-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1;
        }

        .qnb-card-top-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .qnb-card-title {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.88rem;
          font-weight: 800;
          color: #21130D;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .qnb-card:hover .qnb-card-title {
          color: #B85922;
        }

        .qnb-micro-tag {
          font-size: 0.62rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 99px;
          background: rgba(74, 37, 24, 0.05);
          color: #7A635B;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        .qnb-card-sub {
          font-family: var(--font-body, sans-serif);
          font-size: 0.72rem;
          color: #7A6963;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Subtle Arrow ── */
        .qnb-card-arrow {
          display: flex;
          align-items: center;
          color: rgba(74, 37, 24, 0.3);
          transform: translateX(-3px);
          opacity: 0.5;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .qnb-card:hover .qnb-card-arrow {
          opacity: 1;
          color: #D67A41;
          transform: translateX(0);
        }

        /* ── High-Conversion "Book Now" CTA Card ── */
        .qnb-card-highlight {
          background: linear-gradient(135deg, #D67A41 0%, #A84E1E 100%) !important;
          border-color: rgba(214, 122, 65, 0.4) !important;
          box-shadow: 0 6px 18px rgba(184, 89, 34, 0.32) !important;
          min-width: 215px;
        }

        .qnb-card-highlight .qnb-card-icon-box {
          background: rgba(255, 255, 255, 0.22) !important;
          color: #FFFFFF !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .qnb-card-highlight .qnb-card-title {
          color: #FFFFFF !important;
          font-weight: 800;
        }

        .qnb-card-highlight .qnb-card-sub {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .qnb-card-highlight .qnb-card-arrow {
          color: #FFFFFF !important;
          opacity: 0.9;
        }

        .qnb-card-highlight:hover {
          background: linear-gradient(135deg, #E28850 0%, #B85922 100%) !important;
          box-shadow: 0 12px 28px rgba(184, 89, 34, 0.45) !important;
          transform: translateY(-3px) scale(1.02);
        }

        .qnb-live-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #52E07B;
          border: 2px solid #D67A41;
          animation: qnbDotGlow 1.8s ease-in-out infinite;
        }

        @keyframes qnbDotGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        /* ── Mobile & Tablet Responsiveness ── */
        @media (max-width: 992px) {
          .qnb-header {
            gap: 0.75rem;
          }
          .qnb-header-sub {
            display: none;
          }
          .qnb-arrows {
            display: none; /* Rely on fluid touch swipe on touch devices */
          }
        }

        @media (max-width: 768px) {
          .qnb-header {
            margin-bottom: 0.85rem;
          }
          .qnb-filters {
            width: 100%;
            justify-content: flex-start;
            padding: 3px;
          }
          .qnb-filter-pill {
            padding: 5px 11px;
            font-size: 0.72rem;
          }
          .qnb-track {
            gap: 0.65rem;
            padding-bottom: 10px;
            scroll-snap-type: x mandatory;
          }
          .qnb-card {
            min-width: 180px;
            padding: 0.65rem 0.85rem;
            border-radius: 14px;
            scroll-snap-align: start;
          }
          .qnb-card-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .qnb-vector-svg {
            width: 19px;
            height: 19px;
          }
          .qnb-card-title {
            font-size: 0.84rem;
          }
          .qnb-card-sub {
            font-size: 0.68rem;
          }
          .qnb-micro-tag {
            display: none; /* Keep clean and compact on small phones */
          }
          .qnb-card-arrow {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .qnb-card {
            min-width: 168px;
            padding: 0.6rem 0.75rem;
          }
        }
      `}} />
    </section>
  );
}
