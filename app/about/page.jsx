import AboutSection from '../components/AboutSection';
import DoctorsIntro from '../components/DoctorsIntro';
import Testimonials from '../components/Testimonials';

export const metadata = {
  title: 'About Shubh Orthodontic & Dental Clinic | Rohtak',
  description: 'Shubh Orthodontic & Dental Clinic — founded by Prof. Dr. S. K. Yadav (MDS, Ex-PGI Chandigarh) and Dr. Achla Bharti Yadav (Ex-PGI Rohtak). 20+ years of trusted dental care in Rohtak, Haryana.',
  alternates: {
    canonical: 'https://www.shubhdental.com/about',
  },
  openGraph: {
    title: 'About Us | Shubh Orthodontic & Dental Clinic Rohtak',
    description: "Meet the specialists behind Rohtak's premier dental clinic. PGI-trained doctors with 20+ years of excellence in orthodontics, implants, and smile design.",
    url: 'https://www.shubhdental.com/about',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Shubh Dental Clinic Rohtak',
    description: 'PGI-trained dental specialists with 20+ years of excellence in Rohtak.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

const SCHEMA_ABOUT = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.shubhdental.com/about#webpage',
  url: 'https://www.shubhdental.com/about',
  name: 'About Shubh Orthodontic & Dental Clinic — Rohtak, Haryana',
  description: 'About Shubh Orthodontic & Dental Clinic, founded by Prof. Dr. S. K. Yadav (MDS, Ex-PGI Chandigarh) and Dr. Achla Bharti Yadav (Ex-PGI Rohtak).',
  mainEntity: {
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.shubhdental.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ABOUT) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>About Our Clinic</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            A legacy of excellence spanning over two decades, built on trust, ethics, and world-class clinical expertise.
          </p>
        </div>
      </div>
      <AboutSection />
      <DoctorsIntro />
      <Testimonials />
    </>
  );
}
