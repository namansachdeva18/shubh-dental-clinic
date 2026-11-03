import PanipatOfferClient from './PageClient';

export const metadata = {
  title: 'Panipat Braces & Aligners Special Offer | Flat 20% OFF | Prof. Dr. S. K. Yadav',
  description: 'Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh, Fellow WFO USA) visiting Panipat Model Town on Friday, 6th November (3:30 PM - 8 PM). Exclusive Festive Offer: Flat 20% OFF on Clear Aligners, Damon Braces, Ceramic & Metal Braces + Free 3D Scan & OPD Consultation. Serving Panipat, Samalkha, Gharaunda & Karnal. Book your slot now!',
  keywords: [
    'clear aligners panipat',
    'dental braces offer panipat',
    'invisalign doctor panipat',
    'best orthodontist panipat',
    'dr sk yadav orthodontist',
    'teeth straightening panipat model town',
    'dr mansi chawla dental studio panipat',
    'ceramic braces panipat',
    'damon braces offer panipat',
    'lingual braces panipat',
    'aligners festive discount haryana',
    'orthodontic specialist panipat',
    'invisalign panipat price',
    'teeth clip doctor panipat',
    'best dentist for braces panipat'
  ],
  alternates: {
    canonical: 'https://www.shubhdental.com/panipat-offer',
    languages: {
      'en-IN': 'https://www.shubhdental.com/panipat-offer',
      'hi-IN': 'https://www.shubhdental.com/panipat-offer',
    },
  },
  openGraph: {
    title: '✨ Panipat Special: Flat 20% OFF on Braces & Aligners | Prof. Dr. S. K. Yadav',
    description: 'Visiting Panipat (Model Town) on Friday, 6th Nov (3:30 PM - 8 PM). Flat 20% Festive Concession on Clear Aligners & Dental Braces. Limited Consultations!',
    url: 'https://www.shubhdental.com/panipat-offer',
    images: [{ url: 'https://www.shubhdental.com/dr-sk-yadav.webp', width: 500, height: 750, alt: 'Prof. Dr. S. K. Yadav visiting Panipat Dental Studio' }],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panipat Special: Flat 20% OFF Aligners & Braces | Prof. Dr. S. K. Yadav',
    description: 'Visiting Panipat Model Town on Friday, 6th Nov. Flat 20% OFF festive discount on Aligners & all Braces types.',
    images: ['https://www.shubhdental.com/dr-sk-yadav.webp'],
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Panipat, Haryana',
    'geo.position': '29.3909;76.9635',
    'ICBM': '29.3909, 76.9635',
  }
};

const SCHEMA_LOCAL_DENTIST = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://www.shubhdental.com/#dentist',
  name: 'Shubh Orthodontic & Dental Clinic (Panipat Consultation Hub)',
  image: 'https://www.shubhdental.com/dr-sk-yadav.webp',
  url: 'https://www.shubhdental.com/panipat-offer',
  telephone: '+918685048414',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '194-L, Model Town',
    addressLocality: 'Panipat',
    addressRegion: 'Haryana',
    postalCode: '132103',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.3909,
    longitude: 76.9635
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '15:30',
      closes: '20:00'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Panipat' },
    { '@type': 'City', name: 'Samalkha' },
    { '@type': 'City', name: 'Gharaunda' },
    { '@type': 'City', name: 'Karnal' },
    { '@type': 'City', name: 'Sonipat' }
  ]
};

