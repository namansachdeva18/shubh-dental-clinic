'use client';
import { useState, useRef, useEffect } from 'react';
import { 
  Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, 
  ShieldCheck, Sparkles, Send, Star, Award, ChevronRight, Check,
  Stethoscope, Sun, Moon, Zap, Video, MapPin, ChevronDown, Search, Smile
} from 'lucide-react';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

const TREATMENT_CATEGORIES = [
  {
    category: 'Orthodontics & Aligners',
    items: [
      { id: 'aligners', label: 'Clear Aligners (Invisalign® & SkyAlign™)', badge: 'Most Popular', badgeType: 'gold', Icon: Sparkles, desc: 'Discreet 3D invisible teeth alignment' },
      { id: 'braces', label: 'Damon® Self-Ligating & Ceramic Braces', badge: 'High Precision', badgeType: 'copper', Icon: Award, desc: 'Advanced gentle-force bracket systems' },
    ]
  },
  {
    category: 'Dental Implants & Replacement',
    items: [
      { id: 'implants', label: 'Permanent Titanium Dental Implants', badge: 'Swiss Straumann®', badgeType: 'copper', Icon: ShieldCheck, desc: 'Single & multi-tooth permanent replacement' },
      { id: 'same-day', label: 'Same-Day Full Mouth Fixed Implants', badge: '24-72 Hours', badgeType: 'green', Icon: Zap, desc: 'Immediate-loading All-on-4/6 fixed teeth' },
      { id: 'crowns', label: 'Zirconia Crowns & Ceramic Bridges', badge: '10-Yr Warranty', badgeType: 'copper', Icon: Award, desc: 'Metal-free high durability restorations' },
    ]
  },
  {
    category: 'Cosmetic Dentistry & Smile Design',
    items: [
      { id: 'makeover', label: 'Digital Smile Makeover & Veneers', badge: 'Hollywood Smile', badgeType: 'purple', Icon: Star, desc: 'Custom ultra-thin porcelain veneers' },
      { id: 'whitening', label: 'Laser Teeth Whitening', badge: 'Instant Results', badgeType: 'gold', Icon: Sparkles, desc: '6–10 shades brighter in 45 minutes' },
    ]
  },
  {
    category: 'General, RCT & Pediatric Care',
    items: [
      { id: 'rct', label: 'Painless Rotary Root Canal (RCT)', badge: 'Single Sitting', badgeType: 'blue', Icon: CheckCircle2, desc: 'Save infected natural teeth comfortably' },
      { id: 'kids', label: 'Pediatric & Kids Dental Care', badge: 'Child Friendly', badgeType: 'teal', Icon: Smile, desc: 'Gentle, zero-fear preventive care' },
      { id: 'checkup', label: 'Comprehensive Dental Consultation & Scaling', badge: 'Preventive', badgeType: 'gray', Icon: Stethoscope, desc: 'Full mouth 3D digital diagnosis' },
    ]
  }
];

const TIME_SLOTS = [
  { id: 'morning', label: 'Morning', time: '10:00 AM – 01:00 PM', Icon: Sun },
  { id: 'evening', label: 'Evening', time: '04:00 PM – 08:00 PM', Icon: Moon },
];

