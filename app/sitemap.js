import { treatments } from './data/treatments';

const BASE_URL = 'https://www.shubhdental.com';

export default function sitemap() {
  const LAST_MOD = '2026-09-05T00:00:00.000Z';

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/treatments', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/doctors', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/doctors/dr-sk-yadav', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/doctors/dr-achita-yadav', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/reviews', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/dental-tourism', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/special-offer', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/visiting-centres', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/why-choose-us', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  ];

  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: LAST_MOD,
    changeFrequency,
    priority,
  }));

  // Dynamic treatment pages
  const treatmentEntries = treatments.map((treatment) => ({
    url: `${BASE_URL}/treatments/${treatment.slug}`,
    lastModified: treatment.medicalReviewDate
      ? new Date(treatment.medicalReviewDate).toISOString()
      : new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticEntries, ...treatmentEntries];
}
