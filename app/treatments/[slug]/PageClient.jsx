'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Phone, Calendar, Sparkles, 
  ShieldCheck, Clock, Activity, ChevronDown, 
  ChevronUp, Stethoscope, AlertCircle, 
  MessageSquare, Star, Award, CreditCard, ArrowRight, Zap,
  Check, Info, ShieldAlert, HeartPulse, UserCheck, Layers
} from 'lucide-react';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import SmartBooking from '../../components/SmartBooking';

// ── CTA EVENT TRACKER ────────────────────────────────────────────────────────
const trackCTA = (action, details = {}) => {
  try {
    if (typeof window !== 'undefined') {
      const payload = {
        event: 'treatment_cta_interaction',
        action,
        timestamp: new Date().toISOString(),
        device: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
        ...details
      };
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      }
    }
  } catch (err) {
    // Non-blocking telemetry
  }
};

// ── FAQ ACCORDION COMPONENT ──────────────────────────────────────────────────
const FAQItem = ({ faq, index, treatmentSlug }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const toggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackCTA('faq_open', { question: faq.q, treatment_slug: treatmentSlug });
    }
  };

  return (
    <div className={`treatment-faq-item ${isOpen ? 'is-active' : ''}`}>
      <button 
        type="button"
        className="treatment-faq-question"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="faq-q-text">{faq.q}</span>
        <span className="faq-icon-wrap" aria-hidden="true">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── MAIN TREATMENT PAGE CLIENT ───────────────────────────────────────────────
export default function PageClient({ treatment }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'procedure' | 'benefits' | 'pricing' | 'all'

  if (!treatment) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I would like to enquire about ${treatment.title} treatment at Shubh Dental Clinic Rohtak.`
  );
  const whatsappUrl = `https://wa.me/918685048414?text=${whatsappMessage}`;


  const isTabVisible = (tabKey) => {
    return activeTab === 'all' || activeTab === tabKey;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', sub: 'What & Candidacy', badge: '01', icon: Stethoscope },
    { id: 'procedure', label: 'Procedure', sub: 'Steps & 3D Tech', badge: '02', icon: Layers },
    { id: 'benefits', label: 'Benefits & Care', sub: 'Safety & Life', badge: '03', icon: ShieldCheck },
    { id: 'pricing', label: 'Cost & Reviews', sub: 'EMI & Ratings', badge: '04', icon: CreditCard },
    { id: 'all', label: 'View All', sub: 'Full Blueprint', badge: 'ALL', icon: Sparkles }
  ];

  return (
    <div className="treatment-page-wrapper">
      {/* Light warm background subtle accents */}
      <div className="light-ambient-glow glow-1" aria-hidden="true" />
      <div className="light-ambient-glow glow-2" aria-hidden="true" />

      <div className="treatment-container">
        
        {/* ── 01. BREADCRUMB (LIGHT THEME MATCHING HEADER) ────────────────── */}
        <nav aria-label="Breadcrumb" className="treatment-breadcrumbs">
          <Link href="/" onClick={() => trackCTA('breadcrumb_click', { label: 'Home' })}>Home</Link>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <Link href="/treatments" onClick={() => trackCTA('breadcrumb_click', { label: 'Treatments' })}>Treatments</Link>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <span className="crumb-category">{treatment.category || 'Specialist Care'}</span>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <span className="crumb-current" aria-current="page">{treatment.title}</span>
        </nav>

        {/* ── 02. HERO HEADER (ELEGANT LIGHT BACKGROUND WITH DARK ACCENTS) ─ */}
        <motion.header 
          className="treatment-hero-heading-only"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          aria-labelledby="hero-treatment-heading"
        >
          <div className="hero-top-badges">
            <motion.div 
              className="treatment-category-badge"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Sparkles size={11} aria-hidden="true" />
              <span>{treatment.category || 'Specialized Dentistry'}</span>
            </motion.div>
            <div className="hero-trust-chip">
              <ShieldCheck size={12} className="trust-green-icon" aria-hidden="true" />
              <span>Specialist Clinical Care · Rohtak</span>
            </div>
          </div>

          <h1 id="hero-treatment-heading" className="hero-main-title font-heading">
            {treatment.h1 || `${treatment.title} in Rohtak`}
          </h1>
          
          <p className="hero-sub-title">{treatment.subtitle}</p>

          <div className="hero-micro-action-row">
            <motion.a 
              href="#book" 
              className="hero-pill-btn hero-pill-book"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => trackCTA('hero_book_click', { treatment: treatment.title })}
            >
              <Calendar size={13} aria-hidden="true" />
              <span>Book Consultation</span>
            </motion.a>
            <motion.a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-pill-btn hero-pill-wa"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => trackCTA('hero_whatsapp_click', { treatment: treatment.title })}
            >
              <MessageSquare size={13} aria-hidden="true" />
              <span>Ask on WhatsApp</span>
            </motion.a>
            <motion.a 
              href="tel:+918685048414" 
              className="hero-pill-btn hero-pill-call"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => trackCTA('hero_call_click', { treatment: treatment.title })}
            >
              <Phone size={13} aria-hidden="true" />
              <span>Call Clinic</span>
            </motion.a>
          </div>
        </motion.header>

        {/* ── 03. COMPACT TRUST STRIP (PREMIUM DARK CARDS ON LIGHT BG) ──── */}
        <motion.section 
          className="treatment-trust-strip" 
          aria-label="Clinical Trust Signals"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <div className="trust-strip-grid">
            <div className="trust-strip-item">
              <Award size={15} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Specialist-Led Care</strong>
                <span>PGI Alumni Doctors</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <Activity size={15} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>3D Diagnostics</strong>
                <span>Optical Scanning &amp; CBCT</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <HeartPulse size={15} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Personalized Plan</strong>
                <span>Evidence-Based Care</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <ShieldCheck size={15} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Sterile Hospital Protocol</strong>
                <span>Class-B Autoclaving</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 04. AT A GLANCE (QUICK TREATMENT FACTS - ULTRA COMPACT 3x2) ─── */}
        {treatment.quickFacts && (
          <motion.section 
            className="treatment-content-card snapshot-card" 
            aria-label="Treatment Quick Facts"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="card-header-compact">
              <span className="section-eyebrow">Treatment Snapshot</span>
              <h2 className="card-section-title font-heading">
                <span>At a Glance</span>
              </h2>
            </div>

            <div className="metrics-grid">
              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">⏱️</span>
                <div className="metric-content">
                  <span className="metric-label">Duration</span>
                  <strong className="metric-value">{treatment.quickFacts.duration || 'Case-dependent'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">🗓️</span>
                <div className="metric-content">
                  <span className="metric-label">Visits</span>
                  <strong className="metric-value">{treatment.quickFacts.visits || 'Personalized'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">💉</span>
                <div className="metric-content">
                  <span className="metric-label">Anaesthesia</span>
                  <strong className="metric-value">{treatment.quickFacts.anaesthesia || 'Local / None'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">🛡️</span>
                <div className="metric-content">
                  <span className="metric-label">Downtime</span>
                  <strong className="metric-value">{treatment.quickFacts.recovery || 'Minimal'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">🎯</span>
                <div className="metric-content">
                  <span className="metric-label">Ideal For</span>
                  <strong className="metric-value">{treatment.quickFacts.candidacy || 'On Evaluation'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <span className="metric-icon" aria-hidden="true">⏳</span>
                <div className="metric-content">
                  <span className="metric-label">Longevity</span>
                  <strong className="metric-value">{treatment.quickFacts.longevity || 'Long-lasting'}</strong>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── 05. MODERN SEGMENTED CONTROLLER / INTERACTIVE CARD SYSTEM ─── */}
        <div className="section-segmented-controller" role="tablist" aria-label="Clinical Treatment Modules">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button 
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className={`segment-card-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  trackCTA('tab_switch', { tab: tab.id, treatment: treatment.title });
                }}
              >
                {/* Glowing Active Background Highlight via Framer Motion */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabPill" 
                    className="active-tab-glow-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="segment-card-content">
                  <div className="segment-card-top-row">
                    <div className="segment-card-icon-wrap">
                      <IconComp size={15} aria-hidden="true" />
                    </div>
                    <span className="segment-card-badge">{tab.badge}</span>
                  </div>
                  <div className="segment-card-labels">
                    <span className="segment-card-main-title">{tab.label}</span>
                    <span className="segment-card-subtitle">{tab.sub}</span>
                  </div>
                </div>

                {/* Subtle active indicator pip */}
                {isActive && (
                  <span className="active-card-pip" aria-hidden="true" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* ── MODULE 1: OVERVIEW, CONDITIONS & CANDIDACY ───────────────────── */}
        {isTabVisible('overview') && (
          <motion.div 
            className="treatment-module-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            
            {/* Overview & Purpose */}
            <section id="overview" className="treatment-content-card">
              <span className="section-eyebrow">Clinical Definition</span>
              <h2 className="card-section-title font-heading">
                <Stethoscope className="title-icon-copper" size={17} aria-hidden="true" />
                <span>What Is {treatment.title}?</span>
              </h2>
              <div className="clinical-text-block">
                <p>{treatment.overview}</p>
              </div>
            </section>

            {/* Only Render Clinical Transformation Results IF authentic Case Study exists */}
            {treatment.caseStudy && treatment.caseStudy.beforeSrc && treatment.caseStudy.afterSrc && (
              <section className="treatment-content-card results-preview-card" aria-label="Clinical Transformation Results">
                <div className="results-header-row">
                  <div>
                    <span className="section-eyebrow">Visual Proof</span>
                    <h2 className="card-section-title font-heading" style={{ marginBottom: '0.2rem' }}>
                      <Sparkles className="title-icon-copper" size={16} aria-hidden="true" />
                      <span>Clinical Transformation Results</span>
                    </h2>
                  </div>
                  <span className="results-chip-badge">Verified Case</span>
                </div>

                <div className="results-slider-box">
                  <BeforeAfterSlider 
                    beforeSrc={treatment.caseStudy.beforeSrc}
                    afterSrc={treatment.caseStudy.afterSrc}
                    beforeAlt={`${treatment.title} Before Treatment`}
                    afterAlt={`${treatment.title} After Treatment Result`}
                  />
                  <div className="results-caption-meta">
                    <span className="results-title-text">{treatment.caseStudy.title}</span>
                    <span className="results-drag-hint">↔ Drag slider to compare</span>
                  </div>
                </div>
              </section>
            )}

            {/* Problems Addressed */}
            {treatment.conditions && treatment.conditions.length > 0 && (
              <section id="conditions" className="treatment-content-card">
                <span className="section-eyebrow">Indications</span>
                <h2 className="card-section-title font-heading">
                  <Activity className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Problems &amp; Conditions Treated</span>
                </h2>
                <div className="conditions-grid">
                  {treatment.conditions.map((item, idx) => (
                    <div key={idx} className="condition-item-box">
                      <CheckCircle2 size={15} className="condition-check-icon" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Candidacy & Alternatives */}
            <section id="candidacy" className="treatment-content-card">
              <span className="section-eyebrow">Evaluation</span>
              <h2 className="card-section-title font-heading">
                <UserCheck className="title-icon-copper" size={17} aria-hidden="true" />
                <span>Who May Benefit From {treatment.title}?</span>
              </h2>

              <div className="candidacy-split-grid">
                <div className="candidacy-box c-box-suitable">
                  <div className="c-box-header">
                    <Check size={15} className="c-icon-green" aria-hidden="true" />
                    <h3>Suitable Candidates</h3>
                  </div>
                  <p>{treatment.candidacy?.idealFor || treatment.idealFor}</p>
                </div>

                <div className="candidacy-box c-box-unsuitable">
                  <div className="c-box-header">
                    <AlertCircle size={15} className="c-icon-amber" aria-hidden="true" />
                    <h3>When Caution or Alternative Care is Advised</h3>
                  </div>
                  <p>{treatment.candidacy?.notIdealFor || treatment.notIdealFor}</p>
                </div>
              </div>

              {treatment.alternatives && treatment.alternatives.length > 0 && (
                <div id="alternatives" className="alternatives-sub-section">
                  <h3 className="alternatives-sub-title">
                    <Info size={14} aria-hidden="true" />
                    <span>Alternative Clinical Pathways</span>
                  </h3>
                  <div className="alternatives-cards-list">
                    {treatment.alternatives.map((alt, i) => (
                      <div key={i} className="alt-card">
                        <strong>{typeof alt === 'string' ? alt : alt.name}</strong>
                        {alt.description && <p>{alt.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

          </motion.div>
        )}

        {/* ── MODULE 2: OPTIONS, PROCESS & TECHNOLOGY ──────────────────────── */}
        {isTabVisible('procedure') && (
          <motion.div 
            className="treatment-module-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            
            {/* Options Comparison */}
            {treatment.optionsComparison && (
              <section id="options" className="treatment-content-card">
                <span className="section-eyebrow">Options Matrix</span>
                <h2 className="card-section-title font-heading">
                  <Layers className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>{treatment.optionsComparison.title || 'Treatment Options'}</span>
                </h2>

                {treatment.optionsComparison.type === 'matrix' ? (
                  <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Option / System</th>
                          <th>Best For</th>
                          <th>Key Characteristics</th>
                          <th>Comfort &amp; Care</th>
                        </tr>
                      </thead>
                      <tbody>
                        {treatment.optionsComparison.items.map((row, idx) => (
                          <tr key={idx}>
                            <td className="row-title"><strong>{row.name}</strong></td>
                            <td>{row.bestFor || 'Specialist examination'}</td>
                            <td>{row.visibility || row.material || row.strength || row.timeline || 'Custom planned'}</td>
                            <td>{row.hygiene || row.comfort || row.durability || row.dietRule || 'Standard care'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="options-cards-grid">
                    {treatment.optionsComparison.items.map((card, idx) => (
                      <div key={idx} className="option-info-card">
                        <h3 className="opt-card-title">{card.name}</h3>
                        <p className="opt-card-desc">{card.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Step-by-step Process */}
            {treatment.processSteps && treatment.processSteps.length > 0 && (
              <section id="process" className="treatment-content-card">
                <span className="section-eyebrow">Clinical Pathway</span>
                <h2 className="card-section-title font-heading">
                  <Clock className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>How {treatment.title} Works: Step-by-Step</span>
                </h2>
                <p className="section-intro-text">
                  Structured stages designed for high precision, patient comfort, and predictable outcomes.
                </p>

                <div className="treatment-process-list">
                  {treatment.processSteps.map((step, idx) => (
                    <div key={idx} className="process-step-item">
                      <div className="step-number-bubble" aria-hidden="true">
                        <span>{step.step || idx + 1}</span>
                      </div>
                      <div className="step-content-card">
                        <h3 className="step-title font-heading">{step.title}</h3>
                        <p className="step-desc">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Diagnostics & Technology */}
            {treatment.technology && treatment.technology.length > 0 && (
              <section id="technology" className="treatment-content-card">
                <span className="section-eyebrow">Technology</span>
                <h2 className="card-section-title font-heading">
                  <Zap className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Diagnostics &amp; Technology Used</span>
                </h2>

                <div className="tech-cards-grid">
                  {treatment.technology.map((tech, idx) => (
                    <div key={idx} className="tech-box">
                      <div className="tech-box-header">
                        <span className="tech-bullet" aria-hidden="true">🔹</span>
                        <strong className="tech-name">{typeof tech === 'string' ? tech : tech.name}</strong>
                      </div>
                      {tech.purpose && <p className="tech-purpose">{tech.purpose}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

          </motion.div>
        )}

        {/* ── MODULE 3: BENEFITS, RISKS, TIMELINE & COMFORT ────────────────── */}
        {isTabVisible('benefits') && (
          <motion.div 
            className="treatment-module-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            
            {/* Benefits */}
            {treatment.benefits && (
              <section id="benefits" className="treatment-content-card">
                <span className="section-eyebrow">Evidence-Based Value</span>
                <h2 className="card-section-title font-heading">
                  <ShieldCheck className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Benefits of {treatment.title}</span>
                </h2>

                {Array.isArray(treatment.benefits) ? (
                  <div className="benefits-cards-grid">
                    {treatment.benefits.map((b, idx) => (
                      <div key={idx} className="benefit-pill-card">
                        <div className="b-check-circle" aria-hidden="true"><CheckCircle2 size={15} /></div>
                        <div className="b-card-text">
                          <h3 className="b-card-title">{b.title}</h3>
                          {b.desc && <p className="b-card-desc">{b.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="benefits-split-container">
                    {treatment.benefits.functional && treatment.benefits.functional.length > 0 && (
                      <div className="benefit-col">
                        <h3 className="b-col-heading">🦷 Functional &amp; Health Benefits</h3>
                        <ul className="b-col-list">
                          {treatment.benefits.functional.map((f, i) => (
                            <li key={i}><Check size={14} aria-hidden="true" /> <span>{f}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {treatment.benefits.aesthetic && treatment.benefits.aesthetic.length > 0 && (
                      <div className="benefit-col">
                        <h3 className="b-col-heading">✨ Aesthetic &amp; Confidence Benefits</h3>
                        <ul className="b-col-list">
                          {treatment.benefits.aesthetic.map((a, i) => (
                            <li key={i}><Check size={14} aria-hidden="true" /> <span>{a}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Risks & Considerations */}
            {treatment.risksAndLimitations && treatment.risksAndLimitations.length > 0 && (
              <section id="risks" className="treatment-content-card">
                <span className="section-eyebrow">Transparency</span>
                <h2 className="card-section-title font-heading">
                  <ShieldAlert className="title-icon-amber" size={17} aria-hidden="true" />
                  <span>Clinical Considerations</span>
                </h2>
                <div className="risks-list">
                  {treatment.risksAndLimitations.map((item, idx) => (
                    <div key={idx} className="risk-item-box">
                      <span className="risk-bullet" aria-hidden="true">⚠️</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Duration & Timeline */}
            {treatment.durationAndTimeline && (
              <section id="timeline" className="treatment-content-card">
                <span className="section-eyebrow">Schedule</span>
                <h2 className="card-section-title font-heading">
                  <Clock className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>How Long Does It Take?</span>
                </h2>

                <div className="timeline-cards-grid">
                  <div className="t-card">
                    <strong>Initial Phase</strong>
                    <p>{treatment.durationAndTimeline.consultationToBonding || 'Consultation & 3D Diagnostics'}</p>
                  </div>
                  <div className="t-card">
                    <strong>Active Care</strong>
                    <p>{treatment.durationAndTimeline.activeTreatment || 'Personalized clinical treatment'}</p>
                  </div>
                  <div className="t-card">
                    <strong>Maintenance</strong>
                    <p>{treatment.durationAndTimeline.retentionPhase || 'Periodic recall check-ups'}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Pain & Comfort */}
            {treatment.painAndComfort && (
              <section id="comfort" className="treatment-content-card">
                <span className="section-eyebrow">Comfort</span>
                <h2 className="card-section-title font-heading">
                  <HeartPulse className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Pain &amp; Patient Experience</span>
                </h2>

                <div className="comfort-grid">
                  <div className="comfort-box">
                    <h4>💉 Anaesthesia Protocol</h4>
                    <p>{treatment.painAndComfort.anaesthesia}</p>
                  </div>
                  <div className="comfort-box">
                    <h4>😌 Expected Sensation</h4>
                    <p>{treatment.painAndComfort.expectedSensation}</p>
                  </div>
                  <div className="comfort-box">
                    <h4>📞 Contact Support</h4>
                    <p>{treatment.painAndComfort.whenToContact}</p>
                  </div>
                </div>
              </section>
            )}

          </motion.div>
        )}

        {/* ── MODULE 4: PRICING, DOCTORS, REVIEWS, FAQS & LOCATION ─────────── */}
        {isTabVisible('pricing') && (
          <motion.div 
            className="treatment-module-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            
            {/* Cost & EMI */}
            {treatment.costDetails && (
              <section id="cost" className="treatment-content-card pricing-breakdown-card">
                <div className="pricing-card-header">
                  <div>
                    <span className="section-eyebrow">Transparent Pricing</span>
                    <h2 className="card-section-title font-heading">
                      <CreditCard className="title-icon-copper" size={17} aria-hidden="true" />
                      <span>Estimated Investment</span>
                    </h2>
                  </div>
                  <div className="pricing-rate-tag">
                    <span className="cost-label">Estimated Range</span>
                    <span className="cost-amount">{treatment.costDetails.range || treatment.cost || 'Personalized Plan'}</span>
                  </div>
                </div>

                {treatment.costDetails.factors && treatment.costDetails.factors.length > 0 && (
                  <div className="cost-factors-block">
                    <h4 className="factors-heading">Factors Influencing Your Cost:</h4>
                    <ul className="factors-list">
                      {treatment.costDetails.factors.map((fac, i) => (
                        <li key={i}>{fac}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {treatment.costDetails.emiAvailable && (
                  <div className="emi-highlight-banner">
                    <span className="emi-icon" aria-hidden="true">💳</span>
                    <div>
                      <strong>0% Interest Flexible Monthly EMI Available</strong>
                      <p>{treatment.costDetails.emiNote || 'Simple monthly installments spread across active care.'}</p>
                    </div>
                  </div>
                )}

                <div className="pricing-cta-row">
                  <motion.a 
                    href="#book" 
                    className="btn-estimate"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => trackCTA('treatment_cost_cta_click', { treatment_slug: treatment.slug })}
                  >
                    Request Exact Cost Estimate
                  </motion.a>
                </div>
              </section>
            )}

            {/* Why Shubh Clinic */}
            <section className="treatment-content-card">
              <span className="section-eyebrow">Clinical Excellence</span>
              <h2 className="card-section-title font-heading">
                <Award className="title-icon-copper" size={17} aria-hidden="true" />
                <span>Why Choose Shubh Orthodontic &amp; Dental Clinic</span>
              </h2>

              <div className="why-clinic-grid">
                {(treatment.whyChooseClinic || [
                  'PGI Chandigarh & Rohtak trained specialist clinical leadership.',
                  'Over 20+ years of dedicated hands-on dental and orthodontic experience.',
                  'In-house digital 3D scanning and treatment planning lab.',
                  'Hospital-grade sterilization with class-B vacuum autoclaving.'
                ]).map((point, idx) => (
                  <div key={idx} className="why-item">
                    <CheckCircle2 size={16} className="why-check" aria-hidden="true" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            {treatment.testimonials && treatment.testimonials.length > 0 && (
              <section className="treatment-content-card">
                <span className="section-eyebrow">Patient Feedback</span>
                <h2 className="card-section-title font-heading">
                  <Star className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Verified Patient Experiences</span>
                </h2>

                <div className="testimonials-grid">
                  {treatment.testimonials.map((t, idx) => (
                    <div key={idx} className="testimonial-card-item">
                      <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                      <p className="t-quote">“{t.review}”</p>
                      <div className="t-author">
                        <strong>{t.name}</strong>
                        <span>{t.location} · {t.treatment}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <section id="faqs" className="treatment-content-card">
                <span className="section-eyebrow">Questions &amp; Answers</span>
                <h2 className="card-section-title font-heading">
                  <Sparkles className="title-icon-copper" size={17} aria-hidden="true" />
                  <span>Frequently Asked Questions</span>
                </h2>
                
                <div className="treatment-faqs-list">
                  {treatment.faqs.map((faq, idx) => (
                    <FAQItem key={idx} faq={faq} index={idx} treatmentSlug={treatment.slug} />
                  ))}
                </div>
              </section>
            )}

            {/* Related Treatments */}
            {treatment.relatedTreatments && treatment.relatedTreatments.length > 0 && (
              <section className="related-treatments-section" aria-label="Related Dental Procedures">
                <h3 className="related-title font-heading">Related Procedures</h3>
                <div className="related-pills-row">
                  {treatment.relatedTreatments.map((rel, i) => {
                    const slug = typeof rel === 'string' ? rel : rel.slug;
                    const title = typeof rel === 'string' ? rel.replace(/-/g, ' ').toUpperCase() : rel.title;
                    const anchor = typeof rel === 'string' ? `Explore ${title}` : rel.anchor;

                    return (
                      <Link 
                        key={i} 
                        href={`/treatments/${slug}`} 
                        className="related-treatment-pill"
                        onClick={() => trackCTA('related_treatment_click', { from: treatment.slug, to: slug })}
                      >
                        <span>{anchor || title}</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

          </motion.div>
        )}

      </div>

      {/* ── 25. APPOINTMENT BOOKING SECTION ─────────────────────────────── */}
      <div id="book" className="treatment-booking-outer-wrapper">
        <SmartBooking />
      </div>

      {/* ── GLOBAL UI: FIXED MOBILE STICKY CONVERSION BAR ─────────────────── */}
      <aside className="mobile-sticky-action-bar" aria-label="Quick Action Bar">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sticky-btn sticky-wa"
          onClick={() => trackCTA('mobile_sticky_whatsapp_click', { treatment_slug: treatment.slug })}
        >
          <MessageSquare size={15} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a 
          href="tel:+918685048414" 
          className="sticky-btn sticky-call"
          onClick={() => trackCTA('mobile_sticky_call_click', { treatment_slug: treatment.slug })}
        >
          <Phone size={15} aria-hidden="true" />
          <span>Call</span>
        </a>

        <a 
          href="#book" 
          className="sticky-btn sticky-book"
          onClick={() => trackCTA('mobile_sticky_book_click', { treatment_slug: treatment.slug })}
        >
          <Calendar size={15} aria-hidden="true" />
          <span>Book</span>
        </a>
      </aside>

      {/* ── LIGHT LUXURY BACKGROUND WITH STRIKING DARK THEMED CARDS ────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── PAGE FOUNDATION: LIGHT ELEGANT WARM BACKGROUND ── */
        .treatment-page-wrapper {
          min-height: 100vh;
          padding: 1.25rem 1rem 0;
          background: #FAF8F5; /* Premium soft ivory cashmere */
          color: #2D2420;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
          overflow-x: hidden;
          box-sizing: border-box;
          position: relative;
        }

        /* Ambient subtle copper radial lighting on light background */
        .light-ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.12;
        }
        .glow-1 {
          top: 3%;
          left: 45%;
          transform: translateX(-50%);
          width: 550px;
          height: 380px;
          background: radial-gradient(circle, #D67A41 0%, transparent 70%);
        }
        .glow-2 {
          top: 50%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #F79B63 0%, transparent 70%);
        }

        .treatment-container {
          max-width: 980px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .treatment-booking-outer-wrapper {
          max-width: 980px;
          margin: 1.5rem auto 0;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          scroll-margin-top: 70px;
        }
        .treatment-booking-outer-wrapper .smart-booking-section {
          padding: 0 !important;
          background: transparent !important;
        }
        .treatment-booking-outer-wrapper .smart-booking-container {
          max-width: 100% !important;
          padding: 0 !important;
        }

        /* ── BREADCRUMBS: LIGHT & CRISP ──────────────── */
        .treatment-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #8C7063;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
        }
        .treatment-breadcrumbs a {
          color: #D67A41;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .treatment-breadcrumbs a:hover {
          color: #110805;
        }
        .crumb-separator {
          color: #C8B9B0;
          font-size: 0.72rem;
        }
        .crumb-category {
          color: #7A5C4F;
        }
        .crumb-current {
          color: #1A0D08;
          font-weight: 800;
        }

        /* ── HERO HEADING: CRISP TYPOGRAPHY ON LIGHT BG ─ */
        .treatment-hero-heading-only {
          padding: 0.25rem 0 0.85rem;
          margin-bottom: 0.75rem;
          position: relative;
          width: 100%;
        }

        .hero-top-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .treatment-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.12);
          color: #9A4616;
          padding: 0.28rem 0.75rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.28);
          box-shadow: 0 2px 6px rgba(214, 122, 65, 0.08);
        }

        .hero-trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          color: #2D2420;
          padding: 0.28rem 0.75rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 700;
          border: 1px solid rgba(74, 37, 24, 0.1);
          box-shadow: 0 2px 8px rgba(74, 37, 24, 0.04);
        }
        .trust-green-icon {
          color: #10B981;
        }

        .hero-main-title {
          font-size: clamp(1.75rem, 3.4vw, 2.45rem);
          font-weight: 900;
          color: #110805;
          line-height: 1.15;
          margin-bottom: 0.35rem;
          letter-spacing: -0.025em;
        }

        .hero-sub-title {
          font-size: clamp(0.92rem, 1.6vw, 1.05rem);
          color: #7A4E38;
          font-weight: 600;
          line-height: 1.45;
          margin-bottom: 0.85rem;
          max-width: 840px;
        }

        .hero-micro-action-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .hero-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.48rem 0.95rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-pill-book {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.32);
        }
        .hero-pill-wa {
          background: #FFFFFF;
          color: #15803D;
          border: 1.5px solid rgba(34, 197, 94, 0.35);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .hero-pill-call {
          background: #FFFFFF;
          color: #2D2420;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        /* ── 03. COMPACT TRUST STRIP: SLEEK DARK THEMED METALLIC CHIP ────── */
        .treatment-trust-strip {
          background: linear-gradient(145deg, #18110D 0%, #0F0A08 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 16px;
          padding: 0.85rem 1.15rem;
          margin-bottom: 0.85rem;
          box-shadow: 0 6px 20px rgba(26, 13, 8, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .trust-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
        }
        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .trust-icon {
          color: #F79B63;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(247, 155, 99, 0.3));
        }
        .trust-strip-item strong {
          display: block;
          font-size: 0.8rem;
          color: #FFFFFF;
          line-height: 1.25;
        }
        .trust-strip-item span {
          display: block;
          font-size: 0.68rem;
          color: #BDB0A8;
          line-height: 1.25;
        }

        /* ── 04. SEGMENTED CONTROLLER TABS (MAGNETIC LUXURY CARDS) ──────── */
        .section-segmented-controller {
          display: flex;
          gap: 0.55rem;
          margin-bottom: 0.85rem;
          overflow-x: auto;
          padding: 0.45rem 0.2rem 0.6rem;
          scrollbar-width: none;
          position: sticky;
          top: 60px;
          z-index: 25;
          background: rgba(250, 248, 245, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          -webkit-overflow-scrolling: touch;
        }
        .section-segmented-controller::-webkit-scrollbar { display: none; }

        .segment-card-btn {
          position: relative;
          flex: 1 0 auto;
          min-width: 136px;
          padding: 0.6rem 0.85rem 0.65rem;
          border-radius: 14px;
          border: 1px solid rgba(214, 122, 65, 0.25);
          background: linear-gradient(145deg, #1C130E 0%, #110A07 100%);
          color: #D8CCC5;
          cursor: pointer;
          text-align: left;
          box-shadow: 0 4px 14px rgba(26, 13, 8, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          user-select: none;
        }

        .segment-card-btn:hover {
          border-color: rgba(214, 122, 65, 0.55);
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .segment-card-btn:hover .segment-card-icon-wrap {
          color: #F79B63;
          background: rgba(214, 122, 65, 0.22);
          transform: rotate(-4deg) scale(1.08);
        }

        .segment-card-btn:hover .segment-card-main-title {
          color: #FFFFFF;
        }

        /* Framer Motion Active Glow Background */
        .active-tab-glow-bg {
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.22) 0%, rgba(140, 67, 24, 0.1) 100%);
          border: 1.5px solid #E08244;
          box-shadow: 0 0 18px rgba(214, 122, 65, 0.35), inset 0 0 12px rgba(214, 122, 65, 0.12);
          z-index: 0;
          pointer-events: none;
        }

        .segment-card-btn.is-active {
          border-color: #E08244;
          background: linear-gradient(145deg, #241710 0%, #160D09 100%);
          box-shadow: 0 6px 22px rgba(214, 122, 65, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        .segment-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.32rem;
        }

        .segment-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .segment-card-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(214, 122, 65, 0.2);
          color: #C8BCB5;
          transition: all 0.25s ease;
        }

        .segment-card-btn.is-active .segment-card-icon-wrap {
          background: linear-gradient(135deg, #D67A41 0%, #A34816 100%);
          border-color: #F79B63;
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.4);
        }

        .segment-card-badge {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: rgba(214, 122, 65, 0.7);
          text-transform: uppercase;
        }

        .segment-card-btn.is-active .segment-card-badge {
          color: #F79B63;
        }

        .segment-card-labels {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .segment-card-main-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #E6DDD7;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .segment-card-btn.is-active .segment-card-main-title {
          color: #FFFFFF;
        }

        .segment-card-subtitle {
          font-size: 0.67rem;
          font-weight: 500;
          color: #9E8F86;
          white-space: nowrap;
          margin-top: 0.12rem;
          transition: color 0.2s ease;
        }

        .segment-card-btn.is-active .segment-card-subtitle {
          color: #F5B892;
        }

        /* Pulsing micro indicator pip for active card */
        .active-card-pip {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #34D399;
          box-shadow: 0 0 6px #34D399;
          z-index: 2;
          animation: pulsePip 2s infinite ease-in-out;
        }

        @keyframes pulsePip {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        /* ── COMMON ULTRA-LUXURY DARK THEMED CARDS ───────────────────────── */
        .treatment-content-card {
          background: linear-gradient(155deg, #17100C 0%, #0E0806 100%);
          border: 1px solid rgba(214, 122, 65, 0.26);
          border-radius: 18px;
          padding: 1.25rem 1.35rem;
          margin-bottom: 0.85rem;
          color: #E8E0D9;
          box-shadow: 0 8px 30px rgba(26, 13, 8, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.07);
          scroll-margin-top: 85px;
          width: 100%;
          box-sizing: border-box;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .treatment-content-card:hover {
          border-color: rgba(214, 122, 65, 0.45);
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(214, 122, 65, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .card-header-compact {
          margin-bottom: 0.65rem;
        }
        .section-eyebrow {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: #F79B63;
          display: block;
          margin-bottom: 0.2rem;
        }

        .card-section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          line-height: 1.25;
        }

        .title-icon-copper { color: #F79B63; flex-shrink: 0; }
        .title-icon-amber { color: #FBBF24; flex-shrink: 0; }

        .clinical-text-block p {
          font-size: 0.88rem;
          color: #C8BCB5;
          line-height: 1.65;
          margin: 0;
        }

        .section-intro-text {
          font-size: 0.84rem;
          color: #B0A299;
          line-height: 1.55;
          margin-bottom: 0.85rem;
        }

        /* ── AT A GLANCE (METRICS - COMPACT 3x2) ─────────────────────────── */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }
        .metric-box {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 12px;
          padding: 0.7rem 0.8rem;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .metric-box:hover {
          border-color: rgba(214, 122, 65, 0.45);
          background: rgba(214, 122, 65, 0.08);
          transform: translateY(-1px);
        }
        .metric-icon {
          font-size: 1.25rem;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .metric-content {
          display: flex;
          flex-direction: column;
        }
        .metric-label {
          font-size: 0.64rem;
          font-weight: 800;
          color: #A3938A;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.15rem;
        }
        .metric-value {
          font-size: 0.84rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.3;
        }
        /* ── CLINICAL RESULTS BEFORE & AFTER (ULTRA COMPACT) ────────────── */
        .results-preview-card {
          padding: 1rem 1.15rem;
        }
        .results-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          gap: 0.5rem;
        }
        .results-chip-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(16, 185, 129, 0.12);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .results-slider-box {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(214, 122, 65, 0.22);
          background: #000000;
          max-width: 580px;
          margin: 0 auto;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
        }
        .results-slider-box .ba-slider {
          aspect-ratio: 16 / 10 !important;
          min-height: 200px !important;
          border-radius: 0 !important;
        }
        .results-caption-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.45rem 0.85rem;
          background: #110B08;
          border-top: 1px solid rgba(214, 122, 65, 0.16);
          font-size: 0.74rem;
        }
        .results-title-text {
          color: #E2D7D0;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .results-drag-hint {
          color: #F79B63;
          font-weight: 800;
          font-size: 0.7rem;
          flex-shrink: 0;
          margin-left: 0.5rem;
        }

        /* ── CONDITIONS LIST ─────────────────────────────────────────────── */
        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.55rem;
        }
        .condition-item-box {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 11px;
          padding: 0.6rem 0.8rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #E2D7D0;
          line-height: 1.35;
          transition: all 0.2s ease;
        }
        .condition-item-box:hover {
          border-color: rgba(214, 122, 65, 0.35);
          background: rgba(214, 122, 65, 0.06);
          transform: translateX(2px);
        }
        .condition-check-icon {
          color: #F79B63;
          flex-shrink: 0;
        }

        /* ── CANDIDACY & ALTERNATIVES ────────────────────────────────────── */
        .candidacy-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }
        .candidacy-box {
          border-radius: 14px;
          padding: 0.95rem 1.05rem;
          transition: transform 0.2s ease;
        }
        .candidacy-box:hover {
          transform: translateY(-1px);
        }
        .c-box-suitable {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .c-box-unsuitable {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .c-box-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.45rem;
        }
        .c-box-header h3 {
          font-size: 0.86rem;
          font-weight: 800;
          color: #FFFFFF;
        }
        .c-icon-green { color: #34D399; }
        .c-icon-amber { color: #FBBF24; }
        .candidacy-box p {
          font-size: 0.8rem;
          color: #D6C8BE;
          line-height: 1.55;
          margin: 0;
        }

        .alternatives-sub-section {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 14px;
          padding: 0.95rem 1.05rem;
        }
        .alternatives-sub-title {
          font-size: 0.84rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .alternatives-cards-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }
        .alt-card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 11px;
          padding: 0.7rem 0.8rem;
          transition: all 0.2s ease;
        }
        .alt-card:hover {
          border-color: rgba(214, 122, 65, 0.3);
          transform: translateY(-1px);
        }
        .alt-card strong {
          display: block;
          font-size: 0.82rem;
          color: #F79B63;
          margin-bottom: 0.2rem;
        }
        .alt-card p {
          font-size: 0.76rem;
          color: #B0A299;
          line-height: 1.45;
          margin: 0;
        }

        /* ── COMPARISON TABLE ────────────────────────────────────────────── */
        .comparison-table-wrapper {
          overflow-x: auto;
          margin-top: 0.65rem;
          width: 100%;
          border: 1px solid rgba(214, 122, 65, 0.22);
          border-radius: 14px;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.8rem;
        }
        .comparison-table th {
          background: #1C120D;
          color: #FFFFFF;
          font-weight: 800;
          padding: 0.8rem 0.95rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.28);
          white-space: nowrap;
        }
        .comparison-table td {
          padding: 0.8rem 0.95rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: #C8BCB5;
          line-height: 1.5;
        }
        .comparison-table tr:hover td {
          background: rgba(214, 122, 65, 0.06);
        }
        .row-title strong {
          color: #F79B63;
        }

        .options-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }
        .option-info-card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 14px;
          padding: 0.9rem;
          transition: all 0.22s ease;
        }
        .option-info-card:hover {
          border-color: rgba(214, 122, 65, 0.4);
          transform: translateY(-2px);
        }
        .opt-card-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }
        .opt-card-desc {
          font-size: 0.78rem;
          color: #B0A299;
          line-height: 1.5;
          margin: 0;
        }

        /* ── STEP-BY-STEP PROCESS: ANIMATED TIMELINE ─────────────────────── */
        .treatment-process-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .process-step-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          transition: transform 0.2s ease;
        }
        .process-step-item:hover {
          transform: translateX(3px);
        }
        .step-number-bubble {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          font-weight: 900;
          font-size: 0.84rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(214, 122, 65, 0.4);
        }
        .step-content-card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 13px;
          padding: 0.8rem 1rem;
          flex: 1;
        }
        .step-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .step-desc {
          font-size: 0.8rem;
          color: #BDB0A8;
          line-height: 1.5;
          margin: 0;
        }

        /* ── DIAGNOSTICS & TECH ──────────────────────────────────────────── */
        .tech-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }
        .tech-box {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 13px;
          padding: 0.8rem 0.9rem;
          transition: all 0.2s ease;
        }
        .tech-box:hover {
          border-color: rgba(214, 122, 65, 0.38);
          transform: translateY(-2px);
        }
        .tech-box-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.35rem;
        }
        .tech-name {
          font-size: 0.86rem;
          color: #FFFFFF;
        }
        .tech-purpose {
          font-size: 0.76rem;
          color: #B0A299;
          line-height: 1.45;
          margin: 0;
        }

        /* ── BENEFITS ────────────────────────────────────────────────────── */
        .benefits-split-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .benefit-col {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 14px;
          padding: 0.95rem 1.05rem;
        }
        .b-col-heading {
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.65rem;
        }
        .b-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .b-col-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.82rem;
          color: #C8BCB5;
          line-height: 1.45;
        }
        .b-col-list svg {
          color: #34D399;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .benefits-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }
        .benefit-pill-card {
          display: flex;
          gap: 0.7rem;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 13px;
          padding: 0.8rem 0.95rem;
          transition: all 0.2s ease;
        }
        .benefit-pill-card:hover {
          border-color: rgba(214, 122, 65, 0.4);
          transform: translateY(-2px);
        }
        .b-check-circle {
          color: #F79B63;
          flex-shrink: 0;
        }
        .b-card-title {
          font-size: 0.86rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }
        .b-card-desc {
          font-size: 0.78rem;
          color: #B0A299;
          line-height: 1.45;
          margin: 0;
        }

        /* ── RISKS & CONSIDERATIONS ──────────────────────────────────────── */
        .risks-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .risk-item-box {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          background: rgba(245, 158, 11, 0.09);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 12px;
          padding: 0.75rem 0.95rem;
        }
        .risk-bullet {
          font-size: 1rem;
          line-height: 1;
        }
        .risk-item-box p {
          font-size: 0.8rem;
          color: #FDE68A;
          line-height: 1.5;
          margin: 0;
        }

        /* ── TIMELINE & COMFORT ──────────────────────────────────────────── */
        .timeline-cards-grid, .comfort-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }
        .t-card, .comfort-box {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 13px;
          padding: 0.85rem 0.95rem;
          transition: all 0.2s ease;
        }
        .t-card:hover, .comfort-box:hover {
          border-color: rgba(214, 122, 65, 0.4);
          transform: translateY(-2px);
        }
        .t-card strong {
          display: block;
          font-size: 0.84rem;
          color: #F79B63;
          margin-bottom: 0.25rem;
        }
        .t-card p {
          font-size: 0.78rem;
          color: #BDB0A8;
          line-height: 1.45;
          margin: 0;
        }
        .comfort-box h4 {
          font-size: 0.84rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .comfort-box p {
          font-size: 0.78rem;
          color: #B0A299;
          line-height: 1.45;
          margin: 0;
        }

        /* ── PRICING CARD ────────────────────────────────────────────────── */
        .pricing-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .pricing-rate-tag {
          background: rgba(214, 122, 65, 0.16);
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          border-radius: 14px;
          padding: 0.55rem 1.05rem;
          text-align: right;
        }
        .cost-label {
          font-size: 0.66rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #B0A299;
          display: block;
        }
        .cost-amount {
          font-size: 1.25rem;
          font-weight: 900;
          color: #F79B63;
          display: block;
        }

        .cost-factors-block {
          background: rgba(255, 255, 255, 0.035);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          margin-bottom: 0.85rem;
        }
        .factors-heading {
          font-size: 0.82rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.45rem;
        }
        .factors-list {
          padding-left: 1.1rem;
          margin: 0;
        }
        .factors-list li {
          font-size: 0.78rem;
          color: #BDB0A8;
          line-height: 1.5;
        }

        .emi-highlight-banner {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 13px;
          padding: 0.75rem 0.95rem;
          margin-bottom: 0.95rem;
        }
        .emi-icon {
          font-size: 1.45rem;
        }
        .emi-highlight-banner strong {
          display: block;
          font-size: 0.84rem;
          color: #34D399;
        }
        .emi-highlight-banner p {
          font-size: 0.76rem;
          color: #A7F3D0;
          margin: 0;
        }

        .pricing-cta-row {
          text-align: center;
        }
        .btn-estimate {
          display: inline-block;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.86rem;
          padding: 0.7rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(214, 122, 65, 0.35);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ── WHY SHUBH DENTAL ────────────────────────────────────────────── */
        .why-clinic-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }
        .why-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 12px;
          padding: 0.7rem 0.9rem;
          transition: all 0.2s ease;
        }
        .why-item:hover {
          border-color: rgba(214, 122, 65, 0.35);
          transform: translateX(2px);
        }
        .why-check {
          color: #34D399;
          flex-shrink: 0;
        }
        .why-item p {
          font-size: 0.82rem;
          color: #E2D7D0;
          font-weight: 600;
          line-height: 1.45;
          margin: 0;
        }

        /* ── TESTIMONIALS ────────────────────────────────────────────────── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }
        .testimonial-card-item {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 14px;
          padding: 0.95rem 1.05rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.22s ease;
        }
        .testimonial-card-item:hover {
          border-color: rgba(214, 122, 65, 0.4);
          transform: translateY(-2px);
        }
        .testimonial-stars {
          color: #FBBF24;
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin-bottom: 0.45rem;
        }
        .t-quote {
          font-size: 0.82rem;
          color: #D6C8BE;
          line-height: 1.55;
          font-style: italic;
          margin-bottom: 0.75rem;
        }
        .t-author strong {
          display: block;
          font-size: 0.82rem;
          color: #FFFFFF;
        }
        .t-author span {
          display: block;
          font-size: 0.72rem;
          color: #9C8B82;
        }

        /* ── FAQS ────────────────────────────────────────────────────────── */
        .treatment-faqs-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .treatment-faq-item {
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 13px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.025);
          transition: all 0.2s ease;
        }
        .treatment-faq-item.is-active {
          border-color: rgba(214, 122, 65, 0.45);
          background: rgba(214, 122, 65, 0.08);
        }
        .treatment-faq-question {
          width: 100%;
          text-align: left;
          padding: 0.85rem 1.05rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.86rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .faq-icon-wrap {
          color: #F79B63;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .faq-answer-wrapper {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 1.05rem 0.85rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.2);
          padding-top: 0.65rem;
        }
        .faq-answer p {
          font-size: 0.8rem;
          color: #C8BCB5;
          line-height: 1.55;
          margin: 0;
        }

        /* ── RELATED TREATMENTS ──────────────────────────────────────────── */
        .related-treatments-section {
          background: linear-gradient(155deg, #17100C 0%, #0E0806 100%);
          border: 1px solid rgba(214, 122, 65, 0.22);
          border-radius: 16px;
          padding: 0.95rem 1.15rem;
          margin-bottom: 0.85rem;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 6px 24px rgba(26, 13, 8, 0.12);
        }
        .related-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.65rem;
        }
        .related-pills-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .related-treatment-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(214, 122, 65, 0.24);
          color: #E2D7D0;
          padding: 0.45rem 0.85rem;
          border-radius: 9px;
          font-size: 0.76rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .related-treatment-pill:hover {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
          transform: translateY(-2px);
        }

        /* ── GLOBAL UI: MOBILE STICKY CONVERSION BAR ─────────────────────── */
        .mobile-sticky-action-bar {
          display: none !important;
        }
        .sticky-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.58rem 0.45rem;
          border-radius: 10px;
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          color: #FFFFFF;
          transition: transform 0.15s ease;
        }
        .sticky-btn:active {
          transform: scale(0.96);
        }
        .sticky-wa {
          background: #15803D;
          border: 1px solid rgba(74, 222, 128, 0.35);
        }
        .sticky-call {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
        }
        .sticky-book {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
        }

        /* ── RESPONSIVE MOBILE OPTIMIZATION (HIGH DENSITY & COMPACT) ──────── */
        @media (max-width: 768px) {
          .treatment-page-wrapper {
            padding: 0.5rem 0.5rem 0;
          }

          .treatment-breadcrumbs {
            font-size: 0.72rem;
            margin-bottom: 0.55rem;
            gap: 0.35rem;
            padding: 0 0.15rem;
            line-height: 1.4;
          }

          .treatment-hero-heading-only {
            padding: 0.2rem 0.15rem 0.6rem;
            margin-bottom: 0.55rem;
          }
          .hero-top-badges {
            margin-bottom: 0.45rem;
            gap: 0.4rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          .treatment-category-badge, .hero-trust-chip {
            padding: 0.25rem 0.65rem;
            font-size: 0.67rem;
            border-radius: 99px;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
          }

          .hero-main-title {
            font-size: clamp(1.4rem, 6vw, 1.7rem);
            line-height: 1.2;
            margin-bottom: 0.35rem;
            letter-spacing: -0.02em;
          }
          .hero-sub-title {
            font-size: 0.84rem;
            line-height: 1.42;
            margin-bottom: 0.75rem;
            color: #6E4937;
          }

          /* Micro Action Row: Beautifully aligned, full-width or elegant wrap */
          .hero-micro-action-row {
            display: flex;
            align-items: center;
            gap: 0.45rem;
            flex-wrap: wrap;
            width: 100%;
          }
          .hero-pill-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            padding: 0.46rem 0.75rem;
            font-size: 0.74rem;
            border-radius: 99px;
            font-weight: 800;
            white-space: nowrap;
            flex: 1 1 auto;
            text-align: center;
          }
          .hero-pill-book {
            flex: 1.2 1 auto;
          }

          /* Trust strip: 2x2 micro grid */
          .treatment-trust-strip {
            padding: 0.6rem 0.75rem;
            margin-bottom: 0.55rem;
            border-radius: 14px;
          }
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.55rem 0.7rem;
          }
          .trust-strip-item strong {
            font-size: 0.74rem;
          }
          .trust-strip-item span {
            font-size: 0.64rem;
          }

          /* Section segmented card tabs on Mobile */
          .section-segmented-controller {
            top: 54px;
            margin-bottom: 0.55rem;
            padding: 0.25rem 0.15rem 0.45rem;
            gap: 0.4rem;
          }
          .segment-card-btn {
            min-width: 118px;
            padding: 0.5rem 0.65rem 0.55rem;
            border-radius: 12px;
          }
          .segment-card-icon-wrap {
            width: 22px;
            height: 22px;
            border-radius: 6px;
          }
          .segment-card-icon-wrap svg {
            width: 13px;
            height: 13px;
          }
          .segment-card-main-title {
            font-size: 0.76rem;
          }
          .segment-card-subtitle {
            font-size: 0.62rem;
          }

          /* Common Card on Mobile: Ultra-tight with subtle glow */
          .treatment-content-card {
            padding: 0.9rem 0.8rem;
            border-radius: 15px;
            margin-bottom: 0.55rem;
          }
          .card-section-title {
            font-size: 1.08rem;
            margin-bottom: 0.55rem;
          }
          .section-eyebrow {
            font-size: 0.64rem;
          }
          .clinical-text-block p {
            font-size: 0.82rem;
            line-height: 1.5;
          }

          /* Results card on mobile */
          .results-preview-card {
            padding: 0.75rem 0.7rem;
          }
          .results-header-row {
            margin-bottom: 0.45rem;
          }
          .results-slider-box .ba-slider {
            aspect-ratio: 16 / 11 !important;
            min-height: 175px !important;
          }
          .results-caption-meta {
            padding: 0.35rem 0.65rem;
            font-size: 0.68rem;
          }
          .results-drag-hint {
            font-size: 0.64rem;
          }

          /* Snapshot: 2 columns dense */
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.45rem;
          }
          .metric-box {
            padding: 0.55rem 0.6rem;
            border-radius: 11px;
            gap: 0.5rem;
          }
          .metric-icon {
            font-size: 1.15rem;
          }
          .metric-label {
            font-size: 0.6rem;
          }
          .metric-value {
            font-size: 0.78rem;
          }

          /* Conditions */
          .conditions-grid {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
          .condition-item-box {
            padding: 0.5rem 0.65rem;
            font-size: 0.78rem;
            border-radius: 9px;
          }

          /* Candidacy */
          .candidacy-split-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .candidacy-box {
            padding: 0.7rem 0.8rem;
            border-radius: 11px;
          }
          .c-box-header h3 {
            font-size: 0.8rem;
          }
          .candidacy-box p {
            font-size: 0.76rem;
          }
          .alternatives-cards-list {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          /* Process steps */
          .process-step-item {
            gap: 0.6rem;
          }
          .step-number-bubble {
            width: 26px;
            height: 26px;
            font-size: 0.75rem;
          }
          .step-content-card {
            padding: 0.6rem 0.75rem;
            border-radius: 11px;
          }
          .step-title {
            font-size: 0.84rem;
          }
          .step-desc {
            font-size: 0.76rem;
          }

          /* Diagnostics & tech: 2 columns */
          .tech-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.45rem;
          }
          .tech-box {
            padding: 0.6rem 0.65rem;
            border-radius: 11px;
          }
          .tech-name {
            font-size: 0.76rem;
          }
          .tech-purpose {
            font-size: 0.7rem;
          }

          /* Benefits */
          .benefits-split-container, .benefits-cards-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .benefit-col, .benefit-pill-card {
            padding: 0.7rem 0.8rem;
            border-radius: 11px;
          }

          /* Timeline & Comfort */
          .timeline-cards-grid, .comfort-grid {
            grid-template-columns: 1fr;
            gap: 0.45rem;
          }
          .t-card, .comfort-box {
            padding: 0.6rem 0.75rem;
            border-radius: 11px;
          }

          /* Pricing */
          .pricing-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .pricing-rate-tag {
            text-align: left;
            padding: 0.4rem 0.8rem;
          }
          .cost-amount {
            font-size: 1.05rem;
          }

          /* Why Clinic */
          .why-clinic-grid {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
          .why-item {
            padding: 0.55rem 0.7rem;
            border-radius: 9px;
          }
          .why-item p {
            font-size: 0.76rem;
          }

          /* Testimonials */
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .testimonial-card-item {
            padding: 0.7rem 0.8rem;
            border-radius: 11px;
          }

          /* FAQs */
          .treatment-faq-question {
            padding: 0.7rem 0.8rem;
            font-size: 0.8rem;
          }
          .faq-answer {
            padding: 0 0.8rem 0.7rem;
            font-size: 0.76rem;
          }
        }
      `}} />
    </div>
  );
}