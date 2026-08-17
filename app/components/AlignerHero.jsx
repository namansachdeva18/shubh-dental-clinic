'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  Calendar, MessageSquare, Phone, Clock, Award, Star, Eye, Zap
} from 'lucide-react';

const ALIGNER_OPTIONS = [
  {
    id: 'invisalign',
    name: 'Invisalign® Clear Aligners',
    badge: '🌐 Global Gold Standard',
    tagline: 'The world\'s #1 orthodontic aligner system for mild to complex malocclusions.',
    price: 'Starting ₹85,000',
    timeline: '6–18 Months',
    benefits: [
      'Patented SmartTrack® multi-layer elastic material',
      'iTero® 3D digital outcome simulation on Day 1',
      'Engineered for complex bite rotations & crowding',
      'Includes original Vivera® retention trays'
    ],
    ctaText: 'Explore Invisalign® Details',
    link: '/treatments/invisalign-clear-aligners'
  },
  {
    id: 'skyalign',
    name: 'SkyAlign™ Clear Aligners',
    badge: '★ Best Value & In-House Precision',
    tagline: 'Engineered in our Rohtak lab under direct supervision of Prof. Dr. S. K. Yadav.',
    price: 'Starting ₹45,000',
    timeline: '4–12 Months',
    benefits: [
      'Custom 3D-printed in Rohtak — zero shipping delay',
      'Ultra-clear German medical-grade polymer',
      'Same-day replacement if aligners are misplaced',
      'Up to 40% more affordable than international brands'
    ],
    ctaText: 'Explore SkyAlign™ Details',
    link: '/treatments/skyalign-clear-aligners'
  }
];

const AlignerVectors = {
  scan3D: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" stroke="#D67A41" />
      <path d="M12 7c-2.8 0-5 1.5-5 3.5 0 2.8 2.5 4.5 5 6.5 2.5-2 5-3.7 5-6.5 0-2-2.2-3.5-5-3.5z" stroke="#F4B382" />
      <circle cx="12" cy="11" r="1.5" fill="#D67A41" />
    </svg>
  ),
  invisible: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5C4 7 7.5 4 12 4s8 3 8 6.5c0 3-2 5.5-4 6.5-.8.4-1.5 1.2-1.5 2v1h-5v-1c0-.8-.7-1.6-1.5-2-2-1-4-3.5-4-6.5z" stroke="#D67A41" />
      <path d="M8 10c1-1 2.5-1.5 4-1.5s3 .5 4 1.5M9.5 13.5c1.2.5 3.8.5 5 0" stroke="#F4B382" />
    </svg>
  ),
  specialist: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#D67A41" />
      <path d="M6 10.5v5c0 1.5 2.7 3.5 6 3.5s6-2 6-3.5v-5" stroke="#F4B382" />
      <path d="M20 9v7M12 13v8" stroke="#D67A41" />
    </svg>
  ),
  emi: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="#D67A41" />
      <path d="M2 10h20M6 15h4M16 15h2" stroke="#F4B382" />
      <circle cx="12" cy="15" r="1.2" fill="#10B981" />
    </svg>
  )
};

const WHAT_YOU_GET = [
  {
    Icon: AlignerVectors.scan3D,
    title: 'Free 3D Smile Preview',
    desc: 'See your future smile simulation on a 3D digital screen before starting treatment.'
  },
  {
    Icon: AlignerVectors.invisible,
    title: '100% Invisible & Removable',
    desc: 'No metal brackets or wires. Easily remove to eat your favorite food and brush normally.'
  },
  {
    Icon: AlignerVectors.specialist,
    title: 'PGI Specialist Monitoring',
    desc: 'Planned and monitored directly by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, Fellow WFO USA).'
  },
  {
    Icon: AlignerVectors.emi,
    title: '0% Interest EMI Available',
    desc: 'Simple monthly installments spread across your active treatment with zero hidden fees.'
  }
];

