import FAQSection from '../components/FAQSection';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Dental FAQs | Braces, Invisalign, Implants | Shubh Clinic Rohtak',
  description: 'Answers to frequently asked questions about dental braces, Invisalign, implants, root canals, costs, and treatment timelines at Shubh Orthodontic & Dental Clinic, Rohtak.',
  alternates: {
    canonical: 'https://www.shubhdental.com/faq',
  },
  openGraph: {
    title: 'Dental FAQs | Shubh Orthodontic & Dental Clinic Rohtak',
    description: 'Answers to your most common questions about braces, Invisalign, implants, and dental treatment costs at Shubh Dental Clinic, Rohtak.',
    url: 'https://www.shubhdental.com/faq',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental FAQs | Shubh Dental Clinic Rohtak',
    description: 'Common questions about braces, Invisalign, implants, and dental costs answered.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

const SCHEMA_FAQ_PAGE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.shubhdental.com/faq#webpage',
  url: 'https://www.shubhdental.com/faq',
  name: 'Frequently Asked Questions — Shubh Orthodontic & Dental Clinic',
  description: 'Dental treatment FAQs: costs, braces, Invisalign clear aligners, dental implants, pain management, and appointments in Rohtak.',
  about: {
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Dental FAQs', item: 'https://www.shubhdental.com/faq' },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ_PAGE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 0rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to know before starting your treatment journey with us.
          </p>
        </div>
      </div>
      <FAQSection />
      <SmartBooking />
    </>
  );
}
