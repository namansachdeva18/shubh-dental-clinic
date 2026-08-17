'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkle, ArrowUpRight, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Orthodontics', 'Implants', 'Cosmetic', 'General & Surgery'];

// Custom Bespoke Vector SVG Illustrations
const VectorIcons = {
  braces: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M4 11h16" />
      <rect x="6.5" y="9.5" width="2" height="3" />
      <rect x="11" y="9.5" width="2" height="3" />
      <rect x="15.5" y="9.5" width="2" height="3" />
    </svg>
  ),
  aligners: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" strokeOpacity="0.4" />
      <path d="M3 9c0-3 2.5-5 5-5 1.5 0 2.5 1 4 2 1.5-1 2.5-2 4-2 2.5 0 5 2 5 5 0 3-2.5 5-4 7.5" />
      <path d="M5 2h2M17 2h2" />
    </svg>
  ),
  implants: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 2 1 3 2.5 4.5h11C19 12 20 11 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M10 13.5v7c0 1 1 2 2 2s2-1 2-2v-7" />
      <path d="M9 16h6M9 19h6" />
    </svg>
  ),
  sameday: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 2 1 3 2.5 4.5h11C19 12 20 11 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M10 13.5v7c0 1 1 2 2 2s2-1 2-2v-7" />
      <path d="M9 16h6" />
      <path d="M19 2l-3 5h4l-4 6" strokeWidth="1.5" stroke="currentColor" />
    </svg>
  ),
  veneers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 7.5C12.5 6.5 11 5 9 5 6 5 5 7 5 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C18.5 14 21 12 21 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5" strokeDasharray="2 3" />
      <path d="M2 10h3M2 16h3" />
    </svg>
  ),
  smileDesign: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6.5C11.5 5.5 10 4 8 4 5 4 4 6 4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 13 20 11 20 8c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M3 18c2 2 5 3 9 3 4 0 7-1 9-3" />
      <path d="M4 16l-2 2M20 16l2 2" />
      <path d="M17 3l1-1M19 6l1-1" />
    </svg>
  ),
  crowns: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" strokeOpacity="0.4" />
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 1 .5 2 1.5 3h13c1-1 1.5-2 1.5-3 0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M6 2l1.5 3M11 1v4" />
    </svg>
  ),
  rct: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M8 12c1 3 0 7-1 9" />
      <path d="M16 12c-1 3 0 7 1 9" />
      <path d="M12 2v10M10 4h4" />
    </svg>
  ),
  wisdom: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" transform="rotate(25 12 12)" />
      <path d="M3 20l4-4M21 4l-4 4" />
    </svg>
  ),
  extractions: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" transform="translate(0, -2)" />
      <path d="M7 2l2 5M17 2l-2 5" />
      <path d="M10 21l2 2 2-2" />
    </svg>
  ),
  laserFillings: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M14 8l5-5M19 3h3v3" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  dentures: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 14c0-4 4-8 8-8s8 4 8 8" />
      <path d="M4 14v1c0 3 3 5 8 5s8-2 8-5v-1" />
      <path d="M8 14v6M12 14v6M16 14v6" />
      <path d="M4 16h16" />
    </svg>
  ),
  whitening: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M3 4h14c1 0 1.5.5 1.5 1.5S18 7 17 7H3V4z" />
      <path d="M10 7v3M13 7v3" />
      <path d="M18 10l1-1M19 14h2M18 17l2 2" />
    </svg>
  ),
  gumCare: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M2 13c3 2 6 2 10 0s7-2 10 0" />
      <path d="M18 20l4-4M19 16l3 3" />
    </svg>
  )
};

