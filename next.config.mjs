/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://datastral-template.vercel.app'
      : 'http://localhost:3000'
  ),
};

export default nextConfig;
