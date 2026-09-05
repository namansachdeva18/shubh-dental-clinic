'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, ShieldCheck, Sparkles, CheckCircle2, Star, Zap, 
  Clock, HeartHandshake, Phone, ArrowRight, Video, FileText, 
  MapPin, Check, ChevronDown, ChevronRight, BadgeCheck, Stethoscope,
  Users, Crown, Activity, ShieldAlert, Cpu, Sparkle, Navigation,
  Smile, Layers, Flame, Compass, HeartPulse
} from 'lucide-react';

const STATS = [
  { 
    val: '2,50,000+', 
    label: 'Patients Treated', 
    iconKey: 'users',
    accentColor: '#38BDF8',
    glowBg: 'rgba(56, 189, 248, 0.15)',
    borderGlow: 'rgba(56, 189, 248, 0.35)'
  },
  { 
    val: '20+ Yrs', 
    label: 'Clinical Mastery', 
    iconKey: 'crown',
    accentColor: '#FBBF24',
    glowBg: 'rgba(251, 191, 36, 0.15)',
    borderGlow: 'rgba(251, 191, 36, 0.35)'
  },
  { 
    val: '5,000+', 
    label: 'Braces & Aligners', 
    iconKey: 'sparkles',
    accentColor: '#F472B6',
    glowBg: 'rgba(244, 114, 182, 0.15)',
    borderGlow: 'rgba(244, 114, 182, 0.35)'
  },
  { 
    val: '3,000+', 
    label: 'Dental Implants', 
    iconKey: 'shield',
    accentColor: '#34D399',
    glowBg: 'rgba(52, 211, 153, 0.15)',
    borderGlow: 'rgba(52, 211, 153, 0.35)'
  }
];

const IRRESISTIBLE_ADVANTAGES = [
  {
    id: 'pgi-specialist',
    badge: 'Doctor Authority',
    badgeColor: '#D67A41',
    iconKey: 'doctor',
    title: 'Treated Directly by PGI Professors',
    desc: 'Never delegated to junior trainees. Your entire treatment plan and execution are handled personally by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, Fellow WFO USA) and Prof. Dr. Achla Yadav.',
    points: ['Fellow World Federation of Orthodontists (USA)', 'Former Senior Resident, PGI Chandigarh', '64+ Global Clinical Research Publications']
  },
  {
    id: 'in-house-cadcam',
    badge: 'Direct Technology',
    badgeColor: '#10B981',
    iconKey: 'cadcam',
    title: 'In-House 3D Lab & Zero Waiting',
    desc: 'Equipped with in-house 3D intraoral digital scanners and SkyAlign™ CAD/CAM milling. Cuts delivery time from weeks to 24–48 hours with flawless computer precision.',
    points: ['Instant 3D digital smile simulation before starting', 'Fast turnaround without third-party lab delays', 'Custom fit with German medical-grade polymers']
  },
  {
    id: 'painless-laser',
    badge: 'Patient Comfort',
    badgeColor: '#3B82F6',
    iconKey: 'laser',
    title: 'Gentle, Fear-Free & Comfortable Protocols',
    desc: 'Computerized local anesthesia, soft-tissue laser operatory, and minimally invasive keyhole implant placement with zero swelling, zero sutures, and rapid recovery.',
    points: ['Biolase® soft-tissue laser (bloodless, no cuts)', 'Same-day fixed teeth without waiting months', 'Gentle touch for both adults & children']
  },
  {
    id: 'honest-pricing',
    badge: '100% Transparent',
    badgeColor: '#F59E0B',
    iconKey: 'pricing',
    title: 'Honest Pricing + 0% Interest EMI',
    desc: 'No hidden charges or inflated metro consultation markups. Upfront written quotes with flexible monthly 0% EMI financing so world-class care is accessible to every family.',
    points: ['Genuine Korean Osstem®, US Invisalign®, German Zirconia', 'Lifetime implant warranty card with global serial IDs', 'Flexible 0% EMI plans starting at ₹2,500/mo']
  },
  {
    id: 'ot-sterilization',
    badge: 'Safety Standard',
    badgeColor: '#8B5CF6',
    iconKey: 'sterilization',
    title: 'Hospital OT-Grade Sterilization',
    desc: 'European Class-B triple-vacuum autoclaves and sealed disposable instrument pouches opened only in front of you. Absolute guarantee against cross-infection.',
    points: ['Multi-cycle vacuum heat autoclave testing', 'Strict hospital-grade disinfection hygiene', 'Pure RO clinical water lines throughout operatory']
  },
  {
    id: 'ncr-connectivity',
    badge: 'Location Convenience',
    badgeColor: '#EC4899',
    iconKey: 'location',
    title: 'Direct Delhi Bypass Location + 5 NCR Hubs',
    desc: 'Strategically located right on Delhi Bypass Chowk, Rohtak with zero city traffic jams. Direct 75–85 min expressway access from Delhi IGI Airport plus visiting hubs.',
    points: ['Ample dedicated private parking on doorstep', 'Visiting centres in Delhi, Gurugram, Panipat & Sonepat', 'Seamless airport logistics for overseas & NRI patients']
  }
];

