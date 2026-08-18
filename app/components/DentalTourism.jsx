'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Globe, CreditCard, Plane, PhoneCall, Sparkles, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const STATS = [
  { val: '18+', label: 'Countries Served', Icon: Globe, color: '#2563EB' },
  { val: '70%', label: 'Avg. Cost Savings', Icon: Sparkles, color: '#D67A41' },
  { val: '6', label: 'Visiting Centres', Icon: MapPin, color: '#059669' },
  { val: '0%', label: 'Interest EMI', Icon: CreditCard, color: '#8B5CF6' },
];

const NRI_PERKS = [
  {
    icon: ShieldCheck,
    title: 'World-Class at 70% Less',
    desc: 'FDA-approved Swiss & Osstem® implants and US Invisalign® aligners at true Indian value prices.',
    color: '#D67A41',
  },
  {
    icon: Clock,
    title: 'Express Fast-Track Visits',
    desc: 'Digital 3D scans & treatment planning finalized before you fly, minimizing chair time in Rohtak & NCR.',
    color: '#059669',
  },
  {
    icon: Globe,
    title: 'Virtual Consult & Concierge',
    desc: 'Free video consultation, customized timeline planning, and dedicated appointment coordination.',
    color: '#2563EB',
  },
];

const CENTRES = [
  { city: 'Rohtak', area: 'Delhi Bypass Rd', tag: 'Main Clinic', isMain: true },
  { city: 'Delhi', area: 'Rohini Sec 9', tag: 'NCR' },
  { city: 'Gurugram', area: 'Malibu Town Sec 47', tag: 'NCR' },
  { city: 'Panipat', area: 'Model Town', tag: 'Haryana' },
  { city: 'Sonepat', area: 'Prabhu Nagar', tag: 'Haryana' },
  { city: 'Fatehabad', area: 'Model Town', tag: 'Haryana' },
];

const fadeUp = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 20 } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

