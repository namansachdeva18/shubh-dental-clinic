/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow builds even with ESLint warnings (keep for now)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Compress all responses with gzip
  compress: true,

  // Optimize images — enable modern formats
  images: {
    formats: ['image/avif', 'image/webp'],
    // Aggressive caching — images are rarely updated
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Responsive image sizes for srcset generation
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Dangerously allow all SVG (needed for logo)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Performance: skip type checking during builds (use separate CI step)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Add security & caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Aggressively cache static assets
        source: '/(.*)\\.(webp|png|jpg|jpeg|svg|ico|woff|woff2|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
