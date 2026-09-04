'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, MapPin, ShieldCheck, Clock, Award, 
  ArrowRight, Video, Phone, HeartHandshake, Check, ChevronRight, Compass,
  Car, HelpCircle, ChevronDown, CheckCircle2, Zap, ArrowUpRight
} from 'lucide-react';

const COUNTRIES = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇪', name: 'UAE & Gulf' },
  { flag: '🇪🇺', name: 'Europe' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇸🇬', name: 'Singapore' },
];

const STATS = [
  { val: '18+', label: 'Countries Represented', icon: '🌍' },
  { val: '70–80%', label: 'Savings vs US/UK/UAE', icon: '💎' },
  { val: '24–72h', label: 'Fast-Track Completion', icon: '⚡' },
  { val: '75 Min', label: 'Expressway from IGI T3', icon: '✈️' }
];

const TREATMENTS = [
  {
    id: 'implants',
    title: 'Same-Day Dental Implants',
    time: '24–72 Hours',
    tag: 'Popular NRI Choice',
    icon: '🛡️',
    priceIndia: '₹35,000 – ₹55,000 (~$420)',
    priceAbroad: '$3,500 – $5,000',
    desc: '3D CBCT guided extraction and immediate implant placement with aesthetic temporary crown so you never go toothless.',
    highlights: ['Swiss Straumann® & Nobel Biocare®', 'Lifetime Warranty Card', 'Computer-guided keyhole surgery'],
    link: '/treatments/same-day-dental-implants'
  },
  {
    id: 'aligners',
    title: 'Invisalign® & SkyAlign™ Clear Aligners',
    time: '1–2 Visits',
    tag: 'Wire-Free',
    icon: '✨',
    priceIndia: '₹65,000 – ₹1,80,000 (~$780)',
    priceAbroad: '$5,000 – $8,000',
    desc: 'Digital 3D iTero® intraoral scan on Day 1. Complete series manufactured and delivered to take back to your home country.',
    highlights: ['Virtual progress tracking via App', 'Prof. Dr. S.K. Yadav (WFO USA Fellow)', 'No emergency visits needed'],
    link: '/treatments/invisalign-clear-aligners'
  },
  {
    id: 'makeover',
    title: 'Full Smile Makeover & Veneers',
    time: '3–5 Days',
    tag: 'Cosmetic Specialist',
    icon: '👑',
    priceIndia: '₹8,000 – ₹16,000 / tooth',
    priceAbroad: '$1,200 – $2,500 / tooth',
    desc: 'Digital Smile Design (DSD) with ultra-thin German zirconia and E-max porcelain veneers for camera-ready perfection.',
    highlights: ['Minimal tooth reduction', 'Shade matching to natural enamel', '10-Year lab aesthetic warranty'],
    link: '/treatments/digital-smile-makeover'
  },
  {
    id: 'full-mouth',
    title: 'Full Arch Fixed Teeth (All-on-4/6)',
    time: '3–4 Days',
    tag: 'Permanent Solution',
    icon: '💎',
    priceIndia: '₹2,50,000 – ₹4,50,000 (~$3,000)',
    priceAbroad: '$25,000 – $40,000',
    desc: 'Complete full mouth rehabilitation for missing or failing teeth with titanium-reinforced non-removable fixed bridge.',
    highlights: ['Immediate bite restoration', 'Eat normal food within 72 hrs', 'CBCT computer-guided precision'],
    link: '/treatments/dental-implants'
  }
];

const JOURNEY_STEPS = [
  {
    step: '01',
    phase: 'Before You Fly',
    title: 'Virtual WhatsApp / Zoom Consult',
    desc: 'Share your photos or OPG X-ray. Receive a transparent treatment roadmap, digital simulation, and exact cost quote before booking flight tickets.',
    icon: Video,
    accent: '#F4B382'
  },
  {
    step: '02',
    phase: 'Day 1: Arrival',
    title: 'Expressway Arrival & 3D Scanning',
    desc: 'Seamless 75-80 min expressway drive directly from Delhi IGI Airport (T3). High-precision intraoral 3D scan & immediate clinical mock-up.',
    icon: Plane,
    accent: '#60A5FA'
  },
  {
    step: '03',
    phase: 'Days 2–4: Treatment',
    title: 'Dedicated Senior Specialist Care',
    desc: 'Extended priority sessions with Prof. Dr. S. K. Yadav. Zero waiting delay, in-house digital lab delivery, and painless protocols.',
    icon: Award,
    accent: '#34D399'
  },
  {
    step: '04',
    phase: 'Post-Treatment',
    title: 'Global Tele-Aftercare & Warranty',
    desc: 'Fly home with official international manufacturer warranty passports, high-res digital records, and dedicated WhatsApp follow-ups.',
    icon: HeartHandshake,
    accent: '#C084FC'
  }
];

