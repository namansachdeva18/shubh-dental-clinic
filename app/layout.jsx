import './globals.css';
import './mobile.css';
import { Outfit, Inter, Space_Grotesk } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import BookingModal from './components/BookingModal';
import SplashScreen from './components/SplashScreen';
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
  description: 'Prof. Dr. S. K. Yadav — MDS Orthodontics, Ex-PGI Chandigarh, Certified Invisalign Provider. 5,000+ braces cases, dental implants, smile makeovers in Rohtak, Haryana. Also available in Delhi, Gurgaon, Panipat.',
  keywords: ['orthodontist rohtak', 'dentist rohtak', 'invisalign rohtak', 'dental implants rohtak', 'braces rohtak', 'lingual braces haryana', 'teeth whitening rohtak', 'smile makeover rohtak', 'Dr SK Yadav orthodontist'],
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
      { url: '/favicon-logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-logo.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-logo.png',
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
        {/* Resource Hints — These tell the browser to connect to external servers early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        </Providers>
      </body>
    </html>
  );
}
