'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  Calendar, MessageSquare, Phone, Heart, Smile, Star, Check, Award
} from 'lucide-react';

const AnimatedToothVector = () => {
  return (
    <div className="kids-vector-wrapper" style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="animated-tooth-svg">
        {/* Floating Bubbles / Sparkles */}
        <motion.g animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
          <circle cx="70" cy="120" r="16" fill="rgba(214, 122, 65, 0.12)" stroke="#D67A41" strokeWidth="2" />
          <circle cx="78" cy="115" r="4" fill="#D67A41" />
        </motion.g>

        <motion.g animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3.2, delay: 0.8, ease: "easeInOut" }}>
          <circle cx="320" cy="90" r="12" fill="rgba(201, 168, 76, 0.12)" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="325" cy="87" r="3" fill="#C9A84C" />
        </motion.g>

        {/* The Tooth Character */}
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
          {/* Shadow */}
          <path
            d="M130,140 C130,70 180,70 200,105 C220,70 270,70 270,140 C270,190 245,230 245,280 C245,310 225,320 210,300 Q200,285 190,300 C175,320 155,310 155,280 C155,230 130,190 130,140 Z"
            fill="rgba(214, 122, 65, 0.15)"
            transform="translate(4, 10)"
          />
          {/* Body */}
          <path
            d="M130,140 C130,70 180,70 200,105 C220,70 270,70 270,140 C270,190 245,230 245,280 C245,310 225,320 210,300 Q200,285 190,300 C175,320 155,310 155,280 C155,230 130,190 130,140 Z"
            fill="#FFFFFF"
            stroke="#2A150B"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          {/* Eyes */}
          <circle cx="175" cy="160" r="9" fill="#2A150B" />
          <circle cx="178" cy="157" r="3" fill="#ffffff" />
          <circle cx="225" cy="160" r="9" fill="#2A150B" />
          <circle cx="228" cy="157" r="3" fill="#ffffff" />

          {/* Rosy Cheeks */}
          <ellipse cx="155" cy="180" rx="11" ry="7" fill="#D67A41" opacity="0.35" />
          <ellipse cx="245" cy="180" rx="11" ry="7" fill="#D67A41" opacity="0.35" />

          {/* Smile */}
          <path d="M185,185 Q200,210 215,185" fill="none" stroke="#2A150B" strokeWidth="5" strokeLinecap="round" />
        </motion.g>

        {/* The Toothbrush */}
        <motion.g
          animate={{ x: [0, -15, 0, -10, 0], y: [0, 8, 0, 4, 0], rotate: [0, -4, 0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          style={{ originX: "280px", originY: "150px" }}
        >
          <g transform="translate(180, 90) rotate(35)">
            <path d="M5, -25 C-5,-45 25,-45 30,-25 C35,-5 0,-5 5,-25 Z" fill="#FAF9F6" stroke="#D67A41" strokeWidth="4" />
            <rect x="0" y="-20" width="45" height="20" fill="#FFFFFF" stroke="#2A150B" strokeWidth="4" />
            <line x1="15" y1="-20" x2="15" y2="0" stroke="#2A150B" strokeWidth="3" />
            <line x1="30" y1="-20" x2="30" y2="0" stroke="#2A150B" strokeWidth="3" />
            <rect x="-5" y="0" width="55" height="18" rx="8" fill="#C9A84C" stroke="#2A150B" strokeWidth="4" />
            <rect x="40" y="2" width="110" height="14" rx="7" fill="#D67A41" stroke="#2A150B" strokeWidth="4" />
          </g>
        </motion.g>

        {/* Sparkle */}
        <motion.g animate={{ scale: [0, 1, 0], rotate: [0, 90, 180] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} style={{ originX: "130px", originY: "80px" }}>
          <path d="M130,60 L133,77 L150,80 L133,83 L130,100 L127,83 L110,80 L127,77 Z" fill="#C9A84C" />
        </motion.g>
      </svg>
    </div>
  );
};

const KidsVectors = {
  gentleComfort: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#D67A41" />
      <path d="M12 7c-1.5 0-2.5 1-2.5 2.5 0 1.8 1.5 3 2.5 4 1-1 2.5-2.2 2.5-4 0-1.5-1-2.5-2.5-2.5z" stroke="#F4B382" strokeWidth="1.4" />
    </svg>
  ),
  enamelShield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D67A41" />
      <path d="M12 8v8M8 12h8" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  orthoGrowth: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14C4 8.5 7.5 5 12 5s8 3.5 8 9" stroke="#D67A41" />
      <circle cx="6" cy="14" r="2" fill="#F4B382" />
      <circle cx="12" cy="7" r="2" fill="#D67A41" />
      <circle cx="18" cy="14" r="2" fill="#F4B382" />
    </svg>
  ),
  braveRewards: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" stroke="#D67A41" />
      <path d="M8.5 14L6 21l6-3.5 6 3.5-2.5-7" stroke="#F4B382" />
      <circle cx="12" cy="9" r="2" fill="#C9A84C" />
    </svg>
  )
};

