'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, 
  Award, Star, Zap, Clock, ChevronRight, Stethoscope, HeartPulse,
  Flame, Search, Compass, Calendar, Phone, Activity
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Specialities', icon: '🌟' },
  { id: 'Orthodontics', label: 'Orthodontics & Aligners', icon: '✨', count: 4 },
  { id: 'AirwayTMJ', label: 'Airway, TMJ & Sleep', icon: '🫁', count: 3 },
  { id: 'Implantology', label: 'Dental Implants', icon: '🛡️', count: 2 },
  { id: 'Cosmetic', label: 'Cosmetic & Smile Design', icon: '💎', count: 5 },
  { id: 'Restorative', label: 'Restorative Dentistry', icon: '👑', count: 2 },
  { id: 'General', label: 'General & Oral Surgery', icon: '⚡', count: 5 }
];

const TREATMENTS_DATA = [
  // ── ORTHODONTICS (FLAGSHIP / PREMIUM) ───────────────────────────
  {
    slug: 'dental-braces',
    title: 'Dental Braces',
    category: 'Orthodontics',
    isPremium: true,
    badge: 'PGI Gold Standard',
    tagline: 'Metal, Ceramic & Damon® Self-Ligating Systems',
    desc: 'Led personally by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh). World-class realignment for teeth crowding, severe spacing, and complex skeletal bite disorders.',
    duration: '12–24 Months',
    recovery: 'Minimal discomfort',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#D67A41',
    lightAccent: 'rgba(214, 122, 65, 0.15)',
    highlights: ['Damon® Low-Friction Brackets', 'Tooth-Coloured Ceramic Braces', 'Zero Delegated Trainees']
  },
  {
    slug: 'invisalign-clear-aligners',
    title: 'Invisalign® Clear Aligners',
    category: 'Orthodontics',
    isPremium: true,
    badge: 'Certified Invisalign® Provider',
    tagline: 'Virtually Invisible US SmartTrack® Trays',
    desc: 'Certified specialist aligner treatment. Straighten teeth with zero wires, zero food restrictions, and predictive 3D digital ClinCheck® smile simulations.',
    duration: '6–18 Months',
    recovery: 'Zero downtime',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#10B981',
    lightAccent: 'rgba(16, 185, 129, 0.15)',
    highlights: ['Authentic US SmartTrack® Material', 'Removable for Meals & Meetings', 'Predictive 3D Outcome Video']
  },
  {
    slug: 'skyalign-clear-aligners',
    title: 'SkyAlign™ Clear Aligners',
    category: 'Orthodontics',
    isPremium: true,
    badge: 'In-House 3D Lab Fast-Track',
    tagline: 'Direct Specialist 3D-Milled Precision Aligners',
    desc: 'Designed & 3D printed inside our clinic’s digital lab. Delivers identical clear aligner results at 50% lower cost with instant 48-hour delivery.',
    duration: '6–14 Months',
    recovery: 'Zero downtime',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#3B82F6',
    lightAccent: 'rgba(59, 130, 246, 0.15)',
    highlights: ['German Medical-Grade Polymer', 'In-House 48h Delivery', 'Direct Specialist Supervision']
  },
  {
    slug: 'lingual-braces',
    title: 'Lingual (Hidden) Braces',
    category: 'Orthodontics',
    isPremium: false,
    badge: '100% Concealed Behind Teeth',
    tagline: 'Custom Gold-Alloy Brackets on Inner Tooth Surface',
    desc: 'Completely invisible to the outside world. Custom crafted for working executives and actors desiring fixed orthodontic force with 0% visible brackets.',
    duration: '12–24 Months',
    recovery: '1–2 weeks adaptation',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#8B5CF6',
    lightAccent: 'rgba(139, 92, 246, 0.15)',
    highlights: ['Completely Hidden from View', 'Custom Cast Gold Alloy', 'Precision Continuous Force']
  },

  // ── IMPLANTOLOGY (FLAGSHIP / SURGICAL) ───────────────────────────
  {
    slug: 'dental-implants',
    title: 'Dental Implants (Korean Osstem®)',
    category: 'Implantology',
    isPremium: true,
    badge: 'Lifetime Warranty Card',
    tagline: 'Permanent Titanium Bio-Integrated Tooth Root',
    desc: 'Genuine Korean Osstem® implants placed with computer-guided keyhole surgery. Zero bone trauma, no grinding of adjacent healthy teeth.',
    duration: '3–6 Months',
    recovery: '2–4 days',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#D67A41',
    lightAccent: 'rgba(214, 122, 65, 0.15)',
    highlights: ['Korean Osstem® Medical Titanium', 'Computer Guided Keyhole Precision', 'Lifetime Global Warranty Card']
  },
  {
    slug: 'same-day-dental-implants',
    title: 'Same-Day Dental Implants',
    category: 'Implantology',
    isPremium: true,
    badge: 'Fixed Teeth in 24–48 Hours',
    tagline: 'Immediate Loading Protocol with Zero Waiting',
    desc: 'Extract failing teeth, place high-stability bio-implants, and fix permanent functional provisional crowns within 24 to 48 hours in a single visit.',
    duration: '24–48 Hours',
    recovery: '3–5 days soft diet',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#10B981',
    lightAccent: 'rgba(16, 185, 129, 0.15)',
    highlights: ['Immediate Loading Technology', 'Walk In Without Teeth, Walk Out Smiling', 'No Months of Toothless Gaps']
  },

  // ── COSMETIC & SMILE DESIGN ─────────────────────────────────────
  {
    slug: 'porcelain-veneers',
    title: 'Porcelain Veneers & E-Max Laminates',
    category: 'Cosmetic',
    isPremium: true,
    badge: 'Hollywood Smile Design',
    tagline: 'Ultra-Thin German Ceramic Shells for Flawless Smiles',
    desc: 'Permanent fix for severe tetracycline stains, fluorosis, chippings, and uneven enamel. Hand-sculpted translucency that matches natural teeth.',
    duration: '2–3 Visits (5–7 Days)',
    recovery: 'Immediate',
    doctor: 'Prof. Dr. Achla Yadav',
    color: '#F59E0B',
    lightAccent: 'rgba(245, 158, 11, 0.15)',
    highlights: ['Authentic Ivoclar E-Max German Ceramic', 'Stain-Resistant Glass Surface', '15–20 Year Clinical Durability']
  },
  {
    slug: 'smile-makeover',
    title: 'Digital Smile Makeover',
    category: 'Cosmetic',
    isPremium: true,
    badge: 'Complete Aesthetic Reconstruction',
    tagline: '3D Facial Biometrics & Golden Proportion Harmony',
    desc: 'Full-mouth cosmetic rehabilitation integrating veneers, laser gum contouring, and alignment to craft your dream symmetrical smile.',
    duration: '1–3 Weeks',
    recovery: 'Minimal to none',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#EC4899',
    lightAccent: 'rgba(236, 72, 153, 0.15)',
    highlights: ['3D Digital Smile Preview First', 'Facial Proportion Harmony', 'Multidisciplinary Senior Care']
  },
  {
    slug: 'teeth-whitening',
    title: 'Laser Teeth Whitening',
    category: 'Cosmetic',
    isPremium: false,
    badge: '6–8 Shades Brighter in 45 Min',
    tagline: 'In-Office Cold-Light LED Laser Bleaching',
    desc: 'Safely dissolves stubborn coffee, tea, and tobacco stains without stripping enamel. Clinically proven sensitivity-free whitening gel formula.',
    duration: '45–60 Minutes',
    recovery: 'Instant Results',
    doctor: 'Dental Specialist',
    color: '#10B981',
    lightAccent: 'rgba(16, 185, 129, 0.15)',
    highlights: ['Sensitivity-Free Cold LED', 'Immediate Dramatic Brightening', 'Complimentary Take-Home Tray']
  },
  {
    slug: 'composite-bonding',
    title: 'Composite Cosmetic Bonding',
    category: 'Cosmetic',
    isPremium: false,
    badge: 'Single-Sitting Smile Repair',
    tagline: 'Multi-Shade Nanohybrid Aesthetic Enamel Artistry',
    desc: 'Instant correction for chipped incisors, small gaps (diastema), and edge irregularities in just 30 minutes with zero tooth grinding.',
    duration: '30–45 Mins / Tooth',
    recovery: 'Zero Downtime',
    doctor: 'Cosmetic Specialist',
    color: '#3B82F6',
    lightAccent: 'rgba(59, 130, 246, 0.15)',
    highlights: ['No Injections or Enamel Cutting', 'Matched to 16 Natural Enamel Shades', 'Instant Same-Day Results']
  },
  {
    slug: 'cosmetic-laser-fillings',
    title: 'Laser Tooth-Coloured Fillings & Crystals',
    category: 'Cosmetic',
    isPremium: false,
    badge: '100% Mercury-Free Composite',
    tagline: 'Light-Cured Biomimetic Fillings & Swarowski Tooth Jewellery',
    desc: 'Restore cavities with durable, invisible resin that blends seamlessly with natural enamel. Also offering authentic Swarovski dental gems.',
    duration: '20–30 Minutes',
    recovery: 'Eat immediately',
    doctor: 'Dental Specialist',
    color: '#F59E0B',
    lightAccent: 'rgba(245, 158, 11, 0.15)',
    highlights: ['Zero Mercury Silver Amalgam', 'Micro-Mechanical Chemical Bond', 'Optional Swarovski Crystals']
  },

  // ── RESTORATIVE DENTISTRY ───────────────────────────────────────
  {
    slug: 'crowns-and-bridges',
    title: 'Metal-Free Zirconia Crowns & Bridges',
    category: 'Restorative',
    isPremium: false,
    badge: 'Up to 15-Year Warranty',
    tagline: 'CAD/CAM Milled German Multilayer Zirconia',
    desc: 'Replace missing teeth or cap root canal treated teeth with indestructible, biocompatible ceramic crowns. Zero black gumlines over time.',
    duration: '3–5 Days (2 Visits)',
    recovery: 'Immediate',
    doctor: 'Prosthodontist',
    color: '#D67A41',
    lightAccent: 'rgba(214, 122, 65, 0.15)',
    highlights: ['High Fracture Strength (1200+ MPa)', 'No Black Metal Margins at Gumline', 'Official Warranty Certificate']
  },
  {
    slug: 'dentures-full-partial',
    title: 'BPS Flexible & Implant-Supported Dentures',
    category: 'Restorative',
    isPremium: false,
    badge: 'Unbreakable Flexi-Dentures',
    tagline: 'Comfortable, Non-Slipping Full & Partial Dentures',
    desc: 'Lightweight Valplast® flexible dentures and snap-on implant overdentures that eliminate loose falling plates and restore strong chewing.',
    duration: '5–7 Days',
    recovery: '1–2 Weeks adaptation',
    doctor: 'Prosthodontist',
    color: '#8B5CF6',
    lightAccent: 'rgba(139, 92, 246, 0.15)',
    highlights: ['Unbreakable Flexible Acrylic', 'Implant Snap-On Stability', 'Natural Gum-Matched Tone']
  },

  // ── GENERAL & ORAL SURGERY ──────────────────────────────────────
  {
    slug: 'root-canal-treatment',
    title: 'Single-Sitting Painless Rotary RCT',
    category: 'General',
    isPremium: true,
    badge: 'Painless Rotary Endodontics',
    tagline: 'Save Severely Infected Teeth & Stop Toothache Instantly',
    desc: 'Computerized rotary apex locators and painless computerized anesthesia eliminate dental nerve pain in one sitting while saving your natural tooth.',
    duration: 'Single Sitting (45 Mins)',
    recovery: '1–2 days mild sensitivity',
    doctor: 'Endodontist',
    color: '#10B981',
    lightAccent: 'rgba(16, 185, 129, 0.15)',
    highlights: ['Computerized Apex Locator Precision', '98%+ Natural Tooth Preservation', 'Zero Chair Trauma']
  },
  {
    slug: 'wisdom-tooth-surgery',
    title: 'Impacted Wisdom Tooth Surgery',
    category: 'General',
    isPremium: false,
    badge: 'Specialist Oral Maxillofacial Care',
    tagline: 'Atraumatic Surgical Extraction with Zero Nerve Damage',
    desc: 'Expert surgical extraction for horizontal, angular, or deeply impacted 3rd molars. Digital panoramic evaluation ensures safe distance from mandibular nerve.',
    duration: '30–45 Mins',
    recovery: '3–4 days',
    doctor: 'Oral & Maxillofacial Surgeon',
    color: '#EC4899',
    lightAccent: 'rgba(236, 72, 153, 0.15)',
    highlights: ['Sectioning Technique Minimizes Bone Loss', 'Fast Post-Op Healing Protocols', 'Gentle Sedation Options']
  },
  {
    slug: 'teeth-cleaning-scaling',
    title: 'Ultrasonic Scaling & Deep Gum Care',
    category: 'General',
    isPremium: false,
    badge: 'Periodontal Care & Air Polishing',
    tagline: 'Painless Ultrasonic Plaque & Tartar Elimination',
    desc: 'Gentle ultrasonic sound vibrations remove stubborn calculus, stop bleeding gums, cure halitosis (bad breath), and protect tooth roots.',
    duration: '30–40 Minutes',
    recovery: 'Immediate',
    doctor: 'Periodontist',
    color: '#3B82F6',
    lightAccent: 'rgba(59, 130, 246, 0.15)',
    highlights: ['Ultrasonic Cavitron Precision', 'Air Polishing for Smooth Enamel', 'Halitosis & Pyorrhoea Reversal']
  },
  {
    slug: 'painless-extractions',
    title: 'Atraumatic Painless Extractions',
    category: 'General',
    isPremium: false,
    badge: 'Socket Preservation Technique',
    tagline: 'Gentle Removal of Irreparable Teeth with Bone Conservation',
    desc: 'Atraumatic periotome extraction that protects the surrounding alveolar jaw bone, setting up ideal conditions for future dental implants.',
    duration: '20–30 Minutes',
    recovery: '1–2 Days',
    doctor: 'Dental Surgeon',
    color: '#D67A41',
    lightAccent: 'rgba(214, 122, 65, 0.15)',
    highlights: ['Atraumatic Periotome Elevation', 'Preserves Jawbone for Future Implants', 'Comfortable Local Anesthesia']
  },

  // ── AIRWAY, SLEEP & TMJ SPECIALITY ──────────────────────────────
  {
    slug: 'airway-orthodontics',
    title: 'Airway Orthodontics & Craniofacial Expansion',
    category: 'AirwayTMJ',
    isPremium: true,
    badge: 'Airway & Nasal Breathing',
    tagline: 'Skeletal Maxillary Expansion & Nasal Airflow Enhancement',
    desc: 'Led by Prof. Dr. S. K. Yadav. Treats mouth breathing, narrow jaws, and airway restrictions through orthopedic palatal expansion and MARPE micro-implants.',
    duration: '6–18 Months',
    recovery: 'Zero downtime',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#10B981',
    lightAccent: 'rgba(16, 185, 129, 0.15)',
    highlights: ['Expands Nasal Floor Volume', 'MARPE Skeletal Expansion for Adults', 'Stops Habitual Mouth Breathing']
  },
  {
    slug: 'sleep-apnea-treatment',
    title: 'Sleep Apnea & Anti-Snoring Oral Appliances',
    category: 'AirwayTMJ',
    isPremium: true,
    badge: 'CPAP-Alternative Therapy',
    tagline: 'Custom Mandibular Advancement Devices (MAD)',
    desc: 'Eliminate loud snoring and obstructive sleep apnea events with comfortable, custom-milled oral appliances that gently keep your airway open all night.',
    duration: '1–2 Weeks Delivery',
    recovery: 'Immediate night-one snoring relief',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#3B82F6',
    lightAccent: 'rgba(59, 130, 246, 0.15)',
    highlights: ['Silent, Non-Electric & Compact', 'Eliminates CPAP Mask & Headgear Discomfort', 'Protects Blood Oxygen Saturation']
  },
  {
    slug: 'tmj-disorder-treatment',
    title: 'TMJ Specialist & Jaw Joint Care',
    category: 'AirwayTMJ',
    isPremium: true,
    badge: 'Non-Surgical Joint Therapy',
    tagline: 'Occlusal Splints, Neuromuscular Decompression & Bite Balancing',
    desc: 'Relieve painful jaw clicking, morning headaches, clenching (bruxism), and locked jaw with precision-milled Michigan splints and bite realignment.',
    duration: '4–12 Weeks',
    recovery: 'Relief within 5–10 days',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#D67A41',
    lightAccent: 'rgba(214, 122, 65, 0.15)',
    highlights: ['Precision Michigan Decompression Splint', 'Stops Destructive Teeth Grinding', 'Eliminates Chronic Facial & Ear Pain']
  },

  // ── LASER SURGERY ────────────────────────────────────────────────
  {
    slug: 'tongue-tie-release',
    title: 'Laser Tongue Tie Release (Frenectomy)',
    category: 'General',
    isPremium: false,
    badge: 'Zero-Blood Laser Release',
    tagline: 'Painless Infant, Child & Adult Ankyloglossia Release',
    desc: 'Free restricted tongue mobility in under 10 minutes with focused soft-tissue dental diode laser. Zero blood, zero stitches, and instant feeding restoration.',
    duration: '5–10 Minutes',
    recovery: 'Immediate eating & feeding',
    doctor: 'Prof. Dr. S. K. Yadav',
    color: '#EC4899',
    lightAccent: 'rgba(236, 72, 153, 0.15)',
    highlights: ['Zero Bleeding & No Stitches Needed', 'Immediate Latch Relief for Nursing Infants', 'Improves Speech & Palate Growth']
  }
];

