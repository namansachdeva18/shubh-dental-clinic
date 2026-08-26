import './globals.css';
import './mobile.css';
import { Outfit, Inter, Space_Grotesk } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import BookingModal from './components/BookingModal';
import OfferModal from './components/OfferModal';
import { Providers } from './providers';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://www.shubhdentalclinicrohtak.in'),
  title: {
    default: 'Shubh Orthodontic & Dental Clinic | Best Orthodontist & Dentist in Rohtak',
    template: '%s | Shubh Orthodontic & Dental Clinic Rohtak',
  },
  description: 'Best Orthodontist & Dental Clinic in Rohtak, Haryana. Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign & SkyAlign™ Provider, Fellow WFO USA. 5,000+ braces cases, 3,000+ dental implants, 2,50,000+ patients treated. Clear aligners, smile makeovers, kids dentistry. Visiting centres in Delhi, Gurugram, Panipat & Sonepat.',
  keywords: ['best orthodontist rohtak', 'dentist rohtak', 'invisalign rohtak', 'skyalign rohtak', 'dental implants rohtak', 'braces rohtak haryana', 'same day implants rohtak', 'clear aligners rohtak', 'smile makeover rohtak', 'lingual braces haryana', 'teeth whitening rohtak', 'Dr SK Yadav orthodontist', 'dental clinic rohtak', 'dental tourism rohtak', 'NRI dental care haryana'],
  authors: [{ name: 'Prof. Dr. S. K. Yadav', url: 'https://www.shubhdentalclinicrohtak.in/doctors/dr-sk-yadav' }],
  creator: 'Shubh Orthodontic and Dental Clinic',
  publisher: 'Shubh Orthodontic and Dental Clinic',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.shubhdentalclinicrohtak.in',
    title: 'Shubh Orthodontic & Dental Clinic | Rohtak\'s Premier Orthodontic Specialists',
    description: 'Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh. Invisalign, Braces, Implants & Smile Makeovers. 5,000+ cases, 3,000+ implants, 2,50,000+ patients. 5.0★ Google Rating.',
    images: [{
      url: 'https://www.shubhdentalclinicrohtak.in/hero-image.webp',
      width: 1200,
      height: 630,
      alt: 'Shubh Orthodontic and Dental Clinic Rohtak — Prof. Dr. S. K. Yadav',
    }],
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ShubhDentalRohtak',
    title: 'Shubh Orthodontic & Dental Clinic Rohtak | Certified Invisalign Provider',
    description: 'Prof. Dr. S. K. Yadav — Rohtak\'s top orthodontist with 30+ years experience. Invisalign, Braces, Implants, Smile Makeovers.',
    images: ['https://www.shubhdentalclinicrohtak.in/hero-image.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon-logo.png?v=2', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-logo.png?v=2', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180' }],
    shortcut: '/favicon-logo.png?v=2',
  },
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in',
  },
};

export const viewport = {
  themeColor: '#4A2518',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-nav-link">
          Skip to main content
        </a>
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFAB />
          <BookingModal />
          <OfferModal />
        </Providers>
      </body>
    </html>
  );
}