const WHAT_KIDS_GET = [
  {
    Icon: KidsVectors.gentleComfort,
    title: '100% Pain-Free & Fear-Free',
    desc: 'Gentle, soothing communication and pain-free pediatric techniques so children never fear the dentist.'
  },
  {
    Icon: KidsVectors.enamelShield,
    title: 'Cavity Prevention & Sealants',
    desc: 'Fluoride varnish and protective pit/fissure sealants that shield young enamel against decay.'
  },
  {
    Icon: KidsVectors.orthoGrowth,
    title: 'Early Growth & Braces Check',
    desc: 'Phase-1 interceptive orthodontic assessment to correct jaw growth, thumb-sucking, and crowding early.'
  },
  {
    Icon: KidsVectors.braveRewards,
    title: 'Cavity-Free Club Rewards',
    desc: 'Rewarding brave smiles with certificates, fun stickers, and building lifelong dental confidence.'
  }
];

const PEDIATRIC_SERVICES = [
  {
    title: 'Painless Cavity Fillings',
    desc: 'Tooth-colored biocompatible composite fillings placed with gentle, child-friendly care.'
  },
  {
    title: 'Fluoride & Enamel Shield',
    desc: 'Non-invasive protective coatings that make developing teeth resistant to sugar acid.'
  },
  {
    title: 'Habit Breaking Appliances',
    desc: 'Comfortable appliances for thumb-sucking, tongue-thrusting, and mouth breathing.'
  },
  {
    title: 'Space Maintainers & Cleanings',
    desc: 'Guiding permanent teeth into proper alignment when baby teeth are lost early.'
  }
];

