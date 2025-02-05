import "../styles/layout.scss";
import "../styles/main.scss";
import type { Metadata } from "next";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Retail Template",
  description: "This is a retail company website template",
  openGraph: {
    images: "https://retail-template.vercel.app/og-image.png",
    title: "Retail Template",
    description: "This is a retail company website template",
    url: "https://retail-template.vercel.app",
    siteName: "Retail Template",
    type: "website",
  },
  authors: [
    { name: "Abdullah Ayman", url: "https://abdullah-ayman.vercel.app" },
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
