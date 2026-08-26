'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, MapPin, CheckCircle, ShieldCheck, Clock, Award, 
  ArrowRight, Video, Calendar, Sparkles, Phone, MessageSquare, 
  Globe, DollarSign, HeartHandshake, Check, ChevronRight, Compass, Star
} from 'lucide-react';
import SmartBooking from '../components/SmartBooking';

const STATS = [
  { val: '18+', label: 'Countries Represented', icon: '🌍' },
  { val: '70%', label: 'Cost Savings vs US/UK/UAE', icon: '💎' },
  { val: '24-72h', label: 'Fast-Track Completion', icon: '⚡' },
  { val: '0%', label: 'Airport Stress (Direct NH9)', icon: '✈️' }
];

const TREATMENTS = [
  {
    title: 'Same-Day Dental Implants',
    time: '24–72 Hours',
    desc: '3D CBCT guided extraction and immediate implant placement with aesthetic temporary crown so you never go toothless.',
    badge: 'Popular NRI Choice',
    icon: '🛡️',
    link: '/treatments/same-day-dental-implants'
  },
  {
    title: 'Invisalign® & Clear Aligners',
    time: '1–2 Clinical Visits',
    desc: 'Digital 3D iTero® intraoral scan on Day 1. Full series manufactured and delivered to take back to your home country.',
    badge: 'Wire-Free',
    icon: '✨',
    link: '/treatments/invisalign-clear-aligners'
  },
  {
    title: 'Full Smile Makeover & Veneers',
    time: '3–5 Days',
    desc: 'Digital Smile Design (DSD) with ultra-thin German zirconia and porcelain veneers for camera-ready perfection.',
    badge: 'Cosmetic Specialist',
    icon: '👑',
    link: '/treatments/digital-smile-makeover'
  },
  {
    title: 'Full Arch Fixed Teeth (All-on-4/6)',
    time: '3–4 Days',
    desc: 'Complete rehabilitation of failing or missing teeth with permanent, fixed titanium-reinforced prosthesis.',
    badge: 'Permanent Solution',
    icon: '💎',
    link: '/treatments/dental-implants'
  }
];

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Virtual WhatsApp / Zoom Consult',
    desc: 'Share your photos or OPG X-ray. Get a definitive treatment plan, transparent pricing estimate, and timeline before booking flights.',
    icon: Video,
    highlight: 'Before You Fly'
  },
  {
    step: '02',
    title: 'VIP Arrival & Hotel Coordination',
    desc: 'Smooth 80-minute expressway drive from Delhi IGI Airport. We assist with trusted hotel accommodation near the clinic.',
    icon: Plane,
    highlight: 'Day 1: Arrival'
  },
  {
    step: '03',
    title: 'Priority Fast-Track Treatment',
    desc: 'Dedicated extended chair sessions with Prof. Dr. S. K. Yadav & Dr. Achla Yadav. Zero waiting room delay.',
    icon: Award,
    highlight: 'Days 2–4: Clinical Care'
  },
  {
    step: '04',
    title: 'Global Tele-Aftercare & Warranty',
    desc: 'Fly home with complete documentation, digital scans, and international manufacturer warranty certificates + virtual check-ins.',
    icon: HeartHandshake,
    highlight: 'Post-Treatment'
  }
];

const WHY_ROHTAK = [
  { title: 'Equal Medical Authority to South Delhi', desc: 'Led by PGI-trained professors with international fellowships (Fellow WFO USA).' },
  { title: 'Zero Inner-City Delhi Traffic', desc: 'Direct 85 KM drive on signal-free NH9 Expressway from Delhi IGI Airport Terminal 3.' },
  { title: '70% Lower Cost with Identical Materials', desc: 'Genuine US Invisalign®, Swiss Straumann®, and German Zirconia without inflated metro rents.' },
  { title: 'Dedicated Chief Specialist Time', desc: 'Your care is personally performed by senior specialists, never delegated to junior trainees.' }
];

