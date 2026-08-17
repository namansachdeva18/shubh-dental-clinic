'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  Award, ShieldCheck, Sparkles, Stethoscope, Zap, Heart,
  CreditCard, GraduationCap, CheckCircle, Star, Users, TrendingUp,
  Microscope, Clock, Trophy, MapPin, ChevronRight, BadgeCheck,
  BookOpen, Globe, FileText, Cpu, Scan, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// Custom Bespoke Vector Dental Icons for Maximum Clinical Professionalism
const DentalVectors = {
  aligner: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 7.5C11.5 6.5 10 5 8 5 5 5 4 7 4 9c0 3 2.5 5 4 7.5 1 1.5.5 3.5-.5 5.5 1.5 1 3.5.5 4.5-1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c1 2 3 2.5 4.5 1.5-1-2-1.5-4-.5-5.5C17.5 14 20 12 20 9c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" strokeOpacity="0.4" />
      <path d="M3 9c0-3 2.5-5 5-5 1.5 0 2.5 1 4 2 1.5-1 2.5-2 4-2 2.5 0 5 2 5 5 0 3-2.5 5-4 7.5" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
    </svg>
  ),
  implant: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6.5C11.5 5.5 10 4 8 4 5 4 4 6 4 8c0 2 1 3 2.5 4.5h11C19 11 20 10 20 8c0-2-1-4-4-4-2 0-3.5 1.5-4 2.5z" />
      <path d="M10 12.5v7.5c0 1 1 2 2 2s2-1 2-2v-7.5" />
      <path d="M9 15h6M9 18h6" />
    </svg>
  ),
  lab3d: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  laser: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
};

// ─── Data ──────────────────────────────────────────────────────────────────
const USP_CARDS = [
  {
    id: 'usp-pgi',
    icon: GraduationCap,
    tag: 'Expertise',
    tagColor: '#10B981',
    title: 'PGI-Trained Specialists',
    detail: 'Prof. Dr. S. K. Yadav (MDS, PGI Chandigarh) & Dr. Achla Yadav (MDS, PGI Rohtak) — India\'s top 2 premier medical institutes.',
    proof: '20+ Years Clinical Practice',
  },
  {
    id: 'usp-cases',
    icon: DentalVectors.aligner,
    tag: 'Track Record',
    tagColor: '#6366F1',
    title: '5,000+ Smiles Transformed',
    detail: 'From braces to full-mouth implant rehabilitations — our case volume is among the highest in Haryana, giving unmatched precision.',
    proof: '20,000+ Happy Patients',
  },
  {
    id: 'usp-3dlab',
    icon: DentalVectors.lab3d,
    tag: 'Technology',
    tagColor: '#F59E0B',
    title: 'In-House 3D Digital Lab',
    detail: 'We scan, design & manufacture SkyAlign™ clear aligners in-house. No third-party delays. Faster turnaround and precision fit.',
    proof: '3D CBCT · Intraoral Scanner',
  },
  {
    id: 'usp-implants',
    icon: DentalVectors.implant,
    tag: 'Implantology',
    tagColor: '#EF4444',
    title: '3,000+ Implants Placed',
    detail: 'From single-tooth to same-day full-arch implants. Dr. S. K. Yadav uses 3D CBCT & flapless surgery for painless, exact placement.',
    proof: 'Same-Day Teeth Available',
  },
  {
    id: 'usp-laser',
    icon: DentalVectors.laser,
    tag: 'Comfort',
    tagColor: '#EC4899',
    title: 'Painless Laser Dentistry',
    detail: 'Soft-tissue clinical lasers eliminate the scalpel. Bloodless gum reshaping, faster tissue healing, zero sutures — in one visit.',
    proof: 'No Pain · No Stitches · No Fear',
  },
  {
    id: 'usp-sterilization',
    icon: ShieldCheck,
    tag: 'Safety',
    tagColor: '#14B8A6',
    title: 'Hospital-Grade Sterility',
    detail: 'Triple-autoclave class-B sterilization protocol for every instrument. Matching OT-grade hospital infection control standards.',
    proof: '100% Sterile Protocol',
  },
  {
    id: 'usp-research',
    icon: Microscope,
    tag: 'Research',
    tagColor: '#8B5CF6',
    title: '654+ Global Citations',
    detail: '107+ peer-reviewed publications in international journals. Your doctors don\'t just practice dentistry — they teach & advance it.',
    proof: '2 Research Books · Germany',
  },
  {
    id: 'usp-emi',
    icon: CreditCard,
    tag: 'Finance',
    tagColor: '#059669',
    title: '0% EMI — Zero Barriers',
    detail: 'World-class treatment should not have a price barrier. Choose transparent 0% interest installment plans for aligners and implants.',
    proof: 'No Cost EMI Available',
  },
];

