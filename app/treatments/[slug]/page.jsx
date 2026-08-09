import { getTreatmentById, treatments } from '../../data/treatments';
import { notFound } from 'next/navigation';
import PageClient from './PageClient';

export async function generateStaticParams() {
  return treatments.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const treatment = getTreatmentById(params.slug);
  if (!treatment) return {
    title: 'Treatment Not Found | Shubh Dental Clinic Rohtak',
    robots: { index: false, follow: false },
  };

  // Build a clean, unique, intent-aligned meta description (max 155 chars)
  const descBase = `${treatment.title} treatment in Rohtak by ${treatment.doctor}. ${treatment.subtitle}. Duration: ${treatment.duration}. Book a consultation at Shubh Dental Clinic.`;
  const description = descBase.length > 155 ? descBase.substring(0, 152) + '...' : descBase;

  return {
    title: `${treatment.title} in Rohtak | ${treatment.doctor} | Shubh Dental Clinic`,
    description,
    alternates: {
      canonical: `https://www.shubhdentalclinicrohtak.in/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.title} | Shubh Orthodontic & Dental Clinic Rohtak`,
      description,
      url: `https://www.shubhdentalclinicrohtak.in/treatments/${treatment.slug}`,
      siteName: 'Shubh Orthodontic & Dental Clinic',
      locale: 'en_IN',
      type: 'website',
      images: [{
        url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp',
        width: 1200,
        height: 630,
        alt: `${treatment.title} at Shubh Dental Clinic Rohtak`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.title} | Shubh Dental Clinic Rohtak`,
      description,
      images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
    },
  };
}

export default function TreatmentPage({ params }) {
  const treatment = getTreatmentById(params.slug);
  if (!treatment) notFound();

  const mainSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${treatment.title} Treatment in Rohtak`,
    description: treatment.overview,
    about: {
      '@type': 'MedicalTherapy',
      name: treatment.title,
    },
    provider: {
      '@type': 'Dentist',
      name: 'Shubh Orthodontic and Dental Clinic',
      url: 'https://www.shubhdentalclinicrohtak.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohtak',
        addressRegion: 'Haryana',
        addressCountry: 'IN'
      }
    }
  };

  const faqSchema = treatment.faqs && treatment.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdentalclinicrohtak.in' },
      { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.shubhdentalclinicrohtak.in/#services' },
      { '@type': 'ListItem', position: 3, name: treatment.title, item: `https://www.shubhdentalclinicrohtak.in/treatments/${treatment.slug}` },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient treatment={treatment} />
    </>
  );
}