const SCHEMA_OFFERS = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Panipat Orthodontic Special 20% OFF Festive Concession Catalog',
  description: 'Flat 20% discount on Clear Aligners, Damon Self-Ligating Braces, Ceramic Braces, Metal Braces & Lingual Braces during Dr. S. K. Yadav\'s Panipat Visit.',
  url: 'https://www.shubhdental.com/panipat-offer',
  provider: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
    name: 'Shubh Orthodontic & Dental Clinic'
  },
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Clear Invisible Aligners (Invisalign & 3D Trays) - Flat 20% OFF',
      description: 'Transparent removable orthodontic aligners for teeth straightening without wires.',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability'
    },
    {
      '@type': 'Offer',
      name: 'Ceramic Tooth-Colored Aesthetic Braces - Flat 20% OFF',
      description: 'Translucent ceramic brackets blending naturally with tooth enamel.',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability'
    },
    {
      '@type': 'Offer',
      name: 'Self-Ligating Braces (Damon System) - Flat 20% OFF',
      description: 'Frictionless slide brackets for faster alignment and gentle tooth movement.',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability'
    },
    {
      '@type': 'Offer',
      name: 'Traditional Precision Metal Braces - Flat 20% OFF',
      description: 'High tensile strength stainless steel brackets for severe crowding and deep bites.',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability'
    },
    {
      '@type': 'Offer',
      name: 'Lingual Invisible Braces (Behind-the-Teeth) - Flat 20% OFF',
      description: '100% hidden orthodontic braces bonded to the inner surface of teeth.',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability'
    }
  ]
};

const SCHEMA_EVENT = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Special Orthodontic & Aligner OPD by Prof. Dr. S. K. Yadav in Panipat',
  description: 'Direct orthodontic consultation with Ex-PGI Chandigarh Senior Resident Prof. Dr. S. K. Yadav. Flat 20% OFF on Clear Aligners and all types of braces.',
  startDate: '2026-11-06T15:30:00+05:30',
  endDate: '2026-11-06T20:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: "Dr. Mansi Chawla's Dental Studio",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '194-L, Model Town',
      addressLocality: 'Panipat',
      addressRegion: 'Haryana',
      postalCode: '132103',
      addressCountry: 'IN'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: 'Shubh Orthodontic & Dental Clinic',
    url: 'https://www.shubhdental.com'
  },
  offers: {
    '@type': 'Offer',
    name: 'Flat 20% OFF Aligners & Braces Voucher Pass',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/LimitedAvailability',
    validFrom: '2026-11-01',
    validThrough: '2026-11-06T20:00:00+05:30',
    url: 'https://www.shubhdental.com/panipat-offer'
  }
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which treatments qualify for the Flat 20% OFF in Panipat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 20% festive concession applies to all premier orthodontic treatments: Clear Invisible Aligners (Invisalign & SkyAlign), Ceramic Tooth-Colored Braces, Damon Self-Ligating Braces, Traditional Metal Braces, and Lingual (Behind-the-Teeth) Braces.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the date, time, and location of Dr. S. K. Yadav\'s Panipat visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prof. Dr. S. K. Yadav will be available on Friday, 6th November from 3:30 PM to 8:00 PM at Dr. Mansi Chawla\'s Dental Studio, 194-L, Model Town, Panipat.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I have to pay anything online right now to claim the 20% offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No online payment is needed. Slot reservation is 100% free. Fill the quick form or call +91 86850 48414 to receive your 20% discount code, which will be redeemed during your clinic consultation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Who will perform my orthodontic checkup and treatment planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You will be examined directly by Prof. Dr. S. K. Yadav (MDS Orthodontics, Ex-PGI Chandigarh Senior Resident, Fellow WFO USA) who has treated over 5,000+ braces and clear aligner cases.'
      }
    }
  ]
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Panipat Special Offer', item: 'https://www.shubhdental.com/panipat-offer' },
  ],
};

const SCHEMA_SPEAKABLE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Panipat Braces & Aligners Special Offer | Flat 20% OFF | Prof. Dr. S. K. Yadav',
  url: 'https://www.shubhdental.com/panipat-offer',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.panipat-hero-h1', '.spotlight-doc-name', '.section-title-compact'],
  },
  mainEntity: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

export default function PanipatOfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCAL_DENTIST) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_OFFERS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_EVENT) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SPEAKABLE) }} />
      <PanipatOfferClient />
    </>
  );
}
