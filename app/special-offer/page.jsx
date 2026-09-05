import SpecialOfferPageClient from './PageClient';

export const metadata = {
  title: 'Special Offers & Discounts on Dental Treatments in Rohtak | Shubh Dental Clinic',
  description: 'Exclusive dental treatment offers at Shubh Dental Clinic Rohtak. Save up to 20% on clear aligners, dental implants, smile makeovers & braces. 0% EMI available. Limited period offers from Prof. Dr. S. K. Yadav\'s clinic.',
  keywords: ['dental offers Rohtak', 'discount dental treatment', 'affordable braces Rohtak', 'cheap dental implants Haryana', 'invisalign discount', 'dental EMI plans', 'teeth treatment offers near me'],
  alternates: {
    canonical: 'https://www.shubhdental.com/special-offer',
  },
  openGraph: {
    title: 'Special Dental Offers — Save Up to 20% | Shubh Dental Clinic Rohtak',
    description: 'Limited period discounts on clear aligners, dental implants, smile makeovers & braces. 0% EMI options. Book now at Shubh Orthodontic & Dental Clinic.',
    url: 'https://www.shubhdental.com/special-offer',
    images: [{ url: 'https://www.shubhdental.com/hero-image.webp', width: 1200, height: 630, alt: 'Special Dental Treatment Offers at Shubh Dental Clinic Rohtak' }],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Dental Offers | Shubh Dental Clinic Rohtak',
    description: 'Save up to 20% on aligners, implants & smile makeovers. 0% EMI available.',
    images: ['https://www.shubhdental.com/hero-image.webp'],
  },
};

// Offer structured data
const SCHEMA_OFFERS = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Shubh Dental Clinic — Special Treatment Offers',
  description: 'Limited period dental treatment offers and discounts at Shubh Orthodontic & Dental Clinic, Rohtak',
  url: 'https://www.shubhdental.com/special-offer',
  provider: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
    name: 'Shubh Orthodontic and Dental Clinic',
    url: 'https://www.shubhdental.com',
  },
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Clear Aligners — Flat 20% Concession',
      description: 'Invisalign® & SkyAlign™ clear aligners with 20% discount and 0% EMI.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Dental Implants — Special Package',
      description: 'Same-day dental implants with Zirconia crowns and 10-year warranty.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Smile Makeover — Complimentary Digital Preview',
      description: 'Full smile makeover with porcelain veneers and free digital smile design.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
  ],
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Special Offers', item: 'https://www.shubhdental.com/special-offer' },
  ],
};

export default function SpecialOfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_OFFERS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <SpecialOfferPageClient />
    </>
  );
}
