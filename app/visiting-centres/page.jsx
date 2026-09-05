import VisitingCentresClient from './VisitingCentresClient';

export const metadata = {
  title: 'Visiting Consultation Centres across Haryana & Delhi NCR | Prof. Dr. S. K. Yadav | Shubh Dental',
  description: 'Book specialist orthodontic & dental implant consultations with Prof. Dr. S. K. Yadav across Rohtak, Gurugram, Delhi, Panipat, Sonepat & Fatehabad. Leading MDS orthodontist.',
  keywords: ['dental clinic Rohtak', 'orthodontist Delhi NCR', 'visiting dental specialist Haryana', 'Dr SK Yadav consulting centres', 'Invisalign Gurugram', 'braces Panipat'],
  alternates: { canonical: 'https://www.shubhdental.com/visiting-centres' },
  openGraph: {
    title: 'Visiting Centres | Shubh Dental Clinic — Rohtak, Delhi, Gurugram & More',
    description: 'Book specialist consultation with Prof. Dr. S. K. Yadav at 6 visiting centres across Haryana and Delhi NCR.',
    url: 'https://www.shubhdental.com/visiting-centres',
    siteName: 'Shubh Orthodontic & Dental Clinic',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Centres across Haryana & NCR | Shubh Dental Clinic',
    description: 'Expert orthodontic care with Prof. Dr. S. K. Yadav across 6 visiting clinics.',
  },
};

const SCHEMA_VISITING = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalOrganization'],
  name: 'Shubh Orthodontic & Dental Clinic — Visiting Consultation Network',
  url: 'https://www.shubhdental.com/visiting-centres',
  telephone: '+918685048414',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tilak Nagar Lane 9, Delhi Bypass Road',
    addressLocality: 'Rohtak',
    postalCode: '124001',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Rohtak' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Panipat' },
    { '@type': 'City', name: 'Sonepat' },
    { '@type': 'City', name: 'Fatehabad' },
  ],
  hasMap: 'https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw',
  openingHours: 'Mo-Sa 09:30-20:00',
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.shubhdental.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Visiting Centres',
      item: 'https://www.shubhdental.com/visiting-centres',
    },
  ],
};

export default function VisitingCentresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_VISITING) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />

      <VisitingCentresClient />
    </>
  );
}
