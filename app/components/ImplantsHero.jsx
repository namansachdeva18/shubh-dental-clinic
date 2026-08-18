'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  Calendar, MessageSquare, Clock, Award, Star, Zap, Check
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const IMPLANT_OPTIONS = [
  {
    id: 'single-implant',
    name: 'Single & Multi-Tooth Implants',
    badge: '★ Immediate / Keyhole Placement',
    tagline: 'Permanent replacement for missing teeth without trimming or damaging adjacent natural teeth.',
    price: 'Starting ₹18,000',
    timeline: 'Same-Day / 24 Hours',
    highlights: [
      'Preserves natural jawbone & facial youthfulness',
      'Flapless 3D keyhole surgery — zero scalpels & zero stitches',
      'High-translucency biocompatible zirconia ceramic crown',
      'Full natural chewing power from day one'
    ],
    ctaText: 'Explore Single Implants',
    link: '/treatments/dental-implants'
  },
  {
    id: 'full-mouth',
    name: 'Full Mouth Fixed Teeth (All-on-4/6)',
    badge: '💎 Full Arch Same-Day Rehab',
    tagline: 'Permanent full-arch fixed teeth in 24–72 hours for loose dentures or severely broken teeth.',
    price: 'Starting ₹1,25,000 / arch',
    timeline: '24–72 Hours Fixed',
    highlights: [
      'Walk out with fixed permanent teeth in just 1 trip',
      'Permanently eliminates loose dentures & adhesive glues',
      'Medical-grade Swiss titanium framework for lifetime stability',
      'Includes verified 10-year international manufacturer warranty'
    ],
    ctaText: 'Explore Full Mouth Implants',
    link: '/treatments/same-day-dental-implants'
  }
];

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
    title: 'Swiss Straumann® & Warranty',
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
    label: 'Front Tooth (24h)',
    duration: '24 Hrs',
    beforeSrc: '/front-before.webp',
    afterSrc: '/front-after.webp',
    beforeAlt: 'Immediate implant showing missing front tooth',
    afterAlt: 'Immediate implant showing restored front tooth',
  },
  {
    id: 'implant-case-2',
    label: 'Full Mouth (72h)',
    duration: 'Same-Day Fixed',
    beforeSrc: '/fullarch-before.webp',
    afterSrc: '/fullarch-after.webp',
    beforeAlt: 'Full mouth rehabilitation implant treatment before',
    afterAlt: 'Full mouth rehabilitation implant treatment after',
  }
];

export default function ImplantsHero() {
  const [selectedSystem, setSelectedSystem] = useState('single-implant');
  const [selectedCase, setSelectedCase] = useState(CLINICAL_CASES[0]);

  const activeSystem = IMPLANT_OPTIONS.find(o => o.id === selectedSystem) || IMPLANT_OPTIONS[0];

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hi Dr. Yadav! I would like to book a 3D CBCT Scan & Implant Consultation for missing teeth at Shubh Dental Clinic.'
  );

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
            Walk in with missing or failing teeth — walk out with fixed, functional teeth in just 24 hours. Led by <strong>Prof. Dr. S. K. Yadav (27,000+ successful implants)</strong>.
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

        {/* QUICK TRUST BAR */}
        <div className="implants-quick-trust">
          <div className="trust-stat">
            <strong>27,000+</strong>
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
            <strong>Swiss &amp; Osstem®</strong>
            <span>Medical Titanium</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .implants-section-root {
          background: linear-gradient(180deg, #090403 0%, #140804 100%);
          color: #FFFFFF;
          padding: 2.25rem 1.25rem;
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
          margin: 0 auto 1.25rem;
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
        }

        .implants-split-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1.75rem;
          align-items: center;
        }

        .system-tab-switch {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.35);
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 1rem;
        }

        .switch-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.55rem 0.85rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .switch-tab--active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.35);
        }
        .switch-tab-badge {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
        }

        .system-headline-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
        }
        .system-quality-tag {
          font-size: 0.7rem;
          font-weight: 800;
          color: #34D399;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.18rem 0.6rem;
          border-radius: 99px;
        }
        .system-time-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.74rem;
          color: #F4B382;
        }

        .system-display-name {
          font-size: 1.3rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 0.25rem;
        }
        .system-display-tagline {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
          margin-bottom: 0.75rem;
        }

        .system-points-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 0.75rem;
          margin-bottom: 1rem;
        }
        .system-point {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.35;
        }
        .point-check {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .implants-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 14px;
          padding: 0.65rem 0.95rem;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .price-label {
          display: block;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
        }
        .price-val {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: #F4B382;
          font-weight: 900;
        }

        .action-buttons-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .btn-book-implant, .btn-wa-implant {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.55rem 0.85rem;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-book-implant {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.3);
        }
        .btn-book-implant:hover { transform: translateY(-1px); }
        .btn-wa-implant {
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        .btn-wa-implant:hover { background: rgba(37, 211, 102, 0.25); }

        /* RIGHT PROOF COL */
        .implants-proof-col {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 18px;
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .case-tabs-bar {
          display: flex;
          gap: 0.35rem;
        }
        .case-tab-pill {
          flex: 1;
          padding: 0.35rem 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .case-tab-pill--active {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
        }

        .case-slider-container {
          border-radius: 12px;
          overflow: hidden;
          background: #0E0704;
        }
        .case-verified-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.7);
          padding: 0.15rem 0.25rem 0;
        }
        .verified-text { color: #34D399; font-weight: 700; }
        .verified-time { color: #F4B382; font-weight: 800; }

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

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 900px) {
          .implants-perks-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .implants-split-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .system-points-grid {
            grid-template-columns: 1fr;
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
          .switch-tab {
            padding: 0.45rem 0.55rem;
            font-size: 0.75rem;
            flex-direction: column;
            gap: 0.2rem;
          }
          .switch-tab-badge {
            font-size: 0.65rem;
          }
          .system-display-name {
            font-size: 1.15rem;
          }
          .system-display-tagline {
            font-size: 0.76rem;
            margin-bottom: 0.5rem;
          }
          .system-point {
            font-size: 0.74rem;
          }
          .implants-cta-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }
          .action-buttons-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .implants-quick-trust {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
