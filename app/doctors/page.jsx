import DoctorsClient from './DoctorsClient';

export const metadata = {
  title: 'Our Specialists | Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav | Shubh Dental Clinic',
  description: 'Meet Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider) and Dr. (Prof.) Achla Yadav (Oral Pathologist, Ex-PGIDS Rohtak & ECHS Rewari) at Shubh Dental Clinic, Rohtak.',
  alternates: {
    canonical: 'https://www.shubhdental.com/doctors',
  },
  openGraph: {
    title: 'Our Specialists | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Prof. Dr. S. K. Yadav (Chief Orthodontist, Ex-PGI Chandigarh) and Dr. (Prof.) Achla Yadav (Cosmetic Dentist & Oral Pathologist). Book a specialist consultation today.',
    url: 'https://www.shubhdental.com/doctors',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Specialists | Shubh Dental Clinic Rohtak',
    description: 'PGI-trained orthodontist and oral pathologist. Book your specialist consultation at Shubh Dental Clinic, Rohtak.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

const SCHEMA_DOCTORS = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://www.shubhdental.com/doctors#webpage',
  url: 'https://www.shubhdental.com/doctors',
  name: 'Specialist Doctors — Shubh Orthodontic & Dental Clinic',
  description: 'Meet Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh) and Dr. (Prof.) Achla Bharti Yadav (MDS Oral Pathology, Ex-PGIDS Rohtak).',
  about: {
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Doctors', item: 'https://www.shubhdental.com/doctors' },
  ],
};

export default function DoctorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DOCTORS) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />
      <DoctorsClient />
    </>
  );
}
