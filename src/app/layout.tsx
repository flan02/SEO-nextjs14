import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bullet Blog",
    template: "%s | Bullet Blog", // %s will be replaced with child page title
  },
  description: "Blog that hurts you more than a bullet",
  twitter: {
    site: "@bulletblog",
    card: "summary_large_image",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <title>Bullet Blog</title>
      <meta name="description" content="Blog that hurts you more than a bullet" />


      <meta property="og:url" content="https://2jxbxuv3mi3c2gqmicydntvrca.srv.us/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bullet Blog" />
      <meta property="og:description" content="Blog that hurts you more than a bullet" />
      <meta property="og:image" content="http://localhost:3000/opengraph-image.png?ca5e033ab92d3779" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="2jxbxuv3mi3c2gqmicydntvrca.srv.us" />
      <meta property="twitter:url" content="https://2jxbxuv3mi3c2gqmicydntvrca.srv.us/" />
      <meta name="twitter:title" content="Bullet Blog" />
      <meta name="twitter:description" content="Blog that hurts you more than a bullet" />
      <meta name="twitter:image" content="http://localhost:3000/opengraph-image.png?ca5e033ab92d3779">

      </meta>
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
