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

        {/* 4 VALUE PILLARS (HIGH CONTRAST LUXURY CARDS) */}
        <div className="aligner-perks-strip">
          {WHY_CHOOSE_US_PERKS.map((perk, idx) => (
            <div key={idx} className="aligner-perk-card">
              <div className="aligner-perk-icon-wrap">{perk.icon}</div>
              <div className="aligner-perk-body">
                <strong className="aligner-perk-title">{perk.title}</strong>
                <p className="aligner-perk-desc">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BEFORE / AFTER RESULT SLIDER SHOWCASE */}
        <div className="aligner-showcase-box">

          {/* SLIDER WRAPPER */}
          <div className="aligner-slider-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="aligner-slider-centered"
              >
                <div className="aligner-slider-frame">
                  <BeforeAfterSlider
                    beforeSrc={activeCase.beforeSrc}
                    afterSrc={activeCase.afterSrc}
                    beforeAlt={`${activeCase.label} Before`}
                    afterAlt={`${activeCase.label} After`}
                  />

                  {/* Navigation Arrows */}
                  <button 
                    type="button" 
                    className="aligner-slider-btn aligner-slider-prev" 
                    onClick={handlePrev}
                    aria-label="Previous result"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button 
                    type="button" 
                    className="aligner-slider-btn aligner-slider-next" 
                    onClick={handleNext}
                    aria-label="Next result"
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div className="aligner-instruction-tag">
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
          background: linear-gradient(180deg, #FAF7F2 0%, #F4ECE3 100%);
          color: #110805;
          padding: 3.25rem 1.25rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(214, 122, 65, 0.18);
          border-bottom: 1px solid rgba(214, 122, 65, 0.18);
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
          max-width: 800px;
          margin: 0 auto 1.65rem;
        }

        .aligner-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FFF3EB;
          color: #A84813;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          padding: 0.35rem 1rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.1);
        }
        .sparkle-icon { color: #D67A41; }

        .aligner-title {
          font-size: clamp(1.85rem, 3.6vw, 2.65rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #B85D26 0%, #D67A41 55%, #8C370B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aligner-subtitle {
          font-size: 0.98rem;
          color: #3E271D;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 700px;
          font-weight: 500;
        }
        .aligner-subtitle strong { color: #9A4616; font-weight: 800; }

        /* ── 4 VALUE PILLARS (SCOPED & HIGH CONTRAST) ── */
        .aligner-perks-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.95rem;
          margin-bottom: 1.75rem;
        }

        .aligner-perk-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          border-radius: 16px;
          padding: 0.95rem 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          box-shadow: 0 4px 16px rgba(74, 37, 24, 0.05);
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aligner-perk-card:hover {
          transform: translateY(-3px);
          border-color: #D67A41;
          background: #FFFDFB;
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.15);
        }

        .aligner-perk-icon-wrap {
          font-size: 1.25rem;
          width: 38px;
          height: 38px;
          background: #FFF4EC;
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          line-height: 1;
        }
        .aligner-perk-body {
          flex: 1;
        }
        .aligner-perk-title {
          display: block;
          font-size: 0.88rem;
          font-weight: 800;
          color: #110805 !important;
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }
        .aligner-perk-desc {
          font-size: 0.75rem;
          color: #4A352B !important;
          line-height: 1.45;
          margin: 0;
          font-weight: 500;
        }

        /* ── SHOWCASE BOX ────────────────────────────── */
        .aligner-showcase-box {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.24);
          border-radius: 24px;
          padding: 1.5rem 1.65rem;
          margin-bottom: 1rem;
          box-shadow: 0 16px 40px rgba(74, 37, 24, 0.08);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .aligner-slider-stage {
          position: relative;
          width: 100%;
        }

        .aligner-slider-centered {
          width: 100%;
        }

        .aligner-slider-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.12);
          background: #000;
        }

        .aligner-instruction-tag {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(17, 8, 5, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #F4B382;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          pointer-events: none;
          z-index: 20;
          white-space: nowrap;
        }

        .aligner-slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 25;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(17, 8, 5, 0.75);
          backdrop-filter: blur(4px);
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .aligner-slider-btn:hover {
          background: #D67A41;
          border-color: #D67A41;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.4);
        }
        .aligner-slider-prev {
          left: 12px;
        }
        .aligner-slider-next {
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
            font-size: 0.84rem;
          }
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.55rem;
            margin-bottom: 1.15rem;
          }
          .aligner-perk-card {
            padding: 0.65rem 0.65rem;
            border-radius: 14px;
            gap: 0.45rem;
          }
          .aligner-perk-icon-wrap {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }
          .aligner-perk-title {
            font-size: 0.78rem;
          }
          .aligner-perk-desc {
            display: none;
          }
          .aligner-showcase-box {
            padding: 0.95rem;
            border-radius: 20px;
          }
          .aligner-slider-btn {
            width: 34px;
            height: 34px;
          }
        }
      `}} />
    </section>
  );
}
