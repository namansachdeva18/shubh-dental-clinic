'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, CheckCircle2, ShieldCheck, Zap, Award, ArrowRight, Activity, Clock } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import AnimatedCounter from './AnimatedCounter';

const IMPLANT_PACKAGES = [
  {
    id: 'same-day',
    name: 'Same Day Implants (Immediate Loading)',
    badge: '⚡ 24-Hour Smile Transformation',
    tagline: 'Walk in with missing or damaged teeth — walk out with fixed, fully functional teeth in just ONE day.',
    features: [
      'Immediate loading technology — fixed teeth attached within 24 hours',
      'No waiting 3–6 months without teeth',
      'Flapless computer-guided 3D placement with zero facial swelling',
      'Eat, speak, and smile with immediate confidence',
      'Ideal for both single teeth & full jaw restorations'
    ],
    idealFor: 'Busy professionals, overseas patients & patients needing immediate fixed teeth.',
    timeline: 'Single 1-Day Visit',
    warranty: '10-Year Warranty Card'
  },
  {
    id: 'single-multiple',
    name: 'Single & Multiple Tooth Implants',
    badge: '🦷 Permanent Natural Replacement',
    tagline: 'The gold standard for replacing one or several missing teeth without cutting adjacent natural teeth.',
    features: [
      'Preserves natural jawbone density & prevents facial sagging',
      'Titanium post fuses with jawbone for lifetime strength',
      'Custom German metal-free Zirconia crown matching adjacent teeth',
      'Painless procedure performed under local anesthesia',
      'No damage to adjacent healthy teeth (unlike traditional bridges)'
    ],
    idealFor: 'Patients missing one or more individual teeth in upper or lower jaw.',
    timeline: '2–3 Short Visits',
    warranty: 'Lifetime Titanium Warranty'
  },
  {
    id: 'all-on-4-6',
    name: 'All-on-4® / All-on-6® Full Arch',
    badge: '🏛️ Complete Jaw Rehabilitation',
    tagline: 'Replace an entire arch of missing or loose teeth using 4 or 6 strategically angled implants.',
    features: [
      'Complete fixed teeth bridge supported by 4 or 6 titanium implants',
      'Eliminates loose, slipping dentures permanently',
      'Computer-guided 3D CBCT placement for maximum bone support',
      'Restores 95%+ natural chewing power and bite force',
      'Includes premium German ceramic or high-impact Zirconia bridge'
    ],
    idealFor: 'Patients with fully edentulous jaws or failing terminal dentition.',
    timeline: 'Same-Day Provisional Bridge',
    warranty: 'Full Arch Lifetime Guarantee'
  },
  {
    id: 'zirconia-crowns',
    name: '100% Metal-Free Zirconia Restorations',
    badge: '💎 Premium German Aesthetics',
    tagline: 'Ultra-translucent, unbreakable Zirconia crowns & bridges backed by our official 10-Year Warranty Card.',
    features: [
      '100% Metal-free — no dark grey metal line at gumline',
      'CAD/CAM computer-milled for microscopic edge seal',
      '10-Year official clinic warranty card provided with serial QR code',
      'Stain-resistant, bio-compatible, and highly aesthetic',
      'Custom shaded to match your exact natural enamel gradient'
    ],
    idealFor: 'Patients desiring top-tier aesthetics, high durability & warranty assurance.',
    timeline: '3 to 5 Days Fabrication',
    warranty: '10-Year Warranty Card'
  }
];

const CLINICAL_CASES = [
  {
    id: 'implant-case-1',
    label: 'Same-Day Front Tooth Implant',
    duration: '24 Hours',
    beforeSrc: '/implants/front-before.webp',
    afterSrc: '/implants/front-after.webp',
    beforeAlt: 'Immediate implant showing missing front tooth',
    afterAlt: 'Immediate implant showing missing front tooth',
    details: 'Immediate implant placement & immediate Zirconia crown load in just 24 hours.'
  },
  {
    id: 'implant-case-2',
    label: 'Full Arch Rehabilitation',
    duration: 'Same Day Fixed',
    beforeSrc: '/implants/fullarch-before.webp',
    afterSrc: '/implants/fullarch-after.webp',
    beforeAlt: 'Full arch implant treatment',
    afterAlt: 'Full arch implant treatment',
    details: 'All-on-4® computer guided immediate loading for complete upper jaw rehabilitation.'
  }
];

