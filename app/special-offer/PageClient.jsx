'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Tag, ShieldCheck, Star, Award, Phone, ArrowRight, CheckCircle2, 
  Sparkles, Clock, MapPin, Zap, ChevronRight, User, Stethoscope,
  X, MessageSquare, Calendar, Gift, Check, ArrowUpRight, HelpCircle, 
  Calculator, Percent, BadgeCheck, AlertCircle, HeartHandshake, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../lib/web3forms';

const TREATMENTS_DATA = [
  {
    id: 'aligners',
    tabName: '💎 Clear Aligners',
    title: 'Invisalign® & SkyAlign™ Clear Aligners',
    tagline: 'Virtually invisible teeth straightening without metal brackets or diet restrictions',
    specialist: 'Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, 5,000+ Cases)',
    savings: 'Save up to ₹25,000',
    emi: 'From ₹3,499/mo',
    beforeImg: '/skyalign-before.webp',
    afterImg: '/skyalign-after.webp',
    inclusions: [
      'Free 3D iTero® Digital Scan & Future Smile Simulation (Worth ₹3,500)',
      'Flat 20% Concession on Selected Aligner Packages',
      '0% Interest Easy EMI Options with Zero Down Payment',
      'Complimentary Set of Post-Treatment Retainers'
    ],
    bestFor: 'Gaps, crowding, forward teeth, or working professionals wanting discreet correction.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Invisalign / SkyAlign Clear Aligners.'
  },
  {
    id: 'implants',
    tabName: '🦷 Dental Implants',
    title: 'Lifetime Titanium Dental Implants',
    tagline: 'Permanent fixed teeth replacement with 98.4% clinical success rate',
    specialist: 'Senior Implantology Specialist & Prof. Dr. S. K. Yadav',
    savings: 'Save up to ₹20,000',
    emi: 'From ₹2,999/mo',
    beforeImg: '/samedayimplants-before.webp',
    afterImg: '/samedayimplants-after.webp',
    inclusions: [
      'Free 3D CBCT Bone Density Assessment & Computerized Guided Mapping',
      'Flat 20% Concession on Premium Korean Osstem® Implants',
      '10-Year Warranty Metal-Free Zirconia Crown Included',
      'Same-Day Immediate Fixed Teeth options available'
    ],
    bestFor: 'Single or multiple missing teeth, loose dentures, difficulty chewing, failing bridges.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Lifetime Dental Implants.'
  },
  {
    id: 'makeover',
    tabName: '✨ Smile Makeover',
    title: 'Digital Smile Makeover & E-Max Veneers',
    tagline: 'Hollywood-grade aesthetic smile architecture co-designed with Digital Smile Design',
    specialist: 'Dr. (Prof.) Achla Bharti Yadav (MDS, Cosmetic Specialist)',
    savings: 'Save up to ₹30,000',
    emi: 'From ₹3,999/mo',
    beforeImg: '/porcelain-veneers-before.webp',
    afterImg: '/porcelain-veneers-after.webp',
    inclusions: [
      'Digital Smile Design (DSD) Photographic Aesthetic Analysis',
      'Complimentary Aesthetic Trial Mockup before permanent bonding',
      'Flat 20% Concession on 6 to 10 Tooth Porcelain Veneer Packages',
      'Stain-Proof German E-Max Porcelain with 10+ Year Durability'
    ],
    bestFor: 'Chipped, yellow, fluorosis stained, uneven, or gummy smile correction in 2-3 visits.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Smile Makeover & Veneers.'
  },
  {
    id: 'braces',
    tabName: '⚙️ Ceramic Braces',
    title: 'Damon® Self-Ligating & Aesthetic Braces',
    tagline: 'Faster biological alignment with 40% less friction and fewer clinic visits',
    specialist: 'Prof. Dr. S. K. Yadav (MDS Orthodontics, 25+ Yrs Exp)',
    savings: 'Save up to ₹15,000',
    emi: 'From ₹2,499/mo',
    beforeImg: '/ceramic-before.webp',
    afterImg: '/ceramic-after.webp',
    inclusions: [
      'Comprehensive Orthodontic Cephalometric Analysis Included',
      'Flat 20% Fee Concession on Damon® Clear & Ceramic Systems',
      'Zero Extra Extractions Approach wherever clinically feasible',
      'Flexible monthly payment schedule with 0% interest'
    ],
    bestFor: 'Teens and adults needing precision bite alignment and straight, confident teeth.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Damon Ceramic Braces.'
  },
  {
    id: 'fullmouth',
    tabName: '🛡️ Full Mouth Rehab',
    title: 'Full Mouth Rehabilitation & Bite Reconstruction',
    tagline: 'Complete functional and aesthetic restoration for worn, collapsed, or broken bites',
    specialist: 'Prof. Dr. S. K. Yadav & Multi-Specialist Clinical Panel',
    savings: 'Save up to ₹40,000',
    emi: 'From ₹4,999/mo',
    beforeImg: '/samedayimplants-before.webp',
    afterImg: '/samedayimplants-after.webp',
    inclusions: [
      'Full Mouth Diagnostic Wax-up & TMJ Occlusal Analysis',
      'Custom Master Treatment Plan combining Implants, Crowns & Laser Care',
      'Special Full-Arch 20% Concession on Total Rehabilitation',
      'Personalized Recovery Concierge & Priority Scheduling'
    ],
    bestFor: 'Severe enamel wear, collapsed bite, chronic chewing discomfort, multiple missing teeth.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Full Mouth Rehabilitation.'
  },
  {
    id: 'rct',
    tabName: '⚡ Painless RCT',
    title: 'Single-Sitting Painless Root Canal & Crown',
    tagline: 'Computerized rotary micro-endodontics to save your natural tooth in 1 visit',
    specialist: 'Senior Endodontic Specialist Team',
    savings: 'Save up to ₹5,000',
    emi: 'From ₹1,499/mo',
    beforeImg: '/skyalign-before.webp',
    afterImg: '/skyalign-after.webp',
    inclusions: [
      'Digital RVG Radiograph & Immediate Computerized Nerve Mapping',
      'Virtually Pain-Free Treatment with Computerized Gentle Anesthesia',
      'Flat 20% Concession on Premium CAD/CAM Zirconia Ceramic Crown',
      'Same-Day Emergency Relief Slot Availability'
    ],
    bestFor: 'Severe toothache, sensitivity to hot/cold, deep decay, broken tooth nerve exposure.',
    waMsg: 'Hello Shubh Dental Clinic! I want to claim the 20% OFF Privilege Pass for Painless Root Canal & Crown.'
  }
];

