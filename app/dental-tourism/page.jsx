import DentalTourismClient from './DentalTourismClient';

export const metadata = {
  title: 'Dental Tourism India & NRI Dental Care in Rohtak & Delhi NCR | Shubh Dental Clinic',
  description: 'Fast-track dental tourism & NRI dental packages in Rohtak, just 75-80 mins from Delhi IGI Airport. Save up to 70-80% on Swiss dental implants, US Invisalign®, and Digital Smile Makeovers with PGI specialist Prof. Dr. S. K. Yadav.',
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
    canonical: 'https://www.shubhdentalclinicrohtak.in/dental-tourism',
  },
  openGraph: {
    title: 'Dental Tourism & NRI Care | Shubh Orthodontic & Dental Clinic',
    description: 'World-class dentistry closer to home. Save 70-80% on implants & aligners with PGI specialists, Swiss/US materials, and dedicated fast-track scheduling.',
    url: 'https://www.shubhdentalclinicrohtak.in/dental-tourism',
    type: 'website',
  }
};

export default function DentalTourismPage() {
  return <DentalTourismClient />;
}
