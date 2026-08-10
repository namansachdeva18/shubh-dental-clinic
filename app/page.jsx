import dynamic from 'next/dynamic';

// Above the fold — load immediately
import Hero from './components/Hero';
import ReviewsTicker from './components/ReviewsTicker';
import DoctorsIntro from './components/DoctorsIntro';

// Below the fold — lazy loaded for faster initial page load
const TreatmentNavigator = dynamic(() => import('./components/TreatmentNavigator'));
const AlignerHero        = dynamic(() => import('./components/AlignerHero'));
const SkyAlignSection    = dynamic(() => import('./components/SkyAlignSection'));
const ImplantsHero       = dynamic(() => import('./components/ImplantsHero'));
const KidsDentistry      = dynamic(() => import('./components/KidsDentistry'));
const PatientGallery     = dynamic(() => import('./components/PatientGallery'));
const ClinicTour         = dynamic(() => import('./components/ClinicTour'));
const Testimonials       = dynamic(() => import('./components/Testimonials'));
const AboutSection       = dynamic(() => import('./components/AboutSection'));
const SmartBooking       = dynamic(() => import('./components/SmartBooking'));
const FAQSection         = dynamic(() => import('./components/FAQSection'));
const ContactSection     = dynamic(() => import('./components/ContactSection'));

// Structured Data
const SCHEMA_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness', 'MedicalOrganization'],
  '@id': 'https://www.shubhdentalclinicrohtak.in',
  name: 'Shubh Orthodontic and Dental Clinic',
  alternateName: 'Shubh Dental Clinic Rohtak',
  description: 'Premier Orthodontic and Dental Clinic in Rohtak, Haryana. Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider, Fellow WFO USA. 5,000+ braces cases, dental implants, smile makeovers.',
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
  geo: { '@type': 'GeoCoordinates', latitude: 28.8955, longitude: 76.6066 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '00:00', closes: '00:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1', reviewCount: '114' },
  sameAs: ['https://www.facebook.com/sodcrohtak/', 'https://www.instagram.com/dr.s.k._yadav_orthodontist', 'https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8'],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
  hasMap: 'https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8',
  medicalSpecialty: ['Orthodontics', 'Prosthodontics', 'Restorative Dentistry', 'Cosmetic Dentistry', 'Implantology'],
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
      knowsAbout: ['Orthodontics', 'Invisalign', 'Skyalign', 'Clear Aligners', 'Dental Braces', 'Lingual Braces', 'Dental Implants'],
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCAL_BUSINESS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MEDICAL_ORG) }} />
      <Hero />
      <ReviewsTicker />
      <DoctorsIntro />
      <Testimonials />
      <TreatmentNavigator />
      <AlignerHero />
      <SkyAlignSection />
      <ImplantsHero />
      <KidsDentistry />
      <PatientGallery />
      <ClinicTour />
      <AboutSection />
      <SmartBooking />
      <FAQSection />
      <ContactSection />
    </>
  );
}
