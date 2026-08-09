'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles, Cpu, Award, Heart, Phone, ArrowRight, Layers, Microscope, Target, Zap } from 'lucide-react';

const SKYALIGN_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Produced In-House",
    desc: <>100% manufactured in our <span className="text-highlight">clinic laboratory</span> under direct supervision of <span className="text-highlight">Prof. Dr. S. K. Yadav</span>.</>,
    tag: "No Middleman Labs"
  },
  {
    icon: Cpu,
    title: "100% Customized 3D Fit",
    desc: <>Engineered from <span className="text-highlight">iTero® 3D digital jaw scans</span> for <span className="text-highlight">0.1mm sub-millimeter teeth movement precision</span>.</>,
    tag: "3D CAD/CAM Tech"
  },
  {
    icon: Award,
    title: "German Medical Polymer",
    desc: <><span className="text-highlight">High-translucency 0.75mm medical grade material</span> — crystal clear, <span className="text-highlight">stain-resistant, and tear-proof</span>.</>,
    tag: "Ultra-Clear & Safe"
  },
  {
    icon: Heart,
    title: "Better Fit, Better Results",
    desc: <><span className="text-highlight">Custom laser-trimmed gumlines</span> eliminate irritation for a <span className="text-highlight">smooth, painless daily wear experience</span>.</>,
    tag: "Maximum Comfort"
  }
];

const PROCESS_STEPS = [
  { num: "01", title: "3D iTero® Digital Scan", desc: "No messy putty impressions. Instant 3D digital mapping of your teeth in under 5 minutes." },
  { num: "02", title: "In-House CAD Simulation", desc: "Prof. Dr. S. K. Yadav plans your exact tooth movement step-by-step on 3D software." },
  { num: "03", title: "Precision 3D Fabrication", desc: "Aligners custom-printed in our Rohtak lab with German medical-grade clear polymer." },
  { num: "04", title: "Instant Delivery & Fit", desc: "Receive your custom SkyAlign™ trays + travel case with direct doctor guidance." }
];

