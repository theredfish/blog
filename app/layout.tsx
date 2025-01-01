import type { Metadata } from "next";
import "@styles/globals.css";
import PlausibleProvider from "next-plausible";

const siteTitle = "theredfi.sh";
const siteDescription = "Written material by Julian Didier (theredfish).";
const logoPath = "/metadata_logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: siteTitle,
  description: siteDescription,
  keywords: "rust, agritech, embedded development",
  icons: [
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: logoPath,
        alt: "theredfi.sh logo",
      },
    ],
  },
  twitter: {
    site: "@theredfi_sh",
    title: siteTitle,
    images: logoPath,
    description: siteDescription,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <PlausibleProvider domain="theredfi.sh" />
      </head>
      <body className="dark:bg-zinc-900 dark:text-gray-300 antialiased">
        {children}
      </body>
    </html>
  );
}