export default function DentalTourism() {
  const [activeTab, setActiveTab] = useState('treatments');

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hello Shubh Dental Clinic! I am an NRI / International patient and would like to schedule a Virtual Video Consultation.'
  );

  return (
    <main className="dt-page-wrapper">
      <div className="dt-container">
        
        {/* ── 01. HERO STAGE ──────────────────────────────────────────────── */}
        <motion.section 
          className="dt-hero-card"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="dt-hero-badges-row">
            <span className="dt-hero-badge">
              <Plane size={13} aria-hidden="true" />
              <span>Global Dental Tourism &amp; NRI Care</span>
            </span>
            <span className="dt-verified-badge">
              <ShieldCheck size={13} fill="#10B981" color="#fff" aria-hidden="true" />
              <span>PGI Specialists · US &amp; Swiss Materials</span>
            </span>
          </div>

          <h1 className="dt-hero-title font-heading">
            World-Class Dentistry, <br />
            <span className="gold-text">Closer to Home.</span>
          </h1>

          <p className="dt-hero-subtitle">
            For our NRI and overseas patients: Experience <strong>PGI-tier clinical excellence</strong>, <strong>genuine FDA-approved international materials</strong>, and <strong>priority travel scheduling</strong> at a <strong>fraction of global healthcare costs</strong>.
          </p>

          <div className="dt-hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-dt-primary">
              <Video size={17} aria-hidden="true" />
              <span>Schedule WhatsApp / Zoom Consult</span>
            </a>
            
            <a href="tel:+918685048414" className="btn-dt-call">
              <Phone size={16} aria-hidden="true" />
              <span>Call: +91 86850 48414</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="dt-stats-grid">
            {STATS.map((s, idx) => (
              <div key={idx} className="dt-stat-item">
                <span className="dt-stat-icon">{s.icon}</span>
                <div className="dt-stat-info">
                  <strong className="dt-stat-val">{s.val}</strong>
                  <span className="dt-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 02. INTERACTIVE CONTENT HUB (MOBILE-COMPACT) ────────────────── */}
        <section className="dt-interactive-hub">
          <div className="dt-hub-tabs-nav" role="tablist">
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'treatments'}
              className={`dt-tab-btn ${activeTab === 'treatments' ? 'dt-tab--active' : ''}`}
              onClick={() => setActiveTab('treatments')}
            >
              <span>⚡ Fast-Track Treatments</span>
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'journey'}
              className={`dt-tab-btn ${activeTab === 'journey' ? 'dt-tab--active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              <span>🗺️ 4-Stage NRI Journey</span>
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'advantage'}
              className={`dt-tab-btn ${activeTab === 'advantage' ? 'dt-tab--active' : ''}`}
              onClick={() => setActiveTab('advantage')}
            >
              <span>💎 Why Rohtak vs Delhi</span>
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'logistics'}
              className={`dt-tab-btn ${activeTab === 'logistics' ? 'dt-tab--active' : ''}`}
              onClick={() => setActiveTab('logistics')}
            >
              <span>✈️ Airport &amp; Route</span>
            </button>
          </div>

          <div className="dt-hub-content-stage">
            <AnimatePresence mode="wait">
              {/* TAB 1: POPULAR TREATMENTS */}
              {activeTab === 'treatments' && (
                <motion.div 
                  key="treatments"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="dt-tab-panel"
                >
                  <div className="dt-panel-header">
                    <span className="dt-panel-eyebrow">Travel-Optimized Care</span>
                    <h2 className="dt-panel-title font-heading">Most Requested Procedures by Overseas Patients</h2>
                    <p className="dt-panel-desc">All procedures are pre-planned via 3D digital telemetry before your flight to minimize clinical chair time in India.</p>
                  </div>

                  <div className="dt-treatments-grid">
                    {TREATMENTS.map((t, idx) => (
                      <div key={idx} className="dt-treatment-card">
                        <div className="dt-t-card-top">
                          <span className="dt-t-icon">{t.icon}</span>
                          <span className="dt-t-time">⏱️ {t.time}</span>
                        </div>
                        <h3 className="dt-t-title font-heading">{t.title}</h3>
                        <p className="dt-t-desc">{t.desc}</p>
                        <div className="dt-t-footer">
                          <span className="dt-t-badge">{t.badge}</span>
                          <Link href={t.link} className="dt-t-link">
                            <span>Explore Details</span>
                            <ArrowRight size={14} aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 2: YOUR 4-STAGE JOURNEY */}
              {activeTab === 'journey' && (
                <motion.div 
                  key="journey"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="dt-tab-panel"
                >
                  <div className="dt-panel-header">
                    <span className="dt-panel-eyebrow">Zero-Friction Logistics</span>
                    <h2 className="dt-panel-title font-heading">Your Step-by-Step Treatment Journey</h2>
                    <p className="dt-panel-desc">From initial online consultation to flying back home with a healthy, confident smile.</p>
                  </div>

                  <div className="dt-journey-grid">
                    {JOURNEY_STEPS.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <div key={idx} className="dt-journey-card">
                          <div className="dt-j-top">
                            <span className="dt-j-num">{s.step}</span>
                            <span className="dt-j-highlight">{s.highlight}</span>
                          </div>
                          <h3 className="dt-j-title font-heading">
                            <Icon size={18} className="dt-j-icon" aria-hidden="true" />
                            <span>{s.title}</span>
                          </h3>
                          <p className="dt-j-desc">{s.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: WHY ROHTAK vs DELHI */}
              {activeTab === 'advantage' && (
                <motion.div 
                  key="advantage"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="dt-tab-panel"
                >
                  <div className="dt-panel-header">
                    <span className="dt-panel-eyebrow">The Smart Choice</span>
                    <h2 className="dt-panel-title font-heading">Why Choose Rohtak Over Crowded Metro Clinics?</h2>
                    <p className="dt-panel-desc">As the medical capital of Haryana (home to PGI), Rohtak provides elite clinical leadership without metro chaos.</p>
                  </div>

                  <div className="dt-why-grid">
                    {WHY_ROHTAK.map((item, idx) => (
                      <div key={idx} className="dt-why-card">
                        <CheckCircle size={20} className="dt-why-icon" aria-hidden="true" />
                        <div>
                          <h3 className="dt-why-title">{item.title}</h3>
                          <p className="dt-why-desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: AIRPORT & LOGISTICS */}
              {activeTab === 'logistics' && (
                <motion.div 
                  key="logistics"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="dt-tab-panel"
                >
                  <div className="dt-panel-header">
                    <span className="dt-panel-eyebrow">Expressway Connectivity</span>
                    <h2 className="dt-panel-title font-heading">Direct Drive from Delhi IGI Airport (T3)</h2>
                    <p className="dt-panel-desc">Landing at Indira Gandhi International Airport? You are just 85 km of modern expressway driving away.</p>
                  </div>

                  <div className="dt-logistics-grid">
                    <div className="dt-log-card">
                      <div className="dt-log-icon">🚗</div>
                      <h3 className="dt-log-title">Direct NH9 Expressway</h3>
                      <p className="dt-log-desc">Straight highway route avoiding inner Delhi traffic bottlenecks entirely.</p>
                    </div>

                    <div className="dt-log-card">
                      <div className="dt-log-icon">⏱️</div>
                      <h3 className="dt-log-title">80–90 Minute Drive</h3>
                      <p className="dt-log-desc">Smooth, uninterrupted journey directly to our clinic doorstep at Delhi Bypass Chowk.</p>
                    </div>

                    <div className="dt-log-card">
                      <div className="dt-log-icon">🏨</div>
                      <h3 className="dt-log-title">Hotel &amp; Concierge Support</h3>
                      <p className="dt-log-desc">We recommend and help coordinate comfortable hotel stays within 5 minutes of the clinic.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── 03. SPECIALIST CREDENTIALS BANNER ───────────────────────────── */}
        <section className="dt-credentials-card">
          <div className="dt-cred-inner">
            <div className="dt-cred-photo-wrap">
              <Image 
                src="/dr-sk-yadav.webp" 
                alt="Prof. Dr. S. K. Yadav" 
                width={80} 
                height={80} 
                className="dt-cred-img" 
              />
            </div>
            <div className="dt-cred-info">
              <span className="dt-cred-badge">Chief Orthodontic &amp; Implant Specialist</span>
              <h3 className="dt-cred-name font-heading">Prof. Dr. S. K. Yadav</h3>
              <p className="dt-cred-degree">BDS, MDS (Orthodontics — Ex-PGI Chandigarh) · Fellow WFO (USA)</p>
              <p className="dt-cred-text">
                Over 30+ years of clinical excellence treating overseas patients from North America, Europe, Australia, and the Middle East with globally certified protocols.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* ── 04. EMBEDDED SMART BOOKING ────────────────────────────────────── */}
      <div id="consult" className="dt-booking-outer">
        <SmartBooking />
      </div>

      {/* ── LUXURY RESPONSIVE STYLES ──────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .dt-page-wrapper {
          min-height: 100vh;
          padding: 2.5rem 1.5rem 5rem;
          background: #FAF8F5;
          color: #2D2420;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .dt-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HERO STAGE ──────────────────────────────── */
        .dt-hero-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border-radius: 28px;
          padding: 3rem 2.5rem;
          color: #FFFFFF;
          box-shadow: 0 25px 60px rgba(17, 8, 5, 0.22);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }
        .dt-hero-card::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(214,122,65,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .dt-hero-badges-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .dt-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.22);
          color: #F4B382;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }

        .dt-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .dt-hero-title {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .gold-text {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dt-hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 920px;
        }
        .dt-hero-subtitle strong {
          color: #F4B382;
        }

        .dt-hero-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .btn-dt-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.75rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
        }
        .btn-dt-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(214, 122, 65, 0.5);
        }

        .btn-dt-call {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.85rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-dt-call:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* STATS GRID */
        .dt-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .dt-stat-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dt-stat-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .dt-stat-info {
          display: flex;
          flex-direction: column;
        }
        .dt-stat-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #F4B382;
          line-height: 1.2;
        }
        .dt-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
        }

        /* ── 02. INTERACTIVE CONTENT HUB ──────────────── */
        .dt-interactive-hub {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 28px;
          padding: 2.25rem;
          margin-bottom: 2rem;
          box-shadow: 0 6px 24px rgba(74, 37, 24, 0.04);
          width: 100%;
          box-sizing: border-box;
        }

        .dt-hub-tabs-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FAF8F5;
          padding: 0.45rem;
          border-radius: 16px;
          border: 1px solid rgba(214, 122, 65, 0.15);
          margin-bottom: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .dt-hub-tabs-nav::-webkit-scrollbar { display: none; }

        .dt-tab-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: none;
          background: transparent;
          font-size: 0.88rem;
          font-weight: 700;
          color: #6E5B52;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .dt-tab-btn:hover {
          color: #D67A41;
        }
        .dt-tab--active {
          background: #FFFFFF !important;
          color: #110805 !important;
          font-weight: 800 !important;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.08);
        }

        .dt-panel-header {
          margin-bottom: 1.75rem;
        }
        .dt-panel-eyebrow {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #D67A41;
          display: block;
          margin-bottom: 0.35rem;
        }
        .dt-panel-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.5rem;
        }
        .dt-panel-desc {
          font-size: 0.94rem;
          color: #6E5B52;
          line-height: 1.6;
          margin: 0;
        }

        /* TREATMENTS GRID */
        .dt-treatments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .dt-treatment-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
        }
        .dt-treatment-card:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 122, 65, 0.35);
          box-shadow: 0 10px 25px rgba(74, 37, 24, 0.05);
        }
        .dt-t-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .dt-t-icon {
          font-size: 1.4rem;
        }
        .dt-t-time {
          background: rgba(214, 122, 65, 0.12);
          color: #B85D26;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .dt-t-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.4rem;
        }
        .dt-t-desc {
          font-size: 0.88rem;
          color: #554A44;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .dt-t-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.2);
        }
        .dt-t-badge {
          font-size: 0.74rem;
          font-weight: 700;
          color: #8A7063;
        }
        .dt-t-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #D67A41;
          font-weight: 800;
          font-size: 0.82rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .dt-t-link:hover {
          color: #110805;
        }

        /* JOURNEY GRID */
        .dt-journey-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .dt-journey-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.6rem;
        }
        .dt-j-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .dt-j-num {
          font-size: 1.2rem;
          font-weight: 900;
          color: #D67A41;
        }
        .dt-j-highlight {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
        }
        .dt-j-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.45rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .dt-j-icon {
          color: #D67A41;
          flex-shrink: 0;
        }
        .dt-j-desc {
          font-size: 0.88rem;
          color: #554A44;
          line-height: 1.6;
          margin: 0;
        }

        /* WHY ROHTAK GRID */
        .dt-why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .dt-why-card {
          display: flex;
          align-items: flex-start;
          gap: 0.95rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.5rem;
        }
        .dt-why-icon {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .dt-why-title {
          font-size: 1rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.35rem;
        }
        .dt-why-desc {
          font-size: 0.88rem;
          color: #554A44;
          line-height: 1.6;
          margin: 0;
        }

        /* LOGISTICS GRID */
        .dt-logistics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .dt-log-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.6rem;
          text-align: center;
        }
        .dt-log-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .dt-log-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.4rem;
        }
        .dt-log-desc {
          font-size: 0.86rem;
          color: #554A44;
          line-height: 1.6;
          margin: 0;
        }

        /* ── 03. CREDENTIALS CARD ────────────────────── */
        .dt-credentials-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 28px;
          padding: 2.25rem;
          color: #FFFFFF;
          margin-bottom: 2.5rem;
          box-sizing: border-box;
          width: 100%;
        }
        .dt-cred-inner {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .dt-cred-photo-wrap {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid #D67A41;
          flex-shrink: 0;
        }
        .dt-cred-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .dt-cred-badge {
          display: inline-block;
          background: rgba(214, 122, 65, 0.2);
          color: #F4B382;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
          margin-bottom: 0.35rem;
        }
        .dt-cred-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.15rem;
        }
        .dt-cred-degree {
          font-size: 0.85rem;
          color: #F4B382;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .dt-cred-text {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin: 0;
        }

        /* ── 04. BOOKING EMBED ───────────────────────── */
        .dt-booking-outer {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }
        .dt-booking-outer .smart-booking-section {
          padding: 0 !important;
          background: transparent !important;
        }
        .dt-booking-outer .smart-booking-container {
          max-width: 100% !important;
          padding: 0 !important;
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 1024px) {
          .dt-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .dt-logistics-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .dt-page-wrapper {
            padding: 1.25rem 0.85rem 5rem;
          }
          .dt-hero-card {
            padding: 1.75rem 1.25rem;
            border-radius: 20px;
          }
          .dt-hero-title {
            font-size: 1.85rem;
          }
          .dt-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-dt-primary, .btn-dt-call {
            width: 100%;
            justify-content: center;
          }
          .dt-stats-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .dt-interactive-hub {
            padding: 1.35rem 1rem;
            border-radius: 20px;
          }
          .dt-treatments-grid {
            grid-template-columns: 1fr;
          }
          .dt-journey-grid {
            grid-template-columns: 1fr;
          }
          .dt-why-grid {
            grid-template-columns: 1fr;
          }
          .dt-cred-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}} />
    </main>
  );
}
