'use client';
import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Navigation, 
  ExternalLink, Sparkles, Star, Car, Compass, CheckCircle2, 
  Copy, Check, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const LANDMARKS = [
  { icon: '🏫', title: 'Opp. Swami Nitanand School', desc: 'Direct landmark right across the lane' },
  { icon: '🛣️', title: 'Delhi Bypass Chowk', desc: 'Just 2 mins from the main bypass junction' },
  { icon: '🅿️', title: 'Free On-Premises Parking', desc: 'Spacious hassle-free car & two-wheeler parking' },
  { icon: '🚉', title: 'Rohtak Junction Railway', desc: 'Approx 8-10 mins drive (4.2 km)' }
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState('map'); // 'map' | 'satellite' | 'landmarks'

  const handleCopyAddress = () => {
    const address = "Shubh Orthodontic & Dental Clinic, Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      
      {/* Ambient Glows */}
      <div className="contact-bg-elements" aria-hidden="true">
        <div className="contact-glow-orb orb-left" />
        <div className="contact-glow-orb orb-right" />
      </div>

      <div className="contact-container">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="contact-header text-center"
        >
          <div className="contact-badge">
            <span className="live-clinic-dot" />
            <span>CLINIC LOCATION &amp; APPOINTMENTS</span>
          </div>
          <h2 className="contact-title font-heading">
            Visit Our <span className="gold-gradient-text">World-Class Clinic</span>
          </h2>
          <p className="contact-subtitle">
            Conveniently situated on Delhi Bypass Road, Rohtak — accessible within minutes from Model Town, D-Park, and Delhi-NCR express routes.
          </p>
        </motion.div>

        <div className="contact-grid">
          
          {/* Details Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="contact-details-col"
          >
            
            {/* Address Card with Copy Action */}
            <motion.div variants={fadeUp} className="contact-info-card">
              <div className="card-icon-wrap icon-primary">
                <MapPin size={22} />
              </div>
              <div className="card-info-content">
                <div className="card-info-header">
                  <h3 className="card-info-title font-heading">Clinic Address</h3>
                  <button 
                    onClick={handleCopyAddress}
                    className="btn-copy-address"
                    title="Copy full address"
                  >
                    {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <p className="card-info-text">
                  Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001
                </p>
                <div className="card-action-links">
                  <a
                    href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-map-directions"
                  >
                    <Navigation size={14} />
                    <span>Get Live GPS Directions</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone & Email Box */}
            <motion.div variants={fadeUp} className="contact-info-card">
              <div className="card-icon-wrap icon-gold">
                <Phone size={22} />
              </div>
              <div className="card-info-content">
                <h3 className="card-info-title font-heading">Direct Helpline &amp; WhatsApp</h3>
                <div className="phone-numbers-list">
                  <div className="phone-item">
                    <span className="phone-label">Primary Mobile:</span>
                    <a href="tel:+918685048414" className="phone-link">+91 8685048414</a>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Clinic Landline:</span>
                    <a href="tel:01262469393" className="phone-link">01262-469393</a>
                  </div>
                </div>

                <div className="email-sub-box">
                  <Mail size={15} className="email-icon" />
                  <a href="mailto:sky20083@gmail.com" className="email-link">sky20083@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Timings Box with Live Open Pill */}
            <motion.div variants={fadeUp} className="contact-info-card">
              <div className="card-icon-wrap icon-dark">
                <Clock size={22} />
              </div>
              <div className="card-info-content">
                <div className="card-info-header">
                  <h3 className="card-info-title font-heading">Consultation Timings</h3>
                  <span className="live-open-pill">
                    <span className="pulse-green-dot" />
                    <span>Open Today</span>
                  </span>
                </div>
                <p className="card-info-text">
                  <strong>Mon – Sat:</strong> 09:30 AM – 08:00 PM<br />
                  <strong>Sunday:</strong> By Appointment Only (Pre-booked)
                </p>
              </div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div className="contact-actions-grid" variants={fadeUp}>
              <a href="tel:+918685048414" className="cs-btn-action-call">
                <Phone size={17} />
                <span>Call Clinic Directly</span>
              </a>
              <a
                href="https://wa.me/918685048414"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn-action-wa"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Desk</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Innovated Map Showcase Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="innovative-map-showcase"
          >
            
            {/* Map Top Interactive HUD Bar */}
            <div className="map-hud-header">
              <div className="clinic-hud-title">
                <div className="hud-pin-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="hud-name font-heading">Shubh Dental Clinic</h4>
                  <span className="hud-stars">⭐ 5.0 Rating · Verified Google Reviews</span>
                </div>
              </div>

              {/* View Switcher Buttons */}
              <div className="map-view-pills">
                <button
                  type="button"
                  onClick={() => setMapMode('map')}
                  className={`view-pill ${mapMode === 'map' ? 'view-pill--active' : ''}`}
                >
                  <Compass size={13} />
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
                  <Car size={13} />
                  <span>Landmarks</span>
                </button>
              </div>
            </div>

            {/* Map Screen Area */}
            <div className="map-screen-frame">
              
              {mapMode === 'landmarks' ? (
                /* Landmarks Visual Card Mode */
                <div className="landmarks-guide-panel">
                  <h4 className="landmarks-panel-title font-heading">Nearby Key Landmarks &amp; Driving Routes</h4>
                  <div className="landmarks-cards-grid">
                    {LANDMARKS.map((lm, i) => (
                      <div key={i} className="landmark-item-card">
                        <span className="landmark-emoji">{lm.icon}</span>
                        <div>
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
                    <Navigation size={16} />
                    <span>Open in Google Maps App for Turn-by-Turn Navigation</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              ) : (
                /* Interactive Google Map Iframe */
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

              {/* Bottom Quick Map Action Bar */}
              <div className="map-bottom-cta-strip">
                <div className="map-strip-info">
                  <Car size={15} className="map-strip-icon" />
                  <span>Ample Parking Space Available</span>
                </div>

                <a
                  href="https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-strip-navigate"
                >
                  <Navigation size={14} />
                  <span>Start Live Navigation</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section-wrapper {
          padding: 2.75rem 1.5rem 0 !important;
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
          filter: blur(90px);
          opacity: 0.5;
        }
        .orb-left {
          width: 500px; height: 500px;
          bottom: -100px; left: -150px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.18) 0%, transparent 70%);
        }
        .orb-right {
          width: 600px; height: 600px;
          top: -100px; right: -200px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%);
        }

        .contact-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 1.75rem;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.12);
          color: #D67A41;
          padding: 0.4rem 1.1rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.25);
          margin-bottom: 1rem;
        }

        .live-clinic-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        .contact-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 900;
          color: #0E0604;
          margin-bottom: 0.75rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: 1.02rem;
          color: #66544C;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2.75rem;
          align-items: stretch;
        }

        .contact-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* PORCELAIN INFO CARDS */
        .contact-info-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 1.65rem;
          border: 1.5px solid rgba(74, 37, 24, 0.08);
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.04);
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 122, 65, 0.35);
          box-shadow: 0 16px 40px rgba(74, 37, 24, 0.08);
        }

        .card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-primary {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.15) 0%, rgba(214, 122, 65, 0.05) 100%);
          color: #D67A41;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }

        .icon-gold {
          background: linear-gradient(135deg, rgba(201, 168, 76, 0.2) 0%, rgba(201, 168, 76, 0.05) 100%);
          color: #B88E28;
          border: 1px solid rgba(201, 168, 76, 0.25);
        }

        .icon-dark {
          background: linear-gradient(135deg, rgba(17, 8, 5, 0.1) 0%, rgba(17, 8, 5, 0.02) 100%);
          color: #110805;
          border: 1px solid rgba(17, 8, 5, 0.15);
        }

        .card-info-content {
          flex: 1;
        }

        .card-info-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }

        .card-info-title {
          font-size: 1.1rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0;
        }

        .btn-copy-address {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.12);
          border-radius: 99px;
          padding: 0.2rem 0.6rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-copy-address:hover {
          background: #FFF5EB;
          border-color: #D67A41;
          color: #D67A41;
        }

        .card-info-text {
          font-size: 0.92rem;
          color: #4A3A33;
          line-height: 1.6;
          margin: 0;
        }

        .card-action-links {
          margin-top: 0.65rem;
        }

        .btn-map-directions {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #D67A41;
          font-size: 0.84rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-map-directions:hover {
          color: #B85922;
          transform: translateX(2px);
        }

        .phone-numbers-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin: 0.35rem 0;
        }
        .phone-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
        }
        .phone-label {
          color: #8A7063;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .phone-link {
          color: #0E0604;
          font-weight: 800;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .phone-link:hover {
          color: #D67A41;
        }

        .email-sub-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1.5px dashed rgba(214, 122, 65, 0.2);
          font-size: 0.88rem;
          font-weight: 700;
        }
        .email-icon { color: #D67A41; }
        .email-link {
          color: #0E0604;
          text-decoration: none;
        }
        .email-link:hover { color: #D67A41; }

        .live-open-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #EDFCF4;
          color: #0E7A53;
          border: 1px solid rgba(14, 122, 83, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
        }
        .pulse-green-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .contact-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .contact-actions-grid, .contact-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .cs-btn-action-call, .cs-btn-action-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.95rem 1.25rem;
          border-radius: 16px;
          font-family: var(--font-heading);
          font-size: 0.94rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-btn-action-call {
          background: linear-gradient(135deg, #130A06 0%, #261309 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 8px 20px rgba(17, 8, 5, 0.15);
        }
        .cs-btn-action-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(17, 8, 5, 0.25);
        }

        .cs-btn-action-wa {
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #FFFFFF;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }
        .cs-btn-action-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(37, 211, 102, 0.4);
        }

        /* INNOVATED MAP SHOWCASE COLUMN */
        .innovative-map-showcase {
          background: #FFFFFF;
          border-radius: 32px;
          padding: 1.25rem;
          border: 2px solid rgba(214, 122, 65, 0.25);
          box-shadow: 0 20px 50px rgba(74, 37, 24, 0.08);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .map-hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1.5px solid rgba(74, 37, 24, 0.06);
          margin-bottom: 1rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .clinic-hud-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .hud-pin-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.3);
        }
        .hud-name {
          font-size: 1.02rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0;
          line-height: 1.2;
        }
        .hud-stars {
          font-size: 0.75rem;
          font-weight: 700;
          color: #8A7063;
        }

        .map-view-pills {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FAF8F5;
          padding: 4px;
          border-radius: 99px;
          border: 1px solid rgba(74, 37, 24, 0.1);
        }
        .view-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: transparent;
          border: none;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          font-size: 0.74rem;
          font-weight: 800;
          color: #6E5448;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .view-pill--active {
          background: #FFFFFF;
          color: #7A340F;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        /* MAP SCREEN FRAME */
        .map-screen-frame {
          border-radius: 22px;
          overflow: hidden;
          background: #FAF8F5;
          position: relative;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .map-iframe-wrapper {
          position: relative;
          width: 100%;
          flex-grow: 1;
          min-height: 380px;
        }

        /* FLOATING BEACON OVERLAY */
        .map-beacon-overlay {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          z-index: 10;
          pointer-events: none;
        }
        .beacon-card {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 0.6rem 1rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
        }
        .beacon-icon { font-size: 1.2rem; }
        .beacon-text {
          display: flex;
          flex-direction: column;
        }
        .beacon-text strong {
          font-size: 0.85rem;
          font-weight: 900;
          color: #0E0604;
        }
        .beacon-text span {
          font-size: 0.72rem;
          color: #6E5448;
          font-weight: 600;
        }

        /* LANDMARKS GUIDE PANEL */
        .landmarks-guide-panel {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          height: 100%;
          justify-content: space-between;
        }
        .landmarks-panel-title {
          font-size: 1.1rem;
          font-weight: 900;
          color: #0E0604;
          margin: 0;
        }
        .landmarks-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }
        .landmark-item-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(74, 37, 24, 0.08);
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          box-shadow: 0 4px 12px rgba(74, 37, 24, 0.02);
        }
        .landmark-emoji { font-size: 1.3rem; flex-shrink: 0; }
        .lm-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          color: #0E0604;
          margin-bottom: 0.15rem;
        }
        .lm-desc {
          font-size: 0.75rem;
          color: #6E5448;
          line-height: 1.4;
          margin: 0;
        }

        .btn-open-google-maps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          color: #FFFFFF;
          padding: 0.85rem 1.25rem;
          border-radius: 14px;
          font-family: var(--font-heading);
          font-size: 0.86rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(17, 8, 5, 0.15);
          transition: all 0.2s ease;
        }
        .btn-open-google-maps:hover {
          background: #D67A41;
          transform: translateY(-2px);
        }

        /* BOTTOM CTA STRIP */
        .map-bottom-cta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          padding: 0.75rem 1rem;
          border-top: 1.5px solid rgba(74, 37, 24, 0.08);
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .map-strip-info {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #6E5448;
        }
        .map-strip-icon { color: #10B981; }

        .btn-strip-navigate {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          padding: 0.45rem 0.95rem;
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.25);
          transition: all 0.2s ease;
        }
        .btn-strip-navigate:hover {
          transform: scale(1.04);
          box-shadow: 0 6px 16px rgba(214, 122, 65, 0.35);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .landmarks-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .contact-section-wrapper {
            padding: 1.5rem 0.75rem 0 !important;
          }
          .contact-header {
            margin-bottom: 0.85rem !important;
          }
          .contact-badge {
            margin-bottom: 0.35rem !important;
            padding: 0.22rem 0.7rem !important;
            font-size: 0.66rem !important;
          }
          .contact-title {
            font-size: 1.4rem !important;
            margin-bottom: 0.3rem !important;
          }
          .contact-subtitle {
            font-size: 0.78rem !important;
            line-height: 1.35 !important;
            margin-bottom: 0 !important;
          }
          .contact-details-col {
            gap: 0.45rem !important;
          }
          .contact-info-card {
            padding: 0.65rem 0.75rem !important;
            border-radius: 14px !important;
            gap: 0.55rem !important;
            align-items: flex-start !important;
            border-width: 1px !important;
            box-shadow: 0 2px 10px rgba(74, 37, 24, 0.04) !important;
          }
          .card-icon-wrap {
            width: 30px !important;
            height: 30px !important;
            border-radius: 8px !important;
            margin-top: 2px !important;
          }
          .card-icon-wrap svg {
            width: 15px !important;
            height: 15px !important;
          }
          .card-info-header {
            margin-bottom: 0.1rem !important;
          }
          .card-info-title {
            font-size: 0.84rem !important;
          }
          .btn-copy-address {
            padding: 0.12rem 0.4rem !important;
            font-size: 0.62rem !important;
          }
          .card-info-text {
            font-size: 0.74rem !important;
            line-height: 1.3 !important;
          }
          .card-action-links {
            margin-top: 0.25rem !important;
          }
          .btn-map-directions {
            font-size: 0.72rem !important;
          }
          .phone-numbers-list {
            gap: 0.15rem !important;
            margin: 0.15rem 0 !important;
          }
          .phone-item {
            font-size: 0.76rem !important;
            gap: 0.35rem !important;
          }
          .phone-label {
            font-size: 0.68rem !important;
          }
          .email-sub-box {
            margin-top: 0.25rem !important;
            padding-top: 0.25rem !important;
            font-size: 0.74rem !important;
          }
          .live-open-pill {
            padding: 0.1rem 0.4rem !important;
            font-size: 0.6rem !important;
          }
          .contact-actions-grid, .contact-actions-row {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.45rem !important;
            margin-top: 0.15rem !important;
          }
          .cs-btn-action-call, .cs-btn-action-wa {
            padding: 0.55rem 0.75rem !important;
            font-size: 0.76rem !important;
            border-radius: 12px !important;
          }
          .innovative-map-showcase {
            padding: 0.65rem !important;
            border-radius: 18px !important;
            margin-top: 0.5rem !important;
          }
          .map-hud-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.4rem !important;
            padding-bottom: 0.6rem !important;
            margin-bottom: 0.6rem !important;
          }
          .hud-pin-icon {
            width: 28px !important;
            height: 28px !important;
            border-radius: 7px !important;
          }
          .hud-name {
            font-size: 0.88rem !important;
          }
          .hud-stars {
            font-size: 0.68rem !important;
          }
          .map-view-pills {
            width: 100% !important;
            justify-content: space-between !important;
            padding: 2px !important;
          }
          .view-pill {
            flex: 1 !important;
            justify-content: center !important;
            font-size: 0.68rem !important;
            padding: 0.24rem 0.4rem !important;
          }
          .map-screen-frame {
            min-height: 280px !important;
            border-radius: 14px !important;
          }
          .map-iframe-wrapper {
            min-height: 260px !important;
          }
          .map-bottom-cta-strip {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.35rem !important;
            padding: 0.55rem 0.75rem !important;
          }
          .map-strip-info {
            font-size: 0.7rem !important;
          }
          .btn-strip-navigate {
            justify-content: center !important;
            font-size: 0.72rem !important;
            padding: 0.35rem 0.75rem !important;
          }
        }
      `}} />
    </section>
  );
}