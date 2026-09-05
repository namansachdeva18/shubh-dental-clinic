import DrSKYadavPageClient from './PageClient';

export const metadata = {
  title: 'Prof. Dr. S. K. Yadav — Best Orthodontist in Rohtak | MDS, Ex-PGI Chandigarh, Fellow WFO',
  description: 'Prof. Dr. S. K. Yadav — Rohtak\'s top orthodontist & implant specialist. MDS Orthodontics (Ex-PGI Chandigarh), Fellow WFO USA, Certified Invisalign Provider. 5,000+ braces cases, 3,000+ dental implants, 2,50,000+ patients treated. Book consultation at Shubh Dental Clinic.',
  keywords: ['Dr SK Yadav orthodontist Rohtak', 'best orthodontist Rohtak', 'invisalign doctor Rohtak', 'dental implant specialist Rohtak', 'braces specialist Haryana', 'PGI Chandigarh orthodontist', 'WFO fellow orthodontist India'],
  alternates: {
    canonical: 'https://www.shubhdental.com/doctors/dr-sk-yadav',
  },
  openGraph: {
    title: 'Prof. Dr. S. K. Yadav | Best Orthodontist in Rohtak — Shubh Dental Clinic',
    description: 'MDS Orthodontics (Ex-PGI Chandigarh), Fellow WFO USA. 20+ years, 5,000+ braces cases, 3,000+ implants. Certified Invisalign & SkyAlign Provider.',
    url: 'https://www.shubhdental.com/doctors/dr-sk-yadav',
    images: [{ url: 'https://www.shubhdental.com/dr-sk-yadav.webp', width: 800, height: 800, alt: 'Prof. Dr. S. K. Yadav — Orthodontist at Shubh Dental Clinic Rohtak' }],
    type: 'profile',
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prof. Dr. S. K. Yadav — Best Orthodontist in Rohtak',
    description: 'MDS Orthodontics, Fellow WFO (USA). 5,000+ braces & aligner cases, 3,000+ implants. Book appointment at Shubh Dental Clinic Rohtak.',
    images: ['https://www.shubhdental.com/dr-sk-yadav.webp'],
  },
};

// Physician structured data for Google Knowledge Panel
const SCHEMA_PHYSICIAN = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.shubhdental.com/doctors/dr-sk-yadav',
  name: 'Prof. Dr. S. K. Yadav',
  alternateName: 'Dr. SK Yadav',
  jobTitle: 'Chief Orthodontist & Implant Specialist',
  description: 'Prof. Dr. S. K. Yadav is a leading orthodontist and dental implant specialist in Rohtak, Haryana with 20+ years of experience. MDS Orthodontics from PGI Chandigarh, Fellow WFO USA, Certified Invisalign Provider.',
  image: 'https://www.shubhdental.com/dr-sk-yadav.webp',
  url: 'https://www.shubhdental.com/doctors/dr-sk-yadav',
  telephone: '+91-8685048414',
  medicalSpecialty: ['Orthodontics', 'Dentofacial Orthopedics', 'Implantology', 'Prosthodontics'],
  knowsAbout: ['Invisalign', 'SkyAlign Clear Aligners', 'Dental Braces', 'Lingual Braces', 'Damon Self-Ligating Braces', 'Dental Implants', 'Same-Day Implants', 'Micro-Implant Anchorage', 'Dentofacial Orthopedics'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Pt. BD Sharma University of Health Sciences, Rohtak' },
    { '@type': 'CollegeOrUniversity', name: 'Post Graduate Institute of Medical Education and Research (PGI), Chandigarh' },
  ],
  memberOf: [
    { '@type': 'Organization', name: 'World Federation of Orthodontists (WFO)' },
    { '@type': 'Organization', name: 'Indian Orthodontic Society (IOS)' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BDS' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MDS (Orthodontics & Dentofacial Orthopedics)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'fellowship', name: 'Fellow, World Federation of Orthodontists (USA)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Certified Invisalign Provider' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Certified Clinical Implantologist' },
  ],
  worksFor: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
    name: 'Shubh Orthodontic and Dental Clinic',
    url: 'https://www.shubhdental.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road',
      addressLocality: 'Rohtak',
      addressRegion: 'HR',
      postalCode: '124001',
      addressCountry: 'IN',
    },
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Doctors', item: 'https://www.shubhdental.com/doctors' },
    { '@type': 'ListItem', position: 3, name: 'Prof. Dr. S. K. Yadav', item: 'https://www.shubhdental.com/doctors/dr-sk-yadav' },
  ],
};

export default function DrSKYadavPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PHYSICIAN) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <DrSKYadavPageClient />
    </>
  );
}
