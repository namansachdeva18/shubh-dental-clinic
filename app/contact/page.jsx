import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

export const metadata = {
  title: 'Contact & Clinic Location | Shubh Orthodontic & Dental Clinic Rohtak',
  description: 'Connect with Prof. Dr. S. K. Yadav at Shubh Orthodontic & Dental Clinic. Tilak Nagar, Delhi Bypass Road, Rohtak. Call +91-8685048414. Open Mon–Sat 9:30am–8pm.',
  alternates: {
    canonical: 'https://www.shubhdental.com/contact',
  },
  openGraph: {
    title: 'Contact & Clinic Location | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Reach us at Tilak Nagar, Delhi Bypass Road, Rohtak. Call +91-8685048414. Instant WhatsApp & Live GPS directions.',
    url: 'https://www.shubhdental.com/contact',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Shubh Dental Clinic Rohtak',
    description: 'Book consultation at Shubh Dental Clinic, Rohtak. Call +91-8685048414.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

const SCHEMA_CONTACT = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.shubhdental.com/contact#webpage',
  url: 'https://www.shubhdental.com/contact',
  name: 'Contact & Clinic Location — Shubh Orthodontic & Dental Clinic',
  description: 'Reach Shubh Orthodontic & Dental Clinic in Rohtak, Haryana. Direct phone, WhatsApp desk, GPS map directions, and appointment scheduling.',
  mainEntity: {
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.shubhdental.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <div className="contact-page-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CONTACT) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />
      <ContactSection isPageLevel={true} />
      <FAQSection />
    </div>
  );
}
