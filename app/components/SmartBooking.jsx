'use client';
import { useState } from 'react';
import { 
  Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, 
  ShieldCheck, Sparkles, Send, Star, Award, ChevronRight, Check,
  Stethoscope, Sun, Moon, Zap, UserCheck, Video, MapPin
} from 'lucide-react';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

const TREATMENTS = [
  { id: 'aligners', label: 'Clear Aligners', Icon: Sparkles, badge: 'Popular' },
  { id: 'braces', label: 'Damon® Braces', Icon: Award },
  { id: 'implants', label: 'Dental Implants', Icon: ShieldCheck, badge: 'Painless' },
  { id: 'rct', label: 'Root Canal (RCT)', Icon: CheckCircle2 },
  { id: 'makeover', label: 'Smile Makeover', Icon: Star },
  { id: 'checkup', label: 'Dental Checkup', Icon: Stethoscope },
];

const DOCTORS = [
  { id: 'sk', name: 'Prof. Dr. S. K. Yadav', role: 'MDS (PGI Chandigarh) · Orthodontics', Icon: UserCheck },
  { id: 'achla', name: 'Dr. Achla Bharti Yadav', role: 'MDS (PGI Rohtak) · Cosmetic & Oral', Icon: UserCheck },
  { id: 'any', name: 'Earliest Available Specialist', role: 'Fastest appointment confirmation', Icon: Zap },
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
    treatment: 'Clear Aligners',
    doctor: 'Prof. Dr. S. K. Yadav',
    date: '',
    time: 'Morning (10:00 AM - 01:00 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const msg = `Hello Shubh Dental Clinic! I would like to reserve my consultation slot.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📍 Mode: ${formData.mode}\n✨ Treatment: ${formData.treatment}\n👨‍⚕️ Preferred Doctor: ${formData.doctor}\n📅 Preferred Date: ${formData.date || 'Earliest Available'}\n⏰ Preferred Slot: ${formData.time}`;
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
                <span>Instant Consultation Desk</span>
              </StaggerItem>

              <StaggerItem className="booking-headline" variant="fadeUp">
                Reserve Your <span className="gold-text">VIP Smile Consultation</span>
              </StaggerItem>

              <StaggerItem className="booking-sub" variant="fadeUp">
                Consult directly with our PGI-trained specialists in Rohtak &amp; NCR. Get a comprehensive 3D digital assessment and transparent 0% EMI plans.
              </StaggerItem>

              <StaggerItem className="booking-perks-list" variant="fadeUp">
                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Zero Waiting Room Delay</h4>
                    <p className="b-perk-desc">Pre-booked priority time slot with senior specialists.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Free 3D Digital Scan Preview</h4>
                    <p className="b-perk-desc">Visual simulation of your future smile before starting.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">0% Interest EMI Available</h4>
                    <p className="b-perk-desc">Custom financing for braces, aligners, and implants.</p>
                  </div>
                </div>

                <div className="b-perk-card">
                  <div className="b-perk-icon" style={{ background: '#ECFDF5', color: '#10B981' }}>
                    <Video size={18} />
                  </div>
                  <div>
                    <h4 className="b-perk-title">Online Video Consultation Available</h4>
                    <p className="b-perk-desc">Virtual smile assessment for outstation &amp; NRI patients worldwide.</p>
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

            {/* Right Interactive Form Column */}
            <ScrollReveal className="booking-form-wrap" animation="fadeUp" delay={0.2}>
              {submitted ? (
                <div className="form-success-card">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="success-title">Consultation Requested!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will confirm your preferred appointment slot with <strong>{formData.doctor}</strong> via WhatsApp shortly.
                  </p>
                  <button 
                    type="button" 
                    className="btn-reset-form"
                    onClick={() => setSubmitted(false)}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form-interactive">
                  
                  <div className="interactive-form-header">
                    <div>
                      <span className="form-eyebrow-live">
                        <span className="live-pulse-green" /> Live Booking
                      </span>
                      <h3 className="form-interactive-title">Select Treatment &amp; Slot</h3>
                    </div>
                    <div className="form-rating-badge">
                      <Star size={13} fill="#F59E0B" color="#F59E0B" />
                      <span>4.9 / 5.0 (2,400+ Reviews)</span>
                    </div>
                  </div>

                  {/* Consultation Mode Selector */}
                  <div className="form-field-block" style={{ marginBottom: '1rem' }}>
                    <label className="field-block-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>1. Consultation Mode</span>
                      <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: '700' }}>In-Clinic or Video</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'In-Clinic Visit (Rohtak)' })}
                        className={`treatment-chip ${formData.mode === 'In-Clinic Visit (Rohtak)' ? 'treatment-chip--active' : ''}`}
                        style={{ padding: '0.6rem 0.75rem', justifyContent: 'center' }}
                      >
                        <MapPin size={14} />
                        <span className="t-chip-label" style={{ fontSize: '0.8rem' }}>In-Clinic (Rohtak)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'Online Video Consultation' })}
                        className={`treatment-chip ${formData.mode === 'Online Video Consultation' ? 'treatment-chip--active' : ''}`}
                        style={{ padding: '0.6rem 0.75rem', justifyContent: 'center' }}
                      >
                        <Video size={14} color="#10B981" />
                        <span className="t-chip-label" style={{ fontSize: '0.8rem' }}>Video Consultation</span>
                        <span className="t-chip-badge" style={{ background: '#ECFDF5', color: '#0E744A', fontSize: '0.65rem' }}>Live</span>
                      </button>
                    </div>
                  </div>

                  {/* 2. Treatment Selector */}
                  <div className="form-field-block">
                    <label className="field-block-label">2. Select Required Care</label>
                    <div className="treatment-chips-grid">
                      {TREATMENTS.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, treatment: t.label })}
                          className={`treatment-chip ${formData.treatment === t.label ? 'treatment-chip--active' : ''}`}
                        >
                          <span className="t-chip-icon"><t.Icon size={15} /></span>
                          <span className="t-chip-label">{t.label}</span>
                          {t.badge && <span className="t-chip-badge">{t.badge}</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Patient Details */}
                  <div className="form-inputs-row">
                    <div className="fancy-input-group">
                      <label className="fancy-input-label">Full Name *</label>
                      <div className="fancy-input-box">
                        <User size={17} className="fancy-input-icon" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="fancy-input-group">
                      <label className="fancy-input-label">WhatsApp Phone Number *</label>
                      <div className="fancy-input-box">
                        <span className="phone-prefix">+91</span>
                        <input
                          type="tel"
                          required
                          placeholder="98123 45678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3. Specialist Doctor Selector */}
                  <div className="form-field-block">
                    <label className="field-block-label">2. Specialist Doctor</label>
                    <div className="doctor-select-pills">
                      {DOCTORS.map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, doctor: d.name })}
                          className={`doctor-select-card ${formData.doctor === d.name ? 'doctor-card--active' : ''}`}
                        >
                          <span className="d-card-icon"><d.Icon size={18} /></span>
                          <div className="d-card-info">
                            <span className="d-card-name">{d.name}</span>
                            <span className="d-card-role">{d.role}</span>
                          </div>
                          {formData.doctor === d.name && (
                            <div className="d-card-check">
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Date & Time Slot */}
                  <div className="form-inputs-row">
                    <div className="fancy-input-group">
                      <label className="fancy-input-label">Preferred Date</label>
                      <div className="fancy-input-box">
                        <Calendar size={17} className="fancy-input-icon" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="fancy-input-group">
                      <label className="fancy-input-label">Preferred Slot</label>
                      <div className="time-slot-toggle">
                        {TIME_SLOTS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, time: `${s.label} (${s.time})` })}
                            className={`time-slot-btn ${formData.time.includes(s.label) ? 'time-slot--active' : ''}`}
                          >
                            <span className="time-slot-icon"><s.Icon size={14} /></span>
                            <span>{s.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-confirm-appointment">
                    <div className="btn-glow-shimmer" />
                    <Send size={18} />
                    <span>Confirm &amp; Reserve My Consultation</span>
                  </button>

                  <div className="form-trust-footer">
                    <span>🔒 100% Confidential</span>
                    <span>•</span>
                    <span>⚡ Zero Advance Payment</span>
                    <span>•</span>
                    <span>📍 Rohtak Clinic</span>
                  </div>

                </form>
              )}
            </ScrollReveal>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .smart-booking-section {
          padding: 3.5rem 1.5rem;
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

        /* RIGHT FORM COLUMN (INTERACTIVE & LUXURIOUS) */
        .booking-form-wrap {
          background: #FFFFFF;
          border-radius: 26px;
          padding: 1.85rem 1.6rem;
          color: #110805;
          box-shadow: 0 25px 60px rgba(17, 8, 5, 0.35);
          border: 1px solid rgba(214, 122, 65, 0.2);
          position: relative;
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }

        .booking-form-interactive {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          width: 100%;
          box-sizing: border-box;
        }

        .interactive-form-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 0.85rem;
          border-bottom: 1.5px solid rgba(74, 37, 24, 0.08);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .form-eyebrow-live {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.2rem;
        }
        .live-pulse-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .form-interactive-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0;
        }

        .form-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #FFFBF0;
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #B45309;
          padding: 0.22rem 0.6rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        /* 1. TREATMENT CHIPS GRID */
        .form-field-block {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          width: 100%;
          box-sizing: border-box;
        }
        .field-block-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #6E5448;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .treatment-chips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.45rem;
          width: 100%;
          box-sizing: border-box;
        }

        .treatment-chip {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 12px;
          padding: 0.55rem 0.65rem;
          font-size: 0.76rem;
          font-weight: 700;
          color: #38241C;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          text-align: left;
          min-width: 0;
          box-sizing: border-box;
        }
        .treatment-chip:hover {
          border-color: #D67A41;
          background: #FFF8F0;
        }
        .treatment-chip--active {
          background: linear-gradient(135deg, #FFF5EB 0%, #FFEEDD 100%) !important;
          border-color: #D67A41 !important;
          color: #7A340F !important;
          font-weight: 800 !important;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.15);
        }
        .t-chip-icon {
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .t-chip-label {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .t-chip-badge {
          display: none;
        }

        /* 2. FORM INPUTS */
        .form-inputs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          width: 100%;
          box-sizing: border-box;
        }

        .fancy-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
        }

        .fancy-input-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #6E5448;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .fancy-input-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .fancy-input-icon {
          position: absolute;
          left: 0.85rem;
          color: #D67A41;
          opacity: 0.75;
          pointer-events: none;
        }
        .phone-prefix {
          position: absolute;
          left: 0.85rem;
          font-size: 0.85rem;
          font-weight: 800;
          color: #7A340F;
          pointer-events: none;
        }

        .fancy-input-box input {
          width: 100%;
          padding: 0.7rem 0.8rem 0.7rem 2.4rem;
          border-radius: 12px;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          background: #FAF8F5;
          font-size: 0.86rem;
          font-weight: 600;
          color: #110805;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        .fancy-input-box input:focus {
          background: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 0 0 3px rgba(214, 122, 65, 0.15);
        }

        /* 3. DOCTOR SELECT CARDS */
        .doctor-select-pills {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          width: 100%;
          box-sizing: border-box;
        }
        .doctor-select-card {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          border-radius: 12px;
          padding: 0.55rem 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }
        .doctor-select-card:hover {
          background: #FFF8F0;
          border-color: #D67A41;
        }
        .doctor-card--active {
          background: linear-gradient(135deg, #FFF5EB 0%, #FFEEDD 100%) !important;
          border-color: #D67A41 !important;
        }
        .d-card-icon { font-size: 1.1rem; flex-shrink: 0; }
        .d-card-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          min-width: 0;
        }
        .d-card-name {
          font-size: 0.82rem;
          font-weight: 800;
          color: #110805;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .d-card-role {
          font-size: 0.68rem;
          color: #7A5B4C;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .d-card-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #D67A41;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* 4. TIME SLOT TOGGLE */
        .time-slot-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.35rem;
          background: #FAF8F5;
          padding: 3px;
          border-radius: 12px;
          border: 1.5px solid rgba(74, 37, 24, 0.1);
          height: 42px;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }
        .time-slot-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          background: transparent;
          border: none;
          border-radius: 10px;
          height: 100%;
          font-size: 0.75rem;
          font-weight: 700;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          padding: 0 0.3rem;
        }
        .time-slot--active {
          background: #FFFFFF !important;
          color: #7A340F !important;
          font-weight: 800 !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        /* SUBMIT BUTTON */
        .btn-confirm-appointment {
          position: relative;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 14px;
          padding: 0.9rem 1.4rem;
          font-family: var(--font-heading);
          font-size: 0.94rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.38);
          transition: all 0.3s ease;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }
        .btn-confirm-appointment:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(214, 122, 65, 0.48);
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
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #8A7063;
          flex-wrap: wrap;
        }

        /* SUCCESS CARD */
        .form-success-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
        }
        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          border: 2px solid rgba(16, 185, 129, 0.3);
        }
        .success-title {
          font-size: 1.4rem;
          font-weight: 900;
          color: #0E0604;
          margin-bottom: 0.5rem;
        }
        .success-desc {
          font-size: 0.88rem;
          color: #66544C;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .btn-reset-form {
          background: #D67A41;
          color: #FFFFFF;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 99px;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1100px) {
          .booking-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
          .treatment-chips-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .smart-booking-section {
            padding: 2rem 0.75rem 5rem !important;
          }
          .booking-card-wrapper {
            padding: 1.5rem 1.15rem !important;
            border-radius: 22px !important;
          }
          .booking-form-wrap {
            padding: 1.35rem 1.1rem !important;
            border-radius: 20px !important;
          }
          .treatment-chips-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.4rem !important;
          }
          .treatment-chip {
            padding: 0.5rem 0.55rem !important;
            font-size: 0.74rem !important;
          }
          .form-inputs-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .btn-confirm-appointment {
            padding: 0.85rem 1.25rem !important;
            font-size: 0.88rem !important;
          }
        }
      `}} />
    </section>
  );
}