export default function AlignerHero() {
  const [selectedSystem, setSelectedSystem] = useState('invisalign');
  const activeSystem = ALIGNER_OPTIONS.find(o => o.id === selectedSystem) || ALIGNER_OPTIONS[0];

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hi Dr. Yadav! I would like to check my candidacy and book a 3D Digital Scan for Clear Aligners at Shubh Dental Clinic.'
  );

  return (
    <section id="aligners" className="aligner-section-root" aria-label="Clear Aligners and Invisalign">
      <div id="braces" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div className="aligner-container">
        
        {/* SECTION HEADER */}
        <div className="aligner-header">
          <div className="aligner-pill-badge">
            <Sparkles size={14} className="sparkle-icon" aria-hidden="true" />
            <span>Invisible Smile Transformation</span>
          </div>

          <h2 className="aligner-title font-heading">
            Straighten Your Teeth <br />
            <span className="copper-gradient">Without Braces or Wires</span>
          </h2>

          <p className="aligner-subtitle">
            Say goodbye to painful metal brackets. Get a perfectly aligned smile using crystal-clear, removable aligners designed by <strong>Prof. Dr. S. K. Yadav (35,000+ completed cases)</strong>.
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

        {/* 2. CHOOSE YOUR SYSTEM (SKYALIGN vs INVISALIGN) */}
        <div className="aligner-comparison-card">
          <div className="system-toggle-bar" role="tablist">
            {ALIGNER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={selectedSystem === opt.id}
                className={`system-tab-btn ${selectedSystem === opt.id ? 'is-active' : ''}`}
                onClick={() => setSelectedSystem(opt.id)}
              >
                <span>{opt.name}</span>
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
              <div className="system-info-col">
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
              </div>

              <div className="system-cta-col">
                <div className="system-meta-box">
                  <div className="meta-row">
                    <span className="meta-label">Treatment Time</span>
                    <strong className="meta-val">⚡ {activeSystem.timeline}</strong>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Estimated Investment</span>
                    <strong className="meta-val gold-cost">{activeSystem.price}</strong>
                  </div>
                  <div className="meta-emi-tag">
                    <span>💳 0% Interest Monthly EMI Available</span>
                  </div>
                </div>

                <div className="aligner-video-note" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ECFDF5', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#0E744A', padding: '4px 10px', borderRadius: '99px', fontSize: '0.74rem', fontWeight: '700', marginBottom: '0.75rem', width: 'fit-content' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                  <span>📹 Virtual 3D Assessment &amp; Video Consult Available</span>
                </div>

                <div className="system-action-buttons">
                  <a href="#book" className="btn-aligner-primary">
                    <Calendar size={16} aria-hidden="true" />
                    <span>Book 3D Scan / Video Consult</span>
                  </a>
                  
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-aligner-wa">
                    <MessageSquare size={16} aria-hidden="true" />
                    <span>WhatsApp Doctor</span>
                  </a>
                </div>

                <Link href={activeSystem.link} className="btn-system-learn-more">
                  <span>{activeSystem.ctaText} →</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. QUICK TRUST RIBBON */}
        <div className="aligner-trust-strip">
          <div className="trust-cell">
            <strong>35,000+</strong>
            <span>Smiles Transformed</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>5.0 ★</strong>
            <span>Google Rating (114+ Reviews)</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>Ex-PGI</strong>
            <span>Senior Specialist Care</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-cell">
            <strong>0% EMI</strong>
            <span>No Cost Installments</span>
          </div>
        </div>

      </div>

      {/* LUXURY COMPACT CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .aligner-section-root {
          background: linear-gradient(180deg, #0D0705 0%, #170C08 100%);
          color: #FFFFFF;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }
        .aligner-section-root::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .aligner-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HEADER ──────────────────────────────────── */
        .aligner-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 1.75rem;
        }
        .aligner-pill-badge {
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
        .sparkle-icon {
          color: #D67A41;
        }

        .aligner-title {
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

        .aligner-subtitle {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          margin: 0 auto;
        }
        .aligner-subtitle strong {
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

        /* ── COMPARISON DETAIL CARD ──────────────────── */
        .aligner-comparison-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 28px;
          padding: 2rem;
          margin-bottom: 2.25rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }

        .system-toggle-bar {
          display: flex;
          gap: 0.75rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.45rem;
          border-radius: 18px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 1.75rem;
        }
        .system-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.85rem 1.25rem;
          border-radius: 14px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.92rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
          flex-wrap: wrap;
        }
        .system-tab-btn.is-active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px rgba(214, 122, 65, 0.4);
        }
        .tab-price-hint {
          font-size: 0.76rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.15rem 0.55rem;
          border-radius: 99px;
          color: #FFF;
        }

        .system-detail-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
          align-items: center;
        }

        .system-badge-tag {
          display: inline-block;
          background: rgba(16, 185, 129, 0.15);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }

        .system-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }
        .system-tagline {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .system-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .system-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.45;
        }
        .check-icon {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .system-meta-box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 20px;
          padding: 1.35rem 1.5rem;
          margin-bottom: 1.25rem;
        }
        .meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
        }
        .meta-row:last-of-type {
          border-bottom: none;
        }
        .meta-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .meta-val {
          font-size: 0.96rem;
          font-weight: 800;
          color: #FFFFFF;
        }
        .gold-cost {
          color: #F4B382 !important;
          font-size: 1.15rem !important;
        }
        .meta-emi-tag {
          margin-top: 0.75rem;
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.76rem;
          font-weight: 700;
          color: #34D399;
          text-align: center;
        }

        .system-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
        }
        .btn-aligner-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.4rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.92rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
        }
        .btn-aligner-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.5);
        }

        .btn-aligner-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-aligner-wa:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        .btn-system-learn-more {
          display: block;
          text-align: center;
          color: #F4B382;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .btn-system-learn-more:hover {
          color: #FFFFFF;
        }

        /* ── TRUST STRIP ─────────────────────────────── */
        .aligner-trust-strip {
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
          .system-detail-content { grid-template-columns: 1fr; gap: 1.75rem; }
        }

        @media (max-width: 768px) {
          .aligner-section-root {
            padding: 2.75rem 1rem;
          }
          .aligner-header {
            margin-bottom: 1.75rem;
          }
          .aligner-title {
            font-size: 1.75rem;
          }
          .aligner-subtitle {
            font-size: 0.92rem;
          }
          .what-you-get-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .aligner-comparison-card {
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
          .system-detail-content {
            gap: 1.25rem;
          }
          .system-action-buttons {
            display: none !important;
          }
          .aligner-trust-strip {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
