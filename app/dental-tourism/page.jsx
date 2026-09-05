import DentalTourismClient from './DentalTourismClient';

export const metadata = {
  title: 'Dental Tourism India & NRI Dental Care in Rohtak & Delhi NCR | Shubh Dental Clinic',
  description: 'Fast-track dental tourism & NRI dental packages in Rohtak, just 75-80 mins from Delhi IGI Airport. Save up to 70-80% on Korean Osstem® dental implants, US Invisalign®, and Digital Smile Makeovers with PGI specialist Prof. Dr. S. K. Yadav.',
  keywords: [
    'dental tourism india',
    'NRI dental care delhi ncr',
    'dental implants india cost',
    'invisalign india nri',
    'dental clinic near delhi airport',
    'same day implants rohtak',
    'smile makeover india',
    'dr sk yadav orthodontist'
  ],
  alternates: {
    canonical: 'https://www.shubhdental.com/dental-tourism',
  },
  openGraph: {
    title: 'Dental Tourism & NRI Care | Shubh Orthodontic & Dental Clinic',
    description: 'World-class dentistry closer to home. Save 70-80% on implants & aligners with PGI specialists, Korean Osstem®/US materials, and dedicated fast-track scheduling.',
    url: 'https://www.shubhdental.com/dental-tourism',
    type: 'website',
  }
};

const SCHEMA_DENTAL_TOURISM = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalBusiness'],
  name: 'Shubh Dental Clinic — NRI & Dental Tourism Care',
  url: 'https://www.shubhdental.com/dental-tourism',
  telephone: '+918685048414',
  priceRange: '₹₹ (70-80% savings vs USA/UK/Australia/Canada/UAE)',
  currenciesAccepted: 'INR, USD, GBP, EUR, AED, CAD, AUD',
  paymentAccepted: 'Cash, Credit Card, Wire Transfer, UPI',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tilak Nagar, Lane 9 Corner, Opp. Swami Nitanand Public School, Delhi Bypass Road',
    addressLocality: 'Rohtak',
    addressRegion: 'Haryana',
    postalCode: '124001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.891128',
    longitude: '76.621873',
  },
  availableLanguage: ['English', 'Hindi', 'Punjabi'],
  description: 'Fast-track international dental tourism packages for NRIs and overseas visitors. Save 70-80% on dental implants, Invisalign, and smile makeovers with PGI-trained specialists located 75 mins from Delhi IGI Airport.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NRI Dental Tourism Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Same-Day Dental Implants with Osstem® / Straumann®',
          description: 'Immediate load dental implants with warranty for overseas travellers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Fast-Track Invisalign & Clear Aligners',
          description: 'Digital 3D smile planning with full set of clear aligners provided in a single trip.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Full Mouth Digital Smile Makeover with CAD/CAM Veneers',
          description: 'E-max porcelain veneers and ceramic crowns completed in 5-7 days.',
        },
      },
    ],
  },
};

const SCHEMA_BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.shubhdental.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Dental Tourism & NRI Care',
      item: 'https://www.shubhdental.com/dental-tourism',
    },
  ],
};

export default function DentalTourismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DENTAL_TOURISM) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMBS) }}
      />
      <DentalTourismClient />
    </>
  );
}
