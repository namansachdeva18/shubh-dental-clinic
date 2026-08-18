'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Tag, ShieldCheck, Star, Award, Phone, ArrowRight, CheckCircle2, 
  Sparkles, Clock, MapPin, Zap, ChevronRight, User, Stethoscope,
  X, MessageSquare, Calendar, Gift, Check, ArrowUpRight, HelpCircle, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { StaggerReveal, StaggerItem } from '../components/ScrollReveal';

export default function SpecialOfferPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Invisalign® & Clear Aligners',
    timing: 'Morning (10 AM - 1 PM)'
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeModalTreatment, setActiveModalTreatment] = useState(null);

  const handleClaim = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const msg = `Hello Shubh Dental Clinic! 🏷️ I am claiming the LIMITED-TIME DENTAL CARE OFFER (Up to 20% OFF + Complimentary Consultation).\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Treatment: ${formData.treatment}\n⏰ Preferred Timing: ${formData.timing}`;
    window.open(`https://wa.me/918685048414?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const openOfferModal = (treatmentName) => {
    if (treatmentName && typeof treatmentName === 'string') {
      setFormData(prev => ({ ...prev, treatment: treatmentName }));
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openOfferModal'));
    }
  };

  const handleSelectAndScroll = (treatmentTitle) => {
    setFormData(prev => ({ ...prev, treatment: treatmentTitle }));
    setActiveModalTreatment(null);
    const element = document.getElementById('claim-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ELIGIBLE_TREATMENTS = [
    {
      id: 'aligners',
      title: 'Invisalign® & Clear Aligners',
      tagline: 'Virtually Invisible Smile Transformation Without Brackets or Food Restrictions',
      desc: 'Custom medical-grade transparent aligners planned directly by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh, 35,000+ cases).',
      icon: Sparkles,
      badge: 'Up to 20% OFF',
      savingsTag: 'Save up to ₹25,000 on Aligner Packages',
      popular: true,
      offerInclusions: [
        'Complimentary 3D iTero® Digital Scan & Future Smile Simulation (Worth ₹3,500)',
        'Direct Clinical Oversight by Certified Invisalign & SkyAlign Specialist',
        'Up to 20% Discount on Selected Aligner Treatment Packages',
        '0% Interest Easy EMI Available from ₹3,999/month',
        'Free Post-Treatment Retainers Set Included'
      ],
      bestFor: 'Crooked teeth, gaps/spacing, crowding, forward teeth, or working professionals wanting 100% discreet teeth straightening.',
      duration: '6 to 18 months · Only 1 clinic visit every 6–8 weeks (or remote monitoring for outstation patients)',
      specialist: 'Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh)',
      whatsappMsg: 'Hi Dr. Yadav! I want to claim the Limited-Time 20% OFF Offer for Invisalign / Clear Aligners at Shubh Dental Clinic.'
    },
    {
      id: 'implants',
      title: 'Lifetime Dental Implants & Fixed Teeth',
      tagline: 'Permanent Titanium Tooth Replacement with 98.4% Documented Clinical Success',
      desc: 'Permanent natural-looking tooth replacement for single, multiple, or full-jaw missing teeth using 3D CBCT computer-guided precision surgery.',
      icon: Zap,
      badge: 'Free 3D CBCT Scan',
      savingsTag: '10-Year Warranty Zirconia Crown Included',
      popular: true,
      offerInclusions: [
        'Complimentary 3D CBCT Bone Density Assessment & Computerized Surgical Mapping',
        'Up to 20% Concession on Premium Titanium Implants (Osstem / Straumann)',
        '10-Year Warranty Metal-Free Zirconia Crown Included',
        'Same-Day Immediate Fixed Teeth options available',
        '0% Interest Easy EMI Installments'
      ],
      bestFor: 'Missing teeth, loose painful dentures, difficulty chewing, failing bridges, or full mouth tooth loss.',
      duration: 'Painless 20-min flapless surgery · Fixed temporary teeth within 24–48 hours',
      specialist: 'Senior Implantology Specialist Panel & Prof. Dr. S. K. Yadav',
      whatsappMsg: 'Hi Shubh Dental! I want to claim the Limited-Time Offer for Dental Implants / Same-Day Teeth at Shubh Dental Clinic.'
    },
    {
      id: 'braces',
      title: 'Damon® Self-Ligating & Aesthetic Braces',
      tagline: 'Faster Alignment with 40% Less Friction & Fewer Clinic Adjustments',
      desc: 'Next-generation low-friction self-ligating braces and tooth-colored ceramic brackets with 35,000+ completed clinical cases.',
      icon: Award,
      badge: 'Up to 20% OFF',
      savingsTag: 'Low-Friction Biological Tooth Movement',
      popular: false,
      offerInclusions: [
        'Comprehensive Orthodontic Cephalometric Analysis & Diagnosis Included',
        'Up to 20% Fee Concession on Damon® Clear Ceramic Systems',
        'Zero Extra Extractions Approach wherever clinically feasible',
        'Flexible 0% EMI payment schedule across active treatment months',
        'Complimentary Enamel Polishing upon debonding'
      ],
      bestFor: 'Teens & adults with severe crowding, misaligned bites, protruding teeth, or complex orthodontic cases.',
      duration: '12 to 24 months with gentle biological forces and faster progress',
      specialist: 'Prof. Dr. S. K. Yadav (MDS Orthodontics, 20+ Years Experience)',
      whatsappMsg: 'Hi Shubh Dental! I want to claim the Limited-Time Offer for Damon & Ceramic Braces at Shubh Dental Clinic.'
    },
    {
      id: 'makeover',
      title: 'Smile Makeover & Porcelain Veneers',
      tagline: 'Hollywood-Grade Aesthetic Smile Design Co-Crafted with Digital Smile Design',
      desc: 'Ultra-thin E-Max porcelain veneers to correct permanent stains, chips, gaps, and worn edges for a radiant, photo-ready smile.',
      icon: Star,
      badge: 'Free Aesthetic Trial',
      savingsTag: '10+ Year Porcelain Durability',
      popular: true,
      offerInclusions: [
        'Digital Smile Design (DSD) Photographic Aesthetic Analysis',
        'Complimentary Smile Trial Mockup before permanent bonding',
        'Up to 20% Package Concession on 6 to 10 Tooth Veneer Makeovers',
        'Stain-Proof German E-Max Porcelain with 10+ Year Durability',
        '1-on-1 Aesthetic Consultation with Dr. Achla Yadav'
      ],
      bestFor: 'Yellow/discolored teeth, permanent fluorosis stains, chipped enamel, gummy smiles, uneven teeth lengths.',
      duration: 'Completed in just 2 to 3 painless appointments over 7–10 days',
      specialist: 'Dr. (Prof.) Achla Yadav (MDS, Certified Cosmetic Dentist)',
      whatsappMsg: 'Hi Dr. Achla! I want to claim the Limited-Time Smile Makeover & Veneers Offer at Shubh Dental Clinic.'
    },
    {
      id: 'fullmouth',
      title: 'Full Mouth Rehabilitation & Bite Reconstruction',
      tagline: 'Comprehensive Functional & Aesthetic Restoration for Worn or Damaged Teeth',
      desc: 'Restores collapsed bite height, mastication power, and youthful facial aesthetics for long-term oral health and pain-free eating.',
      icon: ShieldCheck,
      badge: 'Full Arch Package Offer',
      savingsTag: 'Comprehensive Functional Reconstruction',
      popular: false,
      offerInclusions: [
        'Full Mouth Diagnostic Wax-up & TMJ Occlusal Analysis',
        'Custom Multi-Disciplinary Master Treatment Plan (Implants + Crowns + Laser)',
        'Special Full-Arch Discount of up to 20% on Total Rehabilitation',
        'Personalized Recovery Concierge & Priority Scheduling',
        'Custom 0% EMI financing plans'
      ],
      bestFor: 'Severe enamel attrition/wear, multiple missing teeth, collapsed bite, chronic jaw fatigue, severe breakdown.',
      duration: 'Phased comfortable treatment plan with temporary functional restorations',
      specialist: 'Prof. Dr. S. K. Yadav & Multi-Specialist Clinical Panel',
      whatsappMsg: 'Hi Shubh Dental! I want to claim the Limited-Time Full Mouth Rehabilitation Offer at Shubh Dental Clinic.'
    },
    {
      id: 'rct',
      title: 'Single-Sitting Painless Root Canal (RCT)',
      tagline: 'Micro-Endodontic Rotary Care to Save Your Natural Tooth Painlessly in 1 Visit',
      desc: 'Gentle, modern rotary endodontics with electronic apex locators and precision CAD/CAM zirconia crown protection.',
      icon: CheckCircle2,
      badge: 'Priority Emergency Slot',
      savingsTag: 'Same-Day Pain Relief Guarantee',
      popular: false,
      offerInclusions: [
        'Digital Radiograph (RVG) & Instant Diagnostic Mapping',
        '100% Pain-Free Treatment with Computerized Gentle Anesthesia',
        'Up to 20% Off on Premium Zirconia Ceramic Crown upon RCT Completion',
        'Same-Day Emergency Relief Slot Availability',
        '10-Year Crown Warranty against fractures'
      ],
      bestFor: 'Severe toothache, sensitivity to hot/cold, deep decay, broken tooth with nerve exposure, abscess.',
      duration: 'Typically 45–60 minutes in a single relaxed, pain-free sitting',
      specialist: 'Senior Endodontic Specialist Team',
      whatsappMsg: 'Hi Shubh Dental! I want to claim the Limited-Time Painless Root Canal & Crown Offer at Shubh Dental Clinic.'
    }
  ];

  return (
    <div className="special-offer-page">
      
      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="offer-hero-section">
        <div className="container offer-hero-grid">
          
          {/* Left Text */}
          <div className="offer-hero-left">
            <div className="offer-hero-pill">
              <Tag size={13} />
              <span>CAMPAIGN VALID FOR LIMITED SLOTS THIS MONTH</span>
            </div>

            <h1 className="offer-hero-title font-heading">
              Limited-Time Dental Care Offer
            </h1>

            <div className="offer-hero-tagline">
              Up to 20% OFF Selected Premium Dental Treatments
            </div>

            <p className="offer-hero-subhead">
              Plus a Complimentary 3D Digital Scan &amp; Consultation · In-Clinic &amp; Online Video Consult Available
            </p>

            <p className="offer-hero-desc">
              Submit your enquiry online before starting treatment to <strong>check your eligibility</strong>. Available for <strong>In-Clinic Visits in Rohtak</strong> and <strong>1-on-1 Online Video Consultations</strong> for outstation &amp; NRI patients.
            </p>

            <div className="offer-hero-ctas">
              <button onClick={openOfferModal} className="btn-offer-primary">
                <span>Claim My Offer</span>
                <ArrowRight size={17} />
              </button>

              <a href="tel:+918685048414" className="btn-offer-phone">
                <Phone size={16} />
                <span>+91 86850 48414</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="offer-trust-badges-row">
              <div className="trust-chip">
                <ShieldCheck size={14} className="chip-icon" />
                <span>Ex-PGI Chandigarh Specialists</span>
              </div>
              <div className="trust-chip">
                <Star size={14} className="chip-icon gold" />
                <span>5.0-Star Google Rating (Verified Reviews)</span>
              </div>
              <div className="trust-chip">
                <Award size={14} className="chip-icon" />
                <span>World Federation of Orthodontists (USA)</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="offer-hero-right">
            <div className="offer-image-frame">
              <div className="offer-image-badge">
                <Clock size={14} />
                <span>LIMITED SLOTS AVAILABLE</span>
              </div>
              <Image
                src="/hero-image.webp"
                alt="Shubh Orthodontic & Dental Clinic Exterior and Clinic Care"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. OFFER VALUE CARDS & HOW TO CLAIM ────────────────── */}
      <section className="section offer-details-section">
        <div className="container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 2.5rem' }}>
            <h2 className="section-title font-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
              Your Smile Starts With the Right Consultation
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Explore selected premium dental treatments with our limited-time website enquiry offer.
            </p>
          </div>

          {/* 3 Value Cards Row */}
          <div className="offer-value-cards-grid">
            
            {/* Card 1: Emerald/Terracotta Discount */}
            <div className="value-card card-dark">
              <div className="value-card-highlight">Up to 20% OFF</div>
              <p className="value-card-desc">Selected Premium Dental Treatments</p>
            </div>

            {/* Card 2: Complimentary Scan */}
            <div className="value-card card-white">
              <div className="value-card-highlight blue">Complimentary</div>
              <p className="value-card-desc">3D Digital Scan &amp; Consultation for Eligible Website Enquiries</p>
            </div>

            {/* Card 3: Validity */}
            <div className="value-card card-warm">
              <div className="value-card-icon-row">
                <Clock size={20} className="clock-icon" />
                <span className="validity-label">Valid This Month</span>
              </div>
              <p className="value-card-desc">Prior Online Reservation Required</p>
            </div>

          </div>

          {/* How to Claim Box */}
          <div className="how-to-claim-box">
            <h3 className="claim-box-title font-heading">How to Claim Your Offer</h3>
            
            <div className="claim-steps-grid">
              <div className="claim-step-item">
                <div className="step-num">1</div>
                <p className="step-text">Submit your enquiry via the form on this page or top offer button.</p>
              </div>

              <div className="claim-step-item">
                <div className="step-num">2</div>
                <p className="step-text">Our team contacts you to confirm eligibility and reserve your time slot.</p>
              </div>

              <div className="claim-step-item">
                <div className="step-num">3</div>
                <p className="step-text">Attend your consultation at our Tilak Nagar, Rohtak clinic.</p>
              </div>

              <div className="claim-step-item">
                <div className="step-num">4</div>
                <p className="step-text">The applicable discount and treatment plan is confirmed before starting.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. ELIGIBLE TREATMENTS DIRECTORY ────────────────────── */}
      <section className="section offer-treatments-section" style={{ background: '#FAF8F5' }}>
        <div className="container">
          
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <span className="section-badge badge-gold">Specialist Care Options</span>
            <h2 className="section-title font-heading" style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.4rem)' }}>
              Eligible Premium Treatments
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              All procedures are personally planned and performed by PGI-trained MDS specialists with international clinical standards.
            </p>
          </div>

          <div className="eligible-treatments-grid">
            {ELIGIBLE_TREATMENTS.map((item, idx) => (
              <div 
                key={idx} 
                className={`eligible-treatment-card ${item.popular ? 'eligible-card-popular' : ''}`}
                onClick={() => setActiveModalTreatment(item)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveModalTreatment(item); }}
              >
                {item.popular && (
                  <div className="card-popular-flag">
                    <Sparkles size={11} />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="el-card-top">
                  <div className="el-icon-wrap">
                    <item.icon size={22} />
                  </div>
                  <span className="el-badge">
                    <Tag size={12} />
                    <span>{item.badge}</span>
                  </span>
                </div>

                <h3 className="el-title font-heading">{item.title}</h3>
                <p className="el-tagline">{item.tagline}</p>
                <p className="el-desc">{item.desc}</p>
                
                <div className="el-preview-inclusions">
                  <div className="preview-inc-item">
                    <Check size={13} className="inc-check-gold" />
                    <span>{item.savingsTag}</span>
                  </div>
                  <div className="preview-inc-item">
                    <Check size={13} className="inc-check-gold" />
                    <span>0% Interest EMI Available</span>
                  </div>
                </div>

                <div className="el-card-footer">
                  <span className="el-view-details-btn">
                    <span>View Offer Inclusions</span>
                    <ArrowUpRight size={14} />
                  </span>

                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalTreatment(item);
                    }} 
                    className="el-claim-link"
                  >
                    <span>Claim Offer</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE TREATMENT OFFER DETAILS MODAL ── */}
      <AnimatePresence>
        {activeModalTreatment && (
          <div className="treatment-detail-overlay" onClick={() => setActiveModalTreatment(null)} role="dialog" aria-modal="true">
            <motion.div 
              className="treatment-detail-card" 
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.22 }}
            >
              {/* Modal Close Button */}
              <button 
                type="button" 
                className="modal-detail-close"
                onClick={() => setActiveModalTreatment(null)}
                aria-label="Close treatment details"
              >
                <X size={18} />
              </button>

              {/* Modal Top Header */}
              <div className="td-header">
                <div className="td-pill-row">
                  <span className="td-badge-pill">
                    <Tag size={12} /> {activeModalTreatment.badge}
                  </span>
                  <span className="td-specialist-pill">
                    <Stethoscope size={12} /> PGI Specialist Care
                  </span>
                </div>

                <h2 className="td-title font-heading">{activeModalTreatment.title}</h2>
                <p className="td-tagline">{activeModalTreatment.tagline}</p>
              </div>

              {/* Modal Body with Rich Marketing Tabs/Lists */}
              <div className="td-body">
                
                {/* 1. Active Campaign Savings Box */}
                <div className="td-offer-box">
                  <div className="td-offer-box-header">
                    <Gift size={18} className="td-gift-icon" />
                    <div>
                      <h4 className="td-offer-box-title">Limited-Time Campaign Inclusions</h4>
                      <p className="td-offer-box-sub">Applicable upon prior website reservation this month</p>
                    </div>
                  </div>

                  <ul className="td-inclusions-list">
                    {activeModalTreatment.offerInclusions.map((inc, i) => (
                      <li key={i} className="td-inc-item">
                        <div className="td-check-wrap">
                          <CheckCircle2 size={16} color="#10B981" />
                        </div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Clinical Intelligence & Candidacy */}
                <div className="td-info-grid">
                  <div className="td-info-block">
                    <h5 className="td-info-label">
                      <HelpCircle size={14} /> Who This Treatment is Ideal For
                    </h5>
                    <p className="td-info-text">{activeModalTreatment.bestFor}</p>
                  </div>

                  <div className="td-info-block">
                    <h5 className="td-info-label">
                      <Clock size={14} /> Expected Timeline &amp; Protocol
                    </h5>
                    <p className="td-info-text">{activeModalTreatment.duration}</p>
                  </div>
                </div>

                {/* 3. Supervising Senior Doctor */}
                <div className="td-doctor-strip">
                  <div className="td-doc-avatar">
                    <User size={18} />
                  </div>
                  <div className="td-doc-text">
                    <span className="td-doc-label">Supervising Specialist</span>
                    <strong className="td-doc-name">{activeModalTreatment.specialist}</strong>
                  </div>
                </div>

                {/* 4. High-Converting Action CTAs */}
                <div className="td-actions">
                  <a 
                    href={`https://wa.me/918685048414?text=${encodeURIComponent(activeModalTreatment.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="td-btn-wa"
                  >
                    <MessageSquare size={16} />
                    <span>Claim Offer via WhatsApp</span>
                  </a>

                  <button 
                    type="button"
                    onClick={() => handleSelectAndScroll(activeModalTreatment.title)}
                    className="td-btn-reserve"
                  >
                    <Calendar size={16} />
                    <span>Reserve in Booking Form</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <p className="td-guarantee-note">
                  🔒 100% Free Consultation · Zero Obligation · Digital Smile Assessment Included
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 4. EMBEDDED DIRECT CLAIM FORM SECTION ───────────────── */}
      <section className="section offer-form-section" id="claim-form">
        <div className="container">
          <div className="offer-form-container-card">
            <div className="form-card-header text-center">
              <span className="offer-tag-capsule">Direct Online Reservation</span>
              <h2 className="font-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
                Claim Your Limited-Time Offer Today
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                Fill out the brief form below. We will check treatment eligibility and connect with you on WhatsApp / phone call.
              </p>
            </div>

            <form onSubmit={handleClaim} className="embedded-offer-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-name">Full Name *</label>
                  <input
                    id="f-name"
                    type="text"
                    required
                    placeholder="e.g., Anjali Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="f-phone">Mobile Number *</label>
                  <input
                    id="f-phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="f-treatment">Treatment of Interest *</label>
                  <select
                    id="f-treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="Invisalign & Clear Aligners">Invisalign® & Clear Aligners</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Damon & Aesthetic Braces">Damon® & Ceramic Braces</option>
                    <option value="Smile Makeover & Porcelain Veneers">Smile Makeover & Porcelain Veneers</option>
                    <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                    <option value="Root Canal Treatment">Painless Root Canal Treatment</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="f-timing">Preferred Time Slot</label>
                  <select
                    id="f-timing"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM – 01:00 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (04:00 PM – 08:00 PM)</option>
                    <option value="Earliest Available">Earliest Available Specialist Slot</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-submit-offer">
                <span>Submit &amp; Claim Offer on WhatsApp</span>
                <ArrowRight size={18} />
              </button>

              <p className="form-terms-note">
                * Offer applicable on selected treatments following clinical assessment. Cannot be combined with other ongoing clinic packages.
              </p>
            </form>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .special-offer-page {
          background: #FCFBF8;
          min-height: 100vh;
        }

        /* ── HERO ── */
        .offer-hero-section {
          background: linear-gradient(150deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
          color: #FFFFFF;
          padding: 3.5rem 0 4rem;
          position: relative;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
        }

        .offer-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3rem;
          align-items: center;
        }

        .offer-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.22);
          border: 1px solid rgba(214, 122, 65, 0.5);
          color: #F8B482;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .offer-hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 0.75rem;
        }

        .offer-hero-tagline {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 800;
          color: #FF924A;
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }

        .offer-hero-subhead {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .offer-hero-desc {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.7;
          max-width: 580px;
          margin-bottom: 2rem;
        }

        .offer-hero-ctas {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .btn-offer-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1rem;
          padding: 0.95rem 1.8rem;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(230, 106, 31, 0.4);
          transition: all 0.25s ease;
        }
        .btn-offer-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(230, 106, 31, 0.55);
        }

        .btn-offer-phone {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.96);
          color: #110805;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 0.95rem 1.6rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-offer-phone:hover {
          background: #FFFFFF;
          transform: translateY(-2px);
        }

        .offer-trust-badges-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .trust-chip {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }
        .trust-chip .chip-icon { color: #25D366; }
        .trust-chip .chip-icon.gold { color: #F59E0B; }

        /* Right Image Frame */
        .offer-hero-right {
          position: relative;
        }
        .offer-image-frame {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          border: 2px solid rgba(214, 122, 65, 0.35);
        }
        .offer-image-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          z-index: 2;
          background: rgba(26, 12, 6, 0.92);
          backdrop-filter: blur(8px);
          color: #FFB380;
          border: 1px solid rgba(214, 122, 65, 0.45);
          padding: 0.45rem 0.9rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* ── VALUE CARDS ── */
        .offer-value-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .value-card {
          padding: 2.25rem 1.75rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 180px;
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.06);
          border: 1px solid rgba(74, 37, 24, 0.08);
          transition: transform 0.25s ease;
        }
        .value-card:hover {
          transform: translateY(-4px);
        }

        .card-dark {
          background: linear-gradient(145deg, #110805 0%, #2A150B 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #FFFFFF;
        }
        .card-dark .value-card-highlight {
          color: #FF8F4D;
          font-size: 1.85rem;
          font-weight: 900;
          font-family: var(--font-heading);
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }
        .card-dark .value-card-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .card-white {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.25);
        }
        .card-white .value-card-highlight.blue {
          color: #B85922;
          font-size: 1.85rem;
          font-weight: 900;
          font-family: var(--font-heading);
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }
        .card-white .value-card-desc {
          color: #4A3E39;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .card-warm {
          background: #FFF5EC;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
        }
        .value-card-icon-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }
        .value-card-icon-row .clock-icon { color: #D67A41; }
        .validity-label {
          font-size: 1.4rem;
          font-weight: 800;
          color: #2D1810;
          font-family: var(--font-heading);
        }
        .card-warm .value-card-desc {
          color: #6E5A50;
          font-size: 0.92rem;
          font-weight: 600;
        }

        /* ── HOW TO CLAIM ── */
        .how-to-claim-box {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 12px 35px rgba(74, 37, 24, 0.05);
        }
        .claim-box-title {
          font-size: 1.35rem;
          color: #110805;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .claim-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .claim-step-item {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .step-num {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-weight: 900;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(230, 106, 31, 0.35);
        }
        .step-text {
          font-size: 0.88rem;
          color: #4A3E39;
          line-height: 1.55;
          margin: 0;
          font-weight: 500;
        }

        /* ── ELIGIBLE TREATMENTS ── */
        .eligible-treatments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .eligible-treatment-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 24px;
          padding: 1.85rem;
          box-shadow: 0 8px 24px rgba(74, 37, 24, 0.04);
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          transition: all 0.28s ease;
          overflow: hidden;
        }
        .eligible-treatment-card:hover {
          transform: translateY(-4px);
          border-color: #D67A41;
          box-shadow: 0 16px 36px rgba(214, 122, 65, 0.16);
        }

        .eligible-card-popular {
          border-color: rgba(214, 122, 65, 0.35);
          background: linear-gradient(180deg, #FFFDFB 0%, #FFFFFF 100%);
        }

        .card-popular-flag {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 2px 8px rgba(230, 106, 31, 0.3);
        }

        .el-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .el-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FFF1E8;
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .el-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #B85922;
          background: #FFF3EB;
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
        }

        .el-title {
          font-size: 1.18rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }

        .el-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          color: #B85922;
          line-height: 1.4;
          margin-bottom: 0.65rem;
        }

        .el-desc {
          font-size: 0.86rem;
          color: #5A4840;
          line-height: 1.55;
          margin-bottom: 1.1rem;
          flex-grow: 1;
        }

        .el-preview-inclusions {
          background: #FAF7F4;
          border: 1px dashed rgba(214, 122, 65, 0.22);
          border-radius: 14px;
          padding: 0.75rem 0.85rem;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .preview-inc-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #382C26;
        }
        .inc-check-gold {
          color: #10B981;
          flex-shrink: 0;
        }

        .el-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.95rem;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
          gap: 0.5rem;
        }

        .el-view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #6E5A50;
          transition: color 0.2s ease;
        }
        .eligible-treatment-card:hover .el-view-details-btn {
          color: #B85922;
        }

        .el-claim-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, #FFF3EB 0%, #FFE8D6 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #B85922;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .el-claim-link:hover {
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          border-color: transparent;
        }

        /* ── TREATMENT DETAIL MODAL ── */
        .treatment-detail-overlay {
          position: fixed;
          inset: 0;
          background: rgba(12, 6, 3, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100002;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto;
        }

        .treatment-detail-card {
          position: relative;
          background: #FFFFFF;
          width: 100%;
          max-width: 620px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(214, 122, 65, 0.2);
          margin: auto;
          max-height: 88vh;
          display: flex;
          flex-direction: column;
        }

        .modal-detail-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }
        .modal-detail-close:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
        }

        .td-header {
          background: linear-gradient(145deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
          padding: 2.25rem 2rem 1.75rem;
          color: #FFFFFF;
          position: relative;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
          flex-shrink: 0;
        }

        .td-pill-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .td-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.5);
          color: #FFB380;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .td-specialist-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 700;
        }

        .td-title {
          font-size: clamp(1.4rem, 3.5vw, 1.85rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 0.35rem;
        }

        .td-tagline {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.45;
        }

        .td-body {
          padding: 1.75rem 2rem 2rem;
          overflow-y: auto;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .td-offer-box {
          background: linear-gradient(135deg, #FFF9F5 0%, #FFF2E8 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 18px;
          padding: 1.25rem 1.35rem;
        }

        .td-offer-box-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
        }

        .td-gift-icon {
          color: #E66A1F;
          flex-shrink: 0;
        }

        .td-offer-box-title {
          font-size: 1rem;
          font-weight: 800;
          color: #110805;
          margin: 0;
        }

        .td-offer-box-sub {
          font-size: 0.78rem;
          color: #6E5A50;
          margin: 0;
        }

        .td-inclusions-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .td-inc-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: #2D1E17;
          line-height: 1.45;
          font-weight: 600;
        }

        .td-check-wrap {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .td-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .td-info-block {
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.08);
          border-radius: 14px;
          padding: 1rem;
        }

        .td-info-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #B85922;
          margin-bottom: 0.35rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .td-info-text {
          font-size: 0.82rem;
          color: #4A3E39;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .td-doctor-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: #F4EBE1;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 12px;
          padding: 0.75rem 1rem;
        }

        .td-doc-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #D67A41;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .td-doc-text {
          display: flex;
          flex-direction: column;
        }

        .td-doc-label {
          font-size: 0.68rem;
          color: #8C6F62;
          font-weight: 700;
          text-transform: uppercase;
        }

        .td-doc-name {
          font-size: 0.84rem;
          color: #110805;
          font-weight: 800;
        }

        .td-actions {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 0.85rem;
        }

        .td-btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #25D366;
          color: #FFFFFF;
          font-size: 0.9rem;
          font-weight: 800;
          padding: 0.85rem 1.25rem;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
          transition: all 0.2s ease;
        }
        .td-btn-wa:hover {
          background: #1EBE5D;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.45);
        }

        .td-btn-reserve {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 800;
          padding: 0.85rem 1.1rem;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(230, 106, 31, 0.35);
          transition: all 0.2s ease;
        }
        .td-btn-reserve:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(230, 106, 31, 0.5);
        }

        .td-guarantee-note {
          font-size: 0.74rem;
          color: #6E5A50;
          text-align: center;
          margin: 0;
          font-weight: 600;
        }

        /* ── EMBEDDED FORM ── */
        .offer-form-section {
          background: #FCFBF8;
        }

        .offer-form-container-card {
          background: linear-gradient(145deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
          border-radius: 32px;
          padding: 3rem 2.5rem;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          max-width: 820px;
          margin: 0 auto;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
        }

        .embedded-offer-form {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-field label {
          font-size: 0.84rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .form-field input,
        .form-field select {
          padding: 0.9rem 1.1rem;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.96);
          font-size: 0.92rem;
          font-weight: 600;
          color: #110805;
          outline: none;
          font-family: inherit;
        }
        .form-field input:focus,
        .form-field select:focus {
          border-color: #FF924A;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(255, 146, 74, 0.3);
        }

        .btn-submit-offer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 800;
          padding: 1.1rem 2rem;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(230, 106, 31, 0.45);
          transition: all 0.25s ease;
          font-family: inherit;
          margin-top: 0.5rem;
        }
        .btn-submit-offer:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(230, 106, 31, 0.6);
        }

        .form-terms-note {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.65);
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .offer-hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .offer-value-cards-grid { grid-template-columns: 1fr; }
          .claim-steps-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
          .eligible-treatments-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .offer-hero-section { padding: 2.25rem 0 3rem; }
          .offer-image-frame { height: 260px; border-radius: 20px; }
          .claim-steps-grid { grid-template-columns: 1fr; }
          .eligible-treatments-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; gap: 1rem; }
          .offer-form-container-card { padding: 2rem 1.25rem; border-radius: 24px; }
        }
      `}} />
    </div>
  );
}
