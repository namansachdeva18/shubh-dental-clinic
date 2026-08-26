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
          background: linear-gradient(180deg, #FAF8F5 0%, #F3EDE6 100%);
          color: #110805;
          padding: 3rem 1.25rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
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
          margin: 0 auto 1.5rem;
        }

        .aligner-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.12);
          color: #B85D26;
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          padding: 0.32rem 0.95rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }
        .sparkle-icon { color: #D67A41; }

        .aligner-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.2;
          margin-bottom: 0.65rem;
          letter-spacing: -0.02em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #B85D26 0%, #D67A41 60%, #9A4616 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aligner-subtitle {
          font-size: 0.96rem;
          color: #5C4337;
          line-height: 1.6;
          margin: 0 auto;
          max-width: 680px;
        }
        .aligner-subtitle strong { color: #9A4616; font-weight: 700; }

        /* ── 4 VALUE PILLARS (LIGHT LUXURY CAPSULES) ── */
        .aligner-perks-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .perk-capsule {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 16px;
          padding: 0.85rem 0.95rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .perk-capsule:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          background: #FFFDFB;
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.12);
        }

        .perk-capsule-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 2px;
        }
        .perk-capsule-body {
          flex: 1;
        }
        .perk-capsule-title {
          display: block;
          font-size: 0.84rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }
        .perk-capsule-desc {
          font-size: 0.73rem;
          color: #6E4D3E;
          line-height: 1.45;
          margin: 0;
        }

        /* ── SHOWCASE BOX ────────────────────────────── */
        .aligner-showcase-box {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          border-radius: 24px;
          padding: 1.5rem 1.65rem;
          margin-bottom: 1.25rem;
          box-shadow: 0 16px 40px rgba(74, 37, 24, 0.07);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .case-tab-bar {
          display: flex;
          gap: 0.5rem;
          background: #F5EFEA;
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid rgba(214, 122, 65, 0.15);
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
          color: #5C4337;
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
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.3);
        }
        .case-tab-btn--active .tab-btn-icon {
          color: #FFFFFF;
        }
        .case-tab-time {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.25);
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
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.1);
          background: #000;
        }

        .slider-instruction-tag {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(17, 8, 5, 0.82);
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
          background: rgba(17, 8, 5, 0.72);
          backdrop-filter: blur(4px);
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .slider-nav-btn:hover {
          background: #D67A41;
          border-color: #D67A41;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.4);
        }
        .slider-nav-prev {
          left: 12px;
        }
        .slider-nav-next {
          right: 12px;
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 900px) {
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .aligner-section-root {
            padding: 2rem 0.85rem;
          }
          .aligner-title {
            font-size: 1.5rem;
          }
          .aligner-subtitle {
            font-size: 0.82rem;
          }
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            margin-bottom: 1.15rem;
          }
          .perk-capsule {
            padding: 0.65rem 0.65rem;
            border-radius: 14px;
            gap: 0.45rem;
          }
          .perk-capsule-icon {
            font-size: 1rem;
          }
          .perk-capsule-title {
            font-size: 0.75rem;
          }
          .perk-capsule-desc {
            display: none;
          }
          .aligner-showcase-box {
            padding: 0.95rem;
            border-radius: 20px;
          }
          .case-tab-bar {
            flex-direction: column;
            gap: 0.25rem;
          }
          .case-tab-btn {
            padding: 0.5rem 0.65rem;
            font-size: 0.76rem;
          }
          .slider-nav-btn {
            width: 34px;
            height: 34px;
          }
        }
      `}} />
    </section>
  );
}
