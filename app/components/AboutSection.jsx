'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BadgeCheck, Sparkles } from 'lucide-react';

// Custom Bespoke Clinical Vector Icons
const InfrastructureVectors = {
  lab3D: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#D67A41" />
      <path d="M12 12v10" stroke="#F4B382" />
    </svg>
  ),
  sterilization: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D67A41" />
      <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  laser: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#D67A41" />
      <circle cx="12" cy="12" r="2" fill="#F4B382" />
    </svg>
  ),
  aiDiagnostic: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="#D67A41" />
      <rect x="9" y="9" width="6" height="6" stroke="#F4B382" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" stroke="#D67A41" />
    </svg>
  ),
};

const INFRASTRUCTURE_PILLARS = [
  {
    id: 'infra-lab',
    Icon: InfrastructureVectors.lab3D,
    tag: 'Digital Dentistry',
    tagColor: '#D67A41',
    title: 'In-House 3D CAD/CAM Lab',
    detail: 'Direct intraoral 3D scanning, digital treatment planning, and in-house SkyAlign™ aligner manufacturing with zero third-party turnaround delays.',
    proof: 'Same-Day Digital Scans',
  },
  {
    id: 'infra-sterility',
    Icon: InfrastructureVectors.sterilization,
    tag: 'Hospital-Grade Safety',
    tagColor: '#10B981',
    title: 'Triple-Vacuum Class-B Autoclaves',
    detail: 'Every dental and surgical instrument undergoes a multi-stage European Class-B vacuum sterilization cycle matching operation-theatre hospital standards.',
    proof: '100% Sterile Protocol',
  },
  {
    id: 'infra-laser',
    Icon: InfrastructureVectors.laser,
    tag: 'Surgical Precision',
    tagColor: '#6366F1',
    title: 'Painless Soft-Tissue Laser Operatory',
    detail: 'Biolase® soft-tissue lasers replace traditional scalpels for gum depigmentation, frenectomies, and rapid tissue healing with zero blood and zero stitches.',
    proof: 'Bloodless · No Sutures',
  },
  {
    id: 'infra-ai',
    Icon: InfrastructureVectors.aiDiagnostic,
    tag: 'Next-Gen Screening',
    tagColor: '#F59E0B',
    title: 'AI Diagnostic Telemetry',
    detail: 'Deep-learning neural networks trained on proprietary clinical datasets for automated early caries detection and oral mucosal lesion classification.',
    proof: 'AI-Assisted Diagnostics',
  },
];

const fadeUp = {
  hidden: { y: 25, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70, damping: 20 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="about"
      className="wcu-section"
      aria-label="Clinical Infrastructure and Technology Standards"
    >
      <div id="technology" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div id="why-choose-us" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div className="wcu-container">

        {/* ── SECTION HEADER ──────────────────────────── */}
        <motion.div
          className="wcu-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="wcu-eyebrow">
            <Sparkles size={14} className="wcu-eyebrow-icon" />
            <span>State-of-the-Art Clinical Infrastructure</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="wcu-headline">
            Engineered for Precision &amp; <br />
            <span className="wcu-headline-accent">Hospital-Grade Safety Standards</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="wcu-subheadline">
            Beyond senior clinical expertise, world-class dental outcomes require uncompromised infrastructure — from in-house 3D CAD/CAM fabrication to OT-grade sterilization.
          </motion.p>
        </motion.div>

        {/* ── 4 INFRASTRUCTURE PILLARS ───────────────── */}
        <motion.div
          className="wcu-cards-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {INFRASTRUCTURE_PILLARS.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <motion.article
                key={card.id}
                id={card.id}
                className={`wcu-card ${isHovered ? 'wcu-card--hovered' : ''}`}
                variants={fadeUp}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="wcu-card-top">
                  <div className="wcu-card-icon-wrap" aria-hidden="true">
                    <card.Icon />
                  </div>
                  <span className="wcu-card-tag" style={{ color: card.tagColor, backgroundColor: `${card.tagColor}15`, borderColor: `${card.tagColor}30` }}>
                    {card.tag}
                  </span>
                </div>

                <h3 className="wcu-card-title">{card.title}</h3>
                <p className="wcu-card-detail">{card.detail}</p>

                <div className="wcu-card-proof">
                  <BadgeCheck size={14} className="wcu-proof-icon" />
                  <span>{card.proof}</span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>

      {/* ── LUXURY SCOPED CSS ───────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .wcu-section {
          padding: 3rem 1.5rem;
          background: #FAF8F5;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          border-top: 1px solid rgba(214, 122, 65, 0.12);
        }

        .wcu-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HEADER ──────────────────────────────────── */
        .wcu-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 1.75rem;
        }

        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.1);
          border: 1px solid rgba(214, 122, 65, 0.28);
          color: #B85D26;
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .wcu-eyebrow-icon {
          color: #D67A41;
        }

        .wcu-headline {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.18;
          letter-spacing: -0.025em;
          margin-bottom: 1rem;
        }

        .wcu-headline-accent {
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 55%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .wcu-subheadline {
          font-size: 1.02rem;
          color: #554A44;
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── 4 CARDS GRID ────────────────────────────── */
        .wcu-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .wcu-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.16);
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(74, 37, 24, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }

        .wcu-card:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 122, 65, 0.38);
          box-shadow: 0 12px 32px rgba(74, 37, 24, 0.08);
        }

        .wcu-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .wcu-card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(214, 122, 65, 0.1);
          border: 1px solid rgba(214, 122, 65, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wcu-card-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          border: 1px solid;
        }

        .wcu-card-title {
          font-size: 1.22rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .wcu-card-detail {
          font-size: 0.92rem;
          color: #554A44;
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .wcu-card-proof {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #10B981;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.22);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          width: fit-content;
        }
        .wcu-proof-icon {
          color: #10B981;
        }

        /* ── RESPONSIVE MOBILE ───────────────────────── */
        @media (max-width: 768px) {
          .wcu-section {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}