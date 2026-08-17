'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  Calendar, MessageSquare, Phone, Clock, Award, Star, Zap, Check
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const IMPLANT_OPTIONS = [
  {
    id: 'single-implant',
    name: 'Single & Multi-Tooth Implants',
    badge: '★ Most Common Replacement',
    tagline: 'Permanent replacement for one or more missing teeth without touching adjacent healthy teeth.',
    price: 'Starting ₹18,000',
    timeline: 'Same-Day / 24 Hours',
    benefits: [
      'Preserves natural jawbone & facial structure',
      'Flapless 3D keyhole placement — zero stitches',
      '100% metal-free natural ceramic zirconia crown',
      'Chew solid foods with natural tooth bite power'
    ],
    ctaText: 'Explore Single Implants',
    link: '/treatments/dental-implants'
  },
  {
    id: 'full-mouth',
    name: 'Full Mouth Fixed Teeth (All-on-4/6)',
    badge: '💎 Full Arch Restoration',
    tagline: 'Fixed, permanent full-arch teeth in 72 hours for loose dentures or severely failing teeth.',
    price: 'Starting ₹1,25,000 / arch',
    timeline: '24–72 Hours Fixed',
    benefits: [
      'Walk out with fixed permanent teeth in 1 trip',
      'Eliminates messy denture glues & loose slipping',
      'High-grade titanium reinforced framework',
      '10-Year international manufacturer warranty'
    ],
    ctaText: 'Explore Full Mouth Implants',
    link: '/treatments/same-day-dental-implants'
  }
];

const ImplantVectors = {
  fixedTeeth: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 6 4.5 6 8c0 3 2 5.5 3.5 7.5V20c0 1.1.9 2 2.5 2s2.5-.9 2.5-2v-4.5C16 13.5 18 11 18 8c0-3.5-2-6-6-6z" stroke="#D67A41" />
      <path d="M9.5 16h5M10 18.5h4" stroke="#F4B382" strokeWidth="1.4" />
      <circle cx="12" cy="7" r="1.5" fill="#D67A41" />
    </svg>
  ),
  guidedSurgery: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" stroke="#D67A41" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#F4B382" />
      <circle cx="12" cy="12" r="2.5" fill="#D67A41" />
    </svg>
  ),
  lifetimeWarranty: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D67A41" />
      <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  zeroEmi: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="#D67A41" />
      <path d="M2 10h20M6 15h4M16 15h2" stroke="#F4B382" />
      <circle cx="12" cy="15" r="1.2" fill="#10B981" />
    </svg>
  )
};

const WHAT_YOU_GET = [
  {
    Icon: ImplantVectors.fixedTeeth,
    title: 'Fixed Teeth in 24–72 Hours',
    desc: 'Walk out with fixed, natural-looking teeth so you can smile, speak, and eat comfortably right away.'
  },
  {
    Icon: ImplantVectors.guidedSurgery,
    title: 'Painless 3D Guided Keyhole Surgery',
    desc: 'Ultra-precise 3D CBCT digital placement with zero scalpels, zero stitches, and minimal recovery time.'
  },
  {
    Icon: ImplantVectors.lifetimeWarranty,
    title: 'Lifetime Osseointegration & Warranty',
    desc: 'Genuine Swiss Straumann® and Osstem® medical-grade titanium with verified international warranty.'
  },
  {
    Icon: ImplantVectors.zeroEmi,
    title: '0% Interest EMI Available',
    desc: 'Transparent pricing with flexible monthly installments across your treatment with zero hidden costs.'
  }
];

