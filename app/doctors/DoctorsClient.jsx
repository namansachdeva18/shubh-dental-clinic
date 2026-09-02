'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Star, Sparkles, Check, 
  Award, BookOpen, ShieldCheck, Microscope, ArrowUpRight
} from 'lucide-react';

const DOCTOR_LIST = [
  {
    id: 'dr-sk-yadav',
    name: 'Dr (Prof.) S. K. Yadav',
    degrees: 'BDS, MDS · Fellow WFO (USA)',
    badge: 'Chief Orthodontist & Implantologist',
    subBadge: 'Certified Invisalign® Provider · Ex-SR PGI Chandigarh',
    photo: '/dr-sk-yadav.webp',
    alt: 'Dr (Prof.) S. K. Yadav — Chief Orthodontist & Implant Specialist',
    floatingBadges: [
      { text: 'Ex-SR PGI Chandigarh', icon: GraduationCap, pos: 'top-left' },
      { text: '5.0★ Google Rated Faculty', icon: Star, pos: 'bottom-right' }
    ],
    
    // Exact requested text with subtle high-impact highlights:
    leadSummary: (
      <>
        With over <strong className="hl-point">20 years of clinical and academic excellence</strong>, Prof. Dr. S. K. Yadav is <strong className="hl-point">Haryana&apos;s leading authority</strong> on orthodontics and dentofacial orthopaedics. He has published <strong className="hl-point">43 scientific papers (247+ global citations)</strong>, authored <strong className="hl-point">2 research books in Germany</strong>, and treated over <strong className="hl-point">2,50,000+ patients</strong> (including <strong className="hl-point">5,000+ braces &amp; aligner cases</strong> and <strong className="hl-point">3,000+ dental implants</strong>).
      </>
    ),
    
    bioTitle: 'Academic & Clinical Biography',
    bioP1: (
      <>
        Prof. Dr. S. K. Yadav is a renowned specialist in <strong className="hl-point">Orthodontics &amp; Dentofacial Orthopedics</strong>. He completed his Master of Dental Surgery (MDS) from the prestigious <strong className="hl-point">Pt. BD sharma university of health sciences, Rohtak</strong>. He then pursued <strong className="hl-point">Senior Residency from Post Graduate Institute of Medical Education and Research (PGI), Chandigarh</strong> — India&apos;s premier medical research institution.
      </>
    ),
    bioP2: (
      <>
        As a <strong className="hl-point">Fellow of the World Federation of Orthodontists (WFO, USA)</strong> and an <strong className="hl-point">IOS Endorsed Orthodontist</strong>, Dr. Yadav&apos;s research has been published in elite global journals, including the <em>Journal of Clinical Orthodontics (JCO, USA)</em>, <em>Journal of Oral and Maxillofacial Pathology</em>, and <em>Contemporary Clinical Dentistry</em>. His innovations in <strong className="hl-point">miniscrew micro-implant anchorage</strong> and <strong className="hl-point">molar distalization</strong> are cited by researchers worldwide.
      </>
    ),
    bioP3: (
      <>
        He is also the author of <strong className="hl-point">2 academic textbooks</strong> published by Lambert Academic Publishing (Germany) on functional appliances and oral pathology diagnostics. In clinical practice, Dr. Yadav combines <strong className="hl-point">precision biomechanics</strong> with <strong className="hl-point">digital 3D smile planning</strong> for braces, <strong className="hl-point">Invisalign®</strong>, and <strong className="hl-point">dental implants</strong>.
      </>
    ),
    
    scholarUrl: 'https://scholar.google.com/citations?user=2RzPrMQAAAAJ&hl=en',
    
    stats: [
      { val: '20+', label: 'Years Mastery', icon: Award },
      { val: '5,000+', label: 'Braces & Aligners', icon: Sparkles },
      { val: '3,000+', label: 'Implants Placed', icon: ShieldCheck },
      { val: '2.5L+', label: 'Patients Treated', icon: Star },
      { val: '43', label: 'Research Papers', icon: BookOpen, isScholar: true },
      { val: '2', label: 'Books (Germany)', icon: GraduationCap }
    ]
  },
  {
    id: 'dr-achla-yadav',
    name: 'Dr. (Prof.) Achla Yadav',
    alias: 'Dr. Achla Bharti',
    degrees: 'MDS (Oral & Maxillofacial Pathology) · Certified Cosmetic Dentist',
    badge: 'Premier Cosmetic Dentist & Oral Pathologist',
    subBadge: 'Smile Makeovers & 2026 AI Diagnostics · Ex-PGIDS Rohtak',
    photo: '/dr-achita-yadav.webp',
    alt: 'Dr. (Prof.) Achla Yadav — Cosmetic Dentist & Consultant Oral Pathologist',
    floatingBadges: [
      { text: 'Ex-Asst. Prof PGIDS Rohtak', icon: GraduationCap, pos: 'top-left' },
      { text: '64 Global Publications', icon: Microscope, pos: 'bottom-right' }
    ],
    
    // Exact requested text (with ECHS REWARI) with subtle high-impact highlights:
    leadSummary: (
      <>
        Dr. (Prof.) Achla Yadav is a premier <strong className="hl-point">Cosmetic Dentist &amp; Consultant Oral Pathologist</strong> with over <strong className="hl-point">18+ years of clinical and academic mastery</strong>. Having served as <strong className="hl-point">Assistant professor at PGIDS ROHTAK</strong>, <strong className="hl-point">Dental Surgeon at ECHS- REWARI</strong>, and <strong className="hl-point">Professor at DJ Dental College</strong>, she has crafted over <strong className="hl-point">15,000+ cosmetic smiles</strong> and treated over <strong className="hl-point">2,50,000+ patients</strong> with gentle, pain-free dental care.
      </>
    ),
    
    bioTitle: 'Clinical & Academic Biography',
    bioP1: (
      <>
        Dr. (Prof.) Achla Yadav is a distinguished <strong className="hl-point">Consultant Oral Pathologist and Certified Cosmetic Dentist</strong> with over <strong className="hl-point">18 years of clinical experience</strong>. She holds a Master of Dental Surgery (MDS) in Oral &amp; Maxillofacial Pathology from Prestigious <strong className="hl-point">KLE Academy of Dental Sciences, Belgaum</strong> and has dedicated her practice to <strong className="hl-point">precision smile aesthetics</strong>, <strong className="hl-point">porcelain veneers</strong>, <strong className="hl-point">cosmetic restorations</strong>, and <strong className="hl-point">gentle pediatric dentistry</strong>.
      </>
    ),
    bioP2: (
      <>
        Her esteemed career spans premier academic and government institutions, having served as <strong className="hl-point">Assistant professor at PGIDS ROHTAK</strong>, <strong className="hl-point">Senior Dental Surgeon at ECHS- REWARI</strong>, and <strong className="hl-point">Professor at DJ Dental College</strong>. Her deep clinical acumen ensures every aesthetic transformation is <strong className="hl-point">biologically sound, durable, and natural-looking</strong>.
      </>
    ),
    bioP3: (
      <>
        In addition to crafting thousands of radiant smiles, Dr. Achla is an active researcher who has authored <strong className="hl-point">64 international publications</strong> and <strong className="hl-point">2 academic textbooks in Germany</strong>, alongside pioneering <strong className="hl-point">2026 AI deep-learning diagnostic screening</strong> for oral soft-tissue health.
      </>
    ),
    
    scholarUrl: 'https://scholar.google.com/citations?user=70ydH9cAAAAJ&hl=en',
    
    stats: [
      { val: '18+', label: 'Years Experience', icon: Award },
      { val: '15,000+', label: 'Cosmetic Smiles', icon: Sparkles },
      { val: '2.5L+', label: 'Patients Treated', icon: Star },
      { val: '64', label: 'Global Publications', icon: BookOpen, isScholar: true },
      { val: '2', label: 'Books (Germany)', icon: GraduationCap },
      { val: 'AI', label: 'Diagnostics Pioneer', icon: Microscope }
    ]
  }
];