const FAQS_DATA = [
  {
    q: 'How does the 20% OFF Privilege Pass work?',
    a: 'Claim via WhatsApp to receive voucher code SHUBH-20-VIP. The 20% discount is applied directly to your treatment estimate upon clinical consultation.'
  },
  {
    q: 'Is the 3D Digital Scan really 100% free with no hidden obligation?',
    a: 'Yes! The 3D iTero® / CBCT scan and specialist consultation (worth ₹3,500) are completely complimentary with zero commitment required.'
  },
  {
    q: 'How does the 0% Interest EMI financing work?',
    a: 'Instant pre-approved 0% EMI starting at ₹2,499/mo with zero processing fees and flexible 6 to 18-month tenures.'
  },
  {
    q: 'Can outstation patients or NRIs consult online first?',
    a: 'Yes! You can book a direct 1-on-1 video consultation to review your X-rays/photos before visiting.'
  }
];

export default function SpecialOfferPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: TREATMENTS_DATA[0].title,
    timing: 'Morning (10:00 AM - 01:00 PM)'
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [previewModalImg, setPreviewModalImg] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentTreatment = TREATMENTS_DATA[0];

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    const voucherCode = 'SHUBH-20-VIP';

    // Submit lead to Web3Forms
    try {
      await submitToWeb3Forms({
        name: formData.name,
        phone: formData.phone,
        treatment: formData.treatment,
        timing: formData.timing,
        source: 'Special Offer Page (20% OFF Pass)',
        voucher: voucherCode,
        message: `Claimed 20% OFF Privilege Pass for ${formData.treatment}. Preferred slot: ${formData.timing}`
      });
    } catch (err) {
      console.error('Lead recording error:', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleQuickTabClaim = (treatment) => {
    // Open the Offer Modal popup form with the selected treatment
    window.dispatchEvent(new CustomEvent('openOfferModal', {
      detail: { treatment: treatment.title }
    }));
  };

  return (
    <div className="special-offer-landing">
      
      {/* ── 1. URGENCY CAMPAIGN TICKER (Top Slim Bar) ───────── */}
      <div className="campaign-urgency-bar">
        <div className="urgency-container">
          <span className="urgency-pulse" />
          <span className="urgency-text">
            <strong>AD SPECIAL:</strong> Flat 20% OFF All Premium Treatments + Free 3D Scan (Worth ₹3,500)
          </span>
          <span className="urgency-counter">🔥 Only 4 Slots Left This Week</span>
        </div>
      </div>

      {/* ── 2. HERO SECTION WITH INSTANT ABOVE-THE-FOLD LEAD WIDGET ── */}
      <section className="ad-hero-section">
        <div className="container ad-hero-grid">
          
          {/* Left Column: High-Impact Clinical Offer Copy */}
          <div className="ad-hero-content">
            <div className="ad-privilege-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>OFFICIAL 2026 CLINICAL PRIVILEGE PASS</span>
            </div>

            <h1 className="ad-hero-title">
              Flat <span className="highlight-gold">20% OFF</span> All Premium Dental Treatments
            </h1>

            <p className="ad-hero-subtitle">
              Co-planned by <strong>Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh)</strong> &amp; <strong>Dr. Achla Bharti Yadav</strong>. Get advanced hospital-grade care at transparent, subsidized rates.
            </p>

            {/* Value Inclusions Micro-Grid (Space Efficient) */}
            <div className="ad-hero-perks-grid">
              <div className="hero-perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>Free 3D CBCT / iTero® Scan</strong> (Worth ₹3,500)</span>
              </div>
              <div className="hero-perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>0% Interest EMI</strong> from ₹2,499/month</span>
              </div>
              <div className="hero-perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>10-Year Warranty</strong> on Implants &amp; Veneers</span>
              </div>
              <div className="hero-perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span><strong>In-Clinic (Rohtak) &amp; Video Consult</strong> for NRIs</span>
              </div>
            </div>

            {/* Doctor Trust Strip */}
            <div className="ad-trust-strip">
              <div className="doc-avatar-wrap">
                <Image 
                  src="/dr-sk-yadav.webp" 
                  alt="Prof. Dr. S. K. Yadav Ex-PGI" 
                  width={46} 
                  height={46} 
                  className="doc-mini-thumb" 
                />
                <Image 
                  src="/dr-achita-yadav.webp" 
                  alt="Dr. Achla Bharti Yadav" 
                  width={46} 
                  height={46} 
                  className="doc-mini-thumb overlap" 
                />
              </div>
              <div className="doc-trust-info">
                <div className="trust-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F59E0B" stroke="none" />
                  ))}
                  <span className="rating-num">5.0★ (300+ Google Reviews)</span>
                </div>
                <p className="doc-meta-sub">20+ Yrs Clinical Mastery · 2.5 Lakh+ Smiles Corrected</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Digital Voucher Pass Widget */}
          <div className="ad-hero-voucher-card">
            <div className="voucher-card-inner">
              
              {/* Card Header & Seal */}
              <div className="voucher-header">
                <div className="voucher-title-wrap">
                  <span className="voucher-chip">DIGITAL VOUCHER PASS</span>
                  <h3 className="voucher-heading">Claim Your 20% Concession</h3>
                </div>
                <div className="voucher-seal">
                  <span className="seal-percent">20%</span>
                  <span className="seal-off">OFF</span>
                </div>
              </div>

              <div className="voucher-code-strip">
                <div className="code-box">
                  <span className="code-label">PROMO CODE:</span>
                  <strong className="code-val">SHUBH-20-VIP</strong>
                </div>
                <span className="code-verified">
                  <BadgeCheck size={14} /> Verified Active
                </span>
              </div>

              {/* Lead Capture Form or Success Confirmation */}
              {submitted ? (
                <div className="voucher-success-box">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} className="success-check-icon" />
                  </div>
                  <h4 className="success-heading">20% Privilege Pass Reserved!</h4>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your 20% concession slot for <strong>{formData.treatment}</strong> has been secured and sent to our specialist desk.
                  </p>
                  <div className="claimed-code-badge">
                    <span>VOUCHER CODE:</span>
                    <strong>SHUBH-20-VIP</strong>
                  </div>
                  <p className="success-subtext">
                    Our patient coordinator will contact you at <strong>{formData.phone}</strong> shortly to confirm your complimentary 3D Scan appointment.
                  </p>
                  <div className="success-actions">
                    <a href="tel:+918685048414" className="btn-success-call">
                      <Phone size={15} /> Call Clinic Directly (+91 86850 48414)
                    </a>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ ...formData, name: '', phone: '' });
                      }}
                      className="btn-success-reset"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleClaimSubmit} className="voucher-claim-form">
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" name="subject" value="New 20% Privilege Lead from Special Offer Page" />
                  <input type="hidden" name="from_name" value="Shubh Dental Clinic Website" />
                  <div className="v-form-group">
                    <label htmlFor="lead-name">Your Full Name</label>
                    <input 
                      id="lead-name"
                      type="text" 
                      required 
                      placeholder="e.g., Rohit Sharma" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="v-form-group">
                    <label htmlFor="lead-phone">Mobile / Contact Number</label>
                    <input 
                      id="lead-phone"
                      type="tel" 
                      required 
                      placeholder="10-digit mobile number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="v-form-group">
                    <label htmlFor="lead-treatment">Treatment of Interest</label>
                    <select 
                      id="lead-treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    >
                      {TREATMENTS_DATA.map((t, idx) => (
                        <option key={idx} value={t.title}>{t.title}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-voucher-claim" disabled={isSubmitting}>
                    <Sparkles size={17} />
                    <span>{isSubmitting ? 'Securing Your 20% Slot...' : 'Claim 20% Privilege Voucher Now'}</span>
                    <ArrowRight size={17} />
                  </button>

                  <div className="voucher-call-alt">
                    <span>Prefer calling immediately?</span>
                    <a href="tel:+918685048414" className="alt-call-link">
                      <Phone size={13} /> +91 86850 48414
                    </a>
                  </div>

                  <p className="voucher-guarantee-micro">
                    🔒 Free Consultation · No Advance Payment · Instant Confirmation
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ── 3. ALL TREATMENT PRIVILEGE CARDS (All 6 Displayed) ── */}
      <section className="section treatments-matrix-section" id="all-treatments">
        <div className="container">
          
          <div className="section-head-compact text-center">
            <span className="mini-sub-badge">ALL ELIGIBLE PROCEDURES</span>
            <h2 className="section-title-compact">
              Explore 20% Concessions on All Treatments
            </h2>
            <p className="section-desc-compact">
              All treatments include complimentary 3D scans, 0% EMI financing, and direct PGI MDS specialist oversight.
            </p>
          </div>

          {/* ALL 6 CARDS DISPLAYED DIRECTLY HERE */}
          <div className="treatments-all-grid">
            {TREATMENTS_DATA.map((treatment) => (
              <div key={treatment.id} className="treatment-privilege-card">
                
                {/* Card Top Strip */}
                <div className="tc-header-row">
                  <span className="tc-tab-tag">{treatment.tabName}</span>
                  <span className="tc-discount-badge">
                    <Percent size={12} /> 20% OFF
                  </span>
                </div>

                {/* Treatment Title & Tagline */}
                <h3 className="tc-title">{treatment.title}</h3>
                <p className="tc-tagline">{treatment.tagline}</p>

                {/* Doctor Credential */}
                <div className="tc-doctor-row">
                  <Stethoscope size={14} className="tc-doc-icon" />
                  <span>{treatment.specialist}</span>
                </div>



                {/* Savings & 0% EMI Bar */}
                <div className="tc-pricing-strip">
                  <div className="tc-price-pill">
                    <span className="p-badge-sub">Savings:</span>
                    <strong className="p-badge-val">{treatment.savings}</strong>
                  </div>
                  <div className="tc-price-pill emi">
                    <span className="p-badge-sub">0% EMI:</span>
                    <strong className="p-badge-val">{treatment.emi}</strong>
                  </div>
                </div>

                {/* Core Inclusions Check Bullets */}
                <ul className="tc-inclusions-list">
                  {treatment.inclusions.slice(0, 3).map((inc, i) => (
                    <li key={i} className="tc-inc-item">
                      <Check size={13} className="tc-check-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                {/* 1-Tap Claim Action */}
                <div className="tc-action-row">
                  <button 
                    onClick={() => handleQuickTabClaim(treatment)}
                    className="tc-claim-btn"
                  >
                    <Sparkles size={15} />
                    <span>Claim 20% Pass</span>
                    <ArrowRight size={14} />
                  </button>
                  <a href="tel:+918685048414" className="tc-call-btn" title="Call doctor desk">
                    <Phone size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>



      {/* ── 5. CLINICAL EXCELLENCE & AUTHORITY BENTO ──────────── */}
      <section className="section clinic-authority-section">
        <div className="container">
          
          <div className="section-head-compact text-center">
            <span className="mini-sub-badge">UNCOMPROMISING STANDARDS</span>
            <h2 className="section-title-compact">
              Why Patients Across India &amp; Abroad Choose Shubh Dental
            </h2>
          </div>

          <div className="authority-bento-grid">
            
            {/* Bento 1: Doctors */}
            <div className="bento-card bento-doctors">
              <div className="bento-doc-head">
                <div className="bento-icon-gold">
                  <Award size={20} />
                </div>
                <span className="bento-tag">PGI Chandigarh Mentorship</span>
              </div>
              <h4 className="bento-title">Led by Esteemed MDS Specialists</h4>
              <p className="bento-desc">
                Treatments are directly planned and performed by <strong>Prof. Dr. S. K. Yadav</strong> (Ex-Assistant Professor, PGI Chandigarh with 20+ years expertise) and <strong>Dr. Achla Yadav</strong>. You never get handed off to junior trainees.
              </p>
            </div>

            {/* Bento 2: Technology */}
            <div className="bento-card">
              <div className="bento-doc-head">
                <div className="bento-icon-gold">
                  <Zap size={20} />
                </div>
                <span className="bento-tag">Hospital-Grade Tech</span>
              </div>
              <h4 className="bento-title">In-House 3D Digital Workflow</h4>
              <p className="bento-desc">
                3D iTero® intraoral scanning, computerized CBCT 3D guided surgery, digital smile simulators, and pain-free motorized anesthesia for zero discomfort.
              </p>
            </div>

            {/* Bento 3: Sterilization */}
            <div className="bento-card">
              <div className="bento-doc-head">
                <div className="bento-icon-gold">
                  <ShieldCheck size={20} />
                </div>
                <span className="bento-tag">100% Infection-Free</span>
              </div>
              <h4 className="bento-title">Class-B 4-Step Sterilization</h4>
              <p className="bento-desc">
                International autoclave protocols with vacuum autoclaves, disposable pouches opened only in front of you, and clean HEPA filtered operatories.
              </p>
            </div>

            {/* Bento 4: NRI & Outstation */}
            <div className="bento-card">
              <div className="bento-doc-head">
                <div className="bento-icon-gold">
                  <HeartHandshake size={20} />
                </div>
                <span className="bento-tag">Global Patients Welcome</span>
              </div>
              <h4 className="bento-title">Fast-Track Outstation Care</h4>
              <p className="bento-desc">
                Serving patients from Delhi NCR, Punjab, USA, UK, Canada &amp; Australia with pre-planned compressed appointments, hotel tie-ups, and remote tracking.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. AD FAQS (COLLAPSIBLE, ZERO CLUTTER) ─────────────── */}
      <section className="section faq-compact-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          
          <div className="section-head-compact text-center">
            <span className="mini-sub-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title-compact">Got Questions About the Offer?</h2>
          </div>

          <div className="faq-accordion-list">
            {FAQS_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-card ${openFaq === idx ? 'faq-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-chevron">{openFaq === idx ? '−' : '+'}</span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-text">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Direct Help Banner */}
          <div className="faq-bottom-banner">
            <div>
              <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '1rem' }}>Have a specific clinical question?</strong>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.86rem' }}>Speak directly with our clinical manager right away.</span>
            </div>
            <a href="tel:+918685048414" className="btn-faq-phone">
              <Phone size={14} /> Call Now
            </a>
          </div>

        </div>
      </section>

      {/* ── 7. STICKY MOBILE BOTTOM CONVERSION BAR ─────────────── */}
      <div className="sticky-mobile-offer-bar">
        <div className="sticky-bar-left">
          <span className="sticky-pill">20% OFF PASS</span>
          <span className="sticky-slots">4 Slots Left Today</span>
        </div>
        <div className="sticky-bar-actions">
          <button 
            onClick={() => handleQuickTabClaim(currentTreatment)}
            className="sticky-btn-wa"
          >
            <Sparkles size={14} />
            <span>Claim 20% OFF</span>
          </button>
          <a href="tel:+918685048414" className="sticky-btn-call" aria-label="Call clinic">
            <Phone size={15} />
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        body:has(.special-offer-landing) .inav-wrapper {
          display: none !important;
        }
        body:has(.special-offer-landing) .whatsapp-fab {
          display: none !important;
        }
        body:has(.special-offer-landing) .mobile-bottom-bar {
          display: none !important;
        }

        .special-offer-landing {
          background: #FCFBF8;
          color: #110805;
          min-height: 100vh;
          padding-bottom: 50px;
        }

        /* ── URGENCY CAMPAIGN BAR ── */
        .campaign-urgency-bar {
          background: linear-gradient(90deg, #110805 0%, #2A150B 50%, #110805 100%);
          color: #FFFFFF;
          padding: 0.55rem 1rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.35);
          font-size: 0.82rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        .urgency-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .urgency-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          animation: pulseGreen 1.8s infinite;
        }
        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        .urgency-text strong {
          color: #FFB380;
        }
        .urgency-counter {
          background: rgba(230, 106, 31, 0.25);
          border: 1px solid rgba(230, 106, 31, 0.5);
          color: #FF924A;
          font-weight: 800;
          padding: 0.15rem 0.55rem;
          border-radius: 99px;
          font-size: 0.76rem;
        }

        /* ── HERO SECTION ── */
        .ad-hero-section {
          background: linear-gradient(155deg, #0E0604 0%, #221008 45%, #180B05 100%);
          color: #FFFFFF;
          padding: 2.75rem 0 3.25rem;
          position: relative;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
          overflow: hidden;
        }
        .ad-hero-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 2.5rem;
          align-items: center;
        }

        .ad-privilege-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.45);
          color: #FFB380;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
        }
        .badge-sparkle { color: #E5A93C; }

        .ad-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 0.85rem;
          color: #FFFFFF;
        }
        .highlight-gold {
          background: linear-gradient(135deg, #FFB380 0%, #FF8F4D 50%, #E5A93C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ad-hero-subtitle {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 580px;
        }
        .ad-hero-subtitle strong {
          color: #FFFFFF;
        }

        .ad-hero-perks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1rem;
          margin-bottom: 1.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem 1.25rem;
        }
        .hero-perk-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.88);
        }
        .perk-icon {
          color: #10B981;
          flex-shrink: 0;
        }

        .ad-trust-strip {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .doc-avatar-wrap {
          display: flex;
          align-items: center;
        }
        .doc-mini-thumb {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #D67A41;
          object-fit: cover;
        }
        .doc-mini-thumb.overlap {
          margin-left: -12px;
          border-color: #E5A93C;
        }
        .trust-stars {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .rating-num {
          font-size: 0.82rem;
          font-weight: 800;
          color: #FFB380;
          margin-left: 0.35rem;
        }
        .doc-meta-sub {
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0.15rem 0 0;
        }

        /* ── RIGHT COLUMN: DIGITAL VOUCHER WIDGET ── */
        .ad-hero-voucher-card {
          position: relative;
        }
        .voucher-card-inner {
          background: linear-gradient(145deg, #1C0E08 0%, #2A140B 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.45);
          border-radius: 24px;
          padding: 1.75rem 1.6rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), 0 0 35px rgba(214, 122, 65, 0.15);
          position: relative;
        }

        .voucher-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .voucher-chip {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #E5A93C;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .voucher-heading {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.2;
        }
        .voucher-seal {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 900;
          line-height: 1;
          box-shadow: 0 4px 15px rgba(230, 106, 31, 0.5);
          border: 2px solid #FFFFFF;
          flex-shrink: 0;
        }
        .seal-percent { font-size: 1rem; }
        .seal-off { font-size: 0.58rem; letter-spacing: 0.05em; }

        .voucher-code-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.35);
          border: 1px dashed rgba(214, 122, 65, 0.4);
          border-radius: 12px;
          padding: 0.5rem 0.85rem;
          margin-bottom: 1.15rem;
        }
        .code-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .code-label {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 700;
        }
        .code-val {
          font-size: 0.88rem;
          color: #FDE68A;
          letter-spacing: 0.06em;
        }
        .code-verified {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: #10B981;
        }

        .voucher-claim-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .v-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .v-form-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
        }
        .v-form-group input,
        .v-form-group select {
          padding: 0.7rem 0.9rem;
          border-radius: 11px;
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.96);
          color: #110805;
          font-size: 0.86rem;
          font-weight: 600;
          outline: none;
          font-family: inherit;
        }
        .v-form-group input:focus,
        .v-form-group select:focus {
          border-color: #FF924A;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(255, 146, 74, 0.25);
        }

        .btn-voucher-claim {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.94rem;
          font-weight: 800;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          margin-top: 0.35rem;
          box-shadow: 0 8px 20px rgba(230, 106, 31, 0.45);
          transition: all 0.22s ease;
          font-family: inherit;
        }
        .btn-voucher-claim:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(230, 106, 31, 0.6);
        }

        .voucher-call-alt {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 0.25rem;
        }
        .alt-call-link {
          color: #FFB380;
          font-weight: 800;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .alt-call-link:hover { text-decoration: underline; }

        .voucher-guarantee-micro {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.55);
          text-align: center;
          margin: 0;
        }

        /* Voucher Success Confirmation Styles */
        .voucher-success-box {
          text-align: center;
          padding: 1rem 0.5rem 0.5rem;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .success-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          border: 1.5px solid #10B981;
          margin-bottom: 0.85rem;
        }
        .success-check-icon {
          color: #10B981;
        }
        .success-heading {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 850;
          color: #FFFFFF;
          margin: 0 0 0.5rem;
        }
        .success-desc {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0 0 0.85rem;
        }
        .claimed-code-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.25);
          border: 1.5px dashed #FF924A;
          border-radius: 99px;
          padding: 0.45rem 1.15rem;
          margin-bottom: 0.85rem;
        }
        .claimed-code-badge span {
          font-size: 0.7rem;
          font-weight: 800;
          color: #FFB380;
          letter-spacing: 0.05em;
        }
        .claimed-code-badge strong {
          font-size: 1rem;
          color: #FFFFFF;
          letter-spacing: 0.08em;
        }
        .success-subtext {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.45;
          margin: 0 0 1.15rem;
        }
        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .btn-success-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: #10B981;
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 800;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }
        .btn-success-call:hover {
          background: #059669;
          transform: translateY(-2px);
        }
        .btn-success-reset {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.5rem;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-success-reset:hover {
          border-color: rgba(255, 255, 255, 0.5);
          color: #FFFFFF;
        }

        /* ── SECTION COMMON STYLES (COMPACT) ── */
        .section-head-compact {
          max-width: 780px;
          margin: 0 auto 2rem;
        }
        .mini-sub-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #B85922;
          background: rgba(214, 122, 65, 0.12);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .section-title-compact {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 900;
          color: #110805;
          margin: 0 0 0.45rem;
          line-height: 1.2;
        }
        .section-desc-compact {
          font-size: 0.92rem;
          color: #5A4840;
          margin: 0;
          line-height: 1.5;
        }

        /* ── 3. TREATMENT MATRIX TABS & DISPLAY ── */
        .treatments-matrix-section {
          background: #FAF8F5;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
        }

        .matrix-tabs-container {
          overflow-x: auto;
          scrollbar-width: none;
          margin-bottom: 1.75rem;
          padding: 0.25rem 0;
        }
        .matrix-tabs-container::-webkit-scrollbar { display: none; }

        .matrix-tabs-track {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          min-width: max-content;
          justify-content: center;
        }

        .matrix-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          border-radius: 99px;
          padding: 0.5rem 1.15rem;
          font-size: 0.84rem;
          font-weight: 750;
          color: #4A3E39;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }
        .matrix-tab-btn:hover {
          border-color: #D67A41;
          color: #B85922;
        }
        .matrix-tab-btn.tab-active {
          background: #110805;
          color: #FFFFFF;
          border-color: #110805;
          box-shadow: 0 4px 14px rgba(17, 8, 5, 0.15);
        }
        .tab-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF8F4D;
        }

        /* ── 3. ALL TREATMENT PRIVILEGE CARDS GRID ── */
        .treatments-all-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.35rem;
          margin-top: 1.5rem;
        }

        .treatment-privilege-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          border-radius: 20px;
          padding: 1.35rem;
          box-shadow: 0 10px 25px rgba(74, 37, 24, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .treatment-privilege-card:hover {
          transform: translateY(-4px);
          border-color: #D67A41;
          box-shadow: 0 16px 36px rgba(214, 122, 65, 0.16);
        }

        .tc-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        .tc-tab-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #B85922;
          background: rgba(214, 122, 65, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
        }

        .tc-discount-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #10B981;
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
        }

        .tc-title {
          font-family: var(--font-heading);
          font-size: 1.18rem;
          font-weight: 800;
          color: #110805;
          margin: 0 0 0.35rem;
          line-height: 1.25;
        }

        .tc-tagline {
          font-size: 0.82rem;
          color: #6E5A50;
          line-height: 1.45;
          margin: 0 0 0.65rem;
          flex-grow: 1;
        }

        .tc-doctor-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #8C6F62;
          font-weight: 700;
          background: #FAF7F4;
          padding: 0.3rem 0.65rem;
          border-radius: 8px;
          margin-bottom: 0.85rem;
        }
        .tc-doc-icon { color: #D67A41; flex-shrink: 0; }

        .tc-preview-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
          border-radius: 12px;
          overflow: hidden;
        }

        .tc-split-img {
          position: relative;
          height: 125px;
          border-radius: 10px;
          overflow: hidden;
          background: #000;
        }

        .tc-img-tag {
          position: absolute;
          bottom: 0.35rem;
          left: 0.35rem;
          font-size: 0.6rem;
          font-weight: 900;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          z-index: 2;
          letter-spacing: 0.04em;
        }
        .tc-img-tag.before { background: rgba(17, 8, 5, 0.85); color: #FFFFFF; }
        .tc-img-tag.after { background: #10B981; color: #FFFFFF; }

        .tc-pricing-strip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .tc-price-pill {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #FFF9F5;
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.35rem 0.6rem;
          border-radius: 10px;
        }
        .tc-price-pill.emi {
          background: #F4EBE1;
          border-color: rgba(74, 37, 24, 0.15);
        }
        .p-badge-sub {
          font-size: 0.65rem;
          color: #8C6F62;
          font-weight: 700;
          text-transform: uppercase;
        }
        .p-badge-val {
          font-size: 0.82rem;
          font-weight: 850;
          color: #B85922;
        }
        .tc-price-pill.emi .p-badge-val { color: #110805; }

        .tc-inclusions-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .tc-inc-item {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #382C26;
          font-weight: 600;
          line-height: 1.35;
        }
        .tc-check-icon {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tc-action-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: auto;
        }
        .tc-claim-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.85rem;
          font-weight: 800;
          padding: 0.75rem 0.9rem;
          border-radius: 11px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(230, 106, 31, 0.35);
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .tc-claim-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(230, 106, 31, 0.5);
        }
        .tc-call-btn {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.18);
          color: #110805;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .tc-call-btn:hover {
          border-color: #D67A41;
          color: #D67A41;
        }

        /* ── 4. SAVINGS & EMI ESTIMATOR ── */
        .savings-calc-section {
          padding: 3rem 0;
          background: #FCFBF8;
        }
        .calc-card-wrapper {
          background: linear-gradient(145deg, #110805 0%, #221008 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          border-radius: 28px;
          padding: 2.75rem 2.5rem;
          color: #FFFFFF;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }
        .calc-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
        }

        .calc-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #FFB380;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          margin-bottom: 0.85rem;
        }
        .calc-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3.2vw, 2rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 0.75rem;
        }
        .calc-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.6;
          margin: 0 0 1.25rem;
        }
        .calc-perks-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .calc-perk {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.88);
        }
        .c-icon { color: #10B981; flex-shrink: 0; }

        .calc-highlight-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          border-radius: 20px;
          padding: 1.75rem 1.6rem;
          backdrop-filter: blur(10px);
        }
        .c-box-sub {
          display: block;
          font-size: 0.7rem;
          font-weight: 850;
          color: #FFB380;
          letter-spacing: 0.08em;
          margin-bottom: 1rem;
        }
        .c-pricing-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .price-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .p-label {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 600;
        }
        .p-val.strike {
          font-size: 1.2rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: line-through;
        }
        .price-divider {
          font-size: 1.2rem;
          color: #FF8F4D;
        }
        .p-val.green {
          font-size: 1.45rem;
          font-weight: 900;
          color: #10B981;
        }

        .c-savings-callout {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.84rem;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }
        .c-savings-callout strong { color: #34D399; }
        .c-emi-badge {
          font-size: 0.76rem;
          color: #FFB380;
          font-weight: 700;
        }

        .btn-calc-lock {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.94rem;
          font-weight: 800;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(230, 106, 31, 0.4);
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .btn-calc-lock:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(230, 106, 31, 0.55);
        }

        /* ── 5. CLINIC AUTHORITY BENTO (COMPACTED) ── */
        .clinic-authority-section {
          padding: 2.25rem 0;
          background: #FAF8F5;
        }
        .authority-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
        }
        .bento-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 16px;
          padding: 1.15rem 1.25rem;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.03);
          transition: all 0.22s ease;
        }
        .bento-card:hover {
          transform: translateY(-2px);
          border-color: #D67A41;
          box-shadow: 0 8px 22px rgba(214, 122, 65, 0.12);
        }
        .bento-doctors {
          border-color: rgba(214, 122, 65, 0.28);
          background: linear-gradient(180deg, #FFFDFB 0%, #FFFFFF 100%);
        }

        .bento-doc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .bento-icon-gold {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #FFF1E8;
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bento-tag {
          font-size: 0.68rem;
          font-weight: 800;
          color: #B85922;
          background: #FFF3EB;
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .bento-title {
          font-family: var(--font-heading);
          font-size: 1.02rem;
          font-weight: 800;
          color: #110805;
          margin: 0 0 0.3rem;
          line-height: 1.3;
        }
        .bento-desc {
          font-size: 0.81rem;
          color: #5A4840;
          line-height: 1.48;
          margin: 0;
        }
        .bento-desc strong { color: #110805; }

        /* ── 6. COMPACT FAQS ── */
        .faq-compact-section {
          padding: 3rem 0 4rem;
          background: #FCFBF8;
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .faq-item-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 14px;
          padding: 1.15rem 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .faq-item-card:hover {
          border-color: rgba(214, 122, 65, 0.35);
        }
        .faq-item-card.faq-open {
          border-color: #D67A41;
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.08);
        }
        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .faq-question-text {
          font-size: 0.95rem;
          font-weight: 750;
          color: #110805;
          line-height: 1.35;
        }
        .faq-chevron {
          font-size: 1.25rem;
          font-weight: 800;
          color: #D67A41;
          flex-shrink: 0;
        }
        .faq-answer-text {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
          font-size: 0.88rem;
          color: #5A4840;
          line-height: 1.6;
        }
        .faq-answer-text p { margin: 0; }

        .faq-bottom-banner {
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-faq-phone {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          color: #110805;
          font-size: 0.85rem;
          font-weight: 800;
          padding: 0.6rem 1.15rem;
          border-radius: 99px;
          text-decoration: none;
        }
        .btn-faq-phone:hover {
          background: #FF8F4D;
          color: #FFFFFF;
        }

        /* ── 7. STICKY MOBILE CONVERSION BAR ── */
        .sticky-mobile-offer-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(17, 8, 5, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1.5px solid rgba(214, 122, 65, 0.5);
          padding: 0.65rem 1rem;
          z-index: 99999;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.35);
        }
        .sticky-bar-left {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .sticky-pill {
          font-size: 0.72rem;
          font-weight: 900;
          color: #FDE68A;
          letter-spacing: 0.04em;
        }
        .sticky-slots {
          font-size: 0.66rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
        }
        .sticky-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .sticky-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #25D366;
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 850;
          padding: 0.55rem 0.95rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
          white-space: nowrap;
        }
        .sticky-btn-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #FFFFFF;
          color: #110805;
          border-radius: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* ── RESPONSIVE RULES (OPTIMIZED FOR HIGH DENSITY & FAST LOAD) ── */
        @media (max-width: 1024px) {
          .ad-hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .treatments-all-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.15rem;
          }
          .calc-content-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .special-offer-landing {
            padding-bottom: 75px;
          }
          .sticky-mobile-offer-bar {
            display: flex;
          }
          .campaign-urgency-bar {
            font-size: 0.74rem;
            padding: 0.45rem 0.75rem;
          }
          .urgency-counter {
            font-size: 0.7rem;
          }
          .ad-hero-section {
            padding: 1.75rem 0 2.25rem;
          }
          .ad-hero-title {
            font-size: 1.75rem;
          }
          .ad-hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 1.15rem;
          }
          .ad-hero-perks-grid {
            grid-template-columns: 1fr;
            gap: 0.55rem;
            padding: 0.85rem 1rem;
          }
          .voucher-card-inner {
            padding: 1.35rem 1.15rem;
            border-radius: 20px;
          }
          .voucher-heading {
            font-size: 1.15rem;
          }
          .treatments-matrix-section {
            padding: 2.25rem 0;
          }
          .treatments-all-grid {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          .treatment-privilege-card {
            padding: 1.15rem;
            border-radius: 18px;
          }
          .calc-card-wrapper {
            padding: 1.75rem 1.25rem;
            border-radius: 20px;
          }
          .authority-bento-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .bento-card {
            padding: 0.95rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .matrix-tab-btn {
            font-size: 0.78rem;
            padding: 0.45rem 0.85rem;
          }
          .tc-action-row {
            flex-direction: row;
          }
          .tc-claim-btn {
            font-size: 0.82rem;
            padding: 0.7rem 0.75rem;
          }
        }
      `}} />

    </div>
  );
}
