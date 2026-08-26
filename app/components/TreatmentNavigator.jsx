'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ['All', 'Cosmetic', 'General & Surgery'];

// Bespoke Luxury Animated SVG Icons
const VectorIcons = {
  braces: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M4 11h16" stroke="#F4B382" />
      <rect x="6.5" y="9.5" width="2" height="3" fill="#D67A41" />
      <rect x="11" y="9.5" width="2" height="3" fill="#D67A41" />
      <rect x="15.5" y="9.5" width="2" height="3" fill="#D67A41" />
    </svg>
  ),
  aligners: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6.5C10 4 7 4 5 6c-2 2-2 5 0 8 1 1.5 1 3 0 5 2 0 4-1 5-3 .5-.8 1.2-1.2 2-1.2s1.5.4 2 1.2c1 2 3 3 5 3-1-2-1-3.5 0-5 2-3 2-6 0-8-2-2-5-2-7 .5z" stroke="#D67A41" />
      <path d="M8 9.5c1-1 2.5-1.5 4-1.5s3 .5 4 1.5" stroke="#34D399" />
      <circle cx="12" cy="13" r="1.5" fill="#F4B382" />
    </svg>
  ),
  implants: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6C9 6 7 7.5 7 10c0 2 1 3 2.5 4.5h5C16 13 17 12 17 10c0-2.5-2-4-5-4z" stroke="#D67A41" />
      <path d="M10 14.5v6c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-6" stroke="#D67A41" />
      <path d="M9.5 16.5h5M9.5 19h5" stroke="#F4B382" />
      <path d="M12 2v4" stroke="#10B981" />
    </svg>
  ),
  sameday: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6C9 6 7 7.5 7 10c0 2 1 3 2.5 4.5h5C16 13 17 12 17 10c0-2.5-2-4-5-4z" stroke="#D67A41" />
      <path d="M10 14.5v6c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-6" stroke="#D67A41" />
      <path d="M19 2l-3 4.5h3.5l-3.5 5.5" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  veneers: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M13 7.5C12.5 6.5 11 5 9 5 6 5 5 7 5 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C18.5 14 21 12 21 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5" stroke="#F4B382" strokeDasharray="2 2" />
      <path d="M18 4l2 2M20 2l-2 4" stroke="#F4B382" />
    </svg>
  ),
  smileDesign: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6.5C11.5 5.5 10 4 8 4 5 4 4 6 4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 13 20 11 20 8c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M4 17c2.5 2.5 5.5 3.5 8 3.5s5.5-1 8-3.5" stroke="#10B981" strokeWidth="2" />
      <path d="M17 3l1-1M19 6l1-1" stroke="#F4B382" />
    </svg>
  ),
  crowns: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 1 .5 2 1.5 3h13c1-1 1.5-2 1.5-3 0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M7 3l1.5 3M12 2v4M17 3l-1.5 3" stroke="#F4B382" />
      <path d="M8 12v6c0 1 1.5 2 4 2s4-1 4-2v-6" stroke="#D67A41" />
    </svg>
  ),
  rct: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6.5C10 4 7 4 5 6c-2 2-2 5 0 8 1 1.5 1 3 0 5 2 0 4-1 5-3 .5-.8 1.2-1.2 2-1.2s1.5.4 2 1.2c1 2 3 3 5 3-1-2-1-3.5 0-5 2-3 2-6 0-8-2-2-5-2-7 .5z" stroke="#D67A41" />
      <path d="M9 11v8M15 11v8" stroke="#10B981" />
      <circle cx="12" cy="7" r="1.5" fill="#F4B382" />
    </svg>
  ),
  wisdom: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" transform="rotate(15 12 12)" />
      <path d="M4 18l3-3M20 6l-3 3" stroke="#F4B382" />
    </svg>
  ),
  extractions: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 6.5C10 4 7 4 5 6c-2 2-2 5 0 8 1 1.5 1 3 0 5 2 0 4-1 5-3 .5-.8 1.2-1.2 2-1.2s1.5.4 2 1.2c1 2 3 3 5 3-1-2-1-3.5 0-5 2-3 2-6 0-8-2-2-5-2-7 .5z" stroke="#D67A41" />
      <path d="M12 10v6M9 13h6" stroke="#10B981" />
    </svg>
  ),
  laserFillings: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M15 7l4-4M18 3h3v3" stroke="#F4B382" />
      <circle cx="14" cy="8" r="1.5" fill="#10B981" />
    </svg>
  ),
  dentures: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M4 13c0-4 4-7 8-7s8 3 8 7" stroke="#D67A41" />
      <path d="M5 14v1c0 2.5 3 4 7 4s7-1.5 7-4v-1" stroke="#F4B382" />
      <path d="M8 13v4M12 13v4M16 13v4" stroke="#D67A41" />
    </svg>
  ),
  whitening: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M4 4l2 2M20 4l-2 2M12 2v2" stroke="#F4B382" />
      <circle cx="12" cy="11" r="2" fill="#34D399" />
    </svg>
  ),
  gumCare: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-card-svg">
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" stroke="#D67A41" />
      <path d="M3 13c3 1.5 6 1.5 9 0s6-1.5 9 0" stroke="#10B981" strokeWidth="2" />
    </svg>
  )
};