export default function DoctorsClient() {
  return (
    <div className="doctors-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="doc-hero-section">
        {/* Animated Background Ambience */}
        <div className="doc-hero-ambient">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
        </div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="doc-hero-inner"
          >
            <div className="doc-trust-chip">
              <ShieldCheck size={14} className="chip-icon" />
              <span>HARYANA&apos;S FOREMOST DENTAL FACULTY &amp; SPECIALISTS</span>
            </div>

            <h1 className="doc-main-title font-heading">
              Decades of Clinical Mastery &amp; <br />
              <span className="copper-gradient">World-Class Patient Care</span>
            </h1>

            <p className="doc-main-subtitle">
              Personally diagnosed and treated by PGI-trained senior professors. Over <strong>2,50,000+ satisfied patients</strong>, <strong>5,000+ orthodontic transformations</strong>, and <strong>107+ international research publications</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED DOCTORS SHOWCASE WITH COOL ANIMATIONS */}
      <section className="doc-profiles-section">
        <div className="container">
          <div className="doc-profiles-container">
            {DOCTOR_LIST.map((doc, index) => {
              const isFirst = index === 0;
              
              return (
                <motion.div 
                  key={doc.id} 
                  id={doc.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`doctor-profile-card ${isFirst ? 'doctor-theme-gold' : 'doctor-theme-rose'}`}
                >
                  {/* Top Header Tag */}
                  <div className="doc-card-top-tag">
                    <div className="tag-order-wrap">
                      <span className="doc-order-num">{`0${index + 1}`}</span>
                      <div className="order-sparkle">✦</div>
                    </div>
                    <span className="doc-badge-pill">{doc.badge}</span>
                  </div>

                  <div className="doctor-card-body">
                    {/* LEFT / TOP COLUMN: ANIMATED DOCTOR PHOTO & KEY METRICS */}
                    <div className="doctor-media-column">
                      
                      {/* INNOVATIVE PORTRAIT FRAME WITH GLOWING HALO & FLOATING BADGES */}
                      <div className="doctor-portrait-stage">
                        {/* Animated Rotating Halo Ring */}
                        <div className="portrait-halo-ring" />
                        <div className="portrait-halo-blur" />

                        <div className="doctor-portrait-frame">
                          <Image
                            src={doc.photo}
                            alt={doc.alt}
                            fill
                            sizes="(max-width: 768px) 320px, 420px"
                            className="doctor-actual-img"
                            priority={isFirst}
                          />
                          {/* Inner soft lighting overlay */}
                          <div className="portrait-sheen-overlay" />
                        </div>

                        {/* Floating Interactive Badges */}
                        {doc.floatingBadges.map((fBadge, bIdx) => {
                          const IconComp = fBadge.icon;
                          const isTop = fBadge.pos === 'top-left';
                          return (
                            <div 
                              key={bIdx} 
                              className={`portrait-float-badge ${isTop ? 'float-pos-top-left' : 'float-pos-bottom-right'}`}
                            >
                              <IconComp size={13} className="fbadge-icon" />
                              <span>{fBadge.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Animated Luxury Bento Stats Grid */}
                      <div className="doc-stats-bento-grid">
                        {doc.stats.map((st, i) => {
                          const StatIcon = st.icon;
                          const isClickable = st.isScholar && doc.scholarUrl;
                          
                          const TileContent = (
                            <>
                              <div className="stat-tile-glow" />
                              <div className="stat-tile-head">
                                <div className="stat-icon-badge">
                                  <StatIcon size={14} className="stat-inner-icon" />
                                </div>
                                {isClickable && <span className="stat-scholar-tag">Scholar ↗</span>}
                              </div>
                              <div className="stat-tile-body">
                                <span className="stat-bento-val font-heading">{st.val}</span>
                                <span className="stat-bento-lbl">{st.label}</span>
                              </div>
                            </>
                          );

                          return isClickable ? (
                            <motion.a 
                              key={i} 
                              href={doc.scholarUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -4, scale: 1.03 }}
                              transition={{ type: "spring", stiffness: 450, damping: 18 }}
                              className="stat-bento-tile stat-tile-clickable"
                              title="View verified publications & citations on Google Scholar"
                            >
                              {TileContent}
                            </motion.a>
                          ) : (
                            <motion.div 
                              key={i} 
                              whileHover={{ y: -4, scale: 1.03 }}
                              transition={{ type: "spring", stiffness: 450, damping: 18 }}
                              className="stat-bento-tile"
                            >
                              {TileContent}
                            </motion.div>
                          );
                        })}
                      </div>

                    </div>

                    {/* RIGHT COLUMN: BIOGRAPHY & CLINICAL MASTERY (EXACT WORD-FOR-WORD TEXT) */}
                    <div className="doctor-content-column">
                      <div className="doc-heading-block">
                        <div className="doc-title-row">
                          <h2 className="doc-name font-heading">{doc.name}</h2>
                          {doc.alias && (
                            <span className="doc-alias-badge">({doc.alias})</span>
                          )}
                        </div>

                        <div className="doc-degrees-scholar-row">
                          <p className="doc-degrees">{doc.degrees}</p>
                          {doc.scholarUrl && (
                            <motion.a 
                              href={doc.scholarUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="doc-scholar-chip"
                              whileHover={{ scale: 1.04, y: -1 }}
                              whileTap={{ scale: 0.96 }}
                              title={`View ${doc.name}'s verified publications on Google Scholar`}
                            >
                              <div className="scholar-icon-ring">
                                <GraduationCap size={12} className="scholar-inner-icon" />
                              </div>
                              <span className="scholar-chip-label">Google Scholar</span>
                              <ArrowUpRight size={11} className="scholar-arrow" />
                            </motion.a>
                          )}
                        </div>

                        <p className="doc-subbadge-text">{doc.subBadge}</p>
                      </div>

                      {/* EXACT LEAD PARAGRAPH IN FROSTED ACCENT CARD */}
                      <div className="doc-lead-quote-box">
                        <div className="lead-accent-bar" />
                        <p className="doc-lead-paragraph">
                          {doc.leadSummary}
                        </p>
                      </div>

                      {/* EXACT CLINICAL & ACADEMIC BIOGRAPHY */}
                      <div className="doc-bio-body">
                        <h3 className="doc-bio-heading font-heading">
                          <div className="heading-icon-wrap">
                            <GraduationCap size={18} className="heading-icon" />
                          </div>
                          <span>{doc.bioTitle}</span>
                        </h3>

                        <div className="doc-paragraphs-prose">
                          <p>{doc.bioP1}</p>
                          <p>{doc.bioP2}</p>
                          <p>{doc.bioP3}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LUXURY ANIMATED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .doctors-page-wrapper {
          background: #FCFBF8;
          color: #1F100B;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* 1. HERO SECTION WITH ANIMATED AMBIENCE */
        .doc-hero-section {
          background: linear-gradient(180deg, #140A06 0%, #22110B 100%);
          padding: 4rem 0 3rem;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
          overflow: hidden;
        }

        .doc-hero-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .ambient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: floatOrb 10s ease-in-out infinite alternate;
        }

        .ambient-orb-1 {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, #D67A41 0%, transparent 70%);
          top: -100px;
          left: 15%;
        }

        .ambient-orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #EAA77C 0%, transparent 70%);
          bottom: -80px;
          right: 15%;
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 20px) scale(1.1); }
          100% { transform: translate(-20px, 30px) scale(0.95); }
        }

        .doc-hero-inner {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .doc-trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #F4B382;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.15);
          backdrop-filter: blur(10px);
        }

        .doc-main-title {
          font-size: clamp(2.1rem, 4.5vw, 3.35rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.1rem;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }

        .copper-gradient {
          background: linear-gradient(135deg, #FDE6D2 0%, #F4B382 50%, #D67A41 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .doc-main-subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin: 0 auto;
          max-width: 720px;
        }

        .doc-main-subtitle strong {
          color: #FFFFFF;
        }

        /* 2. PROFILES SECTION */
        .doc-profiles-section {
          padding: 3.5rem 0 4.5rem;
          background: #FAF7F2;
        }

        .doc-profiles-container {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .doctor-profile-card {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid rgba(74, 37, 24, 0.12);
          box-shadow: 0 12px 40px rgba(34, 17, 11, 0.06);
          overflow: hidden;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .doctor-profile-card:hover {
          box-shadow: 0 20px 50px rgba(34, 17, 11, 0.1);
        }

        .doc-card-top-tag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: linear-gradient(90deg, #1C0E08 0%, #2E160D 100%);
          color: #FFFFFF;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
        }

        .tag-order-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .doc-order-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 1rem;
          font-weight: 800;
          color: #F4B382;
          letter-spacing: 0.05em;
        }

        .order-sparkle {
          color: #D67A41;
          font-size: 0.9rem;
          animation: spinSparkle 6s linear infinite;
        }

        @keyframes spinSparkle {
          0% { transform: rotate(0deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(0.9); }
        }

        .doc-badge-pill {
          font-size: 0.78rem;
          font-weight: 700;
          color: #FFFFFF;
          background: rgba(214, 122, 65, 0.28);
          padding: 4px 14px;
          border-radius: 999px;
          border: 1px solid rgba(214, 122, 65, 0.45);
          letter-spacing: 0.02em;
        }

        .doctor-card-body {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 2.25rem;
          padding: 2.25rem;
        }

        /* LEFT MEDIA COLUMN & PORTRAIT STAGE */
        .doctor-media-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .doctor-portrait-stage {
          position: relative;
          width: 100%;
          height: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Animated Halo Effects */
        .portrait-halo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 20px;
          background: conic-gradient(from 0deg, #D67A41, #F4B382, #FFFFFF, #D67A41, #B85922, #D67A41);
          animation: rotateConic 8s linear infinite;
          opacity: 0.55;
          z-index: 1;
        }

        .portrait-halo-blur {
          position: absolute;
          inset: -5px;
          border-radius: 22px;
          background: conic-gradient(from 0deg, #D67A41, #F4B382, #D67A41);
          filter: blur(8px);
          opacity: 0.25;
          animation: rotateConic 8s linear infinite;
          z-index: 0;
        }

        @keyframes rotateConic {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .doctor-portrait-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #1A0D08;
          z-index: 2;
          box-shadow: 0 10px 25px rgba(26, 13, 8, 0.18);
        }

        .doctor-actual-img {
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .doctor-portrait-stage:hover .doctor-actual-img {
          transform: scale(1.04);
        }

        .portrait-sheen-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 60%, rgba(26,13,8,0.4) 100%);
          pointer-events: none;
        }

        /* Floating Badges on Portrait */
        .portrait-float-badge {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(22, 10, 6, 0.92);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(214, 122, 65, 0.5);
          color: #FFFFFF;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.69rem;
          font-weight: 700;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
        }

        .float-pos-top-left {
          top: 10px;
          left: 10px;
          animation: floatSlowA 4s ease-in-out infinite alternate;
        }

        .float-pos-bottom-right {
          bottom: 10px;
          right: 10px;
          animation: floatSlowB 4s ease-in-out infinite alternate;
        }

        @keyframes floatSlowA {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }

        @keyframes floatSlowB {
          0% { transform: translateY(0px); }
          100% { transform: translateY(6px); }
        }

        .fbadge-icon {
          color: #FBBF24;
        }

        /* Luxury Dark-Themed Illuminated Bento Stats Grid */
        .doc-stats-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .stat-bento-tile {
          background: linear-gradient(145deg, #1A0D08 0%, #2A150D 100%);
          border: 1px solid rgba(214, 122, 65, 0.38);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 10px 6px 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .stat-bento-tile:hover {
          border-color: #F4B382;
          box-shadow: 0 12px 30px rgba(214, 122, 65, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .stat-tile-glow {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.45) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0.85;
        }

        .stat-tile-head {
          margin-bottom: 3px;
        }

        .stat-icon-badge {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F4B382;
        }

        .stat-inner-icon {
          color: #F4B382;
        }

        .stat-bento-val {
          font-size: 1.18rem;
          font-weight: 850;
          color: #FFFFFF;
          background: linear-gradient(135deg, #FFFFFF 30%, #F8C39F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          display: block;
          letter-spacing: -0.01em;
        }

        .stat-tile-clickable {
          text-decoration: none;
          cursor: pointer;
        }

        .stat-tile-clickable:hover {
          border-color: #FBBF24;
          box-shadow: 0 12px 30px rgba(251, 191, 36, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .stat-scholar-tag {
          font-size: 0.58rem;
          font-weight: 800;
          color: #F4B382;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 1px 5px;
          border-radius: 4px;
          letter-spacing: 0.02em;
          margin-left: 4px;
        }

        .stat-bento-lbl {
          font-size: 0.62rem;
          color: #D6BCB2;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 3px;
          display: block;
          line-height: 1.25;
        }

        /* RIGHT CONTENT COLUMN */
        .doctor-content-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .doc-heading-block {
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          padding-bottom: 1.1rem;
        }

        .doc-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .doc-name {
          font-size: clamp(1.75rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: #1F100B;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .doc-alias-badge {
          font-size: 0.98rem;
          font-weight: 600;
          color: #D67A41;
        }

        .doc-degrees-scholar-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 5px;
          margin-bottom: 4px;
        }

        .doc-degrees {
          font-size: 1rem;
          font-weight: 700;
          color: #D67A41;
          margin: 0;
        }

        /* Luxury Dark-Themed Google Scholar Pill Chip */
        .doc-scholar-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #1C0E08 0%, #2A150D 100%);
          border: 1px solid rgba(214, 122, 65, 0.45);
          padding: 3px 10px 3px 6px;
          border-radius: 999px;
          text-decoration: none;
          color: #F8C39F;
          font-size: 0.73rem;
          font-weight: 750;
          transition: all 0.22s ease;
          line-height: 1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .doc-scholar-chip:hover {
          background: linear-gradient(135deg, #2D150B 0%, #3F1F13 100%);
          color: #FFFFFF;
          border-color: #FBBF24;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .scholar-icon-ring {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(214, 122, 65, 0.35);
          border: 1px solid rgba(214, 122, 65, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F4B382;
          transition: all 0.2s ease;
        }

        .doc-scholar-chip:hover .scholar-icon-ring {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #F4B382;
        }

        .scholar-arrow {
          color: #F4B382;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .doc-scholar-chip:hover .scholar-arrow {
          color: #FBBF24;
          transform: translate(1px, -1px);
        }

        .doc-subbadge-text {
          font-size: 0.84rem;
          color: #6E5349;
          font-weight: 600;
          margin: 0;
        }

        /* Lead Quote / Summary Box */
        .doc-lead-quote-box {
          background: #FDF9F5;
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-left: 4px solid #D67A41;
          padding: 1.25rem 1.5rem;
          border-radius: 0 16px 16px 0;
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.04);
          position: relative;
        }

        .doc-lead-paragraph {
          font-size: 1rem;
          line-height: 1.75;
          color: #2C1610;
          font-weight: 500;
          margin: 0;
        }

        /* Biography Prose */
        .doc-bio-body {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .doc-bio-heading {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1F100B;
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
        }

        .heading-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(214, 122, 65, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading-icon {
          color: #D67A41;
        }

        .doc-paragraphs-prose {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4A3A35;
        }

        .doc-paragraphs-prose p {
          margin: 0;
        }

        /* Subtle Luxury Highlight for Key Accents */
        .hl-point {
          color: #1F100B;
          font-weight: 750;
          background: linear-gradient(180deg, transparent 64%, rgba(214, 122, 65, 0.16) 64%);
          padding: 0 3px;
          border-radius: 3px;
          display: inline;
          transition: all 0.2s ease;
        }

        .doctor-profile-card:hover .hl-point {
          background: linear-gradient(180deg, transparent 58%, rgba(214, 122, 65, 0.24) 58%);
        }

        /* Specialties Section */
        .doc-specialties-block {
          background: #FCFBF8;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 20px;
          padding: 1.4rem 1.6rem;
          box-shadow: 0 4px 18px rgba(74, 37, 24, 0.03);
        }

        /* MOBILE RESPONSIVENESS & ANIMATIONS */
        @media (max-width: 1024px) {
          .doctor-card-body {
            grid-template-columns: 270px 1fr;
            gap: 1.75rem;
            padding: 1.75rem;
          }

          .doctor-portrait-stage {
            height: 290px;
          }
        }

        @media (max-width: 768px) {
          .doc-hero-section {
            padding: 2.75rem 0 2.25rem;
          }

          .doc-main-title {
            font-size: 1.95rem;
          }

          .doc-main-subtitle {
            font-size: 0.92rem;
            line-height: 1.6;
          }

          .doc-profiles-section {
            padding: 2rem 0 3.5rem;
          }

          .doc-profiles-container {
            gap: 2.25rem;
          }

          .doctor-profile-card {
            border-radius: 22px;
          }

          .doc-card-top-tag {
            padding: 0.85rem 1.25rem;
          }

          .doctor-card-body {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.25rem;
          }

          .doctor-portrait-stage {
            height: 240px;
            max-width: 230px;
            margin: 0 auto;
          }

          .portrait-float-badge {
            font-size: 0.65rem;
            padding: 3px 8px;
          }

          .float-pos-top-left {
            top: 8px;
            left: 8px;
          }

          .float-pos-bottom-right {
            bottom: 8px;
            right: 8px;
          }

          .doc-lead-quote-box {
            padding: 1rem 1.15rem;
          }

          .doc-lead-paragraph {
            font-size: 0.94rem;
          }

          .doc-paragraphs-prose {
            font-size: 0.9rem;
            line-height: 1.68;
          }
        }
      `}} />
    </div>
  );
}
