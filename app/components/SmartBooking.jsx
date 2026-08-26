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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Find currently selected treatment object
  const allTreatments = TREATMENT_CATEGORIES.flatMap(c => c.items);
  const currentTreatment = allTreatments.find(t => t.label === formData.treatment) || allTreatments[0];
  const CurrentIcon = currentTreatment.Icon;

  // Filter treatments for search
  const filteredCategories = TREATMENT_CATEGORIES.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

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
                Reserve Your <span className="gold-text">VIP Smile Consultation</span>
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
                  
                  {/* Compact Header with Live Badge */}
                  <div className="interactive-form-header">
                    <div>
                      <span className="form-eyebrow-live">
                        <span className="live-pulse-green" /> Priority Booking · Instant Slot
                      </span>
                      <h3 className="form-interactive-title font-heading">Reserve Consultation</h3>
                    </div>
                    <div className="form-rating-badge">
                      <Star size={11} fill="#F59E0B" color="#F59E0B" />
                      <span>5.0★ (2,400+ Verified)</span>
                    </div>
                  </div>

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

                  {/* 1. COMPACT TREATMENT SELECTOR */}
                  <div className="form-field-block" ref={dropdownRef}>
                    <div className="field-label-row">
                      <span className="field-block-label">Select Treatment *</span>
                      <span className="field-badge-hint">1-Tap Select</span>
                    </div>
                    
                    <div className="inav-select-container">
                      <button
                        type="button"
                        className={`inav-select-trigger ${isDropdownOpen ? 'inav-select-trigger--open' : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="listbox"
                      >
                        <div className="inav-trigger-left">
                          <div className={`inav-trigger-icon-box inav-icon-${currentTreatment.badgeType}`}>
                            <CurrentIcon size={15} />
                          </div>
                          <span className="inav-trigger-title">{currentTreatment.label}</span>
                        </div>

                        <div className="inav-trigger-right">
                          <span className={`inav-pill-badge inav-badge-${currentTreatment.badgeType}`}>
                            {currentTreatment.badge}
                          </span>
                          <ChevronDown 
                            size={14} 
                            className={`inav-chevron ${isDropdownOpen ? 'inav-chevron--rotated' : ''}`} 
                          />
                        </div>
                      </button>

                      {/* Dropdown Panel */}
                      {isDropdownOpen && (
                        <div className="inav-dropdown-panel" role="listbox">
                          
                          {/* Search Filter Header */}
                          <div className="inav-search-bar">
                            <Search size={14} className="inav-search-icon" />
                            <input
                              type="text"
                              placeholder="Search treatments..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              autoFocus
                              className="inav-search-input"
                            />
                            {searchQuery && (
                              <button 
                                type="button" 
                                className="inav-search-clear"
                                onClick={() => setSearchQuery('')}
                              >
                                ✕
                              </button>
                            )}
                          </div>

                          {/* Grouped Options List */}
                          <div className="inav-options-list">
                            {filteredCategories.length > 0 ? (
                              filteredCategories.map((catGroup, gIdx) => (
                                <div key={gIdx} className="inav-group">
                                  <div className="inav-group-header">{catGroup.category}</div>
                                  <div className="inav-group-items">
                                    {catGroup.items.map((item) => {
                                      const ItemIcon = item.Icon;
                                      const isSelected = formData.treatment === item.label;

                                      return (
                                        <button
                                          key={item.id}
                                          type="button"
                                          role="option"
                                          aria-selected={isSelected}
                                          className={`inav-option-btn ${isSelected ? 'inav-option-btn--active' : ''}`}
                                          onClick={() => {
                                            setFormData({ ...formData, treatment: item.label });
                                            setIsDropdownOpen(false);
                                            setSearchQuery('');
                                          }}
                                        >
                                          <div className="inav-option-left">
                                            <div className={`inav-opt-icon inav-icon-${item.badgeType}`}>
                                              <ItemIcon size={14} />
                                            </div>
                                            <div className="inav-opt-details">
                                              <div className="inav-opt-name">{item.label}</div>
                                            </div>
                                          </div>

                                          <div className="inav-option-right">
                                            <span className={`inav-pill-badge inav-badge-${item.badgeType}`}>
                                              {item.badge}
                                            </span>
                                            {isSelected && (
                                              <div className="inav-check-dot">
                                                <Check size={11} strokeWidth={3} />
                                              </div>
                                            )}
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="inav-empty-state">
                                No matching procedures found for &ldquo;{searchQuery}&rdquo;
                              </div>
                            )}
                          </div>

                        </div>
                      )}
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
        }

        .form-eyebrow-live {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 800;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.15rem;
        }
        .live-pulse-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .form-interactive-title {
          font-size: 1.08rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0;
          line-height: 1.2;
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

        .inav-select-container {
          position: relative;
          width: 100%;
        }

        .inav-select-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.12);
          border-radius: 12px;
          padding: 0.45rem 0.65rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          gap: 0.5rem;
          box-sizing: border-box;
          min-height: 42px;
        }

        .inav-select-trigger:hover,
        .inav-select-trigger--open {
          background: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.14);
        }

        .inav-trigger-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
          flex: 1;
        }

        .inav-trigger-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .inav-icon-gold { background: rgba(245, 158, 11, 0.15); color: #B45309; border: 1px solid rgba(245, 158, 11, 0.3); }
        .inav-icon-copper { background: rgba(214, 122, 65, 0.18); color: #9A4616; border: 1px solid rgba(214, 122, 65, 0.35); }
        .inav-icon-purple { background: rgba(168, 85, 247, 0.15); color: #7E22CE; border: 1px solid rgba(168, 85, 247, 0.3); }
        .inav-icon-blue { background: rgba(59, 130, 246, 0.15); color: #1D4ED8; border: 1px solid rgba(59, 130, 246, 0.3); }
        .inav-icon-teal { background: rgba(20, 184, 166, 0.15); color: #0F766E; border: 1px solid rgba(20, 184, 166, 0.3); }
        .inav-icon-green { background: rgba(16, 185, 129, 0.15); color: #047857; border: 1px solid rgba(16, 185, 129, 0.3); }
        .inav-icon-gray { background: rgba(100, 116, 139, 0.15); color: #475569; border: 1px solid rgba(100, 116, 139, 0.3); }

        .inav-trigger-title {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 800;
          color: #110805;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .inav-trigger-right {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
        }

        .inav-pill-badge {
          font-size: 0.58rem;
          font-weight: 800;
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }
        .inav-badge-gold { background: #FEF9EB; color: #92400E; border: 1px solid rgba(245, 158, 11, 0.25); }
        .inav-badge-copper { background: #FDF3EB; color: #9A4616; border: 1px solid rgba(214, 122, 65, 0.25); }
        .inav-badge-purple { background: #FAF5FF; color: #6B21A8; border: 1px solid rgba(168, 85, 247, 0.25); }
        .inav-badge-blue { background: #EFF6FF; color: #1E40AF; border: 1px solid rgba(59, 130, 246, 0.25); }
        .inav-badge-teal { background: #F0FDFA; color: #115E59; border: 1px solid rgba(20, 184, 166, 0.25); }
        .inav-badge-green { background: #ECFDF5; color: #065F46; border: 1px solid rgba(16, 185, 129, 0.25); }
        .inav-badge-gray { background: #F8FAFC; color: #334155; border: 1px solid rgba(100, 116, 139, 0.25); }

        .inav-chevron {
          color: #D67A41;
          transition: transform 0.22s ease;
        }
        .inav-chevron--rotated {
          transform: rotate(180deg);
        }

        .inav-dropdown-panel {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(17, 8, 5, 0.25);
          z-index: 50;
          max-height: 280px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .inav-search-bar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          background: #FAF8F5;
        }
        .inav-search-icon { color: #D67A41; flex-shrink: 0; }
        .inav-search-input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 0.78rem;
          font-weight: 600;
          color: #110805;
          outline: none;
        }
        .inav-search-clear {
          background: transparent;
          border: none;
          font-size: 0.75rem;
          color: #A89B95;
          cursor: pointer;
        }

        .inav-options-list {
          overflow-y: auto;
          max-height: 220px;
          padding: 0.35rem;
        }

        .inav-group { margin-bottom: 0.35rem; }
        .inav-group-header {
          font-size: 0.62rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #A85A2E;
          padding: 0.25rem 0.45rem 0.1rem;
        }
        .inav-group-items {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .inav-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          padding: 0.38rem 0.5rem;
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
          gap: 0.4rem;
        }
        .inav-option-btn:hover {
          background: #FFF8F0;
          border-color: rgba(214, 122, 65, 0.2);
        }
        .inav-option-btn--active {
          background: linear-gradient(135deg, #FFF5EB 0%, #FFEEDD 100%) !important;
          border-color: #D67A41 !important;
        }
        .inav-option-left {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          min-width: 0;
          flex: 1;
        }
        .inav-opt-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .inav-opt-name {
          font-size: 0.76rem;
          font-weight: 700;
          color: #110805;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .inav-check-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #D67A41;
          color: #FFFFFF;
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
            padding: 1.5rem 0.5rem !important;
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