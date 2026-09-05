'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Globe, CreditCard, Plane, PhoneCall, Sparkles, 
  Clock, ShieldCheck, ArrowRight, CheckCircle2, Video, 
  BadgePercent, Calendar, Compass, ArrowUpRight, Check, Star
} from 'lucide-react';

const GLOBAL_COUNTRIES = [
  { flag: '🇺🇸', name: 'USA', label: 'United States' },
  { flag: '🇬🇧', name: 'UK', label: 'United Kingdom' },
  { flag: '🇦🇪', name: 'UAE', label: 'Dubai & Gulf' },
  { flag: '🇨🇦', name: 'Canada', label: 'Canada' },
  { flag: '🇦🇺', name: 'Australia', label: 'Australia' },
  { flag: '🇪🇺', name: 'Europe', label: 'Germany & EU' },
];

const STATS = [
  { val: '18+', label: 'Countries Served', sub: 'Global NRI Trust', Icon: Globe, badgeType: 'copper' },
  { val: '70–80%', label: 'Cost Savings', sub: 'vs USA, UK & Australia', Icon: BadgePercent, badgeType: 'gold' },
  { val: '24–72h', label: 'Express Implants', sub: 'Same-Day Fixed Teeth', Icon: Clock, badgeType: 'green' },
  { val: '6 Centres', label: 'NCR & Haryana', sub: 'Rohtak HQ + 5 Hubs', Icon: MapPin, badgeType: 'copper' },
];

const NRI_WORKFLOW_STEPS = [
  {
    num: '01',
    title: 'Free Virtual 3D Video Consult',
    desc: 'Share your OPG X-rays or digital photos. Dr. S. K. Yadav conducts a 1-on-1 video call to finalize your transparent digital treatment plan and exact schedule before you book flights.',
    icon: Video,
    tag: 'Pre-Travel Planning'
  },
  {
    num: '02',
    title: 'Priority Airport & Fast-Track Arrival',
    desc: 'Delhi IGI Airport is just ~75 mins away via the seamless Rohtak-Delhi Express Corridor. Pre-arranged priority slots ensure zero waiting room delay upon your arrival.',
    icon: Plane,
    tag: 'Zero Waiting Time'
  },
  {
    num: '03',
    title: 'Same-Day 3D Guided Treatment',
    desc: 'Using genuine Korean Osstem® implants, US Invisalign® & in-house SkyAlign™ 3D scanning, complex implants and aligners are completed in record chair time with surgical precision.',
    icon: ShieldCheck,
    tag: 'FDA-Approved Tech'
  },
  {
    num: '04',
    title: 'Permanent Warranty & Tele-Followup',
    desc: 'Receive official manufacturer warranty passports (up to Lifetime on Implants / 10-Yr on Zirconia) and seamless digital tele-reviews once you return home safely.',
    icon: CheckCircle2,
    tag: 'Global Aftercare'
  }
];

const COST_COMPARISON = [
  {
    treatment: 'Korean Osstem® Dental Implant (Per Tooth)',
    usUkPrice: '$3,500 – $5,000 (₹3.5L – ₹5L)',
    shubhPrice: '₹35,000 – ₹55,000 ($420 – $660)',
    savings: 'Save ~85%'
  },
  {
    treatment: 'Full Mouth Same-Day Fixed Teeth (All-on-4/6)',
    usUkPrice: '$25,000 – $40,000 (₹25L – ₹40L)',
    shubhPrice: '₹2,50,000 – ₹4,50,000 ($3,000 – $5,400)',
    savings: 'Save ~80%'
  },
  {
    treatment: 'Invisalign® & SkyAlign™ Clear Aligners',
    usUkPrice: '$5,000 – $8,000 (₹4.5L – ₹7L)',
    shubhPrice: '₹65,000 – ₹1,80,000 ($780 – $2,150)',
    savings: 'Save ~75%'
  },
  {
    treatment: 'Full Arch Porcelain / Zirconia Veneers (Per Tooth)',
    usUkPrice: '$1,200 – $2,500 (₹1.2L – ₹2.5L)',
    shubhPrice: '₹8,000 – ₹16,000 ($95 – $190)',
    savings: 'Save ~85%'
  }
];

