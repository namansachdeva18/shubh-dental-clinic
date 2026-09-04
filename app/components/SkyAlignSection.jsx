'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ShieldCheck, Sparkles, Cpu, Award, Heart, 
  Phone, ArrowRight, Layers, Microscope, Target, Zap, 
  ChevronRight, Calendar, Calculator, Check, ArrowUpRight,
  Info, Eye, ThumbsUp, DollarSign, Clock, HelpCircle, ChevronDown, RotateCcw
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const SKYALIGN_FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% In-House Lab",
    desc: "Engineered in our Rohtak digital dental lab under direct supervision of Prof. Dr. S. K. Yadav.",
    tag: "Zero Middleman Labs"
  },
  {
    icon: Cpu,
    title: "iTero® 0.1mm 3D Fit",
    desc: "Micron-level digital scans for exact sub-millimeter teeth tracking and zero-gap fit.",
    tag: "3D CAD Precision"
  },
  {
    icon: Award,
    title: "German Medical Polymer",
    desc: "0.75mm multi-layer bio-compatible polymer — ultra-clear, stain-proof, and tear-resistant.",
    tag: "Ultra-Clear & Safe"
  },
  {
    icon: Heart,
    title: "Laser Scalloped Comfort",
    desc: "Smooth laser-trimmed margins hugging natural gum curves for gentle, cut-free wear.",
    tag: "No Gum Irritation"
  }
];

const PROCESS_STEPS = [
  { num: "01", title: "iTero® 3D Digital Scan", desc: "No sticky putty trays. High-speed optical scan in under 3 minutes." },
  { num: "02", title: "Specialist CAD Staging", desc: "Prof. Dr. Yadav engineers your custom smile progression on 3D software." },
  { num: "03", title: "In-House 3D Fabrication", desc: "Bio-resin models printed & thermoformed with German polymer in Rohtak." },
  { num: "04", title: "Fit & Direct Delivery", desc: "Trays + travel case delivered in 2–4 days with zero shipping wait." }
];

const COMPARISON_ROWS = [
  {
    feature: "Manufacturing Location",
    skyalign: "100% In-House (Rohtak Clinic Lab)",
    commercial: "Outsourced to 3rd party labs in Mumbai/USA",
    highlight: true
  },
  {
    feature: "Doctor Supervision",
    skyalign: "Direct oversight by Prof. Dr. S. K. Yadav",
    commercial: "Remote lab technicians, limited access",
    highlight: true
  },
  {
    feature: "Delivery / Turnaround",
    skyalign: "2 to 4 Days (Ultra-Fast)",
    commercial: "3 to 5 Weeks (International shipping)",
    highlight: true
  },
  {
    feature: "Cost / Pricing",
    skyalign: "Up to 40% Lower (₹45,000 – ₹1,10,000)",
    commercial: "Inflated (₹1,50,000 – ₹3,50,000+)",
    highlight: true
  },
  {
    feature: "Replacement Tray Speed",
    skyalign: "Instant 24-Hour Reprint in Clinic",
    commercial: "Re-order takes 2–4 weeks",
    highlight: false
  },
  {
    feature: "0% Interest EMI",
    skyalign: "Available starting ₹3,999/month",
    commercial: "Variable third-party finance fees",
    highlight: false
  }
];

const FAQS = [
  {
    q: "How does SkyAlign™ compare to Invisalign® in effectiveness?",
    a: "Both systems utilize progressive clear aligner biomechanics. SkyAlign™ is crafted with premium German medical polymers and custom-designed by Prof. Dr. S. K. Yadav right inside our Rohtak clinic. Because there are no international import duties or third-party shipping markups, you receive the same clinical straightening results at up to 40% lower cost with instant 24-hour tray replacement support."
  },
  {
    q: "How many hours a day do I need to wear SkyAlign™?",
    a: "For optimal, predictable tooth movement, aligners should be worn 20 to 22 hours per day. You only remove them when eating, drinking hot or colored beverages, and during normal brushing and flossing."
  },
  {
    q: "How long does SkyAlign™ treatment take?",
    a: "Most mild to moderate crowding or gap correction cases are completed in 6 to 12 months. Complex bite adjustments take between 12 to 14 months. You will receive an exact 3D timeline preview before your aligners are fabricated."
  },
  {
    q: "What if I misplace or break one of my aligner trays?",
    a: "Because our digital 3D printer and thermoforming laboratory are directly on-site in Rohtak, we can reprint and deliver your exact step tray within 24 hours, ensuring your progress never stalls."
  }
];