const TREATMENTS = [
  {
    id: 'dental-braces',
    title: 'Metal & Ceramic Braces',
    shortTitle: 'Braces (Orthodontics)',
    desc: 'Advanced bracket systems (Metal, Ceramic & Lingual) for precise bite & alignment correction.',
    iconKey: 'braces',
    badge: 'Prof. Dr. S. K. Yadav',
    category: 'Orthodontics'
  },
  {
    id: 'invisalign-clear-aligners',
    title: 'SkyAlign™ & Invisalign®',
    shortTitle: 'Clear Aligners',
    desc: 'Discreet, removable custom clear aligners crafted in-house & Invisalign certified for a wire-free smile.',
    iconKey: 'aligners',
    badge: 'In-House SkyAlign™',
    category: 'Orthodontics'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortTitle: 'Dental Implants',
    desc: 'Permanent titanium replacements for missing teeth, fused with jawbone for natural strength & function.',
    iconKey: 'implants',
    badge: 'PGI Trained Experts',
    category: 'Implants'
  },
  {
    id: 'same-day-implants',
    title: 'Same Day Implants',
    shortTitle: 'Same Day Implants',
    desc: 'Advanced immediate loading implantology — walk out with a complete brand new smile in just one day.',
    iconKey: 'sameday',
    badge: 'Immediate Loading',
    category: 'Implants'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    shortTitle: 'Veneers & Laminates',
    desc: 'Ultra-thin custom German porcelain shells to correct chips, gaps, and severe discolouration permanently.',
    iconKey: 'veneers',
    badge: 'Hollywood Smile',
    category: 'Cosmetic'
  },
  {
    id: 'smile-makeover',
    title: 'Digital Smile Makeover',
    shortTitle: 'Smile Design',
    desc: 'Complete aesthetic transformation combining 3D digital smile design, veneers, and alignment planning.',
    iconKey: 'smileDesign',
    badge: '3D Digital Design',
    category: 'Cosmetic'
  },
  {
    id: 'crowns-and-bridges',
    title: 'Crowns & Bridges',
    shortTitle: 'Crowns & Bridges',
    desc: 'Metal-free Zirconia with 10-year warranty card & German ceramic for durable tooth restoration.',
    iconKey: 'crowns',
    badge: '10-Yr Warranty',
    category: 'General & Surgery'
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (RCT)',
    shortTitle: 'Root Canal (RCT)',
    desc: 'Modern, virtually painless rotary root canal therapy to save infected natural teeth without extraction.',
    iconKey: 'rct',
    badge: 'Painless Rotary',
    category: 'General & Surgery'
  },
  {
    id: 'wisdom-tooth-surgery',
    title: '3rd Molar Wisdom Surgery',
    shortTitle: 'Wisdom Surgery',
    desc: 'Specialized minor oral surgery for impacted 3rd molars and wisdom tooth pain relief.',
    iconKey: 'wisdom',
    badge: 'Oral Surgery',
    category: 'General & Surgery'
  },
  {
    id: 'painless-extractions',
    title: 'Painless Extractions',
    shortTitle: 'Painless Extractions',
    desc: 'Gentle, atraumatic tooth extractions performed under local anaesthesia with minimal downtime.',
    iconKey: 'extractions',
    badge: 'Atraumatic Care',
    category: 'General & Surgery'
  },
  {
    id: 'cosmetic-laser-fillings',
    title: 'Cosmetic Laser Fillings',
    shortTitle: 'Laser Fillings',
    desc: 'Tooth-coloured light-cured composite resin fillings & aesthetic dental crystal jewellery.',
    iconKey: 'laserFillings',
    badge: 'Laser Cured',
    category: 'Cosmetic'
  },
  {
    id: 'dentures-full-partial',
    title: 'Full & Flexible Dentures',
    shortTitle: 'Dentures',
    desc: 'Latest flexible dentures, acrylic full/RPD dentures, and implant-supported fixed overdentures.',
    iconKey: 'dentures',
    badge: 'Flexible & Implant',
    category: 'General & Surgery'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Whitening',
    shortTitle: 'Teeth Whitening',
    desc: '6–10 shades brighter teeth in 45 minutes using in-clinic LED bleaching systems and take-home kits.',
    iconKey: 'whitening',
    badge: 'Instant Results',
    category: 'Cosmetic'
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Gum Care & Scaling',
    shortTitle: 'Laser Scaling',
    desc: 'Ultrasonic scaling for pyorrhoea, bleeding gums, bad breath treatment & deep periodontal maintenance.',
    iconKey: 'gumCare',
    badge: 'Ultrasonic',
    category: 'General & Surgery'
  }
];

