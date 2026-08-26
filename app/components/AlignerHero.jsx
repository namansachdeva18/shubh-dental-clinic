'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const ALIGNER_RESULTS = [
  {
    id: 'case-crowding',
    label: 'Case 1 · Crowding',
    system: 'SkyAlign™ Clear Aligners',
    beforeSrc: '/case-1-before.webp',
    afterSrc: '/case-1-after.webp',
    duration: '9 Months'
  },
  {
    id: 'case-spacing',
    label: 'Case 2 · Spacing & Gaps',
    system: 'Invisalign® Clear Aligners',
    beforeSrc: '/front-before.webp',
    afterSrc: '/front-after.webp',
    duration: '7 Months'
  },
  {
    id: 'case-deepbite',
    label: 'Case 3 · Deep Bite',
    system: 'Full Arch Realignment',
    beforeSrc: '/fullarch-before.webp',
    afterSrc: '/fullarch-after.webp',
    duration: '12 Months'
  }
];

const WHY_CHOOSE_US_PERKS = [
  {
    icon: '✨',
    title: '100% Invisible & Removable',
    desc: 'No metal brackets or food restrictions. Eat, brush, and smile with zero self-consciousness.'
  },
  {
    icon: '🔬',
    title: 'Instant 3D Smile Simulation',
    desc: 'See a digital 3D video simulation of your teeth straightening before you even begin.'
  },
  {
    icon: '👨‍⚕️',
    title: 'Ex-PGI Orthodontist Supervision',
    desc: 'Planned directly by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, Fellow WFO USA, 5,000+ cases).'
  },
  {
    icon: '💳',
    title: 'Transparent 0% Interest EMI',
    desc: 'Affordable monthly financing with zero hidden costs, starting at just ₹45,000.'
  }
];

