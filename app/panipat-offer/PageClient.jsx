'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, CheckCircle2, Phone, Calendar, Clock, MapPin, 
  Award, ShieldCheck, ChevronDown, Check, Navigation, 
  Gift, Eye, AlertCircle, ArrowRight, Star, Flame, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToWeb3Forms } from '../lib/web3forms';
import { trackConversion, CONVERSION_EVENTS } from '../lib/conversionTracking';

export default function PanipatOfferClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Clear Invisible Aligners',
    preferredTime: 'Evening Slot: 6:30 PM - 8:00 PM',
    city: 'Panipat',
    utm_source: '',
    utm_campaign: '',
    gclid: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
    voucherCode: ''
  });

  const [faqOpen, setFaqOpen] = useState(null);

  // Capture UTM parameters for Google Ads lead tracking
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      setFormData(prev => ({
        ...prev,
        utm_source: urlParams.get('utm_source') || 'google',
        utm_campaign: urlParams.get('utm_campaign') || 'panipat_festive_offer',
        gclid: urlParams.get('gclid') || ''
      }));
    } catch (e) {}
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and 10-digit mobile number");
      return;
    }

    setFormStatus({ loading: true, success: false, error: null, voucherCode: '' });

    try {
      const generatedCode = `PANIPAT20-${Math.floor(1000 + Math.random() * 9000)}`;

      await submitToWeb3Forms({
        ...formData,
        campaign: 'Panipat Visit 20% Festive Offer',
        voucher_code: generatedCode,
        visit_date: 'Friday, 6th November (3:30 PM - 8 PM)',
        clinic_venue: "Dr. Mansi Chawla's Dental Studio, 194-L Model Town, Panipat"
      }, 'Panipat Visit 20% OFF Booking');

      try {
        trackConversion(CONVERSION_EVENTS.GENERATE_LEAD, {
          location: 'Panipat Special Offer',
          voucher: generatedCode,
          treatment: formData.treatment,
          gclid: formData.gclid
        });
      } catch (err) {
        console.warn('Analytics tracking error:', err);
      }

      setFormStatus({
        loading: false,
        success: true,
        error: null,
        voucherCode: generatedCode
      });
    } catch (err) {
      console.error(err);
      setFormStatus({
        loading: false,
        success: false,
        error: 'Unable to reserve slot right now. Please call us directly.',
        voucherCode: ''
      });
    }
  };

  const toggleFaq = (idx) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  return (
    <div className="panipat-offer-page">
      
      {/* ── 1. ULTRA-COMPACT SLIM URGENCY TICKER ── */}
      <div className="panipat-ticker-compact">
        <div className="ticker-capsule">
          <span className="ticker-live-dot" />
          <span className="ticker-title">Panipat OPD • Friday 6 Nov (3:30 - 8 PM)</span>
          <span className="ticker-sep">|</span>
          <span className="ticker-off">Flat 20% OFF Aligners &amp; Braces</span>
          <a href="#book-slot" className="ticker-action">Claim &rarr;</a>
        </div>
      </div>

      {/* ── 2. HERO + INTEGRATED HIGH-IMPACT DOCTOR CARD (COMPACT & DENSE) ── */}
      <section className="panipat-hero-compact">
        {/* Ambient Subtle Luminous Aurora & Sparkles */}
        <div className="hero-aurora-bg" aria-hidden="true">
          <div className="aurora-light light-1" />
          <div className="aurora-light light-2" />
          <div className="fx-aurora-beam" />
          <div className="fx-shimmer-grid" />
          
          {/* Twinkling Golden Sparkles */}
          <span className="fx-sparkle p1" />
          <span className="fx-sparkle p2" />
          <span className="fx-sparkle p3" />
          <span className="fx-sparkle p4" />
          <span className="fx-sparkle p5" />
          <span className="fx-sparkle p6" />
        </div>

        <div className="panipat-container">

          {/* Top Pill Tag */}
          <motion.div 
            className="panipat-eyebrow-compact"
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={12} className="sparkle-gold animate-spin-slow" />
            <span>FESTIVE SMILE FESTIVAL • MODEL TOWN PANIPAT</span>
          </motion.div>

          {/* Main Headline with Glow Animation */}
          <motion.h1 
            className="panipat-hero-h1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            World-Class Orthodontic Care is Coming to <span className="panipat-copper-text glow-text-fx">Panipat!</span>
          </motion.h1>

          {/* COMPACT DOCTOR & OFFER SPOTLIGHT CARD */}
          <motion.div 
            className="doctor-spotlight-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            
            <div className="spotlight-top">
              {/* Doctor Avatar with Verified Border & Subtle Breathing Aura */}
              <div className="spotlight-avatar-box">
                <Image
                  src="/dr-sk-yadav.webp"
                  alt="Prof. Dr. S. K. Yadav - Senior Orthodontist"
                  width={84}
                  height={98}
                  className="spotlight-photo"
                  priority
                />
                <span className="spotlight-verified-badge">PGI Alum</span>
                <div className="avatar-pulse-ring" />
              </div>

              {/* Doctor Credentials */}
              <div className="spotlight-info">
                <div className="spotlight-premier-tag">
                  <Award size={12} />
                  <span>Haryana&apos;s Premier Orthodontist</span>
                </div>
                <h2 className="spotlight-doc-name">Prof. Dr. S. K. Yadav</h2>
                <p className="spotlight-doc-degrees">
                  MDS Orthodontics • Ex-PGI Chandigarh SR • Fellow WFO (USA)
                </p>
                <div className="spotlight-stats-row">
                  <span className="spot-stat">🏆 20+ Yrs Exp</span>
                  <span className="spot-stat">✨ 5,000+ Braces &amp; Aligners</span>
                </div>
              </div>
            </div>

            {/* INTEGRATED 20% CONCESSION RIBBON WITH ANIMATED SHIMMER LIGHT */}
            <div className="offer-ribbon-integrated">
              <div className="ribbon-animated-light" />
              <div className="ribbon-text">
                <span className="ribbon-tag">FESTIVE EXCLUSIVE</span>
                <strong>Flat 20% OFF on Clear Aligners &amp; Braces</strong>
              </div>
              <a href="#book-slot" className="btn-ribbon-cta pulse-cta-btn">
                <span>Lock 20% OFF</span>
                <ArrowRight size={13} className="arrow-wiggle" />
              </a>
            </div>

            {/* COMPACT LOGISTICS CHIPS */}
            <div className="spotlight-chips-grid">
              <div className="spot-chip">
                <Calendar size={14} className="chip-icon gold" />
                <div>
                  <strong>Friday, 6th November</strong>
                  <span>3:30 PM - 8:00 PM Only</span>
                </div>
              </div>
              <div className="spot-chip">
                <MapPin size={14} className="chip-icon copper" />
                <div>
                  <strong>Dr. Mansi Chawla Dental Studio</strong>
                  <span>194-L, Model Town, Panipat</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ── 3. HIGH-CONVERTING LEAD FORM SECTION (BEAUTIFUL, COMPACT & FLOATING) ── */}
      <section id="book-slot" className="panipat-form-section">
        <div className="panipat-container form-wrapper">

          <div className="luxury-lead-card">
            
            {/* Form Top Branding Header */}
            <div className="lead-card-header">
              <div className="lead-header-badges">
                <span className="slot-date-chip">
                  <Clock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  Fri, 6 Nov • 3:30 - 8 PM
                </span>
                <span className="lock-discount-pill">
                  <Flame size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 3 }} />
                  20% CONCESSION ACTIVE
                </span>
              </div>
              <h3 className="lead-card-title">Book Consultation Slot</h3>
              <p className="lead-card-sub">Reserve slot for ₹0 • Get Flat 20% OFF + Free 3D Digital Scan</p>
            </div>

            {formStatus.success ? (
              <div className="form-success-compact">
                <div className="success-check-bubble">
                  <CheckCircle2 size={34} />
                </div>
                <h4>Slot Reserved Successfully!</h4>
                <p>Our Panipat coordinator will contact you to confirm your exact appointment hour for Friday, 6th Nov.</p>
                
                <div className="voucher-coupon-box">
                  <span className="coupon-title">YOUR 20% VOUCHER PASS</span>
                  <span className="coupon-number">{formStatus.voucherCode}</span>
                  <span className="coupon-note">Show this code on arrival at Model Town clinic</span>
                </div>

                <a href="tel:+918685048414" className="btn-instant-call-success">
                  <Phone size={15} />
                  <span>Call Reception (+91 86850 48414)</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="lead-form-compact">
                {formStatus.error && (
                  <div className="form-error-toast">
                    <AlertCircle size={15} />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                <div className="lead-input-group">
                  <label htmlFor="lead-name">Patient Full Name <span className="req">*</span></label>
                  <input
                    id="lead-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter full name"
                    className="lead-field"
                  />
                </div>

                <div className="lead-input-group">
                  <label htmlFor="lead-phone">WhatsApp / Mobile Number <span className="req">*</span></label>
                  <div className="phone-prefix-wrap">
                    <span className="prefix-tag">+91</span>
                    <input
                      id="lead-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="10-digit mobile number"
                      className="lead-field phone-field"
                    />
                  </div>
                </div>

                <div className="lead-grid-row">
                  <div className="lead-input-group">
                    <label htmlFor="lead-treatment">Treatment Needed</label>
                    <select
                      id="lead-treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="lead-field select-field"
                    >
                      <option value="Clear Invisible Aligners">Clear Invisible Aligners (Invisalign / 3D Trays)</option>
                      <option value="Ceramic Tooth-Colored Braces">Ceramic Tooth-Colored Braces (Aesthetic)</option>
                      <option value="Self-Ligating Braces (Damon System)">Self-Ligating Braces (Damon System - Low Pain)</option>
                      <option value="Traditional Metal Braces">Traditional Metal Braces (Fast &amp; High Durability)</option>
                      <option value="Lingual Invisible Braces">Lingual Braces (Fitted Behind the Teeth)</option>
                      <option value="Doctor Advice (Braces vs Aligners)">Not Sure (Doctor Consultation &amp; 3D Scan)</option>
                    </select>
                  </div>

                  <div className="lead-input-group">
                    <label htmlFor="lead-time">Preferred Slot (6 Nov)</label>
                    <select
                      id="lead-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="lead-field select-field"
                    >
                      <option value="3:30 PM - 5:00 PM">Early (3:30 - 5:00 PM)</option>
                      <option value="5:00 PM - 6:30 PM">Prime (5:00 - 6:30 PM)</option>
                      <option value="6:30 PM - 8:00 PM">Evening (6:30 - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="btn-submit-lead-shimmer"
                >
                  {formStatus.loading ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <Gift size={17} />
                      <span>Claim 20% OFF Slot for 6th Nov</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <div className="lead-footer-row">
                  <span className="trust-indicator">
                    <ShieldCheck size={13} className="trust-shield" />
                    <span>100% Privacy • Zero Spam</span>
                  </span>
                  <span className="scarcity-indicator">
                    ⚡ Only 12 Slots Left
                  </span>
                </div>
              </form>
            )}

            {/* Quick Call Desk Link */}
            <div className="lead-quick-desk">
              <span>Need instant confirmation?</span>
              <a href="tel:+918685048414" className="quick-call-anchor">
                <Phone size={12} />
                <span>Call +91 86850 48414</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. ALL TYPES OF BRACES & ALIGNERS (OFFER ELIGIBLE) ── */}
      <section className="treatments-compact-section">
        <div className="panipat-container">
          <div className="section-head-compact text-center">
            <span className="pill-badge-tiny">ALL 5 ORTHODONTIC SYSTEMS ELIGIBLE</span>
            <h3 className="section-title-compact">Flat 20% Festive Off on All Braces &amp; Aligners</h3>
            <p className="section-subtitle-compact">Get treated by PGI Specialist Dr. S. K. Yadav with customized treatment planning</p>
          </div>

          <div className="treatments-grid-compact">
            {/* Card 1: Clear Aligners */}
            <div className="treatment-tile copper-tile">
              <div className="tile-corner-badge">20% OFF</div>
              <div className="tile-icon-box">
                <Eye size={20} />
              </div>
              <div className="tile-body">
                <div className="tile-badge-line">Most Popular &amp; Discreet</div>
                <h4 className="tile-heading">Clear Invisible Aligners</h4>
                <p className="tile-summary">
                  Custom transparent 3D trays (Invisalign® &amp; SkyAlign™). Zero metal wires, zero food restrictions, 100% camera-ready.
                </p>
                <div className="tile-perks">
                  <span>✔ 100% Invisible</span>
                  <span>✔ Eat Freely</span>
                  <span>✔ 3D Simulation</span>
                </div>
              </div>
            </div>

            {/* Card 2: Ceramic Tooth-Colored Braces */}
            <div className="treatment-tile mahogany-tile">
              <div className="tile-corner-badge">20% OFF</div>
              <div className="tile-icon-box">
                <Sparkles size={20} />
              </div>
              <div className="tile-body">
                <div className="tile-badge-line">Aesthetic &amp; Natural</div>
                <h4 className="tile-heading">Ceramic Tooth-Colored Braces</h4>
                <p className="tile-summary">
                  Polycrystalline translucent ceramic brackets that blend naturally with tooth enamel. High aesthetic appeal with fixed power.
                </p>
                <div className="tile-perks">
                  <span>✔ Natural Look</span>
                  <span>✔ Stain Resistant</span>
                  <span>✔ High Accuracy</span>
                </div>
              </div>
            </div>

            {/* Card 3: Self-Ligating Braces (Damon System) */}
            <div className="treatment-tile gold-tile">
              <div className="tile-corner-badge">20% OFF</div>
              <div className="tile-icon-box">
                <Zap size={20} />
              </div>
              <div className="tile-body">
                <div className="tile-badge-line">Faster &amp; Low Pain</div>
                <h4 className="tile-heading">Self-Ligating Braces (Damon® System)</h4>
                <p className="tile-summary">
                  Advanced slide mechanism eliminates friction and tight elastic ties. Quicker tooth movement with minimal discomfort.
                </p>
                <div className="tile-perks">
                  <span>✔ 4-6 Months Faster</span>
                  <span>✔ Minimal Discomfort</span>
                  <span>✔ Easy Cleaning</span>
                </div>
              </div>
            </div>

            {/* Card 4: Traditional Metal Braces */}
            <div className="treatment-tile earth-tile">
              <div className="tile-corner-badge">20% OFF</div>
              <div className="tile-icon-box">
                <Award size={20} />
              </div>
              <div className="tile-body">
                <div className="tile-badge-line">Gold Standard Durability</div>
                <h4 className="tile-heading">Traditional Precision Metal Braces</h4>
                <p className="tile-summary">
                  Medical-grade stainless steel brackets offering maximum mechanical control for severe crowding, deep overbites, and rotations.
                </p>
                <div className="tile-perks">
                  <span>✔ Maximum Strength</span>
                  <span>✔ Budget Friendly</span>
                  <span>✔ Severe Cases</span>
                </div>
              </div>
            </div>

            {/* Card 5: Lingual (Behind-the-Teeth) Braces */}
            <div className="treatment-tile dark-tile span-full-desktop">
              <div className="tile-corner-badge">20% OFF</div>
              <div className="tile-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div className="tile-body">
                <div className="tile-badge-line">100% Completely Hidden</div>
                <h4 className="tile-heading">Lingual Braces (Inside / Behind-the-Teeth)</h4>
                <p className="tile-summary">
                  Bonded to the inner lingual surface of your teeth. Completely invisible from the outside, even when speaking up close.
                </p>
                <div className="tile-perks">
                  <span>✔ Zero Outside Visibility</span>
                  <span>✔ Custom Lingual Fit</span>
                  <span>✔ Executive Choice</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. CLINICAL BEFORE & AFTER PROOF ── */}
      <section className="results-compact-section">
        <div className="panipat-container">
          <div className="section-head-compact text-center">
            <span className="pill-badge-tiny">PROVEN RESULTS</span>
            <h3 className="section-title-compact">Smile Transformations by Dr. S. K. Yadav</h3>
          </div>

          <div className="results-strip">
            <div className="result-mini-card">
              <div className="result-img-box">
                <Image src="/Pre Post/IMG-20260904-WA0088.jpg" alt="Severe Crowding smile correction" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="result-label">Severe Crowding</div>
              <span className="result-status">100% Corrected</span>
            </div>

            <div className="result-mini-card">
              <div className="result-img-box">
                <Image src="/Pre Post/IMG-20260904-WA0089.jpg" alt="Teeth spacing aligner result" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="result-label">Spacing &amp; Gaps</div>
              <span className="result-status">Seamless Closure</span>
            </div>

            <div className="result-mini-card">
              <div className="result-img-box">
                <Image src="/Pre Post/IMG-20260904-WA0090.jpg" alt="Deep overbite correction result" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="result-label">Deep Overbite</div>
              <span className="result-status">Bite Restored</span>
            </div>

            <div className="result-mini-card">
              <div className="result-img-box">
                <Image src="/Pre Post/IMG-20260904-WA0091.jpg" alt="Forward teeth profile aligner correction" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="result-label">Forward Teeth</div>
              <span className="result-status">Ideal Profile</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PANIPAT LOCATION BAR ── */}
      <section className="location-compact-section">
        <div className="panipat-container form-wrapper">
          <div className="location-bar-card">
            <div className="location-bar-text">
              <div className="loc-hub-line">
                <span className="hub-pulse-dot" />
                <span>Panipat Regional Consultation Hub</span>
              </div>
              <h4 className="loc-clinic-name">Dr. Mansi Chawla&apos;s Dental Studio</h4>
              <p className="loc-clinic-geo">194-L, Model Town, Panipat 132103 (Near Main Market, Dedicated Parking)</p>
            </div>
            <a
              href="https://maps.app.goo.gl/JqcrHdkJ9Nkymnf46?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-action"
            >
              <Navigation size={14} />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ACCORDION ── */}
      <section className="faq-compact-section">
        <div className="panipat-container form-wrapper">
          <h4 className="faq-title-compact text-center">Frequently Asked Questions</h4>

          <div className="faq-accordion-box">
            {[
              {
                q: "Which treatments qualify for the Flat 20% OFF?",
                a: "The 20% festive concession applies specifically to Clear Aligners (Invisalign & 3D custom trays) and Aesthetic Dental Braces (Ceramic & Damon) when consulted during the Panipat visit."
              },
              {
                q: "What is the consultation date & venue in Panipat?",
                a: "Prof. Dr. S. K. Yadav will consult on Friday, 6th November (3:30 PM to 8:00 PM) at Dr. Mansi Chawla's Dental Studio, 194-L, Model Town, Panipat."
              },
              {
                q: "Do I have to pay anything right now online?",
                a: "No! Consultation slot booking is completely free. Your 20% discount code will be assigned to your phone number for on-clinic redemption."
              }
            ].map((item, idx) => (
              <div key={idx} className="faq-item-row">
                <button type="button" onClick={() => toggleFaq(idx)} className="faq-toggle-btn">
                  <span>{item.q}</span>
                  <ChevronDown size={15} className={`faq-chevron ${faqOpen === idx ? 'rotated' : ''}`} />
                </button>
                {faqOpen === idx && (
                  <div className="faq-expand-content">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="panipat-footer-compact">
        <p><strong>Shubh Orthodontic &amp; Dental Clinic</strong> • Panipat Partner: Dr. Mansi Chawla Dental Studio</p>
        <p className="footer-sub-text">Opposite Agro Mall Rohtak &amp; Model Town Panipat • © {new Date().getFullYear()}</p>
      </footer>

      {/* ── MOBILE STICKY FLOATING BOTTOM BAR ── */}
      <div className="panipat-sticky-bar-compact">
        <a href="tel:+918685048414" className="sticky-btn-call">
          <Phone size={14} />
          <span>Call Desk</span>
        </a>
        <a href="#book-slot" className="sticky-btn-claim">
          <Gift size={14} />
          <span>Claim 20% OFF Slot</span>
        </a>
      </div>

      {/* ── COMPACT HIGH-PERFORMANCE SCOPED CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide intrusive floating badges & bottom bars on this campaign page */
        body:has(.panipat-offer-page) .inav-wrapper,
        body:has(.panipat-offer-page) .whatsapp-fab,
        body:has(.panipat-offer-page) .floating-offer-badge-wrap,
        body:has(.panipat-offer-page) .floating-badge-btn,
        body:has(.panipat-offer-page) .elite-floater-root,
        body:has(.panipat-offer-page) .mobile-bottom-bar {
          display: none !important;
        }

        .panipat-offer-page {
          background-color: #FAF8F5;
          color: #1F100B;
          font-family: var(--font-body, 'Plus Jakarta Sans'), sans-serif;
          min-height: 100vh;
          padding-bottom: 75px;
          overflow-x: hidden;
          position: relative;
        }

        .panipat-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 0.85rem;
          position: relative;
          z-index: 2;
        }
        .form-wrapper {
          max-width: 520px;
        }

        /* ── 1. COMPACT SLIM TICKER ── */
        .panipat-ticker-compact {
          background: linear-gradient(90deg, #1A0D08 0%, #2A150B 50%, #1A0D08 100%);
          border-bottom: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.35rem 0.65rem;
          text-align: center;
          font-size: 0.74rem;
        }
        .ticker-capsule {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #F4EBE1;
          flex-wrap: wrap;
          justify-content: center;
        }
        .ticker-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          display: inline-block;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
          animation: pulseGreen 1.6s infinite;
        }
        .ticker-title {
          font-weight: 700;
          color: #EAA77C;
        }
        .ticker-sep {
          color: rgba(255, 255, 255, 0.25);
        }
        .ticker-off {
          font-weight: 600;
          color: #FFFFFF;
        }
        .ticker-action {
          color: #EAA77C;
          font-weight: 800;
          text-decoration: underline;
          margin-left: 0.2rem;
        }

        /* ── 2. HERO COMPACT ── */
        .panipat-hero-compact {
          padding: 1.15rem 0 0.85rem;
          text-align: center;
          position: relative;
          background: radial-gradient(circle at 50% 0%, #FFF5ED 0%, #FAF8F5 75%);
        }
        .hero-aurora-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }
        .aurora-light {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.38;
          animation: auroraFloat 9s infinite alternate ease-in-out;
        }
        .light-1 {
          width: 280px;
          height: 280px;
          background: #EAA77C;
          top: -15%;
          left: 12%;
        }
        .light-2 {
          width: 240px;
          height: 240px;
          background: #F4A261;
          top: 15%;
          right: 10%;
          animation-delay: -3.5s;
        }
        @keyframes auroraFloat {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.18) translateY(18px); }
        }

        /* Diagonal Luxury Beam & Shimmer Grid */
        .fx-aurora-beam {
          position: absolute;
          top: -35%;
          left: -15%;
          width: 130%;
          height: 110%;
          background: linear-gradient(115deg, transparent 20%, rgba(255, 180, 120, 0.08) 45%, rgba(214, 122, 65, 0.12) 50%, rgba(230, 106, 31, 0.08) 55%, transparent 80%);
          transform: rotate(-15deg);
          animation: auroraWave 8s ease-in-out infinite alternate;
          filter: blur(25px);
          pointer-events: none;
        }
        .fx-shimmer-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(214, 122, 65, 0.1) 1.2px, transparent 1.2px);
          background-size: 26px 26px;
          opacity: 0.7;
          pointer-events: none;
        }
        .fx-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFF;
          border-radius: 50%;
          box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.8), 0 0 16px 4px rgba(214, 122, 65, 0.5);
          animation: sparkleTwinkle 3.2s ease-in-out infinite;
          pointer-events: none;
        }
        .fx-sparkle.p1 { top: 12%; left: 16%; animation-delay: 0s; }
        .fx-sparkle.p2 { top: 22%; right: 14%; animation-delay: 0.8s; }
        .fx-sparkle.p3 { top: 50%; left: 8%; animation-delay: 1.6s; }
        .fx-sparkle.p4 { top: 68%; right: 10%; animation-delay: 2.2s; }
        .fx-sparkle.p5 { top: 35%; left: 22%; animation-delay: 0.5s; width: 5px; height: 5px; }
        .fx-sparkle.p6 { top: 78%; right: 24%; animation-delay: 1.2s; }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1.3) translateY(-6px); }
        }
        @keyframes auroraWave {
          0% { transform: rotate(-15deg) translateY(-15px) scale(0.98); opacity: 0.6; }
          100% { transform: rotate(-10deg) translateY(20px) scale(1.04); opacity: 0.95; }
        }

        .panipat-eyebrow-compact {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFF3EB;
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #B85922;
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.04em;
          margin-bottom: 0.45rem;
          box-shadow: 0 2px 6px rgba(214, 122, 65, 0.08);
          animation: floatTag 3s ease-in-out infinite alternate;
        }
        @keyframes floatTag {
          0% { transform: translateY(0); }
          100% { transform: translateY(-3px); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sparkle-gold {
          color: #D67A41;
        }
        .panipat-hero-h1 {
          font-size: clamp(1.35rem, 3.8vw, 2.1rem);
          font-weight: 900;
          color: #1F100B;
          line-height: 1.2;
          margin: 0 0 0.85rem;
          letter-spacing: -0.02em;
        }
        .panipat-copper-text {
          background: linear-gradient(135deg, #B85922 0%, #D67A41 55%, #8C3B14 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glow-text-fx {
          text-shadow: 0 0 20px rgba(214, 122, 65, 0.25);
        }

        /* ── DOCTOR SPOTLIGHT CARD (ALL-IN-ONE COMPACT) ── */
        .doctor-spotlight-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          border-radius: 20px;
          padding: 1rem 1.15rem;
          text-align: left;
          box-shadow: 0 8px 24px rgba(74, 37, 24, 0.06);
          position: relative;
        }
        .spotlight-top {
          display: flex;
          align-items: center;
          gap: 0.95rem;
        }
        .spotlight-avatar-box {
          width: 82px;
          height: 96px;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid #D67A41;
          flex-shrink: 0;
          background: #FFF3EB;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.18);
          position: relative;
        }
        .avatar-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          border: 1.5px solid rgba(214, 122, 65, 0.45);
          animation: avatarPulse 2.5s infinite;
          pointer-events: none;
        }
        @keyframes avatarPulse {
          0% { transform: scale(0.96); opacity: 0.8; }
          50% { transform: scale(1.04); opacity: 0.2; }
          100% { transform: scale(0.96); opacity: 0.8; }
        }
        .spotlight-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .spotlight-verified-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(31, 16, 11, 0.88);
          color: #EAA77C;
          font-size: 0.58rem;
          font-weight: 850;
          text-align: center;
          padding: 0.12rem 0;
          letter-spacing: 0.04em;
        }
        .spotlight-info {
          flex: 1;
          min-width: 0;
        }
        .spotlight-premier-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #065F46;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          margin-bottom: 0.25rem;
        }
        .spotlight-doc-name {
          font-size: 1.15rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0;
          line-height: 1.2;
        }
        .spotlight-doc-degrees {
          font-size: 0.74rem;
          color: #7A4E39;
          font-weight: 600;
          margin: 0.2rem 0 0.4rem;
          line-height: 1.3;
        }
        .spotlight-stats-row {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .spot-stat {
          background: #F4EBE1;
          color: #4A2518;
          font-size: 0.68rem;
          font-weight: 750;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
        }

        /* INTEGRATED OFFER RIBBON */
        .offer-ribbon-integrated {
          background: linear-gradient(135deg, #1F100B 0%, #361A10 50%, #24120B 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          border-radius: 14px;
          padding: 0.65rem 0.85rem;
          margin: 0.85rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          box-shadow: 0 4px 14px rgba(31, 16, 11, 0.18);
          position: relative;
          overflow: hidden;
        }
        .ribbon-animated-light {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.18), transparent);
          transform: skewX(-25deg);
          animation: lightSweep 4.5s infinite;
        }
        @keyframes lightSweep {
          0% { left: -100%; }
          30%, 100% { left: 200%; }
        }
        .pulse-cta-btn {
          animation: subtlePulseBtn 2.8s infinite;
        }
        @keyframes subtlePulseBtn {
          0%, 100% { box-shadow: 0 2px 8px rgba(214, 122, 65, 0.35); }
          50% { box-shadow: 0 4px 18px rgba(214, 122, 65, 0.7); }
        }
        .arrow-wiggle {
          transition: transform 0.2s;
        }
        .btn-ribbon-cta:hover .arrow-wiggle {
          transform: translateX(4px);
        }
        .ribbon-text {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .ribbon-tag {
          font-size: 0.6rem;
          font-weight: 900;
          color: #EAA77C;
          letter-spacing: 0.04em;
        }
        .ribbon-text strong {
          font-size: 0.88rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .btn-ribbon-cta {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          font-weight: 850;
          font-size: 0.76rem;
          padding: 0.5rem 0.95rem;
          border-radius: 99px;
          text-decoration: none;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.35);
          transition: transform 0.2s;
        }
        .btn-ribbon-cta:hover {
          transform: translateY(-1px);
        }

        /* SPOTLIGHT LOGISTICS CHIPS */
        .spotlight-chips-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
          border-top: 1px solid #F4EBE1;
          padding-top: 0.75rem;
        }
        @media (max-width: 520px) {
          .spotlight-chips-grid {
            grid-template-columns: 1fr;
          }
        }
        .spot-chip {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: #FCFBF8;
          border: 1px solid rgba(214, 122, 65, 0.18);
          padding: 0.55rem 0.65rem;
          border-radius: 10px;
        }
        .chip-icon {
          flex-shrink: 0;
        }
        .chip-icon.gold { color: #B85922; }
        .chip-icon.copper { color: #D67A41; }
        .spot-chip strong {
          display: block;
          font-size: 0.74rem;
          font-weight: 850;
          color: #1F100B;
          line-height: 1.2;
        }
        .spot-chip span {
          display: block;
          font-size: 0.68rem;
          color: #7A6054;
          line-height: 1.2;
        }

        /* ── 3. BEAUTIFUL LEAD FORM (DENSE & ENGAGING) ── */
        .panipat-form-section {
          padding: 0.75rem 0 1.25rem;
        }
        .luxury-lead-card {
          background: #FFFFFF;
          border: 2px solid #D67A41;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(74, 37, 24, 0.12);
        }
        .lead-card-header {
          background: linear-gradient(145deg, #1A0D08 0%, #2E170F 50%, #1F100B 100%);
          color: #FFFFFF;
          padding: 1.15rem 1.25rem 1rem;
          text-align: center;
          border-bottom: 2px solid #D67A41;
        }
        .lead-header-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-bottom: 0.35rem;
          flex-wrap: wrap;
        }
        .slot-date-chip {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-size: 0.66rem;
          font-weight: 800;
          padding: 0.18rem 0.55rem;
          border-radius: 99px;
        }
        .lock-discount-pill {
          background: #D67A41;
          color: #FFFFFF;
          font-size: 0.64rem;
          font-weight: 900;
          padding: 0.18rem 0.55rem;
          border-radius: 99px;
          letter-spacing: 0.04em;
        }
        .lead-card-title {
          font-size: 1.22rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .lead-card-sub {
          font-size: 0.76rem;
          color: #EAA77C;
          margin-top: 0.25rem;
          font-weight: 500;
        }

        .lead-form-compact {
          padding: 1.15rem 1.25rem;
        }
        @media (max-width: 480px) {
          .lead-form-compact {
            padding: 1rem 0.85rem;
          }
        }
        .lead-input-group {
          margin-bottom: 0.85rem;
        }
        .lead-input-group label {
          display: block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #37231B;
          margin-bottom: 0.3rem;
        }
        .lead-input-group label .req {
          color: #D67A41;
        }
        .lead-field {
          width: 100%;
          font-size: 0.86rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          border: 1.5px solid #E5DCD3;
          background: #FCFBF8;
          color: #1F100B;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .phone-prefix-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .prefix-tag {
          position: absolute;
          left: 0.75rem;
          font-size: 0.84rem;
          font-weight: 850;
          color: #8A7063;
          pointer-events: none;
        }
        .phone-field {
          padding-left: 2.5rem;
        }
        .lead-field:focus {
          border-color: #D67A41;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(214, 122, 65, 0.15);
        }
        .lead-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        @media (max-width: 480px) {
          .lead-grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        /* HIGH-CONVERTING CTA BUTTON WITH SHIMMER */
        .btn-submit-lead-shimmer {
          width: 100%;
          background: linear-gradient(135deg, #4A2518 0%, #2A150B 100%);
          color: #FFFFFF;
          font-size: 0.92rem;
          font-weight: 900;
          padding: 0.82rem;
          border: 1.5px solid #D67A41;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 0.35rem;
          box-shadow: 0 6px 18px rgba(74, 37, 24, 0.22);
          transition: all 0.25s ease;
        }
        .btn-submit-lead-shimmer:hover {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.4);
        }
        .lead-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.7rem;
          color: #8A7063;
          margin-top: 0.65rem;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .trust-indicator {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .trust-shield {
          color: #10B981;
        }
        .scarcity-indicator {
          font-weight: 850;
          color: #B85922;
        }
        .lead-quick-desk {
          border-top: 1px solid #F4EBE1;
          padding: 0.75rem 1.25rem;
          text-align: center;
          background: #FAF8F5;
          font-size: 0.74rem;
          color: #6E5346;
        }
        .quick-call-anchor {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #059669;
          font-weight: 850;
          text-decoration: underline;
          margin-left: 0.35rem;
        }

        /* SUCCESS STATE */
        .form-success-compact {
          padding: 1.75rem 1.25rem;
          text-align: center;
        }
        .success-check-bubble {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.65rem;
        }
        .form-success-compact h4 {
          font-size: 1.18rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.25rem;
        }
        .form-success-compact p {
          font-size: 0.78rem;
          color: #6E5346;
          max-width: 360px;
          margin: 0 auto 1rem;
        }
        .voucher-coupon-box {
          background: #FFF3EB;
          border: 1.5px dashed #D67A41;
          border-radius: 14px;
          padding: 0.85rem;
          max-width: 270px;
          margin: 0 auto 1.15rem;
        }
        .coupon-title {
          display: block;
          font-size: 0.66rem;
          font-weight: 900;
          color: #B85922;
          text-transform: uppercase;
        }
        .coupon-number {
          display: block;
          font-family: monospace;
          font-size: 1.25rem;
          font-weight: 900;
          color: #1F100B;
          letter-spacing: 0.05em;
          margin: 0.2rem 0;
        }
        .coupon-note {
          display: block;
          font-size: 0.65rem;
          color: #7A4E39;
        }
        .btn-instant-call-success {
          background: #059669;
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 850;
          padding: 0.75rem 1.25rem;
          border-radius: 99px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* ── 4. TREATMENTS COMPACT ── */
        .treatments-compact-section {
          padding: 1.25rem 0 0.85rem;
        }
        .section-head-compact {
          margin-bottom: 0.85rem;
        }
        .pill-badge-tiny {
          background: #FFF3EB;
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #B85922;
          font-size: 0.64rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          padding: 0.15rem 0.55rem;
          border-radius: 99px;
          text-transform: uppercase;
        }
        .section-title-compact {
          font-size: 1.1rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0.25rem 0 0;
        }
        .section-subtitle-compact {
          font-size: 0.76rem;
          color: #7A6054;
          margin: 0.2rem 0 0;
        }
        .treatments-grid-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        @media (max-width: 580px) {
          .treatments-grid-compact {
            grid-template-columns: 1fr;
          }
        }
        .treatment-tile {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 0.95rem;
          position: relative;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
          display: flex;
          gap: 0.75rem;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .treatment-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(74, 37, 24, 0.08);
        }
        .copper-tile { border: 1.5px solid #EAA77C; }
        .mahogany-tile { border: 1.5px solid #D67A41; }
        .gold-tile { border: 1.5px solid #EAB308; }
        .earth-tile { border: 1.5px solid #B45309; }
        .dark-tile { border: 1.5px solid #4A2518; background: #FCFBF8; }
        @media (min-width: 581px) {
          .span-full-desktop {
            grid-column: span 2;
          }
        }
        .tile-corner-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #D67A41;
          color: #FFFFFF;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 0.2rem 0.6rem;
          border-bottom-left-radius: 10px;
          letter-spacing: 0.03em;
        }
        .tile-badge-line {
          font-size: 0.62rem;
          font-weight: 850;
          color: #B85922;
          text-transform: uppercase;
          margin-bottom: 0.15rem;
        }
        .tile-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #FFF3EB;
          color: #B85922;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tile-body {
          flex: 1;
        }
        .tile-heading {
          font-size: 0.94rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.25rem;
          line-height: 1.25;
        }
        .tile-summary {
          font-size: 0.74rem;
          color: #6E5346;
          line-height: 1.4;
          margin: 0 0 0.45rem;
        }
        .tile-perks {
          display: flex;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: #37231B;
          flex-wrap: wrap;
        }

        /* ── 5. RESULTS STRIP ── */
        .results-compact-section {
          padding: 1.15rem 0;
        }
        .results-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.6rem;
        }
        @media (max-width: 600px) {
          .results-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .result-mini-card {
          background: #FFFFFF;
          border: 1px solid #E5DCD3;
          border-radius: 12px;
          padding: 0.45rem;
          text-align: center;
        }
        .result-img-box {
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          background: #FAF8F5;
          margin-bottom: 0.35rem;
        }
        .result-label {
          font-size: 0.72rem;
          font-weight: 850;
          color: #1F100B;
          line-height: 1.2;
        }
        .result-status {
          font-size: 0.64rem;
          font-weight: 750;
          color: #059669;
        }

        /* ── 6. LOCATION BAR ── */
        .location-compact-section {
          padding: 0.65rem 0 1.15rem;
        }
        .location-bar-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          border-radius: 16px;
          padding: 0.95rem 1.15rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
        }
        @media (max-width: 520px) {
          .location-bar-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .btn-map-action {
            width: 100%;
            justify-content: center;
          }
        }
        .loc-hub-line {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.66rem;
          font-weight: 850;
          color: #B85922;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }
        .hub-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          display: inline-block;
          animation: pulseGreen 1.6s infinite;
        }
        .loc-clinic-name {
          font-size: 0.94rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0;
        }
        .loc-clinic-geo {
          font-size: 0.74rem;
          color: #6E5346;
          margin: 0.2rem 0 0;
        }
        .btn-map-action {
          background: #FFF3EB;
          border: 1.5px solid #D67A41;
          color: #B85922;
          font-size: 0.76rem;
          font-weight: 850;
          padding: 0.5rem 0.95rem;
          border-radius: 99px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .btn-map-action:hover {
          background: #D67A41;
          color: #FFFFFF;
        }

        /* ── 7. FAQ COMPACT ── */
        .faq-compact-section {
          padding: 0.85rem 0 1.5rem;
        }
        .faq-title-compact {
          font-size: 1.05rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.75rem;
        }
        .faq-accordion-box {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .faq-item-row {
          background: #FFFFFF;
          border: 1px solid #E5DCD3;
          border-radius: 12px;
          overflow: hidden;
        }
        .faq-toggle-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 0.75rem 0.95rem;
          text-align: left;
          font-size: 0.78rem;
          font-weight: 800;
          color: #1F100B;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .faq-chevron {
          transition: transform 0.2s;
          flex-shrink: 0;
          color: #8A7063;
        }
        .faq-chevron.rotated {
          transform: rotate(180deg);
          color: #D67A41;
        }
        .faq-expand-content {
          padding: 0.65rem 0.95rem;
          font-size: 0.74rem;
          color: #6E5346;
          line-height: 1.45;
          border-top: 1px solid #F4EBE1;
          background: #FCFBF8;
        }

        /* ── FOOTER COMPACT ── */
        .panipat-footer-compact {
          border-top: 1px solid #E5DCD3;
          padding: 1.25rem 0.85rem;
          text-align: center;
          font-size: 0.72rem;
          color: #8A7063;
          background: #FAF8F5;
        }
        .footer-sub-text {
          font-size: 0.66rem;
          color: #A8958B;
          margin-top: 0.25rem;
        }

        /* ── MOBILE STICKY BOTTOM BAR ── */
        .panipat-sticky-bar-compact {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(26, 13, 8, 0.97);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1.5px solid rgba(214, 122, 65, 0.45);
          padding: 0.55rem 0.75rem;
          display: flex;
          gap: 0.55rem;
          z-index: 9999;
          box-shadow: 0 -6px 20px rgba(0,0,0,0.3);
        }
        @media (min-width: 769px) {
          .panipat-sticky-bar-compact {
            display: none !important;
          }
          .panipat-offer-page {
            padding-bottom: 1.5rem;
          }
        }
        .sticky-btn-call {
          flex: 1;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.65rem;
          border-radius: 99px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
        }
        .sticky-btn-claim {
          flex: 1.4;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 900;
          padding: 0.65rem;
          border-radius: 99px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.4);
        }
      `}} />

    </div>
  );
}