export default function SmartBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mode: 'In-Clinic Visit (Rohtak)',
    treatment: 'Clear Aligners (Invisalign® & SkyAlign™)',
    dateType: 'Today', // 'Today' | 'Tomorrow' | 'Custom'
    customDate: '',
    time: 'Morning (10am–1pm)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const finalDate = formData.dateType === 'Custom' ? (formData.customDate || 'Earliest Available') : formData.dateType;
    const msg = `Hello Shubh Dental Clinic! I would like to reserve my VIP consultation.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📍 Mode: ${formData.mode}\n✨ Treatment: ${formData.treatment}\n📅 Preferred Date: ${finalDate}\n⏰ Preferred Slot: ${formData.time}`;
    const url = `https://wa.me/918685048414?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="book" className="smart-booking-section">
      <div id="booking" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      <div className="smart-booking-container">
        
        <div className="booking-card-wrapper">
          <div className="booking-grid">
            
            {/* Left Info Column (Desktop authority showcase) */}
            <StaggerReveal className="booking-info" stagger={0.1} delay={0.1}>
              <StaggerItem className="booking-tag" variant="fadeUp">
                <span className="booking-live-dot" />
                <span>Instant VIP Consultation Desk</span>
              </StaggerItem>

              <StaggerItem className="booking-headline" variant="fadeUp">
                Book Your <span className="gold-text">VIP Smile Consultation</span>
              </StaggerItem>

              <StaggerItem className="booking-sub" variant="fadeUp">
                Consult directly with our PGI-trained senior specialists in Rohtak &amp; NCR. Get an instant 3D digital assessment and transparent 0% EMI plans.
              </StaggerItem>

              <StaggerItem className="booking-perks-list" variant="fadeUp">
                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Zero Waiting Delay</h4>
                    <p className="b-perk-desc">Pre-booked priority time slot with Ex-PGI specialists.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Free 3D Digital Scan</h4>
                    <p className="b-perk-desc">Visual simulation of your future smile before treatment.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">0% Interest EMI Available</h4>
                    <p className="b-perk-desc">Affordable monthly plans for aligners &amp; implants.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon" style={{ background: '#ECFDF5', color: '#10B981' }}>
                    <Video size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Online Video Consultation</h4>
                    <p className="b-perk-desc">Direct video assessments for NRI &amp; outstation patients.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem className="booking-direct-actions" variant="fadeUp">
                <a href="tel:+918685048414" className="btn-direct-call">
                  <Phone size={15} />
                  <span>Call: +91 8685048414</span>
                </a>
                <a 
                  href="https://wa.me/918685048414" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-direct-whatsapp"
                >
                  <MessageSquare size={15} />
                  <span>Direct WhatsApp</span>
                </a>
              </StaggerItem>
            </StaggerReveal>

            {/* Right Interactive Form Column — Compact, Beautiful & Convenient */}
            <ScrollReveal className="booking-form-wrap" animation="fadeUp" delay={0.2}>
              {submitted ? (
                <div className="form-success-card">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="success-title">Consultation Reserved!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will confirm your VIP slot for <strong>{formData.treatment}</strong> via WhatsApp immediately.
                  </p>
                  <button 
                    type="button" 
                    className="btn-reset-form"
                    onClick={() => setSubmitted(false)}
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form-interactive">

                  {/* Consultation Mode Segmented Toggle */}
                  <div className="mode-segmented-bar">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: 'In-Clinic Visit (Rohtak)' })}
                      className={`mode-seg-btn ${formData.mode === 'In-Clinic Visit (Rohtak)' ? 'mode-seg-btn--active' : ''}`}
                    >
                      <MapPin size={12} />
                      <span>In-Clinic (Rohtak HQ)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: 'Online Video Consultation' })}
                      className={`mode-seg-btn ${formData.mode === 'Online Video Consultation' ? 'mode-seg-btn--active' : ''}`}
                    >
                      <Video size={12} color="#10B981" />
                      <span>Online Video</span>
                      <span className="mode-live-tag">Live</span>
                    </button>
                  </div>

                  {/* 1. CLEAN & LUXURY TREATMENT SELECTOR */}
                  <div className="form-field-block">
                    <label className="fancy-input-label" htmlFor="smart-treatment-select">
                      Select Treatment / Procedure *
                    </label>
                    <div className="luxury-select-wrapper">
                      <div className="luxury-select-icon-box">
                        <Sparkles size={15} />
                      </div>
                      <select
                        id="smart-treatment-select"
                        className="luxury-native-select"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        required
                      >
                        {TREATMENT_CATEGORIES.map((catGroup, gIdx) => (
                          <optgroup key={gIdx} label={catGroup.category}>
                            {catGroup.items.map((item) => (
                              <option key={item.id} value={item.label}>
                                {item.label}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <div className="luxury-select-chevron">
                        <ChevronDown size={15} />
                      </div>
                    </div>
                  </div>

                  {/* 2. SIDE-BY-SIDE CONTACT DETAILS (NAME + PHONE IN 1 COMPACT ROW) */}
                  <div className="form-inputs-compact-row">
                    <div className="fancy-input-group">
                      <label className="fancy-input-label">Full Name *</label>
                      <div className="fancy-input-box">
                        <User size={14} className="fancy-input-icon" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="fancy-input-group">
                      <label className="fancy-input-label">Phone Number *</label>
                      <div className="fancy-input-box">
                        <span className="phone-prefix">+91</span>
                        <input
                          type="tel"
                          required
                          placeholder="Mobile Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3. 1-TAP QUICK DATE & SLOT PICKER */}
                  <div className="form-schedule-grid">
                    
                    {/* Quick Date Chips */}
                    <div className="schedule-col">
                      <label className="fancy-input-label">Preferred Date</label>
                      <div className="quick-date-chips">
                        <button
                          type="button"
                          className={`quick-chip ${formData.dateType === 'Today' ? 'quick-chip--active' : ''}`}
                          onClick={() => setFormData({ ...formData, dateType: 'Today' })}
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          className={`quick-chip ${formData.dateType === 'Tomorrow' ? 'quick-chip--active' : ''}`}
                          onClick={() => setFormData({ ...formData, dateType: 'Tomorrow' })}
                        >
                          Tomorrow
                        </button>
                        <button
                          type="button"
                          className={`quick-chip ${formData.dateType === 'Custom' ? 'quick-chip--active' : ''}`}
                          onClick={() => setFormData({ ...formData, dateType: 'Custom' })}
                        >
                          <Calendar size={11} />
                          <span>Custom</span>
                        </button>
                      </div>
                      
                      {formData.dateType === 'Custom' && (
                        <input
                          type="date"
                          value={formData.customDate}
                          onChange={(e) => setFormData({ ...formData, customDate: e.target.value })}
                          className="custom-date-input"
                          autoFocus
                        />
                      )}
                    </div>

                    {/* Quick Time Slot Chips */}
                    <div className="schedule-col">
                      <label className="fancy-input-label">Preferred Slot</label>
                      <div className="quick-slot-toggle">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, time: 'Morning (10am–1pm)' })}
                          className={`quick-slot-btn ${formData.time.includes('Morning') ? 'quick-slot--active' : ''}`}
                        >
                          <Sun size={12} />
                          <span>Morning</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, time: 'Evening (4pm–8pm)' })}
                          className={`quick-slot-btn ${formData.time.includes('Evening') ? 'quick-slot--active' : ''}`}
                        >
                          <Moon size={12} />
                          <span>Evening</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* High-Converting Glowing Action Button */}
                  <button type="submit" className="btn-confirm-appointment">
                    <div className="btn-glow-shimmer" />
                    <Send size={15} />
                    <span>Confirm &amp; Reserve VIP Consultation</span>
                  </button>

                  <div className="form-trust-footer">
                    <span>🔒 100% Confidential</span>
                    <span>•</span>
                    <span>⚡ Zero Waiting Delay</span>
                    <span>•</span>
                    <span>📍 Rohtak HQ</span>
                  </div>

                </form>
              )}
            </ScrollReveal>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .smart-booking-section {
          padding: 1.5rem 1.5rem 0.5rem;
          background: #FAF8F5;
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }

        .smart-booking-container {
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
          width: 100%;
        }

        .booking-card-wrapper {
          background: linear-gradient(145deg, #130A06 0%, #261309 100%);
          border-radius: 32px;
          padding: 2.75rem 2.25rem;
          color: #FFFFFF;
          box-shadow: 0 30px 80px rgba(17, 8, 5, 0.28);
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }

        .booking-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.25fr;
          gap: 2.5rem;
          align-items: flex-start;
          box-sizing: border-box;
          width: 100%;
        }

        /* LEFT INFO COLUMN */
        .booking-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.15);
          color: #D67A41;
          padding: 0.35rem 1rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.3);
          margin-bottom: 1.25rem;
        }
        .booking-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        .booking-headline {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .gold-text {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .booking-sub {
          font-size: 0.92rem;
          color: #D1C5C0;
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .booking-perks-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .b-perk-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0.85rem 1rem;
          box-sizing: border-box;
        }

        .b-perk-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(214, 122, 65, 0.2);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }

        .b-perk-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.15rem;
        }

        .b-perk-desc {
          font-size: 0.75rem;
          color: #A89B95;
          margin: 0;
          line-height: 1.4;
        }

        .booking-direct-actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .btn-direct-call, .btn-direct-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 1.1rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-direct-call {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .btn-direct-call:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .btn-direct-whatsapp {
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        .btn-direct-whatsapp:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        /* RIGHT FORM COLUMN (COMPACT, BEAUTIFUL & CONVENIENT) */
        .booking-form-wrap {
          background: #FFFFFF;
          border-radius: 22px;
          padding: 1.35rem 1.4rem;
          color: #110805;
          box-shadow: 0 20px 50px rgba(17, 8, 5, 0.25);
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          position: relative;
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }

        .booking-form-interactive {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          box-sizing: border-box;
        }

        .interactive-form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.65rem;
          border-bottom: 1.5px solid rgba(74, 37, 24, 0.08);
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .form-header-badge-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .form-eyebrow-live {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .live-pulse-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .form-fast-track-pill {
          font-size: 0.64rem;
          font-weight: 800;
          color: #9A4616;
          background: #FFF4EC;
          border: 1px solid rgba(214, 122, 65, 0.28);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }

        .form-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #FFFBF0;
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #B45309;
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        /* SEGMENTED CONSULTATION MODE BAR */
        .mode-segmented-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.3rem;
          background: #FAF8F5;
          padding: 0.25rem;
          border-radius: 12px;
          border: 1px solid rgba(74, 37, 24, 0.1);
        }
        .mode-seg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.4rem 0.5rem;
          border-radius: 9px;
          border: none;
          background: transparent;
          color: #6E5448;
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .mode-seg-btn--active {
          background: #FFFFFF;
          color: #7A340F;
          font-weight: 800;
          box-shadow: 0 2px 6px rgba(74, 37, 24, 0.1);
        }
        .mode-live-tag {
          background: #ECFDF5;
          color: #0E744A;
          font-size: 0.58rem;
          font-weight: 800;
          padding: 0.08rem 0.3rem;
          border-radius: 99px;
        }

        /* ── TREATMENT SELECTOR ── */
        .form-field-block {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
        }
        .field-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .field-block-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: #6E5448;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .field-badge-hint {
          font-size: 0.62rem;
          color: #D67A41;
          font-weight: 700;
        }

        /* ── LUXURY NATIVE SELECT (MOBILE & DESKTOP BULLETPROOF) ── */
        .luxury-select-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.14);
          border-radius: 12px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }
        .luxury-select-wrapper:hover,
        .luxury-select-wrapper:focus-within {
          background: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.15);
        }

        .luxury-select-icon-box {
          position: absolute;
          left: 0.75rem;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #FFF4EC;
          border: 1px solid rgba(214, 122, 65, 0.25);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          flex-shrink: 0;
        }

        .luxury-native-select {
          width: 100%;
          padding: 0.7rem 2.2rem 0.7rem 3.1rem;
          font-size: 0.86rem;
          font-weight: 700;
          color: #110805;
          background: transparent;
          border: none;
          border-radius: 12px;
          outline: none;
          cursor: pointer;
          font-family: inherit;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .luxury-native-select optgroup {
          font-weight: 800;
          color: #8C370B;
          background: #FAF8F5;
          font-size: 0.85rem;
          padding: 0.4rem;
        }

        .luxury-native-select option {
          font-weight: 600;
          color: #110805;
          background: #FFFFFF;
          font-size: 0.88rem;
          padding: 0.35rem;
        }

        .luxury-select-chevron {
          position: absolute;
          right: 0.75rem;
          color: #D67A41;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── 2-COLUMN CONTACT ROW ── */
        .form-inputs-compact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          width: 100%;
        }

        .fancy-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          width: 100%;
        }

        .fancy-input-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: #6E5448;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .fancy-input-box {
          display: flex;
          align-items: center;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          border-radius: 11px;
          padding: 0 0.65rem;
          height: 38px;
          transition: all 0.2s ease;
          gap: 0.4rem;
        }
        .fancy-input-box:focus-within {
          background: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 0 0 3px rgba(214, 122, 65, 0.12);
        }
        .fancy-input-icon {
          color: #A85A2E;
          flex-shrink: 0;
        }
        .phone-prefix {
          font-size: 0.74rem;
          font-weight: 800;
          color: #7A340F;
        }
        .fancy-input-box input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 0.78rem;
          font-weight: 600;
          color: #110805;
          outline: none;
        }
        .fancy-input-box input::placeholder {
          color: #A89B95;
          font-weight: 500;
        }

        /* ── SCHEDULE GRID: 1-TAP CHIPS ── */
        .form-schedule-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0.6rem;
          width: 100%;
        }

        .schedule-col {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .quick-date-chips {
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 0.25rem;
          background: #FAF8F5;
          padding: 3px;
          border-radius: 11px;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          height: 38px;
          align-items: center;
          box-sizing: border-box;
        }

        .quick-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          background: transparent;
          border: none;
          border-radius: 8px;
          height: 100%;
          font-size: 0.72rem;
          font-weight: 700;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          padding: 0 0.25rem;
        }
        .quick-chip--active {
          background: #FFFFFF !important;
          color: #7A340F !important;
          font-weight: 800 !important;
          box-shadow: 0 2px 6px rgba(74, 37, 24, 0.08);
        }

        .custom-date-input {
          margin-top: 0.3rem;
          height: 32px;
          border-radius: 8px;
          border: 1px solid #D67A41;
          padding: 0 0.5rem;
          font-size: 0.74rem;
          font-weight: 600;
          color: #110805;
          outline: none;
          background: #FFFDFC;
        }

        .quick-slot-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.25rem;
          background: #FAF8F5;
          padding: 3px;
          border-radius: 11px;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          height: 38px;
          align-items: center;
          box-sizing: border-box;
        }

        .quick-slot-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          background: transparent;
          border: none;
          border-radius: 8px;
          height: 100%;
          font-size: 0.72rem;
          font-weight: 700;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          padding: 0 0.25rem;
        }
        .quick-slot--active {
          background: #FFFFFF !important;
          color: #7A340F !important;
          font-weight: 800 !important;
          box-shadow: 0 2px 6px rgba(74, 37, 24, 0.08);
        }

        /* ── SUBMIT BUTTON ── */
        .btn-confirm-appointment {
          position: relative;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          padding: 0.75rem 1.2rem;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(214, 122, 65, 0.35);
          transition: all 0.25s ease;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.15rem;
        }
        .btn-confirm-appointment:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(214, 122, 65, 0.45);
        }
        .btn-confirm-appointment:active {
          transform: scale(0.98);
        }
        .btn-glow-shimmer {
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
          transform: skewX(-25deg);
          animation: btnShimmer 3.5s infinite;
        }
        @keyframes btnShimmer {
          0% { left: -100%; }
          25% { left: 200%; }
          100% { left: 200%; }
        }

        .form-trust-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.66rem;
          font-weight: 700;
          color: #8A7063;
          flex-wrap: wrap;
        }

        /* SUCCESS CARD */
        .form-success-card {
          text-align: center;
          padding: 2rem 1.25rem;
        }
        .success-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          border: 2px solid rgba(16, 185, 129, 0.3);
        }
        .success-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0E0604;
          margin-bottom: 0.35rem;
        }
        .success-desc {
          font-size: 0.82rem;
          color: #66544C;
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .btn-reset-form {
          background: #D67A41;
          color: #FFFFFF;
          border: none;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-weight: 800;
          font-size: 0.8rem;
          cursor: pointer;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1100px) {
          .booking-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .smart-booking-section {
            padding: 0.75rem 0.5rem 0 !important;
          }
          .booking-card-wrapper {
            padding: 1rem 0.75rem !important;
            border-radius: 18px !important;
          }
          .booking-tag {
            padding: 0.25rem 0.6rem !important;
            font-size: 0.65rem !important;
            margin-bottom: 0.5rem !important;
          }
          .booking-headline {
            font-size: 1.35rem !important;
            margin-bottom: 0.4rem !important;
          }
          .booking-sub {
            font-size: 0.76rem !important;
            line-height: 1.4 !important;
            margin-bottom: 0.75rem !important;
          }
          .booking-perks-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.4rem !important;
            margin-bottom: 0.75rem !important;
          }
          .b-perk-card {
            padding: 0.45rem 0.55rem !important;
            border-radius: 10px !important;
            gap: 0.35rem !important;
          }
          .b-perk-icon {
            width: 24px !important;
            height: 24px !important;
            border-radius: 6px !important;
          }
          .b-perk-icon svg {
            width: 12px !important;
            height: 12px !important;
          }
          .b-perk-title {
            font-size: 0.68rem !important;
            margin-bottom: 0 !important;
          }
          .b-perk-desc {
            display: none !important;
          }
          .booking-direct-actions {
            display: none !important;
          }
          .booking-form-wrap {
            padding: 1rem 0.85rem !important;
            border-radius: 16px !important;
          }
          .form-schedule-grid {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}} />
    </section>
  );
}