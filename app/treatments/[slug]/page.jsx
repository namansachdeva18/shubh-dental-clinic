import { getTreatmentById, treatments } from '../../data/treatments';
import { notFound } from 'next/navigation';
import PageClient from './PageClient';

export async function generateStaticParams() {
  return treatments.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const treatment = getTreatmentById(params.slug);
  if (!treatment) {
    return {
      title: 'Treatment Not Found | Shubh Dental Clinic Rohtak',
      robots: { index: false, follow: false },
    };
  }

  // Construct a concise, intent-aligned meta description (under 155 characters)
  const descBase = `${treatment.title} in Rohtak by ${treatment.doctor}. ${treatment.subtitle}. Duration: ${treatment.quickFacts?.duration || treatment.duration}. Book consultation at Shubh Dental.`;
  const description = descBase.length > 155 ? descBase.substring(0, 152) + '...' : descBase;
  const canonicalUrl = `https://www.shubhdentalclinicrohtak.in/treatments/${treatment.slug}`;

  return {
    title: `${treatment.title} in Rohtak | ${treatment.doctor} | Shubh Dental Clinic`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${treatment.title} in Rohtak | Shubh Orthodontic & Dental Clinic`,
      description,
      url: canonicalUrl,
      siteName: 'Shubh Orthodontic & Dental Clinic',
      locale: 'en_IN',
      type: 'article',
      images: [{
        url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp',
        width: 1200,
        height: 630,
        alt: `${treatment.title} at Shubh Dental Clinic Rohtak`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.title} in Rohtak | Shubh Dental Clinic`,
      description,
      images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
    },
  };
}

export default function TreatmentPage({ params }) {
  const treatment = getTreatmentById(params.slug);
  if (!treatment) notFound();

  const baseUrl = 'https://www.shubhdentalclinicrohtak.in';
  const pageUrl = `${baseUrl}/treatments/${treatment.slug}`;
  const clinicId = `${baseUrl}/#clinic`;
  const doctorId = `${baseUrl}/doctors/${treatment.doctorSlug || 'dr-sk-yadav'}#doctor`;
  const webpageId = `${pageUrl}#webpage`;
  const procedureId = `${pageUrl}#procedure`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  // Connected Schema.org Graph
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. MedicalWebPage
      {
        '@type': 'MedicalWebPage',
        '@id': webpageId,
        url: pageUrl,
        name: `${treatment.title} in Rohtak | Shubh Orthodontic & Dental Clinic`,
        description: treatment.overview,
        inLanguage: 'en-IN',
        mainEntity: { '@id': procedureId },
        reviewedBy: { '@id': doctorId },
        lastReviewed: treatment.medicalReviewDate || '2026-06-15',
        breadcrumb: { '@id': breadcrumbId }
      },

      // 2. MedicalProcedure / MedicalTherapy
      {
        '@type': ['MedicalProcedure', 'MedicalTherapy'],
        '@id': procedureId,
        name: `${treatment.title} Treatment`,
        description: treatment.overview,
        bodyLocation: 'Oral Cavity, Teeth & Jaws',
        procedureType: 'https://schema.org/NoninvasiveProcedure',
        howPerformed: treatment.processSteps 
          ? treatment.processSteps.map(s => `Step ${s.step}: ${s.title} — ${s.description}`).join(' | ')
          : undefined,
        preparation: treatment.candidacy?.idealFor || undefined,
        followup: treatment.quickFacts?.recovery || undefined,
        provider: { '@id': clinicId },
        mainEntityOfPage: { '@id': webpageId }
      },

      // 3. Clinic Entity
      {
        '@type': 'Dentist',
        '@id': clinicId,
        name: 'Shubh Orthodontic and Dental Clinic',
        url: baseUrl,
        telephone: '+918685048414',
        priceRange: '₹₹',
        image: `${baseUrl}/clinic-front.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road',
          addressLocality: 'Rohtak',
          addressRegion: 'Haryana',
          postalCode: '124001',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '28.891128',
          longitude: '76.621873'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '20:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '14:00'
          }
        ]
      },

      // 4. Physician Entity
      {
        '@type': 'Physician',
        '@id': doctorId,
        name: treatment.doctor,
        jobTitle: treatment.doctorTitle || 'Dental Specialist',
        description: treatment.doctorDegree || 'MDS Dental Specialist',
        worksFor: { '@id': clinicId },
        url: `${baseUrl}/doctors/${treatment.doctorSlug || 'dr-sk-yadav'}`
      },

      // 5. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Treatments', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: treatment.category || 'Specialist Care', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 4, name: treatment.title, item: pageUrl }
        ]
      },

      // 6. FAQPage (if faqs present)
      ...(treatment.faqs && treatment.faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: treatment.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }] : [])
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PageClient treatment={treatment} />
    </>
  );
}
