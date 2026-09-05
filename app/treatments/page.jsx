import TreatmentsIndexClient from './TreatmentsIndexClient';

export const metadata = {
  title: 'All Dental & Orthodontic Treatments in Rohtak | Shubh Dental Clinic',
  description: 'Explore all specialized dental treatments by PGI-trained specialists Prof. Dr. S. K. Yadav & Prof. Dr. Achla Yadav. Braces, Invisalign, Korean Osstem implants, veneers, painless RCT & smile makeovers with 0% EMI in Rohtak, Haryana.',
  keywords: [
    'dental treatments Rohtak',
    'orthodontist treatments Rohtak',
    'dental braces Rohtak',
    'clear aligners Rohtak',
    'dental implants Rohtak',
    'smile makeover Rohtak',
    'root canal treatment Rohtak',
    'teeth whitening Rohtak',
    'cosmetic dentistry Rohtak',
  ],
  alternates: {
    canonical: 'https://www.shubhdental.com/treatments',
  },
  openGraph: {
    title: 'All Dental Treatments in Rohtak | PGI Specialists | Shubh Dental Clinic',
    description: 'Comprehensive dental specialities: Braces, Invisalign®, Korean Osstem Implants, E-Max Veneers, Painless Rotary RCT, and Digital Smile Design. 2,50,000+ patients treated.',
    url: 'https://www.shubhdental.com/treatments',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Treatments | Shubh Orthodontic & Dental Clinic Rohtak',
    description: '17 certified dental disciplines under one roof. PGI-trained specialists, in-house 3D lab, 5.0★ Google rating.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'All Dental Treatments & Specialities — Shubh Orthodontic & Dental Clinic Rohtak',
  description: 'Complete list of dental treatments including braces, Invisalign, dental implants, cosmetic veneers, and restorative dentistry.',
  url: 'https://www.shubhdental.com/treatments',
  mainEntity: {
    '@type': 'MedicalBusiness',
    name: 'Shubh Orthodontic & Dental Clinic',
    medicalSpecialty: [
      'Orthodontics',
      'Implantology',
      'Cosmetic Dentistry',
      'Endodontics',
      'Periodontics',
      'Prosthodontics',
      'Oral and Maxillofacial Surgery'
    ],
    telephone: '+918685048414',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Delhi Bypass Chowk',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN'
    }
  }
};

export default function TreatmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <TreatmentsIndexClient />
    </>
  );
}
