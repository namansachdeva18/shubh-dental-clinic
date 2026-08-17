import { MapPin, Phone, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Visiting Centres Across Haryana & NCR | Shubh Dental Clinic',
  description: 'Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh) offers expert orthodontic & dental implant consultations across 6 visiting centres — Rohtak, Delhi, Gurugram, Panipat, Sonepat & Fatehabad.',
  keywords: ['dental clinic Rohtak', 'orthodontist Delhi NCR', 'dental consultant Haryana', 'Dr SK Yadav visiting', 'Invisalign near me Haryana'],
  alternates: { canonical: 'https://www.shubhdentalclinicrohtak.in/visiting-centres' },
  openGraph: {
    title: 'Visiting Centres | Shubh Dental Clinic — Rohtak, Delhi, Gurugram & More',
    description: 'Book a consultation with Prof. Dr. S. K. Yadav at our visiting centres across Haryana & NCR.',
    url: 'https://www.shubhdentalclinicrohtak.in/visiting-centres',
  }
};

const CENTRES = [
  {
    name: 'Rohtak',
    fullName: 'Rohtak (Main Super-Specialty Clinic)',
    clinic: 'Shubh Orthodontic & Dental Clinic',
    address: 'Tilak Nagar Lane 9, Delhi Bypass Road, Rohtak 124001',
    badge: 'Main Clinic',
    badgeColor: '#D67A41',
    emoji: '🏛️',
    isMain: true,
    services: ['Orthodontics', 'Dental Implants', 'Clear Aligners', 'Cosmetic Dentistry', 'Root Canal'],
    timing: 'Mon–Sat: 9:30 AM – 8:00 PM',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8',
  },
  {
    name: 'Delhi',
    fullName: 'Delhi – Rohini Centre',
    clinic: 'Nu Smile Dental Clinic',
    address: '204 Deepak Plaza, DC Chowk Market, Sector 9, Rohini, Delhi 110085',
    badge: 'NCR Visiting',
    badgeColor: '#3498DB',
    emoji: '📍',
    isMain: false,
    services: ['Clear Aligners', 'Braces', 'Orthodontic Consultation'],
    timing: 'By Prior Appointment',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.google.com',
  },
  {
    name: 'Gurugram',
    fullName: 'Gurugram – Sector 47',
    clinic: 'Dental Destination',
    address: 'Kenwood-05 (G.F.), Malibu Town, Sector 47, Gurgaon',
    badge: 'NCR Visiting',
    badgeColor: '#3498DB',
    emoji: '📍',
    isMain: false,
    services: ['Clear Aligners', 'Braces', 'Orthodontic Consultation'],
    timing: 'By Prior Appointment',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.google.com',
  },
  {
    name: 'Panipat',
    fullName: 'Panipat – Model Town',
    clinic: 'Dental Studio',
    address: '194-L, Model Town, Panipat 132103 (Haryana)',
    badge: 'Regional Center',
    badgeColor: '#27AE60',
    emoji: '📌',
    isMain: false,
    services: ['Orthodontic Consultation', 'Aligners'],
    timing: 'By Prior Appointment',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.google.com',
  },
  {
    name: 'Sonepat',
    fullName: 'Sonepat – Mirch Mandi',
    clinic: 'Navjeevan Dental Clinic',
    address: 'Parbhu Nagar Mandi, Near Suri Petrol Pump, Mirch Mandi, Sonipat, Haryana 131001',
    badge: 'Regional Center',
    badgeColor: '#27AE60',
    emoji: '📌',
    isMain: false,
    services: ['Orthodontic Consultation', 'Aligners'],
    timing: 'By Prior Appointment',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.google.com',
  },
  {
    name: 'Fatehabad',
    fullName: 'Fatehabad – Model Town',
    clinic: 'Shree Sai Complete Dental Care Centre',
    address: 'SCF 9, Model Town, Fatehabad, Haryana 125050',
    badge: 'Regional Center',
    badgeColor: '#27AE60',
    emoji: '📌',
    isMain: false,
    services: ['Orthodontic Consultation', 'Aligners'],
    timing: 'By Prior Appointment',
    phone: '+91-8685048414',
    mapUrl: 'https://maps.google.com',
  },
];

