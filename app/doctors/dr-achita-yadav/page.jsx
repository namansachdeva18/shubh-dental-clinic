import DrAchitaYadavPageClient from './PageClient';

export const metadata = {
  title: 'Dr. (Prof.) Achla Yadav — Cosmetic Dentist & Oral Pathologist in Rohtak | Smile Makeover Specialist',
  description: 'Dr. (Prof.) Achla Yadav — Certified Cosmetic Dentist & Consultant Oral Pathologist at Shubh Dental Clinic Rohtak. BDS, MDS, MFOMP. 18+ years experience, 15,000+ cosmetic smiles. Porcelain veneers, smile makeovers, painless pediatric dentistry.',
  keywords: ['cosmetic dentist Rohtak', 'smile makeover Rohtak', 'porcelain veneers Rohtak', 'oral pathologist Rohtak', 'Dr Achla Yadav dentist', 'pediatric dentist Rohtak', 'teeth whitening specialist Haryana'],
  alternates: {
    canonical: 'https://www.shubhdental.com/doctors/dr-achita-yadav',
  },
  openGraph: {
    title: 'Dr. (Prof.) Achla Yadav | Cosmetic Dentist & Smile Makeover Expert — Rohtak',
    description: 'BDS, MDS, MFOMP. 18+ years, 15,000+ cosmetic smiles. Expert in porcelain veneers, digital smile design, and gentle pediatric dentistry.',
    url: 'https://www.shubhdental.com/doctors/dr-achita-yadav',
    images: [{ url: 'https://www.shubhdental.com/dr-achita-yadav.webp', width: 800, height: 800, alt: 'Dr. (Prof.) Achla Yadav — Cosmetic Dentist at Shubh Dental Clinic Rohtak' }],
    type: 'profile',
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Achla Yadav — Cosmetic Dentist & Oral Pathologist, Rohtak',
    description: '18+ years, 15,000+ cosmetic smiles. Porcelain veneers, smile makeovers & gentle pediatric care at Shubh Dental Clinic.',
    images: ['https://www.shubhdental.com/dr-achita-yadav.webp'],
  },
};

// Physician structured data for Google Knowledge Panel
const SCHEMA_PHYSICIAN = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.shubhdental.com/doctors/dr-achita-yadav',
  name: 'Dr. (Prof.) Achla Bharti Yadav',
  alternateName: 'Dr. Achla Yadav',
  jobTitle: 'Cosmetic Dentist & Consultant Oral Pathologist',
  description: 'Dr. (Prof.) Achla Yadav is a certified cosmetic dentist and oral pathologist in Rohtak with 18+ years of experience. Specialist in porcelain veneers, smile makeovers, and AI-assisted oral diagnostics.',
  image: 'https://www.shubhdental.com/dr-achita-yadav.webp',
  url: 'https://www.shubhdental.com/doctors/dr-achita-yadav',
  telephone: '+91-8685048414',
  medicalSpecialty: ['Cosmetic Dentistry', 'Oral Pathology', 'Pediatric Dentistry', 'Restorative Dentistry'],
  knowsAbout: ['Porcelain Veneers', 'Smile Makeovers', 'Cosmetic Bonding', 'Teeth Whitening', 'Oral Pathology Diagnostics', 'AI Oral Health Screening', 'Pediatric Dentistry', 'Painless Restorations'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'KLE Academy of Dental Sciences, Belgaum' },
    { '@type': 'CollegeOrUniversity', name: 'PGIDS, Rohtak' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BDS' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MDS (Oral & Maxillofacial Pathology)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'MFOMP — Fellow of Oral & Maxillofacial Pathology' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Certified Cosmetic Dentist' },
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
    { '@type': 'ListItem', position: 3, name: 'Dr. Achla Yadav', item: 'https://www.shubhdental.com/doctors/dr-achita-yadav' },
  ],
};

export default function DrAchitaYadavPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PHYSICIAN) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <DrAchitaYadavPageClient />
    </>
  );
}
