/** @format */
import '../styles/layout.scss';
import '../styles/main.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datastral - Content Management for Retail',
  description:
    'Datastral is a content management system optimized for retail businesses, enabling efficient data management with robust security measures.',
  openGraph: {
    images: '/datastral.png',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