export default function TreatmentsIndexClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTreatments = useMemo(() => {
    return TREATMENTS_DATA.filter((item) => {
      return selectedCategory === 'all' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="all-treatments-root">
      
      {/* ── BREADCRUMB & HEADER ─────────────────────────────────────────── */}
      <div className="treatments-header-wrap">
        <div className="container-tight">
          
          <div className="treatments-breadcrumbs">
            <Link href="/" className="tb-link">Home</Link>
            <ChevronRight size={12} className="tb-sep" />
            <span className="tb-active">All Treatments &amp; Specialities</span>
          </div>



          <h1 className="treatments-main-title font-heading">
            World-Class Clinical <span className="copper-gradient">Specialities</span>
          </h1>
          <p className="treatments-main-sub">
            From premier orthodontic braces and US clear aligners to Korean Osstem® dental implants and digital smile designs. 
            All treatments are planned and executed under senior medical authority in Rohtak, Haryana.
          </p>

          {/* Category Filter Pills (Scrollable horizontally on mobile) */}
          <div className="cat-filter-scroll-wrapper">
            <div className="cat-filter-track">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cat-pill ${isActive ? 'cat-pill--active' : ''}`}
                  >
                    <span className="cat-pill-icon">{cat.icon}</span>
                    <span className="cat-pill-label">{cat.label}</span>
                    {cat.count && <span className="cat-pill-count">{cat.count}</span>}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>


      {/* ── TREATMENTS GRID (HIGH-DENSITY INNOVATIVE CARDS) ──────────────── */}
      <div className="treatments-grid-section">
        <div className="container-tight">

          {filteredTreatments.length === 0 ? (
            <div className="no-results-box">
              <p>No treatments found in this category.</p>
              <button onClick={() => setSelectedCategory('all')} className="reset-btn">
                Show All Treatments
              </button>
            </div>
          ) : (
            <div className="treatments-cards-grid">
                {filteredTreatments.map((item, idx) => (
                  <article
                    key={item.slug}
                    className={`t-card t-card--fadein ${item.isPremium ? 't-card--premium' : ''}`}
                    style={{ animationDelay: `${idx * 0.04}s` }}
                  >
                    {/* Top Meta Strip */}
                    <div className="t-card-header">
                      <div className="t-card-badge-group">
                        <span className="t-category-tag">{item.category}</span>
                        {item.isPremium && (
                          <span className="t-premium-tag">
                            <Sparkles size={11} />
                            <span>Flagship Speciality</span>
                          </span>
                        )}
                      </div>
                      <span className="t-dr-badge">
                        <Stethoscope size={11} />
                        <span>{item.doctor}</span>
                      </span>
                    </div>

                    {/* Card Title & Tagline */}
                    <h2 className="t-card-title font-heading">
                      <Link href={`/treatments/${item.slug}`} className="t-title-link">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="t-card-tagline">{item.tagline}</p>

                    {/* Description */}
                    <p className="t-card-desc">{item.desc}</p>

                    {/* Key Highlights / Clinically Proven Points */}
                    <div className="t-highlights-list">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="t-highlight-item">
                          <CheckCircle2 size={12} className="t-check-icon" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Specs (Compact Pill Stats) */}
                    <div className="t-specs-row">
                      <div className="t-spec-item">
                        <Clock size={11} className="t-spec-icon" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="t-spec-item">
                        <Activity size={11} className="t-spec-icon" />
                        <span>{item.recovery}</span>
                      </div>
                    </div>

                    {/* Direct Action Footer */}
                    <div className="t-card-footer">
                      <Link href={`/treatments/${item.slug}`} className="t-card-link-btn">
                        <span>Explore Treatment Details</span>
                        <ArrowRight size={14} className="t-arrow-icon" />
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          )}

        </div>
      </div>


      {/* ── HIGH-DENSITY LUXURY STYLES ──────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .all-treatments-root {
          background: #FAF8F5;
          min-height: 100vh;
          padding-bottom: 3.5rem;
        }

        .container-tight {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* ── HEADER & SEARCH ───────────────────────────────── */
        .treatments-header-wrap {
          padding: 2rem 0 1.25rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%);
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
        }

        .treatments-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.76rem;
          color: #8A7063;
          margin-bottom: 1rem;
        }
        .tb-link { color: #8A7063; text-decoration: none; font-weight: 600; }
        .tb-link:hover { color: #D67A41; }
        .tb-sep { color: #C4A493; }
        .tb-active { color: #D67A41; font-weight: 750; }



        .treatments-main-title {
          font-size: clamp(1.85rem, 3.8vw, 3rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 0.5rem 0;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #B85D26 0%, #D67A41 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .treatments-main-sub {
          font-size: 0.94rem;
          line-height: 1.6;
          color: #554A44;
          max-width: 820px;
          margin: 0 0 1.25rem 0;
        }



        /* Filter Pills Track */
        .cat-filter-scroll-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin: 0 -1rem;
          padding: 0 1rem;
        }
        .cat-filter-scroll-wrapper::-webkit-scrollbar { display: none; }
        .cat-filter-track {
          display: flex;
          gap: 0.45rem;
          min-width: max-content;
          padding: 0.2rem 0;
        }
        .cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          padding: 0.42rem 0.85rem;
          border-radius: 99px;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.22);
          color: #4A3A33;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(17, 8, 5, 0.03);
        }
        .cat-pill:hover {
          border-color: #D67A41;
          color: #B85D26;
        }
        .cat-pill--active {
          background: linear-gradient(135deg, #180C07 0%, #29130A 100%);
          color: #FFFFFF !important;
          border-color: #D67A41 !important;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.25);
        }
        .cat-pill-icon { font-size: 0.9rem; line-height: 1; }
        .cat-pill-count {
          background: rgba(214, 122, 65, 0.18);
          color: #B85D26;
          padding: 0.1rem 0.4rem;
          border-radius: 99px;
          font-size: 0.68rem;
        }
        .cat-pill--active .cat-pill-count {
          background: rgba(255, 255, 255, 0.2);
          color: #F4B382;
        }


        /* ── GRID OF TREATMENTS (HIGH-DENSITY DARK/LIGHT CARDS) ─── */
        .treatments-grid-section {
          padding-top: 1.5rem;
        }
        .treatments-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @keyframes tCardFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .t-card--fadein {
          opacity: 0;
          animation: tCardFadeIn 0.28s ease forwards;
        }

        .t-card {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.28);
          border-radius: 16px;
          padding: 1.15rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 24px rgba(17, 8, 5, 0.12);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .t-card:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 122, 65, 0.6);
          box-shadow: 0 12px 30px rgba(17, 8, 5, 0.22);
        }
        .t-card--premium {
          border-color: rgba(214, 122, 65, 0.45);
          background: linear-gradient(150deg, #1D0E09 0%, #2B140B 100%);
        }
        .t-card--premium::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 90px; height: 90px;
          background: radial-gradient(circle at top right, rgba(214, 122, 65, 0.2) 0%, transparent 70%);
          border-radius: 0 16px 0 0;
          pointer-events: none;
        }

        .t-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
        }
        .t-card-badge-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .t-category-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #F4B382;
          background: rgba(214, 122, 65, 0.15);
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.12rem 0.5rem;
          border-radius: 99px;
        }
        .t-premium-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.62rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #FBBF24;
          background: rgba(251, 191, 36, 0.12);
          border: 1px solid rgba(251, 191, 36, 0.3);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
        }
        .t-dr-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.65);
          white-space: nowrap;
        }

        .t-card-title {
          font-size: 1.05rem;
          font-weight: 850;
          margin: 0 0 0.2rem 0;
          line-height: 1.25;
        }
        .t-title-link {
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .t-card:hover .t-title-link {
          color: #F4B382;
        }
        .t-card-tagline {
          font-size: 0.74rem;
          color: #D67A41;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 0.45rem 0;
        }
        .t-card-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.5;
          margin: 0 0 0.75rem 0;
          flex-grow: 1;
        }

        /* Highlights bullet list */
        .t-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.75rem;
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .t-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }
        .t-check-icon {
          color: #34D399;
          flex-shrink: 0;
        }

        /* Quick specs */
        .t-specs-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .t-spec-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          font-size: 0.66rem;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 600;
          white-space: nowrap;
        }
        .t-spec-icon { color: #F4B382; }

        /* Card footer with direct link */
        .t-card-footer {
          margin-top: auto;
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .t-card-link-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: rgba(214, 122, 65, 0.12);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #F4B382;
          font-size: 0.78rem;
          font-weight: 750;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .t-card:hover .t-card-link-btn {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          border-color: #D67A41;
        }
        .t-arrow-icon {
          transition: transform 0.2s ease;
        }
        .t-card:hover .t-arrow-icon {
          transform: translateX(3px);
        }

        .no-results-box {
          text-align: center;
          padding: 3rem 1rem;
          color: #554A44;
        }
        .reset-btn {
          margin-top: 0.75rem;
          background: #180C07;
          color: #FFFFFF;
          border: 1px solid #D67A41;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }


        /* ── RESPONSIVE COMPACTION (LEAST SPACE ON MOBILE) ──────── */
        @media (max-width: 1100px) {
          .treatments-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .treatments-breadcrumbs {
            display: none !important;
          }
          .treatments-header-wrap {
            padding: 1rem 0 0.75rem;
          }
          .treatments-main-title {
            font-size: 1.55rem;
            margin-bottom: 0.3rem;
          }
          .treatments-main-sub {
            font-size: 0.82rem;
            line-height: 1.45;
            margin-bottom: 0.85rem;
          }
          
          /* Single Column on mobile with tight vertical footprint */
          .treatments-cards-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .t-card {
            padding: 0.85rem 0.95rem;
            border-radius: 13px;
          }
          .t-card-title {
            font-size: 0.98rem;
          }
          .t-card-tagline {
            font-size: 0.7rem;
            margin-bottom: 0.35rem;
          }
          .t-card-desc {
            font-size: 0.76rem;
            line-height: 1.45;
            margin-bottom: 0.55rem;
          }
          .t-highlights-list {
            margin-bottom: 0.55rem;
            padding-top: 0.45rem;
            gap: 0.2rem;
          }
          .t-highlight-item {
            font-size: 0.68rem;
          }
          .t-specs-row {
            margin-bottom: 0.55rem;
          }
          .t-spec-item {
            font-size: 0.62rem;
            padding: 0.15rem 0.45rem;
          }
          .all-treatments-root {
            padding-bottom: 6.5rem; /* Ensure last card and buttons are never blocked by mobile fixed bottom bar */
          }
          .t-card-link-btn {
            padding: 0.55rem 0.85rem;
            font-size: 0.78rem;
          }
        }
      `}} />
    </div>
  );
}
