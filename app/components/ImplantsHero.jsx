'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const CLINIC_IMPLANT_PERKS = [
  {
    icon: '⚡',
    title: 'Fixed Teeth in 24–72 Hours',
    desc: 'Immediate-loading implants let you eat, talk, and smile comfortably within hours.'
  },
  {
    icon: '🎯',
    title: 'Painless 3D Guided Keyhole',
    desc: 'Pin-point CBCT precision with no scalpels, minimal bleeding, and rapid healing.'
  },
  {
    icon: '🛡️',
    title: 'Korean Osstem® & Warranty',
    desc: 'Genuine international titanium implants with official lifetime osseointegration support.'
  },
  {
    icon: '💳',
    title: 'Transparent 0% Interest EMI',
    desc: 'Flexible monthly installments with zero hidden fees, starting at ₹18,000.'
  }
];

const CLINICAL_CASES = [
  {
    id: 'implant-case-1',
    label: 'Single / Front Tooth Immediate Implant (24 Hours)',
    beforeSrc: '/samedayimplants-before.webp',
    afterSrc: '/samedayimplants-after.webp',
    beforeAlt: 'Immediate dental implant restoration before',
    afterAlt: 'Immediate dental implant restoration after',
  },
  {
    id: 'implant-case-2',
    label: 'Full Mouth Same-Day Fixed Teeth Rehabilitation',
    beforeSrc: '/fullarch-before.webp',
    afterSrc: '/fullarch-after.webp',
    beforeAlt: 'Full arch rehabilitation implant treatment before',
    afterAlt: 'Full arch rehabilitation implant treatment after',
  }
];

export default function ImplantsHero() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = CLINICAL_CASES[activeCaseIdx];

  const handlePrev = () => {
    setActiveCaseIdx((prev) => (prev === 0 ? CLINICAL_CASES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCaseIdx((prev) => (prev === CLINICAL_CASES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="implants" className="implants-section-root" aria-label="Dental Implants and Same Day Teeth">
      <div className="implants-container">
        
        {/* COMPACT LUXURY HEADER */}
        <div className="implants-compact-header">
          <div className="implants-pill-badge">
            <Zap size={13} className="zap-icon" aria-hidden="true" />
            <span>Same-Day Permanent Teeth · Rohtak</span>
          </div>

          <h2 className="implants-title font-heading">
            Replace Missing Teeth with <span className="copper-gradient">Permanent Same-Day Implants</span>
          </h2>

          <p className="implants-subtitle">
            Walk in with missing or failing teeth — walk out with fixed, functional teeth in just 24 hours. Led by <strong>Prof. Dr. S. K. Yadav (3,000+ successful implants)</strong>.
          </p>
        </div>

        {/* 4-PILLAR KEY BENEFITS ROW (SLIM & HIGH DENSITY) */}
        <div className="implants-perks-strip">
          {CLINIC_IMPLANT_PERKS.map((perk, idx) => (
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
        <div className="implants-showcase-box">
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
                    beforeAlt={activeCase.beforeAlt}
                    afterAlt={activeCase.afterAlt}
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

        {/* QUICK TRUST BAR */}
        <div className="implants-quick-trust">
          <div className="trust-stat">
            <strong>3,000+</strong>
            <span>Implants Placed</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>98.4%</strong>
            <span>Success Rate</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>3D CBCT</strong>
            <span>Keyhole Guided</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>Korean Osstem®</strong>
            <span>Medical Titanium</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .implants-section-root {
          background: linear-gradient(180deg, #090403 0%, #140804 100%);
          color: #FFFFFF;
          padding: 1.5rem 1.25rem 2rem 1.25rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .implants-container {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── HEADER ──────────────────────────────────── */
        .implants-compact-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 0.85rem;
        }

        .implants-pill-badge {
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
        .zap-icon { color: #D67A41; }

        .implants-title {
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

        .implants-subtitle {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.5;
          margin: 0 auto;
          max-width: 680px;
        }
        .implants-subtitle strong { color: #F4B382; }

        /* ── 4 VALUE PILLARS (HIGH DENSITY CAPSULES) ── */
        .implants-perks-strip {
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
        .implants-showcase-box {
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
        .implants-quick-trust {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 0.75rem 1.5rem;
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

        @media (max-width: 900px) {
          .implants-perks-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .implants-section-root {
            padding: 1.5rem 0.75rem;
          }
          .implants-title {
            font-size: 1.4rem;
          }
          .implants-subtitle {
            font-size: 0.78rem;
          }
          .implants-perks-strip {
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
          .implants-showcase-box {
            padding: 0.85rem;
            border-radius: 18px;
          }
          .implants-quick-trust {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
