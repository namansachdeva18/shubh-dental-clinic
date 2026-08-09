import PatientGallery from '../components/PatientGallery';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Patient Smile Gallery & Before/After Results | Shubh Dental Clinic Rohtak',
  description: 'View real before and after smile transformations. Invisalign, dental braces, implants, and smile makeovers by Prof. Dr. S. K. Yadav and Dr. Achla Bharti Yadav at Shubh Dental Clinic, Rohtak.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/gallery',
  },
  openGraph: {
    title: 'Smile Gallery & Before/After | Shubh Dental Clinic Rohtak',
    description: 'Real patient smile transformations — braces, Invisalign, implants, and veneers results from Rohtak\'s leading dental clinic.',
    url: 'https://www.shubhdentalclinicrohtak.in/gallery',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smile Gallery | Shubh Dental Clinic Rohtak',
    description: 'Real patient before/after results. Braces, Invisalign, implants, and smile makeovers.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

export default function GalleryPage() {
  return (
    <>
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 0rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Smile Gallery</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Explore genuine transformations and see the life-changing impact of expert dental care.
          </p>
        </div>
      </div>
      <PatientGallery />
      <SmartBooking />
    </>
  );
}
