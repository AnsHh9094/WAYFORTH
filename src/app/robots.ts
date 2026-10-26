import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Generative & Answer Engine Optimization (GEO/AEO Bot Ingestion)
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'meta-externalagent',
          'OAI-SearchBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://wayforth.in/sitemap.xml',
  };
}
