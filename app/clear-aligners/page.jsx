import AlignerHero from '../components/AlignerHero';
import SmartBooking from '../components/SmartBooking';

export const metadata = {
  title: 'Clear Aligners & Invisalign | Shubh Dental Clinic Rohtak',
  description: 'Straighten your teeth invisibly with SkyAlign™ and Invisalign® clear aligners. Over 11,000+ transformations by Prof. Dr. S. K. Yadav in Rohtak, Haryana.',
  keywords: [
    'clear aligners Rohtak',
    'Invisalign Rohtak',
    'invisible braces Rohtak',
    'SkyAlign Rohtak',
    'Dr S K Yadav orthodontist',
  ],
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/clear-aligners',
  }
};

export default function ClearAlignersPage() {
  return (
    <>
      {/* Aligner section */}
      <AlignerHero />
      
      {/* Booking section */}
      <SmartBooking />
    </>
  );
}
