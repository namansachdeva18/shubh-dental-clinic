'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, Star, GraduationCap, Sparkles, MapPin, BadgeCheck } from 'lucide-react';
import InnovativeHeroBg from './InnovativeHeroBg';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 500], [0, -60]);

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const fadeUp = {
    hidden: { y: 28, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 22 } }
  };



  return (
    <>
      <section className="hs-root" ref={containerRef} aria-label="Hero">

        <InnovativeHeroBg />

        <div className="container hs-grid">

          {/* ---- LEFT COLUMN ---- */}
          <motion.div className="hs-left" initial="hidden" animate="show" variants={stagger}>

            {/* Location pill */}
            <motion.div className="hs-location-pill" variants={fadeUp}>
              <MapPin size={13} />
              <span>Rohtak’s Best Orthodontist &amp; Dental Implant Specialist</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="hs-headline" variants={fadeUp}>
              Rohtak’s #1 Braces,<br />
              Implants &amp;<br />
              <span className="hs-headline-accent">Invisalign® Clinic.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p className="hs-tagline" variants={fadeUp}>
              Specialist orthodontist &amp; implant surgeon in Rohtak — <strong className="hs-tag-accent">Damon® braces</strong>, <strong className="hs-tag-accent">Invisalign®</strong>, <strong className="hs-tag-accent">dental implants</strong> &amp; <strong className="hs-tag-accent">full smile makeovers</strong>.
            </motion.p>

            {/* Supporting paragraph */}
            <motion.p className="hs-desc" variants={fadeUp}>
              Haryana’s <strong>most awarded</strong> orthodontic centre, led by <strong>Dr (Prof.) S. K. Yadav</strong> — <strong>Ex-PGI Chandigarh</strong>, Fellow WFO (USA). Offering <strong>self-ligating Damon® braces</strong>, <strong>Invisalign® &amp; SkyAlign™ clear aligners</strong>, <strong>same-day dental implants</strong>, and <strong>porcelain veneers</strong> with <strong>cutting-edge 3D digital planning</strong> — all under one roof in Rohtak.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hs-ctas" variants={fadeUp}>
              <a href="#book" className="hs-btn-primary">
                Reserve Your Consultation
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </motion.div>

            {/* Micro-stats strip */}
            <motion.div className="hs-stats" variants={fadeUp}>
              <div className="hs-stat hs-stat-glow">
                <strong><AnimatedCounter target="20" suffix="+" duration={2500} /></strong>
                <span>Years Clinical Mastery</span>
              </div>
              <div className="hs-stat hs-stat-glow">
                <strong><AnimatedCounter target="20000" suffix="+" duration={3000} /></strong>
                <span>Smiles Transformed</span>
              </div>
              <div className="hs-stat hs-stat-glow">
                <strong><AnimatedCounter target="654" suffix="+" duration={3500} /></strong>
                <span>Global Academic Citations</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ---- RIGHT COLUMN ---- */}
          <motion.div
            className="hs-right"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The stage */}
            <div className="hs-stage">

              {/* --- Main Clinic Image --- */}
              <motion.div className="hs-clinic-img-wrap">
                <Image
                  src="/hero/photography/clinic-exterior.webp"
                  alt="Shubh Dental Clinic, Rohtak — Advanced Orthodontics & Implant Centre"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  onError={(e) => { e.target.src = '/hero-image.webp'; }}
                />
                <div className="hs-img-vignette" />
              </motion.div>

              {/* --- Google Rating Pill (top-left of image) --- */}
              <motion.div
                className="hs-google-pill"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="hs-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className="hs-rating-val">5.0</span>
                <span className="hs-rating-label">Google</span>
              </motion.div>

              {/* --- Unified Doctor Panel (bottom-left, bleeds out) --- */}
              <motion.div
                className="hs-doctor-panel"
                initial={{ opacity: 0, x: -32, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8, ease: 'easeOut' }}
              >
                {[
                  {
                    src: '/hero/portraits/doctor-sumit.webp',
                    alt: 'Dr (Prof.) S. K. Yadav',
                    name: 'Dr (Prof.) S. K. Yadav',
                    role: 'BDS, MDS, Fellow WFO (USA)',
                    tags: 'Braces & Implants Specialist',
                  },
                  {
                    src: '/hero/portraits/doctor-achla.webp',
                    alt: 'Dr (Prof.) Achla Yadav',
                    name: 'Dr (Prof.) Achla Yadav',
                    role: 'BDS, MDS, MIAOMP',
                    tags: 'Consultant Oral Pathologist',
                  },
                ].map((dr, i) => (
                  <div key={i} className={`hs-doc-row ${i > 0 ? 'hs-doc-row--bordered' : ''}`}>
                    <div className="hs-doc-avatar">
                      <Image src={dr.src} alt={dr.alt} fill style={{ objectFit: 'cover' }} sizes="48px"
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="hs-doc-info">
                      <strong>{dr.name}</strong>
                      <span>{dr.role}</span>
                      <em>{dr.tags}</em>
                    </div>
                  </div>
                ))}
                <div className="hs-research-row">
                  <GraduationCap size={15} className="hs-research-icon" />
                  <span><strong>654+</strong> Citations · <strong>107</strong> Publications</span>
                </div>
              </motion.div>

              {/* --- SkyAlign Card (top-right, bleed out) --- */}
              <motion.div
                className="hs-skyalign-card"
                initial={{ opacity: 0, x: 32, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
              >
                <div className="hs-sa-img">
                  <Image src="/invisalign.webp?v=2" alt="SkyAlign Clear Aligners" fill
                    style={{ objectFit: 'contain' }} sizes="56px"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="hs-sa-meta">
                  <strong>SkyAlign™</strong>
                  <span>In-House Clear Aligners</span>
                  <em>Precision Fit · Expert Supervised</em>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================================================================
          ACCREDITATIONS & ACADEMIC FELLOWSHIPS (below hero, floating cards)
      ================================================================ */}
      <section className="hs-accreditations-section">
        <div className="container">
          <motion.div
            className="accreditations-bar-v2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="accreditations-title">Official Accreditations &amp; Academic Fellowships</div>
            
            <div className="accreditations-grid">
              <div className="accreditation-logo-card">
                <div className="logo-img-container">
                  <Image src="/ios-logo.png" alt="Indian Orthodontic Society Endorsed" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="logo-card-label">IOS Endorsed Orthodontist</span>
              </div>

              <div className="accreditation-logo-card">
                <div className="logo-img-container">
                  <Image src="/invisalign-logo.png" alt="Invisalign Provider" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="logo-card-label">Certified Invisalign® Provider</span>
              </div>

              <div className="accreditation-logo-card">
                <div className="logo-img-container">
                  <Image src="/damon-logo.png" alt="Damon Braces Provider" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="logo-card-label">Official Damon® Provider</span>
              </div>

              <div className="accreditation-logo-card">
                <div className="logo-img-container">
                  <Image src="/wfo-logo.png" alt="World Federation of Orthodontists" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="logo-card-label">Fellow WFO USA</span>
              </div>

              <div className="accreditation-logo-card">
                <div className="logo-img-container">
                  <Image src="/osstem-implant.jpeg" alt="Osstem Implant Provider" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="logo-card-label">Osstem Implant Provider</span>
              </div>
            </div>

            <div className="accreditations-academic-strip">
              <div className="academic-badge-chip">
                <div className="academic-badge-shimmer"></div>
                <div className="academic-badge-content">
                  <span className="academic-badge-icon">🎓</span>
                  <span className="academic-badge-text">Ex-Senior Resident, PGI Chandigarh</span>
                </div>
              </div>
              <div className="academic-badge-chip">
                <div className="academic-badge-shimmer"></div>
                <div className="academic-badge-content">
                  <span className="academic-badge-icon">🏛️</span>
                  <span className="academic-badge-text">Ex-Assistant Professor, PGI Rohtak Faculty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          CSS
      ================================================================ */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── TOKENS ─────────────────────────────────────────────── */
        :root {
          --hs-bg:      #FAF9F6;
          --hs-surface: #FFFFFF;
          --hs-primary: #1A0C06;
          --hs-accent:  #D67A41;
          --hs-accent-glow: #E68A51;
          --hs-muted:   #5A4D46;
          --hs-border:  rgba(214, 122, 65, 0.15);
          --hs-gold:    #C9A84C;
          --hs-r:       20px;
          --hs-r-lg:    28px;
        }

        /* ── ROOT ────────────────────────────────────────────────── */
        .hs-root {
          position: relative;
          background: transparent;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0 60px;
          overflow: hidden;
        }

        /* ── AMBIENT GLOWS ───────────────────────────────────────── */
        .hs-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .hs-glow-left {
          position: absolute;
          top: -20%;
          left: -15%;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(181,101,29,0.06) 0%, transparent 65%);
          border-radius: 50%;
        }
        .hs-glow-right {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(181,101,29,0.04) 0%, transparent 65%);
          border-radius: 50%;
        }

        /* ── GRID ────────────────────────────────────────────────── */
        .hs-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── LEFT ────────────────────────────────────────────────── */
        .hs-left {
          display: flex;
          flex-direction: column;
        }

        /* Location pill */
        .hs-location-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #B85922;
          background: rgba(214, 122, 65, 0.1);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
        }

        /* Headline */
        .hs-headline {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: clamp(2.8rem, 3.8vw, 4.6rem);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: var(--hs-primary);
          margin: 0 0 16px;
        }
        .hs-headline-accent {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 40%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Tagline */
        .hs-tagline {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #2A1A14;
          margin: 0 0 24px;
          letter-spacing: -0.015em;
          border-left: 3px solid #D67A41;
          padding-left: 1rem;
          line-height: 1.55;
        }

        .hs-tag-accent {
          color: #B85922;
          font-weight: 700;
        }

        /* Description */
        .hs-desc {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 1.1rem;
          line-height: 1.85;
          color: #4A3E37;
          max-width: 540px;
          margin: 0 0 40px;
          letter-spacing: -0.01em;
        }

        /* Editorial Highlights */
        .hs-hl {
          background: linear-gradient(120deg, rgba(214, 122, 65, 0.15) 0%, rgba(214, 122, 65, 0.05) 100%);
          color: #1A0C06;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          border-bottom: 2px solid rgba(214, 122, 65, 0.4);
          transition: all 0.2s ease;
        }
        .hs-hl:hover {
          background: rgba(214, 122, 65, 0.22);
          border-bottom-color: #D67A41;
        }

        .hs-hl--primary {
          background: linear-gradient(120deg, rgba(184, 89, 34, 0.18) 0%, rgba(184, 89, 34, 0.06) 100%);
          color: #7A340F;
          border-bottom: 2px solid #B85922;
        }

        .hs-hl--gold {
          background: linear-gradient(120deg, rgba(201, 168, 76, 0.2) 0%, rgba(201, 168, 76, 0.08) 100%);
          color: #1A0C06;
          border-bottom: 2px solid #C9A84C;
        }

        /* CTAs */
        .hs-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--hs-primary);
          color: #fff;
          padding: 18px 40px;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          transition: transform 0.25s cubic-bezier(0.25,1,0.5,1),
                      box-shadow 0.25s cubic-bezier(0.25,1,0.5,1),
                      background 0.2s;
          box-shadow: 0 16px 40px rgba(26,18,8,0.18);
          white-space: nowrap;
        }
        .hs-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 28px 56px rgba(26,18,8,0.28);
          background: #000;
        }

        .hs-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--hs-primary);
          padding: 18px 24px;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(26,18,8,0.25);
          transition: text-decoration-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .hs-btn-ghost:hover {
          color: var(--hs-accent);
          text-decoration-color: var(--hs-accent);
        }

        /* Stats */
        .hs-stats {
          display: flex;
          align-items: stretch;
          gap: 1.15rem;
          margin-top: 2rem;
          width: 100%;
        }
        .hs-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(122, 52, 15, 0.18);
          border-radius: 24px;
          padding: 1.35rem 0.85rem;
          box-shadow: 0 8px 24px rgba(122, 52, 15, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .hs-stat:hover {
          transform: translateY(-5px);
          border-color: rgba(122, 52, 15, 0.45);
          box-shadow: 0 18px 40px rgba(122, 52, 15, 0.14);
          background: rgba(255, 255, 255, 0.9);
        }
        .hs-stat-glow strong {
          position: relative;
          display: inline-block;
          font-family: var(--font-heading, Georgia, serif);
          font-size: 2.25rem;
          font-weight: 900;
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 50%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .hs-stat span {
          font-size: 0.8rem;
          color: #110805;
          font-weight: 800;
          margin-top: 6px;
          line-height: 1.35;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* ── RIGHT ───────────────────────────────────────────────── */
        .hs-right {
          height: 82vh;
          min-height: 560px;
          max-height: 780px;
          position: relative;
        }
        .hs-stage {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Main clinic image */
        .hs-clinic-img-wrap {
          position: absolute;
          inset: 0;
          border-radius: var(--hs-r-lg);
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(26,18,8,0.14);
          will-change: transform;
        }
        .hs-img-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(26,18,8,0) 50%,
            rgba(26,18,8,0.35) 100%
          );
          z-index: 1;
        }

        /* ── GLASS BASE ──────────────────────────────────────────── */
        .hs-glass {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255,255,255,0.65);
          border-radius: var(--hs-r);
          box-shadow: 0 16px 48px rgba(26,18,8,0.10);
        }

        /* ── GOOGLE PILL ─────────────────────────────────────────── */
        .hs-google-pill {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: rgba(255,255,255,0.95);
          border-radius: 99px;
          box-shadow: 0 8px 24px rgba(26,18,8,0.12);
          border: 1px solid rgba(255,255,255,0.8);
        }
        .hs-stars {
          display: flex;
          gap: 2px;
        }
        .hs-rating-val {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--hs-primary);
        }
        .hs-rating-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--hs-muted);
        }

        /* ── DOCTOR PANEL ────────────────────────────────────────── */
        .hs-doctor-panel {
          position: absolute;
          bottom: 28px;
          left: -32px;
          z-index: 3;
          width: 300px;
          padding: 20px 22px 16px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: var(--hs-r);
          box-shadow: 0 20px 50px rgba(26,18,8,0.13);
          animation: floatA 7s ease-in-out infinite;
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        .hs-doc-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 0;
        }
        .hs-doc-row--bordered {
          border-top: 1px solid var(--hs-border);
        }
        .hs-doc-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #e8e4df;
          border: 2px solid #fff;
          box-shadow: 0 3px 10px rgba(26,18,8,0.08);
        }
        .hs-doc-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .hs-doc-info strong {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--hs-primary);
          line-height: 1.2;
          font-family: var(--font-heading, Georgia, serif);
        }
        .hs-doc-info span {
          font-size: 0.72rem;
          color: var(--hs-muted);
          font-weight: 500;
        }
        .hs-doc-info em {
          font-size: 0.7rem;
          font-style: normal;
          color: var(--hs-accent);
          font-weight: 600;
          margin-top: 1px;
        }
        .hs-research-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--hs-border);
          font-size: 0.75rem;
          color: var(--hs-muted);
        }
        .hs-research-row strong {
          color: var(--hs-primary);
          font-weight: 800;
        }
        .hs-research-icon {
          color: var(--hs-accent);
          flex-shrink: 0;
        }

        /* ── SKYALIGN CARD ───────────────────────────────────────── */
        .hs-skyalign-card {
          position: absolute;
          top: 28px;
          right: -28px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px 14px 14px;
          width: 230px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: var(--hs-r);
          box-shadow: 0 16px 48px rgba(26,18,8,0.12);
          animation: floatB 8s ease-in-out infinite;
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .hs-sa-img {
          width: 52px;
          height: 52px;
          position: relative;
          flex-shrink: 0;
          background: #f5f0eb;
          border-radius: 10px;
          overflow: hidden;
        }
        .hs-sa-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hs-sa-meta strong {
          font-family: var(--font-heading, Georgia, serif);
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--hs-primary);
        }
        .hs-sa-meta span {
          font-size: 0.72rem;
          color: var(--hs-muted);
          font-weight: 500;
        }
        .hs-sa-meta em {
          font-size: 0.68rem;
          font-style: normal;
          color: var(--hs-accent);
          font-weight: 600;
        }

        /* ── ACCREDITATIONS STRIP V2 ─────────────────────────────── */
        .hs-accreditations-section {
          background: linear-gradient(to bottom, #FAF9F6 0%, #FFFFFF 100%);
          border-top: 1px solid rgba(214, 122, 65, 0.12);
          padding: 4.5rem 0 3rem;
          position: relative;
        }
        .accreditations-bar-v2 {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 28px;
          padding: 3.5rem 2.5rem 3rem;
          box-shadow: 0 20px 50px rgba(122, 52, 15, 0.04);
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .accreditations-title {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #B85922;
          margin-bottom: 2.5rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .accreditations-title::before, .accreditations-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(214, 122, 65, 0.3) 50%, transparent);
          max-width: 150px;
        }

        .accreditations-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 24px;
          margin-bottom: 2.5rem;
        }

        .accreditation-logo-card {
          flex: 1 1 calc(20% - 24px);
          min-width: 170px;
          max-width: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.12);
          border-radius: 24px;
          padding: 28px 20px;
          box-shadow: 0 10px 30px rgba(122, 52, 15, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          text-align: center;
        }

        /* Staggered Float Animation */
        .accreditation-logo-card:nth-child(1) { animation: floatLogoCard 6s ease-in-out infinite; }
        .accreditation-logo-card:nth-child(2) { animation: floatLogoCard 6s ease-in-out infinite 1.5s; }
        .accreditation-logo-card:nth-child(3) { animation: floatLogoCard 6s ease-in-out infinite 3.0s; }
        .accreditation-logo-card:nth-child(4) { animation: floatLogoCard 6s ease-in-out infinite 4.5s; }
        .accreditation-logo-card:nth-child(5) { animation: floatLogoCard 6s ease-in-out infinite 2.25s; }

        @keyframes floatLogoCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .accreditation-logo-card:hover {
          transform: translateY(-12px) !important;
          border-color: rgba(214, 122, 65, 0.4);
          box-shadow: 0 20px 40px rgba(214, 122, 65, 0.12);
        }

        .logo-img-container {
          position: relative;
          width: 90%;
          height: 72px;
          margin-bottom: 16px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accreditation-logo-card:hover .logo-img-container {
          transform: scale(1.06);
        }

        .logo-card-label {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--hs-primary);
          line-height: 1.25;
        }

        .accreditations-academic-strip {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 28px;
          border-top: 1px dashed rgba(214, 122, 65, 0.15);
          padding-top: 2rem;
          flex-wrap: wrap;
        }

        .academic-badge-chip {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FFFFFF, #FAF9F6);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 99px;
          padding: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.04), inset 0 0 0 1px rgba(255,255,255,1);
          cursor: default;
        }

        .academic-badge-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(214, 122, 65, 0.15), transparent);
          transform: translateX(-150%);
          transition: transform 0.6s ease-in-out;
          z-index: 0;
        }

        .academic-badge-chip:hover .academic-badge-shimmer {
          transform: translateX(150%);
        }

        .academic-badge-chip:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(214, 122, 65, 0.12), inset 0 0 0 1px rgba(255,255,255,1);
          border-color: rgba(214, 122, 65, 0.4);
        }

        .academic-badge-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          padding: 10px 24px;
          border-radius: 99px;
        }

        .academic-badge-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.15), rgba(201, 168, 76, 0.05));
          border-radius: 50%;
          border: 1px solid rgba(214, 122, 65, 0.2);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.8);
        }

        .academic-badge-text {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 0.94rem;
          font-weight: 700;
          color: #2A1A14;
          letter-spacing: -0.01em;
        }

        /* ── RESPONSIVE ──────────────────────────────────────────── */
        @media (max-width: 1150px) {
          .hs-grid { grid-template-columns: 1fr; gap: 48px; }
          .hs-left { text-align: center; align-items: center; }
          .hs-desc { max-width: 600px; }
          .hs-stats { justify-content: center; }

          .hs-right { height: 65vw; min-height: 400px; max-height: 560px; }

          /* Reposition floating cards for tablet */
          .hs-doctor-panel { left: 16px; width: 280px; }
          .hs-skyalign-card { right: 16px; }
        }

        @media (max-width: 768px) {
          /* ─ Mobile App Layout ─ */
          .hs-root {
            padding: 84px 0 100px;
            min-height: auto;
          }

          .hs-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .hs-left { align-items: flex-start; text-align: left; }

          .hs-headline {
            font-size: clamp(2.2rem, 9vw, 3.2rem);
            margin-bottom: 12px;
          }

          .hs-desc { max-width: 100%; font-size: 0.95rem; }

          .hs-ctas { flex-direction: column; align-items: stretch; }
          .hs-btn-primary {
            justify-content: center;
            padding: 20px;
            font-size: 1.05rem;
          }
          .hs-btn-ghost { justify-content: center; }

          /* Stack the image + cards vertically */
          .hs-right {
            height: auto;
            min-height: auto;
            max-height: none;
            width: 100%;
          }
          .hs-clinic-img-wrap { border-radius: 18px; }

          /* Float cards become inline blocks below image */
          .hs-doctor-panel {
            position: relative;
            bottom: auto;
            left: auto;
            width: 100%;
            animation: none;
            border-radius: 16px;
          }
          .hs-skyalign-card {
            position: relative;
            top: auto;
            right: auto;
            width: 100%;
            animation: none;
            border-radius: 16px;
          }

          /* On mobile, stack stage as column */
          .hs-stage {
            display: flex;
            flex-direction: column;
            gap: 12px;
            height: auto;
          }
          .hs-clinic-img-wrap {
            position: relative;
            height: 280px;
            inset: auto;
          }
          .hs-google-pill {
            position: absolute;
            top: 14px;
            left: 14px;
          }

          /* Accreditations Mobile */
          .hs-accreditations-section {
            padding: 2.5rem 0 2rem;
          }
          .accreditations-grid {
            gap: 16px !important;
          }
          .accreditations-bar-v2 {
            padding: 2rem 1.5rem !important;
            border-radius: 20px !important;
            margin-bottom: 2rem !important;
          }
          .accreditations-academic-strip {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .academic-badge-chip {
            justify-content: center;
          }
          @media (max-width: 500px) {
            .accreditation-logo-card {
              min-width: 100% !important;
            }
          }

          /* Stats mobile */
          .hs-stats {
            gap: 12px;
            flex-wrap: wrap;
          }
          .hs-stat {
            padding: 0.85rem 0.4rem !important;
          }
          .hs-stat strong {
            font-size: 1.35rem;
          }
          @media (max-width: 480px) {
            .hs-stats {
              flex-direction: column !important;
            }
          }
        }

      `}} />
    </>
  );
}