export default function SkyAlignSection() {
  const containerRef = useRef(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <section className="section skyalign-section" ref={containerRef} aria-label="SkyAlign In-House Aligners">
      
      {/* Light Luxury Vector Background Overlay */}
      <div className="skyalign-bg-vectors" aria-hidden="true">
        <div className="vector-grid"></div>
        <div className="vector-sunburst"></div>
        <div className="vector-orb orb-gold-1"></div>
        <div className="vector-orb orb-gold-2"></div>
        
        {/* Floating Vector Sparkles */}
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i} className="floating-vector-star" style={{
            left: `${(i * 23 + 7) % 92}%`,
            top: `${(i * 37 + 13) % 88}%`,
            animationDelay: `${(i * 0.4) % 4}s`,
            animationDuration: `${3 + (i * 0.5) % 4}s`
          }}>✦</div>
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div 
          className="section-header text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          style={{ maxWidth: '880px', margin: '0 auto 4rem' }}
        >
          <motion.div variants={fadeUp} className="skyalign-top-badge" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            Flagship In-House Innovation
          </motion.div>

          <motion.h2 variants={fadeUp} className="skyalign-main-heading">
            Introducing <span className="skyalign-copper-title">SkyAlign™ In-House Aligners</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="skyalign-main-subdesc">
            Designed in clinic, made with precision. Experience <span className="text-highlight">high-definition clear aligner therapy</span> produced <span className="text-highlight">100% in-house</span> at <strong className="skyalign-highlight-text">Shubh Orthodontic &amp; Dental Clinic</strong> — up to <span className="text-highlight">40% more cost-effective</span> with zero compromise on quality.
          </motion.p>
        </motion.div>

        {/* Hero Product Banner: Graphics & Vector Showcase */}
        <div className="skyalign-product-banner">
          
          {/* Left: Interactive Vector Cards & Key Pitch */}
          <motion.div 
            className="skyalign-banner-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="skyalign-brand-pill">
              <Layers size={16} style={{ color: 'var(--accent-gold)' }} />
              PRODUCED IN HOUSE · ROHTAK
            </div>

            <h3 className="skyalign-banner-title">
              No Wires. No Brackets. <br />
              <span className="text-gradient-copper">Just Pure Confidence.</span>
            </h3>

            <p className="skyalign-banner-desc">
              Why pay inflated international shipping fees? <strong>SkyAlign™</strong> is <span className="text-highlight">custom-engineered right here in our Rohtak laboratory</span> using <span className="text-highlight">German medical-grade clear polymers</span>. Monitored directly by <strong>Prof. Dr. S. K. Yadav</strong> at every single stage.
            </p>

            {/* Vector Trust Badges Grid */}
            <div className="skyalign-badges-grid">
              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Microscope size={17} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>Made In House</strong>
                    <span className="micro-tag">100% Direct</span>
                  </div>
                  <span className="badge-sub">Direct Clinic Lab</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Target size={17} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>Custom Made</strong>
                    <span className="micro-tag">0.1mm CAD</span>
                  </div>
                  <span className="badge-sub">Sub-Millimeter Fit</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <ShieldCheck size={17} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>German Polymer</strong>
                    <span className="micro-tag">Medical Grade</span>
                  </div>
                  <span className="badge-sub">0.75mm Ultra-Clear</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Zap size={17} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>Better Fit &amp; Speed</strong>
                    <span className="micro-tag">Fast-Track</span>
                  </div>
                  <span className="badge-sub">4–12 Month Results</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>
            </div>


          </motion.div>

          {/* Right: High-Res Product Image in Luxury Portal Frame */}
          <motion.div 
            className="skyalign-banner-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="product-portal-frame">
              {/* Product Image */}
              <div className="product-img-wrapper">
                <Image
                  src="/hero/products/skyalign-case.png"
                  alt="SkyAlign Inhouse Aligners Custom Storage Case & Clear Trays"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                />
                <div className="product-overlay-shine"></div>
              </div>

              {/* Floating Callout Badges on Image */}
              <motion.div 
                className="floating-img-badge top-left-badge"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>✨</span>
                <div>
                  <strong>Custom Made For You</strong>
                  <span>Designed in Clinic</span>
                </div>
              </motion.div>

              <motion.div 
                className="floating-img-badge bottom-right-badge"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span>🏆</span>
                <div>
                  <strong>Prof. Dr. S. K. Yadav</strong>
                  <span>100% Specialist Monitored</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* 3D IN-HOUSE WORKFLOW PROCESS */}
        <div className="skyalign-process-wrapper" style={{ marginTop: '5rem' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div className="section-badge badge-gold" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              ⚡ 4-Step In-House Precision Journey
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#FFFFFF', fontWeight: 800 }}>
              How We Craft Your <span className="text-gradient-copper">Perfect SkyAlign™ Smile</span>
            </h3>
          </div>

          <div className="process-steps-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="step-num-badge">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                {idx < 3 && <div className="step-connector" aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* LIMITED TIME FREE CONSULTATION BANNER - COMPACT LUXURY FORMAT */}
        <div className="skyalign-offer-banner" style={{ marginTop: '3.5rem' }}>
          <div className="offer-top-accent" />
          <div className="offer-content-grid">
            <div className="offer-text-block">
              <div className="offer-badge">
                <span>🔥</span> LIMITED TIME CLINIC OFFER
              </div>
              <h3 className="offer-title">
                Claim Your FREE 3D Aligner Scan &amp; VIP Consultation
              </h3>
              <p className="offer-desc">
                Visit Shubh Orthodontic &amp; Dental Clinic, Rohtak for a <strong>100% complimentary 3D digital scan</strong> with <span className="text-highlight">Prof. Dr. S. K. Yadav</span>.
              </p>
            </div>
            
            <div className="offer-cta-group">
              <a href="#book" className="btn btn-gold offer-btn-primary">
                <CheckCircle2 size={16} /> Reserve Free 3D Scan
              </a>
              <a href="tel:+918685048414" className="btn offer-btn-secondary">
                <Phone size={16} /> Call +91-8685048414
              </a>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* --- LIGHT THEMED SECTION WITH HEAVY VECTOR GRAPHICS --- */
        .skyalign-section {
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 50%, #FAF6F0 100%);
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
        }

        .skyalign-top-badge {
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.28);
          color: #B85C24;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 0.45rem 1.1rem;
          border-radius: 99px;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.08);
        }

        .skyalign-main-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          color: #110805;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .skyalign-copper-title {
          background: linear-gradient(135deg, #B85C24 0%, #D67A41 40%, #EAA77C 70%, #C96E32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(214, 122, 65, 0.2));
        }

        .skyalign-main-subdesc {
          color: #4A352B;
          font-size: 1.15rem;
          line-height: 1.7;
        }

        .skyalign-highlight-text {
          color: #110805;
          font-weight: 800;
        }

        .skyalign-bg-vectors {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .vector-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(214, 122, 65, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .vector-sunburst {
          position: absolute;
          top: -20%; right: -10%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.08) 0%, rgba(201, 168, 76, 0.03) 50%, transparent 75%);
          filter: blur(60px);
        }

        .vector-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.6;
        }
        .orb-gold-1 {
          width: 350px; height: 350px;
          background: rgba(214, 122, 65, 0.12);
          bottom: 10%; left: -5%;
        }
        .orb-gold-2 {
          width: 300px; height: 300px;
          background: rgba(201, 168, 76, 0.1);
          top: 30%; right: -5%;
        }

        .floating-vector-star {
          position: absolute;
          color: var(--accent-gold);
          font-size: 11px;
          opacity: 0;
          animation: vectorTwinkle linear infinite;
        }
        @keyframes vectorTwinkle {
          0% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.3) rotate(180deg); }
          100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
        }

        /* PRODUCT BANNER */
        .skyalign-product-banner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
          background: #FFFFFF;
          border-radius: 32px;
          padding: 3.5rem;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          box-shadow: 0 25px 60px rgba(74, 37, 24, 0.06);
          position: relative;
        }

        .skyalign-brand-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.25);
          color: var(--accent-gold-dark);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 0.4rem 1rem;
          border-radius: 99px;
          margin-bottom: 1.25rem;
        }

        .skyalign-banner-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .skyalign-banner-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        /* BADGES GRID */
        .skyalign-badges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .skyalign-badge-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #160B08 0%, #26130B 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.8rem 1rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(214, 122, 65, 0.08);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skyalign-badge-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent-gold);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(214, 122, 65, 0.3);
        }
        .badge-card-text {
          flex-grow: 1;
        }
        .badge-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.4rem;
        }
        .skyalign-badge-card strong {
          display: block;
          font-size: 0.86rem;
          color: #FFFFFF;
          line-height: 1.2;
          font-weight: 800;
        }
        .badge-sub {
          display: block;
          font-size: 0.73rem;
          color: var(--accent-gold-light);
          font-weight: 500;
          margin-top: 0.15rem;
        }
        .micro-tag {
          font-size: 0.6rem;
          font-weight: 800;
          color: #D67A41;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .badge-vector-orb {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.25) 0%, rgba(201, 168, 76, 0.15) 100%);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s ease, background 0.35s ease;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.2);
        }
        .skyalign-badge-card:hover .badge-vector-orb {
          transform: scale(1.1) rotate(6deg);
          background: linear-gradient(135deg, #D67A41 0%, #C96E32 100%);
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.5);
        }
        .badge-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.08) 50%, transparent 60%);
          animation: badgeShine 6s infinite;
          pointer-events: none;
        }
        @keyframes badgeShine {
          0% { transform: translateX(-100%); }
          30% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        /* PRICE BOX */
        .price-advantage-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #110805, #2A150B);
          border-radius: 20px;
          padding: 1.25rem 1.75rem;
          color: #fff;
          gap: 1rem;
        }
        .pa-label {
          font-size: 0.78rem;
          color: var(--accent-gold-light);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
          display: block;
        }
        .pa-val {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
        }
        .pa-sub {
          font-size: 0.8rem;
          color: var(--accent-gold);
          font-weight: 600;
        }

        /* PRODUCT PORTAL FRAME */
        .product-portal-frame {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(214, 122, 65, 0.3);
        }
        .product-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .product-overlay-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        .floating-img-badge {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(17, 8, 5, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 0.65rem 1rem;
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .floating-img-badge strong {
          display: block;
          font-size: 0.8rem;
          color: #fff;
          line-height: 1.2;
        }
        .floating-img-badge span {
          font-size: 0.7rem;
          color: var(--accent-gold-light);
        }
        .top-left-badge { top: 20px; left: 20px; }
        .bottom-right-badge { bottom: 20px; right: 20px; }

        /* FEATURE CARDS */
        .skyalign-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .skyalign-feature-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.15);
          border-radius: 24px;
          padding: 2rem 1.75rem;
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sf-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .sf-icon-orb {
          width: 50px; height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #110805, #2A150B);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(17, 8, 5, 0.15);
        }
        .sf-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          background: rgba(214, 122, 65, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .sf-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .sf-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* 3D PROCESS STEP CARDS */
        .skyalign-process-wrapper {
          background: linear-gradient(135deg, #110805 0%, #200F09 100%);
          border-radius: 28px;
          padding: 3.5rem 2.5rem;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(214, 122, 65, 0.1);
          position: relative;
          overflow: hidden;
        }
        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          position: relative;
        }
        .process-step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 20px;
          padding: 1.6rem 1.35rem;
          transition: all 0.35s ease;
          overflow: hidden;
        }
        .process-step-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #D67A41, #C96E32);
          opacity: 0.9;
        }
        .process-step-card:hover {
          transform: translateY(-5px);
          border-color: #D67A41;
          box-shadow: 0 15px 35px rgba(214, 122, 65, 0.25);
          background: rgba(255, 255, 255, 0.07);
        }
        .step-num-badge {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 900;
          color: var(--accent-gold-light);
          line-height: 1;
          margin-bottom: 0.75rem;
          text-shadow: 0 0 12px rgba(214, 122, 65, 0.35);
        }
        .step-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }
        .step-desc {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.55;
        }
        .step-connector {
          position: absolute;
          right: -14px;
          top: 42%;
          font-size: 1.3rem;
          color: var(--accent-gold);
          z-index: 5;
          font-weight: 800;
        }

        /* COMPACT OFFER BANNER */
        .skyalign-offer-banner {
          background: linear-gradient(135deg, #180D09 0%, #29140C 100%);
          border-radius: 24px;
          padding: 1.75rem 2.25rem;
          color: #fff;
          border: 1px solid rgba(214, 122, 65, 0.4);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 0 20px rgba(214, 122, 65, 0.1);
          position: relative;
          overflow: hidden;
        }
        .offer-top-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #D67A41, #C96E32, #EAA77C);
          opacity: 0.9;
        }
        .offer-content-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .offer-text-block {
          flex-grow: 1;
        }
        .offer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: var(--accent-gold-light);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          margin-bottom: 0.6rem;
        }
        .offer-title {
          font-family: var(--font-heading);
          font-size: clamp(1.25rem, 2.2vw, 1.6rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }
        .offer-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.5;
          margin: 0;
        }
        .offer-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex-shrink: 0;
        }
        .offer-btn-primary {
          padding: 0.75rem 1.4rem !important;
          font-size: 0.88rem !important;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .offer-btn-secondary {
          background: rgba(214, 122, 65, 0.12) !important;
          border: 1px solid rgba(214, 122, 65, 0.4) !important;
          color: #F4B382 !important;
          padding: 0.75rem 1.4rem !important;
          font-size: 0.88rem !important;
          font-weight: 700;
          border-radius: 99px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
        }
        .offer-btn-secondary:hover {
          background: rgba(214, 122, 65, 0.25) !important;
          border-color: var(--accent-gold) !important;
          color: #FFFFFF !important;
        }

        @media (max-width: 900px) {
          .offer-content-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .offer-cta-group {
            width: 100%;
            flex-direction: row;
            gap: 0.75rem;
          }
          .offer-btn-primary, .offer-btn-secondary {
            flex: 1;
            justify-content: center;
          }
        }

        @media (max-width: 1024px) {
          .skyalign-product-banner { grid-template-columns: 1fr; padding: 2.5rem; }
          .process-steps-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .step-connector { display: none; }
        }

        @media (max-width: 640px) {
          .skyalign-section-wrapper { padding: 3.5rem 0; }
          .skyalign-badges-grid { grid-template-columns: 1fr; }
          .skyalign-process-wrapper { padding: 2rem 1.25rem; }
          
          .process-steps-grid { 
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
            overflow-x: visible;
            padding-bottom: 0;
            margin-right: 0;
            padding-right: 0;
          }
          .process-step-card {
            padding: 1.1rem 0.95rem;
            border-radius: 16px;
          }
          .step-num-badge {
            font-size: 1.35rem;
            margin-bottom: 0.4rem;
          }
          .step-title {
            font-size: 0.92rem;
            margin-bottom: 0.3rem;
          }
          .step-desc {
            font-size: 0.78rem;
            line-height: 1.4;
          }
          .step-connector { display: none; }
          .skyalign-offer-banner { padding: 2rem; }
        }
      `}} />
    </section>
  );
}
