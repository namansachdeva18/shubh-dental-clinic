'use client';
import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Navigation, 
  Car, Compass, Copy, Check, ArrowUpRight, Sparkles, Star,
  ShieldCheck, Calendar, Zap, CheckCircle2, ChevronRight,
  Stethoscope, Video, Train, Bus, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TRANSIT_ROUTES = [
  { mode: 'Car / Cab', from: 'Model Town / D-Park', time: '5–7 mins', route: 'Via Delhi Bypass Road direct' },
  { mode: 'Train', from: 'Rohtak Jn. Railway Station', time: '8–10 mins', route: '4.2 km auto/cab ride straight' },
  { mode: 'Bus', from: 'New Bus Stand Rohtak', time: '6–8 mins', route: 'Delhi Bypass Chowk crossing' },
  { mode: 'NCR Highway', from: 'Bahadurgarh / Delhi Outer', time: '35–45 mins', route: 'Direct NH9 Delhi-Rohtak Expressway' }
];

const LANDMARKS = [
  { icon: '🏫', title: 'Opp. Swami Nitanand School', desc: 'Direct landmark right across the lane' },
  { icon: '🛣️', title: 'Delhi Bypass Chowk', desc: 'Just 2 mins from main bypass crossing' },
  { icon: '🅿️', title: 'Free Reserved Parking', desc: 'Hassle-free parking on clinic premises' },
  { icon: '🚉', title: 'Rohtak Jn. Railway Station', desc: 'Approx 8-10 mins drive (4.2 km)' }
];

const QUICK_SPECIALTIES = [
  { label: 'Orthodontics & Aligners', doctor: 'Prof. Dr. S. K. Yadav', exp: '20+ Yrs (PGI)' },
  { label: 'Implants & Restorative', doctor: 'Dr. Achla Bharti Yadav', exp: '15+ Yrs (PGI)' }
];