const CLINICAL_CASES = [
  {
    id: 'implant-case-1',
    label: 'Same-Day Front Tooth',
    duration: '24 Hrs',
    beforeSrc: '/front-before.webp',
    afterSrc: '/front-after.webp',
    beforeAlt: 'Immediate implant showing missing front tooth',
    afterAlt: 'Immediate implant showing restored front tooth',
  },
  {
    id: 'implant-case-2',
    label: 'Full Mouth Fixed Rehab',
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
        
        {/* SECTION HEADER */}
        <div className="implants-header">
          <div className="implants-pill-badge">
            <Zap size={14} className="zap-icon" aria-hidden="true" />
            <span>Same-Day Permanent Teeth · Rohtak</span>
          </div>

          <h2 className="implants-title font-heading">
            Replace Missing Teeth with <br />
            <span className="copper-gradient">Permanent Same-Day Implants</span>
          </h2>

          <p className="implants-subtitle">
            Walk in with missing or failing teeth — walk out with fixed, functional teeth in just 24 hours. Led by <strong>Prof. Dr. S. K. Yadav (27,000+ successful implants)</strong>.
          </p>
        </div>

        {/* 1. WHAT CUSTOMERS WILL GET (VALUE PILLARS) */}
        <div className="what-you-get-grid">
          {WHAT_YOU_GET.map((item, idx) => (
            <div key={idx} className="wyg-card">
              <div className="wyg-icon-box" aria-hidden="true">
                <item.Icon />
              </div>
              <div className="wyg-text">
                <h3 className="wyg-title">{item.title}</h3>
                <p className="wyg-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. CHOOSE YOUR IMPLANT OPTION + BEFORE/AFTER RESULTS */}
        <div className="implants-main-showcase">
          
          {/* Left: Solution Selector */}
          <div className="implants-solution-box">
            <div className="system-toggle-bar" role="tablist">
              {IMPLANT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedSystem === opt.id}
                  className={`system-tab-btn ${selectedSystem === opt.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedSystem(opt.id)}
                >
                  <span>{opt.name.split(' ')[0]}</span>
                  <span className="tab-price-hint">{opt.price}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="system-detail-content"
              >
                <span className="system-badge-tag">{activeSystem.badge}</span>
                <h3 className="system-name font-heading">{activeSystem.name}</h3>
                <p className="system-tagline">{activeSystem.tagline}</p>

                <div className="system-benefits-list">
                  {activeSystem.benefits.map((b, i) => (
                    <div key={i} className="system-benefit-item">
                      <CheckCircle2 size={16} className="check-icon" aria-hidden="true" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="system-meta-box">
                  <div className="meta-row">
                    <span className="meta-label">Procedure Timeline</span>
                    <strong className="meta-val">⚡ {activeSystem.timeline}</strong>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Starting Investment</span>
                    <strong className="meta-val gold-cost">{activeSystem.price}</strong>
                  </div>
                  <div className="meta-emi-tag">
                    <span>💳 0% Interest Monthly EMI Available</span>
                  </div>
                </div>

                <div className="system-action-buttons">
                  <a href="#book" className="btn-implants-primary">
                    <Calendar size={16} aria-hidden="true" />
                    <span>Book 3D Scan &amp; Consultation</span>
                  </a>
                  
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-implants-wa">
                    <MessageSquare size={16} aria-hidden="true" />
                    <span>WhatsApp Doctor</span>
                  </a>
                </div>

                <Link href={activeSystem.link} className="btn-system-learn-more">
                  <span>{activeSystem.ctaText} →</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Real Verified Case Visual Proof */}
          <div className="implants-case-box">
            <div className="case-tabs-bar">
              {CLINICAL_CASES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`case-tab-btn ${selectedCase.id === c.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedCase(c)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="case-slider-wrap">
              <BeforeAfterSlider
                beforeSrc={selectedCase.beforeSrc}
                afterSrc={selectedCase.afterSrc}
                beforeAlt={selectedCase.beforeAlt}
                afterAlt={selectedCase.afterAlt}
              />
              <div className="case-slider-caption">
                <span>↔ Drag slider left/right</span>
                <span className="case-verified-chip">✓ Verified Clinic Result</span>
              </div>
            </div>

            <div className="doctor-mini-trust-card">
              <div className="doc-avatar-wrap">
                <Image src="/dr-sk-yadav.webp" alt="Prof. Dr. S. K. Yadav" width={40} height={40} className="doc-avatar-img" />
              </div>
              <div className="doc-trust-info">
                <strong className="doc-name">Prof. Dr. S. K. Yadav</strong>
                <span className="doc-role">Chief Implant Specialist · Ex-PGI Chandigarh</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. QUICK TRUST RIBBON */}
        <div className="implants-trust-strip">
          <div className="trust-cell">
            <strong>27,000+</strong>
            <span>Implants Placed</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>98.4%</strong>
            <span>Clinical Success Rate</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>10 Yrs</strong>
            <span>Verified Warranty</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>0% EMI</strong>
            <span>Interest-Free Financing</span>
          </div>
        </div>

      </div>

      {/* LUXURY COMPACT CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .implants-section-root {
          background: linear-gradient(180deg, #0A0705 0%, #150C07 100%);
          color: #FFFFFF;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }
        .implants-section-root::before {
          content: '';
          position: absolute;
          top: -15%;
          left: -10%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .implants-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HEADER ──────────────────────────────────── */
        .implants-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 1.75rem;
        }
        .implants-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.18);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }
        .zap-icon {
          color: #D67A41;
        }

        .implants-title {
          font-size: clamp(2rem, 3.8vw, 2.9rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 0.85rem;
          letter-spacing: -0.02em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #EAA77C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .implants-subtitle {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          margin: 0 auto;
        }
        .implants-subtitle strong {
          color: #F4B382;
        }

        /* ── WHAT YOU GET GRID ───────────────────────── */
        .what-you-get-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.25rem;
        }
        .wyg-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 20px;
          padding: 1.25rem 1.15rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          backdrop-filter: blur(10px);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .wyg-card:hover {
          transform: translateY(-2px);
          border-color: rgba(214, 122, 65, 0.45);
          background: rgba(255, 255, 255, 0.06);
        }
        .wyg-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(214, 122, 65, 0.14);
          border: 1px solid rgba(214, 122, 65, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .wyg-title {
          font-size: 0.94rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .wyg-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        /* ── MAIN SHOWCASE (GRID 2-COL) ──────────────── */
        .implants-main-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
          margin-bottom: 2.25rem;
        }

        .implants-solution-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 28px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .system-toggle-bar {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.4rem;
          border-radius: 16px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 1.25rem;
        }
        .system-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.88rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .system-tab-btn.is-active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(214, 122, 65, 0.35);
        }
        .tab-price-hint {
          font-size: 0.74rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          color: #FFF;
        }

        .system-badge-tag {
          display: inline-block;
          background: rgba(16, 185, 129, 0.15);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.2rem 0.7rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .system-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }
        .system-tagline {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin-bottom: 1.15rem;
        }

        .system-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }
        .system-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
        }
        .check-icon {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .system-meta-box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 18px;
          padding: 1.15rem 1.35rem;
          margin-bottom: 1.15rem;
        }
        .meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
        }
        .meta-row:last-of-type {
          border-bottom: none;
        }
        .meta-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .meta-val {
          font-size: 0.92rem;
          font-weight: 800;
          color: #FFFFFF;
        }
        .gold-cost {
          color: #F4B382 !important;
          font-size: 1.05rem !important;
        }
        .meta-emi-tag {
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.74rem;
          font-weight: 700;
          color: #34D399;
          text-align: center;
        }

        .system-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .btn-implants-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.8rem 1.25rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
        }
        .btn-implants-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.5);
        }

        .btn-implants-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          padding: 0.7rem 1.15rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.86rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-implants-wa:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        .btn-system-learn-more {
          display: block;
          text-align: center;
          color: #F4B382;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .btn-system-learn-more:hover {
          color: #FFFFFF;
        }

        /* ── CASE BOX (RIGHT COL) ────────────────────── */
        .implants-case-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 28px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .case-tabs-bar {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.35rem;
          border-radius: 14px;
          margin-bottom: 1rem;
        }
        .case-tab-btn {
          flex: 1;
          padding: 0.55rem 0.75rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .case-tab-btn.is-active {
          background: #D67A41;
          color: #FFFFFF;
        }

        .case-slider-wrap {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(214, 122, 65, 0.25);
          background: #0E0704;
          margin-bottom: 1.15rem;
        }
        .case-slider-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #140905;
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .case-verified-chip {
          color: #34D399;
          font-weight: 700;
        }

        .doctor-mini-trust-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 16px;
          padding: 0.75rem 1rem;
        }
        .doc-avatar-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #D67A41;
          flex-shrink: 0;
        }
        .doc-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .doc-trust-info {
          display: flex;
          flex-direction: column;
        }
        .doc-name {
          font-size: 0.88rem;
          color: #FFFFFF;
        }
        .doc-role {
          font-size: 0.72rem;
          color: #F4B382;
        }

        /* ── TRUST STRIP ─────────────────────────────── */
        .implants-trust-strip {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 20px;
          padding: 1.25rem 2rem;
        }
        .trust-cell {
          text-align: center;
        }
        .trust-cell strong {
          display: block;
          font-size: 1.2rem;
          font-weight: 900;
          color: #F4B382;
          font-family: var(--font-heading);
        }
        .trust-cell span {
          display: block;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.2rem;
        }
        .trust-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 1024px) {
          .what-you-get-grid { grid-template-columns: repeat(2, 1fr); }
          .implants-main-showcase { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .implants-section-root {
            padding: 2.75rem 1rem;
          }
          .implants-header {
            margin-bottom: 1.75rem;
          }
          .implants-title {
            font-size: 1.75rem;
          }
          .implants-subtitle {
            font-size: 0.92rem;
          }
          .what-you-get-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .implants-solution-box, .implants-case-box {
            padding: 1.25rem 1rem;
            border-radius: 22px;
          }
          .system-toggle-bar {
            flex-direction: column;
            gap: 0.4rem;
          }
          .system-tab-btn {
            padding: 0.65rem 0.85rem;
            font-size: 0.85rem;
            justify-content: space-between;
          }
          .system-name {
            font-size: 1.35rem;
          }
          .system-action-buttons {
            display: none !important;
          }
          .implants-trust-strip {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
