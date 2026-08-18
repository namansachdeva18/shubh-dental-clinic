'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  Calendar, MessageSquare, Clock, Award, Star, Eye, Zap, ChevronRight
} from 'lucide-react';

const ALIGNER_OPTIONS = [
  {
    id: 'invisalign',
    name: 'Invisalign® Clear Aligners',
    badge: '🌐 Global Gold Standard',
    tagline: "The world's #1 orthodontic aligner system for mild to complex malocclusions.",
    price: 'Starting ₹85,000',
    timeline: '6–18 Months',
    highlights: [
      'Patented SmartTrack® multi-layer elastic polymer for gentle, precise shifts',
      'iTero® 3D digital outcome simulation on Day 1 (visualize your end smile)',
      'Engineered for complex bite corrections, severe crowding, and gaps',
      'Includes original Vivera® retention trays post-treatment'
    ],
    ctaText: 'Explore Invisalign® Details',
    link: '/treatments/invisalign-clear-aligners'
  },
  {
    id: 'skyalign',
    name: 'SkyAlign™ Clear Aligners',
    badge: '★ Best Value · In-House Precision',
    tagline: 'Custom 3D-fabricated in our Rohtak digital lab under direct supervision of Prof. Dr. S. K. Yadav.',
    price: 'Starting ₹45,000',
    timeline: '4–12 Months',
    highlights: [
      'Custom 3D-printed in Rohtak — zero import waiting times & instant delivery',
      'Ultra-clear German medical-grade biocompatible polymer',
      'Same-day replacement aligners printed if trays are ever lost or damaged',
      'Up to 40% more affordable than international brands with identical clinical outcome'
    ],
    ctaText: 'Explore SkyAlign™ Details',
    link: '/treatments/skyalign-clear-aligners'
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
    desc: 'Planned directly by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, Fellow WFO USA, 35k+ cases).'
  },
  {
    icon: '💳',
    title: 'Transparent 0% Interest EMI',
    desc: 'Affordable monthly financing with zero hidden costs, starting at just ₹45,000.'
  }
];

export default function AlignerHero() {
  const [selectedSystem, setSelectedSystem] = useState('invisalign');
  const activeSystem = ALIGNER_OPTIONS.find(o => o.id === selectedSystem) || ALIGNER_OPTIONS[0];

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hi Dr. Yadav! I would like to check my candidacy and book a 3D Digital Scan for Clear Aligners at Shubh Dental Clinic.'
  );

  return (
    <section id="aligners" className="aligner-section-root" aria-label="Clear Aligners and Invisible Braces">
      <div id="braces" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      
      <div className="aligner-container">
        
        {/* COMPACT LUXURY HEADER */}
        <div className="aligner-compact-header">
          <div className="aligner-pill-badge">
            <Sparkles size={13} className="sparkle-icon" aria-hidden="true" />
            <span>Invisible Braces &amp; Clear Aligners</span>
          </div>

          <h2 className="aligner-title font-heading">
            Straighten Your Teeth <span className="copper-gradient">Without Braces or Wires</span>
          </h2>

          <p className="aligner-subtitle">
            Say goodbye to painful metal brackets. Get a discreet, comfortable smile makeover with custom clear aligners planned by <strong>Prof. Dr. S. K. Yadav (35,000+ smiles treated)</strong>.
          </p>
        </div>

        {/* 4-PILLAR KEY BENEFITS ROW (SLIM & HIGH DENSITY) */}
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

        {/* INTEGRATED SYSTEM SELECTOR & COMPARISON CARD */}
        <div className="aligner-showcase-box">
          
          {/* TAB HEADER */}
          <div className="system-tab-switch" role="tablist">
            {ALIGNER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={selectedSystem === opt.id}
                className={`switch-tab ${selectedSystem === opt.id ? 'switch-tab--active' : ''}`}
                onClick={() => setSelectedSystem(opt.id)}
              >
                <span className="switch-tab-title">{opt.name}</span>
                <span className="switch-tab-badge">{opt.price}</span>
              </button>
            ))}
          </div>

          {/* TAB CONTENT WITH DYNAMIC ACCENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="system-card-content"
            >
              {/* Left Details */}
              <div className="system-main-info">
                <div className="system-headline-row">
                  <span className="system-quality-tag">{activeSystem.badge}</span>
                  <div className="system-time-tag">
                    <Clock size={13} />
                    <span>Duration: <strong>{activeSystem.timeline}</strong></span>
                  </div>
                </div>

                <h3 className="system-display-name font-heading">{activeSystem.name}</h3>
                <p className="system-display-tagline">{activeSystem.tagline}</p>

                <div className="system-points-grid">
                  {activeSystem.highlights.map((h, i) => (
                    <div key={i} className="system-point">
                      <CheckCircle2 size={15} className="point-check" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Booking CTA Box */}
              <div className="system-cta-block">
                <div className="cta-pricing-header">
                  <span className="pricing-label">Starting Investment</span>
                  <span className="pricing-number gold-glow">{activeSystem.price}</span>
                  <span className="pricing-emi-badge">💳 0% Interest EMI Available</span>
                </div>

                <div className="cta-action-buttons">
                  <a href="#book" className="btn-book-scan">
                    <Calendar size={15} />
                    <span>Book 3D Smile Scan</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-chat-wa">
                    <MessageSquare size={15} />
                    <span>WhatsApp Doctor</span>
                  </a>
                </div>

                <Link href={activeSystem.link} className="btn-full-details-link">
                  <span>{activeSystem.ctaText}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TRUST BAR RIBBON */}
        <div className="aligner-quick-trust">
          <div className="trust-stat">
            <strong>35,000+</strong>
            <span>Smiles Designed</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>5.0 ★</strong>
            <span>Verified Patient Reviews</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>Ex-PGI Head</strong>
            <span>Specialist Orthodontist</span>
          </div>
          <div className="trust-stat-sep" />
          <div className="trust-stat">
            <strong>100% Digital</strong>
            <span>iTero® 3D Scanning</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
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
        }

        .system-tab-switch {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.35);
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 1.25rem;
        }

        .switch-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.88rem;
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
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }

        .system-card-content {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr;
          gap: 1.75rem;
          align-items: center;
        }

        .system-headline-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.45rem;
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
          font-size: 1.35rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 0.3rem;
        }
        .system-display-tagline {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
          margin-bottom: 0.85rem;
        }

        .system-points-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem 0.85rem;
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

        /* RIGHT CTA BLOCK */
        .system-cta-block {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(214, 122, 65, 0.22);
          border-radius: 18px;
          padding: 1.15rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: center;
        }
        .pricing-label {
          display: block;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .pricing-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1.1;
          margin: 0.15rem 0;
        }
        .pricing-emi-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #34D399;
        }

        .cta-action-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .btn-book-scan, .btn-chat-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.65rem 0.75rem;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-book-scan {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.3);
        }
        .btn-book-scan:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(214, 122, 65, 0.45); }
        
        .btn-chat-wa {
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        .btn-chat-wa:hover { background: rgba(37, 211, 102, 0.25); }

        .btn-full-details-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #F4B382;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .btn-full-details-link:hover { color: #FFFFFF; }

        /* ── TRUST BAR ───────────────────────────────── */
        .aligner-quick-trust {
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
          .aligner-perks-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .system-card-content {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .system-points-grid {
            grid-template-columns: 1fr;
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
          .switch-tab {
            padding: 0.45rem 0.6rem;
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
          .system-cta-block {
            padding: 0.85rem;
            border-radius: 14px;
          }
          .pricing-number {
            font-size: 1.2rem;
          }
          .aligner-quick-trust {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