const CLINICAL_DIFFERENCE = [
  {
    parameter: 'Doctor Expertise',
    shubh: 'Prof. Dr. S.K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh, Fellow WFO USA)',
    others: 'General dentists performing specialized braces/implants or part-time visiting doctors'
  },
  {
    parameter: 'Treatment Execution',
    shubh: '100% performed directly by Chief Specialists with 20+ years mastery',
    others: 'Often handed over to junior interns, duty doctors, or rotating trainees'
  },
  {
    parameter: 'Digital 3D Infrastructure',
    shubh: 'In-house 3D digital scanning, CAD/CAM lab & laser operatory under one roof',
    others: 'Rely on outside commercial labs, causing 2–3 weeks delays and fit adjustments'
  },
  {
    parameter: 'Materials & Warranty',
    shubh: '100% genuine FDA/CE brands (Korean Osstem®, Invisalign®) with serial warranty cards',
    others: 'Generic unbranded duplicates with zero manufacturer replacement guarantees'
  },
  {
    parameter: 'Pricing & Integrity',
    shubh: 'Transparent package pricing + 0% EMI with no hidden chair charges',
    others: 'Surprise charges added for X-rays, trays, and post-treatment adjustments'
  }
];

const PATIENT_TRUST_METRICS = [
  { quote: 'Got my ceramic braces done here. Completed in 11 months with zero pain. Dr. Yadav’s hand is so gentle!', author: 'Rohan Sharma', loc: 'Rohtak' },
  { quote: 'Travelled from Gurugram for my dental implants. Saved 60% compared to metro clinics with authentic Korean Osstem implants.', author: 'Jasleen Kaur', loc: 'Gurugram' },
  { quote: 'The 3D scanning lab inside the clinic was impressive. My aligners arrived in 3 days. Highly recommend!', author: 'Vikas Hooda', loc: 'Delhi NCR' }
];