export default function ContactSection({ isPageLevel = false } = {}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('address'); // 'address' | 'transit' | 'hours' | 'online'
  const [mapMode, setMapMode] = useState('map'); // 'map' | 'satellite' | 'landmarks'
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    const address = "Shubh Orthodontic & Dental Clinic, Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleCopyPhone = (num) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(num);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    }
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      {/* Background Ambience */}
      <div className="contact-bg-elements" aria-hidden="true">
        <div className="contact-glow-orb orb-left" />
        <div className="contact-glow-orb orb-right" />
      </div>

      <div className="contact-container">
        
        {/* Compact Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="contact-header"
        >
          <div className="contact-top-badge">
            <span className="live-clinic-beacon">
              <span className="beacon-dot" />
              <span className="beacon-ping" />
            </span>
            <span>CENTRAL CLINIC &amp; DIRECT DESK</span>
          </div>

          {isPageLevel ? (
            <h1 className="contact-title font-heading">
              Visit Our <span className="copper-gradient-text">World-Class Clinic</span>
            </h1>
          ) : (
            <h2 className="contact-title font-heading">
              Visit Our <span className="copper-gradient-text">World-Class Clinic</span>
            </h2>
          )}
          
          <p className="contact-subtitle">
            Delhi Bypass Road, Tilak Nagar, Rohtak — accessible in minutes from Model Town, D-Park, and Delhi-NCR expressways.
          </p>

          {/* Quick 1-Tap Mobile Action Pills */}
          <div className="contact-quick-taps">
            <a 
              href="tel:+918685048414" 
              className="quick-tap-pill tap-call"
              title="Call primary doctor desk"
            >
              <Phone size={14} />
              <span>Call Primary</span>
              <span className="tap-num-sub">+91 8685048414</span>
            </a>

            <a 
              href="https://wa.me/918685048414?text=Hi%20Shubh%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-tap-pill tap-whatsapp"
              title="Message on WhatsApp"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
              <span className="tap-chip">Instant Reply</span>
            </a>

            <a 
              href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="quick-tap-pill tap-directions"
              title="Launch Google Maps Route"
            >
              <Navigation size={14} />
              <span>GPS Directions</span>
              <ArrowUpRight size={12} />
            </a>

            <a 
              href="#book" 
              className="quick-tap-pill tap-book"
              title="Book your consultation"
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </a>
          </div>
        </motion.div>

        {/* ── NEW: SPECIALIST CONSULTATION & TIMINGS GLANCE ROW ── */}
        <div className="contact-glance-bar">
          <div className="glance-item">
            <Clock size={14} className="glance-icon icon-emerald" />
            <div className="glance-text">
              <span className="glance-label">CONSULTATION HOURS</span>
              <strong>Mon–Sat: 9:30 AM – 8:00 PM <span className="glance-sub">(Sun By Appt)</span></strong>
            </div>
          </div>
          <div className="glance-sep" />
          <div className="glance-item">
            <Stethoscope size={14} className="glance-icon icon-copper" />
            <div className="glance-text">
              <span className="glance-label">HEAD SPECIALISTS (PGI CHANDIGARH)</span>
              <strong>Prof. Dr. S. K. Yadav &amp; Dr. Achla Yadav</strong>
            </div>
          </div>
          <div className="glance-sep" />
          <div className="glance-item">
            <Video size={14} className="glance-icon icon-blue" />
            <div className="glance-text">
              <span className="glance-label">ONLINE CONSULTATION</span>
              <strong>Video Consults for Outstation &amp; NRIs</strong>
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE INFO HUB: TABS (ADDRESS, TRANSIT, HOURS, ONLINE) ── */}
        <div className="contact-interactive-card">
          <div className="contact-tab-selectors" role="tablist">
            <button 
              type="button" 
              onClick={() => setActiveTab('address')}
              className={`c-tab-btn ${activeTab === 'address' ? 'c-tab-btn--active' : ''}`}
            >
              <MapPin size={13} />
              <span>Address &amp; Phones</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('transit')}
              className={`c-tab-btn ${activeTab === 'transit' ? 'c-tab-btn--active' : ''}`}
            >
              <Car size={13} />
              <span>How To Reach (Transit)</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('hours')}
              className={`c-tab-btn ${activeTab === 'hours' ? 'c-tab-btn--active' : ''}`}
            >
              <Clock size={13} />
              <span>Timings &amp; Waiting</span>
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('online')}
              className={`c-tab-btn ${activeTab === 'online' ? 'c-tab-btn--active' : ''}`}
            >
              <Video size={13} />
              <span>Video &amp; NRIs</span>
            </button>
          </div>

          <div className="contact-tab-content-box">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: ADDRESS & PHONE DETAILS */}
              {activeTab === 'address' && (
                <motion.div 
                  key="address"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="tab-panel-inner"
                >
                  <div className="address-phones-grid">
                    {/* Address Box */}
                    <div className="info-sub-panel">
                      <div className="isp-header">
                        <div className="isp-icon icon-terracotta"><MapPin size={16} /></div>
                        <div className="isp-title-wrap">
                          <h3 className="isp-title">Clinic Address</h3>
                          <span className="isp-sub">Tilak Nagar, Rohtak</span>
                        </div>
                        <button 
                          onClick={handleCopyAddress} 
                          className={`btn-pill-copy ${copied ? 'copied-active' : ''}`}
                          type="button"
                        >
                          {copied ? <Check size={11} /> : <Copy size={11} />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="isp-text">
                        <strong>Lane 9 Corner, Tilak Nagar</strong>, Opp. Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001
                      </p>
                      <div className="isp-footer-link">
                        <a 
                          href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-navigate"
                        >
                          <Navigation size={12} />
                          <span>Get Live GPS Directions</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Helplines Box */}
                    <div className="info-sub-panel">
                      <div className="isp-header">
                        <div className="isp-icon icon-copper"><Phone size={16} /></div>
                        <div className="isp-title-wrap">
                          <h3 className="isp-title">Direct Helplines</h3>
                          <span className="isp-sub">Doctor Desk &amp; Reception</span>
                        </div>
                        <button 
                          onClick={() => handleCopyPhone('+918685048414')} 
                          className={`btn-pill-copy ${copiedPhone ? 'copied-active' : ''}`}
                          type="button"
                        >
                          {copiedPhone ? <Check size={11} /> : <Copy size={11} />}
                          <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="isp-phones-row">
                        <div className="mini-phone-chip">
                          <div className="mpc-text">
                            <span className="mpc-lbl">Doctor Mobile / WA:</span>
                            <a href="tel:+918685048414" className="mpc-num">+91 8685048414</a>
                          </div>
                          <a href="tel:+918685048414" className="mpc-btn-call">Call</a>
                        </div>
                        <div className="mini-phone-chip">
                          <div className="mpc-text">
                            <span className="mpc-lbl">Clinic Landline:</span>
                            <a href="tel:01262469393" className="mpc-num">01262-469393</a>
                          </div>
                          <a href="tel:01262469393" className="mpc-btn-call">Call</a>
                        </div>
                      </div>
                      <div className="isp-email-row">
                        <Mail size={12} className="mail-icon" />
                        <span>Email: <a href="mailto:sky20083@gmail.com">sky20083@gmail.com</a></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TRANSIT & COMMUTE TIMES */}
              {activeTab === 'transit' && (
                <motion.div 
                  key="transit"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="tab-panel-inner"
                >
                  <div className="transit-cards-grid">
                    {TRANSIT_ROUTES.map((item, idx) => (
                      <div key={idx} className="transit-pill-item">
                        <div className="tpi-top">
                          <span className="tpi-mode">{item.mode}</span>
                          <span className="tpi-time">{item.time}</span>
                        </div>
                        <strong className="tpi-from">{item.from}</strong>
                        <p className="tpi-route">{item.route}</p>
                      </div>
                    ))}
                  </div>
                  <div className="transit-bottom-note">
                    <Info size={13} className="tb-icon" />
                    <span>Free reserved parking space available directly in front of the clinic for both 4-wheelers and 2-wheelers.</span>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: TIMINGS & EMERGENCY DETAILS */}
              {activeTab === 'hours' && (
                <motion.div 
                  key="hours"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="tab-panel-inner"
                >
                  <div className="timings-dual-grid">
                    <div className="time-card-box">
                      <div className="tcb-header">
                        <span className="tcb-day">Monday to Saturday</span>
                        <span className="tcb-status-pill">Regular Hours</span>
                      </div>
                      <strong className="tcb-hours">09:30 AM – 08:00 PM</strong>
                      <p className="tcb-desc">Continuous consultation slots. Walk-ins accommodated, online booked slots get direct zero-wait seating.</p>
                    </div>

                    <div className="time-card-box tcb-sunday">
                      <div className="tcb-header">
                        <span className="tcb-day">Sunday Consultations</span>
                        <span className="tcb-status-pill sunday-pill">VIP Pre-Booked</span>
                      </div>
                      <strong className="tcb-hours">10:00 AM – 02:00 PM</strong>
                      <p className="tcb-desc">Reserved for orthodontic adjustments, aligner pickups, and pre-scheduled cosmetic or implant procedures.</p>
                    </div>
                  </div>
                  <div className="emergency-alert-strip">
                    <ShieldCheck size={14} className="alert-icon" />
                    <span><strong>Dental Emergencies:</strong> Severe toothache, chipped teeth or broken braces? Call <strong>+91-8685048414</strong> immediately for priority emergency attention.</span>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: ONLINE CONSULTATION & NRIs */}
              {activeTab === 'online' && (
                <motion.div 
                  key="online"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="tab-panel-inner"
                >
                  <div className="online-consult-panel">
                    <div className="oc-text-col">
                      <span className="oc-tag">VIRTUAL APPOINTMENTS</span>
                      <h3 className="oc-title">1-on-1 Video Consultation with Prof. Dr. S. K. Yadav</h3>
                      <p className="oc-desc">
                        Living out of station or overseas? Schedule a private Zoom / WhatsApp Video Consultation to review dental X-rays, discuss clear aligner timelines, and receive customized treatment estimates before visiting Rohtak.
                      </p>
                      <div className="oc-features-list">
                        <span>✓ Digital X-Ray &amp; Photo Analysis</span>
                        <span>✓ Direct Prescription &amp; Treatment Blueprint</span>
                        <span>✓ Dedicated Support for UK, US, Canada &amp; Gulf NRIs</span>
                      </div>
                    </div>
                    <div className="oc-action-col">
                      <a 
                        href="https://wa.me/918685048414?text=Hi%20Dr.%20Yadav,%20I%20would%20like%20to%20book%20an%20Online%20Video%20Consultation." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="oc-cta-btn"
                      >
                        <Video size={14} />
                        <span>Book Video Consultation</span>
                        <ArrowUpRight size={12} />
                      </a>
                      <span className="oc-note">Quick confirmation via WhatsApp desk</span>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* ── MAP & LANDMARK SHOWCASE COLUMN ── */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="innovative-map-showcase"
        >
          {/* Map Top HUD Header */}
          <div className="map-hud-header">
            <div className="clinic-hud-title">
              <div className="hud-pin-icon">
                <MapPin size={14} />
              </div>
              <div>
                <h3 className="hud-name font-heading">Shubh Dental Clinic</h3>
                <div className="hud-ratings-row">
                  <span className="hud-stars">★★★★★</span>
                  <span className="hud-review-text">5.0 · 150+ Verified Google Reviews</span>
                </div>
              </div>
            </div>

            {/* View Mode Switcher Pills */}
            <div className="map-view-pills" role="tablist">
              <button
                type="button"
                onClick={() => setMapMode('map')}
                className={`view-pill ${mapMode === 'map' ? 'view-pill--active' : ''}`}
              >
                <Compass size={12} />
                <span>Map</span>
              </button>
              <button
                type="button"
                onClick={() => setMapMode('satellite')}
                className={`view-pill ${mapMode === 'satellite' ? 'view-pill--active' : ''}`}
              >
                <span>🛰️ Satellite</span>
              </button>
              <button
                type="button"
                onClick={() => setMapMode('landmarks')}
                className={`view-pill ${mapMode === 'landmarks' ? 'view-pill--active' : ''}`}
              >
                <Car size={12} />
                <span>Landmarks</span>
              </button>
            </div>
          </div>

          {/* Map Frame Screen */}
          <div className="map-screen-frame">
            {mapMode === 'landmarks' ? (
              <div className="landmarks-guide-panel">
                <div className="landmarks-header-row">
                  <h4 className="landmarks-panel-title font-heading">Key Landmarks &amp; Access Routes</h4>
                  <span className="landmarks-badge">Delhi Bypass Chowk</span>
                </div>

                <div className="landmarks-cards-grid">
                  {LANDMARKS.map((lm, i) => (
                    <div key={i} className="landmark-item-card">
                      <span className="landmark-emoji">{lm.icon}</span>
                      <div className="landmark-item-text">
                        <strong className="lm-title">{lm.title}</strong>
                        <p className="lm-desc">{lm.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-open-google-maps"
                >
                  <Navigation size={13} />
                  <span>Open in Google Maps for Turn-by-Turn GPS</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            ) : (
              <div className="map-iframe-wrapper">
                <iframe
                  title="Shubh Orthodontic & Dental Clinic Google Maps Location"
                  src={mapMode === 'satellite' 
                    ? "https://maps.google.com/maps?q=28.891128,76.621873&t=k&z=17&hl=en&ie=UTF8&output=embed"
                    : "https://maps.google.com/maps?q=28.891128,76.621873&t=m&z=17&hl=en&ie=UTF8&output=embed"
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}

            {/* Bottom Quick Map Action Strip */}
            <div className="map-bottom-cta-strip">
              <div className="map-strip-info">
                <Car size={13} className="map-strip-icon" />
                <span>Free Dedicated Ground Parking Available</span>
              </div>

              <a
                href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-strip-navigate"
              >
                <Navigation size={12} />
                <span>Start Live GPS</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section-wrapper {
          padding: 1.75rem 1rem 2rem !important;
          background: #FAF8F5;
          position: relative;
          overflow: hidden;
        }

        .contact-bg-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .contact-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }
        .orb-left {
          width: 380px; height: 380px;
          bottom: -80px; left: -100px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.18) 0%, transparent 70%);
        }
        .orb-right {
          width: 440px; height: 440px;
          top: -100px; right: -120px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.14) 0%, transparent 70%);
        }

        .contact-container {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* HEADER & HERO */
        .contact-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .contact-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.08);
          color: #B85C24;
          padding: 0.28rem 0.85rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: 1px solid rgba(214, 122, 65, 0.22);
          margin-bottom: 0.5rem;
        }

        .live-clinic-beacon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 8px;
          height: 8px;
        }
        .beacon-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }
        .beacon-ping {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #10B981;
          opacity: 0.75;
          animation: beaconPing 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes beaconPing {
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }

        .contact-title {
          font-size: clamp(1.75rem, 3.2vw, 2.4rem);
          font-weight: 900;
          color: #0E0604;
          margin-bottom: 0.35rem;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }

        .copper-gradient-text {
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: 0.9rem;
          color: #634F45;
          max-width: 600px;
          margin: 0 auto 1rem;
          line-height: 1.45;
        }

        /* QUICK ACTION TAPS BAR */
        .contact-quick-taps {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 1.25rem;
        }

        .quick-tap-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.52rem 1.05rem;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(74, 37, 24, 0.05);
        }

        .tap-call {
          background: #110805;
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .tap-call:hover {
          background: #25120A;
          transform: translateY(-2px);
        }
        .tap-num-sub {
          color: #E2B294;
          font-size: 0.74rem;
          font-weight: 700;
        }

        .tap-whatsapp {
          background: #25D366;
          color: #FFFFFF;
        }
        .tap-whatsapp:hover {
          background: #1EBE5D;
          transform: translateY(-2px);
        }
        .tap-chip {
          background: rgba(0, 0, 0, 0.16);
          padding: 0.1rem 0.4rem;
          border-radius: 99px;
          font-size: 0.65rem;
          font-weight: 700;
        }

        .tap-directions {
          background: #FFFFFF;
          color: #B85C24;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
        }
        .tap-directions:hover {
          background: #FFF8F2;
          transform: translateY(-2px);
        }

        .tap-book {
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
        }
        .tap-book:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.3);
        }

        /* ── GLANCE BAR ── */
        .contact-glance-bar {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.1);
          border-radius: 16px;
          padding: 0.65rem 1rem;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.03);
          gap: 0.75rem;
        }
        .glance-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .glance-icon {
          flex-shrink: 0;
        }
        .icon-emerald { color: #059669; }
        .icon-copper { color: #D67A41; }
        .icon-blue { color: #2563EB; }

        .glance-text {
          display: flex;
          flex-direction: column;
        }
        .glance-label {
          font-size: 0.62rem;
          font-weight: 800;
          color: #8C7569;
          letter-spacing: 0.04em;
        }
        .glance-text strong {
          font-size: 0.78rem;
          color: #110805;
          font-weight: 800;
        }
        .glance-sub {
          font-size: 0.7rem;
          color: #B85C24;
          font-weight: 600;
        }
        .glance-sep {
          width: 1px;
          height: 24px;
          background: rgba(74, 37, 24, 0.1);
        }

        /* ── INTERACTIVE INFO HUB ── */
        .contact-interactive-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1.5px solid rgba(214, 122, 65, 0.22);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.04);
          padding: 1.15rem;
          margin-bottom: 1.25rem;
        }

        .contact-tab-selectors {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FAF8F5;
          padding: 3px;
          border-radius: 99px;
          border: 1px solid rgba(74, 37, 24, 0.08);
          margin-bottom: 1rem;
          overflow-x: auto;
        }
        .c-tab-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.45rem 0.75rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          font-size: 0.75rem;
          font-weight: 800;
          color: #634F45;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .c-tab-btn--active {
          background: #110805;
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(17, 8, 5, 0.2);
        }

        /* TAB 1: ADDRESS & PHONES GRID */
        .address-phones-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .info-sub-panel {
          background: #FAF8F5;
          border-radius: 16px;
          border: 1px solid rgba(74, 37, 24, 0.08);
          padding: 0.95rem 1.05rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .isp-header {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.45rem;
        }
        .isp-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .icon-terracotta {
          background: rgba(214, 122, 65, 0.12);
          color: #B85C24;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }
        .icon-copper {
          background: rgba(184, 92, 36, 0.12);
          color: #B85C24;
          border: 1px solid rgba(184, 92, 36, 0.22);
        }
        .isp-title-wrap {
          flex: 1;
        }
        .isp-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0E0604;
          margin: 0;
          line-height: 1.2;
        }
        .isp-sub {
          font-size: 0.68rem;
          color: #8C7569;
          font-weight: 600;
        }
        .btn-pill-copy {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.15);
          border-radius: 99px;
          padding: 0.18rem 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: #634F45;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .btn-pill-copy.copied-active {
          background: #ECFDF5;
          border-color: #10B981;
          color: #059669;
        }
        .isp-text {
          font-size: 0.82rem;
          color: #4A382F;
          line-height: 1.5;
          margin: 0 0 0.55rem;
        }
        .isp-footer-link {
          padding-top: 0.45rem;
          border-top: 1px dashed rgba(74, 37, 24, 0.1);
        }
        .link-navigate {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #B85C24;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
        }
        .link-navigate:hover {
          color: #944415;
        }

        .isp-phones-row {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 0.45rem;
        }
        .mini-phone-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          padding: 0.35rem 0.55rem;
          border-radius: 10px;
          border: 1px solid rgba(74, 37, 24, 0.06);
        }
        .mpc-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .mpc-lbl {
          font-size: 0.66rem;
          color: #8C7569;
          font-weight: 700;
        }
        .mpc-num {
          font-size: 0.84rem;
          font-weight: 800;
          color: #110805;
          text-decoration: none;
        }
        .mpc-btn-call {
          background: #110805;
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.18rem 0.5rem;
          border-radius: 6px;
          text-decoration: none;
        }
        .mpc-btn-call:hover {
          background: #B85C24;
        }
        .isp-email-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: #634F45;
          padding-top: 0.25rem;
        }
        .isp-email-row a {
          color: #110805;
          font-weight: 700;
          text-decoration: none;
        }

        /* TAB 2: TRANSIT GRID */
        .transit-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.65rem;
          margin-bottom: 0.65rem;
        }
        .transit-pill-item {
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.08);
          border-radius: 12px;
          padding: 0.65rem 0.75rem;
          display: flex;
          flex-direction: column;
        }
        .tpi-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .tpi-mode {
          font-size: 0.64rem;
          font-weight: 800;
          color: #B85C24;
          text-transform: uppercase;
        }
        .tpi-time {
          background: #110805;
          color: #FFFFFF;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.12rem 0.4rem;
          border-radius: 6px;
        }
        .tpi-from {
          font-size: 0.8rem;
          font-weight: 800;
          color: #110805;
          line-height: 1.25;
          margin-bottom: 0.15rem;
        }
        .tpi-route {
          font-size: 0.7rem;
          color: #634F45;
          line-height: 1.35;
          margin: 0;
        }
        .transit-bottom-note {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 10px;
          padding: 0.45rem 0.75rem;
          font-size: 0.74rem;
          color: #065F46;
          font-weight: 600;
        }
        .tb-icon { color: #10B981; flex-shrink: 0; }

        /* TAB 3: TIMINGS */
        .timings-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
        }
        .time-card-box {
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.08);
          border-radius: 14px;
          padding: 0.75rem 0.9rem;
        }
        .tcb-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .tcb-day {
          font-size: 0.72rem;
          font-weight: 800;
          color: #8C7569;
        }
        .tcb-status-pill {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
        }
        .sunday-pill {
          background: #FFF7ED;
          color: #C2410C;
        }
        .tcb-hours {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 900;
          color: #110805;
          display: block;
          margin-bottom: 0.25rem;
        }
        .tcb-desc {
          font-size: 0.72rem;
          color: #634F45;
          line-height: 1.4;
          margin: 0;
        }
        .emergency-alert-strip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 10px;
          padding: 0.45rem 0.75rem;
          font-size: 0.74rem;
          color: #7C2D12;
        }
        .alert-icon { color: #B85C24; flex-shrink: 0; }

        /* TAB 4: ONLINE CONSULTATION */
        .online-consult-panel {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 1rem;
          align-items: center;
          background: #FAF8F5;
          border-radius: 16px;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        .oc-tag {
          font-size: 0.64rem;
          font-weight: 800;
          color: #2563EB;
          letter-spacing: 0.04em;
        }
        .oc-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #110805;
          margin: 0.15rem 0 0.35rem;
        }
        .oc-desc {
          font-size: 0.76rem;
          color: #554137;
          line-height: 1.45;
          margin-bottom: 0.5rem;
        }
        .oc-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: #1E40AF;
        }
        .oc-action-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.4rem;
        }
        .oc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #2563EB;
          color: #FFFFFF;
          padding: 0.65rem 1.15rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
        }
        .oc-cta-btn:hover {
          background: #1D4ED8;
        }
        .oc-note {
          font-size: 0.68rem;
          color: #8C7569;
        }

        /* ── MAP SHOWCASE ── */
        .innovative-map-showcase {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 1rem;
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.05);
          display: flex;
          flex-direction: column;
        }

        .map-hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1.5px solid rgba(74, 37, 24, 0.07);
          margin-bottom: 0.75rem;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .clinic-hud-title {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .hud-pin-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hud-name {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0E0604;
          margin: 0;
          line-height: 1.2;
        }
        .hud-ratings-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .hud-stars {
          color: #F59E0B;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
        }
        .hud-review-text {
          font-size: 0.68rem;
          font-weight: 700;
          color: #8C7569;
        }

        .map-view-pills {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: #FAF8F5;
          padding: 3px;
          border-radius: 99px;
          border: 1px solid rgba(74, 37, 24, 0.09);
        }
        .view-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: transparent;
          border: none;
          padding: 0.28rem 0.6rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          color: #634F45;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .view-pill--active {
          background: #FFFFFF;
          color: #B85C24;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .map-screen-frame {
          border-radius: 16px;
          overflow: hidden;
          background: #FAF8F5;
          position: relative;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .map-iframe-wrapper {
          position: relative;
          width: 100%;
          flex-grow: 1;
          min-height: 300px;
        }

        .landmarks-guide-panel {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          height: 100%;
          justify-content: space-between;
        }
        .landmarks-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .landmarks-panel-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0E0604;
          margin: 0;
        }
        .landmarks-badge {
          background: rgba(214, 122, 65, 0.12);
          color: #B85C24;
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          font-size: 0.65rem;
          font-weight: 800;
        }
        .landmarks-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
        }
        .landmark-item-card {
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.08);
          border-radius: 12px;
          padding: 0.65rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .landmark-emoji {
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .landmark-item-text {
          display: flex;
          flex-direction: column;
        }
        .lm-title {
          font-size: 0.76rem;
          font-weight: 800;
          color: #0E0604;
          margin-bottom: 0.1rem;
        }
        .lm-desc {
          font-size: 0.68rem;
          color: #634F45;
          line-height: 1.3;
          margin: 0;
        }

        .btn-open-google-maps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: #110805;
          color: #FFFFFF;
          padding: 0.65rem 0.95rem;
          border-radius: 10px;
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(17, 8, 5, 0.15);
        }
        .btn-open-google-maps:hover {
          background: #B85C24;
        }

        .map-bottom-cta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          padding: 0.55rem 0.85rem;
          border-top: 1.5px solid rgba(74, 37, 24, 0.08);
          gap: 0.55rem;
        }
        .map-strip-info {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: #634F45;
        }
        .map-strip-icon { color: #10B981; }

        .btn-strip-navigate {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          text-decoration: none;
        }

        /* ── RESPONSIVE COMPACT LAYOUT FOR MOBILE ── */
        @media (max-width: 960px) {
          .contact-glance-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.45rem;
          }
          .glance-sep { display: none; }
          .address-phones-grid {
            grid-template-columns: 1fr;
          }
          .transit-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .online-consult-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-section-wrapper {
            padding: 1rem 0.6rem 1.25rem !important;
          }
          .contact-header {
            margin-bottom: 0.65rem !important;
          }
          .contact-top-badge {
            font-size: 0.62rem !important;
            padding: 0.18rem 0.55rem !important;
            margin-bottom: 0.3rem !important;
          }
          .contact-title {
            font-size: 1.38rem !important;
            margin-bottom: 0.2rem !important;
          }
          .contact-subtitle {
            font-size: 0.74rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.65rem !important;
          }

          /* Mobile quick taps: 2x2 grid */
          .contact-quick-taps {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.35rem !important;
            margin-bottom: 0.65rem !important;
          }
          .quick-tap-pill {
            padding: 0.42rem 0.55rem !important;
            font-size: 0.72rem !important;
            border-radius: 10px !important;
            justify-content: center !important;
          }
          .tap-num-sub { display: none !important; }
          .tap-chip { display: none !important; }

          /* Glance Bar Mobile */
          .contact-glance-bar {
            padding: 0.5rem 0.65rem !important;
            border-radius: 12px !important;
            margin-bottom: 0.75rem !important;
            gap: 0.35rem !important;
          }
          .glance-label {
            font-size: 0.58rem !important;
          }
          .glance-text strong {
            font-size: 0.72rem !important;
          }

          /* Interactive card Mobile */
          .contact-interactive-card {
            padding: 0.65rem !important;
            border-radius: 16px !important;
            margin-bottom: 0.85rem !important;
          }
          .contact-tab-selectors {
            margin-bottom: 0.65rem !important;
            gap: 0.25rem !important;
          }
          .c-tab-btn {
            padding: 0.35rem 0.5rem !important;
            font-size: 0.68rem !important;
          }
          .c-tab-btn svg {
            width: 12px !important;
            height: 12px !important;
          }

          .address-phones-grid {
            gap: 0.55rem !important;
          }
          .info-sub-panel {
            padding: 0.65rem 0.75rem !important;
            border-radius: 12px !important;
          }
          .isp-icon {
            width: 26px !important;
            height: 26px !important;
            border-radius: 7px !important;
          }
          .isp-icon svg {
            width: 13px !important;
            height: 13px !important;
          }
          .isp-title {
            font-size: 0.82rem !important;
          }
          .btn-pill-copy {
            padding: 0.12rem 0.4rem !important;
            font-size: 0.6rem !important;
          }
          .isp-text {
            font-size: 0.74rem !important;
            margin-bottom: 0.4rem !important;
          }
          .mini-phone-chip {
            padding: 0.25rem 0.45rem !important;
          }
          .mpc-num {
            font-size: 0.76rem !important;
          }
          .mpc-btn-call {
            padding: 0.15rem 0.4rem !important;
            font-size: 0.62rem !important;
          }
          .isp-email-row {
            font-size: 0.7rem !important;
          }

          .transit-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.4rem !important;
          }
          .transit-pill-item {
            padding: 0.45rem 0.55rem !important;
            border-radius: 10px !important;
          }
          .tpi-from {
            font-size: 0.74rem !important;
          }
          .tpi-route {
            font-size: 0.64rem !important;
          }
          .transit-bottom-note {
            font-size: 0.68rem !important;
            padding: 0.35rem 0.55rem !important;
          }

          .timings-dual-grid {
            grid-template-columns: 1fr !important;
            gap: 0.45rem !important;
          }
          .time-card-box {
            padding: 0.55rem 0.7rem !important;
            border-radius: 10px !important;
          }
          .tcb-hours {
            font-size: 0.88rem !important;
          }
          .emergency-alert-strip {
            font-size: 0.68rem !important;
            padding: 0.35rem 0.55rem !important;
          }

          .online-consult-panel {
            padding: 0.75rem !important;
            border-radius: 12px !important;
          }
          .oc-title {
            font-size: 0.85rem !important;
          }
          .oc-desc {
            font-size: 0.7rem !important;
          }
          .oc-cta-btn {
            font-size: 0.74rem !important;
            padding: 0.5rem 0.9rem !important;
          }

          /* Map Showcase Mobile */
          .innovative-map-showcase {
            padding: 0.65rem !important;
            border-radius: 16px !important;
          }
          .map-hud-header {
            margin-bottom: 0.45rem !important;
            padding-bottom: 0.45rem !important;
          }
          .hud-pin-icon {
            width: 26px !important;
            height: 26px !important;
          }
          .hud-name {
            font-size: 0.82rem !important;
          }
          .map-view-pills {
            width: 100% !important;
            justify-content: space-between !important;
          }
          .view-pill {
            flex: 1 !important;
            justify-content: center !important;
            padding: 0.22rem 0.35rem !important;
            font-size: 0.65rem !important;
          }

          .map-screen-frame {
            min-height: 230px !important;
            border-radius: 12px !important;
          }
          .map-iframe-wrapper {
            min-height: 210px !important;
          }
          .landmarks-guide-panel {
            padding: 0.65rem !important;
            gap: 0.55rem !important;
          }
          .landmarks-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 0.4rem !important;
          }
          .landmark-item-card {
            padding: 0.45rem !important;
          }
          .lm-title {
            font-size: 0.72rem !important;
          }
          .lm-desc {
            font-size: 0.64rem !important;
          }
          .btn-open-google-maps {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.7rem !important;
          }
          .map-bottom-cta-strip {
            padding: 0.4rem 0.6rem !important;
          }
          .map-strip-info {
            font-size: 0.66rem !important;
          }
          .btn-strip-navigate {
            font-size: 0.66rem !important;
            padding: 0.25rem 0.55rem !important;
          }
        }
      `}} />
    </section>
  );
}