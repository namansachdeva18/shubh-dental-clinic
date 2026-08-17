'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, ArrowRight, ShieldCheck, BookOpen, Cpu, Sparkles } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function DoctorsIntro({ hideCards = false }) {
  const containerRef = useRef(null);

  // Framer Motion Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  const scaleIn = {
    hidden: { scale: 0.94, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 25 } }
  };

  const accreditations = [
    { name: "Indian Orthodontic Society", label: "IOS Endorsed Orthodontist", badge: "🏅 IOS Endorsed" },
    { name: "Invisalign® Aligners", label: "Certified Invisalign® Provider", badge: "✨ Invisalign® Certified" },
    { name: "Osstem® Implants", label: "Certified Osstem® Implantologist", badge: "🛡️ Osstem® Certified" },
    { name: "Damon® System", label: "Official Damon® Braces Provider", badge: "💎 Damon® Provider" },
    { name: "WFO USA", label: "Fellow, World Federation of Orthodontists", badge: "🌐 WFO USA Fellow" },
    { name: "PGI Chandigarh", label: "Ex-Senior Resident, PGI Chandigarh", badge: "🎓 Ex-PGI Chandigarh" },
    { name: "PGI Rohtak", label: "Ex-Assistant Professor, PGI Rohtak", badge: "🏛️ Ex-PGI Rohtak Faculty" }
  ];

  return (
    <section className="section doctors-section-wrapper" ref={containerRef} aria-label="Meet the Doctors">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}
        >
          <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ margin: '0 auto 1rem', display: 'inline-flex' }}>
            <ShieldCheck size={14} aria-hidden="true" />
            Haryana's Most Trusted Dental Specialists
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.15 }}>
            Decades of Clinical Mastery &amp; <span className="text-gradient-copper">Real Patient Results</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            With <strong>5,000+ orthodontic cases</strong>, <strong>3,000+ dental implants</strong> and over <strong>20 years of hands-on clinical practice</strong>, our PGI-trained specialists bring rare expertise directly to you in Rohtak. Backed by globally recognised research — so your treatment is always evidence-based.
          </motion.p>
        </motion.div>

        {/* Combined Banner */}
        <motion.div 
          className="doctors-banner"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="doctors-banner-left">
            {/* Background Aura */}
            <div className="aura-wrapper">
              <div className="aura-orb orb-1"></div>
              <div className="aura-orb orb-2"></div>
              <div className="aura-orb orb-3"></div>
              <div className="aura-noise"></div>
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="floating-star" aria-hidden="true" style={{
                  left: `${(i * 29 + 5) % 94}%`,
                  top: `${(i * 41 + 11) % 90}%`,
                  animationDelay: `${(i * 0.4) % 5}s`,
                  animationDuration: `${4 + (i * 0.3) % 4}s`
                }}>✦</div>
              ))}
            </div>

            <div className="doctors-banner-content">
              <div className="pill-badge pill-gold" style={{ marginBottom: '1rem', width: 'fit-content' }}>🏆 20+ Years Combined Clinical Mastery</div>
              <h3 className="doctors-banner-title">
                Prof. Dr. S. K. Yadav <br />
                <span style={{ color: 'var(--accent-gold)' }}>&amp;</span> Dr. Achla Bharti Yadav
              </h3>
              <p className="doctors-banner-desc">
                Trained at <strong>PGI Chandigarh</strong> and <strong>PGI Rohtak</strong> — India's most elite institutions — our founders bring <strong>5,000+ orthodontic cases</strong>, <strong>3,000+ implants placed</strong>, and <strong>AI-powered oral cancer screening</strong> to Rohtak. What you get is the kind of precision and experience usually reserved for major metro cities, delivered with genuine compassion.
              </p>
              
              <div className="doctors-banner-stats">
                <div className="db-stat">
                  <div className="db-stat-value"><AnimatedCounter target={5000} suffix="+" /></div>
                  <div className="db-stat-label">Braces Cases</div>
                </div>
                <div className="db-stat">
                  <div className="db-stat-value"><AnimatedCounter target={3000} suffix="+" /></div>
                  <div className="db-stat-label">Implants Placed</div>
                </div>
                <div className="db-stat">
                  <div className="db-stat-value"><AnimatedCounter target={20000} suffix="+" /></div>
                  <div className="db-stat-label">Happy Patients</div>
                </div>
                <div className="db-stat">
                  <div className="db-stat-value">5.0★</div>
                  <div className="db-stat-label">Google Rating</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <Link href="#book" className="btn btn-gold" style={{ width: 'fit-content' }}>
                  <CheckCircle size={16} aria-hidden="true" />
                  <span className="hide-mobile">Schedule Specialist Consultation</span>
                  <span className="show-mobile">Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={scaleIn} 
            className="doctors-banner-right"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Animated Glow Halo Background */}
            <div className="photo-halo-bg"></div>
            
            {/* Main Photo Frame */}
            <div className="innovative-photo-frame">
              <Image
                src="/doctors-combined.webp"
                alt="Prof. Dr. S. K. Yadav and Dr. Achla Bharti Yadav"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
              <div className="image-overlay-warm"></div>



              {/* Shimmer Light Sweep */}
              <div className="photo-shimmer-sweep" aria-hidden="true"></div>

              {/* Top-Right Floating Glass Badge */}
              <motion.div 
                className="floating-photo-badge badge-top-right"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="badge-icon">🎓</span>
                <div>
                  <strong>PGI Chandigarh &amp; Rohtak</strong>
                  <span>Alumni &amp; Published Faculty</span>
                </div>
              </motion.div>

              {/* Bottom-Left Floating Glass Badge */}
              <motion.div 
                  className="floating-photo-badge badge-bottom-left"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="badge-icon">🦷</span>
                  <div>
                    <strong>5,000+ Cases · 3,000+ Implants</strong>
                    <span>Real Expertise. Real Results.</span>
                  </div>
                </motion.div>

              {/* Floating Doctor Name Tooltips */}
              <div className="doc-tag-tooltip tag-left">
                <span className="dot-pulse"></span>
                <span className="tag-text">Dr (Prof.) S. K. Yadav</span>
              </div>
              
              <div className="doc-tag-tooltip tag-right">
                <span className="dot-pulse"></span>
                <span className="tag-text">Dr (Prof.) Achla Yadav</span>
              </div>
            </div>
          </motion.div>
        </motion.div>



        {/* Individual Doctor Cards */}
        {!hideCards && (
          <div className="doctor-cards-grid" style={{ marginTop: '4rem' }}>
          
          {/* Card 1 — Prof. Dr. S. K. Yadav */}
          <motion.article 
            className="doctor-card" 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="doctor-card-photo">
              <div className="organic-wrapper">
                <div className="organic-outline"></div>
                <div className="organic-image">
                  <Image
                    src="/dr-sk-yadav.webp"
                    alt="Prof. Dr. S. K. Yadav — Consultant Orthodontist & Implant Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="doctor-card-badge glow-badge">🏅 IOS Endorsed · Invisalign® &amp; Damon® Provider</div>
            </div>

            <div className="doctor-card-body">
              <h3 className="doctor-card-name">Dr (Prof.) S. K. Yadav</h3>
              <div className="doctor-card-role">BDS, MDS</div>
              
              <p className="doctor-card-bio">
                Haryana's leading <strong>Orthodontist &amp; Implant Specialist</strong> with 20+ years of clinical practice. Has personally treated <strong>5,000+ braces patients</strong> and placed <strong>3,000+ dental implants</strong> — bringing PGI-Chandigarh's gold standard of care to Rohtak. One of Haryana's <strong>few Certified Invisalign® Providers</strong> and a pioneer of lingual braces &amp; micro-implant techniques in the region.
              </p>
              
              <div className="cv-divider"></div>
              
              <ul className="doctor-card-creds">
                <li><CheckCircle size={16} /><span><strong>5,000+ Orthodontic Cases Treated</strong> — braces, Invisalign &amp; lingual</span></li>
                <li><CheckCircle size={16} /><span><strong>3,000+ Dental Implants Placed</strong> — including same-day &amp; complex cases</span></li>
                <li><CheckCircle size={16} /><span><strong>Certified Invisalign® Provider</strong> — one of the few in Haryana</span></li>
                <li><Award size={16} /><span><strong>Fellow, World Federation of Orthodontists (WFO, USA)</strong></span></li>
                <li><GraduationCap size={16} /><span><strong>MDS — PGI Chandigarh</strong> (India's premier medical institute)</span></li>
                <li><GraduationCap size={16} /><span><strong>Former Senior Resident, PGI Chandigarh</strong></span></li>
                <li><BookOpen size={16} /><span><strong>43 Research Papers · 247+ Citations</strong> — globally published</span></li>
                <li><GraduationCap size={16} /><span><strong>Former Professor, DJ College of Dental Sciences</strong></span></li>
              </ul>
              
              <Link href="/doctors/dr-sk-yadav" className="btn btn-outline cv-btn">
                <span className="hide-mobile">Explore Research &amp; CV Profile</span>
                <span className="show-mobile">Explore Profile</span> <ArrowRight size={15} />
              </Link>
            </div>
          </motion.article>

          {/* Card 2 — Dr. Achla Bharti Yadav */}
          <motion.article 
            className="doctor-card" 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="doctor-card-photo">
              <div className="organic-wrapper">
                <div className="organic-outline"></div>
                <div className="organic-image">
                  <Image
                    src="/dr-achita-yadav.webp"
                    alt="Dr. Achla Bharti Yadav — Professor, Oral Pathologist & AI Cancer Screening Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="doctor-card-badge glow-badge">✨ Certified Cosmetic &amp; Aesthetic Dentist</div>
            </div>

            <div className="doctor-card-body">
              <h3 className="doctor-card-name">Dr (Prof.) Achla Yadav</h3>
              <div className="doctor-card-role">BDS, MDS, MIAOMP</div>
              
              <p className="doctor-card-bio">
                A specialist you can trust for early detection and cosmetic brilliance. Dr. Achla's <strong>AI-powered oral cancer screening</strong> (using YOLOv8 deep learning) catches pre-cancer lesions most clinics miss. With a PGI Rohtak background and expertise in <strong>cosmetic dentistry and smile makeovers</strong>, she helps patients look and feel their absolute best.
              </p>

              <div className="cv-divider"></div>

              <ul className="doctor-card-creds">
                <li><Cpu size={16} /><span><strong>AI-Powered Oral Cancer Screening</strong> — early detection using YOLOv8 deep learning</span></li>
                <li><CheckCircle size={16} /><span><strong>Cosmetic Dentistry &amp; Smile Makeover Specialist</strong> — veneers, whitening, bonding</span></li>
                <li><CheckCircle size={16} /><span><strong>Oral Pathology Consultant</strong> — diagnosis, biopsy &amp; soft-tissue expertise</span></li>
                <li><GraduationCap size={16} /><span><strong>MDS — PGI Rohtak</strong> (Former Assistant Professor)</span></li>
                <li><BookOpen size={16} /><span><strong>64 Research Papers · 407+ Citations</strong> — h-index 12</span></li>
                <li><GraduationCap size={16} /><span><strong>Former Dental Surgeon, ECHS (Rewari)</strong></span></li>
              </ul>
              
              <Link href="/doctors/dr-achita-yadav" className="btn btn-outline cv-btn">
                <span className="hide-mobile">Explore Research &amp; CV Profile</span>
                <span className="show-mobile">Explore Profile</span> <ArrowRight size={15} />
              </Link>
            </div>
          </motion.article>

          </div>
        )}

        {/* End of Doctors Section */}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .doctors-section-wrapper {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
        }
        
        /* --- PRESTIGIOUS GOLDEN AURA BACKGROUND --- */
        .aura-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          background: #110805;
        }
        .aura-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
          animation: floatAura 20s infinite alternate ease-in-out;
        }
        .orb-1 {
          width: 300px; height: 300px;
          background: rgba(214, 122, 65, 0.25);
          top: -10%; left: -10%;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: rgba(201, 168, 76, 0.15);
          bottom: -20%; right: -10%;
          animation-delay: -5s;
          animation-duration: 25s;
        }
        .orb-3 {
          width: 250px; height: 250px;
          background: rgba(74, 37, 24, 0.4);
          top: 30%; left: 30%;
          animation-delay: -10s;
          animation-duration: 30s;
        }
        @keyframes floatAura {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .aura-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          mix-blend-mode: overlay;
          z-index: 1;
        }
        .floating-star {
          position: absolute;
          color: var(--accent-gold);
          font-size: 10px;
          opacity: 0;
          z-index: 2;
          animation: twinkleStar linear infinite;
        }
        @keyframes twinkleStar {
          0% { opacity: 0; transform: translateY(0) scale(0.5) rotate(0deg); }
          50% { opacity: 0.9; transform: translateY(-30px) scale(1.3) rotate(180deg); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.5) rotate(360deg); }
        }

        .doctors-banner-content {
          position: relative;
          z-index: 10;
        }
        
        .doctors-banner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(74, 37, 24, 0.15);
          margin-bottom: 3rem;
          min-height: 450px;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .doctors-banner-left {
          background: #110805;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          position: relative;
        }
        .doctors-banner-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .doctors-banner-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
        }
        .doctors-banner-desc strong { color: var(--accent-gold-light); font-weight: 700; }
        
        .doctors-banner-stats {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.12);
          flex-wrap: wrap;
        }
        .db-stat-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-gold);
          text-shadow: 0 0 20px rgba(214, 122, 65, 0.3);
        }
        .db-stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.65); margin-top: 0.2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        
        .doctors-banner-right {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        /* --- INNOVATIVE PHOTO FRAME & ANIMATIONS --- */
        .photo-halo-bg {
          position: absolute;
          inset: 5%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.35) 0%, rgba(201, 168, 76, 0.15) 50%, transparent 80%);
          filter: blur(40px);
          z-index: 0;
          animation: pulseHalo 6s ease-in-out infinite alternate;
        }
        @keyframes pulseHalo {
          0% { opacity: 0.4; transform: scale(0.95); }
          100% { opacity: 0.8; transform: scale(1.08); }
        }

        .innovative-photo-frame {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 420px;
          border-radius: 28px;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(214, 122, 65, 0.3);
          background: #110805;
        }

        /* Laser Scan Line Animation */
        .laser-scan-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, rgba(214, 122, 65, 0.2) 20%, var(--accent-gold) 50%, rgba(214, 122, 65, 0.2) 80%, transparent 100%);
          box-shadow: 0 0 15px var(--accent-gold), 0 0 30px rgba(214, 122, 65, 0.8);
          z-index: 5;
          animation: scanVertical 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          pointer-events: none;
        }
        @keyframes scanVertical {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }

        /* Shimmer Sweep Animation */
        .photo-shimmer-sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.12) 50%, transparent 60%);
          z-index: 4;
          animation: shimmerSweep 8s infinite;
          pointer-events: none;
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          30% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        /* Floating Glass Badges */
        .floating-photo-badge {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(17, 8, 5, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 0.75rem 1.1rem;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 15px rgba(214, 122, 65, 0.15);
        }
        .floating-photo-badge .badge-icon {
          font-size: 1.4rem;
        }
        .floating-photo-badge strong {
          display: block;
          font-size: 0.85rem;
          color: #fff;
          font-family: var(--font-heading);
          line-height: 1.2;
        }
        .floating-photo-badge span {
          font-size: 0.72rem;
          color: var(--accent-gold-light);
          font-weight: 500;
        }

        .badge-top-right {
          top: 20px;
          right: 20px;
        }
        .badge-bottom-left {
          bottom: 25px;
          left: 20px;
        }

        /* Interactive Doctor Tooltip Tags */
        .doc-tag-tooltip {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.4rem 0.85rem;
          border-radius: 30px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
        .doc-tag-tooltip:hover {
          transform: scale(1.05);
          border-color: var(--accent-gold);
        }
        .tag-left {
          bottom: 90px;
          left: 25px;
        }
        .tag-right {
          top: 85px;
          right: 25px;
        }
        .dot-pulse {
          width: 8px;
          height: 8px;
          background: var(--accent-gold);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-gold);
          animation: dotPulse 2s infinite;
        }
        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .tag-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .image-overlay-warm {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(26,12,8,0.3) 0%, transparent 40%),
                      linear-gradient(to top, rgba(26,12,8,0.5) 0%, transparent 35%);
          z-index: 2;
          pointer-events: none;
        }



        /* --- DOCTOR CARDS GRID --- */
        .doctor-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .doctor-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(74, 37, 24, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.15);
          display: flex;
          flex-direction: column;
        }
        .doctor-card-photo {
          position: relative;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, var(--accent-light) 0%, transparent 100%);
          padding: 2rem 2rem 1rem;
        }
        
        .organic-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 260px;
          max-height: 260px;
        }
        .organic-outline {
          position: absolute;
          inset: -12px;
          border: 1px solid var(--accent-gold-light);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: organicMorph 8s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .organic-outline::before, .organic-outline::after {
          content: "✦";
          position: absolute;
          color: var(--accent-gold);
          animation: twinkleStar 3s infinite alternate;
        }
        .organic-outline::before { top: 5%; left: 0%; font-size: 1.5rem; }
        .organic-outline::after { bottom: 10%; right: -5%; font-size: 1.2rem; animation-delay: 1.5s; }
        
        .organic-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          overflow: hidden;
          animation: organicMorph 8s ease-in-out infinite alternate-reverse;
          box-shadow: 0 15px 35px rgba(74, 37, 24, 0.12);
        }
        @keyframes organicMorph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .glow-badge {
          position: absolute;
          bottom: -15px;
          z-index: 10;
          background: rgba(26,12,8,0.92) !important;
          color: var(--accent-gold-light) !important;
          border: 1px solid rgba(214, 122, 65, 0.4);
          box-shadow: 0 10px 20px rgba(214, 122, 65, 0.25);
          backdrop-filter: blur(12px);
          font-size: 0.78rem !important;
          padding: 0.5rem 1.1rem !important;
          border-radius: 30px;
        }

        .doctor-card-body { padding: 2.5rem; display: flex; flex-direction: column; flex-grow: 1; }
        
        .doctor-card-name {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
          font-weight: 800;
        }
        .doctor-card-role {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        .doctor-card-bio {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }
        
        .cv-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--border-color) 0%, transparent 100%);
          margin: 1.5rem 0;
        }

        .doctor-card-creds {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 2rem;
          list-style: none;
          padding: 0;
        }
        .doctor-card-creds li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-dark);
          line-height: 1.5;
        }
        .doctor-card-creds li svg { 
          color: var(--accent-gold); 
          flex-shrink: 0; 
          margin-top: 2px;
          filter: drop-shadow(0 2px 4px rgba(214, 122, 65, 0.3));
        }

        /* Highlight Important Points in Doctor Cards */
        .doctor-card-creds li span strong {
          background: linear-gradient(120deg, rgba(214, 122, 65, 0.15) 0%, rgba(201, 168, 76, 0.25) 100%);
          color: var(--accent-gold-dark);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          border: 1px solid rgba(214, 122, 65, 0.25);
          margin-right: 0.15rem;
          display: inline-block;
          font-weight: 800;
        }
        
        .cv-btn {
          margin-top: auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          font-size: 0.9rem;
          border-color: rgba(214, 122, 65, 0.3);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .cv-btn:hover {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
          color: #fff;
          box-shadow: 0 10px 20px rgba(214, 122, 65, 0.3);
        }

        .doctors-trust-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, var(--bg-dark), #2a150b, #1A0C08, #1a0f08);
          background-size: 300% 300%;
          animation: trustGradient 12s ease infinite;
          border-radius: var(--radius-lg);
          padding: 1.5rem 3rem;
          margin-top: 4rem;
          box-shadow: 0 20px 40px rgba(74, 37, 24, 0.15);
          border: 1px solid rgba(214, 122, 65, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .doctors-trust-strip::after {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(214, 122, 65, 0.15), transparent);
          transform: skewX(-25deg);
          animation: sweepShine 8s infinite;
          pointer-events: none;
        }

        @keyframes trustGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes sweepShine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-gold-light);
        }
        .trust-strip-icon { 
          font-size: 1.25rem; 
          filter: drop-shadow(0 0 8px rgba(214, 122, 65, 0.5)); 
          display: inline-block;
          animation: pulseIcon 3s ease-in-out infinite alternate;
        }
        @keyframes pulseIcon {
          0% { filter: drop-shadow(0 0 4px rgba(214, 122, 65, 0.3)); transform: scale(0.95); }
          100% { filter: drop-shadow(0 0 12px rgba(214, 122, 65, 0.8)); transform: scale(1.05); }
        }
        .trust-strip-divider {
          width: 1px;
          height: 30px;
          background: rgba(214, 122, 65, 0.2);
        }

        @media (max-width: 1024px) {
          .doctors-banner { display: flex; flex-direction: column-reverse; }
          .doctors-banner-left { padding: 3rem 2rem; }
          .doctor-cards-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .doctors-trust-strip { flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
          .trust-strip-divider { display: none; }
        }
        @media (max-width: 640px) {
          .doctors-section-wrapper { padding: 3.5rem 0; }
          .doctors-banner-left { padding: 2.5rem 1.5rem; }
          .db-stat-value { font-size: 1.5rem; }
          .doctor-card-body { padding: 1.5rem; }
          .doctors-trust-strip { padding: 1.5rem; }
          .accreditations-bar { padding: 1rem; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: inline !important; }
          
          /* Fix floating badge overlap */
          .floating-photo-badge {
            padding: 0.5rem 0.75rem;
            gap: 0.5rem;
          }
          .floating-photo-badge .badge-icon {
            font-size: 1.1rem;
          }
          .floating-photo-badge strong {
            font-size: 0.75rem;
          }
          .floating-photo-badge span {
            font-size: 0.65rem;
          }
          .badge-top-right {
            top: 15px;
            right: 15px;
            max-width: 85%;
          }
          .badge-bottom-left {
            bottom: 15px;
            left: 15px;
            max-width: 85%;
          }
          .tag-right {
            top: auto;
            bottom: 150px;
            right: 15px;
          }
          .tag-left {
            bottom: 110px;
            left: 15px;
          }
        }
        .show-mobile { display: none; }
      `}} />
    </section>
  );
}