const COMPARISONS = [
  {
    feature: 'Specialist Seniority',
    rohtak: 'Direct treatment by Prof. Dr. S.K. Yadav (MDS Ortho, Ex-PGI, Fellow WFO USA)',
    metro: 'Often assigned to junior associates or changing duty doctors'
  },
  {
    feature: 'Airport Connectivity',
    rohtak: 'Direct 85 KM via signal-free NH9 expressway (75-85 mins straight run from T3)',
    metro: 'Heavy inner-city traffic jams in South/Central Delhi (often 60–90+ mins)'
  },
  {
    feature: 'Pricing & Overheads',
    rohtak: '70–80% lower than US/UK; genuine material savings without inflated metro rent',
    metro: 'Metro corporate markup (2x to 3x higher price for identical Swiss materials)'
  },
  {
    feature: 'Scheduling Flexibility',
    rohtak: 'Extended priority chairs tailored strictly to your return flight dates',
    metro: 'Strict 30-min corporate slots; multi-week gaps between stages'
  }
];

const AIRPORT_LOGISTICS = [
  {
    icon: Car,
    title: 'Direct NH9 Expressway',
    sub: 'Signal-Free Corridor',
    desc: 'From Delhi IGI Airport (T3), merge directly onto NH9 expressway. Bypasses inner Delhi congestion entirely.'
  },
  {
    icon: Clock,
    title: '75–85 Minute Drive',
    sub: 'Smooth Highway Journey',
    desc: 'Direct highway drive brings you straight to our clinic doorstep at Delhi Bypass Chowk, Rohtak.'
  },
  {
    icon: MapPin,
    title: 'Hotel & Concierge Support',
    sub: 'Walking / 5-Min Radius',
    desc: 'Assistance with verified premier business hotels, airport pick-up taxi arrangement, and dietary requests.'
  }
];

const FAQS = [
  {
    q: 'How many days do I need to stay in India for Dental Implants or Veneers?',
    a: 'For Same-Day Dental Implants with temporary fixed aesthetic teeth, 2 to 3 days is ideal. For complete cosmetic smile makeovers (German Zirconia/E-max veneers), 3 to 5 days is sufficient. We pre-plan your entire schedule so your chair sessions are locked before you take off.'
  },
  {
    q: 'Are the materials and dental implants genuine international brands?',
    a: 'Absolutely. We use 100% genuine FDA and CE approved materials including Swiss Straumann®, Nobel Biocare®, US Invisalign®, and German Katana/Ivoclar Zirconia. Every patient receives official serialized warranty passports valid worldwide.'
  },
  {
    q: 'How do I start before booking my flight to India?',
    a: 'Simply connect with us on WhatsApp (+91 86850 48414) or schedule a Virtual Video Consultation. Share any previous dental X-rays (OPG) or smartphone photos of your smile. Prof. Dr. S.K. Yadav personally reviews your case and provides an exact plan and timeline.'
  },
  {
    q: 'What happens when I return to the USA, UK, Canada, or Australia?',
    a: 'All our treatment protocols comply with international dental standards. You receive full digital 3D scans, radiographs, component specifications, and warranty documents. Additionally, we conduct tele-dentistry check-ins to monitor your healing.'
  }
];

