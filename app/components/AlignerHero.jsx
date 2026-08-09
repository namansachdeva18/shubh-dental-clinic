'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, CheckCircle2, ShieldCheck, Cpu, ArrowRight, Eye, RefreshCw, Zap, Award, MapPin } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import AnimatedCounter from './AnimatedCounter';

const ALIGNER_TYPES = [
  {
    id: 'skyalign',
    name: 'SkyAlign™ Clear Aligners',
    subtitle: 'In-House Orthodontist-Engineered',
    badge: '★ Best Value & In-House Precision',
    tagline: 'Custom-crafted in our Rohtak laboratory under direct supervision of Prof. Dr. S. K. Yadav.',
    features: [
      'Fast 4–12 month treatment timeline',
      'Ultra-clear medical grade German polymer',
      'Direct in-clinic doctor monitoring (no remote middleman)',
      'Up to 40% more cost-effective than international brands',
      'Instant replacement aligners if lost'
    ],
    idealFor: 'Mild to moderate crowding, gap closure & post-braces relapse.',
    duration: '4–12 Months',
    price: '₹45,000 – ₹95,000',
    logo: null
  },
  {
    id: 'invisalign-full',
    name: 'Invisalign® Comprehensive',
    subtitle: 'Global Gold Standard for Complex Cases',
    badge: '🌐 International Gold Standard',
    tagline: 'The world\'s most advanced clear aligner system for complete arch alignment.',
    features: [
      'Patented SmartTrack® multi-layer elastic polymer',
      'SmartForce® micro-attachments for complex tooth rotation',
      'Unlimited aligner trays until perfect result achieved',
      'iTero® 3D digital outcome simulator',
      'Vivera® custom retention system'
    ],
    idealFor: 'Severe crowding, overbites, underbites, crossbites & complex rotations.',
    duration: '6–18 Months',
    price: '₹1,50,000 – ₹2,50,000',
    logo: '/invisalign-logo.png'
  },
  {
    id: 'damon-braces',
    name: 'Damon® System Braces',
    subtitle: 'Official Damon® Provider · Self-Ligating System',
    badge: '💎 Official Damon® Provider',
    tagline: 'Frictionless self-ligating technology — faster tooth movement, fewer appointments, and superior facial aesthetics.',
    features: [
      'Slide mechanism eliminates elastic ties & friction',
      'Available in Damon® Clear (virtually invisible) & Metal',
      'Faster treatment — up to 6 months faster than traditional braces',
      'Lighter biological forces for significantly enhanced comfort',
      'Easier hygiene maintenance — no elastic bands to trap plaque'
    ],
    idealFor: 'Patients seeking maximum comfort and fastest fixed orthodontic tooth movement.',
    duration: '10–18 Months',
    price: '₹55,000 – ₹1,20,000',
    logo: '/damon-logo.png'
  },
  {
    id: 'invisalign-express',
    name: 'Invisalign® Express / Lite',
    subtitle: 'Rapid Touch-Up & Minor Alignment',
    badge: '⚡ Quick 3–6 Month Fix',
    tagline: 'Targeted alignment for front teeth spacing, minor crowding, or pre-wedding touch-ups.',
    features: [
      'Rapid results in as little as 12 to 24 weeks',
      'Uses official SmartTrack® aligner material',
      'Fixed tray package (up to 14 aligner sets)',
      'Ideal for wedding preps & professional events',
      'Includes complimentary professional teeth whitening'
    ],
    idealFor: 'Minor front teeth crowding, small gaps, or smile touch-ups.',
    duration: '3–6 Months',
    price: '₹85,000 – ₹1,30,000',
    logo: '/invisalign-logo.png'
  },
  {
    id: 'invisalign-teen',
    name: 'Invisalign® First & Teen',
    subtitle: 'Designed for Growing Smiles',
    badge: '👦 Kids & Teenagers',
    tagline: 'Specialized clear aligners engineered for developing jaws and erupting teeth.',
    features: [
      'Blue compliance indicator dots fade with proper wear time',
      'Eruption tabs accommodate growing adult molars',
      '6 complimentary replacement aligners included',
      'Safer for sports & active school lifestyles',
      'No wire emergencies during exam seasons'
    ],
    idealFor: 'Children aged 7–12 (Phase 1) & teenagers aged 13–19.',
    duration: '6–15 Months',
    price: '₹1,20,000 – ₹2,10,000',
    logo: '/invisalign-logo.png'
  }
];

