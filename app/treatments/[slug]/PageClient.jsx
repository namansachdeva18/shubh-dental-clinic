'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Phone, Calendar, Sparkles, 
  ShieldCheck, Clock, Activity, ChevronDown, 
  ChevronUp, Stethoscope, AlertCircle, ImageIcon, 
  MessageSquare, Star, Award, CreditCard, ArrowRight, Zap,
  Compass, MapPin, Check, Info, ShieldAlert, HeartPulse, UserCheck, Layers, ListFilter
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
      // Optional debug logging in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[CTA Event]', payload);
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
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
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
  const [tocOpen, setTocOpen] = useState(false);

  if (!treatment) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I would like to enquire about ${treatment.title} treatment at Shubh Dental Clinic Rohtak.`
  );
  const whatsappUrl = `https://wa.me/918685048414?text=${whatsappMessage}`;

  // Fallback case image selection
  const casePair = {
    before: treatment.caseStudy?.beforeSrc || (treatment.slug.includes('implant') ? '/fullarch-before.webp' : treatment.slug.includes('veneer') || treatment.slug.includes('smile') ? '/front-before.webp' : '/case-1-before.webp'),
    after: treatment.caseStudy?.afterSrc || (treatment.slug.includes('implant') ? '/fullarch-after.webp' : treatment.slug.includes('veneer') || treatment.slug.includes('smile') ? '/front-after.webp' : '/case-1-after.webp'),
    title: treatment.caseStudy?.title || `${treatment.title} Clinical Transformation`,
    context: treatment.caseStudy?.context || 'Individual clinical outcomes vary based on personalized biological factors.'
  };

  const scrollToSection = (id) => {
    trackCTA('toc_jump_click', { target_id: id, treatment_slug: treatment.slug });
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  return (
    <div className="treatment-page-wrapper">
      <div className="treatment-container">
        
        {/* ── 01. BREADCRUMB ──────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="treatment-breadcrumbs">
          <Link href="/" onClick={() => trackCTA('breadcrumb_click', { label: 'Home' })}>Home</Link>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <Link href="/#services" onClick={() => trackCTA('breadcrumb_click', { label: 'Treatments' })}>Treatments</Link>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <span className="crumb-category">{treatment.category || 'Specialist Care'}</span>
          <span className="crumb-separator" aria-hidden="true">/</span>
          <span className="crumb-current" aria-current="page">{treatment.title}</span>
        </nav>

        {/* ── 02. HERO STAGE ──────────────────────────────────────────────── */}
        <motion.section 
          className="treatment-hero-card"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          aria-labelledby="hero-treatment-heading"
        >
          <div className="hero-top-badges">
            <div className="treatment-category-badge">
              <Sparkles size={13} aria-hidden="true" />
              <span>{treatment.category || 'Specialized Dentistry'}</span>
            </div>
            <div className="hero-trust-chip">
              <ShieldCheck size={13} fill="#10B981" color="#fff" aria-hidden="true" />
              <span>Specialist Clinical Care · Rohtak</span>
            </div>
          </div>

          <h1 id="hero-treatment-heading" className="hero-main-title font-heading">
            {treatment.h1 || `${treatment.title} in Rohtak`}
          </h1>
          
          <p className="hero-sub-title">{treatment.subtitle}</p>

          {/* Doctor Lead Ribbon */}
          <div className="hero-doctor-badge">
            <div className="hero-doc-avatar-wrap">
              <Image 
                src={treatment.doctorPhoto || '/dr-sk-yadav.webp'} 
                alt={treatment.doctor}
                width={48}
                height={48}
                className="hero-doc-avatar-img"
              />
            </div>
            <div className="hero-doc-details">
              <span className="hero-doc-label">Specialist Oversight</span>
              <strong className="hero-doc-name">{treatment.doctor}</strong>
              <span className="hero-doc-degree">{treatment.doctorDegree || 'MDS Specialist'}</span>
            </div>
          </div>

          <p className="hero-overview-text">
            {treatment.heroValueProp || treatment.overview}
          </p>

          {/* CTAs Group */}
          <div className="hero-actions-group">
            <a 
              href="#book" 
              className="btn-hero-primary"
              onClick={() => trackCTA('hero_book_consultation', { treatment_slug: treatment.slug })}
            >
              <Calendar size={17} aria-hidden="true" />
              <span>Book Consultation</span>
            </a>
            
            <a 
              href="tel:+918685048414" 
              className="btn-hero-call"
              onClick={() => trackCTA('hero_call_click', { treatment_slug: treatment.slug })}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call Clinic</span>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero-whatsapp"
              onClick={() => trackCTA('hero_whatsapp_click', { treatment_slug: treatment.slug })}
            >
              <MessageSquare size={16} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.section>

        {/* ── 03. TRUST STRIP ─────────────────────────────────────────────── */}
        <section className="treatment-trust-strip" aria-label="Clinical Trust Signals">
          <div className="trust-strip-grid">
            <div className="trust-strip-item">
              <Award size={18} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Specialist-Led Care</strong>
                <span>PGI Alumni Doctors</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <Activity size={18} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>3D Diagnostics</strong>
                <span>Optical Scanning &amp; CBCT</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <HeartPulse size={18} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Personalized Planning</strong>
                <span>Evidence-Based Protocols</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <ShieldCheck size={18} className="trust-icon" aria-hidden="true" />
              <div>
                <strong>Sterile Protocols</strong>
                <span>Hospital-Grade Autoclaving</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. AT A GLANCE (QUICK TREATMENT FACTS) ─────────────────────── */}
        {treatment.quickFacts && (
          <motion.section 
            className="treatment-key-metrics-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            aria-label="Treatment Quick Facts"
          >
            <div className="section-eyebrow-center">Treatment Snapshot</div>
            <h2 className="card-section-title-center font-heading">At a Glance</h2>

            <div className="metrics-grid">
              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">⏱️</div>
                <div className="metric-content">
                  <span className="metric-label">Treatment Duration</span>
                  <strong className="metric-value">{treatment.quickFacts.duration || 'Case-dependent'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">🗓️</div>
                <div className="metric-content">
                  <span className="metric-label">Visits Required</span>
                  <strong className="metric-value">{treatment.quickFacts.visits || 'Personalized schedule'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">💉</div>
                <div className="metric-content">
                  <span className="metric-label">Anaesthesia</span>
                  <strong className="metric-value">{treatment.quickFacts.anaesthesia || 'Local / None'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">🛡️</div>
                <div className="metric-content">
                  <span className="metric-label">Recovery &amp; Downtime</span>
                  <strong className="metric-value">{treatment.quickFacts.recovery || 'Minimal'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">🎯</div>
                <div className="metric-content">
                  <span className="metric-label">Primary Candidacy</span>
                  <strong className="metric-value">{treatment.quickFacts.candidacy || 'Based on examination'}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap" aria-hidden="true">⏳</div>
                <div className="metric-content">
                  <span className="metric-label">Longevity / Results</span>
                  <strong className="metric-value">{treatment.quickFacts.longevity || 'Long-lasting with care'}</strong>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── 05. TABLE OF CONTENTS / JUMP NAVIGATION ─────────────────────── */}
        <section className="treatment-toc-card" aria-label="Table of Contents">
          <div className="toc-header" onClick={() => setTocOpen(!tocOpen)}>
            <div className="toc-title-row">
              <ListFilter size={18} className="toc-icon" aria-hidden="true" />
              <span>On This Page: Jump to Clinical Information</span>
            </div>
            <button 
              type="button" 
              className="toc-toggle-btn"
              aria-expanded={tocOpen}
              aria-label="Toggle Table of Contents"
            >
              {tocOpen ? 'Collapse ▴' : 'Explore Sections ▾'}
            </button>
          </div>

          <div className={`toc-links-grid ${tocOpen ? 'is-open' : ''}`}>
            <button type="button" onClick={() => scrollToSection('overview')}>1. Overview</button>
            <button type="button" onClick={() => scrollToSection('conditions')}>2. Problems Addressed</button>
            <button type="button" onClick={() => scrollToSection('candidacy')}>3. Candidacy</button>
            <button type="button" onClick={() => scrollToSection('alternatives')}>4. Alternatives</button>
            {treatment.optionsComparison && <button type="button" onClick={() => scrollToSection('options')}>5. Options</button>}
            <button type="button" onClick={() => scrollToSection('process')}>6. Procedure Steps</button>
            <button type="button" onClick={() => scrollToSection('technology')}>7. Diagnostics &amp; Tech</button>
            <button type="button" onClick={() => scrollToSection('benefits')}>8. Benefits</button>
            <button type="button" onClick={() => scrollToSection('risks')}>9. Risks &amp; Considerations</button>
            <button type="button" onClick={() => scrollToSection('timeline')}>10. Duration Timeline</button>
            <button type="button" onClick={() => scrollToSection('comfort')}>11. Pain &amp; Comfort</button>
            <button type="button" onClick={() => scrollToSection('cost')}>12. Cost &amp; EMI</button>
            <button type="button" onClick={() => scrollToSection('doctor')}>13. Medical Reviewer</button>
            <button type="button" onClick={() => scrollToSection('cases')}>14. Real Cases</button>
            <button type="button" onClick={() => scrollToSection('faqs')}>15. FAQs</button>
            <button type="button" onClick={() => scrollToSection('book')}>16. Book Appointment</button>
          </div>
        </section>

        {/* ── 06. WHAT IS [TREATMENT]? ────────────────────────────────────── */}
        <motion.section 
          id="overview"
          className="treatment-content-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Clinical Definition &amp; Purpose</span>
          <h2 className="card-section-title font-heading">
            <Stethoscope className="title-icon-gold" aria-hidden="true" />
            <span>What Is {treatment.title}?</span>
          </h2>

          <div className="clinical-text-block">
            <p>{treatment.overview}</p>
          </div>
        </motion.section>

        {/* ── 07. PROBLEMS / CONDITIONS ADDRESSED ─────────────────────────── */}
        {treatment.conditions && treatment.conditions.length > 0 && (
          <motion.section 
            id="conditions"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Indications</span>
            <h2 className="card-section-title font-heading">
              <Activity className="title-icon-terracotta" aria-hidden="true" />
              <span>Problems &amp; Conditions Addressed</span>
            </h2>

            <div className="conditions-grid">
              {treatment.conditions.map((item, idx) => (
                <div key={idx} className="condition-item-box">
                  <CheckCircle2 size={18} className="condition-check-icon" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── 08 & 09. CANDIDACY & ALTERNATIVES (WHO IT IS FOR / NOT FOR) ── */}
        <motion.section 
          id="candidacy"
          className="treatment-content-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Patient Candidacy Assessment</span>
          <h2 className="card-section-title font-heading">
            <UserCheck className="title-icon-gold" aria-hidden="true" />
            <span>Who May Benefit From {treatment.title}?</span>
          </h2>

          <div className="candidacy-split-grid">
            <div className="candidacy-box c-box-suitable">
              <div className="c-box-header">
                <Check size={18} className="c-icon-green" aria-hidden="true" />
                <h3>Suitable Candidates</h3>
              </div>
              <p>{treatment.candidacy?.idealFor || treatment.idealFor}</p>
            </div>

            <div className="candidacy-box c-box-unsuitable">
              <div className="c-box-header">
                <AlertCircle size={18} className="c-icon-amber" aria-hidden="true" />
                <h3>When Caution or Alternative Care is Advised</h3>
              </div>
              <p>{treatment.candidacy?.notIdealFor || treatment.notIdealFor}</p>
            </div>
          </div>

          {/* 09. When Another Treatment May Be Better */}
          {treatment.alternatives && treatment.alternatives.length > 0 && (
            <div id="alternatives" className="alternatives-sub-section">
              <h3 className="alternatives-sub-title">
                <Info size={16} aria-hidden="true" />
                <span>When Another Treatment May Be More Appropriate</span>
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
        </motion.section>

        {/* ── 10. TREATMENT OPTIONS / COMPARISON MATRIX ───────────────────── */}
        {treatment.optionsComparison && (
          <motion.section 
            id="options"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Clinical Comparison</span>
            <h2 className="card-section-title font-heading">
              <Layers className="title-icon-terracotta" aria-hidden="true" />
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
                      <th>Comfort &amp; Maintenance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatment.optionsComparison.items.map((row, idx) => (
                      <tr key={idx}>
                        <td className="row-title"><strong>{row.name}</strong></td>
                        <td>{row.bestFor || 'Individualized assessment'}</td>
                        <td>{row.visibility || row.material || row.strength || row.timeline || 'Specialist planned'}</td>
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
          </motion.section>
        )}

        {/* ── 11. HOW IT WORKS (STEP-BY-STEP WORKFLOW) ────────────────────── */}
        {treatment.processSteps && treatment.processSteps.length > 0 && (
          <motion.section 
            id="process"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Clinical Pathway</span>
            <h2 className="card-section-title font-heading">
              <Clock className="title-icon-gold" aria-hidden="true" />
              <span>How {treatment.title} Works: Step-by-Step</span>
            </h2>
            <p className="section-intro-text">
              Every procedure follows structured diagnostic and treatment stages designed for safety, precision, and predictable outcomes.
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
          </motion.section>
        )}

        {/* ── 12. DIAGNOSTICS & TECHNOLOGY ────────────────────────────────── */}
        {treatment.technology && treatment.technology.length > 0 && (
          <motion.section 
            id="technology"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Advanced Clinical Infrastructure</span>
            <h2 className="card-section-title font-heading">
              <Zap className="title-icon-gold" aria-hidden="true" />
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
          </motion.section>
        )}

        {/* ── 13. BENEFITS (FUNCTIONAL VS AESTHETIC) ──────────────────────── */}
        {treatment.benefits && (
          <motion.section 
            id="benefits"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Evidence-Based Value</span>
            <h2 className="card-section-title font-heading">
              <ShieldCheck className="title-icon-terracotta" aria-hidden="true" />
              <span>Benefits of {treatment.title}</span>
            </h2>

            {Array.isArray(treatment.benefits) ? (
              <div className="benefits-cards-grid">
                {treatment.benefits.map((b, idx) => (
                  <div key={idx} className="benefit-pill-card">
                    <div className="b-check-circle" aria-hidden="true"><CheckCircle2 size={18} /></div>
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
                        <li key={i}><Check size={16} aria-hidden="true" /> <span>{f}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
                {treatment.benefits.aesthetic && treatment.benefits.aesthetic.length > 0 && (
                  <div className="benefit-col">
                    <h3 className="b-col-heading">✨ Aesthetic &amp; Confidence Benefits</h3>
                    <ul className="b-col-list">
                      {treatment.benefits.aesthetic.map((a, i) => (
                        <li key={i}><Check size={16} aria-hidden="true" /> <span>{a}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </motion.section>
        )}

        {/* ── 14. RISKS, LIMITATIONS & CLINICAL CONSIDERATIONS ─────────────── */}
        {treatment.risksAndLimitations && treatment.risksAndLimitations.length > 0 && (
          <motion.section 
            id="risks"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Medical Transparency</span>
            <h2 className="card-section-title font-heading">
              <ShieldAlert className="title-icon-amber" aria-hidden="true" />
              <span>Risks, Limitations &amp; Considerations</span>
            </h2>
            <p className="section-intro-text">
              We believe in complete clinical transparency. Every dental procedure involves considerations that patients should evaluate before beginning care.
            </p>

            <div className="risks-list">
              {treatment.risksAndLimitations.map((item, idx) => (
                <div key={idx} className="risk-item-box">
                  <span className="risk-bullet" aria-hidden="true">⚠️</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── 15. DURATION & TIMELINE ─────────────────────────────────────── */}
        {treatment.durationAndTimeline && (
          <motion.section 
            id="timeline"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Treatment Schedule</span>
            <h2 className="card-section-title font-heading">
              <Clock className="title-icon-gold" aria-hidden="true" />
              <span>How Long Does {treatment.title} Take?</span>
            </h2>

            <div className="timeline-cards-grid">
              <div className="t-card">
                <strong>Initial Phase</strong>
                <p>{treatment.durationAndTimeline.consultationToBonding || 'Consultation & 3D Diagnostics'}</p>
              </div>
              <div className="t-card">
                <strong>Active Treatment</strong>
                <p>{treatment.durationAndTimeline.activeTreatment || 'Personalized clinical treatment'}</p>
              </div>
              <div className="t-card">
                <strong>Long-Term Maintenance</strong>
                <p>{treatment.durationAndTimeline.retentionPhase || 'Regular check-ups'}</p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── 16. PAIN & COMFORT MANAGEMENT ───────────────────────────────── */}
        {treatment.painAndComfort && (
          <motion.section 
            id="comfort"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Patient Experience</span>
            <h2 className="card-section-title font-heading">
              <HeartPulse className="title-icon-terracotta" aria-hidden="true" />
              <span>Pain &amp; Comfort</span>
            </h2>

            <div className="comfort-grid">
              <div className="comfort-box">
                <h4>💉 Anaesthesia Protocol</h4>
                <p>{treatment.painAndComfort.anaesthesia}</p>
              </div>
              <div className="comfort-box">
                <h4>😌 What to Expect</h4>
                <p>{treatment.painAndComfort.expectedSensation}</p>
              </div>
              <div className="comfort-box">
                <h4>📞 When to Contact the Clinic</h4>
                <p>{treatment.painAndComfort.whenToContact}</p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── 17. COST & 0% INTEREST EMI ──────────────────────────────────── */}
        {treatment.costDetails && (
          <motion.section 
            id="cost"
            className="treatment-content-card pricing-breakdown-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <div className="pricing-card-header">
              <div>
                <span className="section-eyebrow">Transparent Pricing</span>
                <h2 className="card-section-title font-heading">
                  <CreditCard className="title-icon-gold" aria-hidden="true" />
                  <span>How Much Does {treatment.title} Cost in Rohtak?</span>
                </h2>
              </div>
              <div className="pricing-rate-tag">
                <span className="cost-label">Estimated Range</span>
                <span className="cost-amount">{treatment.costDetails.range || treatment.cost || 'Personalized Plan'}</span>
              </div>
            </div>

            {treatment.costDetails.factors && treatment.costDetails.factors.length > 0 && (
              <div className="cost-factors-block">
                <h4 className="factors-heading">Factors Influencing Your Treatment Investment:</h4>
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
              <a 
                href="#book" 
                className="btn-estimate"
                onClick={() => trackCTA('treatment_cost_cta_click', { treatment_slug: treatment.slug })}
              >
                Request Personalized Treatment Estimate
              </a>
            </div>
          </motion.section>
        )}

        {/* ── 18. WHY CHOOSE SHUBH DENTAL CLINIC ──────────────────────────── */}
        <motion.section 
          className="treatment-content-card why-shubh-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Verified Clinical Excellence</span>
          <h2 className="card-section-title font-heading">
            <Award className="title-icon-gold" aria-hidden="true" />
            <span>Why Choose Shubh Orthodontic &amp; Dental Clinic</span>
          </h2>

          <div className="why-clinic-grid">
            {(treatment.whyChooseClinic || [
              'PGI Chandigarh & Rohtak trained specialist clinical leadership.',
              'Over 20+ years of dedicated hands-on dental and orthodontic experience.',
              'In-house digital 3D scanning and manufacturing lab.',
              'Hospital-grade sterilization with class-B vacuum autoclaving.'
            ]).map((point, idx) => (
              <div key={idx} className="why-item">
                <CheckCircle2 size={20} className="why-check" aria-hidden="true" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 19. MEDICAL REVIEWER TRUST COMPONENT ────────────────────────── */}
        <motion.section 
          id="doctor"
          className="treatment-content-card medical-reviewer-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <div className="reviewer-inner">
            <div className="reviewer-photo-col">
              <div className="reviewer-avatar-wrap">
                <Image 
                  src={treatment.doctorPhoto || '/dr-sk-yadav.webp'} 
                  alt={treatment.doctor}
                  width={90}
                  height={90}
                  className="reviewer-img"
                />
              </div>
            </div>

            <div className="reviewer-content-col">
              <div className="reviewer-badge">🩺 Medically Reviewed &amp; Approved</div>
              <h3 className="reviewer-name font-heading">{treatment.doctor}</h3>
              <p className="reviewer-credentials">{treatment.doctorDegree || 'MDS Dental Specialist'}</p>
              <p className="reviewer-role">{treatment.doctorTitle || 'Senior Clinical Specialist'} · Shubh Orthodontic &amp; Dental Clinic</p>
              
              <div className="reviewer-footer-meta">
                <span>Last Medically Reviewed: <strong>{treatment.medicalReviewDate || 'June 2026'}</strong></span>
                <Link 
                  href={`/doctors/${treatment.doctorSlug || 'dr-sk-yadav'}`} 
                  className="reviewer-profile-link"
                  onClick={() => trackCTA('doctor_profile_click', { doctor: treatment.doctor, treatment_slug: treatment.slug })}
                >
                  View Full Specialist Profile →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 20. CLINICAL CASES / BEFORE-AFTER TRANSFORMATION ────────────── */}
        <motion.section 
          id="cases"
          className="treatment-content-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Real Patient Transformations</span>
              <h2 className="card-section-title font-heading">
                <ImageIcon className="title-icon-gold" aria-hidden="true" />
                <span>Clinical Outcome Preview</span>
              </h2>
            </div>
            <span className="case-verified-badge">
              <ShieldCheck size={14} aria-hidden="true" /> Verified Clinic Case
            </span>
          </div>

          <p className="section-intro-text">
            {casePair.context} Slide horizontally to observe the anatomical and aesthetic improvement.
          </p>

          <div className="slider-wrapper-box">
            <BeforeAfterSlider
              beforeSrc={casePair.before}
              afterSrc={casePair.after}
              beforeAlt={`Before ${treatment.title}`}
              afterAlt={`After ${treatment.title}`}
            />
            <div className="slider-caption-bar">
              <span className="caption-text">{casePair.title}</span>
              <span className="drag-hint">↔ Drag slider left/right</span>
            </div>
          </div>
        </motion.section>

        {/* ── 21. PATIENT TESTIMONIALS ────────────────────────────────────── */}
        {treatment.testimonials && treatment.testimonials.length > 0 && (
          <motion.section 
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Patient Experiences</span>
            <h2 className="card-section-title font-heading">
              <Star className="title-icon-gold" aria-hidden="true" />
              <span>What Patients Say About {treatment.title}</span>
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
          </motion.section>
        )}

        {/* ── 22. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <motion.section 
            id="faqs"
            className="treatment-content-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Patient Clarity</span>
            <h2 className="card-section-title font-heading">
              <Sparkles className="title-icon-terracotta" aria-hidden="true" />
              <span>Frequently Asked Questions</span>
            </h2>
            
            <div className="treatment-faqs-list">
              {treatment.faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} treatmentSlug={treatment.slug} />
              ))}
            </div>
          </motion.section>
        )}

        {/* ── 23. RELATED TREATMENTS (SEMANTIC INTERNAL LINKS) ─────────────── */}
        {treatment.relatedTreatments && treatment.relatedTreatments.length > 0 && (
          <section className="related-treatments-section" aria-label="Related Dental Procedures">
            <h3 className="related-title font-heading">Related Dental Procedures</h3>
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
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── 24. LOCAL CLINIC INFORMATION ────────────────────────────────── */}
        <section id="location" className="treatment-local-info-card" aria-label="Clinic Location & Hours">
          <div className="local-info-inner">
            <div className="local-info-col">
              <span className="section-eyebrow-light">Visiting Our Clinic</span>
              <h3 className="local-heading font-heading">Looking for {treatment.title} in Rohtak?</h3>
              <p className="local-desc">
                Shubh Orthodontic &amp; Dental Clinic provides specialist dental care from our modern facility in Rohtak, easily accessible from Delhi Bypass Chowk with dedicated on-site patient parking.
              </p>

              <div className="local-details-list">
                <div className="local-detail-item">
                  <MapPin size={18} className="loc-icon" aria-hidden="true" />
                  <div>
                    <strong>Clinic Address:</strong>
                    <span>Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak, Haryana 124001</span>
                  </div>
                </div>

                <div className="local-detail-item">
                  <Clock size={18} className="loc-icon" aria-hidden="true" />
                  <div>
                    <strong>Consultation Hours:</strong>
                    <span>Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM</span>
                  </div>
                </div>

                <div className="local-detail-item">
                  <Phone size={18} className="loc-icon" aria-hidden="true" />
                  <div>
                    <strong>Direct Appointments:</strong>
                    <span>+91 86850 48414</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="local-map-cta-col">
              <div className="map-badge-card">
                <h4>📍 Central Rohtak Location</h4>
                <p>Near Delhi Bypass with rapid highway connectivity for patients from Sonepat, Panipat, Jhajjar, and Delhi NCR.</p>
                <a 
                  href="https://maps.google.com/?q=Shubh+Orthodontic+and+Dental+Clinic+Rohtak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-map-directions"
                  onClick={() => trackCTA('google_maps_directions_click', { treatment_slug: treatment.slug })}
                >
                  <Compass size={16} aria-hidden="true" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 25. FINAL APPOINTMENT CTA + EMBEDDED SMART BOOKING ───────────── */}
        <section id="book" className="treatment-final-cta-section" style={{ scrollMarginTop: '80px', marginTop: '3.5rem' }}>
          <div className="final-cta-intro">
            <span className="section-eyebrow-center">Schedule Your Visit</span>
            <h2 className="card-section-title-center font-heading">Ready to Explore Your Treatment Options?</h2>
            <p className="final-cta-subtext">
              Book a consultation with our dental specialists to understand whether {treatment.title} is appropriate for your oral health, aesthetic goals, and long-term comfort.
            </p>
            <p className="final-cta-disclaimer">
              <em>*Treatment recommendations are provided following an individual clinical and radiographic assessment.</em>
            </p>
          </div>

          <SmartBooking />
        </section>

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
          <MessageSquare size={16} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a 
          href="tel:+918685048414" 
          className="sticky-btn sticky-call"
          onClick={() => trackCTA('mobile_sticky_call_click', { treatment_slug: treatment.slug })}
        >
          <Phone size={16} aria-hidden="true" />
          <span>Call</span>
        </a>

        <a 
          href="#book" 
          className="sticky-btn sticky-book"
          onClick={() => trackCTA('mobile_sticky_book_click', { treatment_slug: treatment.slug })}
        >
          <Calendar size={16} aria-hidden="true" />
          <span>Book</span>
        </a>
      </aside>

      {/* ── HIGH-END LUXURY CLINICAL STYLES ───────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .treatment-page-wrapper {
          min-height: 100vh;
          padding: 2.5rem 1.25rem 7rem;
          background: #FAF8F5;
          color: #2D2420;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
        }

        .treatment-container {
          max-width: 980px;
          margin: 0 auto;
        }

        /* ── BREADCRUMBS ─────────────────────────────── */
        .treatment-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #8A7063;
          margin-bottom: 1.5rem;
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
          color: #CFC2BA;
        }
        .crumb-category {
          color: #7A5B4C;
        }
        .crumb-current {
          color: #110805;
        }

        /* ── HERO STAGE ──────────────────────────────── */
        .treatment-hero-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border-radius: 28px;
          padding: 2.75rem 2.25rem;
          color: #FFFFFF;
          box-shadow: 0 25px 60px rgba(17, 8, 5, 0.22);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .treatment-hero-card::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(214,122,65,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-top-badges {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .treatment-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.22);
          color: #F4B382;
          padding: 0.32rem 0.85rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }

        .hero-trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          padding: 0.32rem 0.85rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hero-main-title {
          font-size: clamp(2rem, 4.2vw, 2.9rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.18;
          margin-bottom: 0.6rem;
          letter-spacing: -0.02em;
        }

        .hero-sub-title {
          font-size: 1.1rem;
          color: #F4B382;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .hero-doctor-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.65rem 1rem;
          border-radius: 16px;
          margin-bottom: 1.5rem;
        }
        .hero-doc-avatar-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #D67A41;
          flex-shrink: 0;
        }
        .hero-doc-avatar-img {
          object-fit: cover;
          object-position: top;
          width: 100%;
          height: 100%;
        }
        .hero-doc-details {
          display: flex;
          flex-direction: column;
        }
        .hero-doc-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #F4B382;
          font-weight: 700;
        }
        .hero-doc-name {
          font-size: 0.95rem;
          color: #FFFFFF;
          font-weight: 800;
        }
        .hero-doc-degree {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.7);
        }

        .hero-overview-text {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 820px;
        }

        .hero-actions-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.6rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.94rem;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(214, 122, 65, 0.5);
        }
        .btn-hero-call {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.85rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-hero-call:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .btn-hero-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.25);
          transition: all 0.25s ease;
        }
        .btn-hero-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.4);
        }

        /* ── 03. TRUST STRIP ─────────────────────────── */
        .treatment-trust-strip {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 18px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(74, 37, 24, 0.04);
        }
        .trust-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .trust-icon {
          color: #D67A41;
          flex-shrink: 0;
        }
        .trust-strip-item strong {
          display: block;
          font-size: 0.86rem;
          color: #110805;
        }
        .trust-strip-item span {
          display: block;
          font-size: 0.72rem;
          color: #7A5B4C;
        }

        /* ── 04. AT A GLANCE (METRICS) ───────────────── */
        .treatment-key-metrics-card {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 30px rgba(74, 37, 24, 0.05);
        }
        .section-eyebrow-center {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #D67A41;
          margin-bottom: 0.25rem;
        }
        .card-section-title-center {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 1.75rem;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.1rem;
        }
        .metric-box {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 16px;
          padding: 1.25rem 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .metric-box:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 122, 65, 0.35);
        }
        .metric-icon-wrap {
          font-size: 1.5rem;
          line-height: 1;
        }
        .metric-content {
          display: flex;
          flex-direction: column;
        }
        .metric-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #8A7063;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.2rem;
        }
        .metric-value {
          font-size: 0.95rem;
          font-weight: 800;
          color: #110805;
          line-height: 1.35;
        }

        /* ── 05. TABLE OF CONTENTS ───────────────────── */
        .treatment-toc-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          border-radius: 20px;
          padding: 1.25rem 1.75rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 18px rgba(74, 37, 24, 0.04);
        }
        .toc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        .toc-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 800;
          font-size: 0.92rem;
          color: #110805;
        }
        .toc-icon {
          color: #D67A41;
        }
        .toc-toggle-btn {
          background: none;
          border: none;
          color: #D67A41;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
        }
        .toc-links-grid {
          display: none;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem 1rem;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(214, 122, 65, 0.15);
        }
        .toc-links-grid.is-open {
          display: grid;
        }
        .toc-links-grid button {
          background: none;
          border: none;
          text-align: left;
          font-size: 0.82rem;
          color: #554A44;
          font-weight: 600;
          cursor: pointer;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .toc-links-grid button:hover {
          color: #D67A41;
          background: rgba(214, 122, 65, 0.08);
        }

        /* ── COMMON CONTENT CARDS ────────────────────── */
        .treatment-content-card {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 6px 24px rgba(74, 37, 24, 0.04);
          scroll-margin-top: 90px;
        }

        .section-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #D67A41;
          display: block;
          margin-bottom: 0.3rem;
        }

        .card-section-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          line-height: 1.3;
        }

        .title-icon-gold { color: #D67A41; flex-shrink: 0; }
        .title-icon-terracotta { color: #B85D26; flex-shrink: 0; }
        .title-icon-amber { color: #D97706; flex-shrink: 0; }

        .clinical-text-block p {
          font-size: 1rem;
          color: #4A3E39;
          line-height: 1.75;
        }

        .section-intro-text {
          font-size: 0.95rem;
          color: #6E5B52;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        /* ── 07. CONDITIONS GRID ─────────────────────── */
        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }
        .condition-item-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 14px;
          padding: 0.95rem 1.1rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: #2D2420;
          line-height: 1.45;
        }
        .condition-check-icon {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── 08 & 09. CANDIDACY & ALTERNATIVES ───────── */
        .candidacy-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }
        .candidacy-box {
          border-radius: 18px;
          padding: 1.4rem 1.5rem;
        }
        .c-box-suitable {
          background: #F0FDF4;
          border: 1.5px solid rgba(34, 197, 94, 0.25);
        }
        .c-box-unsuitable {
          background: #FEF3C7;
          border: 1.5px solid rgba(245, 158, 11, 0.3);
        }
        .c-box-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
        }
        .c-box-header h3 {
          font-size: 0.96rem;
          font-weight: 800;
          color: #110805;
        }
        .c-icon-green { color: #16A34A; }
        .c-icon-amber { color: #D97706; }
        .candidacy-box p {
          font-size: 0.88rem;
          color: #4A3E39;
          line-height: 1.6;
        }

        .alternatives-sub-section {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
        }
        .alternatives-sub-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .alternatives-cards-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .alt-card {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.14);
          border-radius: 12px;
          padding: 0.95rem 1.1rem;
        }
        .alt-card strong {
          display: block;
          font-size: 0.88rem;
          color: #D67A41;
          margin-bottom: 0.25rem;
        }
        .alt-card p {
          font-size: 0.82rem;
          color: #6E5B52;
          line-height: 1.5;
        }

        /* ── 10. OPTIONS COMPARISON ──────────────────── */
        .comparison-table-wrapper {
          overflow-x: auto;
          margin-top: 1rem;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.86rem;
        }
        .comparison-table th {
          background: #FAF8F5;
          color: #110805;
          font-weight: 800;
          padding: 0.9rem 1rem;
          border-bottom: 2px solid rgba(214, 122, 65, 0.25);
        }
        .comparison-table td {
          padding: 0.95rem 1rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.1);
          color: #4A3E39;
          line-height: 1.5;
        }
        .comparison-table tr:hover td {
          background: rgba(214, 122, 65, 0.03);
        }
        .row-title strong {
          color: #D67A41;
        }

        .options-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .option-info-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 1.25rem;
        }
        .opt-card-title {
          font-size: 0.94rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.5rem;
        }
        .opt-card-desc {
          font-size: 0.84rem;
          color: #6E5B52;
          line-height: 1.6;
        }

        /* ── 11. STEP-BY-STEP PROCESS ────────────────── */
        .treatment-process-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .process-step-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .step-number-bubble {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.25);
        }
        .step-content-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.14);
          border-radius: 16px;
          padding: 1.15rem 1.4rem;
          flex: 1;
        }
        .step-title {
          font-size: 1.02rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.35rem;
        }
        .step-desc {
          font-size: 0.88rem;
          color: #554A44;
          line-height: 1.6;
        }

        /* ── 12. DIAGNOSTICS & TECH ──────────────────── */
        .tech-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .tech-box {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 1.25rem;
        }
        .tech-box-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.45rem;
        }
        .tech-name {
          font-size: 0.92rem;
          color: #110805;
        }
        .tech-purpose {
          font-size: 0.82rem;
          color: #6E5B52;
          line-height: 1.55;
        }

        /* ── 13. BENEFITS ────────────────────────────── */
        .benefits-split-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .benefit-col {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 18px;
          padding: 1.5rem;
        }
        .b-col-heading {
          font-size: 0.98rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 1rem;
        }
        .b-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .b-col-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #4A3E39;
          line-height: 1.55;
        }
        .b-col-list svg {
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .benefits-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.9rem;
        }
        .benefit-pill-card {
          display: flex;
          gap: 0.85rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 16px;
          padding: 1.1rem;
        }
        .b-check-circle {
          color: #D67A41;
          flex-shrink: 0;
        }
        .b-card-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.2rem;
        }
        .b-card-desc {
          font-size: 0.82rem;
          color: #6E5B52;
          line-height: 1.5;
        }

        /* ── 14. RISKS & CONSIDERATIONS ──────────────── */
        .risks-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .risk-item-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FFFBEB;
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 14px;
          padding: 0.95rem 1.15rem;
        }
        .risk-bullet {
          font-size: 1.1rem;
          line-height: 1;
        }
        .risk-item-box p {
          font-size: 0.88rem;
          color: #78350F;
          line-height: 1.55;
          margin: 0;
        }

        /* ── 15. TIMELINE ────────────────────────────── */
        .timeline-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .t-card {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 16px;
          padding: 1.25rem;
        }
        .t-card strong {
          display: block;
          font-size: 0.9rem;
          color: #D67A41;
          margin-bottom: 0.35rem;
        }
        .t-card p {
          font-size: 0.84rem;
          color: #4A3E39;
          line-height: 1.55;
          margin: 0;
        }

        /* ── 16. PAIN & COMFORT ──────────────────────── */
        .comfort-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .comfort-box {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 16px;
          padding: 1.25rem;
        }
        .comfort-box h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.45rem;
        }
        .comfort-box p {
          font-size: 0.84rem;
          color: #554A44;
          line-height: 1.6;
          margin: 0;
        }

        /* ── 17. COST & EMI ──────────────────────────── */
        .pricing-breakdown-card {
          border-color: rgba(214, 122, 65, 0.3);
        }
        .pricing-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .pricing-rate-tag {
          background: #FAF8F5;
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          border-radius: 16px;
          padding: 0.75rem 1.4rem;
          text-align: right;
        }
        .cost-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #8A7063;
          display: block;
        }
        .cost-amount {
          font-size: 1.25rem;
          font-weight: 800;
          color: #D67A41;
          display: block;
        }

        .cost-factors-block {
          background: #FAF8F5;
          border-radius: 14px;
          padding: 1.15rem 1.4rem;
          margin-bottom: 1.25rem;
        }
        .factors-heading {
          font-size: 0.88rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.5rem;
        }
        .factors-list {
          padding-left: 1.25rem;
          margin: 0;
        }
        .factors-list li {
          font-size: 0.84rem;
          color: #554A44;
          line-height: 1.6;
        }

        .emi-highlight-banner {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #F0FDF4;
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
        }
        .emi-icon {
          font-size: 1.6rem;
        }
        .emi-highlight-banner strong {
          display: block;
          font-size: 0.92rem;
          color: #15803D;
        }
        .emi-highlight-banner p {
          font-size: 0.82rem;
          color: #166534;
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
          font-size: 0.92rem;
          padding: 0.85rem 1.75rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.3);
          transition: all 0.25s ease;
        }
        .btn-estimate:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(214, 122, 65, 0.45);
        }

        /* ── 18. WHY SHUBH DENTAL ────────────────────── */
        .why-clinic-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .why-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 14px;
          padding: 1rem 1.2rem;
        }
        .why-check {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .why-item p {
          font-size: 0.88rem;
          color: #2D2420;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        /* ── 19. MEDICAL REVIEWER ────────────────────── */
        .medical-reviewer-card {
          background: linear-gradient(145deg, #1C0E09 0%, #2D1710 100%);
          border-color: rgba(214, 122, 65, 0.3);
          color: #FFFFFF;
        }
        .reviewer-inner {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .reviewer-avatar-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid #D67A41;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .reviewer-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .reviewer-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.18);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.35);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          margin-bottom: 0.5rem;
        }
        .reviewer-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }
        .reviewer-credentials {
          font-size: 0.84rem;
          color: #F4B382;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .reviewer-role {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 1rem;
        }
        .reviewer-footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(255,255,255,0.12);
          font-size: 0.76rem;
          color: rgba(255,255,255,0.65);
        }
        .reviewer-profile-link {
          color: #F4B382;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s ease;
        }
        .reviewer-profile-link:hover {
          color: #FFFFFF;
        }

        /* ── 20. CLINICAL CASES (BEFORE & AFTER) ─────── */
        .section-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .case-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .slider-wrapper-box {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(214, 122, 65, 0.2);
          background: #0E0704;
        }
        .slider-caption-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.25rem;
          background: #1A0D08;
          color: #FFFFFF;
          font-size: 0.84rem;
        }
        .drag-hint {
          color: #F4B382;
          font-weight: 700;
          font-size: 0.76rem;
        }

        /* ── 21. TESTIMONIALS ────────────────────────── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .testimonial-card-item {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .testimonial-stars {
          color: #F59E0B;
          font-size: 1rem;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
        }
        .t-quote {
          font-size: 0.9rem;
          color: #4A3E39;
          line-height: 1.65;
          font-style: italic;
          margin-bottom: 1.25rem;
        }
        .t-author strong {
          display: block;
          font-size: 0.88rem;
          color: #110805;
        }
        .t-author span {
          display: block;
          font-size: 0.74rem;
          color: #8A7063;
        }

        /* ── 22. FAQS ────────────────────────────────── */
        .treatment-faqs-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .treatment-faq-item {
          border: 1px solid rgba(214, 122, 65, 0.18);
          border-radius: 16px;
          overflow: hidden;
          background: #FAF8F5;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .treatment-faq-item.is-active {
          border-color: rgba(214, 122, 65, 0.45);
          background: #FFFFFF;
        }
        .treatment-faq-question {
          width: 100%;
          text-align: left;
          padding: 1.15rem 1.4rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
          color: #110805;
        }
        .faq-icon-wrap {
          color: #D67A41;
          flex-shrink: 0;
        }
        .faq-answer-wrapper {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 1.4rem 1.25rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.15);
          padding-top: 0.85rem;
        }
        .faq-answer p {
          font-size: 0.88rem;
          color: #554A44;
          line-height: 1.65;
          margin: 0;
        }

        /* ── 23. RELATED TREATMENTS ──────────────────── */
        .related-treatments-section {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 20px;
          padding: 1.75rem 2rem;
          margin-bottom: 2rem;
        }
        .related-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 1rem;
        }
        .related-pills-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .related-treatment-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.22);
          color: #2D2420;
          padding: 0.55rem 1rem;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .related-treatment-pill:hover {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
          transform: translateY(-2px);
        }

        /* ── 24. LOCAL CLINIC INFORMATION ────────────── */
        .treatment-local-info-card {
          background: linear-gradient(145deg, #1A0D08 0%, #2D1710 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          color: #FFFFFF;
          margin-bottom: 2rem;
        }
        .local-info-inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
        }
        .section-eyebrow-light {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #F4B382;
          display: block;
          margin-bottom: 0.25rem;
        }
        .local-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }
        .local-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .local-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .local-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .loc-icon {
          color: #F4B382;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .local-detail-item strong {
          display: block;
          font-size: 0.82rem;
          color: #F4B382;
        }
        .local-detail-item span {
          display: block;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.85);
        }

        .map-badge-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 18px;
          padding: 1.4rem;
        }
        .map-badge-card h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }
        .map-badge-card p {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
          margin-bottom: 1.1rem;
        }
        .btn-map-directions {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.6rem 1rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-map-directions:hover {
          background: #D67A41;
          border-color: #D67A41;
        }

        /* ── 25. FINAL CTA ───────────────────────────── */
        .treatment-final-cta-section {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 28px;
          padding: 2.75rem 2rem;
          box-shadow: 0 10px 40px rgba(74, 37, 24, 0.06);
        }
        .final-cta-intro {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2rem;
        }
        .final-cta-subtext {
          font-size: 0.98rem;
          color: #554A44;
          line-height: 1.65;
          margin-bottom: 0.5rem;
        }
        .final-cta-disclaimer {
          font-size: 0.78rem;
          color: #8A7063;
        }

        /* ── GLOBAL UI: MOBILE STICKY CONVERSION BAR ─── */
        .mobile-sticky-action-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(26, 13, 8, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.65rem 1rem env(safe-area-inset-bottom, 0.65rem);
          z-index: 999;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.25);
          gap: 0.6rem;
        }
        .sticky-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.75rem 0.5rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 800;
          text-decoration: none;
          color: #FFFFFF;
        }
        .sticky-wa {
          background: #25D366;
        }
        .sticky-call {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .sticky-book {
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 1024px) {
          .trust-strip-grid { grid-template-columns: repeat(2, 1fr); }
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .toc-links-grid { grid-template-columns: repeat(3, 1fr); }
          .tech-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-cards-grid { grid-template-columns: 1fr; }
          .comfort-grid { grid-template-columns: 1fr; }
          .local-info-inner { grid-template-columns: 1fr; }
          .options-cards-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .treatment-page-wrapper {
            padding: 1.25rem 0.85rem 5.5rem;
          }
          .treatment-hero-card {
            padding: 1.75rem 1.25rem;
            border-radius: 20px;
          }
          .hero-main-title {
            font-size: 1.75rem;
          }
          .hero-sub-title {
            font-size: 0.95rem;
          }
          .hero-actions-group {
            flex-direction: column;
            width: 100%;
          }
          .btn-hero-primary, .btn-hero-call, .btn-hero-whatsapp {
            width: 100%;
            justify-content: center;
          }
          .trust-strip-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .toc-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .conditions-grid {
            grid-template-columns: 1fr;
          }
          .candidacy-split-grid {
            grid-template-columns: 1fr;
          }
          .alternatives-cards-list {
            grid-template-columns: 1fr;
          }
          .tech-cards-grid {
            grid-template-columns: 1fr;
          }
          .benefits-split-container {
            grid-template-columns: 1fr;
          }
          .benefits-cards-grid {
            grid-template-columns: 1fr;
          }
          .why-clinic-grid {
            grid-template-columns: 1fr;
          }
          .reviewer-inner {
            flex-direction: column;
            text-align: center;
          }
          .reviewer-footer-meta {
            flex-direction: column;
            align-items: center;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .mobile-sticky-action-bar {
            display: flex;
          }
        }
      `}} />
    </div>
  );
}