import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BRAND_CONFIG } from '@/config/brand.config';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C1220',
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND_CONFIG.domain}`),
  title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.subline} | Make Room for More`,
  description:
    'Dedicated academic project, research report, and thesis advisory across undergraduate, MBA, and PhD disciplines. 100% human-crafted research, pay-as-you-go milestone safeguard, and mathematical pricing transparency.',
  keywords: [
    'academic project support',
    'research consultancy',
    'MBA project report',
    'thesis writing assistance',
    'dissertation literature review',
    'Excel data analysis',
    'academic research advisory',
    BRAND_CONFIG.name,
    BRAND_CONFIG.domain,
  ],
  authors: [{ name: `${BRAND_CONFIG.name} Advisory`, url: `https://${BRAND_CONFIG.domain}` }],
  creator: BRAND_CONFIG.name,
  publisher: BRAND_CONFIG.name,
  alternates: {
    canonical: `https://${BRAND_CONFIG.domain}`,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-wayforth',
  },
  openGraph: {
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
    description:
      'Your future is bigger than your next submission. Human-crafted research, literature reviews, quantitative models, and transparent quotations.',
    url: `https://${BRAND_CONFIG.domain}`,
    siteName: BRAND_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
    description:
      'Make room for more. Dedicated academic project and thesis research advisory.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: BRAND_CONFIG.name,
    url: `https://${BRAND_CONFIG.domain}`,
    logo: `https://${BRAND_CONFIG.domain}/favicon.ico`,
    description:
      'Accessible, dependable academic project, research report, and thesis advisory for undergraduate, postgraduate, and doctoral scholars.',
    email: BRAND_CONFIG.contactEmail,
    slogan: BRAND_CONFIG.tagline,
    areaServed: 'Worldwide',
    priceRange: '₹₹',
    knowsAbout: [
      'Academic Project Advisory',
      'Thesis & Dissertation Consultation',
      'MBA Strategic Case Studies',
      'Quantitative Excel & Financial Modeling',
      'Systematic Literature Reviews',
    ],
  };

  // AEO (Answer Engine Optimization) & Perplexity / Google Rich FAQ Schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Wayforth pay-as-you-go milestone model?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wayforth operates on a trust-first milestone model. Work commences with a 50% milestone deposit rather than requiring full advance payment. Clients inspect an authentic watermarked preview sample of their work and receive 1 included revision round before settling the final 50% balance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Wayforth academic deliverables written by human domain experts or AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every Wayforth project is 100% human-crafted by domain specialists. Wayforth does not use robotic AI regurgitation that hallucinates citations or produces generic filler. All manuscripts feature verifiable, accredited citations tailored to institutional rubrics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Wayforth calculate pricing for academic advisory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing uses a transparent mathematical formula: Base Starting Fee + (Pages × Per-Page Rate) + Urgency Surcharge + Custom Add-ons, minus an automatic 15% introductory discount. Standard page volumes represent 250 to 300 words per page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Wayforth guarantee academic marks or grades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. In adherence to strict academic integrity, Wayforth does not promise marks, distinctions, or specific grades, as evaluation is the sole discretion of institutional examiners. Deliverables serve as high-standard educational reference materials and defense-ready frameworks.',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#12324E] font-sans flex flex-col selection:bg-[#12324E] selection:text-white relative">
        <GoogleAnalytics />
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
