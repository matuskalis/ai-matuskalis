import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Workshops & Design — Matus Kalis',
  description:
    'Half-day AI workshops that turn your team from AI-curious to AI-fluent. Live demos, real workflows, zero slides. Based in Bratislava, working across Europe.',
  metadataBase: new URL('https://ai.matuskalis.com'),
  openGraph: {
    title: 'AI Workshops & Design — Matus Kalis',
    description:
      'Half-day AI workshops that turn your team from AI-curious to AI-fluent. Live demos, real workflows, zero slides.',
    url: 'https://ai.matuskalis.com',
    siteName: 'Matus Kalis — AI Workshops',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workshops & Design — Matus Kalis',
    description:
      'Half-day AI workshops that turn your team from AI-curious to AI-fluent. Live demos, real workflows, zero slides.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Matus Kalis — AI Workshops & Design',
  description:
    'Half-day AI workshops and fixed-price UI/UX design for companies that want to move faster with AI.',
  url: 'https://ai.matuskalis.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bratislava',
    addressCountry: 'SK',
  },
  priceRange: '$$',
  serviceArea: {
    '@type': 'Place',
    name: 'Europe',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
