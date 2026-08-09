import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

export const metadata = {
  title: 'Contact & Book Appointment | Shubh Dental Clinic Rohtak',
  description: 'Book your consultation at Shubh Orthodontic & Dental Clinic. Tilak Nagar, Delhi Bypass Road, Rohtak, Haryana 124001. Call +91-8685048414. Open Mon–Sat 9:30am–8pm.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/contact',
  },
  openGraph: {
    title: 'Contact & Book Appointment | Shubh Dental Clinic Rohtak',
    description: 'Reach us at Tilak Nagar, Delhi Bypass Road, Rohtak. Call +91-8685048414. Book your orthodontic or dental consultation today.',
    url: 'https://www.shubhdentalclinicrohtak.in/contact',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Shubh Dental Clinic Rohtak',
    description: 'Book your consultation at Shubh Dental Clinic, Rohtak. Call +91-8685048414.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 0rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            We're here to help you achieve your perfect smile. Reach out to book your consultation today.
          </p>
        </div>
      </div>
      <ContactSection />
      <FAQSection />
    </>
  );
}
