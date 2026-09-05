'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, Star, GraduationCap, Sparkles, MapPin, BadgeCheck, Users, Globe, Gem, Tag } from 'lucide-react';
import InnovativeHeroBg from './InnovativeHeroBg';
import AnimatedCounter from './AnimatedCounter';


export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const rawImageParallax = useTransform(scrollY, [0, 500], [0, -60]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageParallax = isMobile ? 0 : rawImageParallax;

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
              <span>Rohtak, Haryana &mdash; Haryana&apos;s Most Trusted Dental Clinic</span>
            </motion.div>

            {/* SEO-Optimised Headline */}
            <motion.h1 className="hs-headline" variants={fadeUp}>
              Best Orthodontist &amp;<br />
              Dental Clinic in<br />
              <span className="hs-headline-accent">Rohtak, Haryana.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p className="hs-tagline" variants={fadeUp}>
              Experience pain-free, advanced dentistry — from <strong className="hs-tag-accent">invisible aligners</strong> to <strong className="hs-tag-accent">permanent implants</strong> &amp; <strong className="hs-tag-accent">full smile makeovers</strong>.
            </motion.p>

            {/* Supporting paragraph */}
            <motion.p className="hs-desc" variants={fadeUp}>
              Get the confident smile you&apos;ve always wanted with personalized, expert care led by <strong>Dr (Prof.) S. K. Yadav</strong>. We offer <strong>In-Clinic &amp; Online Video Consultations</strong> for <strong>Invisalign®</strong>, <strong>SkyAlign™ aligners</strong>, <strong>same-day implants</strong>, and <strong>smile makeovers</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hs-ctas" variants={fadeUp}>
              <a href="#book" className="hs-btn-primary">
                Book Consult (In-Clinic / Video)
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <Link href="/treatments" className="hs-btn-secondary">
                Explore Treatments
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>

            {/* Certification & Recognition Prominent Brand Logos (3 in Row 1, 2 in Row 2 — Big & Crisp) */}
            <motion.div className="hs-trust-strip" variants={fadeUp}>
              <div className="hs-trust-header">
                <span className="hs-trust-dot" />
                <span className="hs-trust-label">Certified &amp; Recognised By</span>
              </div>
              <div className="hs-trust-logos-container">
                <div className="hs-trust-row hs-trust-row-top">
                  <div className="hs-logo-item">
                    <img src="/invisalign-logo.png" alt="Invisalign Provider" className="hs-brand-logo hs-logo-invisalign" title="Certified Invisalign® Provider" />
                  </div>
                  <div className="hs-logo-item">
                    <img src="/wfo-logo.png" alt="World Federation of Orthodontists" className="hs-brand-logo hs-logo-wfo" title="World Federation of Orthodontists (USA) Fellow" />
                  </div>
                  <div className="hs-logo-item">
                    <img src="/damon-logo.png" alt="Damon Braces" className="hs-brand-logo hs-logo-damon" title="Damon® Braces Certified Provider" />
                  </div>
                </div>
                <div className="hs-trust-row hs-trust-row-bottom">
                  <div className="hs-logo-item">
                    <img src="/osstem-implant.jpeg" alt="Osstem Implants" className="hs-brand-logo hs-logo-osstem" title="Osstem® Dental Implants Certified" />
                  </div>
                  <div className="hs-logo-item">
                    <img src="/ios-logo.png" alt="Indian Orthodontic Society" className="hs-brand-logo hs-logo-ios" title="Indian Orthodontic Society Endorsed" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="hs-stats-innovative" variants={fadeUp}>
              
              {/* Card 1: Patients Impacted */}
              <div className="hs-stat-cell hs-stat-patients">
                <div className="hs-stat-top">
                  <div className="hs-stat-icon-wrapper">
                    <div className="hs-stat-icon-box">
                      <Users size={19} strokeWidth={2.2} />
                    </div>
                    <div className="hs-stat-ambient-glow" />
                  </div>
                  <span className="hs-stat-pill-badge">#1 IN HARYANA</span>
                </div>

                <div className="hs-stat-content">
                  <div className="hs-stat-val">
                    <AnimatedCounter target={250000} suffix="+" duration={2200} />
                  </div>
                  <div className="hs-stat-label">PATIENTS IMPACTED</div>
                  <div className="hs-stat-sub">Across Haryana &amp; NCR</div>
                </div>
                <div className="hs-stat-shine" />
              </div>

              {/* Card 2: Clinical Mastery */}
              <div className="hs-stat-cell hs-stat-mastery">
                <div className="hs-stat-top">
                  <div className="hs-stat-icon-wrapper">
                    <div className="hs-stat-icon-box">
                      <Award size={19} strokeWidth={2.2} />
                    </div>
                    <div className="hs-stat-ambient-glow" />
                  </div>
                  <span className="hs-stat-pill-badge">EX-PGI MDS</span>
                </div>

                <div className="hs-stat-content">
                  <div className="hs-stat-val">
                    <AnimatedCounter target={20} suffix="+" duration={2000} /> <span className="hs-stat-unit">Years</span>
                  </div>
                  <div className="hs-stat-label">CLINICAL MASTERY</div>
                  <div className="hs-stat-sub">Ex-PGI Senior Resident</div>
                </div>
                <div className="hs-stat-shine" />
              </div>

              {/* Card 3: Clinic Rating */}
              <div className="hs-stat-cell hs-stat-rating">
                <div className="hs-stat-top">
                  <div className="hs-stat-icon-wrapper">
                    <div className="hs-stat-icon-box">
                      <Star size={19} fill="currentColor" strokeWidth={0} />
                    </div>
                    <div className="hs-stat-ambient-glow" />
                  </div>
                  <span className="hs-stat-pill-badge">GOOGLE 5.0</span>
                </div>

                <div className="hs-stat-content">
                  <div className="hs-stat-val">
                    5.0<span className="hs-stat-star">★</span>
                  </div>
                  <div className="hs-stat-label">CLINIC RATING</div>
                  <div className="hs-stat-sub">Verified 5★ Google Reviews</div>
                </div>
                <div className="hs-stat-shine" />
              </div>

              {/* Card 4: Success Rate */}
              <div className="hs-stat-cell hs-stat-success">
                <div className="hs-stat-top">
                  <div className="hs-stat-icon-wrapper">
                    <div className="hs-stat-icon-box">
                      <ShieldCheck size={19} strokeWidth={2.2} />
                    </div>
                    <div className="hs-stat-ambient-glow" />
                  </div>
                  <span className="hs-stat-pill-badge">CERTIFIED</span>
                </div>

                <div className="hs-stat-content">
                  <div className="hs-stat-val">
                    <AnimatedCounter target={99.4} suffix="%" duration={2500} isDecimal={true} />
                  </div>
                  <div className="hs-stat-label">SUCCESS RATE</div>
                  <div className="hs-stat-sub">Braces, Aligners &amp; Implants</div>
                </div>
                <div className="hs-stat-shine" />
              </div>

            </motion.div>


          </motion.div>

          {/* ---- RIGHT COLUMN ---- */}
          <motion.div
            className="hs-right"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ y: imageParallax }}
          >
            {/* The stage */}
            <div className="hs-stage">

              {/* --- Main Clinic Image --- */}
              <motion.div className="hs-clinic-img-wrap">
                <Image
                  src="/hero/photography/clinic-exterior-v2.webp"
                  alt="Shubh Dental Clinic, Rohtak — Advanced Orthodontics & Implant Centre"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  onError={(e) => { e.target.src = '/hero/photography/clinic-exterior.webp'; }}
                />
                <div className="hs-img-vignette" />
              </motion.div>

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
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 1.25rem 0 2.5rem;
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
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
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
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #B85922;
          background: rgba(214, 122, 65, 0.1);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 10px;
          max-width: 100%;
          box-sizing: border-box;
        }
        .hs-location-pill span {
          line-height: 1.35;
        }

        /* Special Offer Ribbon */
        .hs-offer-ribbon-wrap {
          margin-bottom: 14px;
          max-width: 100%;
          width: 100%;
        }
        .hs-offer-ribbon {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 5px 12px 5px 6px;
          border-radius: 99px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.18);
          transition: all 0.25s ease;
          width: fit-content;
          max-width: 100%;
          box-sizing: border-box;
        }
        .hs-offer-ribbon:hover {
          transform: translateY(-2px);
          border-color: #FF924A;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.28);
        }
        .hs-offer-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 99px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .hs-offer-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: #FFFFFF;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }
        .hs-offer-action {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.72rem;
          font-weight: 800;
          color: #FF9F59;
          margin-left: auto;
          flex-shrink: 0;
        }

        /* Headline */
        .hs-headline {
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.8rem, 3.8vw, 4.6rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.035em;
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
          font-family: var(--font-body), sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
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
          font-family: var(--font-body), sans-serif;
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
          margin-bottom: 28px;
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

        .hs-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--hs-primary);
          border: 2px solid var(--hs-primary);
          padding: 16px 30px;
          border-radius: 99px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.25,1,0.5,1);
          white-space: nowrap;
          backdrop-filter: blur(10px);
        }
        .hs-btn-secondary:hover {
          background: var(--hs-primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(214,122,65,0.3);
        }

        /* ── Certification Trust Logos (3 on Line 1, 2 on Line 2 — Big & Clean) ── */
        .hs-trust-strip {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 1.85rem;
          margin-bottom: 0.85rem;
        }

        .hs-trust-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hs-trust-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #D67A41;
          box-shadow: 0 0 10px rgba(214, 122, 65, 0.8);
        }

        .hs-trust-label {
          font-family: var(--font-body, sans-serif);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6E5B54;
        }

        .hs-trust-logos-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 4px 0;
        }

        .hs-trust-row {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .hs-trust-row-top {
          justify-content: flex-start;
        }

        .hs-trust-row-bottom {
          justify-content: flex-start;
          gap: 32px;
        }

        .hs-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hs-brand-logo {
          width: auto;
          object-fit: contain;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.05));
        }

        .hs-logo-invisalign {
          height: 64px;
          max-width: 220px;
        }

        .hs-logo-wfo {
          height: 68px;
          max-width: 190px;
        }

        .hs-logo-damon {
          height: 60px;
          max-width: 200px;
        }

        .hs-logo-osstem {
          height: 66px;
          max-width: 200px;
        }

        .hs-logo-ios {
          height: 72px;
          max-width: 110px;
        }

        .hs-brand-logo:hover {
          transform: translateY(-4px) scale(1.08);
          filter: drop-shadow(0 8px 18px rgba(214, 122, 65, 0.25));
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

        /* ── Luxury Clinical Stat Cards ── */
        .hs-stats-innovative {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 2rem;
          width: 100%;
        }

        .hs-stat-cell {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(253, 249, 244, 0.92) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.15rem 1.25rem 1.1rem;
          box-shadow: 0 10px 30px -4px rgba(74, 37, 24, 0.05), 0 2px 6px -1px rgba(74, 37, 24, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          cursor: default;
        }

        .hs-stat-cell::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(214, 122, 65, 0.25) 45%, transparent 80%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .hs-stat-cell:hover {
          transform: translateY(-5px) scale(1.015);
          border-color: rgba(214, 122, 65, 0.45);
          box-shadow: 0 20px 42px -6px rgba(214, 122, 65, 0.18), 0 0 0 1px rgba(214, 122, 65, 0.3);
          background: #FFFFFF;
        }

        /* Top Bar of each Card: Icon + Pill Badge */
        .hs-stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .hs-stat-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hs-stat-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .hs-stat-ambient-glow {
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          opacity: 0.15;
          filter: blur(8px);
          transition: opacity 0.35s ease, filter 0.35s ease;
          z-index: 1;
        }

        .hs-stat-cell:hover .hs-stat-icon-box {
          transform: scale(1.1) rotate(4deg);
        }
        .hs-stat-cell:hover .hs-stat-ambient-glow {
          opacity: 0.65;
          filter: blur(12px);
        }

        .hs-stat-pill-badge {
          font-family: var(--font-body, sans-serif);
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 3px 8px;
          border-radius: 99px;
          background: rgba(74, 37, 24, 0.04);
          color: #7A6963;
          border: 1px solid rgba(74, 37, 24, 0.08);
          transition: all 0.3s ease;
        }

        .hs-stat-cell:hover .hs-stat-pill-badge {
          background: rgba(214, 122, 65, 0.1);
          color: #B85922;
          border-color: rgba(214, 122, 65, 0.25);
        }

        /* Color Variations for the 4 Cards */
        .hs-stat-patients .hs-stat-icon-box {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.16), rgba(214, 122, 65, 0.04));
          color: #D67A41;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }
        .hs-stat-patients .hs-stat-ambient-glow {
          background: #D67A41;
        }

        .hs-stat-mastery .hs-stat-icon-box {
          background: linear-gradient(135deg, rgba(184, 89, 34, 0.16), rgba(184, 89, 34, 0.04));
          color: #B85922;
          border: 1px solid rgba(184, 89, 34, 0.25);
        }
        .hs-stat-mastery .hs-stat-ambient-glow {
          background: #B85922;
        }

        .hs-stat-rating .hs-stat-icon-box {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.16), rgba(245, 158, 11, 0.04));
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }
        .hs-stat-rating .hs-stat-ambient-glow {
          background: #F59E0B;
        }

        .hs-stat-success .hs-stat-icon-box {
          background: linear-gradient(135deg, rgba(39, 174, 96, 0.16), rgba(39, 174, 96, 0.04));
          color: #27AE60;
          border: 1px solid rgba(39, 174, 96, 0.25);
        }
        .hs-stat-success .hs-stat-ambient-glow {
          background: #27AE60;
        }

        /* Content & Numbers */
        .hs-stat-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 100%;
        }

        .hs-stat-val {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1.85rem;
          font-weight: 900;
          color: #1A0C06;
          line-height: 1;
          letter-spacing: -0.035em;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: baseline;
        }

        .hs-stat-unit {
          font-size: 1.05rem;
          font-weight: 700;
          color: #7A6963;
          margin-left: 3px;
        }

        .hs-stat-star {
          font-size: 1.35rem;
          color: #F59E0B;
          margin-left: 2px;
        }

        .hs-stat-label {
          font-family: var(--font-body, sans-serif);
          font-size: 0.68rem;
          color: #381E15;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          white-space: nowrap;
          margin-top: 1px;
        }

        .hs-stat-sub {
          font-family: var(--font-body, sans-serif);
          font-size: 0.74rem;
          color: #7A6963;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Top shine ray */
        .hs-stat-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95), transparent);
          opacity: 0.8;
          pointer-events: none;
        }

        /* ── RIGHT ───────────────────────────────────────────────── */
        .hs-right {
          height: clamp(480px, 52vh, 620px);
          min-height: 460px;
          max-height: 640px;
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
          box-shadow: 0 30px 80px rgba(26,18,8,0.12);
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
          top: 20px;
          left: 20px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.96);
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
          bottom: 20px;
          left: -16px;
          z-index: 3;
          width: 280px;
          padding: 14px 18px 12px;
          background: rgba(255,255,255,0.95);
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
          font-family: var(--font-heading), sans-serif;
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
          font-family: var(--font-heading), sans-serif;
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
        @media (min-width: 993px) and (max-width: 1366px) {
          .hs-root {
            padding: 2rem 0 3rem;
          }
          .hs-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 2.25rem;
          }
          .hs-headline {
            font-size: clamp(2.3rem, 3.2vw, 3.2rem);
          }
          .hs-desc {
            font-size: 0.98rem;
            margin-bottom: 24px;
          }
          .hs-right {
            height: 480px;
            min-height: 440px;
          }
          .hs-doctor-panel {
            left: 0;
            bottom: 14px;
            width: 260px;
            padding: 12px 14px;
          }
          .hs-skyalign-card {
            right: 0;
            top: 14px;
          }
        }

        @media (max-width: 992px) {
          .hs-grid { grid-template-columns: 1fr; gap: 40px; }
          .hs-left { text-align: center; align-items: center; }
          .hs-desc { max-width: 600px; }
          .hs-stats-innovative { justify-content: center; }
          .hs-right { height: 60vw; min-height: 380px; max-height: 520px; }
          .hs-doctor-panel { left: 16px; width: 280px; }
          .hs-skyalign-card { right: 16px; }
        }

        @media (max-width: 768px) {
          /* ─ Mobile App Layout ─ */
          .hs-root {
            padding: 0.75rem 0 2rem !important;
            min-height: auto;
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: clip !important;
          }
          .hs-glow-left, .hs-glow-right {
            display: none !important;
          }

          .hs-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100% !important;
            max-width: 100% !important;
          }

          .hs-left { align-items: flex-start; text-align: left; width: 100%; max-width: 100%; }

          .hs-location-pill {
            margin-bottom: 8px !important;
            font-size: 0.68rem !important;
            padding: 5px 10px !important;
            border-radius: 12px !important;
            display: flex !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .hs-offer-ribbon-wrap {
            margin-bottom: 12px !important;
            width: 100% !important;
          }

          .hs-offer-ribbon {
            display: flex !important;
            width: 100% !important;
            justify-content: space-between !important;
            padding: 4px 8px 4px 5px !important;
            box-sizing: border-box !important;
          }

          .hs-offer-text {
            font-size: 0.7rem !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          .hs-headline {
            font-size: clamp(2rem, 8.5vw, 2.7rem);
            margin-bottom: 10px;
            width: 100%;
            word-break: break-word;
          }

          .hs-tagline {
            font-size: 1.05rem !important;
            margin: 0 0 14px !important;
            border-left-width: 3px !important;
            padding-left: 10px !important;
            width: 100%;
            word-break: break-word;
          }

          .hs-desc {
            max-width: 100%;
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
            word-break: break-word;
          }

          .hs-ctas { flex-direction: column; align-items: stretch; width: 100%; }
          .hs-btn-primary {
            justify-content: center;
            padding: 16px 20px;
            font-size: 1rem;
          }
          .hs-btn-ghost { justify-content: center; }

          /* Stack the image + cards vertically */
          .hs-right {
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
            width: 100% !important;
            position: relative !important;
            margin-top: 1.25rem !important;
            margin-bottom: 0.75rem !important;
            clear: both !important;
          }
          /* Hide floating overlay cards and Google rating pill on mobile view */
          .hs-doctor-panel,
          .hs-skyalign-card,
          .hs-google-pill {
            display: none !important;
          }

          /* On mobile, stage displays clean, unobstructed clinic building highlight */
          .hs-stage {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
          }
          .hs-clinic-img-wrap {
            position: relative !important;
            width: 100% !important;
            height: 250px !important;
            inset: auto !important;
            border-radius: 18px !important;
            overflow: hidden !important;
            box-shadow: 0 10px 30px rgba(26, 18, 8, 0.12) !important;
            display: block !important;
          }
          .hs-clinic-img-wrap img {
            object-fit: cover !important;
            object-position: center 65% !important;
          }
          .hs-img-vignette {
            opacity: 0.25 !important;
          }

          /* Trust Logos Mobile (3 on Top Line, 2 on Bottom Line — Highly Readable) */
          .hs-trust-strip {
            margin-top: 1.35rem;
            margin-bottom: 0.85rem;
            width: 100%;
          }
          .hs-trust-logos-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            width: 100% !important;
          }
          .hs-trust-row-top {
            display: grid !important;
            grid-template-columns: 1.25fr 1fr 1.2fr !important;
            align-items: center !important;
            justify-items: center !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .hs-trust-row-bottom {
            display: grid !important;
            grid-template-columns: 1.4fr 0.9fr !important;
            align-items: center !important;
            justify-items: center !important;
            gap: 16px !important;
            width: 85% !important;
            margin: 0 auto !important;
          }
          .hs-logo-item {
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hs-brand-logo {
            width: 100% !important;
            object-fit: contain !important;
          }
          .hs-logo-invisalign {
            height: 52px !important;
            max-width: 155px !important;
          }
          .hs-logo-wfo {
            height: 56px !important;
            max-width: 130px !important;
          }
          .hs-logo-damon {
            height: 48px !important;
            max-width: 145px !important;
          }
          .hs-logo-osstem {
            height: 54px !important;
            max-width: 150px !important;
          }
          .hs-logo-ios {
            height: 58px !important;
            max-width: 80px !important;
          }
          @media (max-width: 420px) {
            .hs-trust-logos-container {
              gap: 12px !important;
            }
            .hs-trust-row-top {
              gap: 10px !important;
            }
            .hs-trust-row-bottom {
              width: 92% !important;
              gap: 16px !important;
            }
            .hs-logo-invisalign {
              height: 46px !important;
              max-width: 135px !important;
            }
            .hs-logo-wfo {
              height: 48px !important;
              max-width: 115px !important;
            }
            .hs-logo-damon {
              height: 42px !important;
              max-width: 125px !important;
            }
            .hs-logo-osstem {
              height: 48px !important;
              max-width: 130px !important;
            }
            .hs-logo-ios {
              height: 50px !important;
              max-width: 70px !important;
            }
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
          .hs-stats-innovative {
            gap: 10px !important;
            grid-template-columns: repeat(2, 1fr) !important;
            margin-top: 1.25rem !important;
            margin-bottom: 0.5rem !important;
            width: 100% !important;
          }
          .hs-stat-cell {
            padding: 0.85rem 0.85rem;
            gap: 0.7rem;
            border-radius: 16px;
          }
          .hs-stat-icon-box {
            width: 38px;
            height: 38px;
            border-radius: 12px;
          }
          .hs-stat-val {
            font-size: 1.35rem;
          }
          .hs-stat-label {
            font-size: 0.62rem;
          }
          .hs-stat-sub {
            font-size: 0.65rem;
          }
          @media (max-width: 480px) {
            .hs-stats-innovative {
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
            }
            .hs-stat-cell {
              padding: 0.75rem 0.75rem;
              gap: 0.6rem;
            }
            .hs-stat-icon-box {
              width: 34px;
              height: 34px;
            }
            .hs-stat-val {
              font-size: 1.22rem;
            }
          }
        }

      `}} />
    </>
  );
}
