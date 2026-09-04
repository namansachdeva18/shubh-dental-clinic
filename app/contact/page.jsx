import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

export const metadata = {
  title: 'Contact & Clinic Location | Shubh Orthodontic & Dental Clinic Rohtak',
  description: 'Connect with Prof. Dr. S. K. Yadav at Shubh Orthodontic & Dental Clinic. Tilak Nagar, Delhi Bypass Road, Rohtak. Call +91-8685048414. Open Mon–Sat 9:30am–8pm.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/contact',
  },
  openGraph: {
    title: 'Contact & Clinic Location | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Reach us at Tilak Nagar, Delhi Bypass Road, Rohtak. Call +91-8685048414. Instant WhatsApp & Live GPS directions.',
    url: 'https://www.shubhdentalclinicrohtak.in/contact',
    images: [{ url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Shubh Dental Clinic Rohtak',
    description: 'Book consultation at Shubh Dental Clinic, Rohtak. Call +91-8685048414.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-root">
      <ContactSection />
      <FAQSection />
    </main>
  );
}