const STATS = [
  { num: '5,000+', label: 'Orthodontic Cases', Icon: DentalVectors.aligner, color: '#D67A41' },
  { num: '3,000+', label: 'Implants Placed', Icon: DentalVectors.implant, color: '#2563EB' },
  { num: '20+',    label: 'Years Clinical Exp.', Icon: Award, color: '#F59E0B' },
  { num: '5.0★',   label: 'Google Rating', Icon: Star, color: '#EAB308' },
  { num: '107+',   label: 'Research Papers', Icon: BookOpen, color: '#8B5CF6' },
  { num: '654+',   label: 'Global Citations', Icon: Globe, color: '#10B981' },
];

const CERTIFICATIONS = [
  { src: '/invisalign-logo.png', alt: 'Certified Invisalign Provider', label: 'Invisalign®' },
  { src: '/wfo-logo.png',        alt: 'Fellow World Federation of Orthodontists USA', label: 'WFO USA' },
  { src: '/damon-logo.png',      alt: 'Official Damon Braces Provider', label: 'Damon®' },
  { src: '/osstem-implant.jpeg', alt: 'Osstem Implants Certified Provider', label: 'Osstem® Implants' },
  { src: '/ios-logo.png',        alt: 'Indian Orthodontic Society Endorsed', label: 'IOS' },
];

