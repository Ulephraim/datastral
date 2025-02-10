/** @format */

import Head from 'next/head';

const siteMetadata = {
  title: 'Datastral - Content Management for Retail',
  description:
    'Datastral is a content management system optimized for retail businesses, enabling efficient data management with robust security measures. It provides real-time storage, management, and analysis of sales reports, customer feedback, and inventory information, eliminating common operational difficulties.',
  siteUrl: 'https://datastral-template.vercel.app',
  siteLogo:
    'https://datastral-template.vercel.app/_next/static/media/logo.d5be2fb3.svg',
  socialBanner: 'https://datastral-template.vercel.app/og-image.jpg',
  author: 'Ephraim Imhagbe',
};

interface CommonSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        '@type': string;
        url: string;
      }[];
  canonicalUrl?: string;
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  canonicalUrl,
}: CommonSEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
};

interface PageSEOProps {
  title: string;
  description: string;
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
    />
  );
};
