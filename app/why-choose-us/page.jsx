import WhyChooseUsClient from './WhyChooseUsClient';

export const metadata = {
  title: 'Why Choose Shubh Dental Clinic Rohtak | PGI-Trained Specialists, 5,000+ Braces & 3,000+ Implants',
  description: "Discover why 2,50,000+ patients trust Shubh Orthodontic & Dental Clinic Rohtak. PGI-trained specialists, 5,000+ orthodontic cases, 3,000+ implants, in-house 3D lab, 654+ research citations, and 0% EMI. Rohtak's most trusted dental clinic.",
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
    canonical: 'https://www.shubhdental.com/why-choose-us',
  },
  openGraph: {
    title: 'Why Choose Shubh Dental Clinic Rohtak | PGI Experts · 5,000+ Braces & 3,000+ Implants · 5.0★',
    description: 'PGI-trained specialists, in-house 3D lab, 3,000+ implants placed, 5,000+ braces cases, 654+ research citations. Experience world-class dentistry in Rohtak, Haryana.',
    url: 'https://www.shubhdental.com/why-choose-us',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Shubh Dental Clinic | Rohtak\'s Most Trusted Orthodontic Center',
    description: '5,000+ braces cases. 3,000+ implants. 2,50,000+ patients treated. PGI-trained. 5.0★ Google Rating. See why patients travel from Delhi & Gurgaon to visit us.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

// JSON-LD Schema for the page
const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose Shubh Orthodontic & Dental Clinic Rohtak',
  description: 'Reasons to choose Shubh Dental Clinic — PGI-trained specialists, 5,000+ orthodontic cases, 3,000+ dental implants, in-house 3D lab, 0% EMI, and 654+ global research citations.',
  url: 'https://www.shubhdental.com/why-choose-us',
  mainEntity: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
    name: 'Shubh Orthodontic and Dental Clinic',
    url: 'https://www.shubhdental.com',
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
      <WhyChooseUsClient />
    </>
  );
}