export default function KidsDentistry() {
  const whatsappUrl = 'https://wa.me/918685048414?text=' + encodeURIComponent(
    'Hi Dr. Yadav! I would like to book a Gentle Dental Checkup for my child at Shubh Dental Clinic.'
  );

  return (
    <section id="kids" className="kids-section-root" aria-label="Pediatric and Children Dentistry">
      <div id="pediatric" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div className="kids-container">
        
        {/* SECTION HEADER */}
        <div className="kids-header">
          <div className="kids-pill-badge">
            <Sparkles size={14} className="sparkle-icon" aria-hidden="true" />
            <span>Gentle Pediatric Dentistry · Rohtak</span>
          </div>

          <h2 className="kids-title font-heading">
            Gentle &amp; Fear-Free <br />
            <span className="copper-gradient">Dental Care for Children</span>
          </h2>

          <p className="kids-subtitle">
            We turn dental visits into positive, tear-free experiences. From first tooth checkups to cavity prevention and early braces assessments.
          </p>
        </div>

        {/* 1. WHAT YOUR CHILD GETS (4-PILLAR VALUE GRID) */}
        <div className="what-kids-get-grid">
          {WHAT_KIDS_GET.map((item, idx) => (
            <div key={idx} className="wkg-card">
              <div className="wkg-icon-box" aria-hidden="true">
                <item.Icon />
              </div>
              <div className="wkg-text">
                <h3 className="wkg-title">{item.title}</h3>
                <p className="wkg-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. PEDIATRIC HIGHLIGHTS & PLAYFUL POLAROID CARD SHOWCASE */}
        <div className="kids-main-showcase">
          
          {/* Left: Core Treatments & Booking CTA */}
          <div className="kids-services-card">
            <div className="services-card-header">
              <span className="services-eyebrow">Preventative &amp; Gentle Care</span>
              <h3 className="services-heading font-heading">Pediatric Dental Treatments</h3>
            </div>

            <div className="pediatric-services-grid">
              {PEDIATRIC_SERVICES.map((s, idx) => (
                <div key={idx} className="p-service-box">
                  <div className="p-service-header">
                    <CheckCircle2 size={17} className="check-icon-gold" aria-hidden="true" />
                    <strong className="p-service-name">{s.title}</strong>
                  </div>
                  <p className="p-service-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="kids-actions-row">
              <a href="#book" className="btn-kids-primary">
                <Calendar size={16} aria-hidden="true" />
                <span>Book Child Dental Checkup</span>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-kids-wa">
                <MessageSquare size={16} aria-hidden="true" />
                <span>WhatsApp Clinic</span>
              </a>
            </div>
          </div>

          {/* Right: Iconic Playful Polaroid Cards Collage */}
          <div className="kids-polaroid-stage">
            
            <div className="polaroid-wrapper">
              
              {/* Polaroid Frame 1 (Left Tilt) */}
              <motion.div 
                className="polaroid-card frame-left"
                initial={{ opacity: 0, rotate: -12, y: 30 }}
                whileInView={{ opacity: 1, rotate: -6, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, rotate: -2, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              >
                <div className="polaroid-img-wrap">
                  <Image 
                    src="/kids/kids-brave.png" 
                    alt="Brave Smiles at clinic" 
                    fill 
                    sizes="(max-width: 768px) 150px, 200px" 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="polaroid-caption">Brave Smile Club</div>
              </motion.div>

              {/* Polaroid Frame 2 (Right Tilt) */}
              <motion.div 
                className="polaroid-card frame-right"
                initial={{ opacity: 0, rotate: 12, y: 30 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, rotate: 2, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
              >
                <div className="polaroid-img-wrap">
                  <Image 
                    src="/kids/kids-cavity-free.png" 
                    alt="Cavity-Free Club certificate" 
                    fill 
                    sizes="(max-width: 768px) 150px, 200px" 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="polaroid-caption">Cavity Free Club</div>
              </motion.div>

              {/* Polaroid Frame 3 (Bottom Left Hero) */}
              <motion.div 
                className="polaroid-card frame-center"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, zIndex: 12 }}
                transition={{ type: 'spring', stiffness: 140, damping: 16, delay: 0.2 }}
              >
                <div className="polaroid-img-wrap">
                  <Image 
                    src="/kids/kids-happy.png" 
                    alt="Happy child smiling" 
                    fill 
                    sizes="(max-width: 768px) 150px, 200px" 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="polaroid-caption">Happy Patients</div>
              </motion.div>

              {/* Polaroid Frame 4 (Bottom Right Card - /kids/kids-hero.png) */}
              <motion.div 
                className="polaroid-card frame-fourth"
                initial={{ opacity: 0, rotate: 12, y: 35 }}
                whileInView={{ opacity: 1, rotate: 5, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, rotate: 1, zIndex: 12 }}
                transition={{ type: 'spring', stiffness: 140, damping: 16, delay: 0.25 }}
              >
                <div className="polaroid-img-wrap">
                  <Image 
                    src="/kids/kids-hero.png" 
                    alt="Little Champions at Shubh Dental Clinic" 
                    fill 
                    sizes="(max-width: 768px) 160px, 220px" 
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }} 
                  />
                </div>
                <div className="polaroid-caption">Little Champions</div>
              </motion.div>

              {/* Cute Tooth Animation Mascot */}
              <div className="polaroid-tooth-mascot">
                <AnimatedToothVector />
              </div>

            </div>

            {/* Doctor Authority Quote */}
            <div className="doctor-kids-quote">
              <div className="doc-quote-avatar">
                <Image src="/dr-sk-yadav.webp" alt="Prof. Dr. S. K. Yadav" width={38} height={38} className="doc-avatar-img" />
              </div>
              <p className="doc-quote-text">
                “Building a positive dental relationship early protects your child's natural teeth and facial growth for a lifetime.”
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* LUXURY COMPACT CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .kids-section-root {
          background: #FAF8F5;
          color: #2D2420;
          padding: 2.25rem 1.5rem 1.25rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
        }

        .kids-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── HEADER ──────────────────────────────────── */
        .kids-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 1.75rem;
        }
        .kids-pill-badge {
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
        .smile-icon {
          color: #D67A41;
        }

        .kids-title {
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

        .kids-subtitle {
          font-size: 1.02rem;
          color: #554A44;
          line-height: 1.65;
          margin: 0 auto;
        }
        .kids-subtitle strong {
          color: #B85D26;
        }

        /* ── WHAT KIDS GET GRID ──────────────────────── */
        .what-kids-get-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.25rem;
        }
        .wkg-card {
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
        .wkg-card:hover {
          transform: translateY(-2px);
          border-color: rgba(214, 122, 65, 0.35);
          box-shadow: 0 8px 22px rgba(74, 37, 24, 0.06);
        }
        .wkg-icon-box {
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
        .wkg-title {
          font-size: 0.94rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.25rem;
        }
        .wkg-desc {
          font-size: 0.82rem;
          color: #554A44;
          line-height: 1.5;
          margin: 0;
        }

        /* ── MAIN SHOWCASE (2-COL) ───────────────────── */
        .kids-main-showcase {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: center;
          margin-bottom: 2.25rem;
        }

        .kids-services-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          border-radius: 28px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 8px 28px rgba(74, 37, 24, 0.04);
        }
        .services-card-header {
          margin-bottom: 1.25rem;
        }
        .services-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #D67A41;
          display: block;
          margin-bottom: 0.25rem;
        }
        .services-heading {
          font-size: 1.45rem;
          font-weight: 800;
          color: #110805;
          margin: 0;
        }

        .pediatric-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .p-service-box {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 16px;
          padding: 1.1rem;
        }
        .p-service-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }
        .check-icon-gold {
          color: #D67A41;
          flex-shrink: 0;
        }
        .p-service-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #110805;
        }
        .p-service-desc {
          font-size: 0.8rem;
          color: #554A44;
          line-height: 1.5;
          margin: 0;
        }

        .kids-actions-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .btn-kids-primary {
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
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.3);
          transition: all 0.25s ease;
        }
        .btn-kids-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.45);
        }

        .btn-kids-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(37, 211, 102, 0.12);
          color: #0E9F45;
          border: 1px solid rgba(37, 211, 102, 0.3);
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-kids-wa:hover {
          background: rgba(37, 211, 102, 0.2);
        }

        /* ── PLAYFUL POLAROID CARD STAGE (RIGHT COL) ─── */
        .kids-polaroid-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .polaroid-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          max-width: 440px;
        }

        .polaroid-card {
          position: absolute;
          background: #FFFFFF;
          padding: 0.65rem 0.65rem 2rem 0.65rem;
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(17, 8, 5, 0.12), 0 4px 10px rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.15);
          width: 180px;
          height: 200px;
          cursor: pointer;
        }

        .polaroid-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
          background: #F4F1EC;
        }

        .polaroid-caption {
          position: absolute;
          bottom: 0.5rem;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: 'Caveat', cursive, var(--font-heading, sans-serif);
          font-size: 1.05rem;
          color: #4A3E39;
          font-weight: 700;
        }

        .frame-left {
          top: 15px;
          left: 15px;
          z-index: 2;
        }

        .frame-right {
          top: 25px;
          right: 20px;
          z-index: 2;
        }

        .frame-center {
          bottom: 20px;
          left: 35px;
          width: 175px;
          height: 195px;
          z-index: 5;
          box-shadow: 0 16px 36px rgba(17, 8, 5, 0.18), 0 6px 14px rgba(214, 122, 65, 0.12);
        }

        .frame-fourth {
          bottom: 10px;
          right: 30px;
          width: 175px;
          height: 195px;
          z-index: 6;
          box-shadow: 0 16px 36px rgba(17, 8, 5, 0.18), 0 6px 14px rgba(214, 122, 65, 0.12);
        }

        .polaroid-tooth-mascot {
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 120px;
          height: 120px;
          z-index: 8;
          pointer-events: none;
        }

        .doctor-kids-quote {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 16px;
          padding: 0.75rem 1rem;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
          max-width: 440px;
          width: 100%;
          margin-top: 1rem;
        }
        .doc-quote-avatar {
          width: 38px;
          height: 38px;
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
        .doc-quote-text {
          font-size: 0.78rem;
          color: #554A44;
          line-height: 1.5;
          font-style: italic;
          margin: 0;
        }

        /* ── TRUST STRIP ─────────────────────────────── */
        .kids-trust-strip {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 20px;
          padding: 1.25rem 2rem;
          box-shadow: 0 4px 16px rgba(74, 37, 24, 0.03);
        }
        .trust-cell {
          text-align: center;
        }
        .trust-cell strong {
          display: block;
          font-size: 1.2rem;
          font-weight: 900;
          color: #D67A41;
          font-family: var(--font-heading);
        }
        .trust-cell span {
          display: block;
          font-size: 0.74rem;
          color: #554A44;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.2rem;
          font-weight: 700;
        }
        .trust-divider {
          width: 1px;
          height: 32px;
          background: rgba(214, 122, 65, 0.2);
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 1024px) {
          .what-kids-get-grid { grid-template-columns: repeat(2, 1fr); }
          .kids-main-showcase { grid-template-columns: 1fr; }
          .polaroid-wrapper { margin: 0 auto; }
          .doctor-kids-quote { margin: 1rem auto 0; }
        }

        @media (max-width: 600px) {
          .kids-section-root {
            padding: 1.65rem 0.85rem 0.5rem !important;
          }
          .kids-header {
            margin-bottom: 0.95rem;
          }
          .kids-title {
            font-size: 1.45rem;
            line-height: 1.25;
          }
          .kids-subtitle {
            font-size: 0.82rem;
            line-height: 1.45;
          }
          .what-kids-get-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
            margin-bottom: 1.15rem !important;
          }
          .wkg-card {
            padding: 0.65rem 0.75rem !important;
            border-radius: 14px !important;
            gap: 0.5rem !important;
            align-items: center !important;
            min-height: 52px !important;
          }
          .wkg-icon-box {
            width: 30px !important;
            height: 30px !important;
            border-radius: 8px !important;
            flex-shrink: 0 !important;
          }
          .wkg-icon-box svg {
            width: 15px !important;
            height: 15px !important;
          }
          .wkg-title {
            font-size: 0.78rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0 !important;
            font-weight: 800 !important;
          }
          .wkg-desc {
            display: none !important;
          }
          .kids-services-card {
            display: none !important;
          }
          .kids-actions-row {
            display: none !important;
          }

          .polaroid-wrapper {
            height: 270px;
            max-width: 320px;
          }
          .polaroid-card {
            width: 115px;
            height: 135px;
            padding: 0.35rem 0.35rem 1.3rem 0.35rem;
          }
          .frame-left { top: 8px; left: 8px; }
          .frame-right { top: 12px; right: 8px; }
          .frame-center {
            width: 120px;
            height: 140px;
            left: 8px;
            bottom: 8px;
            margin-left: 0;
          }
          .frame-fourth {
            width: 132px;
            height: 152px;
            right: 6px;
            bottom: 6px;
          }
          .frame-fourth .polaroid-img-wrap img {
            object-position: center 18% !important;
          }
          .polaroid-caption {
            font-size: 0.72rem;
            bottom: 0.2rem;
          }
          .polaroid-tooth-mascot {
            width: 48px;
            height: 48px;
            bottom: -8px;
            right: -8px;
            opacity: 0.85;
          }

          .kids-trust-strip {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