const TREATMENTS = [
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    shortTitle: 'Veneers & Laminates',
    desc: 'Ultra-thin custom German porcelain shells to correct chips, gaps, and severe discolouration permanently.',
    iconKey: 'veneers',
    badge: 'Hollywood Smile',
    category: 'Cosmetic',
    glowColor: 'rgba(201, 168, 76, 0.18)'
  },
  {
    id: 'smile-makeover',
    title: 'Digital Smile Makeover',
    shortTitle: 'Smile Design',
    desc: 'Complete aesthetic transformation combining 3D digital smile design, veneers, and alignment planning.',
    iconKey: 'smileDesign',
    badge: '3D Digital Design',
    category: 'Cosmetic',
    glowColor: 'rgba(16, 185, 129, 0.18)'
  },
  {
    id: 'crowns-and-bridges',
    title: 'Crowns & Bridges',
    shortTitle: 'Crowns & Bridges',
    desc: 'Metal-free Zirconia with 10-year warranty card & German ceramic for durable tooth restoration.',
    iconKey: 'crowns',
    badge: '10-Yr Warranty',
    category: 'General & Surgery',
    glowColor: 'rgba(214, 122, 65, 0.18)'
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (RCT)',
    shortTitle: 'Root Canal (RCT)',
    desc: 'Modern, virtually painless rotary root canal therapy to save infected natural teeth without extraction.',
    iconKey: 'rct',
    badge: 'Painless Rotary',
    category: 'General & Surgery',
    glowColor: 'rgba(16, 185, 129, 0.18)'
  },
  {
    id: 'wisdom-tooth-surgery',
    title: '3rd Molar Wisdom Surgery',
    shortTitle: 'Wisdom Surgery',
    desc: 'Specialized minor oral surgery for impacted 3rd molars and wisdom tooth pain relief.',
    iconKey: 'wisdom',
    badge: 'Oral Surgery',
    category: 'General & Surgery',
    glowColor: 'rgba(214, 122, 65, 0.18)'
  },
  {
    id: 'painless-extractions',
    title: 'Painless Extractions',
    shortTitle: 'Painless Extractions',
    desc: 'Gentle, atraumatic tooth extractions performed under local anaesthesia with minimal downtime.',
    iconKey: 'extractions',
    badge: 'Atraumatic Care',
    category: 'General & Surgery',
    glowColor: 'rgba(245, 158, 11, 0.18)'
  },
  {
    id: 'cosmetic-laser-fillings',
    title: 'Cosmetic Laser Fillings',
    shortTitle: 'Laser Fillings',
    desc: 'Tooth-coloured light-cured composite resin fillings & aesthetic dental crystal jewellery.',
    iconKey: 'laserFillings',
    badge: 'Laser Cured',
    category: 'Cosmetic',
    glowColor: 'rgba(201, 168, 76, 0.18)'
  },
  {
    id: 'dentures-full-partial',
    title: 'Full & Flexible Dentures',
    shortTitle: 'Dentures',
    desc: 'Latest flexible dentures, acrylic full/RPD dentures, and implant-supported fixed overdentures.',
    iconKey: 'dentures',
    badge: 'Flexible & Implant',
    category: 'General & Surgery',
    glowColor: 'rgba(214, 122, 65, 0.18)'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Whitening',
    shortTitle: 'Teeth Whitening',
    desc: '6–10 shades brighter teeth in 45 minutes using in-clinic LED bleaching systems and take-home kits.',
    iconKey: 'whitening',
    badge: 'Instant Results',
    category: 'Cosmetic',
    glowColor: 'rgba(16, 185, 129, 0.18)'
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Gum Care & Scaling',
    shortTitle: 'Laser Scaling',
    desc: 'Ultrasonic scaling for pyorrhoea, bleeding gums, bad breath treatment & deep periodontal maintenance.',
    iconKey: 'gumCare',
    badge: 'Ultrasonic',
    category: 'General & Surgery',
    glowColor: 'rgba(16, 185, 129, 0.18)'
  }
];

