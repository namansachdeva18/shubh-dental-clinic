import DoctorsClient from './DoctorsClient';

export const metadata = {
  title: 'Our Specialists | Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav | Shubh Dental Clinic',
  description: 'Meet Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider) and Dr. (Prof.) Achla Yadav (Oral Pathologist, Ex-PGIDS Rohtak & ECHS Rewari) at Shubh Dental Clinic, Rohtak.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/doctors',
  },
  openGraph: {
    title: 'Our Specialists | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Prof. Dr. S. K. Yadav (Chief Orthodontist, Ex-PGI Chandigarh) and Dr. (Prof.) Achla Yadav (Cosmetic Dentist & Oral Pathologist). Book a specialist consultation today.',
    url: 'https://www.shubhdentalclinicrohtak.in/doctors',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Specialists | Shubh Dental Clinic Rohtak',
    description: 'PGI-trained orthodontist and oral pathologist. Book your specialist consultation at Shubh Dental Clinic, Rohtak.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

export default function DoctorsPage() {
  return <DoctorsClient />;
}
