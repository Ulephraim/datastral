/** @format */

import '../styles/layout.scss';
import '../styles/main.scss';
import type { Metadata } from 'next';
import Nav from '@/app/components/nav';
import Footer from '@/app/components/footer';

export const metadata: Metadata = {
  title: 'Datastral - Decentralized File Storage & Collaboration',
  description:
    'Datastral is a secure, decentralized file manager for cloud storage and IPFS pinning. Store, share, and collaborate on files privately without subscriptions.',
  openGraph: {
    images: '',
    title: 'Datastral - Decentralized Cloud Storage',
    description:
      'Datastral enables seamless file storage, sharing, and collaboration on a decentralized cloud with IPFS pinning—no subscriptions required.',
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
