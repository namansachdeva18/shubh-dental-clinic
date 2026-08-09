'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkle } from 'lucide-react';

const CATEGORIES = ['All', 'Orthodontics', 'Implants', 'Cosmetic', 'General & Surgery'];

// Custom Bespoke Vector SVG Illustrations
const VectorIcons = {
  // Braces / Orthodontics
  braces: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M4 11h16" />
      <rect x="6.5" y="9.5" width="2" height="3" />
      <rect x="11" y="9.5" width="2" height="3" />
      <rect x="15.5" y="9.5" width="2" height="3" />
    </svg>
  ),

  // Clear Aligners (Using the smile design arch/tray concept)
  aligners: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" strokeOpacity="0.4" />
      <path d="M3 9c0-3 2.5-5 5-5 1.5 0 2.5 1 4 2 1.5-1 2.5-2 4-2 2.5 0 5 2 5 5 0 3-2.5 5-4 7.5" />
      <path d="M5 2h2M17 2h2" />
    </svg>
  ),

  // Dental Implants (Tooth crown on a threaded post)
  implants: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 2 1 3 2.5 4.5h11C19 12 20 11 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M10 13.5v7c0 1 1 2 2 2s2-1 2-2v-7" />
      <path d="M9 16h6M9 19h6" />
    </svg>
  ),

  // Same Day Implants (Implant with a lightning bold/spark)
  sameday: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 2 1 3 2.5 4.5h11C19 12 20 11 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M10 13.5v7c0 1 1 2 2 2s2-1 2-2v-7" />
      <path d="M9 16h6" />
      <path d="M19 2l-3 5h4l-4 6" strokeWidth="1.5" stroke="currentColor" />
    </svg>
  ),

  // Porcelain Veneers (Tooth with a frontal layer being applied)
  veneers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 7.5C12.5 6.5 11 5 9 5 6 5 5 7 5 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C18.5 14 21 12 21 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5" strokeDasharray="2 3" />
      <path d="M2 10h3M2 16h3" />
    </svg>
  ),

  // Digital Smile Makeover (Hand cupping a tooth with stars)
  smileDesign: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6.5C11.5 5.5 10 4 8 4 5 4 4 6 4 8c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 13 20 11 20 8c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M3 18c2 2 5 3 9 3 4 0 7-1 9-3" />
      <path d="M4 16l-2 2M20 16l2 2" />
      <path d="M17 3l1-1M19 6l1-1" />
    </svg>
  ),

  // Crowns & Bridges (Tooth base + crown top being placed)
  crowns: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" strokeOpacity="0.4" />
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 1 .5 2 1.5 3h13c1-1 1.5-2 1.5-3 0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M6 2l1.5 3M11 1v4" />
    </svg>
  ),

  // Root Canal Treatment (Tooth + endo file inside root)
  rct: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M8 12c1 3 0 7-1 9" />
      <path d="M16 12c-1 3 0 7 1 9" />
      <path d="M12 2v10M10 4h4" />
    </svg>
  ),

  // Wisdom Tooth Surgery (Tooth angled + surgical mark)
  wisdom: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" transform="rotate(25 12 12)" />
      <path d="M3 20l4-4M21 4l-4 4" />
    </svg>
  ),

  // Painless Extractions (Tooth lifted with forceps)
  extractions: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" transform="translate(0, -2)" />
      <path d="M7 2l2 5M17 2l-2 5" />
      <path d="M10 21l2 2 2-2" />
    </svg>
  ),

  // Laser Fillings & Jewellery (Tooth + laser beam/sparkle)
  laserFillings: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M14 8l5-5M19 3h3v3" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
    </svg>
  ),

  // Full & Flexible Dentures (Arch of teeth)
  dentures: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 14c0-4 4-8 8-8s8 4 8 8" />
      <path d="M4 14v1c0 3 3 5 8 5s8-2 8-5v-1" />
      <path d="M8 14v6M12 14v6M16 14v6" />
      <path d="M4 16h16" />
    </svg>
  ),

  // Teeth Whitening (Toothbrush + sparkles)
  whitening: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M3 4h14c1 0 1.5.5 1.5 1.5S18 7 17 7H3V4z" />
      <path d="M10 7v3M13 7v3" />
      <path d="M18 10l1-1M19 14h2M18 17l2 2" />
    </svg>
  ),

  // Gum Care & Scaling (Tooth with gum line and scaler)
  gumCare: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
    desc: <>Advanced bracket systems (Metal, Ceramic &amp; Lingual) for <span className="text-highlight">precise bite &amp; alignment correction</span> — fixing crowding, gaps, and misaligned teeth.</>,
    iconKey: 'braces',
    badge: 'Prof. Dr. S. K. Yadav',
    category: 'Orthodontics'
  },
  {
    id: 'invisalign-clear-aligners',
    title: 'SkyAlign™ & Invisalign®',
    shortTitle: 'Clear Aligners',
    desc: <><span className="text-highlight">Discreet, removable custom clear aligners</span> crafted in-house &amp; Invisalign certified for a <span className="text-highlight">wire-free smile</span>.</>,
    iconKey: 'aligners',
    badge: 'In-House SkyAlign™',
    category: 'Orthodontics'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortTitle: 'Implants & Fixed Teeth',
    desc: <><span className="text-highlight">Permanent titanium replacements</span> for missing teeth, fused with jawbone for <span className="text-highlight">natural strength &amp; function</span>.</>,
    iconKey: 'implants',
    badge: 'PGI Trained Experts',
    category: 'Implants'
  },
  {
    id: 'same-day-implants',
    title: 'Same Day Implants',
    shortTitle: 'Same Day Implants',
    desc: <>Advanced immediate loading implantology — walk out with a <span className="text-highlight">complete brand new smile in just one day</span>.</>,
    iconKey: 'sameday',
    badge: 'Immediate Loading',
    category: 'Implants'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    shortTitle: 'Veneers & Laminates',
    desc: <><span className="text-highlight">Ultra-thin custom German porcelain shells</span> to correct chips, gaps, and severe discolouration permanently.</>,
    iconKey: 'veneers',
    badge: 'Hollywood Smile',
    category: 'Cosmetic'
  },
  {
    id: 'smile-makeover',
    title: 'Digital Smile Makeover',
    shortTitle: 'Smile Design',
    desc: <><span className="text-highlight">Complete aesthetic transformation</span> combining 3D digital smile design, veneers, and alignment planning.</>,
    iconKey: 'smileDesign',
    badge: '3D Digital Design',
    category: 'Cosmetic'
  },
  {
    id: 'crowns-and-bridges',
    title: 'Crowns & Bridges',
    shortTitle: 'Crowns & Bridges',
    desc: <><span className="text-highlight">Metal-free Zirconia</span> (with 10-year warranty card), German ceramic &amp; metal crowns for <span className="text-highlight">durable restoration</span>.</>,
    iconKey: 'crowns',
    badge: '10-Yr Warranty Zirconia',
    category: 'General & Surgery'
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (RCT)',
    shortTitle: 'Painless Root Canal (RCT)',
    desc: <>Modern, <span className="text-highlight">virtually painless rotary root canal therapy</span> to save infected natural teeth without extraction.</>,
    iconKey: 'rct',
    badge: 'Rotary Endodontics',
    category: 'General & Surgery'
  },
  {
    id: 'wisdom-tooth-surgery',
    title: '3rd Molar Wisdom Surgery',
    shortTitle: 'Wisdom Tooth Surgery',
    desc: <>Specialized minor oral surgery for <span className="text-highlight">impacted 3rd molars and wisdom tooth pain relief</span>.</>,
    iconKey: 'wisdom',
    badge: 'Painless Oral Surgery',
    category: 'General & Surgery'
  },
  {
    id: 'painless-extractions',
    title: 'Painless Extractions',
    shortTitle: 'Painless Extractions',
    desc: <><span className="text-highlight">Gentle, atraumatic tooth extractions</span> performed under local anaesthesia with minimal downtime.</>,
    iconKey: 'extractions',
    badge: 'Atraumatic Care',
    category: 'General & Surgery'
  },
  {
    id: 'cosmetic-laser-fillings',
    title: 'Cosmetic Laser Fillings',
    shortTitle: 'Laser Fillings & Jewellery',
    desc: <>Tooth-coloured <span className="text-highlight">light-cured composite resin fillings</span> &amp; aesthetic dental jewellery — invisible, long-lasting restoration.</>,
    iconKey: 'laserFillings',
    badge: 'Light-Cured Laser',
    category: 'Cosmetic'
  },
  {
    id: 'dentures-full-partial',
    title: 'Full & Flexible Dentures',
    shortTitle: 'Full & Flexible Dentures',
    desc: <>Latest flexible dentures, acrylic full/RPD dentures, and <span className="text-highlight">implant-supported fixed overdentures</span>.</>,
    iconKey: 'dentures',
    badge: 'Flexible & Implant Fit',
    category: 'General & Surgery'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Whitening',
    shortTitle: 'Professional Teeth Whitening',
    desc: '6–10 shades brighter teeth in 45 minutes using in-clinic LED bleaching systems and take-home kits.',
    iconKey: 'whitening',
    badge: 'Instant Results',
    category: 'Cosmetic'
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Gum Care & Scaling',
    shortTitle: 'Laser Scaling & Gum Care',
    desc: 'Ultrasonic scaling for pyorrhoea, bleeding gums, bad breath treatment & deep periodontal maintenance.',
    iconKey: 'gumCare',
    badge: 'Ultrasonic Care',
    category: 'General & Surgery'
  }
];

