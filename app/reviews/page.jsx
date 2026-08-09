import Testimonials from '../components/Testimonials';
import PatientGallery from '../components/PatientGallery';

export const metadata = {
  title: 'Patient Reviews & Testimonials | Shubh Dental Clinic Rohtak',
  description: 'Read authentic 5-star patient reviews for Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav at Shubh Orthodontic & Dental Clinic, Rohtak. Real stories, real smiles.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/reviews',
  },
  openGraph: {
    title: 'Patient Reviews | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Authentic 5-star patient reviews and testimonials. See real smile transformations from braces, Invisalign, and implant patients in Rohtak.',
    url: 'https://www.shubhdentalclinicrohtak.in/reviews',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews | Shubh Dental Clinic Rohtak',
    description: 'Authentic 5-star reviews from braces, Invisalign, and implant patients.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

export default function ReviewsPage() {
  return (
    <main className="reviews-page-wrapper" style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      
      {/* Top Page Header Banner */}
      <div style={{ paddingTop: '8rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #110805 0%, #2A150B 50%, #1A0C08 100%)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(214, 122, 65, 0.15)', border: '1px solid rgba(214, 122, 65, 0.3)', color: 'var(--accent-gold-light)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
            ⭐ VERIFIED GOOGLE BUSINESS PROFILE REVIEWS
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
            Verified Patient <span className="text-gradient-copper">Reviews &amp; Ratings</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7 }}>
            Authentic 5-star reviews and smile transformations from patients across Rohtak, Delhi NCR, and Haryana.
          </p>
        </div>
      </div>

      <Testimonials />
      <PatientGallery />
    </main>
  );
}
