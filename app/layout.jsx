import './globals.css';
import './mobile.css';
// Fonts removed from next/font/google due to download failures causing CSS build crashes.
// Fonts are now imported via standard @import in globals.css.

import Header from './components/Header';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import BookingModal from './components/BookingModal';
import SplashScreen from './components/SplashScreen';
import WhatsAppFAB from './components/WhatsAppFAB';
import StickyMobileActionBar from './components/StickyMobileActionBar';
import { Providers } from './providers';

// Font variables removed – fonts are applied globally via globals.css

export const metadata = {
  metadataBase: new URL('https://www.shubhdentalclinicrohtak.in'),
  title: {
    default: 'Shubh Orthodontic & Dental Clinic | Best Orthodontist & Dentist in Rohtak',
    template: '%s | Shubh Orthodontic & Dental Clinic Rohtak',
  },
  description: 'Best Orthodontist & Dental Clinic in Rohtak, Haryana. Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign & SkyAlign™ Provider, Fellow WFO USA. 5,000+ braces & clear aligner cases. Dental implants, smile makeovers, kids dentistry. Visiting centres in Delhi, Gurugram, Panipat & Sonepat.',
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
    description: 'Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh. Invisalign, Braces, Implants & Smile Makeovers. 5,000+ cases. 5.0★ Google Rating.',
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
    description: 'Prof. Dr. S. K. Yadav — Rohtak\'s top orthodontist with 20+ years experience. Invisalign, Braces, Implants, Smile Makeovers.',
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
    <html lang="en">
      <head>
        {/* Resource Hints — These tell the browser to connect to external servers early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon-logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        {/* Geo Meta — Local SEO */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Rohtak" />
        <meta name="geo.position" content="28.8955;76.6066" />
        <meta name="ICBM" content="28.8955, 76.6066" />
        {/* Google Search Console — Replace content value with your actual GSC verification code */}
        {/* <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE_HERE" /> */}
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        {/* Skip navigation link — accessibility: becomes visible on keyboard focus via CSS */}
        <a href="#main-content" className="skip-nav-link">Skip to main content</a>
        <Providers>
          <SplashScreen />
          <InteractiveBackground />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BookingModal />
          <WhatsAppFAB />
        </Providers>
      </body>
    </html>
  );
}