const TESTIMONIAL_SNIPPET = {
  quote: '"I travelled from Gurgaon for this clinic. The 3D scan, the precision — it felt like a hospital abroad. My son\'s braces are off in 14 months. Incredible."',
  name: 'Rakesh Sharma',
  loc: 'Gurgaon → Rohtak',
  rating: 5,
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70, damping: 18 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ─── Component ─────────────────────────────────────────────────────────────
export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="why-choose-us"
      className="wcu-section"
      aria-label="Why Choose Shubh Orthodontic and Dental Clinic Rohtak"
    >
      {/* Ambient background */}
      <div className="wcu-ambient-1" aria-hidden="true" />
      <div className="wcu-ambient-2" aria-hidden="true" />

      <div className="wcu-container">

        {/* ── HEADER ─────────────────────────────────── */}
        <motion.div
          className="wcu-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="wcu-eyebrow">
            <span className="wcu-pulse-dot" aria-hidden="true" />
            <span>Why 20,000+ Patients Trust Us Over Any Other Clinic</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="wcu-headline">
            Haryana's Only Clinic Where
            <span className="wcu-headline-accent"> World-Class Research Meets Real Clinical Mastery</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="wcu-subheadline">
            Most clinics offer treatment. We offer <strong>PGI-trained precision</strong>, <strong>3D digital technology</strong>, and <strong>globally published expertise</strong> — 
            all under one roof in Rohtak. Here's exactly why patients come from Delhi, Gurgaon, and across Haryana to see us.
          </motion.p>
        </motion.div>

        {/* ── DOCTOR AUTHORITY STRIP (HIGH-END CLINICAL BADGE) ─────────────────── */}
        <motion.div
          className="wcu-authority-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="authority-strip-inner">
            
            {/* Top Doctors Row (Symmetrical 2 Columns) */}
            <div className="authority-doctors-grid">
              
              {/* Doctor 1 */}
              <div className="authority-doctor-item">
                <div className="authority-doc-photo-wrap">
                  <Image 
                    src="/dr-sk-yadav.webp" 
                    alt="Prof. Dr. S. K. Yadav" 
                    fill 
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="60px"
                  />
                  <div className="doc-verified-badge" title="PGI Alumni Verified">
                    <BadgeCheck size={14} fill="#10B981" color="#fff" />
                  </div>
                </div>
                <div className="authority-doc-details">
                  <div className="authority-doc-name">Prof. Dr. S. K. Yadav</div>
                  <div className="authority-doc-cred">Chief Orthodontist · MDS (PGI Chandigarh) · Fellow WFO (USA)</div>
                </div>
              </div>

              <div className="authority-divider" aria-hidden="true" />

              {/* Doctor 2 */}
              <div className="authority-doctor-item">
                <div className="authority-doc-photo-wrap">
                  <Image 
                    src="/dr-achita-yadav.webp" 
                    alt="Dr. Achla Bharti Yadav" 
                    fill 
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="60px"
                  />
                  <div className="doc-verified-badge" title="PGI Alumni Verified">
                    <BadgeCheck size={14} fill="#10B981" color="#fff" />
                  </div>
                </div>
                <div className="authority-doc-details">
                  <div className="authority-doc-name">Dr. Achla Bharti Yadav</div>
                  <div className="authority-doc-cred">Professor &amp; Senior Oral Pathologist · MDS (PGI Rohtak)</div>
                </div>
              </div>

            </div>

            {/* Horizontal Divider */}
            <div className="authority-strip-h-divider" />

            {/* Bottom Certifications Row */}
            <div className="authority-certifications-row">
              <span className="authority-cert-heading">GLOBAL CLINICAL CERTIFICATIONS:</span>
              <div className="authority-certifications-list">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.alt} className="authority-cert-pill" title={cert.alt}>
                    <img src={cert.src} alt={cert.alt} className="authority-cert-logo" />
                    <span>{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── STATS ROW (PROFESSIONAL VECTOR ICONS) ──────────────────────────────── */}
        <motion.div
          className="wcu-stats-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {STATS.map((s) => {
            const Icon = s.Icon;
            return (
              <motion.div key={s.label} className="wcu-stat-item" variants={fadeUp}>
                <div className="wcu-stat-icon-wrap" style={{ color: s.color, backgroundColor: `${s.color}15`, borderColor: `${s.color}30` }}>
                  <Icon size={20} />
                </div>
                <span className="wcu-stat-num">{s.num}</span>
                <span className="wcu-stat-label">{s.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── USP CARDS GRID ─────────────────────────── */}
        <motion.div
          className="wcu-cards-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {USP_CARDS.map((card, i) => {
            const Icon = card.icon;
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
                {/* Glow on hover */}
                <div className="wcu-card-glow" style={{ '--glow-color': card.tagColor }} aria-hidden="true" />

                <div className="wcu-card-header">
                  <div className="wcu-card-icon-wrap" style={{ '--icon-color': card.tagColor }}>
                    <Icon size={20} />
                  </div>
                  <span className="wcu-card-tag" style={{ '--tag-color': card.tagColor }}>
                    {card.tag}
                  </span>
                </div>

                <h3 className="wcu-card-title">{card.title}</h3>
                <p className="wcu-card-detail">{card.detail}</p>

                <div className="wcu-card-proof">
                  <BadgeCheck size={13} strokeWidth={2.5} />
                  <span>{card.proof}</span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>

      {/* ── STYLES ──────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── LAYOUT ──────────────────────────────────── */
        .wcu-section {
          padding: 6rem 1.5rem;
          background: #FAF8F5;
          position: relative;
          overflow: hidden;
        }
        .wcu-container {
          max-width: 1260px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── AMBIENT ─────────────────────────────────── */
        .wcu-ambient-1, .wcu-ambient-2 {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .wcu-ambient-1 {
          top: -15%;
          left: -10%;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(214,122,65,0.07) 0%, transparent 70%);
          filter: blur(80px);
        }
        .wcu-ambient-2 {
          bottom: -10%;
          right: -12%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%);
          filter: blur(90px);
        }
        .wcu-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(122,52,15,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(122,52,15,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ──────────────────────────────────── */
        .wcu-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 3.5rem;
        }
        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(16,185,129,0.08);
          border: 1.5px solid rgba(16,185,129,0.3);
          color: #065F46;
          padding: 0.45rem 1.25rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
        }
        .wcu-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.6);
          animation: wcuPulse 1.8s infinite;
        }
        @keyframes wcuPulse {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }
        .wcu-headline {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #0E0604;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.2rem;
        }
        .wcu-headline-accent {
          display: block;
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 55%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wcu-subheadline {
          font-size: 1.05rem;
          color: #4A2015;
          line-height: 1.75;
          max-width: 780px;
          margin: 0 auto;
          font-weight: 400;
        }
        .wcu-subheadline strong { color: #7A340F; font-weight: 700; }

        /* ── AUTHORITY STRIP ─────────────────────────── */
        .wcu-authority-strip {
          background: linear-gradient(135deg, #1A0D08 0%, #2D1710 100%);
          border: 1.5px solid rgba(214,122,65,0.3);
          border-radius: 24px;
          padding: 1.75rem 2.25rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 20px 50px rgba(17,8,5,0.18), inset 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }
        .wcu-authority-strip::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(214,122,65,0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .authority-strip-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
        }
        .authority-doctors-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2.5rem;
          align-items: center;
          width: 100%;
        }
        .authority-doctor-item {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        .authority-doc-photo-wrap {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .authority-doc-photo-wrap img {
          border-radius: 50% !important;
          border: 2px solid var(--accent-gold);
        }
        .doc-verified-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #1A0D08;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
          z-index: 2;
        }
        .authority-doc-details {
          flex: 1;
        }
        .authority-doc-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          color: #fff;
          line-height: 1.25;
        }
        .authority-doc-cred {
          font-size: 0.78rem;
          color: rgba(244,179,130,0.9);
          line-height: 1.45;
          margin-top: 0.2rem;
        }
        .authority-divider {
          width: 1px;
          height: 48px;
          background: rgba(214,122,65,0.25);
          flex-shrink: 0;
        }
        .authority-strip-h-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(214,122,65,0.25), transparent);
        }
        .authority-certifications-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
          width: 100%;
        }
        .authority-cert-heading {
          font-size: 0.72rem;
          font-weight: 800;
          color: rgba(244,179,130,0.7);
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .authority-certifications-list {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          flex-wrap: wrap;
          flex-grow: 1;
        }
        .authority-cert-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 0.45rem 0.85rem;
          transition: all 0.25s ease;
          cursor: default;
        }
        .authority-cert-pill:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(214,122,65,0.4);
          transform: translateY(-2px);
        }
        .authority-cert-logo {
          width: 48px;
          height: 26px;
          object-fit: contain;
          filter: brightness(1.1);
        }
        .authority-cert-pill span {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(244,179,130,0.95);
          letter-spacing: 0.02em;
        }

        @media (max-width: 992px) {
          .authority-doctors-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .authority-divider {
            display: none;
          }
          .authority-certifications-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .authority-certifications-list {
            justify-content: flex-start;
          }
        }

        /* ── STATS ROW ───────────────────────────────── */
        .wcu-stats-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .wcu-stat-item {
          background: #fff;
          border: 1px solid rgba(122,52,15,0.1);
          border-radius: 18px;
          padding: 1.35rem 1rem;
          text-align: center;
          box-shadow: 0 4px 16px rgba(122,52,15,0.06);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .wcu-stat-item:hover {
          transform: translateY(-4px);
          border-color: rgba(214,122,65,0.35);
          box-shadow: 0 12px 32px rgba(214,122,65,0.12);
        }
        .wcu-stat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          margin-bottom: 0.2rem;
          transition: transform 0.3s ease;
        }
        .wcu-stat-item:hover .wcu-stat-icon-wrap {
          transform: scale(1.1);
        }
        .wcu-stat-num {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          color: #7A340F;
          line-height: 1;
        }
        .wcu-stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #6B4C3B;
          text-align: center;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }

        /* ── USP CARDS GRID ──────────────────────────── */
        .wcu-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.1rem;
          margin-bottom: 3rem;
        }
        .wcu-card {
          position: relative;
          background: linear-gradient(145deg, #1C0E09 0%, #2A160B 100%);
          border: 1.5px solid rgba(214,122,65,0.2);
          border-radius: 20px;
          padding: 1.6rem 1.4rem;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .wcu-card:hover, .wcu-card--hovered {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(214,122,65,0.45);
          box-shadow: 0 24px 50px rgba(17,8,5,0.25);
        }
        .wcu-card-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--glow-color, #D67A41);
          opacity: 0;
          filter: blur(40px);
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .wcu-card:hover .wcu-card-glow, .wcu-card--hovered .wcu-card-glow {
          opacity: 0.18;
        }
        .wcu-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .wcu-card-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--icon-color, #D67A41) 15%, transparent);
          color: var(--icon-color, #D67A41);
          border: 1px solid color-mix(in srgb, var(--icon-color, #D67A41) 30%, transparent);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .wcu-card:hover .wcu-card-icon-wrap {
          transform: scale(1.1) rotate(4deg);
        }
        .wcu-card-tag {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--tag-color, #D67A41);
          background: color-mix(in srgb, var(--tag-color, #D67A41) 12%, transparent);
          padding: 0.22rem 0.6rem;
          border-radius: 6px;
          border: 1px solid color-mix(in srgb, var(--tag-color, #D67A41) 25%, transparent);
        }
        .wcu-card-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.55rem;
          line-height: 1.3;
        }
        .wcu-card-detail {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .wcu-card-proof {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(244,179,130,0.9);
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 0.85rem;
          letter-spacing: 0.02em;
        }
        .wcu-card-proof svg { flex-shrink: 0; color: #10B981; }

        /* ── BOTTOM ROW ──────────────────────────────── */
        .wcu-bottom-row {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          align-items: stretch;
        }

        /* Testimonial card */
        .wcu-testimonial-card {
          background: #fff;
          border: 1px solid rgba(122,52,15,0.12);
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 8px 30px rgba(122,52,15,0.07);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .wcu-testimonial-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 8rem;
          font-family: var(--font-heading);
          color: rgba(122,52,15,0.06);
          line-height: 1;
          pointer-events: none;
        }
        .wcu-testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 1rem;
        }
        .wcu-testimonial-quote {
          font-size: 1rem;
          color: #2A150B;
          line-height: 1.75;
          font-style: italic;
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }
        .wcu-testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .wcu-testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D67A41, #7A340F);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .wcu-testimonial-name {
          font-weight: 700;
          color: #0E0604;
          font-size: 0.9rem;
        }
        .wcu-testimonial-loc {
          font-size: 0.75rem;
          color: #7A340F;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 0.15rem;
        }

        /* CTA block */
        .wcu-cta-block {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border: 1.5px solid rgba(214,122,65,0.3);
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 20px 50px rgba(17,8,5,0.15);
          position: relative;
          overflow: hidden;
        }
        .wcu-cta-block::before {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 250px;
          height: 250px;
          background: rgba(214,122,65,0.1);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .wcu-cta-headline {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .wcu-cta-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }
        .wcu-cta-buttons {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .wcu-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.9rem 1.75rem;
          border-radius: 99px;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(214,122,65,0.35);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .wcu-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(214,122,65,0.45);
        }
        .wcu-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.9rem 1.5rem;
          border-radius: 99px;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.9);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .wcu-btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(214,122,65,0.4);
          transform: translateY(-3px);
        }
        .wcu-cta-trust-row {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .wcu-cta-trust-row span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(244,179,130,0.85);
        }
        .wcu-cta-trust-row svg { color: #10B981; flex-shrink: 0; }

        @media (max-width: 1200px) {
          .wcu-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .wcu-stats-row { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .wcu-bottom-row { grid-template-columns: 1fr; }
          .authority-strip-inner { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 768px) {
          .wcu-section { padding: 2.25rem 1rem !important; }
          .wcu-header { margin-bottom: 1.25rem !important; }
          .wcu-subheadline { display: none !important; }
          .wcu-headline { font-size: clamp(1.5rem, 6vw, 2rem) !important; margin-bottom: 0.75rem !important; }

          /* ─── Authority strip: compact ─── */
          .wcu-authority-strip { padding: 1rem 1.25rem !important; margin-bottom: 1.25rem !important; border-radius: 18px !important; }
          .authority-strip-inner { flex-direction: column; align-items: flex-start; gap: 0.75rem !important; }
          .authority-doctors { flex-direction: column; gap: 0.75rem !important; width: 100% !important; }
          .authority-doctor-item { width: 100% !important; }
          .authority-divider { display: none; }
          .authority-certifications { display: none !important; }
          .authority-doc-cred { font-size: 0.72rem !important; }

          /* ─── Stats row: compact horizontal scroll ─── */
          .wcu-stats-row {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            gap: 0.5rem !important;
            grid-template-columns: none !important;
            padding-bottom: 4px !important;
            margin-bottom: 1.25rem !important;
          }
          .wcu-stats-row::-webkit-scrollbar { display: none; }
          .wcu-stat-item {
            flex-shrink: 0 !important;
            min-width: 105px !important;
            padding: 0.75rem 0.85rem !important;
            border-radius: 14px !important;
            background: #FFFFFF !important;
            border: 1px solid rgba(214,122,65,0.18) !important;
            box-shadow: 0 4px 14px rgba(74, 37, 24, 0.05) !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.2rem !important;
          }
          .wcu-stat-icon-wrap {
            width: 32px !important;
            height: 32px !important;
            border-radius: 8px !important;
            margin-bottom: 0.1rem !important;
          }
          .wcu-stat-icon-wrap svg {
            width: 16px !important;
            height: 16px !important;
          }
          .wcu-stat-num { font-size: 1.3rem !important; font-weight: 800 !important; }
          .wcu-stat-label { font-size: 0.65rem !important; }

          /* ─── USP Cards: horizontal swipe ─── */
          .wcu-cards-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            gap: 0.75rem !important;
            padding: 0.25rem 0 0.75rem !important;
            scroll-snap-type: x mandatory !important;
          }
          .wcu-cards-grid::-webkit-scrollbar { display: none; }
          .wcu-card {
            flex-shrink: 0 !important;
            width: 210px !important;
            min-height: auto !important;
            padding: 1.1rem !important;
            border-radius: 16px !important;
            scroll-snap-align: start !important;
          }
          .wcu-card-detail { display: none !important; }
          .wcu-card-proof { display: none !important; }
          .wcu-card-icon-wrap { width: 36px !important; height: 36px !important; border-radius: 10px !important; }

          /* ─── Bottom row: hide testimonial, compact CTA ─── */
          .wcu-bottom-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .wcu-testimonial-card { display: none !important; }
          .wcu-cta-block { padding: 1.5rem !important; border-radius: 16px !important; }
          .wcu-cta-headline { font-size: 1.1rem !important; }
          .wcu-cta-sub { font-size: 0.85rem !important; }
          .wcu-cta-buttons { flex-direction: column !important; gap: 0.75rem !important; }
          .wcu-btn-primary, .wcu-btn-secondary { justify-content: center !important; width: 100% !important; padding: 0.85rem 1rem !important; font-size: 0.88rem !important; }
          .wcu-cta-trust-row { gap: 0.75rem !important; justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .wcu-stats-row { gap: 0.5rem; }
          .wcu-cta-buttons { flex-direction: column; }
          .wcu-btn-primary, .wcu-btn-secondary { justify-content: center; }
        }
      `}} />
    </section>
  );
}