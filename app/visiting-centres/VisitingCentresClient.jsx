'use client';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Calendar, Navigation, 
  ExternalLink, Sparkles, Clock, Shield, Star, Award, 
  UserCheck, MessageCircle, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const CENTRES_DATA = [
  {
    id: 'rohtak',
    city: 'Rohtak',
    fullName: 'Rohtak — Flagship Super-Specialty Clinic',
    clinic: 'Shubh Orthodontic & Dental Clinic',
    tagline: 'Main Hospital & Advanced Orthodontic Centre',
    address: 'Tilak Nagar Lane 9, Delhi Bypass Road, Rohtak 124001',
    badge: 'Flagship Centre',
    badgeColor: '#D67A41',
    isMain: true,
    timing: 'Mon–Sat: 9:30 AM – 8:00 PM',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/EvRq96h9HMgYJYAw7',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-PGI) & Dr. Achla Yadav'
  },
  {
    id: 'delhi',
    city: 'Delhi',
    fullName: 'Delhi — Rohini Sector 9',
    clinic: 'Nu Smile Dental Clinic',
    tagline: 'Delhi NCR Specialized Orthodontic Hub',
    address: '204 Deepak Plaza, DC Chowk Market, Sector 9, Rohini, Delhi 110085',
    badge: 'Delhi NCR Hub',
    badgeColor: '#3B82F6',
    isMain: false,
    timing: 'By Prior Appointment',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/o5XYefR38UDiBJuQ6?g_st=aw',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-SR PGI Chandigarh)'
  },
  {
    id: 'gurugram',
    city: 'Gurugram',
    fullName: 'Gurugram — Malibu Town, Sec 47',
    clinic: 'Dental Destination',
    tagline: 'Cyber City Elite Aesthetic & Braces Centre',
    address: 'Kenwood-05 (G.F.), Malibu Town, Sector 47, Gurgaon, Haryana 122018',
    badge: 'Gurugram Hub',
    badgeColor: '#3B82F6',
    isMain: false,
    timing: 'By Prior Appointment',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/cJfTbXVA4z9VhbAi8?g_st=aw',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-SR PGI Chandigarh)'
  },
  {
    id: 'panipat',
    city: 'Panipat',
    fullName: 'Panipat — Model Town',
    clinic: 'Dental Studio',
    tagline: 'North Haryana Regional Consultation Hub',
    address: '194-L, Model Town, Panipat 132103 (Haryana)',
    badge: 'Regional Hub',
    badgeColor: '#10B981',
    isMain: false,
    timing: 'By Prior Appointment',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/JqcrHdkJ9Nkymnf46?g_st=aw',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-SR PGI Chandigarh)'
  },
  {
    id: 'sonepat',
    city: 'Sonepat',
    fullName: 'Sonepat — Mirch Mandi',
    clinic: 'Navjeevan Dental Clinic',
    tagline: 'Sonipat City Orthodontic Consultation Centre',
    address: 'Parbhu Nagar Mandi, Near Suri Petrol Pump, Mirch Mandi, Sonipat, Haryana 131001',
    badge: 'Regional Hub',
    badgeColor: '#10B981',
    isMain: false,
    timing: 'By Prior Appointment',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/tLkqkm2j27nz3hvY8?g_st=aw',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-SR PGI Chandigarh)'
  },
  {
    id: 'fatehabad',
    city: 'Fatehabad',
    fullName: 'Fatehabad — Model Town',
    clinic: 'Shree Sai Complete Dental Care Centre',
    tagline: 'West Haryana Specialized Orthodontic Hub',
    address: 'SCF 9, Model Town, Fatehabad, Haryana 125050',
    badge: 'Regional Hub',
    badgeColor: '#10B981',
    isMain: false,
    timing: 'By Prior Appointment',
    phone: '+918685048414',
    mapUrl: 'https://maps.app.goo.gl/qra4nzjgFc43HwDRA?g_st=aw',
    doctor: 'Prof. Dr. S. K. Yadav (Ex-SR PGI Chandigarh)'
  }
];