const CENTRES = [
  { city: 'Rohtak', area: 'Delhi Bypass Rd', tag: 'Super-Specialty HQ', isMain: true },
  { city: 'Delhi', area: 'Rohini Sec 9', tag: 'NCR Visiting' },
  { city: 'Gurugram', area: 'Malibu Town Sec 47', tag: 'NCR Visiting' },
  { city: 'Panipat', area: 'Model Town', tag: 'Haryana Visiting' },
  { city: 'Sonepat', area: 'Prabhu Nagar', tag: 'Haryana Visiting' },
  { city: 'Fatehabad', area: 'Model Town', tag: 'Haryana Visiting' },
];

export default function DentalTourism() {
  const [activeTab, setActiveTab] = useState('workflow'); // 'workflow' | 'cost'

  return (
    <section 
      id="tourism" 
      className="dt-luxury-root" 
      aria-label="Global Dental Tourism & NRI Care"
    >
      <div id="dental-tourism" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />

      {/* Ambient background illumination */}
      <div className="dt-glow-orb dt-glow-orb--top" aria-hidden="true" />
      <div className="dt-glow-orb dt-glow-orb--bottom" aria-hidden="true" />

      <div className="dt-container" style={{ position: 'relative', zIndex: 3, width: '100%', boxSizing: 'border-box' }}>

        {/* ── HEADER ── */}
        <div className="dt-header text-center">
          
          <div className="dt-pill-badge">
            <Plane size={13} className="dt-plane-pulse" aria-hidden="true" />
            <span>GLOBAL DENTAL TOURISM &amp; NRI CONCIERGE</span>
          </div>

          <h2 className="dt-heading font-heading">
            World-Class Care,{' '}
            <span className="copper-gradient-heading">Just a Flight Away</span>
          </h2>

          <p className="dt-subheading">
            Trusted by NRI &amp; international patients across 18+ countries for Ex-PGI Senior Specialist implants, aligners, and full smile makeovers at a fraction of global healthcare costs.
          </p>

          {/* Global Origin Countries Ribbon */}
          <div className="dt-flags-bar" aria-label="International Patients Origin Hubs">
            <span className="dt-flags-label">Welcoming Patients From:</span>
            <div className="dt-flags-list">
              {GLOBAL_COUNTRIES.map((c, idx) => (
                <div key={idx} className="dt-flag-pill" title={`Patients from ${c.label}`}>
                  <span className="dt-flag-emoji">{c.flag}</span>
                  <span className="dt-flag-name">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4 COMPACT LUXURY METRIC TILES ── */}
        <div className="dt-stats-grid">
          {STATS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <div key={i} className="dt-stat-card">
                <div className={`dt-stat-icon-wrap dt-icon-${s.badgeType}`}>
                  <Icon size={18} />
                </div>
                <div className="dt-stat-content">
                  <div className="dt-stat-val">{s.val}</div>
                  <div className="dt-stat-label">{s.label}</div>
                  <div className="dt-stat-sub">{s.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── INTERACTIVE TAB SELECTOR: WORKFLOW vs COST ADVANTAGE ── */}
        <div className="dt-tab-nav-wrapper">
          <div className="dt-tab-nav">
            <button
              type="button"
              onClick={() => setActiveTab('workflow')}
              className={`dt-tab-btn ${activeTab === 'workflow' ? 'dt-tab-btn--active' : ''}`}
            >
              <Compass size={15} />
              <span>4-Step Seamless NRI Journey</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cost')}
              className={`dt-tab-btn ${activeTab === 'cost' ? 'dt-tab-btn--active' : ''}`}
            >
              <BadgePercent size={15} />
              <span>Global Cost Advantage &amp; Savings Matrix</span>
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT ── */}
        <div className="dt-tab-content-panel">
          {activeTab === 'workflow' ? (
            /* WORKFLOW TAB: 4-Step Visual Journey */
            <div className="dt-workflow-grid">
              {NRI_WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="dt-workflow-card">
                    <div className="dt-step-top">
                      <span className="dt-step-num">{step.num}</span>
                      <span className="dt-step-tag">{step.tag}</span>
                    </div>

                    <div className="dt-step-body">
                      <div className="dt-step-icon-box">
                        <Icon size={20} />
                      </div>
                      <h3 className="dt-step-title font-heading">{step.title}</h3>
                      <p className="dt-step-desc">{step.desc}</p>
                    </div>

                    <div className="dt-step-glow" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* COST SAVINGS TAB: Transparent Global Matrix */
            <div className="dt-cost-matrix-wrapper">
              <div className="dt-cost-matrix-intro">
                <div className="dt-cost-intro-title">
                  <BadgeCheck size={16} />
                  <span>Transparent Cross-Border Cost Comparison</span>
                </div>
                <p className="dt-cost-intro-desc">
                  Save 70% to 80% on clinical dental procedures compared to the US, UK, Canada &amp; Australia with identical FDA/CE-cleared implants &amp; biomaterials.
                </p>
              </div>

              <div className="dt-cost-table">
                <div className="dt-cost-row dt-cost-row--header">
                  <div>Procedure / Treatment</div>
                  <div>US / UK / Intl Avg</div>
                  <div>Shubh Dental Rohtak</div>
                  <div style={{ textAlign: 'right' }}>Your Advantage</div>
                </div>

                {COST_COMPARISON.map((row, i) => (
                  <div key={i} className="dt-cost-row">
                    <div className="dt-col dt-col-proc">{row.treatment}</div>
                    <div className="dt-col dt-col-intl">
                      <span className="dt-price-strike">{row.usUkPrice}</span>
                    </div>
                    <div className="dt-col dt-col-shubh">
                      <span className="dt-price-highlight">{row.shubhPrice}</span>
                    </div>
                    <div className="dt-col dt-col-save">
                      <span className="dt-save-badge">{row.savings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── VISITING CENTRES NETWORK STRIP (CLEAN STACKED CARDS) ── */}
        <div className="dt-centres-strip-card">
          <div className="dt-centres-strip-top">
            <div className="dt-centres-strip-left">
              <div className="dt-centres-icon-box">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="dt-centres-strip-title font-heading">
                  Seamless Regional Care: 6 Strategic Centres in NCR &amp; Haryana
                </h4>
                <p className="dt-centres-strip-desc">
                  Fly into Delhi IGI Airport and consult at our Delhi/Gurugram hubs or visit our flagship Rohtak Super-Specialty Hospital.
                </p>
              </div>
            </div>

            <Link href="/visiting-centres" className="dt-centres-view-btn">
              <span>View Addresses &amp; Maps</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="dt-centres-grid">
            {CENTRES.map((c, i) => (
              <Link 
                key={i} 
                href="/visiting-centres"
                className={`dt-centre-tile ${c.isMain ? 'dt-centre-tile--main' : ''}`}
                aria-label={`View clinical schedule for ${c.city}`}
              >
                <div className="dt-tile-header">
                  <div className="dt-tile-city-wrap">
                    <div className={`dt-tile-pin ${c.isMain ? 'dt-tile-pin--main' : ''}`}>
                      <MapPin size={12} />
                    </div>
                    <span className="dt-tile-city">{c.city}</span>
                  </div>
                  <span className={`dt-tile-badge ${c.isMain ? 'dt-tile-badge--main' : ''}`}>
                    {c.tag}
                  </span>
                </div>
                <span className="dt-tile-area">{c.area}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dt-luxury-root {
          background: #FAF8F5;
          padding: 3.5rem 0 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .dt-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .dt-glow-orb--top {
          top: -8%;
          right: -5%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.12) 0%, transparent 70%);
        }
        .dt-glow-orb--bottom {
          bottom: -10%;
          left: -5%;
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.10) 0%, transparent 70%);
        }

        /* ── HEADER ── */
        .dt-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 1.25rem;
        }

        .dt-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.12);
          color: #9A4616;
          padding: 0.3rem 0.9rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.28);
          margin-bottom: 0.5rem;
        }

        .dt-plane-pulse {
          color: #D67A41;
          animation: dtPlaneFly 3s ease-in-out infinite alternate;
        }
        @keyframes dtPlaneFly {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-3px) rotate(8deg); }
        }

        .dt-heading {
          font-size: clamp(1.85rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #0E0604;
          line-height: 1.18;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .copper-gradient-heading {
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dt-subheading {
          font-size: 0.92rem;
          color: #5A3E33;
          line-height: 1.55;
          max-width: 720px;
          margin: 0 auto 0.9rem;
        }

        /* FLAGS BAR (3 ABOVE, 3 DOWN SYMMETRIC GRID) */
        .dt-flags-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.92);
          padding: 0.55rem 1.15rem;
          border-radius: 20px;
          border: 1px solid rgba(214, 122, 65, 0.22);
          box-shadow: 0 4px 16px rgba(74, 37, 24, 0.05);
          max-width: 440px;
          margin: 0 auto 1.15rem;
        }

        .dt-flags-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #7A340F;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dt-flags-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.35rem;
          width: 100%;
        }

        .dt-flag-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.12);
          padding: 0.22rem 0.5rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38241C;
          transition: all 0.2s ease;
        }
        .dt-flag-pill:hover {
          background: #FFF5EE;
          border-color: #D67A41;
          color: #9A4616;
        }

        /* ── STATS GRID (COMPACT & DARK LUXURY CARDS) ── */
        .dt-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .dt-stat-card {
          background: linear-gradient(145deg, #170C08 0%, #0F0604 100%);
          border-radius: 16px;
          padding: 0.85rem 1rem;
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22), 0 0 14px rgba(214, 122, 65, 0.06);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dt-stat-card:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35), 0 0 18px rgba(214, 122, 65, 0.16);
        }

        .dt-stat-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dt-icon-copper {
          background: rgba(214, 122, 65, 0.18);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }
        .dt-icon-gold {
          background: rgba(245, 158, 11, 0.18);
          color: #FBBF24;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }
        .dt-icon-green {
          background: rgba(16, 185, 129, 0.18);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .dt-stat-content {
          display: flex;
          flex-direction: column;
        }

        .dt-stat-val {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1.1;
        }

        .dt-stat-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .dt-stat-sub {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.65);
        }

        /* ── TAB NAV ── */
        .dt-tab-nav-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .dt-tab-nav {
          display: inline-flex;
          background: rgba(74, 37, 24, 0.07);
          padding: 0.3rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.18);
          gap: 0.3rem;
        }

        .dt-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.15rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          font-size: 0.8rem;
          font-weight: 700;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .dt-tab-btn--active {
          background: #FFFFFF;
          color: #7A340F;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.1);
        }

        /* ── TAB CONTENT PANEL ── */
        .dt-tab-content-panel {
          margin-bottom: 1.5rem;
        }

        /* 1. WORKFLOW GRID */
        .dt-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .dt-workflow-card {
          background: linear-gradient(145deg, #170C08 0%, #0F0604 100%);
          border-radius: 18px;
          padding: 1.25rem 1.15rem;
          border: 1.5px solid rgba(214, 122, 65, 0.24);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dt-workflow-card:hover {
          transform: translateY(-3px);
          border-color: #D67A41;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 0 16px rgba(214, 122, 65, 0.15);
        }

        .dt-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .dt-step-num {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1;
        }

        .dt-step-tag {
          font-size: 0.62rem;
          font-weight: 800;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #F4B382;
          padding: 0.15rem 0.45rem;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .dt-step-body {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .dt-step-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.15);
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.35rem;
          border: 1px solid rgba(214, 122, 65, 0.3);
        }

        .dt-step-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          margin: 0;
        }

        .dt-step-desc {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.45;
          margin: 0;
        }

        /* 2. COST MATRIX */
        .dt-cost-matrix-wrapper {
          background: linear-gradient(145deg, #170C08 0%, #0F0604 100%);
          border-radius: 20px;
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          padding: 1.35rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .dt-cost-matrix-intro {
          margin-bottom: 1.15rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.2);
        }

        .dt-cost-intro-title {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 800;
          color: #F4B382;
          margin-bottom: 0.35rem;
        }

        .dt-cost-intro-desc {
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
          margin: 0;
        }

        .dt-cost-table {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .dt-cost-row {
          display: grid;
          grid-template-columns: 2fr 1.3fr 1.5fr 1.1fr;
          align-items: center;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.15);
          font-size: 0.8rem;
        }

        .dt-cost-row--header {
          background: rgba(214, 122, 65, 0.15);
          border-color: rgba(214, 122, 65, 0.3);
          font-weight: 800;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #F4B382;
        }

        .dt-col-proc { color: #FFFFFF; font-weight: 700; }
        .dt-price-strike {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.76rem;
        }
        .dt-price-highlight {
          color: #F4B382;
          font-weight: 800;
        }
        .dt-save-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.15);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
        }

        /* ── VISITING CENTRES NETWORK STRIP (DARK LUXURY CARD) ── */
        .dt-centres-strip-card {
          background: linear-gradient(145deg, #170C08 0%, #0E0503 100%);
          border-radius: 20px;
          border: 1.5px solid rgba(214, 122, 65, 0.32);
          padding: 1.25rem 1.35rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28), 0 0 20px rgba(214, 122, 65, 0.08);
        }

        .dt-centres-strip-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .dt-centres-strip-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dt-centres-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.18);
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }

        .dt-centres-strip-title {
          font-size: 0.94rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 0.15rem;
          line-height: 1.25;
        }

        .dt-centres-strip-desc {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          line-height: 1.4;
        }

        .dt-centres-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          border: none;
          padding: 0.45rem 0.95rem;
          border-radius: 99px;
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.22s ease;
          flex-shrink: 0;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.3);
        }

        .dt-centres-view-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.45);
          color: #FFFFFF;
        }

        /* Symmetric 3-column / 2-column Grid */
        .dt-centres-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          width: 100%;
          box-sizing: border-box;
        }

        .dt-centre-tile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 12px;
          padding: 0.65rem 0.85rem;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          min-width: 0;
          overflow: hidden;
        }

        .dt-centre-tile:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .dt-centre-tile--main {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.25) 0%, rgba(184, 93, 38, 0.12) 100%);
          border: 1.5px solid #D67A41;
          box-shadow: 0 2px 10px rgba(214, 122, 65, 0.15);
        }

        .dt-tile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.35rem;
          width: 100%;
        }

        .dt-tile-city-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          min-width: 0;
        }

        .dt-tile-pin {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: rgba(214, 122, 65, 0.18);
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dt-tile-pin--main {
          background: #D67A41;
          color: #FFFFFF;
        }

        .dt-tile-city {
          font-family: var(--font-heading);
          font-size: 0.84rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          white-space: nowrap;
        }

        .dt-tile-area {
          font-size: 0.66rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.2;
          padding-left: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dt-tile-badge {
          font-size: 0.58rem;
          font-weight: 800;
          color: #F4B382;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.1rem 0.4rem;
          border-radius: 99px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .dt-tile-badge--main {
          background: #D67A41;
          color: #FFFFFF;
          border: none;
        }

        /* ── RESPONSIVE BREAKPOINTS (MOBILE OPTIMIZED & COMPACT) ── */
        @media (max-width: 1024px) {
          .dt-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dt-workflow-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dt-luxury-root {
            padding: 1.15rem 0.85rem 1.45rem;
          }
          .dt-header {
            margin-bottom: 0.95rem;
          }
          .dt-heading {
            font-size: 1.55rem;
            margin-bottom: 0.4rem;
          }
          .dt-subheading {
            font-size: 0.82rem;
            line-height: 1.45;
            margin-bottom: 0.75rem;
          }
          .dt-flags-bar {
            padding: 0.45rem 0.65rem;
            gap: 0.35rem;
            margin-bottom: 0.85rem;
            max-width: 360px;
            border-radius: 16px;
          }
          .dt-flags-label {
            font-size: 0.66rem;
          }
          .dt-flags-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.25rem;
            width: 100%;
          }
          .dt-flag-pill {
            font-size: 0.64rem;
            padding: 0.18rem 0.25rem;
            gap: 0.2rem;
          }

          /* Hide NRI workflow / cost tab cards on mobile */
          .dt-tab-nav-wrapper,
          .dt-tab-content-panel {
            display: none !important;
          }

          /* Compact 2-column stats grid */
          .dt-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            margin-bottom: 0.85rem;
          }
          .dt-stat-card {
            padding: 0.65rem 0.75rem;
            border-radius: 14px;
            gap: 0.55rem;
          }
          .dt-stat-icon-wrap {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }
          .dt-stat-val {
            font-size: 1.15rem;
          }
          .dt-stat-label {
            font-size: 0.74rem;
          }
          .dt-stat-sub {
            font-size: 0.62rem;
          }

          /* Visiting Centres Card */
          .dt-centres-strip-card {
            padding: 1rem 0.95rem;
            border-radius: 18px;
            margin-top: 0.85rem;
          }
          .dt-centres-strip-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.85rem;
          }
          .dt-centres-strip-title {
            font-size: 0.88rem;
          }
          .dt-centres-strip-desc {
            font-size: 0.72rem;
          }
          .dt-centres-view-btn {
            width: 100%;
            justify-content: center;
            padding: 0.5rem 0.85rem;
            font-size: 0.75rem;
          }

          /* Compact 2-Column Visiting Centres Grid on Mobile (50% Height Reduction) */
          .dt-centres-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.4rem;
            width: 100%;
          }
          .dt-centre-tile {
            padding: 0.5rem 0.55rem;
            border-radius: 10px;
            gap: 0.2rem;
            min-height: 60px;
          }
          .dt-tile-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
            width: 100%;
          }
          .dt-tile-city-wrap {
            width: 100%;
            justify-content: flex-start;
            gap: 0.35rem;
          }
          .dt-tile-pin {
            width: 18px;
            height: 18px;
            border-radius: 4px;
          }
          .dt-tile-city {
            font-size: 0.78rem;
          }
          .dt-tile-area {
            padding-left: 0;
            font-size: 0.62rem;
            margin-top: 1px;
          }
          .dt-tile-badge {
            font-size: 0.54rem;
            padding: 0.08rem 0.35rem;
          }
        }

        @media (max-width: 480px) {
          .dt-luxury-root {
            padding: 1.5rem 0.65rem 1.35rem;
          }
          .dt-heading {
            font-size: 1.35rem;
          }
          .dt-stat-card {
            padding: 0.55rem 0.6rem;
          }
          .dt-stat-icon-wrap {
            width: 28px;
            height: 28px;
          }
          .dt-stat-val {
            font-size: 1rem;
          }
          .dt-stat-label {
            font-size: 0.68rem;
          }
          .dt-stat-sub {
            font-size: 0.56rem;
          }
          .dt-centres-strip-card {
            padding: 0.75rem 0.65rem;
          }
          .dt-centres-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.35rem;
          }
          .dt-centre-tile {
            padding: 0.45rem 0.45rem;
            min-height: 56px;
          }
          .dt-tile-city {
            font-size: 0.74rem;
          }
          .dt-tile-area {
            font-size: 0.58rem;
          }
          .dt-tile-badge {
            font-size: 0.5rem;
            padding: 0.06rem 0.28rem;
          }
        }
      `}} />
    </section>
  );
}