export default function DentalTourismClient() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hello Shubh Dental Clinic! I am an NRI / International patient and would like to schedule a Virtual Video Consultation.'
  );

  return (
    <main className="dt-cinema-root">
      {/* Dynamic Warm Ambient Backlight Glows */}
      <div className="dt-ambient-glow dt-ambient-glow-1" aria-hidden="true" />
      <div className="dt-ambient-glow dt-ambient-glow-2" aria-hidden="true" />

      <div className="dt-stage-wrap">

        {/* ── 01. FULL-BLEED HERO EXPERIENCE ──────────────────────────────── */}
        <section className="dt-hero-immersive">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="dt-hero-content"
          >
            {/* Holographic Glowing Pill Badges */}
            <div className="dt-pills-row">
              <span className="dt-pill dt-pill--amber">
                <Plane size={12} className="dt-pulse-icon" />
                <span>Global Dental Tourism &amp; NRI Care</span>
              </span>
              <span className="dt-pill dt-pill--emerald">
                <ShieldCheck size={12} className="dt-pulse-icon" />
                <span>PGI Specialists · US &amp; Swiss Certified</span>
              </span>
            </div>

            {/* Typography */}
            <h1 className="dt-main-heading font-heading">
              World-Class Dentistry, <br className="dt-break-desktop" />
              <span className="dt-gold-radiance">Closer to Home.</span>
            </h1>

            <p className="dt-main-desc">
              For our NRI &amp; global patients: Experience <strong>PGI-tier surgical precision</strong>, 
              <strong> genuine FDA-approved Swiss/US materials</strong>, and <strong>fast-track priority scheduling</strong> 
              — saving <strong>70% to 80%</strong> compared to US, UK, and UAE costs.
            </p>

            {/* Animated Country Marquee / Grid */}
            <div className="dt-origin-tracker">
              <span className="dt-origin-label">Regular Patients From:</span>
              <div className="dt-flags-cluster">
                {COUNTRIES.map((c, idx) => (
                  <motion.div 
                    key={idx} 
                    className="dt-flag-chip"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    <span className="dt-chip-flag">{c.flag}</span>
                    <span className="dt-chip-name">{c.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metric Tiles (High-Density Dark Cards on Light BG) */}
            <div className="dt-stats-floating-row">
              {STATS.map((s, idx) => (
                <motion.div 
                  key={idx} 
                  className="dt-stat-glass-card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="dt-stat-glyph">{s.icon}</span>
                  <div className="dt-stat-meta">
                    <strong className="dt-stat-figure">{s.val}</strong>
                    <span className="dt-stat-caption">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* ── 02. FAST-TRACK TREATMENTS (COMPACT DARK LUXE TILES) ──────────── */}
        <section className="dt-flow-section" id="treatments">
          <div className="dt-flow-header">
            <div className="dt-flow-tag">
              <Zap size={12} />
              <span>Travel-Optimized Care</span>
            </div>
            <h2 className="dt-flow-title font-heading">High-Speed Digital Procedures</h2>
            <p className="dt-flow-desc">
              Pre-planned with 3D intraoral digital telemetry to deliver pristine dental work within 24 to 72 hours of your flight.
            </p>
          </div>

          <div className="dt-treatments-glow-grid">
            {TREATMENTS.map((t, idx) => (
              <motion.div 
                key={t.id} 
                className="dt-treatment-glow-tile"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{ y: -3 }}
              >
                <div className="dt-tile-header-compact">
                  <div className="dt-tile-identity">
                    <span className="dt-tile-emoji">{t.icon}</span>
                    <h3 className="dt-tile-name font-heading">{t.title}</h3>
                  </div>
                  <div className="dt-tile-badges">
                    <span className="dt-tile-time">⏱️ {t.time}</span>
                    <span className="dt-tile-tag">{t.tag}</span>
                  </div>
                </div>

                <p className="dt-tile-summary">{t.desc}</p>

                {/* Price Arbitrage Hologram Box */}
                <div className="dt-price-hologram">
                  <div className="dt-price-col">
                    <span className="dt-price-lbl">Rohtak HQ India</span>
                    <strong className="dt-price-in">{t.priceIndia}</strong>
                  </div>
                  <div className="dt-price-separator"></div>
                  <div className="dt-price-col">
                    <span className="dt-price-lbl">US / UK Average</span>
                    <span className="dt-price-out">{t.priceAbroad}</span>
                  </div>
                </div>

                {/* Highlight Checkpoints */}
                <div className="dt-tile-features">
                  {t.highlights.map((item, i) => (
                    <div key={i} className="dt-tile-feat">
                      <CheckCircle2 size={12} className="dt-feat-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Interactive Actions */}
                <div className="dt-tile-footer">
                  <Link href={t.link} className="dt-tile-link">
                    <span>Clinical Details</span>
                    <ArrowUpRight size={13} />
                  </Link>
                  <a 
                    href={`https://wa.me/918685048414?text=${encodeURIComponent(`Hi Dr. S.K. Yadav, I am an overseas patient interested in ${t.title}. Please share details.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dt-tile-wa-btn"
                  >
                    <span>Inquire</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ── 03. 4-STAGE NRI PATIENT TIMELINE (COMPACT CONNECTIVE) ────────── */}
        <section className="dt-flow-section" id="journey">
          <div className="dt-flow-header">
            <div className="dt-flow-tag">
              <Compass size={12} />
              <span>Frictionless Timeline</span>
            </div>
            <h2 className="dt-flow-title font-heading">Your 4-Stage Travel Roadmap</h2>
            <p className="dt-flow-desc">
              From your first WhatsApp call at home to departing back overseas with a complete smile.
            </p>
          </div>

          <div className="dt-journey-connective-strip">
            {JOURNEY_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="dt-journey-phase-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="dt-phase-head">
                    <div className="dt-phase-title-wrap">
                      <span className="dt-phase-num" style={{ color: s.accent }}>{s.step}</span>
                      <h3 className="dt-phase-title font-heading">{s.title}</h3>
                    </div>
                    <span className="dt-phase-pill" style={{ borderColor: `${s.accent}40`, color: s.accent }}>
                      {s.phase}
                    </span>
                  </div>
                  <p className="dt-phase-desc">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* ── 04. WHY ROHTAK VS INNER DELHI METRO (DARK COMPACT TABLE) ────── */}
        <section className="dt-flow-section" id="why-rohtak">
          <div className="dt-flow-header">
            <div className="dt-flow-tag">
              <Award size={12} />
              <span>Strategic Medical Advantage</span>
            </div>
            <h2 className="dt-flow-title font-heading">Why Rohtak Over Congested Metro Clinics?</h2>
            <p className="dt-flow-desc">
              Rohtak is Haryana&apos;s medical hub (home to PGIMS). Get academic-tier specialized care directly by senior professors without metro traffic or inflated pricing.
            </p>
          </div>

          <div className="dt-glass-table-container">
            <table className="dt-glass-table">
              <thead>
                <tr>
                  <th className="dt-th-title">Care Factor</th>
                  <th className="dt-th-clinic">✨ Shubh Dental (Rohtak HQ)</th>
                  <th className="dt-th-metro">Typical Metro Clinics (Delhi)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((c, i) => (
                  <tr key={i}>
                    <td className="dt-td-title"><strong>{c.feature}</strong></td>
                    <td className="dt-td-clinic">
                      <div className="dt-td-flex">
                        <Check size={13} className="dt-td-check-emerald" />
                        <span>{c.rohtak}</span>
                      </div>
                    </td>
                    <td className="dt-td-metro">
                      <span>{c.metro}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* ── 05. AIRPORT LOGISTICS & ROUTE FLOW ──────────────────────────── */}
        <section className="dt-flow-section" id="airport-logistics">
          <div className="dt-flow-header">
            <div className="dt-flow-tag">
              <Car size={12} />
              <span>Direct Transit</span>
            </div>
            <h2 className="dt-flow-title font-heading">Smooth 75–85 Mins Drive from Delhi IGI Airport (T3)</h2>
            <p className="dt-flow-desc">
              Landing at Indira Gandhi International Airport? Avoid hours trapped in inner-city gridlock with a straight, modern expressway highway run.
            </p>
          </div>

          <div className="dt-logistics-tri-cluster">
            {AIRPORT_LOGISTICS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="dt-logistics-tile"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dt-log-top">
                    <div className="dt-log-glow-icon">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="dt-log-name font-heading">{item.title}</h3>
                      <span className="dt-log-sub">{item.sub}</span>
                    </div>
                  </div>
                  <p className="dt-log-desc">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Route Pipeline */}
          <div className="dt-expressway-pipeline">
            <div className="dt-route-node">
              <span className="dt-node-emoji">✈️</span>
              <div className="dt-node-details">
                <strong>Delhi Airport (IGI T3)</strong>
                <span>Landing &amp; Pick-up</span>
              </div>
            </div>

            <div className="dt-pipeline-track">
              <span className="dt-track-tag">Direct NH9 Expressway (85 KM) · Signal Free</span>
              <div className="dt-animated-beam"></div>
            </div>

            <div className="dt-route-node dt-route-node--clinic">
              <span className="dt-node-emoji">🏥</span>
              <div className="dt-node-details">
                <strong>Shubh Dental Clinic</strong>
                <span>Delhi Bypass Chowk, Rohtak</span>
              </div>
            </div>
          </div>
        </section>


        {/* ── 06. FREQUENTLY ASKED QUESTIONS (COMPACT ACCORDION) ──────────── */}
        <section className="dt-flow-section" id="faqs">
          <div className="dt-flow-header">
            <div className="dt-flow-tag">
              <HelpCircle size={12} />
              <span>Overseas Patient Support</span>
            </div>
            <h2 className="dt-flow-title font-heading">Frequently Asked Questions</h2>
            <p className="dt-flow-desc">Everything you need to know about planning your dental visit to India.</p>
          </div>

          <div className="dt-accordion-collection">
            {FAQS.map((f, i) => {
              const isOpen = expandedFaq === i;
              return (
                <div key={i} className={`dt-accordion-card ${isOpen ? 'dt-accordion-card--open' : ''}`}>
                  <button 
                    type="button" 
                    className="dt-accordion-trigger" 
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="dt-accordion-question font-heading">{f.q}</span>
                    <ChevronDown size={16} className={`dt-accordion-arrow ${isOpen ? 'dt-accordion-arrow--flip' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="dt-accordion-body"
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* ── 07. FLOATING DOCKED QUICK-BAR (SUPER SLIM) ────────────────────── */}
      <div className="dt-floating-dock-bar">
        <div className="dt-dock-container">
          <div className="dt-dock-text">
            <strong>Planning Your Visit to India?</strong>
            <span>Consult online directly with Prof. Dr. S. K. Yadav before booking flights</span>
          </div>
          <div className="dt-dock-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dt-dock-wa-btn">
              <Video size={14} />
              <span>WhatsApp Video Consult</span>
            </a>
            <a href="tel:+918685048414" className="dt-dock-call-btn">
              <Phone size={13} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── STYLES: ELEGANT LIGHT BG WITH SLEEK HIGH-CONTRAST DARK CARDS ──── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── ROOT CONTAINER: LIGHT BACKGROUND ────────────── */
        .dt-cinema-root {
          min-height: 100vh;
          background: #FAF8F5; /* Premium warm ivory light background */
          color: #1A0D08;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
          position: relative;
          overflow-x: hidden;
          padding: 1.5rem 1rem 0.5rem;
          box-sizing: border-box;
        }

        /* Subtle Ambient Backlight Glows on light background */
        .dt-ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.18;
        }
        .dt-ambient-glow-1 {
          width: 500px;
          height: 500px;
          top: -50px;
          left: 10%;
          background: radial-gradient(circle, #D67A41 0%, transparent 70%);
        }
        .dt-ambient-glow-2 {
          width: 450px;
          height: 450px;
          top: 40%;
          right: -80px;
          background: radial-gradient(circle, #F4B382 0%, transparent 70%);
        }

        .dt-stage-wrap {
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        /* ── 01. HERO IMMERSIVE (LIGHT BG ADAPTATION) ─────── */
        .dt-hero-immersive {
          position: relative;
          padding-top: 0.5rem;
        }
        .dt-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .dt-pills-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 0.75rem;
          width: 100%;
        }
        .dt-pills-row::-webkit-scrollbar { display: none; }
        .dt-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          border: 1px solid;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .dt-pill--amber {
          background: rgba(214, 122, 65, 0.12);
          color: #B85D26;
          border-color: rgba(214, 122, 65, 0.3);
        }
        .dt-pill--emerald {
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          border-color: rgba(16, 185, 129, 0.3);
        }
        .dt-pulse-icon {
          animation: dtPulse 2s infinite ease-in-out;
        }
        @keyframes dtPulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .dt-main-heading {
          font-size: clamp(1.8rem, 3.8vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          color: #1A0D08;
          letter-spacing: -0.025em;
          margin: 0 0 0.65rem 0;
        }
        .dt-gold-radiance {
          background: linear-gradient(135deg, #B85D26 0%, #D67A41 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dt-main-desc {
          font-size: 0.94rem;
          line-height: 1.65;
          color: #554A44;
          max-width: 860px;
          margin: 0 0 1.15rem 0;
        }
        .dt-main-desc strong {
          color: #B85D26;
          font-weight: 700;
        }

        /* Origin Country Tracker */
        .dt-origin-tracker {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.2);
          padding: 0.55rem 0.85rem;
          border-radius: 14px;
          margin-bottom: 1.25rem;
          box-shadow: 0 3px 12px rgba(74, 37, 24, 0.05);
          box-sizing: border-box;
        }
        .dt-origin-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #B85D26;
          margin-bottom: 0.45rem;
        }
        .dt-flags-cluster {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }
        .dt-flags-cluster::-webkit-scrollbar { display: none; }
        .dt-flag-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          padding: 0.25rem 0.55rem;
          border-radius: 8px;
          font-size: 0.72rem;
          color: #1A0D08;
          cursor: default;
          white-space: nowrap;
          flex-shrink: 0;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .dt-flag-chip:hover {
          border-color: rgba(214, 122, 65, 0.4);
          background: #FFFFFF;
        }
        .dt-chip-flag { font-size: 0.9rem; line-height: 1; }
        .dt-chip-name { font-weight: 700; white-space: nowrap; }

        /* Metric Tiles: DARK LUXURY CARDS ON LIGHT BG */
        .dt-stats-floating-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          width: 100%;
        }
        .dt-stat-glass-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2A140B 100%);
          border: 1px solid rgba(214, 122, 65, 0.28);
          border-radius: 14px;
          padding: 0.75rem 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 0 6px 18px rgba(17, 8, 5, 0.12);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .dt-stat-glass-card:hover {
          border-color: rgba(214, 122, 65, 0.5);
        }
        .dt-stat-glyph { font-size: 1.35rem; line-height: 1; }
        .dt-stat-meta { display: flex; flex-direction: column; }
        .dt-stat-figure {
          font-size: 1.05rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1.15;
        }
        .dt-stat-caption {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.2;
        }

        /* ── COMMON SECTION HEADINGS ─────────────────────── */
        .dt-flow-section {
          width: 100%;
        }
        .dt-flow-header {
          margin-bottom: 1.15rem;
        }
        .dt-flow-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #B85D26;
          margin-bottom: 0.25rem;
        }
        .dt-flow-title {
          font-size: clamp(1.3rem, 2.4vw, 1.85rem);
          font-weight: 800;
          color: #1A0D08;
          letter-spacing: -0.02em;
          margin: 0 0 0.35rem 0;
        }
        .dt-flow-desc {
          font-size: 0.86rem;
          color: #554A44;
          line-height: 1.55;
          max-width: 820px;
          margin: 0;
        }

        /* ── 02. TREATMENTS: COMPACT DARK LUXURY CARDS ───── */
        .dt-treatments-glow-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .dt-treatment-glow-tile {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.26);
          border-radius: 16px;
          padding: 1.25rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 8px 24px rgba(17, 8, 5, 0.14);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .dt-treatment-glow-tile:hover {
          border-color: rgba(214, 122, 65, 0.5);
          box-shadow: 0 12px 30px rgba(17, 8, 5, 0.22);
        }
        .dt-tile-header-compact {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.45rem;
        }
        .dt-tile-identity {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dt-tile-emoji {
          font-size: 1.25rem;
          line-height: 1;
        }
        .dt-tile-badges {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .dt-tile-time {
          font-size: 0.7rem;
          font-weight: 700;
          color: #FBBF24;
          background: rgba(251, 191, 36, 0.12);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .dt-tile-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: #34D399;
          background: rgba(52, 211, 153, 0.12);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .dt-tile-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }
        .dt-tile-summary {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin: 0.35rem 0 0.75rem 0;
        }

        /* Price Hologram Box */
        .dt-price-hologram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.4);
          border: 1px dashed rgba(214, 122, 65, 0.3);
          border-radius: 10px;
          padding: 0.45rem 0.8rem;
          margin-bottom: 0.75rem;
        }
        .dt-price-col {
          display: flex;
          flex-direction: column;
        }
        .dt-price-lbl {
          font-size: 0.64rem;
          font-weight: 700;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 2px;
        }
        .dt-price-in {
          font-size: 0.88rem;
          font-weight: 900;
          color: #F4B382;
        }
        .dt-price-out {
          font-size: 0.76rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: line-through;
        }
        .dt-price-separator {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Feature checkpoints */
        .dt-tile-features {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.85rem;
        }
        .dt-tile-feat {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 600;
        }
        .dt-feat-check {
          color: #34D399;
          flex-shrink: 0;
        }

        /* Footer links */
        .dt-tile-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .dt-tile-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #F4B382;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .dt-tile-link:hover { color: #FFFFFF; }
        .dt-tile-wa-btn {
          font-size: 0.72rem;
          font-weight: 800;
          color: #FFFFFF;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .dt-tile-wa-btn:hover {
          background: #D67A41;
          color: #FFFFFF;
        }

        /* ── 03. 4-STAGE TIMELINE: DARK CARDS ────────────── */
        .dt-journey-connective-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
        }
        .dt-journey-phase-card {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.24);
          border-radius: 14px;
          padding: 1rem 1.05rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 18px rgba(17, 8, 5, 0.1);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .dt-journey-phase-card:hover {
          border-color: rgba(214, 122, 65, 0.45);
        }
        .dt-phase-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
        }
        .dt-phase-title-wrap {
          display: flex;
          align-items: baseline;
          gap: 0.45rem;
        }
        .dt-phase-num {
          font-size: 1.15rem;
          font-weight: 900;
          line-height: 1;
        }
        .dt-phase-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }
        .dt-phase-pill {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          border: 1px solid;
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }
        .dt-phase-desc {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.5;
          margin: 0;
        }

        /* ── 04. WHY ROHTAK TABLE: DARK LUXE CONTAINER ───── */
        .dt-glass-table-container {
          overflow-x: auto;
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.26);
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(17, 8, 5, 0.12);
        }
        .dt-glass-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.84rem;
          text-align: left;
        }
        .dt-glass-table th {
          padding: 0.85rem 1.15rem;
          font-weight: 800;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .dt-th-title {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.6);
          width: 20%;
        }
        .dt-th-clinic {
          background: rgba(214, 122, 65, 0.2);
          color: #F4B382;
          width: 44%;
          border-left: 1px solid rgba(214, 122, 65, 0.25);
          border-right: 1px solid rgba(214, 122, 65, 0.25);
        }
        .dt-th-metro {
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.5);
          width: 36%;
        }
        .dt-glass-table td {
          padding: 0.85rem 1.15rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          vertical-align: top;
          line-height: 1.5;
        }
        .dt-td-title strong {
          color: #FFFFFF;
          font-size: 0.82rem;
        }
        .dt-td-clinic {
          background: rgba(214, 122, 65, 0.06);
          color: #FFFFFF;
          border-left: 1px solid rgba(214, 122, 65, 0.15);
          border-right: 1px solid rgba(214, 122, 65, 0.15);
        }
        .dt-td-flex {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
        }
        .dt-td-check-emerald {
          color: #34D399;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .dt-td-metro {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.78rem;
        }

        /* ── 05. AIRPORT LOGISTICS: DARK CARDS ────────────── */
        .dt-logistics-tri-cluster {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .dt-logistics-tile {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.24);
          border-radius: 14px;
          padding: 1.15rem;
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(17, 8, 5, 0.1);
        }
        .dt-log-top {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.45rem;
        }
        .dt-log-glow-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dt-log-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }
        .dt-log-sub {
          font-size: 0.68rem;
          color: #34D399;
          font-weight: 700;
        }
        .dt-log-desc {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.5;
          margin: 0;
        }

        /* Pipeline Visual */
        .dt-expressway-pipeline {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.28);
          border-radius: 14px;
          padding: 0.95rem 1.35rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          color: #FFFFFF;
          box-shadow: 0 6px 20px rgba(17, 8, 5, 0.12);
        }
        .dt-route-node {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .dt-node-emoji { font-size: 1.4rem; }
        .dt-node-details strong {
          display: block;
          font-size: 0.88rem;
          color: #FFFFFF;
        }
        .dt-node-details span {
          display: block;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .dt-route-node--clinic strong {
          color: #F4B382;
        }
        .dt-pipeline-track {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .dt-track-tag {
          font-size: 0.68rem;
          font-weight: 800;
          color: #FBBF24;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .dt-animated-beam {
          width: 100%;
          height: 2.5px;
          background: rgba(255, 255, 255, 0.15);
          position: relative;
          overflow: hidden;
          border-radius: 99px;
        }
        .dt-animated-beam::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, #F4B382, #FBBF24, transparent);
          animation: dtBeam 2s infinite linear;
        }
        @keyframes dtBeam {
          0% { left: -40%; }
          100% { left: 100%; }
        }

        /* ── 06. FAQS: COMPACT DARK CARDS ────────────────── */
        .dt-accordion-collection {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .dt-accordion-card {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.22);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .dt-accordion-card--open {
          border-color: rgba(214, 122, 65, 0.5);
        }
        .dt-accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.15rem;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 0.75rem;
          text-align: left;
        }
        .dt-accordion-question {
          font-size: 0.88rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.35;
        }
        .dt-accordion-arrow {
          color: #F4B382;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .dt-accordion-arrow--flip {
          transform: rotate(180deg);
        }
        .dt-accordion-body {
          padding: 0 1.15rem 0.85rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.55;
        }
        .dt-accordion-body p { margin: 0; }

        /* ── 07. FLOATING DOCKED BAR ─────────────────────── */
        .dt-floating-dock-bar {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(24, 12, 7, 0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.65rem 1rem;
          z-index: 998;
          box-shadow: 0 -6px 25px rgba(0, 0, 0, 0.3);
        }
        .dt-dock-container {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .dt-dock-text {
          display: flex;
          flex-direction: column;
        }
        .dt-dock-text strong {
          font-size: 0.88rem;
          color: #FFFFFF;
        }
        .dt-dock-text span {
          font-size: 0.72rem;
          color: #F4B382;
        }
        .dt-dock-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dt-dock-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(214, 122, 65, 0.35);
          white-space: nowrap;
        }
        .dt-dock-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
        }

        /* ── RESPONSIVE COMPACT RULES (MOBILE CRITICAL) ──── */
        @media (max-width: 1024px) {
          .dt-stats-floating-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .dt-journey-connective-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dt-cinema-root {
            padding: 0.85rem 0.65rem 0.75rem;
          }
          .dt-stage-wrap {
            gap: 1.5rem; /* Cut down negative space gap between sections */
          }
          .dt-break-desktop {
            display: none;
          }
          .dt-pills-row {
            gap: 0.3rem;
            margin-bottom: 0.5rem;
          }
          .dt-pill {
            font-size: 0.65rem;
            padding: 0.18rem 0.5rem;
          }
          .dt-main-heading {
            font-size: 1.55rem;
            margin-bottom: 0.4rem;
          }
          .dt-main-desc {
            font-size: 0.82rem;
            line-height: 1.5;
            margin-bottom: 0.75rem;
          }

          /* Origin tracker compact: clean single line horizontal stream */
          .dt-origin-tracker {
            display: flex;
            align-items: center;
            gap: 0.45rem;
            padding: 0.35rem 0.55rem;
            margin-bottom: 0.75rem;
            overflow: hidden;
          }
          .dt-origin-label {
            font-size: 0.62rem;
            margin-bottom: 0;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .dt-flags-cluster {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
          .dt-flag-chip {
            padding: 0.18rem 0.45rem;
            font-size: 0.68rem;
            gap: 0.25rem;
            border-radius: 6px;
            flex-shrink: 0;
          }
          .dt-chip-flag { font-size: 0.8rem; }
          .dt-chip-name { font-size: 0.68rem; }

          /* 2x2 stats matrix tightly packed */
          .dt-stats-floating-row {
            grid-template-columns: 1fr 1fr;
            gap: 0.4rem;
          }
          .dt-stat-glass-card {
            padding: 0.5rem 0.65rem;
            gap: 0.45rem;
          }
          .dt-stat-glyph { font-size: 1.15rem; }
          .dt-stat-figure { font-size: 0.92rem; }
          .dt-stat-caption { font-size: 0.62rem; }

          /* Flow headers compact */
          .dt-flow-header {
            margin-bottom: 0.75rem;
          }
          .dt-flow-title {
            font-size: 1.15rem;
            margin-bottom: 0.2rem;
          }
          .dt-flow-desc {
            font-size: 0.78rem;
            line-height: 1.45;
          }

          /* Treatments mobile: 1 col, ultra-compact */
          .dt-treatments-glow-grid {
            grid-template-columns: 1fr;
            gap: 0.65rem; /* Minimized gap */
          }
          .dt-treatment-glow-tile {
            padding: 0.85rem; /* Minimized padding */
            border-radius: 12px;
          }
          .dt-tile-name {
            font-size: 0.95rem;
          }
          .dt-tile-summary {
            font-size: 0.76rem;
            margin: 0.25rem 0 0.55rem 0;
            line-height: 1.4;
          }
          .dt-price-hologram {
            padding: 0.35rem 0.65rem;
            margin-bottom: 0.55rem;
          }
          .dt-price-in { font-size: 0.8rem; }
          .dt-price-out { font-size: 0.7rem; }
          .dt-tile-features {
            gap: 0.2rem;
            margin-bottom: 0.65rem;
          }
          .dt-tile-feat {
            font-size: 0.7rem;
          }
          .dt-tile-footer {
            padding-top: 0.5rem;
          }

          /* Timeline mobile */
          .dt-journey-connective-strip {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .dt-journey-phase-card {
            padding: 0.75rem 0.85rem;
            border-radius: 12px;
          }

          /* Logistics mobile */
          .dt-logistics-tri-cluster {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }
          .dt-logistics-tile {
            padding: 0.85rem;
            border-radius: 12px;
          }
          .dt-expressway-pipeline {
            flex-direction: column;
            text-align: center;
            gap: 0.65rem;
            padding: 0.75rem 0.65rem;
            border-radius: 12px;
          }
          .dt-route-node {
            flex-direction: column;
            gap: 0.25rem;
            text-align: center;
          }
          .dt-animated-beam {
            display: none;
          }

          /* Accordion mobile */
          .dt-accordion-trigger {
            padding: 0.75rem 0.85rem;
          }
          .dt-accordion-question {
            font-size: 0.82rem;
          }
          .dt-accordion-body {
            padding: 0 0.85rem 0.65rem;
            font-size: 0.76rem;
          }

          /* Dock on mobile */
          .dt-dock-text {
            display: none;
          }
          .dt-dock-container {
            justify-content: center;
          }
          .dt-dock-actions {
            width: 100%;
          }
          .dt-dock-wa-btn {
            flex: 2;
            justify-content: center;
            font-size: 0.74rem;
            padding: 0.5rem 0.65rem;
          }
          .dt-dock-call-btn {
            flex: 1;
            justify-content: center;
            font-size: 0.74rem;
            padding: 0.5rem 0.65rem;
          }
        }
      `}} />
    </main>
  );
}