export default function DentalTourism() {
  return (
    <section id="tourism" className="dental-tourism-section" aria-label="Dental Tourism and NRI Care">
      <div id="dental-tourism" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      
      {/* Background ambient lighting */}
      <div className="dt-ambient-1" aria-hidden="true" />
      <div className="dt-ambient-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>

        {/* Section Header */}
        <motion.div
          className="dt-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="dt-badge">
            <Plane size={14} className="dt-plane-icon" />
            <span>GLOBAL DENTAL TOURISM &amp; NRI CARE</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="dt-title">
            World-Class Care,{' '}
            <span className="dt-title-accent">Just a Flight Away</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="dt-subtitle">
            Trusted by patients across USA, UK, UAE &amp; Australia for PGI-specialist implants and aligners with priority travel coordination.
          </motion.p>
        </motion.div>

        {/* Compact Stats Ribbon */}
        <motion.div
          className="dt-stats-ribbon"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {STATS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div key={i} variants={fadeUp} className="dt-stat-box">
                <div className="dt-stat-icon-wrap" style={{ color: s.color, backgroundColor: `${s.color}14`, borderColor: `${s.color}25` }}>
                  <Icon size={18} />
                </div>
                <div className="dt-stat-text-wrap">
                  <span className="dt-stat-val">{s.val}</span>
                  <span className="dt-stat-label">{s.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3 Core NRI Advantages */}
        <motion.div
          className="dt-perks-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {NRI_PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="dt-perk-card">
                <div className="dt-perk-header">
                  <div className="dt-perk-icon" style={{ color: perk.color, backgroundColor: `${perk.color}15`, borderColor: `${perk.color}30` }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="dt-perk-title">{perk.title}</h3>
                </div>
                <p className="dt-perk-desc">{perk.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Streamlined Visiting Centres Ribbon */}
        <motion.div
          className="dt-centres-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="dt-centres-header">
            <span className="dt-centres-label">
              <MapPin size={14} style={{ color: '#D67A41' }} />
              <span>Available Across 6 Visiting Centres in NCR &amp; Haryana</span>
            </span>
          </div>

          <div className="dt-centres-pills">
            {CENTRES.map((c, i) => (
              <div key={i} className={`dt-centre-pill ${c.isMain ? 'dt-centre-pill--main' : ''}`}>
                <span className="dt-pill-city">{c.city}</span>
                <span className="dt-pill-tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compact Action Footer Bar */}
        <motion.div
          className="dt-cta-compact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="dt-cta-compact-left">
            <span className="dt-cta-prompt">Planning your visit from abroad or another state?</span>
            <span className="dt-cta-subtext">📹 <strong>Free 1-on-1 Online Video Consultation</strong> &amp; custom treatment plan before you travel.</span>
          </div>
          <div className="dt-cta-compact-btns">
            <a href="#book" className="dt-btn-action-primary">
              <span>Book Video Consult</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/918685048414?text=Hi! I'm an NRI / outstation patient interested in booking an Online Video Consultation with Dr. S. K. Yadav."
              target="_blank"
              rel="noopener noreferrer"
              className="dt-btn-action-wa"
            >
              <PhoneCall size={15} />
              <span>NRI Video Desk</span>
            </a>
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dental-tourism-section {
          background: #FAF8F5;
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .dt-ambient-1 {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 45vw;
          height: 45vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }
        .dt-ambient-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 40vw;
          height: 40vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214,122,65,0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        /* HEADER */
        .dt-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 1.75rem;
        }
        .dt-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(37,99,235,0.08);
          color: #1D4ED8;
          padding: 0.35rem 1rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(37,99,235,0.2);
          margin-bottom: 1rem;
        }
        .dt-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3.8vw, 2.75rem);
          font-weight: 900;
          color: #0E0604;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .dt-title-accent {
          background: linear-gradient(135deg, #2563EB 0%, #D67A41 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dt-subtitle {
          font-size: 0.98rem;
          color: #4A2015;
          line-height: 1.65;
          max-width: 680px;
          margin: 0 auto;
        }

        /* STATS RIBBON */
        .dt-stats-ribbon {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .dt-stat-box {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(214,122,65,0.15);
          box-shadow: 0 4px 16px rgba(74,37,24,0.04);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          transition: all 0.3s ease;
        }
        .dt-stat-box:hover {
          transform: translateY(-3px);
          border-color: rgba(214,122,65,0.35);
          box-shadow: 0 10px 24px rgba(214,122,65,0.1);
        }
        .dt-stat-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          flex-shrink: 0;
        }
        .dt-stat-text-wrap {
          display: flex;
          flex-direction: column;
        }
        .dt-stat-val {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          color: #110805;
          line-height: 1.1;
        }
        .dt-stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #6E5B54;
          letter-spacing: 0.02em;
        }

        /* PERKS GRID */
        .dt-perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .dt-perk-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 1.5rem;
          border: 1.5px solid rgba(214,122,65,0.12);
          box-shadow: 0 6px 20px rgba(74,37,24,0.04);
          transition: all 0.3s ease;
        }
        .dt-perk-card:hover {
          transform: translateY(-4px);
          border-color: rgba(214,122,65,0.35);
          box-shadow: 0 12px 30px rgba(74,37,24,0.08);
        }
        .dt-perk-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
        }
        .dt-perk-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          flex-shrink: 0;
        }
        .dt-perk-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #110805;
          line-height: 1.3;
          margin: 0;
        }
        .dt-perk-desc {
          font-size: 0.85rem;
          color: #554A44;
          line-height: 1.6;
          margin: 0;
        }

        /* CENTRES RIBBON */
        .dt-centres-container {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(214,122,65,0.15);
          margin-bottom: 2rem;
          box-shadow: 0 4px 14px rgba(74,37,24,0.03);
        }
        .dt-centres-header {
          margin-bottom: 0.85rem;
          text-align: center;
        }
        .dt-centres-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #7A340F;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .dt-centres-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        .dt-centre-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FAF8F5;
          border: 1px solid rgba(214,122,65,0.2);
          border-radius: 99px;
          padding: 0.35rem 0.85rem;
          font-size: 0.78rem;
          transition: all 0.2s ease;
        }
        .dt-centre-pill--main {
          background: linear-gradient(135deg, rgba(214,122,65,0.12) 0%, rgba(201,168,76,0.18) 100%);
          border-color: rgba(214,122,65,0.4);
        }
        .dt-pill-city {
          font-weight: 800;
          color: #110805;
        }
        .dt-pill-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: #7A340F;
          background: rgba(214,122,65,0.12);
          padding: 0.1rem 0.45rem;
          border-radius: 99px;
        }
        .dt-centre-pill--main .dt-pill-tag {
          background: #D67A41;
          color: #FFFFFF;
        }

        /* COMPACT CTA */
        .dt-cta-compact {
          background: linear-gradient(135deg, #140A06 0%, #261309 100%);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          border: 1.5px solid rgba(214,122,65,0.25);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          box-shadow: 0 16px 40px rgba(17,8,5,0.15);
        }
        .dt-cta-compact-left {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .dt-cta-prompt {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
        }
        .dt-cta-subtext {
          font-size: 0.82rem;
          color: rgba(244,179,130,0.85);
        }
        .dt-cta-compact-btns {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .dt-btn-action-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          padding: 0.75rem 1.4rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(214,122,65,0.35);
          transition: all 0.25s ease;
        }
        .dt-btn-action-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(214,122,65,0.45);
        }
        .dt-btn-action-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(37,211,102,0.12);
          color: #25D366;
          border: 1.5px solid rgba(37,211,102,0.35);
          padding: 0.75rem 1.3rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .dt-btn-action-wa:hover {
          background: rgba(37,211,102,0.22);
          transform: translateY(-2px);
        }

        /* RESPONSIVE MOBILE OPTIMIZATIONS (< 768px) */
        @media (max-width: 1024px) {
          .dt-perks-grid { grid-template-columns: 1fr; }
          .dt-stats-ribbon { grid-template-columns: repeat(2, 1fr); }
          .dt-cta-compact { flex-direction: column; text-align: center; }
          .dt-cta-compact-btns { justify-content: center; width: 100%; }
        }

        @media (max-width: 768px) {
          .dental-tourism-section {
            padding: 2.25rem 0 !important;
          }
          .dt-header {
            margin-bottom: 1.25rem !important;
          }
          .dt-title {
            font-size: clamp(1.5rem, 5.5vw, 1.9rem) !important;
            margin-bottom: 0.5rem !important;
          }
          .dt-subtitle {
            font-size: 0.85rem !important;
            line-height: 1.55 !important;
          }

          /* Compact 2x2 Stats */
          .dt-stats-ribbon {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
          .dt-stat-box {
            padding: 0.65rem 0.85rem !important;
            border-radius: 14px !important;
            gap: 0.6rem !important;
          }
          .dt-stat-icon-wrap {
            width: 32px !important;
            height: 32px !important;
            border-radius: 8px !important;
          }
          .dt-stat-icon-wrap svg {
            width: 15px !important;
            height: 15px !important;
          }
          .dt-stat-val {
            font-size: 1.25rem !important;
          }
          .dt-stat-label {
            font-size: 0.65rem !important;
          }

          /* Perks in compact single column */
          .dt-perks-grid {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
            margin-bottom: 1rem !important;
          }
          .dt-perk-card {
            padding: 1rem !important;
            border-radius: 16px !important;
          }
          .dt-perk-header {
            margin-bottom: 0.35rem !important;
            gap: 0.6rem !important;
          }
          .dt-perk-icon {
            width: 32px !important;
            height: 32px !important;
            border-radius: 8px !important;
          }
          .dt-perk-title {
            font-size: 0.95rem !important;
          }
          .dt-perk-desc {
            font-size: 0.8rem !important;
            line-height: 1.5 !important;
          }

          /* Centres in compact scrolling or wrap pills */
          .dt-centres-container {
            padding: 0.85rem 1rem !important;
            border-radius: 16px !important;
            margin-bottom: 1rem !important;
          }
          .dt-centres-header {
            margin-bottom: 0.6rem !important;
          }
          .dt-centres-label {
            font-size: 0.72rem !important;
          }
          .dt-centres-pills {
            gap: 0.4rem !important;
          }
          .dt-centre-pill {
            padding: 0.25rem 0.65rem !important;
            font-size: 0.72rem !important;
          }
          .dt-pill-tag {
            font-size: 0.62rem !important;
            padding: 0.05rem 0.35rem !important;
          }

          /* Compact CTA hidden on mobile view */
          .dt-cta-compact {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
