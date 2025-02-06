/** @format */

import '../styles/layout.scss';
import '../styles/main.scss';
import type { Metadata } from 'next';
import Nav from '@/app/components/nav';
import Footer from '@/app/components/footer';

export const metadata: Metadata = {
  title: 'Datastral - Content Management for Retail',
  description:
    'Datastral is a content management system optimized for retail businesses, enabling efficient data management with robust security measures. It provides real-time storage, management, and analysis of sales reports, customer feedback, and inventory information, eliminating common operational difficulties.',
  openGraph: {
    images: 'https://datastral-template.vercel.app/og-image.jpg',
    title: 'Datastral - Retail-Focused Content Management',
    description:
      'Optimize your retail business with Datastral. Securely store, manage, and analyze sales reports, customer feedback, and inventory in real time.',
    url: 'https://datastral-template.vercel.app',
    siteName: 'Datastral',
    type: 'website',
  },
  authors: [
    { name: 'Ephraim Imhagbe', url: 'https://ephraimportfolio.vercel.app' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
