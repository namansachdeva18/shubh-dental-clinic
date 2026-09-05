/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow builds even with ESLint warnings (keep for now)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Compress all responses with gzip
  compress: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,

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

  // Permanent redirects to prevent keyword cannibalization, normalize www, and migrate old domain
  async redirects() {
    return [
      {
        source: '/clear-aligners',
        destination: '/treatments/invisalign-clear-aligners',
        permanent: true,
      },
      {
        source: '/skyalign',
        destination: '/treatments/skyalign-clear-aligners',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'shubhdental.com' }],
        destination: 'https://www.shubhdental.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'shubhdentalclinicrohtak.in' }],
        destination: 'https://www.shubhdental.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shubhdentalclinicrohtak.in' }],
        destination: 'https://www.shubhdental.com/:path*',
        permanent: true,
      },
    ];
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
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://region1.google-analytics.com https://*.doubleclick.net https://*.google.com",
              "frame-src 'self' https://maps.google.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.web3forms.com",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ],
      },
      {
        // Aggressively cache static assets
        source: '/(.*)\\.(webp|png|jpg|jpeg|svg|ico|woff|woff2|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache llms.txt
        source: '/llms.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ];
  },
};

export default nextConfig;