const CLINICAL_CASES = [
  {
    id: 'case-1',
    label: 'Severe Crowding',
    duration: '6 Months',
    beforeSrc: '/case-1-before.webp',
    afterSrc: '/case-1-after.webp',
    beforeAlt: 'Before aligner treatment showing severe lower crowding',
    afterAlt: 'After aligner treatment showing perfectly aligned smile',
    details: 'Fixed severe front tooth overlap & rotations using SkyAlign™ in 6 months.'
  },
  {
    id: 'case-2',
    label: 'Front Gap Spacing',
    duration: '4 Months',
    beforeSrc: '/patient-braces.webp',
    afterSrc: '/patient-braces.webp',
    beforeAlt: 'Aligners showing gap between front teeth',
    afterAlt: 'Aligners showing gap completely closed',
    details: 'Closed 3.5mm midline gap using Invisalign® Lite in just 16 weeks.'
  }
];

const MATERIAL_HIGHLIGHTS = [
  { icon: Cpu, title: 'iTero® 3D Scan', desc: 'No messy impressions; instant 3D digital jaw mapping' },
  { icon: ShieldCheck, title: 'SmartTrack® Polymer', desc: '0.75mm ultra-thin, tear-resistant medical grade clarity' },
  { icon: Eye, title: '99% Invisible', desc: 'Virtually undetectable in professional & social settings' },
  { icon: RefreshCw, title: 'Removable Fit', desc: 'Take out to enjoy all your favorite foods & maintain hygiene' }
];

const LOCATION_CENTRES = [
  {
    name: 'Rohtak (Main Clinic)',
    badge: '🏛️ Main Super-Specialty Center',
    clinic: 'Shubh Orthodontic & Dental Clinic',
    address: 'Tilak Nagar Lane 9, Delhi Bypass Road, Rohtak 124001',
    main: true
  },
  {
    name: 'Delhi Centre',
    badge: '📍 NCR Visiting Center',
    clinic: 'Nu Smile Dental Clinic',
    address: '204 Deepak Plaza, DC Chowk Market, Sector 9, Rohini, Delhi 110085'
  },
  {
    name: 'Gurugram Centre',
    badge: '📍 NCR Visiting Center',
    clinic: 'Dental Destination',
    address: 'Kenwood-05 (G.F.), Malibu Town, Sector 47, Gurgaon'
  },
  {
    name: 'Panipat Centre',
    badge: '📍 Regional Center',
    clinic: 'Dental Studio',
    address: '194-L, Model Town, Panipat 132103 (Haryana)'
  },
  {
    name: 'Sonepat Centre',
    badge: '📍 Regional Center',
    clinic: 'Navjeevan Dental Clinic',
    address: 'Parbhu Nagar Mandi, Near Suri Petrol Pump, Mirch Mandi, Sonipat, Haryana 131001'
  },
  {
    name: 'Fatehabad Centre',
    badge: '📍 Regional Center',
    clinic: 'Shree Sai Complete Dental Care Centre',
    address: 'SCF 9, Model Town, Fatehabad, Haryana 125050'
  },
];