export default function VisitingCentresPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dentist',
        name: 'Shubh Orthodontic & Dental Clinic',
        url: 'https://www.shubhdentalclinicrohtak.in',
        telephone: '+91-8685048414',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tilak Nagar Lane 9, Delhi Bypass Road',
          addressLocality: 'Rohtak',
          postalCode: '124001',
          addressRegion: 'Haryana',
          addressCountry: 'IN'
        },
        hasMap: 'https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8',
        openingHours: 'Mo-Sa 09:30-20:00',
      })}} />

      {/* Hero Section */}
      <section className="vc-hero">
        <div className="vc-hero-bg">
          <div className="vc-hero-orb vc-orb1" />
          <div className="vc-hero-orb vc-orb2" />
          <div className="vc-hero-grid" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="vc-hero-inner">
            <div className="vc-hero-badge">
              <MapPin size={14} />
              6 Locations Across Haryana & NCR
            </div>
            <h1 className="vc-hero-title">
              Visiting Centres<br />
              <span className="vc-hero-accent">Haryana & NCR</span>
            </h1>
            <p className="vc-hero-desc">
              Prof. Dr. S. K. Yadav (Ex-Senior Resident, PGI Chandigarh) offers specialized orthodontic & implant consultations at 6 premier centres — so world-class care is always close to you.
            </p>
            <div className="vc-hero-pills">
              {['Rohtak', 'Delhi', 'Gurugram', 'Panipat', 'Sonepat', 'Fatehabad'].map(city => (
                <span key={city} className="vc-city-pill">{city}</span>
              ))}
            </div>
            <div className="vc-hero-trust">
              <div className="vc-trust-item">⭐ 5.0 Google Rating</div>
              <div className="vc-trust-item">🩺 20+ Years Experience</div>
              <div className="vc-trust-item">🎓 Ex-PGI Chandigarh</div>
              <div className="vc-trust-item">✨ 11,000+ Patients Treated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Centres Grid */}
      <section className="vc-centres-section">
        <div className="container">
          <div className="vc-section-header">
            <p className="vc-section-eyebrow">All Consultation Locations</p>
            <h2 className="vc-section-title">Find a Centre Near You</h2>
            <p className="vc-section-desc">
              All visiting centres offer consultations by prior appointment. Call or WhatsApp to book your slot.
            </p>
          </div>

          <div className="vc-grid">
            {CENTRES.map((centre, idx) => (
              <div key={idx} className={`vc-card${centre.isMain ? ' vc-card-main' : ''}`}>
                {centre.isMain && <div className="vc-main-ribbon">Main Clinic</div>}

                <div className="vc-card-top">
                  <div className="vc-card-badge" style={{ background: centre.badgeColor + '22', color: centre.badgeColor, borderColor: centre.badgeColor + '44' }}>
                    {centre.emoji} {centre.badge}
                  </div>
                  <div className="vc-live-dot" />
                </div>

                <h3 className="vc-card-city">{centre.fullName}</h3>
                <p className="vc-card-clinic">{centre.clinic}</p>

                <div className="vc-card-address">
                  <MapPin size={14} className="vc-addr-icon" />
                  <span>{centre.address}</span>
                </div>

                <div className="vc-card-timing">
                  <span className="vc-timing-icon">🕐</span>
                  {centre.timing}
                </div>

                <div className="vc-card-services">
                  {centre.services.map(s => (
                    <span key={s} className="vc-service-tag">
                      <CheckCircle size={11} /> {s}
                    </span>
                  ))}
                </div>

                <div className="vc-card-actions">
                  <Link href="#book" className="vc-btn-primary">
                    <Calendar size={14} /> Book Here
                  </Link>
                  <a href={centre.mapUrl} target="_blank" rel="noopener noreferrer" className="vc-btn-secondary">
                    <MapPin size={14} /> Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call CTA Banner */}
          <div className="vc-call-banner">
            <div className="vc-call-left">
              <div className="vc-call-icon">📞</div>
              <div>
                <div className="vc-call-title">Book Any Centre by Phone or WhatsApp</div>
                <div className="vc-call-sub">Our coordinators will confirm your slot at the nearest location</div>
              </div>
            </div>
            <div className="vc-call-actions">
              <a href="tel:+918685048414" className="vc-btn-primary">
                <Phone size={15} /> Call Now
              </a>
              <a href="https://api.whatsapp.com/send/?phone=918685048414&text=Hi!+I%27d+like+to+book+a+visiting+centre+appointment." target="_blank" rel="noopener noreferrer" className="vc-btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SmartBooking />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── HERO ── */
        .vc-hero {
          background: #0A0705;
          padding: 7rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .vc-hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .vc-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(214,122,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(214,122,65,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .vc-hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
        }
        .vc-orb1 { width: 500px; height: 500px; top: -20%; left: -10%; background: rgba(214,122,65,0.15); }
        .vc-orb2 { width: 400px; height: 400px; bottom: -15%; right: -5%; background: rgba(201,168,76,0.12); }

        .vc-hero-inner { max-width: 740px; }
        .vc-hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(214,122,65,0.12); border: 1px solid rgba(214,122,65,0.3);
          color: #EAA77C; font-size: 0.78rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          padding: 0.5rem 1rem; border-radius: 99px; margin-bottom: 1.5rem;
        }
        .vc-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800; color: #fff; line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .vc-hero-accent { color: #D67A41; }
        .vc-hero-desc {
          color: rgba(255,255,255,0.75); font-size: 1.1rem;
          line-height: 1.7; margin-bottom: 2rem; max-width: 600px;
        }
        .vc-hero-pills {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;
        }
        .vc-city-pill {
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8); font-size: 0.85rem; font-weight: 600;
          padding: 0.45rem 1rem; border-radius: 99px;
        }
        .vc-hero-trust {
          display: flex; flex-wrap: wrap; gap: 1rem;
        }
        .vc-trust-item {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7); font-size: 0.82rem; font-weight: 600;
          padding: 0.5rem 1rem; border-radius: 12px;
        }

        /* ── CENTRES SECTION ── */
        .vc-centres-section {
          background: #faf9f6;
          padding: 6rem 0;
        }
        .vc-section-header { text-align: center; margin-bottom: 3.5rem; }
        .vc-section-eyebrow {
          font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: #D67A41; margin-bottom: 0.5rem;
        }
        .vc-section-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
          color: #1A0C06; margin-bottom: 1rem;
        }
        .vc-section-desc {
          color: #5A4D46; font-size: 1rem; max-width: 550px;
          margin: 0 auto; line-height: 1.6;
        }

        .vc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .vc-card {
          background: #fff;
          border: 1px solid rgba(26,12,6,0.08);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 4px 20px rgba(26,12,6,0.04);
          display: flex; flex-direction: column; gap: 1rem;
        }
        .vc-card:hover {
          transform: translateY(-6px);
          border-color: rgba(214,122,65,0.3);
          box-shadow: 0 20px 50px rgba(26,12,6,0.1);
        }
        .vc-card-main {
          background: linear-gradient(135deg, #1A0C06 0%, #2C1810 100%) !important;
          border-color: rgba(214,122,65,0.4) !important;
          box-shadow: 0 20px 50px rgba(214,122,65,0.15) !important;
        }
        .vc-card-main .vc-card-city,
        .vc-card-main .vc-card-address,
        .vc-card-main .vc-card-timing { color: rgba(255,255,255,0.9) !important; }
        .vc-card-main .vc-card-clinic { color: rgba(255,255,255,0.6) !important; }
        .vc-card-main .vc-service-tag {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.12) !important;
          color: rgba(255,255,255,0.75) !important;
        }

        .vc-main-ribbon {
          position: absolute; top: 16px; right: -24px;
          background: #D67A41; color: #fff;
          font-size: 0.65rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.1em;
          padding: 0.3rem 2.5rem; transform: rotate(45deg);
        }

        .vc-card-top { display: flex; align-items: center; justify-content: space-between; }
        .vc-card-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.7rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
          padding: 0.3rem 0.75rem; border-radius: 99px; border: 1px solid;
        }
        .vc-live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: vcPulse 2s ease-in-out infinite;
        }
        @keyframes vcPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }

        .vc-card-city {
          font-family: var(--font-heading);
          font-size: 1.35rem; font-weight: 800; color: #1A0C06;
          line-height: 1.2; margin: 0;
        }
        .vc-card-clinic {
          font-size: 0.85rem; color: #5A4D46; font-weight: 500; margin: 0;
        }
        .vc-card-address {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.85rem; color: #3D3330; line-height: 1.5;
        }
        .vc-addr-icon { color: #D67A41; flex-shrink: 0; margin-top: 2px; }

        .vc-card-timing {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.8rem; color: #5A4D46; font-weight: 600;
        }
        .vc-timing-icon { font-size: 0.9rem; }

        .vc-card-services {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
        }
        .vc-service-tag {
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(214,122,65,0.06);
          border: 1px solid rgba(214,122,65,0.15);
          color: #8B4513; font-size: 0.72rem; font-weight: 600;
          padding: 0.25rem 0.65rem; border-radius: 8px;
        }

        .vc-card-actions {
          display: flex; gap: 0.75rem; margin-top: auto;
        }
        .vc-btn-primary {
          display: inline-flex; align-items: center; gap: 6px;
          background: #D67A41; color: #fff;
          font-size: 0.82rem; font-weight: 700;
          padding: 0.6rem 1.1rem; border-radius: 12px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .vc-btn-primary:hover {
          background: #C9A84C; transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(214,122,65,0.3);
        }
        .vc-btn-secondary {
          display: inline-flex; align-items: center; gap: 6px;
          background: transparent; color: #D67A41;
          font-size: 0.82rem; font-weight: 700;
          padding: 0.6rem 1.1rem; border-radius: 12px;
          border: 1px solid rgba(214,122,65,0.3);
          text-decoration: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .vc-btn-secondary:hover {
          background: rgba(214,122,65,0.06); transform: translateY(-2px);
        }

        /* ── CALL BANNER ── */
        .vc-call-banner {
          display: flex; align-items: center; justify-content: space-between;
          background: #1A0C06;
          border-radius: 24px; padding: 2.5rem 3rem;
          gap: 2rem; flex-wrap: wrap;
        }
        .vc-call-left { display: flex; align-items: center; gap: 1.25rem; }
        .vc-call-icon { font-size: 2.5rem; }
        .vc-call-title {
          font-family: var(--font-heading);
          font-size: 1.4rem; font-weight: 800; color: #fff;
        }
        .vc-call-sub { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-top: 0.2rem; }
        .vc-call-actions { display: flex; gap: 1rem; flex-shrink: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .vc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .vc-hero { padding: 5rem 0 3rem; }
          .vc-hero-trust { flex-direction: column; }
          .vc-grid { grid-template-columns: 1fr; }
          .vc-centres-section { padding: 4rem 0; }
          .vc-call-banner { flex-direction: column; align-items: flex-start; padding: 1.75rem; }
          .vc-call-actions { width: 100%; }
          .vc-btn-primary, .vc-btn-secondary { flex: 1; justify-content: center; }
        }
      `}} />
    </>
  );
}
