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
    desc: 'Using Swiss Straumann® implants, US Invisalign® & in-house SkyAlign™ 3D scanning, complex implants and aligners are completed in record chair time with surgical precision.',
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
    treatment: 'Swiss Straumann® Dental Implant (Per Tooth)',
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

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>

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
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <span>Equal FDA-Approved European &amp; US Clinical Standards · 70–80% Genuine Price Advantage</span>
                </div>
                <p className="dt-cost-intro-desc">
                  Patients travel from the US, UK, and Gulf, enjoy a 5-star trip to India, complete entire implant or aligner rehabilitations, and still save thousands of dollars compared to domestic clinic quotes.
                </p>
              </div>

              <div className="dt-cost-table">
                <div className="dt-cost-row dt-cost-row--header">
                  <div className="dt-col dt-col-proc">Procedure</div>
                  <div className="dt-col dt-col-intl">US / UK / Gulf Clinic</div>
                  <div className="dt-col dt-col-shubh">Shubh Dental (PGI Specialist)</div>
                  <div className="dt-col dt-col-save">Net Savings</div>
                </div>

                {COST_COMPARISON.map((row, rIdx) => (
                  <div key={rIdx} className="dt-cost-row">
                    <div className="dt-col dt-col-proc">
                      <strong>{row.treatment}</strong>
                    </div>
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

        {/* ── VISITING CENTRES NETWORK STRIP (ORGANIZED 6-CENTRE GRID) ── */}
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
                <div className="dt-tile-left">
                  <div className={`dt-tile-pin ${c.isMain ? 'dt-tile-pin--main' : ''}`}>
                    <MapPin size={13} />
                  </div>
                  <div className="dt-tile-info">
                    <span className="dt-tile-city">{c.city}</span>
                    <span className="dt-tile-area">{c.area}</span>
                  </div>
                </div>

                <span className={`dt-tile-badge ${c.isMain ? 'dt-tile-badge--main' : ''}`}>
                  {c.tag}
                </span>
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
          max-width: 820px;
          margin: 0 auto 2.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dt-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.12);
          color: #9A4616;
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.28);
          margin-bottom: 1rem;
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
          font-size: clamp(2rem, 3.8vw, 2.85rem);
          font-weight: 900;
          color: #0E0604;
          line-height: 1.18;
          margin-bottom: 0.85rem;
          letter-spacing: -0.02em;
        }

        .copper-gradient-heading {
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dt-subheading {
          font-size: 0.96rem;
          color: #5A3E33;
          line-height: 1.65;
          max-width: 720px;
          margin: 0 auto 1.4rem;
        }

        /* FLAGS BAR */
        .dt-flags-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          padding: 0.4rem 1rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.18);
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
        }

        .dt-flags-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #7A340F;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .dt-flags-list {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .dt-flag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.1);
          padding: 0.18rem 0.55rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38241C;
        }

        /* ── STATS GRID ── */
        .dt-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.2rem;
        }

        .dt-stat-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 1.1rem 1.25rem;
          border: 1.5px solid rgba(214, 122, 65, 0.14);
          box-shadow: 0 4px 18px rgba(74, 37, 24, 0.04);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dt-stat-card:hover {
          transform: translateY(-3px);
          border-color: #D67A41;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.12);
        }

        .dt-stat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dt-icon-copper {
          background: rgba(214, 122, 65, 0.14);
          color: #9A4616;
          border: 1px solid rgba(214, 122, 65, 0.3);
        }
        .dt-icon-gold {
          background: rgba(245, 158, 11, 0.14);
          color: #B45309;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .dt-icon-green {
          background: rgba(16, 185, 129, 0.14);
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .dt-stat-content {
          display: flex;
          flex-direction: column;
        }

        .dt-stat-val {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          color: #0E0604;
          line-height: 1.1;
        }

        .dt-stat-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: #38241C;
        }

        .dt-stat-sub {
          font-size: 0.66rem;
          color: #7A5B4C;
        }

        /* ── TAB NAV ── */
        .dt-tab-nav-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .dt-tab-nav {
          display: inline-flex;
          background: rgba(74, 37, 24, 0.07);
          padding: 0.35rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.18);
          gap: 0.35rem;
        }

        .dt-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          font-size: 0.82rem;
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
          margin-bottom: 2.2rem;
        }

        /* 1. WORKFLOW GRID */
        .dt-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .dt-workflow-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 1.5rem 1.3rem;
          border: 1.5px solid rgba(214, 122, 65, 0.14);
          box-shadow: 0 6px 20px rgba(74, 37, 24, 0.04);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dt-workflow-card:hover {
          transform: translateY(-4px);
          border-color: #D67A41;
          box-shadow: 0 14px 30px rgba(214, 122, 65, 0.12);
        }

        .dt-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .dt-step-num {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          color: #D67A41;
          line-height: 1;
        }

        .dt-step-tag {
          font-size: 0.65rem;
          font-weight: 800;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.2);
          color: #7A340F;
          padding: 0.15rem 0.45rem;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .dt-step-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.14) 0%, rgba(201, 168, 76, 0.18) 100%);
          color: #9A4616;
          border: 1px solid rgba(214, 122, 65, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.85rem;
        }

        .dt-step-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .dt-step-desc {
          font-size: 0.78rem;
          color: #554A44;
          line-height: 1.55;
          margin: 0;
        }

        /* 2. COST SAVINGS MATRIX */
        .dt-cost-matrix-wrapper {
          background: #FFFFFF;
          border-radius: 22px;
          padding: 1.75rem;
          border: 1.5px solid rgba(214, 122, 65, 0.16);
          box-shadow: 0 8px 25px rgba(74, 37, 24, 0.05);
        }

        .dt-cost-matrix-intro {
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
        }

        .dt-cost-intro-title {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 800;
          color: #7A340F;
          margin-bottom: 0.35rem;
        }

        .dt-cost-intro-desc {
          font-size: 0.82rem;
          color: #554A44;
          margin: 0;
          line-height: 1.55;
        }

        .dt-cost-table {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .dt-cost-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr 1fr;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.07);
          gap: 0.75rem;
        }

        .dt-cost-row--header {
          background: #110805;
          color: #FFFFFF;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: none;
        }

        .dt-col-proc { font-size: 0.84rem; color: #110805; }
        .dt-col-intl { font-size: 0.8rem; color: #7A5B4C; }
        .dt-col-shubh { font-size: 0.85rem; font-weight: 800; color: #047857; }
        .dt-col-save { text-align: right; }

        .dt-price-strike {
          text-decoration: line-through;
          color: #9CA3AF;
        }

        .dt-price-highlight {
          color: #7A340F;
          font-weight: 800;
        }

        .dt-save-badge {
          background: #ECFDF5;
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          white-space: nowrap;
        }

        /* ── STRATEGIC CENTRES NETWORK STRIP (ORGANIZED 6-CARD GRID) ── */
        .dt-centres-strip-card {
          background: #FFFFFF;
          border-radius: 22px;
          padding: 1.4rem 1.6rem;
          border: 1.5px solid rgba(214, 122, 65, 0.18);
          box-shadow: 0 8px 24px rgba(74, 37, 24, 0.05);
          margin-bottom: 0;
        }

        .dt-centres-strip-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 1.15rem;
          flex-wrap: wrap;
        }

        .dt-centres-strip-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 260px;
        }

        .dt-centres-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.14);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(214, 122, 65, 0.28);
        }

        .dt-centres-strip-title {
          font-size: 0.96rem;
          font-weight: 800;
          color: #110805;
          margin: 0 0 0.15rem;
          line-height: 1.25;
        }

        .dt-centres-strip-desc {
          font-size: 0.74rem;
          color: #6E5448;
          margin: 0;
          line-height: 1.4;
        }

        .dt-centres-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.1);
          color: #9A4616;
          border: 1px solid rgba(214, 122, 65, 0.28);
          padding: 0.45rem 0.95rem;
          border-radius: 99px;
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.22s ease;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .dt-centres-view-btn:hover {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
        }

        /* Symmetric 3-column / 2-column Grid */
        .dt-centres-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }

        .dt-centre-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.1);
          border-radius: 12px;
          padding: 0.6rem 0.85rem;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          gap: 0.5rem;
        }

        .dt-centre-tile:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          background: #FFF9F4;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.12);
        }

        .dt-centre-tile--main {
          background: linear-gradient(135deg, #FFF6EE 0%, #FFEDE0 100%);
          border: 1.5px solid #D67A41;
          box-shadow: 0 2px 10px rgba(214, 122, 65, 0.1);
        }

        .dt-tile-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }

        .dt-tile-pin {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: rgba(214, 122, 65, 0.12);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dt-tile-pin--main {
          background: #D67A41;
          color: #FFFFFF;
        }

        .dt-tile-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .dt-tile-city {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 800;
          color: #110805;
          line-height: 1.2;
        }

        .dt-tile-area {
          font-size: 0.65rem;
          color: #7A5B4C;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dt-tile-badge {
          font-size: 0.6rem;
          font-weight: 800;
          color: #7A340F;
          background: rgba(214, 122, 65, 0.14);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .dt-tile-badge--main {
          background: #D67A41;
          color: #FFFFFF;
          border: none;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
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
            padding: 3rem 0;
          }
          .dt-heading {
            font-size: 1.85rem;
          }
          /* Hide NRI workflow / cost tab cards on mobile as requested */
          .dt-tab-nav-wrapper,
          .dt-tab-content-panel {
            display: none !important;
          }
          .dt-cost-row {
            grid-template-columns: 1fr;
            gap: 0.35rem;
          }
          .dt-cost-row--header {
            display: none;
          }
          .dt-col-save {
            text-align: left;
          }
          .dt-centres-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          .dt-centres-strip-card {
            padding: 1.15rem 1rem;
            border-radius: 18px;
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 580px) {
          .dt-stats-grid {
            grid-template-columns: 1fr;
          }
          .dt-workflow-grid {
            grid-template-columns: 1fr;
          }
          .dt-tab-nav {
            flex-direction: column;
            border-radius: 16px;
            width: 100%;
          }
          .dt-tab-btn {
            width: 100%;
            justify-content: center;
          }
          .dt-centres-grid {
            grid-template-columns: 1fr;
          }
          .dt-centres-view-btn {
            width: 100%;
            justify-content: center;
            padding: 0.55rem;
          }
        }
      `}} />
    </section>
  );
}
