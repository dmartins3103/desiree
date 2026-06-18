import type { Metadata, Viewport } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Estratégia Jurídica para Empresas, Patrimônios e Sucessão`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "NR-1",
    "riscos psicossociais",
    "adequação NR-1",
    "compliance trabalhista",
    "compliance empresarial",
    "direito empresarial",
    "holding familiar",
    "holding patrimonial",
    "planejamento sucessório",
    "governança corporativa",
    "proteção patrimonial",
    "consultoria jurídica empresarial",
    "LGPD",
  ],
  alternates: { canonical: "/" },
  category: "Legal Services",
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Estratégia Jurídica Empresarial`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Estratégia Jurídica Empresarial`,
    description: site.description,
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${spectral.variable} ${hanken.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