export default function TreatmentNavigator() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTreatments = activeCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section className="section bento-treatments-section" aria-labelledby="treatments-heading">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header bento-header">
          <div className="section-badge badge-gold">
            <Sparkle size={13} style={{ marginRight: 4 }} />
            Clinical Facilities &amp; Specialities
          </div>
          <h2 id="treatments-heading">
            Advanced <span className="text-gradient-copper">Treatments</span>
          </h2>
          <p className="bento-header-desc">Comprehensive dental facilities delivered by PGI-trained specialists.</p>
        </div>

        {/* Innovative Treatment Cards Bento Grid */}
        <motion.div layout className="bento-treatments-grid">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((t, i) => {
              const IconComponent = VectorIcons[t.iconKey] || VectorIcons.braces;
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.7, y: 60, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -60, rotate: 8 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    mass: 0.8,
                    delay: i * 0.08
                  }}
                >
                  <Link
                    href={`/treatments/${t.id}`}
                    className="bento-treatment-card"
                    aria-label={`Learn more about ${t.title}`}
                  >
                    {/* Top Ambient Copper Accent Gradient Line */}
                    <div className="card-top-accent" />

                    {/* Corner Background Vector Watermark */}
                    <div className="corner-vector-watermark">
                      <IconComponent className="watermark-svg" />
                    </div>

                    {/* Top Row: Beautiful Vector Icon + Subtle Pill */}
                    <div className="treatment-card-top">
                      <div className="treatment-vector-icon">
                        <IconComponent className="vector-svg" />
                      </div>
                      <span className="treatment-pill-badge">{t.badge}</span>
                    </div>

                    {/* Content Body */}
                    <div className="card-content-body">
                      <h3 className="treatment-title">{t.shortTitle}</h3>
                      <p className="treatment-desc">{t.desc}</p>
                    </div>

                    {/* CTA Link matching reference */}
                    <div className="treatment-cta-row">
                      <span className="cta-label">EXPLORE TREATMENT</span>
                      <ChevronRight size={15} strokeWidth={2.5} className="cta-chevron" />
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
          background: #FAF9F6;
          position: relative;
          overflow: hidden;
          padding: 5rem 0;
        }
        .bento-treatments-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 300px;
          background: linear-gradient(to bottom, #FFFFFF, transparent);
          z-index: 0;
        }

        .bento-header {
          margin-bottom: 2rem !important;
        }
        .bento-header-desc {
          max-width: 600px;
          margin: 0 auto;
        }

        /* --- FILTER BAR --- */
        .treatment-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 2;
        }
        .filter-pill {
          position: relative;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: color 0.3s ease, border-color 0.3s ease;
          outline: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }
        .filter-pill:hover {
          color: var(--text-primary);
          border-color: rgba(214, 122, 65, 0.3);
        }
        .filter-pill-active {
          color: #ffffff !important;
          border-color: transparent !important;
          box-shadow: 0 8px 20px rgba(214, 122, 65, 0.25) !important;
        }
        .filter-pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 99px;
          background: linear-gradient(135deg, var(--text-primary), #382417);
          z-index: -1;
        }

        /* --- BENTO GRID --- */
        .bento-treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* --- INNOVATIVE CARD DESIGN --- */
        .bento-treatment-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.8rem 1.6rem 1.6rem;
          height: 100%;
          min-height: 260px;
          text-decoration: none;
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid rgba(0, 120, 183, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                      box-shadow 0.4s ease,
                      border-color 0.4s ease;
        }

        /* COOL SHINE HOVER EFFECT */
        .bento-treatment-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: 0s;
          z-index: 10;
          pointer-events: none;
        }
        .bento-treatment-card:hover::after {
          left: 200%;
          transition: 0.7s ease-in-out;
        }

        .card-top-accent {
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #0078B7, #4DB8FF);
          opacity: 0.8;
          transition: height 0.3s ease, opacity 0.3s ease;
        }
        .bento-treatment-card:hover .card-top-accent {
          height: 6px;
          opacity: 1;
        }

        .bento-treatment-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 120, 183, 0.15), 0 10px 20px rgba(0, 120, 183, 0.1);
          border-color: rgba(0, 120, 183, 0.3);
        }

        .corner-vector-watermark {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 140px;
          height: 140px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.05;
          color: #0078B7;
          transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .watermark-svg {
          width: 100%;
          height: 100%;
        }
        .bento-treatment-card:hover .corner-vector-watermark {
          opacity: 0.12;
          transform: scale(1.3) rotate(15deg);
        }

        /* TOP ROW */
        .treatment-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 2;
          margin-bottom: 1.2rem;
        }

        /* PILL BADGE */
        .treatment-pill-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: #C96E32;
          background: rgba(214, 122, 65, 0.08);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          letter-spacing: 0.01em;
        }

        /* BEAUTIFUL PLAIN VECTOR ICON */
        .treatment-vector-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #0078B7; /* Elegant blue color matching screenshot */
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease;
        }
        .vector-svg {
          width: 40px;
          height: 40px;
          stroke-width: 1.25px; /* Thinner, precise stroke */
        }
        .bento-treatment-card:hover .treatment-vector-icon {
          transform: scale(1.2) rotate(-8deg) translateY(-4px);
          color: #005a8c;
        }

        /* CONTENT BODY */
        .card-content-body {
          position: relative;
          z-index: 2;
          flex-grow: 1;
        }
        .treatment-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }
        .treatment-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA ROW */
        .treatment-cta-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 1.4rem;
        }
        .cta-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #D67A41;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .cta-chevron {
          color: #D67A41;
          transition: transform 0.3s ease;
        }
        .bento-treatment-card:hover .cta-chevron {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .bento-treatments-section {
            padding: 2.5rem 0 3.5rem;
          }
          .bento-header {
            margin-bottom: 1.25rem !important;
          }
          .treatment-filter-bar {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.4rem;
            margin-bottom: 1.5rem;
            overflow-x: visible;
          }
          .filter-pill {
            font-size: 0.8rem;
            padding: 0.4rem 0.85rem;
          }
          .bento-treatments-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            overflow-x: visible;
            padding-bottom: 0;
            margin-right: 0;
            padding-right: 0;
          }
          .bento-treatment-card {
            width: 100%;
            min-height: auto;
            padding: 1.35rem 1.25rem 1.25rem;
            border-radius: 20px;
          }
          .treatment-title {
            font-size: 1.2rem;
            margin-bottom: 0.4rem;
          }
          .treatment-desc {
            font-size: 0.86rem;
            line-height: 1.5;
          }
          .treatment-pill-badge {
            font-size: 0.7rem;
            padding: 0.3rem 0.75rem;
          }
          .treatment-vector-icon {
            width: 42px;
            height: 42px;
          }
          .vector-svg { width: 34px; height: 34px; }
          .treatment-cta-row { margin-top: 1.1rem; }
        }
      `}} />
    </section>
  );
}
