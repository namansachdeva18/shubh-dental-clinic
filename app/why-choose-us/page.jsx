import AboutSection from '../components/AboutSection';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Why Choose Shubh Dental Clinic Rohtak | PGI-Trained Specialists, 5,000+ Cases',
  description: "Discover why 20,000+ patients trust Shubh Orthodontic & Dental Clinic Rohtak. PGI-trained specialists, 5,000+ orthodontic cases, 3,000+ implants, in-house 3D lab, 654+ research citations, and 0% EMI. Rohtak's most trusted dental clinic.",
  keywords: [
    'best dental clinic Rohtak',
    'why choose Shubh dental clinic',
    'PGI trained dentist Rohtak',
    'orthodontist Rohtak',
    'dental implants Rohtak',
    'Invisalign Rohtak',
    'Dr S K Yadav Rohtak',
    'top dentist Haryana',
  ],
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/why-choose-us',
  },
  openGraph: {
    title: 'Why Choose Shubh Dental Clinic Rohtak | PGI Experts · 5,000+ Cases · 5.0★',
    description: 'PGI-trained specialists, in-house 3D lab, 3,000+ implants placed, 654+ research citations. Experience world-class dentistry in Rohtak, Haryana.',
    url: 'https://www.shubhdentalclinicrohtak.in/why-choose-us',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Shubh Dental Clinic | Rohtak\'s Most Trusted Orthodontic Center',
    description: '5,000+ cases. 3,000+ implants. PGI-trained. 5.0★ Google Rating. See why patients travel from Delhi & Gurgaon to visit us.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

// JSON-LD Schema for the page
const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose Shubh Orthodontic & Dental Clinic Rohtak',
  description: 'Reasons to choose Shubh Dental Clinic — PGI-trained specialists, 5,000+ orthodontic cases, 3,000+ dental implants, in-house 3D lab, 0% EMI, and 654+ global research citations.',
  url: 'https://www.shubhdentalclinicrohtak.in/why-choose-us',
  mainEntity: {
    '@type': 'Dentist',
    name: 'Shubh Orthodontic and Dental Clinic',
    url: 'https://www.shubhdentalclinicrohtak.in',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      reviewCount: '114',
    },
    medicalSpecialty: ['Orthodontics', 'Implantology', 'Cosmetic Dentistry', 'Oral Pathology'],
  },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Page Hero Header */}
      <div
        className="page-header"
        style={{
          background: 'linear-gradient(135deg, #110805 0%, #2A150B 100%)',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)',
          width: '70vw', height: '70vw', maxWidth: '700px',
          background: 'radial-gradient(circle, rgba(214,122,65,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
            background: 'rgba(16,185,129,0.12)', border: '1.5px solid rgba(16,185,129,0.35)',
            color: '#6EE7B7', padding: '0.4rem 1.2rem', borderRadius: '99px',
            fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#10B981',
              boxShadow: '0 0 0 4px rgba(16,185,129,0.25)',
              display: 'inline-block', flexShrink: 0,
            }} aria-hidden="true" />
            Haryana's Most Trusted Dental Specialists
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900, color: '#FFFFFF',
            lineHeight: 1.15, letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Why Choose{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F4B382 0%, #D67A41 55%, #B85C24 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Shubh Dental Clinic?
            </span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '680px',
            margin: '0 auto 2rem',
            lineHeight: 1.75,
          }}>
            20,000+ patients. PGI-trained specialists. 5,000+ orthodontic cases. 3,000+ implants.
            World-class technology in the heart of Rohtak, Haryana.
          </p>

          {/* Quick trust pills */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              '🏅 Invisalign® Certified',
              '🌐 WFO USA Fellow',
              '🎓 Ex-PGI Chandigarh & Rohtak',
              '⭐ 5.0 Google Rating',
              '💎 Damon® Provider',
            ].map((pill) => (
              <span
                key={pill}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: 'rgba(244,179,130,0.9)',
                  padding: '0.4rem 1rem',
                  borderRadius: '99px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The full Why Choose Us section (reused component) */}
      <AboutSection />

      {/* Booking section */}
      <SmartBooking />
    </>
  );
}
