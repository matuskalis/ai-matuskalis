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
  title: 'Matus Kalis — Design & AI Consultant',
  description:
    'I help companies understand and use AI through hands-on workshops, and deliver sharp UI/UX design with fixed scope and pricing. Based in Bratislava, Slovakia.',
  metadataBase: new URL('https://matuskalis.com'),
  openGraph: {
    title: 'Matus Kalis — Design & AI Consultant',
    description:
      'I help companies understand and use AI through hands-on workshops, and deliver sharp UI/UX design with fixed scope and pricing.',
    url: 'https://matuskalis.com',
    siteName: 'Matus Kalis',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matus Kalis — Design & AI Consultant',
    description:
      'I help companies understand and use AI through hands-on workshops, and deliver sharp UI/UX design with fixed scope and pricing.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#141416',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Matus Kalis — Design & AI Consultant',
  description:
    'AI workshops and UI/UX design services for companies that want to move faster.',
  url: 'https://matuskalis.com',
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
