'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Award, GraduationCap, CheckCircle2, 
  ArrowRight, BookOpen, Star, Sparkles, Cpu, Calendar, MessageSquare, Phone
} from 'lucide-react';

const DOCTORS = [
  {
    id: 'dr-sk-yadav',
    name: 'Dr. (Prof.) S. K. Yadav',
    degrees: 'BDS, MDS · Fellow WFO (USA)',
    role: 'Consultant Orthodontist & Braces / Invisalign Specialist',
    badge: '🏅 Certified Invisalign® Provider · Ex-SR PGI Chandigarh',
    photo: '/dr-sk-yadav.webp',
    alt: 'Dr. (Prof.) S. K. Yadav — Consultant Orthodontist & Implant Specialist',
    tagline: '20+ years of clinical mastery in braces, clear aligners, dental implants, and smile transformations.',
    stats: [
      { val: '5,000+', label: 'Braces Cases' },
      { val: '3,000+', label: 'Implants Placed' },
      { val: '2,50,000+', label: 'Patients Treated' }
    ],
    highlights: [
      'Ex. Senior Resident, PGI Chandigarh',
      'MDS from Pt. BD Sharma UHS, Rohtak',
      'Fellow of World Federation of Orthodontists (WFO, USA)',
      'Certified Invisalign® & Damon® Self-Ligating Provider'
    ],
    link: '/doctors/dr-sk-yadav'
  },
  {
    id: 'dr-achla-yadav',
    name: 'Dr. (Prof.) Achla Yadav',
    degrees: 'BDS, MDS (Oral & Maxillofacial Pathology)',
    role: 'Consultant Oral Pathologist & Certified Cosmetic Dentist',
    badge: '✨ Certified Cosmetic Dentist & Smile Makeover Specialist',
    photo: '/dr-achita-yadav.webp',
    alt: 'Dr. (Prof.) Achla Yadav — Consultant Oral Pathologist & Certified Cosmetic Dentist',
    tagline: '18+ years of clinical excellence in cosmetic smile design, porcelain veneers, painless restorations, and oral health.',
    stats: [
      { val: '18+', label: 'Years Experience' },
      { val: '15,000+', label: 'Cosmetic Smiles' },
      { val: '2,50,000+', label: 'Patients Treated' }
    ],
    highlights: [
      'Certified Cosmetic Dentist & Smile Makeover Specialist',
      'Ex. Assistant Professor, PGIDS ROHTAK',
      'Ex. Dental Surgeon, ECHS- REWARI',
      'Ex. Professor, DJ Dental College · 64 Global Publications'
    ],
    link: '/doctors/dr-achita-yadav'
  }
];

const DoctorVectors = {
  pgiProfessor: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#D67A41" />
      <path d="M6 10.5v5c0 1.5 2.7 3.5 6 3.5s6-2 6-3.5v-5" stroke="#F4B382" />
      <path d="M20 9v7M12 13v8" stroke="#D67A41" />
    </svg>
  ),
  evidenceBased: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 1 1-2-2" stroke="#D67A41" />
      <path d="M10 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2z" stroke="#F4B382" />
    </svg>
  ),
  masterCases: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 6 4.5 6 8c0 3 2 5.5 3.5 7.5V20c0 1.1.9 2 2.5 2s2.5-.9 2.5-2v-4.5C16 13.5 18 11 18 8c0-3.5-2-6-6-6z" stroke="#D67A41" />
      <path d="M9 8l2 2 4-4" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  aiDiagnostics: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="#D67A41" />
      <rect x="9" y="9" width="6" height="6" stroke="#F4B382" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" stroke="#D67A41" />
    </svg>
  )
};

const WHAT_PATIENTS_GET = [
  {
    Icon: DoctorVectors.pgiProfessor,
    title: 'Direct Care by PGI Professors',
    desc: 'You are personally diagnosed and treated by senior specialists, never delegated to junior trainees.'
  },
  {
    Icon: DoctorVectors.evidenceBased,
    title: 'Evidence-Based Treatments',
    desc: 'Over 107+ internationally published research papers ensuring proven, biologically safe protocols.'
  },
  {
    Icon: DoctorVectors.masterCases,
    title: '5,000+ Proven Braces & Implants',
    desc: 'Decades of hands-on clinical mastery handling 5,000+ braces, aligners, and 3,000+ implants.'
  },
  {
    Icon: DoctorVectors.aiDiagnostics,
    title: 'AI Diagnostics & 3D Imaging',
    desc: 'Cutting-edge AI-assisted screening and 3D digital telemetry for pinpoint clinical accuracy.'
  }
];