export default function AlignerHero() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = ALIGNER_RESULTS[activeCaseIdx];

  const handlePrev = () => {
    setActiveCaseIdx((prev) => (prev === 0 ? ALIGNER_RESULTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCaseIdx((prev) => (prev === ALIGNER_RESULTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="aligners" className="aligner-section-root" aria-label="Clear Aligners and Invisible Braces">
      <div id="braces" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />

      <div className="aligner-container">

        {/* HEADER */}
        <div className="aligner-compact-header">
          <div className="aligner-pill-badge">
            <Sparkles size={13} className="sparkle-icon" aria-hidden="true" />
            <span>Invisible Braces &amp; Clear Aligners</span>
          </div>

          <h2 className="aligner-title font-heading">
            Straighten Your Teeth <span className="copper-gradient">Without Braces or Wires</span>
          </h2>

          <p className="aligner-subtitle">
            Say goodbye to painful metal brackets. Get a discreet, comfortable smile makeover with custom clear aligners planned by <strong>Prof. Dr. S. K. Yadav (5,000+ smiles treated)</strong>.
          </p>
        </div>

        {/* 4 VALUE PILLARS */}
        <div className="aligner-perks-strip">
          {WHY_CHOOSE_US_PERKS.map((perk, idx) => (
            <div key={idx} className="perk-capsule">
              <div className="perk-capsule-icon">{perk.icon}</div>
              <div className="perk-capsule-body">
                <strong className="perk-capsule-title">{perk.title}</strong>
                <p className="perk-capsule-desc">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BEFORE / AFTER RESULT SLIDER SHOWCASE */}
        <div className="aligner-showcase-box">

          {/* SLIDER WRAPPER */}
          <div className="slider-stage-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="slider-centered-container"
              >
                <div className="slider-frame">
                  <BeforeAfterSlider
                    beforeSrc={activeCase.beforeSrc}
                    afterSrc={activeCase.afterSrc}
                    beforeAlt={`${activeCase.label} Before`}
                    afterAlt={`${activeCase.label} After`}
                  />

                  {/* Navigation Arrows */}
                  <button 
                    type="button" 
                    className="slider-nav-btn slider-nav-prev" 
                    onClick={handlePrev}
                    aria-label="Previous result"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button 
                    type="button" 
                    className="slider-nav-btn slider-nav-next" 
                    onClick={handleNext}
                    aria-label="Next result"
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div className="slider-instruction-tag">
                    <span>⟵ Drag slider to compare results ⟶</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .aligner-section-root {
          background: linear-gradient(180deg, #0D0705 0%, #170C08 100%);
          color: #FFFFFF;
          padding: 2.25rem 1.25rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .aligner-container {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── HEADER ──────────────────────────────────── */
        .aligner-compact-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 1.25rem;
        }

        .aligner-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.15);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.25rem 0.8rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .sparkle-icon { color: #D67A41; }

        .aligner-title {
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #EAA77C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aligner-subtitle {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.5;
          margin: 0 auto;
          max-width: 680px;
        }
        .aligner-subtitle strong { color: #F4B382; }

        /* ── 4 VALUE PILLARS (HIGH DENSITY CAPSULES) ── */
        .aligner-perks-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .perk-capsule {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 16px;
          padding: 0.75rem 0.85rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .perk-capsule:hover {
          transform: translateY(-2px);
          border-color: rgba(214, 122, 65, 0.4);
          background: rgba(255, 255, 255, 0.055);
        }

        .perk-capsule-icon {
          font-size: 1.15rem;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 2px;
        }
        .perk-capsule-body {
          flex: 1;
        }
        .perk-capsule-title {
          display: block;
          font-size: 0.82rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
          line-height: 1.25;
        }
        .perk-capsule-desc {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.4;
          margin: 0;
        }

        /* ── SHOWCASE BOX ────────────────────────────── */
        .aligner-showcase-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          border-radius: 24px;
          padding: 1.35rem 1.5rem;
          margin-bottom: 1.25rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .case-tab-bar {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.35);
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 1.25rem;
        }

        .case-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.84rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn-icon {
          color: #D67A41;
          flex-shrink: 0;
        }
        .case-tab-btn--active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.35);
        }
        .case-tab-btn--active .tab-btn-icon {
          color: #FFFFFF;
        }
        .case-tab-time {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }

        .slider-stage-wrapper {
          position: relative;
          width: 100%;
        }

        .slider-centered-container {
          width: 100%;
        }

        .slider-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          background: #000;
        }

        .slider-instruction-tag {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #F4B382;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          pointer-events: none;
          z-index: 20;
          white-space: nowrap;
        }

        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 25;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .slider-nav-btn:hover {
          background: #D67A41;
          border-color: #F4B382;
          transform: translateY(-50%) scale(1.1);
        }
        .slider-nav-prev {
          left: 12px;
        }
        .slider-nav-next {
          right: 12px;
        }

        /* ── TRUST BAR ───────────────────────────────── */
        .aligner-quick-trust {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 0.75rem 1.5rem;
          margin-top: 1.25rem;
        }
        .trust-stat { text-align: center; }
        .trust-stat strong {
          display: block;
          font-size: 1.05rem;
          font-weight: 900;
          color: #F4B382;
          font-family: var(--font-heading);
          line-height: 1.1;
        }
        .trust-stat span {
          display: block;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.15rem;
        }
        .trust-stat-sep {
          width: 1px;
          height: 24px;
          background: rgba(214, 122, 65, 0.2);
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 900px) {
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .aligner-section-root {
            padding: 1.5rem 0.75rem;
          }
          .aligner-title {
            font-size: 1.4rem;
          }
          .aligner-subtitle {
            font-size: 0.78rem;
          }
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.45rem;
            margin-bottom: 1rem;
          }
          .perk-capsule {
            padding: 0.55rem 0.55rem;
            border-radius: 12px;
            gap: 0.4rem;
          }
          .perk-capsule-icon {
            font-size: 0.95rem;
          }
          .perk-capsule-title {
            font-size: 0.72rem;
          }
          .perk-capsule-desc {
            display: none;
          }
          .aligner-showcase-box {
            padding: 0.85rem;
            border-radius: 18px;
          }
          .case-tab-bar {
            flex-direction: column;
            gap: 0.25rem;
          }
          .case-tab-btn {
            padding: 0.45rem 0.6rem;
            font-size: 0.75rem;
          }
          .slider-nav-btn {
            width: 32px;
            height: 32px;
          }
          .aligner-quick-trust {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