export default function AlignerHero() {
  const [selectedType, setSelectedType] = useState('skyalign');
  const [selectedCase, setSelectedCase] = useState(CLINICAL_CASES[0]);
  const sectionRef = useRef(null);

  const activeAligner = ALIGNER_TYPES.find(a => a.id === selectedType) || ALIGNER_TYPES[0];

  return (
    <section className="section aligner-hero-section" ref={sectionRef} aria-label="Invisalign and Clear Aligners">
      
      {/* 3D Scanner Background Animation */}
      <div className="scanner-bg-wrapper">
        <div className="scanner-grid grid-top"></div>
        <div className="scanner-grid grid-bottom"></div>
        <div className="scanner-laser"></div>
        
        {/* Animated Glow Halo Orbs */}
        <div className="bg-glow-orb orb-gold-1" />
        <div className="bg-glow-orb orb-gold-2" />

        {/* Rotating Vector Graphic Circles */}
        <div className="bg-graphic-ring ring-1" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="rgba(214, 122, 65, 0.6)" strokeWidth="2" strokeDasharray="10 6" />
            <circle cx="100" cy="100" r="70" stroke="rgba(234, 167, 124, 0.5)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="bg-graphic-ring ring-2" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="85" stroke="rgba(214, 122, 65, 0.55)" strokeWidth="1.8" strokeDasharray="14 10" />
            <circle cx="100" cy="100" r="55" stroke="rgba(234, 167, 124, 0.4)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="point-cloud">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="point-particle" style={{
              left: `${(i * 19 + 5) % 95}%`,
              top: `${(i * 31 + 11) % 90}%`,
              '--delay': `${(i * 0.3) % 5}s`,
              '--duration': `${2 + (i * 0.4) % 4}s`
            }}></div>
          ))}
        </div>
        <div className="scanner-vignette"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Main Header */}
        <div className="section-header text-center" style={{ maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <div className="section-badge badge-gold" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <Sparkles size={15} />
            Haryana&apos;s Premier Certified Invisalign® &amp; SkyAlign™ Center
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#fff', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Straighten Your Teeth <span className="text-gradient-copper">Completely Invisibly</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Over <strong>11,000+ clear aligner transformations</strong> completed by <strong>Prof. Dr. S. K. Yadav</strong>. Choose between our in-house <strong>SkyAlign™</strong> aligners or the global standard <strong>Invisalign®</strong>.
          </p>
        </div>

        {/* PROMINENT COUNTERS STRIP */}
        <div className="aligner-stats-banner">
          <div className="stat-banner-item">
            <div className="stat-banner-val"><AnimatedCounter target={11000} suffix="+" /></div>
            <div className="stat-banner-lbl">Clear Aligner Cases</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val"><AnimatedCounter target={9000} suffix="+" /></div>
            <div className="stat-banner-lbl">Total Braces &amp; Aligners</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val">5.0★</div>
            <div className="stat-banner-lbl">Google Rating (114+ Reviews)</div>
          </div>
          <div className="stat-banner-divider"></div>
          <div className="stat-banner-item">
            <div className="stat-banner-val"><AnimatedCounter target={20} suffix="+" /></div>
            <div className="stat-banner-lbl">Years Orthodontic Mastery</div>
          </div>
        </div>

        {/* 1. ALL ALIGNER TYPES TABS */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div className="aligner-type-header">
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.8rem', fontWeight: 800 }}>
              Our Clear Aligner Systems &amp; Packages
            </h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold-light)' }}>
              Select a system to compare features, pricing &amp; timeline:
            </span>
          </div>

          {/* Aligner Selection Pills */}
          <div className="aligner-pills-grid">
            {ALIGNER_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`aligner-pill-btn ${selectedType === type.id ? 'active-pill' : ''}`}
              >
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: selectedType === type.id ? '#fff' : 'rgba(255,255,255,0.85)' }}>
                  {type.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: selectedType === type.id ? 'var(--accent-gold-light)' : 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>
                  {type.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Aligner Detail Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAligner.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="aligner-detail-box"
            >
              <div className="aligner-detail-left">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div className="pill-badge pill-gold" style={{ width: 'fit-content', margin: 0 }}>
                    {activeAligner.badge}
                  </div>
                  {activeAligner.logo && (
                    <div style={{ position: 'relative', width: '200px', height: '60px', flexShrink: 0 }}>
                      <Image src={activeAligner.logo} alt={activeAligner.name} fill style={{ objectFit: 'contain', objectPosition: 'right' }} />
                    </div>
                  )}
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {activeAligner.name}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {activeAligner.tagline}
                </p>

                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-light)', fontWeight: 800, marginBottom: '0.8rem' }}>
                  Key Advantages:
                </div>
                <ul className="aligner-feature-list">
                  {activeAligner.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="aligner-detail-right">
                <div className="aligner-spec-card">
                  <div className="spec-label">Ideal Candidates</div>
                  <div className="spec-val">{activeAligner.idealFor}</div>
                  
                  <div className="spec-divider"></div>
                  
                  <div className="spec-row">
                    <div>
                      <div className="spec-label">Estimated Duration</div>
                      <div className="spec-highlight">{activeAligner.duration}</div>
                    </div>
                    <div>
                      <div className="spec-label">Investment Range</div>
                      <div className="spec-highlight">{activeAligner.price}</div>
                    </div>
                  </div>

                  <Link href="#book" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
                    Reserve {activeAligner.name.split(' ')[0]} Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. CLINICAL RESULTS & BEFORE/AFTER SECTION */}
        <div className="aligner-results-wrapper">
          <div className="results-left">
            <div className="section-badge badge-gold" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              📸 Clinical Verification
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#fff', fontWeight: 800, marginBottom: '1rem' }}>
              Verified Aligner Results
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
              Drag the interactive slider below to inspect real tooth movement achieved by <strong>Prof. Dr. S. K. Yadav</strong> without braces or metal wires.
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

            {/* Doctor Trust Card */}
            <div className="doctor-trust-card" style={{ marginTop: '2rem' }}>
              <div className="doctor-trust-img">
                <Image src="/dr-sk-yadav.webp" alt="Prof. Dr. S. K. Yadav" fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="100px" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>Prof. Dr. S. K. Yadav</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold-light)', margin: '0.1rem 0 0.4rem' }}>
                  MDS (Orthodontics) · Ex-PGI Chandigarh · Fellow WFO (USA)
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
            <div className="aligner-slider-wrap">
              <BeforeAfterSlider
                beforeSrc={selectedCase.beforeSrc}
                afterSrc={selectedCase.afterSrc}
                beforeAlt={selectedCase.beforeAlt}
                afterAlt={selectedCase.afterAlt}
              />
              <div className="aligner-slider-caption">
                Slide left/right to compare · Treatment by Prof. Dr. S. K. Yadav
              </div>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT & TECHNOLOGY HIGHLIGHTS */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Advanced Product &amp; Material Technology
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.98rem' }}>
              Every aligner set is digitally simulated with 3D CAD/CAM software to guarantee comfortable, predictable tooth movement.
            </p>
          </div>

          <div className="material-grid">
            {MATERIAL_HIGHLIGHTS.map((mat, i) => {
              const IconComp = mat.icon;
              return (
                <div key={i} className="material-card">
                  <div className="material-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>{mat.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{mat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. MULTI-CITY CONSULTATION BANNER & CREATIVE LOCATION CARDS */}
        <div className="multi-city-section" style={{ marginTop: '5rem' }}>
          <div className="multi-city-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-light)', fontWeight: 800, marginBottom: '0.5rem' }}>
              Orthodontic Consultations Beyond Rohtak
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff', fontWeight: 800, marginBottom: '0.75rem' }}>
              Visiting Centres Across <span className="text-gradient-copper">Haryana &amp; NCR</span>
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
              Prof. Dr. S. K. Yadav offers specialized clear aligner consultations by prior appointment at the following premier visiting centers:
            </p>
          </div>

          <div className="location-cards-grid">
            {LOCATION_CENTRES.map((loc, i) => (
              <div key={i} className={`location-creative-card ${loc.main ? 'location-card-main' : ''}`}>
                <div className="loc-card-header">
                  <span className="loc-badge">{loc.badge}</span>
                  <div className="loc-pulse-dot-wrap">
                    <span className="loc-pulse-dot" />
                  </div>
                </div>

                <h5 className="loc-title">{loc.name}</h5>
                <div className="loc-clinic-name">{loc.clinic}</div>
                <div className="loc-address-box">
                  <MapPin size={15} className="loc-pin-icon" />
                  <span>{loc.address}</span>
                </div>
                
                <div className="loc-status-row">
                  <span className="loc-live-indicator" />
                  <span>Appointments Available</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="#book" className="btn btn-gold" style={{ display: 'inline-flex', padding: '1rem 2.2rem', fontSize: '1rem', gap: '0.6rem' }}>
              Book Priority Aligner Scan in Your City <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .aligner-hero-section {
          background: #0A0705;
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
        }

        /* 3D SCANNER BACKGROUND */
        .scanner-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .scanner-grid {
          position: absolute;
          left: -50%; right: -50%;
          width: 200%; height: 200%;
          background-image: 
            linear-gradient(rgba(214, 122, 65, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.18) 1px, transparent 1px);
          background-size: 45px 45px;
          transform-style: preserve-3d;
        }
        .grid-top { top: -100%; animation: scanGridTop 20s linear infinite; }
        .grid-bottom { bottom: -100%; animation: scanGridBottom 20s linear infinite; }

        @keyframes scanGridTop {
          0% { transform: perspective(800px) rotateX(75deg) translateY(0); }
          100% { transform: perspective(800px) rotateX(75deg) translateY(45px); }
        }
        @keyframes scanGridBottom {
          0% { transform: perspective(800px) rotateX(-75deg) translateY(0); }
          100% { transform: perspective(800px) rotateX(-75deg) translateY(-45px); }
        }

        .scanner-laser {
          position: absolute;
          top: -10%; bottom: -10%;
          width: 3px;
          background: #D67A41;
          box-shadow: 0 0 25px 4px #D67A41, 0 0 60px 8px rgba(214, 122, 65, 0.8);
          animation: laserSweep 7s ease-in-out infinite alternate;
          z-index: 2; opacity: 0.85;
        }
        @keyframes laserSweep {
          0% { left: -10%; opacity: 0; }
          10% { opacity: 0.85; }
          90% { opacity: 0.85; }
          100% { left: 110%; opacity: 0; }
        }

        /* ANIMATED BACKGROUND GRAPHICS & HALO ORBS */
        .bg-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: 1;
        }
        .orb-gold-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.55) 0%, rgba(201, 168, 76, 0.2) 70%, transparent 100%);
          top: -10%;
          left: -10%;
          animation: floatOrbSlow 16s ease-in-out infinite alternate;
        }
        .orb-gold-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.45) 0%, rgba(214, 122, 65, 0.15) 70%, transparent 100%);
          bottom: -15%;
          right: -10%;
          animation: floatOrbSlow 20s ease-in-out infinite alternate-reverse;
        }
        @keyframes floatOrbSlow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(45px, -35px) scale(1.15); }
          100% { transform: translate(-35px, 35px) scale(0.9); }
        }

        .bg-graphic-ring {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          opacity: 0.95;
        }
        .ring-1 {
          top: -5%;
          left: -5%;
          width: 440px;
          height: 440px;
          animation: rotateRing 35s linear infinite;
        }
        .ring-2 {
          bottom: -5%;
          right: -5%;
          width: 520px;
          height: 520px;
          animation: rotateRing 45s linear infinite reverse;
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .point-cloud { position: absolute; inset: 0; z-index: 1; }
        .point-particle {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #EAA77C;
          box-shadow: 0 0 12px #D67A41;
          opacity: 0;
          animation: pointPulse var(--duration) var(--delay) infinite ease-in-out;
        }
        @keyframes pointPulse {
          0%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
          50% { opacity: 0.9; transform: scale(1.6) translateY(-12px); }
        }
        .scanner-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(10, 7, 5, 0.65) 90%);
          z-index: 3;
        }

        /* STATS BANNER STRIP */
        .aligner-stats-banner {
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

        /* ALIGNER TYPE SELECTION */
        .aligner-type-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .aligner-pills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .aligner-pill-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 1.25rem 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .aligner-pill-btn:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(214, 122, 65, 0.4);
        }
        .active-pill {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.25), rgba(26, 12, 8, 0.8)) !important;
          border-color: var(--accent-gold) !important;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.2) !important;
        }

        .aligner-detail-box {
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

        .aligner-feature-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .aligner-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .aligner-spec-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        .spec-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .spec-val {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 600;
          line-height: 1.5;
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
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-gold-light);
        }

        /* CLINICAL RESULTS WRAPPER */
        .aligner-results-wrapper {
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
          box-shadow: 0 5px 15px rgba(214, 122, 65, 0.3) !important;
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

        .aligner-slider-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .aligner-slider-caption {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.6);
        }

        /* MATERIAL HIGHLIGHTS */
        .material-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .material-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          transition: all 0.3s ease;
        }
        .material-card:hover {
          background: rgba(255, 255, 255, 0.07);
          transform: translateY(-4px);
          border-color: rgba(214, 122, 65, 0.3);
        }
        .material-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(214, 122, 65, 0.15);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        /* MULTI CITY BANNER */
        .multi-city-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.15) 0%, rgba(17, 8, 5, 0.95) 100%);
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 24px;
          padding: 2.5rem 3rem;
          gap: 2rem;
        }
        .city-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .city-chip {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* LOCATION CREATIVE CARDS GRID */
        .location-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .location-creative-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 24px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .location-card-main {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.18) 0%, rgba(17, 8, 5, 0.95) 100%);
          border-color: rgba(214, 122, 65, 0.5);
          box-shadow: 0 15px 35px rgba(214, 122, 65, 0.15);
        }
        .location-creative-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-gold);
          box-shadow: 0 20px 40px rgba(214, 122, 65, 0.25);
        }
        .loc-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .loc-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          background: rgba(214, 122, 65, 0.12);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
        }
        .loc-pulse-dot-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loc-pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent-gold);
          box-shadow: 0 0 10px var(--accent-gold);
          animation: locPulse 2s infinite;
        }
        @keyframes locPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.4; }
        }
        .loc-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .loc-clinic-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          margin-bottom: 0.75rem;
        }
        .loc-address-box {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.75rem 0.85rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .loc-pin-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .loc-status-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4ADE80;
        }
        .loc-live-indicator {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 8px #4ADE80;
        }

        @media (max-width: 1024px) {
          .aligner-stats-banner { flex-wrap: wrap; gap: 1.5rem; justify-content: center; padding: 1.5rem; }
          .stat-banner-divider { display: none; }
          .aligner-pills-grid { grid-template-columns: repeat(2, 1fr); }
          .aligner-detail-box { grid-template-columns: 1fr; padding: 2rem; }
          .aligner-results-wrapper { grid-template-columns: 1fr; padding: 2rem; }
          .material-grid { grid-template-columns: repeat(2, 1fr); }
          .location-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .aligner-hero-section { padding: 3.5rem 0; }
          .aligner-pills-grid { grid-template-columns: 1fr; }
          .material-grid { grid-template-columns: 1fr; }
          .spec-row { grid-template-columns: 1fr; }
          .location-cards-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
}