export default function WhyChooseUsClient() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hello Shubh Dental Clinic! I would like to book a consultation with Prof. Dr. S. K. Yadav.'
  );

  // Modern innovative icon renderer for the top 4 stats
  const renderStatIcon = (key) => {
    switch (key) {
      case 'users':
        return (
          <div className="wcu-icon-pod wcu-icon-pod--blue">
            <Users size={16} strokeWidth={2.2} />
          </div>
        );
      case 'crown':
        return (
          <div className="wcu-icon-pod wcu-icon-pod--gold">
            <Crown size={16} strokeWidth={2.2} />
          </div>
        );
      case 'sparkles':
        return (
          <div className="wcu-icon-pod wcu-icon-pod--pink">
            <Sparkles size={16} strokeWidth={2.2} />
          </div>
        );
      case 'shield':
      default:
        return (
          <div className="wcu-icon-pod wcu-icon-pod--green">
            <ShieldCheck size={16} strokeWidth={2.2} />
          </div>
        );
    }
  };

  // Modern innovative icon renderer for the 6 key advantages
  const renderAdvantageIcon = (key) => {
    switch (key) {
      case 'doctor':
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(214, 122, 65, 0.16)', borderColor: 'rgba(214, 122, 65, 0.45)', color: '#F4B382' }}>
            <Award size={18} strokeWidth={2.2} />
          </div>
        );
      case 'cadcam':
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(16, 185, 129, 0.16)', borderColor: 'rgba(16, 185, 129, 0.45)', color: '#34D399' }}>
            <Cpu size={18} strokeWidth={2.2} />
          </div>
        );
      case 'laser':
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(59, 130, 246, 0.16)', borderColor: 'rgba(59, 130, 246, 0.45)', color: '#60A5FA' }}>
            <Zap size={18} strokeWidth={2.2} />
          </div>
        );
      case 'pricing':
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(245, 158, 11, 0.16)', borderColor: 'rgba(245, 158, 11, 0.45)', color: '#FBBF24' }}>
            <Sparkle size={18} strokeWidth={2.2} />
          </div>
        );
      case 'sterilization':
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(139, 92, 246, 0.16)', borderColor: 'rgba(139, 92, 246, 0.45)', color: '#A78BFA' }}>
            <ShieldCheck size={18} strokeWidth={2.2} />
          </div>
        );
      case 'location':
      default:
        return (
          <div className="wcu-adv-icon-badge" style={{ background: 'rgba(236, 72, 153, 0.16)', borderColor: 'rgba(236, 72, 153, 0.45)', color: '#F472B6' }}>
            <Navigation size={18} strokeWidth={2.2} />
          </div>
        );
    }
  };

  return (
    <div className="wcu-luxury-root">
      
      {/* ── TOP LUXURY NAVIGATION PILL / BREADCRUMB ──────────────────────── */}
      <div className="wcu-top-nav-bar">
        <div className="wcu-container-tight">
          <div className="wcu-pill-strip">
            <Link href="/" className="wcu-nav-crumb">Home</Link>
            <ChevronRight size={12} className="wcu-crumb-sep" />
            <span className="wcu-crumb-active">Why Choose Us</span>
            
            <div className="wcu-nav-anchors">
              <a href="#reasons" className="wcu-anchor-btn">6 Key Reasons</a>
              <a href="#comparison" className="wcu-anchor-btn">Comparison</a>
              <a href="#reviews" className="wcu-anchor-btn">Patient Trust</a>
            </div>
          </div>
        </div>
      </div>


      {/* ── 01. COMPACT HERO SECTION (LIGHT THEME) ────────────────────────── */}
      <div className="wcu-container-tight">
        <section className="wcu-hero-block">
          <motion.div 
            className="wcu-hero-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Live Trust Badges in Single Line */}
            <div className="wcu-trust-tag-row">
              <span className="wcu-badge wcu-badge--green">
                <span className="wcu-pulse-dot" />
                <span>PGI Chandigarh &amp; Rohtak Trained Specialists</span>
              </span>
              <span className="wcu-badge wcu-badge--gold">
                <Star size={11} className="wcu-star-gold" />
                <span>5.0★ Google Rating (114+ Verified Reviews)</span>
              </span>
            </div>

            <h1 className="wcu-title font-heading">
              Why 2,50,000+ Patients Trust <br className="wcu-desktop-br" />
              <span className="wcu-copper-glow">Shubh Dental Clinic</span>
            </h1>

            <p className="wcu-lead">
              When it comes to your teeth and smile, experience matters. Led by <strong>Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, Fellow WFO USA)</strong>, 
              we combine academic medical authority with in-house 3D digital technology to deliver uncompromising clinical excellence.
            </p>

            {/* 4 Metrics (High-Density Dark Cards on Warm Ivory with Custom Innovative Glowing Pods) */}
            <div className="wcu-stat-row">
              {STATS.map((s, idx) => (
                <motion.div 
                  key={idx} 
                  className="wcu-stat-tile"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="wcu-stat-icon-wrapper">
                    {renderStatIcon(s.iconKey)}
                  </div>
                  <div className="wcu-stat-text">
                    <strong className="wcu-stat-num font-heading">{s.val}</strong>
                    <span className="wcu-stat-lbl">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── 02. THE 6 IRRESISTIBLE REASONS (COMPACT HIGH-DENSITY CARDS) ─── */}
        <section className="wcu-section-block" id="reasons">
          <div className="wcu-block-header">
            <span className="wcu-tag">
              <Zap size={12} />
              <span>Unmatched Clinical Superiority</span>
            </span>
            <h2 className="wcu-block-title font-heading">The 6 Deciding Factors Patients Choose Us</h2>
            <p className="wcu-block-desc">
              Every aspect of your care is engineered to eliminate fear, eliminate delays, and deliver lifetime durability.
            </p>
          </div>

          <div className="wcu-reasons-grid">
            {IRRESISTIBLE_ADVANTAGES.map((item, idx) => (
              <motion.div 
                key={item.id} 
                className="wcu-reason-dark-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{ y: -3 }}
              >
                <div className="wcu-card-top">
                  <div className="wcu-card-identity">
                    {renderAdvantageIcon(item.iconKey)}
                    <h3 className="wcu-card-name font-heading">{item.title}</h3>
                  </div>
                  <span className="wcu-card-badge" style={{ borderColor: `${item.badgeColor}40`, color: item.badgeColor }}>
                    {item.badge}
                  </span>
                </div>

                <p className="wcu-card-desc">{item.desc}</p>

                {/* Key Bullet Highlights */}
                <div className="wcu-card-points">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="wcu-point-item">
                      <CheckCircle2 size={12} className="wcu-check-emerald" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ── 03. HEAD-TO-HEAD COMPARISON TABLE ───────────────────────────── */}
        <section className="wcu-section-block" id="comparison">
          <div className="wcu-block-header">
            <span className="wcu-tag">
              <Award size={12} />
              <span>Direct Comparison</span>
            </span>
            <h2 className="wcu-block-title font-heading">Shubh Dental vs. Typical Dental Clinics</h2>
            <p className="wcu-block-desc">
              Transparent side-by-side comparison showing why discerning families choose our super-specialty centre.
            </p>
          </div>

          <div className="wcu-table-shell">
            <table className="wcu-table">
              <thead>
                <tr>
                  <th className="wcu-th-param">Care Dimension</th>
                  <th className="wcu-th-shubh">✨ Shubh Dental Rohtak (HQ)</th>
                  <th className="wcu-th-others">Typical Dental Clinics</th>
                </tr>
              </thead>
              <tbody>
                {CLINICAL_DIFFERENCE.map((row, i) => (
                  <tr key={i}>
                    <td className="wcu-td-param"><strong>{row.parameter}</strong></td>
                    <td className="wcu-td-shubh">
                      <div className="wcu-td-inner">
                        <Check size={13} className="wcu-td-check" />
                        <span>{row.shubh}</span>
                      </div>
                    </td>
                    <td className="wcu-td-others">
                      <span>{row.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* ── 04. PATIENT REPUTATION PROOF BANNER ─────────────────────────── */}
        <section className="wcu-section-block" id="proof">
          <div className="wcu-block-header">
            <span className="wcu-tag">
              <HeartHandshake size={12} />
              <span>Real Patient Voices</span>
            </span>
            <h2 className="wcu-block-title font-heading">Trusted by Generations Across Haryana &amp; NCR</h2>
          </div>

          <div className="wcu-reviews-tri-cluster">
            {PATIENT_TRUST_METRICS.map((r, idx) => (
              <div key={idx} className="wcu-review-card">
                <div className="wcu-review-stars">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={13} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p className="wcu-review-quote">&ldquo;{r.quote}&rdquo;</p>
                <div className="wcu-review-author">
                  <strong>{r.author}</strong>
                  <span>📍 {r.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>


      {/* ── FIXED MOBILE BOTTOM ACTION STRIP ──────────────────────────────── */}
      <div className="wcu-docked-strip">
        <div className="wcu-docked-inner">
          <div className="wcu-docked-title">
            <strong>Experience PGI Clinical Excellence</strong>
            <span>Direct Specialist Consult · 0% EMI</span>
          </div>
          <div className="wcu-docked-btns">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wcu-dock-btn wcu-dock-btn--wa">
              <Video size={13} />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+918685048414" className="wcu-dock-btn wcu-dock-btn--call">
              <Phone size={13} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HIGH-END LUXURY STYLES (WARM IVORY BG + COMPACT DARK CARDS) ──── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── ROOT LAYOUT ─────────────────────────────────── */
        .wcu-luxury-root {
          min-height: 100vh;
          background: #FAF8F5; /* Warm ivory light background matching site */
          color: #1A0D08;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
          position: relative;
          overflow-x: hidden;
          padding: 0 0 2rem 0;
          box-sizing: border-box;
        }

        .wcu-container-tight {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* ── TOP BREADCRUMB & JUMP BAR ───────────────────── */
        .wcu-top-nav-bar {
          background: #FFFFFF;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          padding: 0.65rem 0;
          margin-bottom: 1.25rem;
        }
        .wcu-pill-strip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .wcu-nav-crumb {
          font-size: 0.76rem;
          font-weight: 600;
          color: #8A7063;
          text-decoration: none;
        }
        .wcu-nav-crumb:hover { color: #D67A41; }
        .wcu-crumb-sep { color: #C4A493; }
        .wcu-crumb-active {
          font-size: 0.76rem;
          font-weight: 750;
          color: #D67A41;
        }
        .wcu-nav-anchors {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-left: auto;
        }
        .wcu-anchor-btn {
          font-size: 0.72rem;
          font-weight: 700;
          color: #554A44;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.2);
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .wcu-anchor-btn:hover {
          background: #180C07;
          color: #FFFFFF;
          border-color: #180C07;
        }

        /* ── HERO BLOCK & TRUST TAGS ─────────────────────── */
        .wcu-hero-block {
          margin-bottom: 2rem;
        }
        .wcu-hero-card {
          display: flex;
          flex-direction: column;
        }
        .wcu-trust-tag-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 0.75rem;
          padding-bottom: 2px;
        }
        .wcu-trust-tag-row::-webkit-scrollbar { display: none; }
        .wcu-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.24rem 0.65rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 750;
          letter-spacing: 0.02em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wcu-badge--green {
          background: rgba(16, 185, 129, 0.12);
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .wcu-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }
        .wcu-badge--gold {
          background: rgba(245, 158, 11, 0.12);
          color: #B45309;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .wcu-star-gold {
          color: #F59E0B;
          fill: #F59E0B;
        }
        .wcu-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .wcu-badge-strip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          width: 100%;
          margin-bottom: 0.65rem;
        }
        .wcu-badge-strip::-webkit-scrollbar { display: none; }
        .wcu-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(214, 122, 65, 0.12);
          color: #B85D26;
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wcu-top-pill--gold {
          background: rgba(251, 191, 36, 0.12);
          color: #B45309;
          border-color: rgba(251, 191, 36, 0.35);
        }
        .wcu-pulse {
          animation: wcuPulse 2s infinite ease-in-out;
        }
        @keyframes wcuPulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.18); opacity: 1; }
        }

        .wcu-title {
          font-size: clamp(1.85rem, 3.8vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          color: #1A0D08;
          letter-spacing: -0.025em;
          margin: 0 0 0.55rem 0;
        }
        .wcu-copper-glow {
          background: linear-gradient(135deg, #B85D26 0%, #D67A41 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wcu-lead {
          font-size: 0.94rem;
          line-height: 1.65;
          color: #554A44;
          max-width: 860px;
          margin: 0 0 1.15rem 0;
        }
        .wcu-lead strong {
          color: #B85D26;
          font-weight: 700;
        }

        /* Stat row: Dark luxury tiles */
        .wcu-stat-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          width: 100%;
        }
        .wcu-stat-tile {
          background: linear-gradient(145deg, #180C07 0%, #25120A 100%);
          border: 1px solid rgba(214, 122, 65, 0.32);
          border-radius: 14px;
          padding: 0.75rem 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 6px 20px rgba(17, 8, 5, 0.12);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wcu-stat-tile:hover {
          border-color: rgba(214, 122, 65, 0.6);
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.16);
        }
        .wcu-stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        /* Innovative Glowing Icon Pods */
        .wcu-icon-pod {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          position: relative;
          transition: transform 0.25s ease;
        }
        .wcu-stat-tile:hover .wcu-icon-pod {
          transform: scale(1.08) rotate(3deg);
        }
        .wcu-icon-pod--blue {
          background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.25) 0%, rgba(15, 23, 42, 0.8) 100%);
          border-color: rgba(56, 189, 248, 0.5);
          color: #38BDF8;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }
        .wcu-icon-pod--gold {
          background: radial-gradient(circle at top left, rgba(251, 191, 36, 0.25) 0%, rgba(30, 20, 10, 0.8) 100%);
          border-color: rgba(251, 191, 36, 0.55);
          color: #FBBF24;
          box-shadow: 0 0 14px rgba(251, 191, 36, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }
        .wcu-icon-pod--pink {
          background: radial-gradient(circle at top left, rgba(244, 114, 182, 0.25) 0%, rgba(30, 15, 25, 0.8) 100%);
          border-color: rgba(244, 114, 182, 0.5);
          color: #F472B6;
          box-shadow: 0 0 14px rgba(244, 114, 182, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }
        .wcu-icon-pod--green {
          background: radial-gradient(circle at top left, rgba(52, 211, 153, 0.25) 0%, rgba(10, 28, 20, 0.8) 100%);
          border-color: rgba(52, 211, 153, 0.5);
          color: #34D399;
          box-shadow: 0 0 14px rgba(52, 211, 153, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        .wcu-stat-text { display: flex; flex-direction: column; }
        .wcu-stat-num {
          font-size: 1.05rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .wcu-stat-lbl {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.2;
          margin-top: 2px;
        }

        /* ── COMMON SECTION BLOCKS ───────────────────────── */
        .wcu-section-block {
          width: 100%;
        }
        .wcu-block-header {
          margin-bottom: 1.15rem;
        }
        .wcu-tag {
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
        .wcu-block-title {
          font-size: clamp(1.3rem, 2.4vw, 1.85rem);
          font-weight: 800;
          color: #1A0D08;
          letter-spacing: -0.02em;
          margin: 0 0 0.35rem 0;
        }
        .wcu-block-desc {
          font-size: 0.86rem;
          color: #554A44;
          line-height: 1.55;
          max-width: 820px;
          margin: 0;
        }

        /* ── 02. REASONS GRID: COMPACT DARK CARDS ────────── */
        .wcu-reasons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .wcu-reason-dark-card {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.26);
          border-radius: 16px;
          padding: 1.25rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 24px rgba(17, 8, 5, 0.14);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .wcu-reason-dark-card:hover {
          border-color: rgba(214, 122, 65, 0.5);
          box-shadow: 0 12px 30px rgba(17, 8, 5, 0.22);
        }
        .wcu-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.45rem;
        }
        .wcu-card-identity {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        
        /* Modern Advantage Icon Badge */
        .wcu-adv-icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          flex-shrink: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }
        .wcu-reason-dark-card:hover .wcu-adv-icon-badge {
          transform: scale(1.08);
        }
        .wcu-card-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.25;
        }
        .wcu-card-badge {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          border: 1px solid;
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }
        .wcu-card-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin: 0.35rem 0 0.75rem 0;
        }
        .wcu-card-points {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .wcu-point-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }
        .wcu-check-emerald {
          color: #34D399;
          flex-shrink: 0;
        }

        /* ── 03. COMPARISON TABLE ────────────────────────── */
        .wcu-table-shell {
          overflow-x: auto;
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.26);
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(17, 8, 5, 0.12);
        }
        .wcu-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.84rem;
          text-align: left;
        }
        .wcu-table th {
          padding: 0.85rem 1.15rem;
          font-weight: 800;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .wcu-th-param {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.6);
          width: 20%;
        }
        .wcu-th-shubh {
          background: rgba(214, 122, 65, 0.2);
          color: #F4B382;
          width: 44%;
          border-left: 1px solid rgba(214, 122, 65, 0.25);
          border-right: 1px solid rgba(214, 122, 65, 0.25);
        }
        .wcu-th-others {
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.5);
          width: 36%;
        }
        .wcu-table td {
          padding: 0.85rem 1.15rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          vertical-align: top;
          line-height: 1.5;
        }
        .wcu-td-param strong {
          color: #FFFFFF;
          font-size: 0.82rem;
        }
        .wcu-td-shubh {
          background: rgba(214, 122, 65, 0.06);
          color: #FFFFFF;
          border-left: 1px solid rgba(214, 122, 65, 0.15);
          border-right: 1px solid rgba(214, 122, 65, 0.15);
        }
        .wcu-td-inner {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
        }
        .wcu-td-check {
          color: #34D399;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .wcu-td-others {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.78rem;
        }

        /* ── 04. REPUTATION CLUSTER ──────────────────────── */
        .wcu-reviews-tri-cluster {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }
        .wcu-review-card {
          background: linear-gradient(150deg, #180C07 0%, #24110A 100%);
          border: 1px solid rgba(214, 122, 65, 0.24);
          border-radius: 14px;
          padding: 1.1rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 6px 18px rgba(17, 8, 5, 0.1);
        }
        .wcu-review-stars {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-bottom: 0.5rem;
        }
        .wcu-review-quote {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.55;
          margin: 0 0 0.85rem 0;
          font-style: italic;
        }
        .wcu-review-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.74rem;
        }
        .wcu-review-author strong { color: #F4B382; }
        .wcu-review-author span { color: rgba(255, 255, 255, 0.55); }

        /* ── 05. FINAL CTA CALLOUT ───────────────────────── */
        .wcu-final-cta-card {
          position: relative;
          background: linear-gradient(145deg, #1A0D08 0%, #2D150B 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          color: #FFFFFF;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(17, 8, 5, 0.2);
        }
        .wcu-cta-glow-mesh {
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(214,122,65,0.25) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .wcu-cta-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
        }
        .wcu-cta-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #34D399;
          background: rgba(52, 211, 153, 0.12);
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
          margin-bottom: 0.65rem;
        }
        .wcu-cta-title {
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 0.65rem 0;
          line-height: 1.2;
        }
        .wcu-cta-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          margin: 0 0 1.35rem 0;
        }
        .wcu-cta-desc strong { color: #F4B382; }
        .wcu-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .wcu-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #E08953 0%, #B85D26 100%);
          color: #FFFFFF;
          font-size: 0.86rem;
          font-weight: 800;
          padding: 0.75rem 1.45rem;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wcu-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.55);
        }
        .wcu-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-size: 0.84rem;
          font-weight: 700;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .wcu-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
        }

        /* ── DOCKED MOBILE STRIP ─────────────────────────── */
        .wcu-docked-strip {
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
        .wcu-docked-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .wcu-docked-title {
          display: flex;
          flex-direction: column;
        }
        .wcu-docked-title strong {
          font-size: 0.88rem;
          color: #FFFFFF;
        }
        .wcu-docked-title span {
          font-size: 0.72rem;
          color: #F4B382;
        }
        .wcu-docked-btns {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .wcu-dock-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
        }
        .wcu-dock-btn--wa {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 2px 10px rgba(214, 122, 65, 0.35);
        }
        .wcu-dock-btn--call {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        /* ── RESPONSIVE MOBILE OPTIMIZATIONS ─────────────── */
        @media (max-width: 1024px) {
          .wcu-stat-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .wcu-reviews-tri-cluster {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .wcu-top-nav-bar {
            display: none !important;
          }
          .wcu-luxury-root {
            padding: 0.85rem 0.65rem 0.75rem; /* Minimized bottom negative space */
          }
          .wcu-stage-wrap {
            gap: 1.5rem; /* Minimized inter-section gaps */
          }
          .wcu-desktop-br {
            display: none;
          }
          .wcu-badge-strip {
            gap: 0.3rem;
            margin-bottom: 0.45rem;
          }
          .wcu-top-pill {
            font-size: 0.65rem;
            padding: 0.18rem 0.5rem;
          }
          .wcu-title {
            font-size: 1.55rem;
            margin-bottom: 0.35rem;
          }
          .wcu-lead {
            font-size: 0.82rem;
            line-height: 1.5;
            margin-bottom: 0.75rem;
          }

          /* 2x2 stats matrix */
          .wcu-stat-row {
            grid-template-columns: 1fr 1fr;
            gap: 0.45rem;
          }
          .wcu-stat-tile {
            padding: 0.55rem 0.65rem;
            gap: 0.5rem;
          }
          .wcu-icon-pod {
            width: 28px;
            height: 28px;
            border-radius: 8px;
          }
          .wcu-icon-pod svg {
            width: 13px;
            height: 13px;
          }
          .wcu-stat-num { font-size: 0.88rem; }
          .wcu-stat-lbl { font-size: 0.6rem; }

          /* Block headings */
          .wcu-block-header {
            margin-bottom: 0.75rem;
          }
          .wcu-block-title {
            font-size: 1.15rem;
            margin-bottom: 0.2rem;
          }
          .wcu-block-desc {
            font-size: 0.78rem;
            line-height: 1.45;
          }

          /* Reasons cards: 1 col, ultra-compact */
          .wcu-reasons-grid {
            grid-template-columns: 1fr;
            gap: 0.65rem;
          }
          .wcu-reason-dark-card {
            padding: 0.85rem;
            border-radius: 12px;
          }
          .wcu-card-name {
            font-size: 0.95rem;
          }
          .wcu-card-desc {
            font-size: 0.76rem;
            margin: 0.25rem 0 0.55rem 0;
            line-height: 1.4;
          }
          .wcu-card-points {
            gap: 0.2rem;
            padding-top: 0.5rem;
          }
          .wcu-point-item {
            font-size: 0.7rem;
          }

          /* Table on mobile */
          .wcu-table-shell {
            border-radius: 12px;
          }
          .wcu-table th, .wcu-table td {
            padding: 0.65rem 0.75rem;
            font-size: 0.76rem;
          }

          /* CTA mobile */
          .wcu-final-cta-card {
            padding: 1.25rem 1rem;
            border-radius: 14px;
          }
          .wcu-cta-title {
            font-size: 1.25rem;
          }
          .wcu-cta-desc {
            font-size: 0.78rem;
            margin-bottom: 1rem;
          }
          .wcu-cta-btns {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
          }
          .wcu-btn-primary, .wcu-btn-secondary {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
            font-size: 0.8rem;
            padding: 0.65rem 1rem;
          }

          /* Dock on mobile */
          .wcu-docked-title {
            display: none;
          }
          .wcu-docked-inner {
            justify-content: center;
          }
          .wcu-docked-btns {
            width: 100%;
          }
          .wcu-dock-btn {
            flex: 1;
            justify-content: center;
            font-size: 0.74rem;
            padding: 0.5rem 0.65rem;
          }
        }
      `}} />
    </div>
  );
}
