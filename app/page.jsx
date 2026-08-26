import dynamic from 'next/dynamic';

// Above the fold — load immediately
import Hero from './components/Hero';
import ReviewsTicker from './components/ReviewsTicker';
import QuickNavBar from './components/QuickNavBar';
import DoctorsCardIntro from './components/DoctorsCardIntro';

// Below the fold — lazy loaded for faster initial page load
const TreatmentNavigator = dynamic(() => import('./components/TreatmentNavigator'));
const AlignerHero = dynamic(() => import('./components/AlignerHero'));
const ImplantsHero = dynamic(() => import('./components/ImplantsHero'));
const KidsDentistry = dynamic(() => import('./components/KidsDentistry'));
const DentalTourism = dynamic(() => import('./components/DentalTourism'));
const AboutSection = dynamic(() => import('./components/AboutSection'));
const PatientGallery = dynamic(() => import('./components/PatientGallery'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const ClinicTour = dynamic(() => import('./components/ClinicTour'));
const SmartBooking = dynamic(() => import('./components/SmartBooking'));
const FAQSection = dynamic(() => import('./components/FAQSection'));
const ContactSection = dynamic(() => import('./components/ContactSection'));

// Structured Data
const SCHEMA_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness', 'MedicalOrganization', 'MedicalClinic'],
  '@id': 'https://www.shubhdentalclinicrohtak.in',
  name: 'Shubh Orthodontic and Dental Clinic',
  alternateName: 'Shubh Dental Clinic Rohtak',
  description: 'Best Orthodontist & Dental Clinic in Rohtak, Haryana. Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider, Fellow WFO USA. 5,000+ braces cases, 3,000+ dental implants, 2,50,000+ patients treated. Clear aligners, same-day implants, veneers, kids dentistry.',
  url: 'https://www.shubhdentalclinicrohtak.in',
  telephone: ['+91-8685048414', '01262-469393'],
  email: 'sky20083@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road',
    addressLocality: 'Rohtak',
    addressRegion: 'HR',
    postalCode: '124001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.891128, longitude: 76.621873 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '00:00', closes: '00:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1', reviewCount: '114' },
  sameAs: ['https://www.facebook.com/sodcrohtak/', 'https://www.instagram.com/dr.s.k._yadav_orthodontist', 'https://maps.app.goo.gl/EvRq96h9HMgYJYAw7'],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
  hasMap: 'https://maps.app.goo.gl/EvRq96h9HMgYJYAw7',
  medicalSpecialty: ['Orthodontics', 'Prosthodontics', 'Restorative Dentistry', 'Cosmetic Dentistry', 'Implantology', 'Pedodontics'],
};

const SCHEMA_MEDICAL_ORG = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Shubh Orthodontic and Dental Clinic',
  medicalSpecialty: 'Dentistry',
  employee: [
    {
      '@type': 'Physician',
      name: 'Prof. Dr. S. K. Yadav',
      jobTitle: 'Chief Orthodontist & Implant Specialist',
      knowsAbout: ['Orthodontics', 'Invisalign', 'Skyalign', 'Clear Aligners', 'Dental Braces', 'Lingual Braces', 'Dental Implants', 'Same Day Implants'],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Post Graduate Institute of Medical Education and Research (PGI), Chandigarh' },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Achla Bharti Yadav',
      jobTitle: 'Professor & Senior Oral Pathologist',
      knowsAbout: ['Oral Pathology', 'AI Oral Cancer Diagnostics', 'Premalignant Screening', 'Cosmetic Dentistry', 'Porcelain Veneers', 'Forensic Odontology'],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Post Graduate Institute of Medical Sciences (PGI), Rohtak' },
    },
  ],
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best orthodontist in Rohtak?',
      acceptedAnswer: { '@type': 'Answer', text: 'Prof. Dr. S. K. Yadav at Shubh Orthodontic & Dental Clinic is widely considered the best orthodontist in Rohtak, Haryana. He holds an MDS in Orthodontics from PGI Chandigarh, is a Certified Invisalign Provider, Fellow WFO USA, and has completed over 5,000+ braces and aligner cases, 3,000+ implants, with a 5.0-star Google rating.' }
    },
    {
      '@type': 'Question',
      name: 'How much do braces cost in Rohtak?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Shubh Orthodontic & Dental Clinic Rohtak, braces cost ranges from ₹25,000 for metal braces to ₹55,000–₹1,20,000 for self-ligating Damon® ceramic systems. Clear aligners (SkyAlign™) start from ₹45,000. 0% EMI is available on all treatments.' }
    },
    {
      '@type': 'Question',
      name: 'What is SkyAlign™ clear aligners?',
      acceptedAnswer: { '@type': 'Answer', text: 'SkyAlign™ is an in-house custom clear aligner system manufactured at Shubh Dental Clinic Rohtak under direct supervision of Prof. Dr. S. K. Yadav. Made from ultra-clear German medical polymer, SkyAlign™ offers the same quality as international brands at up to 40% lower cost, with faster turnaround and no third-party delays.' }
    },
    {
      '@type': 'Question',
      name: 'Are dental implants safe and long-lasting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. At Shubh Dental Clinic Rohtak, dental implants have a 98.4% success rate. Dr. S. K. Yadav uses 3D CBCT-guided flapless surgery for precision placement. All implants use biocompatible titanium with metal-free Zirconia crowns carrying a 10-year warranty. Implants can last a lifetime with proper care.' }
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day dental implants in Rohtak?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Shubh Orthodontic & Dental Clinic offers same-day immediate loading dental implants in Rohtak. Patients can walk in with missing teeth and walk out with fixed, functional teeth within 24 hours using our advanced flapless 3D guided implant technique.' }
    },
    {
      '@type': 'Question',
      name: 'Is the clinic suitable for children?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Dr. Achla Bharti Yadav specialises in gentle, pain-free paediatric dentistry for children aged 3–16 years. We offer anxiety-free milk tooth extractions, preventive sealants, fluoride treatments, and early orthodontic interceptive therapy in a child-friendly environment.' }
    },
  ]
};

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCAL_BUSINESS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MEDICAL_ORG) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />

      {/* ── SECTION ORDER: Optimised Patient Decision Funnel ── */}
      <Hero />
      <ReviewsTicker />

      {/* Quick Navigation Directory */}
      <section className="container" style={{ paddingTop: '2.5rem', paddingBottom: '0.75rem' }}>
        <QuickNavBar />
      </section>

      {/* Doctors In Scrubs Showcase (Directly after Quick Directory) */}
      <DoctorsCardIntro />

      {/* 1. FLAGSHIP SPECIALIZATIONS */}
      <AlignerHero />
      <KidsDentistry />
      <ImplantsHero />

      {/* 2. COMPREHENSIVE ALL-TREATMENT DIRECTORY */}
      <TreatmentNavigator />

      {/* 3. NICHE AUDIENCE — Dental Tourism & NRI Care */}
      <DentalTourism />

      {/* 4. CLINICAL & HOSPITAL TECHNOLOGY STANDARDS */}
      <AboutSection />

      {/* 6. VERIFIED PROOF — Smile Gallery & Reviews */}
      <PatientGallery />
      <Testimonials />

      {/* 7. STERILE OPERATORY & CLINIC TOUR */}
      <ClinicTour />

      {/* 8. RESERVATION & REASSURANCE */}
      <SmartBooking />
      <FAQSection />
      <ContactSection />
    </>
  );
}