export default function VisitingCentresClient() {
  return (
    <div className="vc-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="vc-hero-compact">
        <div className="vc-ambient-glow" />
        <div className="container vc-hero-container">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="vc-hero-content"
          >
            <div className="vc-hero-pill-badge">
              <MapPin size={13} className="vc-badge-icon" />
              <span>6 Strategic Centres Across Haryana &amp; NCR</span>
            </div>

            <h1 className="vc-hero-title font-heading">
              Visiting Centres <span className="vc-title-highlight">Haryana &amp; NCR</span>
            </h1>

            <p className="vc-hero-desc">
              Consult directly with <strong>Prof. Dr. S. K. Yadav (Ex-Senior Resident, PGI Chandigarh)</strong> across our 6 premier clinics. World-class orthodontic and dental implant care close to you.
            </p>

            {/* Quick Metrics Strip */}
            <div className="vc-metrics-strip">
              <div className="vc-metric-chip">
                <Star size={13} className="vc-chip-icon star-icon" />
                <span>5.0★ Google Rated</span>
              </div>
              <div className="vc-metric-chip">
                <Award size={13} className="vc-chip-icon" />
                <span>Ex-PGI Chandigarh Faculty</span>
              </div>
              <div className="vc-metric-chip">
                <Shield size={13} className="vc-chip-icon" />
                <span>By Prior Appointment</span>
              </div>
            </div>

            {/* Short SEO-Friendly International & NRI Patients Callout */}
            <Link href="/dental-tourism" className="vc-nri-quick-banner">
              <div className="nri-banner-left">
                <span className="nri-globe-icon">✈️</span>
                <span className="nri-banner-text">
                  <strong>International &amp; NRI Patients:</strong> Fast-Track Appointments, Virtual 3D Pre-Planning &amp; Delhi Airport Connectivity.
                </span>
              </div>
              <span className="nri-banner-link">
                <span>NRI Dental Care</span>
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. CENTRES CARDS MATRIX */}
      <section className="vc-interactive-section">
        <div className="container">
          
          <div className="vc-cards-matrix">
            {CENTRES_DATA.map((centre, idx) => (
              <motion.article
                key={centre.id}
                itemScope
                itemType="https://schema.org/Dentist"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`vc-bento-card ${centre.isMain ? 'flagship-card' : ''}`}
              >
                {/* Glowing Top Halo Accent */}
                <div className="card-top-halo-line" />
                {/* Micro Ambient Glow Layer */}
                <div className="bento-glow-spot" />

                {/* Top Badge Header */}
                <div className="vc-bento-header">
                  <span className={`vc-badge-tag ${centre.isMain ? 'badge-main' : 'badge-visiting'}`}>
                    {centre.isMain ? '🏛️ ' + centre.badge : '📍 ' + centre.badge}
                  </span>

                  <div className="vc-live-indicator">
                    <div className="radar-beacon-wrap">
                      <span className="live-pulse" />
                      <span className="radar-ripple" />
                    </div>
                    <span className="live-text">Consultation Active</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="vc-bento-body">
                  <div className="vc-title-group">
                    <h2 className="vc-card-city-name font-heading" itemProp="name">{centre.fullName}</h2>
                    <p className="vc-card-clinic-name">{centre.clinic}</p>
                    <span className="vc-card-tagline">{centre.tagline}</span>
                  </div>

                  {/* Direct Clickable Address to Google Maps */}
                  <motion.a 
                    href={centre.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vc-address-box"
                    title={`Open ${centre.fullName} in Google Maps`}
                    itemProp="hasMap"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="addr-pin-wrap">
                      <MapPin size={16} className="addr-pin-icon" />
                    </div>
                    <div className="addr-text-wrap">
                      <div className="addr-label-row">
                        <span className="addr-label">Direct Clinic Address</span>
                        <span className="gps-live-tag">Open GPS ↗</span>
                      </div>
                      <span className="addr-detail" itemProp="address">{centre.address}</span>
                    </div>
                  </motion.a>

                  {/* Doctor & Timings Information */}
                  <div className="vc-doctor-row">
                    <div className="vc-doctor-pill">
                      <UserCheck size={13} className="doc-icon" />
                      <span className="doc-text">{centre.doctor}</span>
                    </div>
                    <div className="vc-timing-pill">
                      <Clock size={12} className="time-icon" />
                      <span>{centre.timing}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Directions & Instant WhatsApp Booking */}
                <div className="vc-bento-actions">
                  <motion.a 
                    href={centre.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="vc-btn-directions"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Navigation size={14} className="btn-dir-icon" />
                    <span>Directions</span>
                  </motion.a>

                  <motion.a 
                    href={`https://api.whatsapp.com/send/?phone=918685048414&text=Hi!+I+would+like+to+book+an+appointment+at+Shubh+Dental+Clinic+(${encodeURIComponent(centre.fullName)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vc-btn-book"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle size={14} className="btn-book-icon" />
                    <span>Book Slot</span>
                    <span className="btn-shimmer-sweep" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* LUXURY MOBILE-OPTIMIZED ANIMATED CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vc-page-wrapper {
          background: #FCFBF8;
          color: #1F100B;
          min-height: 100vh;
        }

        /* ── 1. COMPACT HERO SECTION ── */
        .vc-hero-compact {
          background: linear-gradient(180deg, #140A06 0%, #20100A 100%);
          color: #FFFFFF;
          padding: 3.5rem 0 2.5rem;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
        }

        .vc-ambient-glow {
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 350px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .vc-hero-container {
          position: relative;
          z-index: 2;
        }

        .vc-hero-content {
          max-width: 780px;
          margin: 0 auto;
          text-align: center;
        }

        .vc-hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(214, 122, 65, 0.15);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #F4B382;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        .vc-badge-icon {
          color: #D67A41;
        }

        .vc-hero-title {
          font-size: clamp(1.9rem, 4.2vw, 3rem);
          font-weight: 850;
          color: #FFFFFF;
          line-height: 1.15;
          margin: 0 0 0.9rem 0;
          letter-spacing: -0.02em;
        }

        .vc-title-highlight {
          color: #D67A41;
          background: linear-gradient(135deg, #F4B382 0%, #D67A41 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vc-hero-desc {
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.82);
          margin: 0 auto 1.4rem auto;
          max-width: 660px;
        }

        .vc-hero-desc strong {
          color: #FFFFFF;
        }

        .vc-metrics-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .vc-metric-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 999px;
        }

        .vc-chip-icon {
          color: #D67A41;
        }

        .star-icon {
          color: #FBBF24;
        }

        /* International & NRI Patients Quick Callout */
        .vc-nri-quick-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(214, 122, 65, 0.12);
          border: 1px solid rgba(214, 122, 65, 0.35);
          border-radius: 999px;
          padding: 8px 18px;
          margin: 1.25rem auto 0;
          max-width: 680px;
          text-decoration: none;
          transition: all 0.22s ease;
        }

        .vc-nri-quick-banner:hover {
          background: rgba(214, 122, 65, 0.2);
          border-color: #F4B382;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.2);
        }

        .nri-banner-left {
          display: flex;
          align-items: center;
          gap: 8px;
          text-align: left;
        }

        .nri-globe-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .nri-banner-text {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.35;
        }

        .nri-banner-text strong {
          color: #F4B382;
        }

        .nri-banner-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          font-weight: 750;
          color: #FFFFFF;
          background: #D67A41;
          padding: 4px 12px;
          border-radius: 999px;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .vc-nri-quick-banner:hover .nri-banner-link {
          background: #C46730;
        }

        /* ── 2. CENTRES MATRIX ── */
        .vc-interactive-section {
          padding: 2.5rem 0 4.5rem;
        }

        .vc-cards-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .vc-bento-card {
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.24);
          border-radius: 20px;
          padding: 1.4rem 1.4rem 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 18px rgba(74, 37, 24, 0.04);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .vc-bento-card:hover {
          border-color: #D67A41;
          box-shadow: 0 14px 34px rgba(214, 122, 65, 0.2);
        }

        /* Top Halo Light Bar */
        .card-top-halo-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, rgba(214, 122, 65, 0.4) 20%, #D67A41 50%, rgba(244, 179, 130, 0.9) 70%, transparent 100%);
          opacity: 0.9;
        }

        .bento-glow-spot {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .flagship-card {
          border-color: rgba(214, 122, 65, 0.45);
          background: linear-gradient(170deg, #FFFFFF 0%, #FDF9F5 100%);
          box-shadow: 0 6px 24px rgba(214, 122, 65, 0.09);
        }

        .vc-bento-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.9rem;
        }

        .vc-badge-tag {
          font-size: 0.72rem;
          font-weight: 750;
          padding: 3px 11px;
          border-radius: 999px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .badge-main {
          background: rgba(214, 122, 65, 0.14);
          color: #D67A41;
          border: 1px solid rgba(214, 122, 65, 0.32);
        }

        .badge-visiting {
          background: rgba(59, 130, 246, 0.08);
          color: #2563EB;
          border: 1px solid rgba(59, 130, 246, 0.22);
        }

        .vc-live-indicator {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .radar-beacon-wrap {
          position: relative;
          width: 8px;
          height: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .live-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          position: relative;
          z-index: 2;
        }

        .radar-ripple {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.3);
          border: 1px solid rgba(16, 185, 129, 0.6);
          animation: radarPing 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
          z-index: 1;
        }

        @keyframes radarPing {
          0% { transform: scale(0.9); opacity: 0.9; }
          70%, 100% { transform: scale(2.4); opacity: 0; }
        }

        .live-text {
          font-size: 0.68rem;
          font-weight: 700;
          color: #059669;
          letter-spacing: 0.01em;
        }

        .vc-bento-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex: 1;
        }

        .vc-title-group {
          margin-bottom: 0.1rem;
        }

        .vc-card-city-name {
          font-size: 1.15rem;
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 2px 0;
          line-height: 1.25;
        }

        .vc-card-clinic-name {
          font-size: 0.86rem;
          font-weight: 750;
          color: #D67A41;
          margin: 0 0 2px 0;
        }

        .vc-card-tagline {
          font-size: 0.73rem;
          color: #785E53;
          font-weight: 600;
        }

        /* Direct Clickable Address Box */
        .vc-address-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #FAF7F2;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 14px;
          padding: 9px 12px;
          text-decoration: none;
          transition: all 0.22s ease;
          position: relative;
        }

        .vc-address-box:hover {
          background: #F6EEE5;
          border-color: #D67A41;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.12);
        }

        .addr-pin-wrap {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: rgba(214, 122, 65, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D67A41;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .vc-address-box:hover .addr-pin-wrap {
          transform: scale(1.08);
          background: #D67A41;
          color: #FFFFFF;
        }

        .addr-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }

        .addr-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .addr-label {
          font-size: 0.65rem;
          font-weight: 750;
          color: #D67A41;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .gps-live-tag {
          font-size: 0.63rem;
          font-weight: 800;
          color: #D67A41;
          background: rgba(214, 122, 65, 0.12);
          padding: 1px 6px;
          border-radius: 5px;
          letter-spacing: 0.02em;
        }

        .addr-detail {
          font-size: 0.78rem;
          color: #3F2B23;
          line-height: 1.35;
          font-weight: 550;
          white-space: normal;
        }

        /* Doctor & Timing Info Row */
        .vc-doctor-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 0.1rem;
        }

        .vc-doctor-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          color: #1F100B;
        }

        .doc-icon {
          color: #D67A41;
          flex-shrink: 0;
        }

        .doc-text {
          color: #2C1610;
        }

        .vc-timing-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #785E53;
        }

        .time-icon {
          color: #D67A41;
        }

        /* Action Buttons */
        .vc-bento-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 1rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(74, 37, 24, 0.07);
        }

        .vc-btn-directions {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #1F100B;
          font-size: 0.78rem;
          font-weight: 750;
          padding: 8px 10px;
          border-radius: 11px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .vc-btn-directions:hover {
          background: #FAF3EC;
          border-color: #D67A41;
          color: #D67A41;
        }

        .btn-dir-icon {
          color: #D67A41;
        }

        .vc-btn-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: linear-gradient(135deg, #D67A41 0%, #C46730 100%);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 750;
          padding: 8px 10px;
          border-radius: 11px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.28);
        }

        .vc-btn-book:hover {
          background: linear-gradient(135deg, #DF834A 0%, #B85F2A 100%);
        }

        .btn-shimmer-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transform: skewX(-20deg);
          animation: btnShimmerAnim 3.5s infinite;
          pointer-events: none;
        }

        @keyframes btnShimmerAnim {
          0%, 60% { left: -100%; }
          100% { left: 160%; }
        }

        .btn-book-icon {
          color: #FFFFFF;
        }

        /* ── MOBILE RESPONSIVENESS & COMPACT LOW-SPACE DESIGN ── */
        @media (max-width: 1024px) {
          .vc-cards-matrix {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .vc-hero-compact {
            padding: 2.2rem 0 1.8rem;
          }

          .vc-hero-title {
            font-size: 1.65rem;
          }

          .vc-hero-desc {
            font-size: 0.88rem;
            line-height: 1.55;
            margin-bottom: 1rem;
          }

          .vc-metric-chip {
            font-size: 0.72rem;
            padding: 4px 9px;
          }

          .vc-nri-quick-banner {
            flex-direction: column;
            border-radius: 14px;
            padding: 9px 12px;
            text-align: center;
            gap: 6px;
            margin-top: 1rem;
          }

          .nri-banner-left {
            text-align: center;
            font-size: 0.74rem;
          }

          .nri-banner-text {
            font-size: 0.74rem;
          }

          .vc-interactive-section {
            padding: 1.25rem 0 3rem;
          }

          /* Compact 1-Column Matrix on Mobile with low vertical space */
          .vc-cards-matrix {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            margin-bottom: 1.75rem;
          }

          .vc-bento-card {
            padding: 1rem;
            border-radius: 18px;
            gap: 0.65rem;
          }

          .vc-card-city-name {
            font-size: 1.05rem;
          }

          .vc-card-clinic-name {
            font-size: 0.82rem;
          }

          .vc-address-box {
            padding: 7px 9px;
            border-radius: 12px;
          }

          .addr-pin-wrap {
            width: 24px;
            height: 24px;
          }

          .addr-detail {
            font-size: 0.74rem;
          }

          .vc-doctor-pill {
            font-size: 0.72rem;
          }

          .vc-timing-pill {
            font-size: 0.7rem;
          }

          .vc-bento-actions {
            margin-top: 0.65rem;
            padding-top: 0.65rem;
            gap: 6px;
          }

          .vc-btn-directions, .vc-btn-book {
            font-size: 0.74rem;
            padding: 7px 8px;
          }
        }
      `}} />
    </div>
  );
}