export default function SkyAlignSection() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('features'); // 'features' | 'workflow' | 'compare' | 'cases'
  const [openFaq, setOpenFaq] = useState(-1);
  const [crowdingLevel, setCrowdingLevel] = useState('moderate'); // 'mild' | 'moderate' | 'complex'

  // Pricing calculator estimates
  const getEstimate = () => {
    switch (crowdingLevel) {
      case 'mild':
        return { cost: '₹45,000 – ₹60,000', duration: '4 – 7 Months', emi: '₹3,750 / mo', trays: '10 – 16 Trays' };
      case 'complex':
        return { cost: '₹85,000 – ₹1,10,000', duration: '12 – 15 Months', emi: '₹7,080 / mo', trays: '24 – 32 Trays' };
      case 'moderate':
      default:
        return { cost: '₹60,000 – ₹85,000', duration: '7 – 11 Months', emi: '₹5,000 / mo', trays: '16 – 24 Trays' };
    }
  };

  const estimate = getEstimate();

  return (
    <section className="section skyalign-section" ref={containerRef} aria-label="SkyAlign In-House Aligners">
      
      {/* Ambient Visual Glows & Micro Elements */}
      <div className="skyalign-bg-vectors" aria-hidden="true">
        <div className="vector-grid"></div>
        <div className="vector-sunburst"></div>
        <div className="vector-orb orb-gold-1"></div>
        <div className="vector-orb orb-gold-2"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '840px', margin: '0 auto 2rem' }}
        >
          <div className="skyalign-top-badge">
            <span className="sparkle-pulse">✦</span>
            <span>FLAGSHIP IN-HOUSE 3D INNOVATION · ROHTAK</span>
          </div>

          <h1 className="skyalign-main-heading">
            Next-Gen <span className="skyalign-copper-title">SkyAlign™ In-House Aligners</span>
          </h1>

          <p className="skyalign-main-subdesc">
            Engineered inside our Rohtak digital dental laboratory under direct supervision of <strong className="skyalign-highlight-text">Prof. Dr. S. K. Yadav (MDS Orthodontics, PGI)</strong>. World-class 3D precision at <span className="text-highlight">up to 40% lower cost</span>.
          </p>

          {/* Quick Action Navigation Bar */}
          <div className="skyalign-quick-actions">
            <a href="#book" className="btn-sky-cta primary-sky-btn">
              <Calendar size={15} />
              <span>Book Free 3D Scan</span>
            </a>
            <a href="tel:+918685048414" className="btn-sky-cta phone-sky-btn">
              <Phone size={15} />
              <span>+91 8685048414</span>
            </a>
          </div>
        </motion.div>

        {/* Hero Product Banner: Graphics & Vector Showcase */}
        <div className="skyalign-product-banner">
          
          {/* Left: Interactive Vector Cards & Key Pitch */}
          <div className="skyalign-banner-left">
            <div className="skyalign-brand-pill">
              <Layers size={14} style={{ color: '#D67A41' }} />
              PRODUCED 100% IN-HOUSE · ZERO MIDDLEMEN
            </div>

            <h2 className="skyalign-banner-title">
              Invisible Alignment. <br />
              <span className="text-gradient-copper">Zero Compromise Precision.</span>
            </h2>

            <p className="skyalign-banner-desc">
              Why wait weeks for international aligner shipping? <strong>SkyAlign™</strong> is <span className="text-highlight">custom-crafted on-site</span> with <span className="text-highlight">German medical-grade 0.75mm clear polymer</span> for crystal clarity, fast turnaround, and personal doctor supervision.
            </p>

            {/* Vector Trust Badges Grid */}
            <div className="skyalign-badges-grid">
              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Microscope size={16} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>Direct Clinic Lab</strong>
                    <span className="micro-tag">On-Site</span>
                  </div>
                  <span className="badge-sub">No Outsourcing</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Target size={16} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>0.1mm CAD Move</strong>
                    <span className="micro-tag">Sub-Mm</span>
                  </div>
                  <span className="badge-sub">iTero® 3D Mapped</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <ShieldCheck size={16} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>German Bio-Polymer</strong>
                    <span className="micro-tag">Medical</span>
                  </div>
                  <span className="badge-sub">Stain &amp; Crack Proof</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>

              <div className="skyalign-badge-card">
                <div className="badge-vector-orb">
                  <Zap size={16} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-title-row">
                    <strong>Fast Turnaround</strong>
                    <span className="micro-tag">2–4 Days</span>
                  </div>
                  <span className="badge-sub">24h Replacement</span>
                </div>
                <div className="badge-card-shine" aria-hidden="true" />
              </div>
            </div>

            {/* In-House Price Advantage Pill */}
            <div className="skyalign-pricing-pill-banner">
              <div className="pp-content">
                <span className="pp-tag">★ IN-HOUSE PRICING ADVANTAGE</span>
                <span className="pp-title">Starting from <strong>₹45,000</strong> (vs ₹1,50,000+ commercial)</span>
              </div>
              <span className="pp-badge">0% EMI Available</span>
            </div>

          </div>

          {/* Right: High-Res Product Image in Luxury Portal Frame */}
          <div className="skyalign-banner-right">
            <div className="product-portal-frame">
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
              <div className="floating-img-badge top-left-badge">
                <span>✨</span>
                <div>
                  <strong>Ultra-Clear 0.75mm</strong>
                  <span>Virtually Invisible</span>
                </div>
              </div>

              <div className="floating-img-badge bottom-right-badge">
                <span>🏆</span>
                <div>
                  <strong>Prof. Dr. S. K. Yadav</strong>
                  <span>MDS Ortho PGI Chandigarh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── INNOVATIVE INTERACTIVE HUB TABS ── */}
        <div className="skyalign-interactive-hub">
          <div className="hub-nav-pills" role="tablist">
            <button 
              type="button" 
              onClick={() => setActiveTab('features')}
              className={`hub-pill ${activeTab === 'features' ? 'hub-pill--active' : ''}`}
            >
              <Sparkles size={14} />
              <span>Key Features</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('workflow')}
              className={`hub-pill ${activeTab === 'workflow' ? 'hub-pill--active' : ''}`}
            >
              <Cpu size={14} />
              <span>4-Step Workflow</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('compare')}
              className={`hub-pill ${activeTab === 'compare' ? 'hub-pill--active' : ''}`}
            >
              <ShieldCheck size={14} />
              <span>SkyAlign vs Others</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('cases')}
              className={`hub-pill ${activeTab === 'cases' ? 'hub-pill--active' : ''}`}
            >
              <Eye size={14} />
              <span>Real Case Slider</span>
            </button>
          </div>

          <div className="hub-tab-viewport">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: FEATURES */}
              {activeTab === 'features' && (
                <motion.div 
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="skyalign-features-grid"
                >
                  {SKYALIGN_FEATURES.map((feat, idx) => {
                    const IconComp = feat.icon;
                    return (
                      <div key={idx} className="skyalign-feature-card">
                        <div className="sf-card-top">
                          <div className="sf-icon-orb">
                            <IconComp size={20} />
                          </div>
                          <span className="sf-tag">{feat.tag}</span>
                        </div>
                        <h3 className="sf-title">{feat.title}</h3>
                        <p className="sf-desc">{feat.desc}</p>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* TAB 2: 4-STEP WORKFLOW */}
              {activeTab === 'workflow' && (
                <motion.div 
                  key="workflow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="skyalign-process-wrapper"
                >
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
                </motion.div>
              )}

              {/* TAB 3: COMPARISON TABLE */}
              {activeTab === 'compare' && (
                <motion.div 
                  key="compare"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="skyalign-comparison-box"
                >
                  <div className="comp-table-header">
                    <div className="comp-col-metric">Feature / Advantage</div>
                    <div className="comp-col-sky">SkyAlign™ In-House</div>
                    <div className="comp-col-others">Commercial Third-Party Aligners</div>
                  </div>
                  <div className="comp-table-body">
                    {COMPARISON_ROWS.map((row, i) => (
                      <div key={i} className={`comp-row ${row.highlight ? 'comp-row--highlight' : ''}`}>
                        <div className="comp-metric-cell">
                          <strong>{row.feature}</strong>
                        </div>
                        <div className="comp-sky-cell">
                          <CheckCircle2 size={14} className="comp-check-icon" />
                          <span>{row.skyalign}</span>
                        </div>
                        <div className="comp-other-cell">
                          <span>{row.commercial}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: REAL CLINICAL CASE BEFORE & AFTER */}
              {activeTab === 'cases' && (
                <motion.div 
                  key="cases"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="skyalign-case-slider-block"
                >
                  <div className="case-content-grid">
                    <div className="case-slider-column">
                      <div className="case-slider-wrapper">
                        <BeforeAfterSlider
                          beforeSrc="/skyalign-before.png"
                          afterSrc="/skyalign-after.png"
                          beforeAlt="Before SkyAlign"
                          afterAlt="After SkyAlign"
                        />
                      </div>
                      <span className="case-slider-hint">↔ Drag slider horizontally to compare before and after</span>
                    </div>

                    <div className="case-info-column">
                      <div className="case-badge">VERIFIED CLINICAL RESULT</div>
                      <h3 className="case-title">Severe Anterior Crowding &amp; Arch Correction</h3>
                      <p className="case-desc">
                        Patient treated with 100% custom in-house SkyAlign™ aligners fabricated in our Rohtak laboratory under Prof. Dr. S. K. Yadav.
                      </p>

                      <div className="case-stats-grid">
                        <div className="stat-pill">
                          <span className="stat-lbl">Treatment Time</span>
                          <strong className="stat-val">8 Months Active</strong>
                        </div>
                        <div className="stat-pill">
                          <span className="stat-lbl">Tray Count</span>
                          <strong className="stat-val">18 Trays Upper &amp; Lower</strong>
                        </div>
                        <div className="stat-pill">
                          <span className="stat-lbl">Comfort Level</span>
                          <strong className="stat-val">100% Painless</strong>
                        </div>
                        <div className="stat-pill">
                          <span className="stat-lbl">Specialist</span>
                          <strong className="stat-val">Prof. Dr. S. K. Yadav</strong>
                        </div>
                      </div>

                      <a href="#book" className="case-action-btn">
                        <span>Book Your 3D Scan Consultation</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* ── INTERACTIVE COST & TIME ESTIMATOR ── */}
        <div id="pricing-calc" className="skyalign-calc-container">
          <div className="calc-header-row">
            <div>
              <span className="calc-badge">TRANSPARENT IN-HOUSE ESTIMATES</span>
              <h3 className="calc-heading">SkyAlign™ Treatment Estimator</h3>
            </div>
            <span className="calc-doc-note">PGI Specialist Consultation Included</span>
          </div>

          <p className="calc-sub">Select your tooth condition level to preview estimated trays, timeline, and EMI options:</p>

          <div className="crowding-selector-row">
            <button 
              type="button" 
              onClick={() => setCrowdingLevel('mild')} 
              className={`crowd-btn ${crowdingLevel === 'mild' ? 'crowd-btn--active' : ''}`}
            >
              <span>Mild Spaces / Gaps</span>
              <small>Minor 2-3mm adjustments</small>
            </button>
            <button 
              type="button" 
              onClick={() => setCrowdingLevel('moderate')} 
              className={`crowd-btn ${crowdingLevel === 'moderate' ? 'crowd-btn--active' : ''}`}
            >
              <span>Moderate Crowding</span>
              <small>Common overlapping teeth</small>
            </button>
            <button 
              type="button" 
              onClick={() => setCrowdingLevel('complex')} 
              className={`crowd-btn ${crowdingLevel === 'complex' ? 'crowd-btn--active' : ''}`}
            >
              <span>Complex Rotations</span>
              <small>Deep bite &amp; crossbite</small>
            </button>
          </div>

          <div className="estimate-result-card">
            <div className="estimate-metric">
              <span className="em-label">Total Cost Range</span>
              <strong className="em-value val-cost">{estimate.cost}</strong>
            </div>
            <div className="estimate-metric">
              <span className="em-label">Avg. Duration</span>
              <strong className="em-value">{estimate.duration}</strong>
            </div>
            <div className="estimate-metric">
              <span className="em-label">Trays Required</span>
              <strong className="em-value">{estimate.trays}</strong>
            </div>
            <div className="estimate-metric">
              <span className="em-label">0% Interest EMI</span>
              <strong className="em-value val-emi">{estimate.emi}</strong>
            </div>
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <div className="skyalign-faq-wrapper">
          <div className="faq-header-center">
            <span className="faq-sub-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h3 className="faq-title font-heading">Everything About SkyAlign™ In-House Therapy</h3>
          </div>

          <div className="faq-items-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-compact-item ${isOpen ? 'faq-item-open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-q-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={16} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-a-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>



      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skyalign-section {
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 50%, #FAF6F0 100%);
          position: relative;
          overflow: hidden;
          padding: 2.75rem 0 3.5rem;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          border-bottom: 1px solid rgba(214, 122, 65, 0.15);
        }

        .skyalign-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.28);
          color: #B85C24;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 0.35rem 0.95rem;
          border-radius: 99px;
          margin-bottom: 0.75rem;
        }
        .sparkle-pulse {
          color: #D67A41;
          animation: sparkPulse 1.6s infinite ease-in-out;
        }
        @keyframes sparkPulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .skyalign-main-heading {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.8vw, 3rem);
          color: #110805;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .skyalign-copper-title {
          background: linear-gradient(135deg, #B85C24 0%, #D67A41 40%, #EAA77C 70%, #C96E32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skyalign-main-subdesc {
          color: #554137;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 760px;
          margin: 0 auto 1.25rem;
        }
        .skyalign-highlight-text {
          color: #110805;
          font-weight: 800;
        }

        /* QUICK ACTION BUTTONS */
        .skyalign-quick-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .btn-sky-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.15rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .primary-sky-btn {
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.3);
        }
        .primary-sky-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.4);
        }
        .phone-sky-btn {
          background: #110805;
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .phone-sky-btn:hover {
          background: #28140B;
          transform: translateY(-2px);
        }
        .outline-sky-btn {
          background: #FFFFFF;
          color: #B85C24;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
        }
        .outline-sky-btn:hover {
          background: #FFF7F0;
          border-color: #B85C24;
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
            linear-gradient(rgba(214, 122, 65, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .vector-sunburst {
          position: absolute;
          top: -20%; right: -10%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.08) 0%, rgba(201, 168, 76, 0.02) 50%, transparent 75%);
          filter: blur(60px);
        }
        .vector-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
        }
        .orb-gold-1 {
          width: 320px; height: 320px;
          background: rgba(214, 122, 65, 0.1);
          bottom: 10%; left: -5%;
        }
        .orb-gold-2 {
          width: 280px; height: 280px;
          background: rgba(201, 168, 76, 0.08);
          top: 30%; right: -5%;
        }

        /* PRODUCT BANNER */
        .skyalign-product-banner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.25rem;
          align-items: center;
          background: #FFFFFF;
          border-radius: 28px;
          padding: 2.25rem;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          box-shadow: 0 16px 45px rgba(74, 37, 24, 0.05);
          position: relative;
          margin-bottom: 2rem;
        }

        .skyalign-brand-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.25);
          color: #B85C24;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          margin-bottom: 0.85rem;
        }

        .skyalign-banner-title {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 2.6vw, 2.25rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.2;
          margin-bottom: 0.65rem;
          letter-spacing: -0.02em;
        }

        .skyalign-banner-desc {
          font-size: 0.92rem;
          color: #554137;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        /* BADGES GRID */
        .skyalign-badges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }
        .skyalign-badge-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #160B08 0%, #26130B 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.65rem 0.85rem;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
        .badge-card-text { flex-grow: 1; }
        .badge-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.35rem;
        }
        .skyalign-badge-card strong {
          display: block;
          font-size: 0.8rem;
          color: #FFFFFF;
          line-height: 1.2;
          font-weight: 800;
        }
        .badge-sub {
          display: block;
          font-size: 0.68rem;
          color: #E2B294;
          font-weight: 600;
          margin-top: 0.1rem;
        }
        .micro-tag {
          font-size: 0.58rem;
          font-weight: 800;
          color: #D67A41;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          white-space: nowrap;
        }
        .badge-vector-orb {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .badge-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.08) 50%, transparent 60%);
          pointer-events: none;
        }

        .skyalign-pricing-pill-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FAF8F5;
          border: 1.5px dashed rgba(214, 122, 65, 0.35);
          border-radius: 12px;
          padding: 0.65rem 0.95rem;
          gap: 0.75rem;
        }
        .pp-content {
          display: flex;
          flex-direction: column;
        }
        .pp-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: #B85C24;
          letter-spacing: 0.04em;
        }
        .pp-title {
          font-size: 0.8rem;
          color: #110805;
        }
        .pp-title strong {
          color: #B85C24;
          font-weight: 900;
        }
        .pp-badge {
          background: #110805;
          color: #FFFFFF;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
          white-space: nowrap;
        }

        /* PRODUCT PORTAL FRAME */
        .product-portal-frame {
          position: relative;
          width: 100%;
          height: 340px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
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
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .floating-img-badge {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(17, 8, 5, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          padding: 0.45rem 0.75rem;
          border-radius: 12px;
          color: #fff;
        }
        .floating-img-badge strong {
          display: block;
          font-size: 0.74rem;
          color: #fff;
          line-height: 1.2;
        }
        .floating-img-badge span {
          font-size: 0.65rem;
          color: #E2B294;
        }
        .top-left-badge { top: 14px; left: 14px; }
        .bottom-right-badge { bottom: 14px; right: 14px; }

        /* ── INTERACTIVE HUB SECTION ── */
        .skyalign-interactive-hub {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 1.5rem;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          box-shadow: 0 12px 35px rgba(74, 37, 24, 0.04);
          margin-bottom: 2rem;
        }

        .hub-nav-pills {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #FAF8F5;
          padding: 4px;
          border-radius: 99px;
          border: 1px solid rgba(74, 37, 24, 0.08);
          margin-bottom: 1.25rem;
          overflow-x: auto;
        }
        .hub-pill {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.5rem 0.85rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          font-size: 0.78rem;
          font-weight: 800;
          color: #634F45;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .hub-pill--active {
          background: #110805;
          color: #FFFFFF;
          box-shadow: 0 3px 10px rgba(17, 8, 5, 0.2);
        }

        /* FEATURE CARDS */
        .skyalign-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .skyalign-feature-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 18px;
          padding: 1.25rem 1.15rem;
          transition: all 0.25s ease;
        }
        .skyalign-feature-card:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          background: #FFFFFF;
          box-shadow: 0 8px 24px rgba(74, 37, 24, 0.06);
        }
        .sf-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .sf-icon-orb {
          width: 38px; height: 38px;
          border-radius: 12px;
          background: #110805;
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sf-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: #B85C24;
          background: rgba(214, 122, 65, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .sf-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.35rem;
        }
        .sf-desc {
          font-size: 0.78rem;
          color: #634F45;
          line-height: 1.5;
          margin: 0;
        }

        /* 3D PROCESS STEP CARDS */
        .skyalign-process-wrapper {
          background: linear-gradient(135deg, #110805 0%, #200F09 100%);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
        }
        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
          position: relative;
        }
        .process-step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 16px;
          padding: 1.15rem 1rem;
        }
        .step-num-badge {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 900;
          color: #F4B382;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .step-title {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .step-desc {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.45;
          margin: 0;
        }
        .step-connector {
          position: absolute;
          right: -10px;
          top: 38%;
          font-size: 1.1rem;
          color: #D67A41;
          z-index: 5;
          font-weight: 800;
        }

        /* COMPARISON TABLE */
        .skyalign-comparison-box {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .comp-table-header {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr;
          background: #110805;
          color: #FFFFFF;
          padding: 0.75rem 1rem;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.03em;
        }
        .comp-col-sky { color: #F4B382; }
        .comp-table-body {
          display: flex;
          flex-direction: column;
        }
        .comp-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          font-size: 0.78rem;
          align-items: center;
        }
        .comp-row--highlight {
          background: rgba(214, 122, 65, 0.04);
        }
        .comp-metric-cell strong {
          color: #110805;
        }
        .comp-sky-cell {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #0E7A53;
          font-weight: 700;
        }
        .comp-check-icon { color: #10B981; flex-shrink: 0; }
        .comp-other-cell {
          color: #7A665C;
        }

        /* REAL CASE SLIDER BLOCK */
        .skyalign-case-slider-block {
          background: #FAF8F5;
          border-radius: 20px;
          padding: 1.25rem;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .case-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 1.5rem;
          align-items: center;
        }
        .case-slider-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .case-slider-hint {
          display: block;
          text-align: center;
          font-size: 0.7rem;
          color: #8C7569;
          font-weight: 700;
          margin-top: 0.4rem;
        }
        .case-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          margin-bottom: 0.45rem;
        }
        .case-title {
          font-size: 1.15rem;
          font-weight: 900;
          color: #110805;
          margin-bottom: 0.35rem;
        }
        .case-desc {
          font-size: 0.82rem;
          color: #634F45;
          line-height: 1.5;
          margin-bottom: 0.85rem;
        }
        .case-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
          margin-bottom: 1rem;
        }
        .stat-pill {
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.08);
          border-radius: 10px;
          padding: 0.45rem 0.65rem;
          display: flex;
          flex-direction: column;
        }
        .stat-lbl {
          font-size: 0.64rem;
          font-weight: 700;
          color: #8C7569;
        }
        .stat-val {
          font-size: 0.78rem;
          font-weight: 800;
          color: #110805;
        }
        .case-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #110805;
          color: #FFFFFF;
          padding: 0.6rem 1.1rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
        }
        .case-action-btn:hover {
          background: #B85C24;
        }

        /* ── INTERACTIVE COST CALCULATOR ── */
        .skyalign-calc-container {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 1.65rem;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          box-shadow: 0 12px 35px rgba(74, 37, 24, 0.05);
          margin-bottom: 2rem;
        }
        .calc-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .calc-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #B85C24;
          letter-spacing: 0.04em;
        }
        .calc-heading {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          color: #110805;
          margin: 0;
        }
        .calc-doc-note {
          font-size: 0.72rem;
          font-weight: 700;
          color: #059669;
          background: #ECFDF5;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
        }
        .calc-sub {
          font-size: 0.82rem;
          color: #634F45;
          margin-bottom: 1rem;
        }
        .crowding-selector-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }
        .crowd-btn {
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 14px;
          padding: 0.65rem 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .crowd-btn span {
          font-size: 0.82rem;
          font-weight: 800;
          color: #110805;
        }
        .crowd-btn small {
          font-size: 0.68rem;
          color: #8C7569;
          margin-top: 0.1rem;
        }
        .crowd-btn--active {
          background: #FFF7F0;
          border-color: #D67A41;
        }
        .crowd-btn--active span {
          color: #B85C24;
        }

        .estimate-result-card {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          background: #110805;
          border-radius: 16px;
          padding: 1.15rem 1.35rem;
          color: #FFFFFF;
        }
        .estimate-metric {
          display: flex;
          flex-direction: column;
        }
        .em-label {
          font-size: 0.66rem;
          font-weight: 700;
          color: #E2B294;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .em-value {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-top: 0.15rem;
        }
        .val-cost { color: #F4B382; }
        .val-emi { color: #34D399; }

        /* ── FAQ ACCORDION ── */
        .skyalign-faq-wrapper {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 1.65rem;
          border: 1.5px solid rgba(214, 122, 65, 0.18);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.04);
        }
        .faq-header-center {
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .faq-sub-pill {
          font-size: 0.68rem;
          font-weight: 800;
          color: #B85C24;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .faq-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #110805;
          margin: 0;
        }
        .faq-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .faq-compact-item {
          border: 1px solid rgba(74, 37, 24, 0.1);
          border-radius: 14px;
          background: #FAF8F5;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .faq-item-open {
          border-color: #D67A41;
          background: #FFFFFF;
        }
        .faq-q-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.86rem;
          font-weight: 800;
          color: #110805;
          cursor: pointer;
          gap: 0.5rem;
        }
        .faq-chevron {
          color: #B85C24;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .faq-chevron.rotate {
          transform: rotate(180deg);
        }
        .faq-a-content {
          padding: 0 1rem 0.85rem;
          font-size: 0.8rem;
          color: #554137;
          line-height: 1.55;
        }
        .faq-a-content p { margin: 0; }

        /* COMPACT OFFER BANNER */
        .skyalign-offer-banner {
          background: linear-gradient(135deg, #180D09 0%, #29140C 100%);
          border-radius: 20px;
          padding: 1.5rem 1.85rem;
          color: #fff;
          border: 1px solid rgba(214, 122, 65, 0.4);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
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
          gap: 1.5rem;
        }
        .offer-text-block { flex-grow: 1; }
        .offer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #F4B382;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          margin-bottom: 0.45rem;
        }
        .offer-title {
          font-family: var(--font-heading);
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.3rem;
          line-height: 1.25;
        }
        .offer-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.45;
          margin: 0;
        }
        .offer-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .offer-btn-primary {
          padding: 0.65rem 1.2rem !important;
          font-size: 0.82rem !important;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .offer-btn-secondary {
          background: rgba(214, 122, 65, 0.12) !important;
          border: 1px solid rgba(214, 122, 65, 0.4) !important;
          color: #F4B382 !important;
          padding: 0.65rem 1.2rem !important;
          font-size: 0.82rem !important;
          font-weight: 700;
          border-radius: 99px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        /* ── RESPONSIVE COMPACT LAYOUT FOR MOBILE ── */
        @media (max-width: 992px) {
          .skyalign-product-banner {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            gap: 1.5rem;
          }
          .skyalign-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .step-connector { display: none; }
          .case-content-grid {
            grid-template-columns: 1fr;
          }
          .crowding-selector-row {
            grid-template-columns: 1fr;
          }
          .estimate-result-card {
            grid-template-columns: repeat(2, 1fr);
          }
          .offer-content-grid {
            flex-direction: column;
            align-items: flex-start;
          }
          .offer-cta-group {
            width: 100%;
            flex-direction: row;
          }
          .offer-btn-primary, .offer-btn-secondary {
            flex: 1;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .skyalign-section {
            padding: 1.25rem 0.65rem 1.5rem !important;
          }
          .skyalign-top-badge {
            font-size: 0.65rem !important;
            padding: 0.2rem 0.65rem !important;
            margin-bottom: 0.4rem !important;
          }
          .skyalign-main-heading {
            font-size: 1.48rem !important;
            margin-bottom: 0.35rem !important;
          }
          .skyalign-main-subdesc {
            font-size: 0.78rem !important;
            line-height: 1.35 !important;
            margin-bottom: 0.75rem !important;
          }

          /* Mobile quick actions: compact grid */
          .skyalign-quick-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.4rem !important;
            margin-bottom: 1rem !important;
          }
          .btn-sky-cta {
            padding: 0.45rem 0.6rem !important;
            font-size: 0.72rem !important;
            justify-content: center !important;
          }

          .skyalign-product-banner {
            padding: 0.85rem !important;
            border-radius: 18px !important;
            margin-bottom: 1rem !important;
            gap: 1rem !important;
          }
          .skyalign-brand-pill {
            font-size: 0.64rem !important;
            padding: 0.2rem 0.55rem !important;
            margin-bottom: 0.45rem !important;
          }
          .skyalign-banner-title {
            font-size: 1.28rem !important;
            margin-bottom: 0.35rem !important;
          }
          .skyalign-banner-desc {
            font-size: 0.76rem !important;
            line-height: 1.35 !important;
            margin-bottom: 0.75rem !important;
          }

          .skyalign-badges-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.4rem !important;
            margin-bottom: 0.75rem !important;
          }
          .skyalign-badge-card {
            padding: 0.45rem 0.55rem !important;
            border-radius: 10px !important;
            gap: 0.45rem !important;
          }
          .badge-vector-orb {
            width: 24px !important;
            height: 24px !important;
            border-radius: 6px !important;
          }
          .badge-vector-orb svg {
            width: 13px !important;
            height: 13px !important;
          }
          .skyalign-badge-card strong {
            font-size: 0.72rem !important;
          }
          .badge-sub {
            font-size: 0.62rem !important;
          }
          .micro-tag {
            display: none !important;
          }

          .skyalign-pricing-pill-banner {
            padding: 0.5rem 0.65rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.35rem !important;
          }
          .pp-title {
            font-size: 0.74rem !important;
          }

          .product-portal-frame {
            height: 220px !important;
            border-radius: 14px !important;
          }
          .floating-img-badge {
            padding: 0.3rem 0.55rem !important;
            border-radius: 8px !important;
          }
          .floating-img-badge strong {
            font-size: 0.68rem !important;
          }
          .floating-img-badge span {
            font-size: 0.58rem !important;
          }

          /* Interactive Hub Mobile */
          .skyalign-interactive-hub {
            padding: 0.75rem !important;
            border-radius: 16px !important;
            margin-bottom: 1rem !important;
          }
          .hub-nav-pills {
            margin-bottom: 0.75rem !important;
            gap: 0.25rem !important;
          }
          .hub-pill {
            padding: 0.35rem 0.55rem !important;
            font-size: 0.7rem !important;
          }
          .hub-pill svg {
            width: 12px !important;
            height: 12px !important;
          }

          .skyalign-features-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.45rem !important;
          }
          .skyalign-feature-card {
            padding: 0.65rem !important;
            border-radius: 12px !important;
          }
          .sf-card-top {
            margin-bottom: 0.4rem !important;
          }
          .sf-icon-orb {
            width: 28px !important;
            height: 28px !important;
            border-radius: 8px !important;
          }
          .sf-icon-orb svg {
            width: 14px !important;
            height: 14px !important;
          }
          .sf-tag {
            font-size: 0.58rem !important;
            padding: 0.12rem 0.35rem !important;
          }
          .sf-title {
            font-size: 0.8rem !important;
            margin-bottom: 0.2rem !important;
          }
          .sf-desc {
            font-size: 0.68rem !important;
            line-height: 1.3 !important;
          }

          .skyalign-process-wrapper {
            padding: 0.75rem !important;
            border-radius: 14px !important;
          }
          .process-steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.45rem !important;
          }
          .process-step-card {
            padding: 0.65rem !important;
            border-radius: 12px !important;
          }
          .step-num-badge {
            font-size: 1.1rem !important;
            margin-bottom: 0.25rem !important;
          }
          .step-title {
            font-size: 0.78rem !important;
            margin-bottom: 0.15rem !important;
          }
          .step-desc {
            font-size: 0.66rem !important;
            line-height: 1.3 !important;
          }

          /* Comparison Table Mobile */
          .comp-table-header {
            grid-template-columns: 1fr 1.2fr !important;
            font-size: 0.68rem !important;
            padding: 0.5rem 0.65rem !important;
          }
          .comp-col-others { display: none !important; }
          .comp-row {
            grid-template-columns: 1fr 1.2fr !important;
            padding: 0.5rem 0.65rem !important;
            font-size: 0.7rem !important;
          }
          .comp-other-cell { display: none !important; }

          /* Calculator Mobile */
          .skyalign-calc-container {
            padding: 0.75rem !important;
            border-radius: 16px !important;
            margin-bottom: 1rem !important;
          }
          .calc-heading {
            font-size: 1.05rem !important;
          }
          .calc-sub {
            font-size: 0.74rem !important;
            margin-bottom: 0.65rem !important;
          }
          .crowding-selector-row {
            gap: 0.4rem !important;
            margin-bottom: 0.75rem !important;
          }
          .crowd-btn {
            padding: 0.45rem 0.55rem !important;
            border-radius: 10px !important;
          }
          .crowd-btn span {
            font-size: 0.74rem !important;
          }
          .crowd-btn small {
            font-size: 0.62rem !important;
          }
          .estimate-result-card {
            padding: 0.75rem !important;
            gap: 0.45rem !important;
            border-radius: 12px !important;
          }
          .em-label {
            font-size: 0.58rem !important;
          }
          .em-value {
            font-size: 0.88rem !important;
          }

          /* FAQ Mobile */
          .skyalign-faq-wrapper {
            padding: 0.75rem !important;
            border-radius: 16px !important;
          }
          .faq-title {
            font-size: 1.05rem !important;
          }
          .faq-q-btn {
            padding: 0.65rem 0.75rem !important;
            font-size: 0.76rem !important;
          }
          .faq-a-content {
            padding: 0 0.75rem 0.65rem !important;
            font-size: 0.72rem !important;
          }

          /* Offer Banner Mobile */
          .skyalign-offer-banner {
            padding: 1rem 0.85rem !important;
            border-radius: 14px !important;
          }
          .offer-title {
            font-size: 1.02rem !important;
          }
          .offer-desc {
            font-size: 0.74rem !important;
          }
          .offer-cta-group {
            flex-direction: column !important;
            gap: 0.4rem !important;
          }
          .offer-btn-primary, .offer-btn-secondary {
            font-size: 0.74rem !important;
            padding: 0.5rem 0.85rem !important;
          }
        }
      `}} />
    </section>
  );
}
