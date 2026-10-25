const BASE_URL = 'https://www.shubhdental.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow all major AI crawlers
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'GoogleOther',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'Bytespider',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'cohere-ai',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: ['/', '/llms.txt', '/.well-known/ai-plugin.json', '/special-offer'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
