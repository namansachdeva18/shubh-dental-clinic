import DoctorsIntro from '../components/DoctorsIntro';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Our Specialists | Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav | Shubh Dental Clinic',
  description: 'Meet Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider) and Dr. Achla Bharti Yadav (Oral Pathologist & AI Diagnostics, Ex-PGI Rohtak) at Shubh Dental Clinic, Rohtak.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/doctors',
  },
  openGraph: {
    title: 'Our Specialists | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Prof. Dr. S. K. Yadav (Chief Orthodontist, Ex-PGI Chandigarh) and Dr. Achla Bharti Yadav (Oral Pathologist, Ex-PGI Rohtak). Book a specialist consultation today.',
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
  return (
    <>
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 0rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Our Specialists</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            World-class expertise delivered with a patient-first philosophy.
          </p>
        </div>
      </div>
      <DoctorsIntro />
      <SmartBooking />
    </>
  );
}