export default function DoctorsIntro() {
  const [selectedDoctor, setSelectedDoctor] = useState('dr-sk-yadav');
  const activeDoc = DOCTORS.find(d => d.id === selectedDoctor) || DOCTORS[0];

  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hi! I would like to schedule a Specialist Consultation with Dr. S. K. Yadav / Dr. Achla Yadav.'
  );

  return (
    <section id="doctors" className="doctors-section-root" aria-label="Our Specialist Doctors">
      <div id="about-doctors" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div className="doctors-container">
        
        {/* SECTION HEADER */}
        <div className="doctors-header">
          <div className="doctors-pill-badge">
            <ShieldCheck size={14} className="shield-icon" aria-hidden="true" />
            <span>Haryana&apos;s Most Trusted Dental Specialists</span>
          </div>

          <h2 className="doctors-title font-heading">
            Decades of Clinical Mastery &amp; <br />
            <span className="copper-gradient">Real Patient Results</span>
          </h2>

          <p className="doctors-subtitle">
            With <strong>5,000+ braces &amp; aligner cases</strong>, <strong>3,000+ dental implants</strong>, and over <strong>2,50,000+ patients treated</strong>, our PGI-trained specialists bring rare clinical expertise directly to you in Rohtak.
          </p>
        </div>

        {/* 1. WHAT PATIENTS GET (4-PILLAR VALUE GRID) */}
        <div className="what-patients-get-grid">
          {WHAT_PATIENTS_GET.map((item, idx) => (
            <div key={idx} className="wpg-card">
              <div className="wpg-icon-box" aria-hidden="true">
                <item.Icon />
              </div>
              <div className="wpg-text">
                <h3 className="wpg-title">{item.title}</h3>
                <p className="wpg-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. INTERACTIVE SPECIALIST SHOWCASE */}
        <div className="specialist-showcase-card">
          <div className="doctor-toggle-bar" role="tablist">
            {DOCTORS.map((doc) => (
              <button
                key={doc.id}
                type="button"
                role="tab"
                aria-selected={selectedDoctor === doc.id}
                className={`doctor-tab-btn ${selectedDoctor === doc.id ? 'is-active' : ''}`}
                onClick={() => setSelectedDoctor(doc.id)}
              >
                <span>{doc.name}</span>
                <span className="tab-doc-role">{doc.id === 'dr-sk-yadav' ? 'Orthodontics & Implants' : 'Oral Pathology & Cosmetics'}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDoc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="specialist-detail-layout"
            >
              {/* Doctor Avatar & Quick Stats */}
              <div className="specialist-photo-col">
                <div className="specialist-avatar-wrap">
                  <Image
                    src={activeDoc.photo}
                    alt={activeDoc.alt}
                    fill
                    sizes="(max-width: 768px) 180px, 260px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                  />
                </div>

                <div className="specialist-mini-stats">
                  {activeDoc.stats.map((s, i) => (
                    <div key={i} className="s-mini-stat">
                      <strong>{s.val}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Information & Credentials */}
              <div className="specialist-info-col">
                <span className="specialist-badge-tag">{activeDoc.badge}</span>
                <h3 className="specialist-name font-heading">{activeDoc.name}</h3>
                <p className="specialist-degrees">{activeDoc.degrees}</p>
                <p className="specialist-tagline">{activeDoc.tagline}</p>

                <div className="specialist-highlights-list">
                  {activeDoc.highlights.map((h, idx) => (
                    <div key={idx} className="specialist-highlight-item">
                      <CheckCircle2 size={16} className="check-icon-gold" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="specialist-video-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ECFDF5', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#0E744A', padding: '4px 12px', borderRadius: '99px', fontSize: '0.74rem', fontWeight: '700', marginBottom: '1rem', width: 'fit-content' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                  <span>📹 In-Clinic Visits &amp; 1-on-1 Online Video Consultations Available</span>
                </div>

                <div className="specialist-actions-row">
                  <a href="#book" className="btn-doc-primary">
                    <Calendar size={16} aria-hidden="true" />
                    <span>Book In-Clinic / Online Consult</span>
                  </a>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-doc-wa">
                    <MessageSquare size={16} aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>

                  <Link href={activeDoc.link} className="btn-doc-profile">
                    <span>View Full Credentials →</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* LUXURY COMPACT CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .doctors-section-root {
          background: #FAF8F5;
          color: #2D2420;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
        }

        .doctors-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HEADER ──────────────────────────────────── */
        .doctors-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 1.75rem;
        }
        .doctors-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.12);
          color: #B85D26;
          border: 1px solid rgba(214, 122, 65, 0.28);
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }
        .shield-icon {
          color: #D67A41;
        }

        .doctors-title {
          font-size: clamp(2rem, 3.8vw, 2.9rem);
          font-weight: 800;
          color: #110805;
          line-height: 1.18;
          margin-bottom: 0.85rem;
          letter-spacing: -0.02em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .doctors-subtitle {
          font-size: 1.02rem;
          color: #554A44;
          line-height: 1.65;
          margin: 0 auto;
        }
        .doctors-subtitle strong {
          color: #B85D26;
        }

        /* ── WHAT PATIENTS GET GRID ──────────────────── */
        .what-patients-get-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.25rem;
        }
        .wpg-card {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.25rem 1.15rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          box-shadow: 0 4px 16px rgba(74, 37, 24, 0.03);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .wpg-card:hover {
          transform: translateY(-2px);
          border-color: rgba(214, 122, 65, 0.35);
          box-shadow: 0 8px 22px rgba(74, 37, 24, 0.06);
        }
        .wpg-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(214, 122, 65, 0.1);
          border: 1px solid rgba(214, 122, 65, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(74, 37, 24, 0.04);
        }
        .wpg-title {
          font-size: 0.94rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.25rem;
        }
        .wpg-desc {
          font-size: 0.82rem;
          color: #554A44;
          line-height: 1.5;
          margin: 0;
        }

        /* ── SPECIALIST SHOWCASE CARD ────────────────── */
        .specialist-showcase-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 28px;
          padding: 2rem;
          color: #FFFFFF;
          box-shadow: 0 20px 50px rgba(17, 8, 5, 0.18);
          margin-bottom: 2.25rem;
        }

        .doctor-toggle-bar {
          display: flex;
          gap: 0.75rem;
          background: rgba(0, 0, 0, 0.35);
          padding: 0.45rem;
          border-radius: 18px;
          border: 1px solid rgba(214, 122, 65, 0.22);
          margin-bottom: 1.75rem;
        }
        .doctor-tab-btn {
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
          font-size: 0.94rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
          flex-wrap: wrap;
        }
        .doctor-tab-btn.is-active {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px rgba(214, 122, 65, 0.4);
        }
        .tab-doc-role {
          font-size: 0.76rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.15rem 0.55rem;
          border-radius: 99px;
          color: #F4B382;
        }

        .specialist-detail-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        /* Photo & Stats */
        .specialist-photo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.15rem;
        }
        .specialist-avatar-wrap {
          position: relative;
          width: 220px;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          border: 2.5px solid #D67A41;
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
        }
        .specialist-mini-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          width: 100%;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 14px;
          padding: 0.65rem 0.5rem;
          text-align: center;
        }
        .s-mini-stat strong {
          display: block;
          font-size: 0.95rem;
          font-weight: 900;
          color: #F4B382;
        }
        .s-mini-stat span {
          display: block;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Info & Credentials */
        .specialist-badge-tag {
          display: inline-block;
          background: rgba(16, 185, 129, 0.18);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }
        .specialist-name {
          font-size: 1.7rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .specialist-degrees {
          font-size: 0.88rem;
          color: #F4B382;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .specialist-tagline {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .specialist-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }
        .specialist-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.45;
        }
        .check-icon-gold {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .specialist-actions-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .btn-doc-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.4rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
        }
        .btn-doc-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.5);
        }

        .btn-doc-wa {
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
          font-size: 0.86rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-doc-wa:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        .btn-doc-profile {
          color: #F4B382;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
          margin-left: 0.5rem;
        }
        .btn-doc-profile:hover {
          color: #FFFFFF;
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 1024px) {
          .what-patients-get-grid { grid-template-columns: repeat(2, 1fr); }
          .specialist-detail-layout { grid-template-columns: 1fr; gap: 1.75rem; text-align: center; }
          .specialist-photo-col { margin: 0 auto; }
          .specialist-highlights-list { text-align: left; }
          .specialist-actions-row { justify-content: center; }
        }

        @media (max-width: 768px) {
          .doctors-section-root {
            padding: 2.75rem 1rem;
          }
          .doctors-header {
            margin-bottom: 1.75rem;
          }
          .doctors-title {
            font-size: 1.75rem;
          }
          .doctors-subtitle {
            font-size: 0.92rem;
          }
          .what-patients-get-grid {
            display: none !important;
          }
          .specialist-showcase-card {
            padding: 1.25rem 1rem;
            border-radius: 22px;
            margin-bottom: 0;
          }
          .doctor-toggle-bar {
            flex-direction: column;
            gap: 0.4rem;
          }
          .doctor-tab-btn {
            padding: 0.65rem 0.85rem;
            font-size: 0.85rem;
            justify-content: space-between;
          }
          .specialist-avatar-wrap {
            width: 180px;
            height: 200px;
          }
          .specialist-name {
            font-size: 1.4rem;
          }
          .specialist-actions-row {
            justify-content: center;
          }
          .btn-doc-primary, .btn-doc-wa {
            display: none !important;
          }
          .btn-doc-profile {
            margin-left: 0;
            font-size: 0.88rem;
          }
        }
      `}} />
    </section>
  );
}