export default function TreatmentNavigator() {
  return (
    <section id="treatments" className="bento-treatments-section" aria-labelledby="treatments-heading">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header bento-header text-center">
          <div className="bento-pill-badge">
            <Sparkles size={13} className="sparkle-icon" aria-hidden="true" />
            <span>Clinical Facilities &amp; Specialities</span>
          </div>
          <h2 id="treatments-heading" className="bento-main-heading font-heading">
            Advanced <span className="copper-gradient-heading">Treatments</span>
          </h2>
          <p className="bento-header-desc">
            PGI-trained clinical excellence across orthodontic, implant, and aesthetic dental disciplines.
          </p>
        </div>

        {/* Bento Interactive Grid */}
        <motion.div layout className="bento-treatments-grid">
          <AnimatePresence mode="popLayout">
            {TREATMENTS.map((t, i) => {
              const IconComponent = VectorIcons[t.iconKey] || VectorIcons.braces;
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 28, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: (i % 2) * 0.08,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={`/treatments/${t.id}`}
                    className="innovative-treatment-card group"
                    aria-label={`Learn more about ${t.title}`}
                  >
                    {/* Animated Ambient Back-Glow */}
                    <div 
                      className="card-ambient-glow" 
                      style={{ background: `radial-gradient(circle at 80% 20%, ${t.glowColor} 0%, transparent 65%)` }} 
                    />

                    {/* Top Row: Icon + Mini Action Arrow */}
                    <div className="itc-top-bar">
                      <div className="itc-icon-badge">
                        <IconComponent />
                        <span className="itc-pulse-ring" />
                      </div>

                      <div className="itc-action-pill">
                        <span className="itc-action-text">EXPLORE</span>
                        <ArrowUpRight size={13} className="itc-arrow-icon" />
                      </div>
                    </div>

                    {/* Title and Short Description */}
                    <div className="itc-body">
                      <h3 className="itc-title">{t.shortTitle}</h3>
                      <p className="itc-desc">{t.desc}</p>
                    </div>

                    {/* Bottom Micro Indicator */}
                    <div className="itc-footer-strip">
                      <span className="itc-badge-pill">{t.badge}</span>
                      <span className="itc-glow-line" />
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
          background: linear-gradient(180deg, #090403 0%, #150905 100%);
          color: #FFFFFF;
          position: relative;
          padding: 2.75rem 0;
          overflow: hidden;
        }
        .bento-treatments-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 70vw;
          height: 350px;
          background: radial-gradient(ellipse, rgba(214, 122, 65, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .bento-header {
          margin-bottom: 1.25rem !important;
          text-align: center;
        }

        .bento-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.15);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.25rem 0.85rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }
        .sparkle-icon { color: #D67A41; }

        .bento-main-heading {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem) !important;
          font-weight: 900 !important;
          color: #FFFFFF !important;
          line-height: 1.2 !important;
          margin-bottom: 0.45rem !important;
          letter-spacing: -0.02em !important;
        }
        .copper-gradient-heading {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #EAA77C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .bento-header-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.78);
          max-width: 580px;
          margin: 0.25rem auto 0;
          line-height: 1.5;
        }

        /* FILTER BAR */
        .treatment-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .t-filter-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          color: rgba(255, 255, 255, 0.7);
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .t-filter-pill:hover {
          border-color: #D67A41;
          color: #FFFFFF;
          background: rgba(214, 122, 65, 0.12);
          transform: translateY(-1px);
        }
        .t-filter-pill--active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%) !important;
          color: #FFFFFF !important;
          border-color: #D67A41 !important;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.4);
        }

        /* INNOVATIVE DARK GRID */
        .bento-treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 0.9rem;
        }

        .innovative-treatment-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.15rem 1.1rem;
          height: 100%;
          min-height: 175px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.035);
          border-radius: 20px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .innovative-treatment-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(214, 122, 65, 0.55);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(214, 122, 65, 0.2);
        }

        /* AMBIENT GLOW */
        .card-ambient-glow {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .innovative-treatment-card:hover .card-ambient-glow {
          opacity: 1;
          transform: scale(1.15);
        }

        /* CARD TOP BAR */
        .itc-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          position: relative;
          z-index: 2;
        }

        .itc-icon-badge {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(214, 122, 65, 0.12);
          border: 1px solid rgba(214, 122, 65, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.25s ease;
        }
        .innovative-treatment-card:hover .itc-icon-badge {
          transform: scale(1.12) rotate(4deg);
          border-color: #F4B382;
          background: rgba(214, 122, 65, 0.22);
          box-shadow: 0 0 15px rgba(214, 122, 65, 0.4);
        }
        .nav-card-svg {
          width: 22px;
          height: 22px;
        }

        .itc-pulse-ring {
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          border: 1.5px solid rgba(244, 179, 130, 0.4);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .innovative-treatment-card:hover .itc-pulse-ring {
          opacity: 1;
          animation: ringPulse 1.8s infinite;
        }
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        /* ACTION PILL */
        .itc-action-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.05);
          color: #F4B382;
          padding: 0.22rem 0.55rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid rgba(214, 122, 65, 0.25);
          transition: all 0.25s ease;
        }
        .innovative-treatment-card:hover .itc-action-pill {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.4);
        }
        .itc-arrow-icon {
          transition: transform 0.25s ease;
        }
        .innovative-treatment-card:hover .itc-arrow-icon {
          transform: translate(2px, -2px);
        }

        /* CARD BODY */
        .itc-body {
          position: relative;
          z-index: 2;
          flex-grow: 1;
        }
        .itc-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 0.2rem;
          line-height: 1.25;
          transition: color 0.2s ease;
        }
        .innovative-treatment-card:hover .itc-title {
          color: #F4B382;
        }
        .itc-desc {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.45;
          margin: 0;
        }

        /* FOOTER STRIP */
        .itc-footer-strip {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.65rem;
          padding-top: 0.45rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
        }
        .itc-badge-pill {
          font-size: 0.64rem;
          font-weight: 700;
          color: #F4B382;
          background: rgba(214, 122, 65, 0.14);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          letter-spacing: 0.02em;
        }
        .itc-glow-line {
          position: absolute;
          bottom: -0.45rem;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #D67A41, transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .innovative-treatment-card:hover .itc-glow-line {
          opacity: 1;
        }

        /* MOBILE COMPACT 2-COLUMN LUXURY BENTO */
        @media (max-width: 768px) {
          .bento-treatments-section {
            padding: 1.25rem 0 1.75rem !important;
          }
          .bento-header {
            margin-bottom: 0.75rem !important;
          }
          .bento-main-heading {
            font-size: 1.45rem !important;
            margin-bottom: 0.25rem !important;
          }
          .bento-header-desc {
            font-size: 0.76rem !important;
            margin-bottom: 0.25rem !important;
          }
          .treatment-filter-bar {
            gap: 0.25rem !important;
            margin-bottom: 0.75rem !important;
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0 0.25rem 0.25rem;
            flex-wrap: nowrap;
            scrollbar-width: none;
          }
          .treatment-filter-bar::-webkit-scrollbar { display: none; }
          .t-filter-pill {
            padding: 0.25rem 0.6rem !important;
            font-size: 0.7rem !important;
          }
          .bento-treatments-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.45rem !important;
          }
          .innovative-treatment-card {
            padding: 0.65rem 0.6rem !important;
            min-height: auto !important;
            border-radius: 14px !important;
            transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease !important;
          }
          .innovative-treatment-card:active {
            transform: scale(0.97) !important;
            border-color: rgba(214, 122, 65, 0.6) !important;
            box-shadow: 0 0 16px rgba(214, 122, 65, 0.3) !important;
          }
          .itc-top-bar {
            margin-bottom: 0.35rem !important;
          }
          .itc-icon-badge {
            width: 26px !important;
            height: 26px !important;
            border-radius: 7px !important;
          }
          .nav-card-svg {
            width: 14px !important;
            height: 14px !important;
          }
          .itc-action-pill {
            padding: 0.12rem 0.38rem !important;
            font-size: 0.58rem !important;
          }
          .itc-title {
            font-size: 0.76rem !important;
            line-height: 1.2 !important;
            margin: 0 0 0.25rem !important;
          }
          .itc-desc {
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            font-size: 0.64rem !important;
            line-height: 1.3 !important;
            color: rgba(255, 255, 255, 0.6) !important;
            margin: 0 !important;
          }
          .itc-footer-strip {
            display: flex !important;
            margin-top: 0.45rem !important;
            padding-top: 0.35rem !important;
          }
          .itc-badge-pill {
            font-size: 0.56rem !important;
            padding: 0.1rem 0.4rem !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
          }
        }
      `}} />
    </section>
  );
}
