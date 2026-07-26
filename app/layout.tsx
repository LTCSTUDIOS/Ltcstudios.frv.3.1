import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/bodoni-moda";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { site } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "LTC Studios — Creative House indépendante",
    template: "%s — LTC Studios",
  },
  description: site.description,
  applicationName: site.name,
  creator: "LTC Studios",
  publisher: "LTC Studios",
  category: "music",
  keywords: [
    "LTC Studios",
    "Creative House",
    "SeaKlone",
    "WOLFIBEAT",
    "Tom à la Prod",
    "production musicale",
    "mixage",
    "mastering",
    "catalogue musical",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.name,
    title: "LTC Studios — Creative House indépendante",
    description: site.description,
    images: [
      {
        url: "/images/og-ltc-studios.webp",
        width: 1200,
        height: 630,
        alt: "LTC Studios — créer, produire et faire durer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LTC Studios — Creative House indépendante",
    description: site.description,
    images: ["/images/og-ltc-studios.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151512",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