export default function TreatmentNavigator() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTreatments = activeCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="treatments" className="bento-treatments-section" aria-labelledby="treatments-heading">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header bento-header text-center">
          <div className="section-badge badge-gold">
            <Sparkles size={13} style={{ marginRight: 4 }} />
            Clinical Facilities &amp; Specialities
          </div>
          <h2 id="treatments-heading" className="font-heading">
            Advanced <span className="text-gradient-copper">Treatments</span>
          </h2>
          <p className="bento-header-desc">
            PGI-trained clinical excellence across orthodontic, implant, and aesthetic dental disciplines.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="treatment-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`t-filter-pill ${activeCategory === cat ? 't-filter-pill--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid (Desktop 3-4 Col, Mobile Compact 2-Col) */}
        <motion.div layout className="bento-treatments-grid">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((t, i) => {
              const IconComponent = VectorIcons[t.iconKey] || VectorIcons.braces;
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/treatments/${t.id}`}
                    className="bento-treatment-card"
                    aria-label={`Learn more about ${t.title}`}
                  >
                    {/* Top Row: Luxury Vector Icon + Badge */}
                    <div className="treatment-card-top">
                      <div className="treatment-vector-icon">
                        <IconComponent className="vector-svg" />
                      </div>
                      <span className="treatment-pill-badge">{t.badge}</span>
                    </div>

                    {/* Content Body */}
                    <div className="card-content-body">
                      <h3 className="treatment-title">{t.shortTitle}</h3>
                      <p className="treatment-desc hide-mobile">{t.desc}</p>
                    </div>

                    {/* CTA Link */}
                    <div className="treatment-cta-row">
                      <span className="cta-label">EXPLORE</span>
                      <ArrowUpRight size={14} className="cta-chevron" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .bento-treatments-section {
          background: #FAF8F5;
          position: relative;
          padding: 3rem 0;
        }

        .bento-header {
          margin-bottom: 1.5rem !important;
        }
        .bento-header-desc {
          font-size: 1rem;
          color: #6E5448;
          max-width: 600px;
          margin: 0.35rem auto 0;
        }

        /* FILTER BAR */
        .treatment-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .t-filter-pill {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          color: #6E5448;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .t-filter-pill:hover {
          border-color: #D67A41;
          color: #D67A41;
        }
        .t-filter-pill--active {
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%) !important;
          color: #FFFDF9 !important;
          border-color: #110805 !important;
          box-shadow: 0 4px 14px rgba(17, 8, 5, 0.2);
        }

        /* BENTO GRID */
        .bento-treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1.25rem;
        }

        .bento-treatment-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          height: 100%;
          min-height: 220px;
          text-decoration: none;
          background: #FFFFFF;
          border-radius: 22px;
          border: 1.5px solid rgba(74, 37, 24, 0.08);
          box-shadow: 0 8px 24px rgba(74, 37, 24, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-treatment-card:hover {
          transform: translateY(-4px);
          border-color: rgba(214, 122, 65, 0.4);
          box-shadow: 0 16px 36px rgba(74, 37, 24, 0.08);
        }

        .treatment-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .treatment-vector-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(214, 122, 65, 0.1);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vector-svg {
          width: 24px;
          height: 24px;
        }
        .treatment-pill-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #7A340F;
          background: #FFF8F0;
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          letter-spacing: 0.02em;
        }

        .card-content-body {
          flex-grow: 1;
        }
        .treatment-title {
          font-family: var(--font-heading);
          font-size: 1.08rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0 0 0.35rem;
          line-height: 1.25;
        }
        .treatment-desc {
          font-size: 0.84rem;
          color: #6E5448;
          line-height: 1.5;
          margin: 0;
        }

        .treatment-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(74, 37, 24, 0.06);
          color: #D67A41;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .cta-chevron {
          transition: transform 0.2s ease;
        }
        .bento-treatment-card:hover .cta-chevron {
          transform: translate(2px, -2px);
        }

        /* MOBILE COMPACT 2-COLUMN LUXURY BENTO */
        @media (max-width: 768px) {
          .bento-treatments-section {
            padding: 2.25rem 0 3rem !important;
          }
          .treatment-filter-bar {
            gap: 0.35rem !important;
            margin-bottom: 1.25rem !important;
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0 0.5rem 0.5rem;
            flex-wrap: nowrap;
            scrollbar-width: none;
          }
          .treatment-filter-bar::-webkit-scrollbar { display: none; }
          .t-filter-pill {
            padding: 0.35rem 0.75rem !important;
            font-size: 0.74rem !important;
            white-space: nowrap;
          }
          .bento-treatments-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.65rem !important;
          }
          .bento-treatment-card {
            padding: 1rem 0.85rem !important;
            min-height: 140px !important;
            border-radius: 18px !important;
          }
          .treatment-vector-icon {
            width: 34px !important;
            height: 34px !important;
            border-radius: 10px !important;
          }
          .vector-svg {
            width: 18px !important;
            height: 18px !important;
          }
          .treatment-pill-badge {
            display: none !important; /* Hide long badge text on small 2-col to keep card compact */
          }
          .treatment-title {
            font-size: 0.86rem !important;
            line-height: 1.2 !important;
          }
          .treatment-cta-row {
            margin-top: 0.5rem !important;
            padding-top: 0.4rem !important;
            font-size: 0.68rem !important;
          }
        }
      `}} />
    </section>
  );
}