const IMPLANT_TECH = [
  { icon: Clock, title: 'Same-Day Loading', desc: 'Walk in with missing teeth, walk out with fixed functional teeth in 24 hrs.' },
  { icon: ShieldCheck, title: '3D CBCT Guided Surgery', desc: 'Sub-millimeter 3D virtual surgical planning for flapless precision.' },
  { icon: Activity, title: '98.4% Osseointegration', desc: 'PGI-trained surgical protocol with Grade 4 & 5 titanium biocompatibility.' },
  { icon: Award, title: '10-Year Warranty Card', desc: 'Official warranty card provided for all German Zirconia restorations.' }
];

export default function ImplantsHero() {
  const [selectedPkg, setSelectedPkg] = useState('same-day');
  const [selectedCase, setSelectedCase] = useState(CLINICAL_CASES[0]);
  const sectionRef = useRef(null);

  const activePkg = IMPLANT_PACKAGES.find(p => p.id === selectedPkg) || IMPLANT_PACKAGES[0];

  return (
    <section className="section implants-hero-section" ref={sectionRef} aria-label="Dental Implants and Same Day Implants">
      
      {/* Structural Titanium Background Animation */}
      <div className="implant-bg-wrapper">
        <div className="implant-grid-pattern" aria-hidden="true" />
        <div className="implant-ring ring-1"></div>
        <div className="implant-ring ring-2"></div>
        <div className="implant-ring ring-3"></div>
        <div className="implant-orb orb-1"></div>
        <div className="implant-orb orb-2"></div>
        <div className="implant-glow"></div>
        <div className="implant-scan-laser" aria-hidden="true" />
        <div className="implant-vignette"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <div className="section-badge badge-gold" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <Zap size={15} />
            PGI-Trained Implantology &amp; Prosthodontic Center
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#fff', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Replace Missing Teeth with <span className="text-gradient-copper">Same-Day Implants</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Led by <span className="text-highlight">Dr. Achla Bharti Yadav</span> (MDS Prosthodontics &amp; Oral Specialist, <span className="text-highlight">Ex-PGI Rohtak</span>) &amp; <span className="text-highlight">Prof. Dr. S. K. Yadav</span>. Over <span className="text-highlight">3,000+ implants placed</span> with a <span className="text-highlight">98.4% success rate</span>.
          </p>
        </div>

        {/* PROMINENT METRICS STRIP */}
        <div className="implants-stats-banner">
          <div className="stat-banner-item">
            <div className="stat-banner-val"><AnimatedCounter target={3000} suffix="+" /></div>
            <div className="stat-banner-lbl">Implants Placed</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val"><AnimatedCounter target={98} suffix=".4%" isDecimal={true} /></div>
            <div className="stat-banner-lbl">Osseointegration Success Rate</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val">24 Hrs</div>
            <div className="stat-banner-lbl">Same Day Teeth Loading</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val">10 Yrs</div>
            <div className="stat-banner-lbl">Official Warranty Card</div>
          </div>
        </div>

        {/* 1. IMPLANT PACKAGES TABS (SAME DAY IMPLANTS HIGHLIGHTED) */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div className="implant-type-header">
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.8rem', fontWeight: 800 }}>
              Specialist Dental Implant Services
            </h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold-light)' }}>
              Select a treatment option to explore features &amp; clinical timeline:
            </span>
          </div>

          {/* Package Selection Buttons */}
          <div className="implant-pills-grid">
            {IMPLANT_PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg.id)}
                className={`implant-pill-btn ${selectedPkg === pkg.id ? 'active-implant-pill' : ''}`}
              >
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: selectedPkg === pkg.id ? '#fff' : 'rgba(255,255,255,0.85)' }}>
                  {pkg.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: selectedPkg === pkg.id ? 'var(--accent-gold-light)' : 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>
                  {pkg.badge}
                </div>
              </button>
            ))}
          </div>

          {/* Package Detail Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePkg.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="implant-detail-box"
            >
              <div className="implant-detail-left">
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 500 }}>
                  {activePkg.tagline}
                </p>

                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-light)', fontWeight: 800, marginBottom: '0.8rem' }}>
                  Clinical Highlights:
                </div>
                <ul className="implant-feature-list">
                  {activePkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="implant-detail-right">
                <div className="implant-spec-card">
                  <div className="spec-label">Ideal Candidate Profile</div>
                  <div className="spec-val">{activePkg.idealFor}</div>
                  
                  <div className="spec-divider"></div>
                  
                  <div className="spec-row">
                    <div>
                      <div className="spec-label">Clinical Timeline</div>
                      <div className="spec-highlight">{activePkg.timeline}</div>
                    </div>
                    <div>
                      <div className="spec-label">Assurance</div>
                      <div className="spec-highlight">{activePkg.warranty}</div>
                    </div>
                  </div>

                  <Link href="#book" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', textAlign: 'center' }}>
                    <span className="hide-mobile">Book {activePkg.name.split(' ')[0]} Consultation</span>
                    <span className="show-mobile">Book Consultation</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. CLINICAL IMPLANT RESULTS */}
        <div className="implants-results-wrapper">
          <div className="results-left">
            <div className="section-badge badge-gold" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              📸 Real Patient Results
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#fff', fontWeight: 800, marginBottom: '1rem' }}>
              Same-Day Implant Transformations
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
              Inspect authentic patient cases treated by <span className="text-highlight">Dr. Achla Bharti Yadav</span> using <span className="text-highlight">3D guided computer planning</span> and <span className="text-highlight">German ceramic crowns</span>.
            </p>

            {/* Case Selector Tabs */}
            <div className="case-selector-tabs">
              {CLINICAL_CASES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCase(c)}
                  className={`case-tab-btn ${selectedCase.id === c.id ? 'active-case' : ''}`}
                >
                  {c.label} ({c.duration})
                </button>
              ))}
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--accent-gold-light)', fontStyle: 'italic', marginTop: '1rem' }}>
              &ldquo;{selectedCase.details}&rdquo;
            </p>

            {/* Doctor Card */}
            <div className="doctor-trust-card" style={{ marginTop: '2rem' }}>
              <div className="doctor-trust-img">
                <Image src="/dr-achita-yadav.webp" alt="Dr. Achla Bharti Yadav — Implantologist Rohtak" fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="100px" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>Dr. Achla Bharti Yadav</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold-light)', margin: '0.1rem 0 0.4rem' }}>
                  MDS · Oral &amp; Cosmetic Specialist · Ex-PGI Rohtak
                </div>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="results-right">
            <div className="implant-slider-wrap">
              <BeforeAfterSlider
                beforeSrc={selectedCase.beforeSrc}
                afterSrc={selectedCase.afterSrc}
                beforeAlt={selectedCase.beforeAlt}
                afterAlt={selectedCase.afterAlt}
              />
              <div className="implant-slider-caption">
                Slide to compare · Same Day Implant Procedure by Dr. Achla Bharti Yadav
              </div>
            </div>
          </div>
        </div>





      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .implants-hero-section {
          background: #0A0705;
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
        }

        /* 3D BACKGROUND ANIMATION */
        .implant-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .implant-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(214, 122, 65, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.05) 1px, transparent 1px);
          background-size: 55px 55px;
          opacity: 0.5;
        }
        .implant-scan-laser {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(214, 122, 65, 0.35) 50%, transparent 100%);
          box-shadow: 0 0 15px rgba(214, 122, 65, 0.5);
          animation: implantLaser 12s linear infinite;
          z-index: 2;
        }
        @keyframes implantLaser {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }

        .implant-ring {
          position: absolute;
          left: 50%; top: 50%;
          border-radius: 50%;
          transform-style: preserve-3d;
        }
        .ring-1 {
          width: 1100px; height: 1100px;
          border: 1.5px solid rgba(214, 122, 65, 0.15);
          box-shadow: 0 0 40px rgba(214, 122, 65, 0.1);
          animation: spin3D 35s linear infinite;
        }
        .ring-2 {
          width: 750px; height: 750px;
          border: 2px dashed rgba(201, 168, 76, 0.2);
          animation: spin3DReverse 22s linear infinite;
        }
        .ring-3 {
          width: 480px; height: 480px;
          border: 2px solid rgba(214, 122, 65, 0.25);
          animation: spin3D 14s linear infinite;
        }

        @keyframes spin3D {
          0% { transform: translate(-50%, -50%) perspective(1200px) rotateX(60deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) perspective(1200px) rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes spin3DReverse {
          0% { transform: translate(-50%, -50%) perspective(1200px) rotateX(65deg) rotateZ(360deg); }
          100% { transform: translate(-50%, -50%) perspective(1200px) rotateX(65deg) rotateZ(0deg); }
        }

        .implant-orb { position: absolute; border-radius: 50%; filter: blur(35px); }
        .orb-1 { width: 300px; height: 300px; left: 5%; top: 15%; background: rgba(214, 122, 65, 0.14); }
        .orb-2 { width: 250px; height: 250px; right: 8%; top: 50%; background: rgba(201, 168, 76, 0.12); }
        
        .implant-glow {
          position: absolute; left: 50%; top: 40%;
          width: 750px; height: 750px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(214, 122, 65, 0.18) 0%, rgba(201, 168, 76, 0.05) 45%, transparent 70%);
          border-radius: 50%;
        }
        .implant-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(10, 7, 5, 0.85) 90%);
          z-index: 3;
        }

        /* STATS BANNER STRIP */
        .implants-stats-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 24px;
          padding: 1.75rem 3rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .stat-banner-item { text-align: center; }
        .stat-banner-val {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-gold-light);
          line-height: 1.1;
          text-shadow: 0 0 15px rgba(214, 122, 65, 0.3);
        }
        .stat-banner-lbl {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 0.3rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-banner-divider {
          width: 1px; height: 40px;
          background: rgba(214, 122, 65, 0.2);
        }

        /* IMPLANT SELECTION */
        .implant-type-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .implant-pills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .implant-pill-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 1.25rem 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .implant-pill-btn:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(214, 122, 65, 0.4);
        }
        .active-implant-pill {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.25), rgba(26, 12, 8, 0.8)) !important;
          border-color: var(--accent-gold) !important;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.2) !important;
        }

        .implant-detail-box {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          background: rgba(17, 8, 5, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 28px;
          padding: 3rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .implant-feature-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .implant-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .implant-spec-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        .spec-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold-light);
          font-weight: 700;
          margin-bottom: 0.35rem;
        }
        .spec-val {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.92) !important;
          font-weight: 600;
          line-height: 1.55;
        }
        .spec-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 1.25rem 0;
        }
        .spec-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .spec-highlight {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent-gold-light);
        }

        /* CLINICAL RESULTS */
        .implants-results-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 3rem;
        }

        .case-selector-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .case-tab-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.7);
          padding: 0.5rem 1.1rem;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .active-case {
          background: var(--accent-gold) !important;
          color: #fff !important;
          border-color: var(--accent-gold) !important;
        }

        .doctor-trust-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 18px;
          padding: 1rem;
        }
        .doctor-trust-img {
          width: 54px; height: 54px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--accent-gold);
          flex-shrink: 0;
        }

        .implant-slider-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .implant-slider-caption {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.6);
        }

        /* TECH GRID */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .tech-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          background: rgba(255, 255, 255, 0.07);
          transform: translateY(-4px);
          border-color: rgba(214, 122, 65, 0.3);
        }
        .tech-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(214, 122, 65, 0.15);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        /* WARRANTY BANNER */
        .warranty-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.15) 0%, rgba(17, 8, 5, 0.95) 100%);
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 24px;
          padding: 2.5rem 3rem;
          gap: 2rem;
        }
        .warranty-badge {
          display: inline-block;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: var(--accent-gold-light);
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          margin-bottom: 0.6rem;
        }

        @media (max-width: 1024px) {
          .implants-stats-banner { grid-template-columns: repeat(2, 1fr); display: grid; gap: 1.25rem; padding: 1.5rem; }
          .stat-banner-divider { display: none; }
          .implant-pills-grid { grid-template-columns: repeat(2, 1fr); }
          .implant-detail-box { grid-template-columns: minmax(0, 1fr); padding: 2rem 1.5rem; gap: 1.75rem; }
          .implants-results-wrapper { grid-template-columns: 1fr; padding: 2rem 1.5rem; }
          .warranty-banner { flex-direction: column; align-items: flex-start; padding: 2rem 1.5rem; }
        }

        @media (max-width: 640px) {
          .implants-hero-section { padding: 3.5rem 0; }
          .implants-stats-banner { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; padding: 1.1rem; }
          .stat-banner-val { font-size: 1.6rem; }
          .stat-banner-lbl { font-size: 0.72rem; }
          
          .implant-pills-grid { grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
          .implant-pill-btn { padding: 0.85rem 0.65rem; border-radius: 14px; }
          .implant-pill-btn div:first-child { font-size: 0.86rem !important; line-height: 1.2; }
          .implant-pill-btn div:last-child { font-size: 0.68rem !important; }
          
          .implant-detail-box { padding: 1.25rem 1rem; border-radius: 20px; overflow: hidden; }
          .implant-spec-card { padding: 1.25rem 1rem; }
          .spec-row { grid-template-columns: 1fr 1fr; gap: 0.85rem; }
          .spec-highlight { font-size: 1rem; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: inline !important; }
        }
        .show-mobile { display: none; }
      `}} />
    </section>
  );
}
