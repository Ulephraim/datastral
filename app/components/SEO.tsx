// import { useRouter } from "next/navigation";
import Head from "next/head";

const siteMetadata = {
  title: "SaaS Retail Website Template",
  description:
    "SaaS Retail Website Template is a modern and responsive website template for SaaS companies, startups, and retail businesses.",
  siteUrl: "https://retail-template.vercel.app",
  siteLogo:
    "https://retail-template.vercel.app/_next/static/media/logo.d5be2fb3.svg",
  socialBanner: "/og-image.png",
  author: "Abdullah Ayman",
};

interface CommonSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        "@type": string;
        url: string;
      }[];
  //   twImage: string
  canonicalUrl?: string;
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  // twImage,
  canonicalUrl,
}: CommonSEOProps) => {
  // const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        // content={`${siteMetadata.siteUrl}${router.asPath}`}
        content={`${siteMetadata.siteUrl}`}
      />
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
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} /> */}
      {/* <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      /> */}
    </Head>
  );
};

interface PageSEOProps {
  title: string;
  description: string;
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      // twImage={twImageUrl}
    />
  );
};
