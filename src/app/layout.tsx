import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

/* SEO completo para CompuServicesSoft - Pasto, Nariño, Colombia */
export const metadata: Metadata = {
  title: "CompuServicesSoft | Componentes de Computador y Servicio Técnico en Pasto",
  description:
    "CompuServicesSoft en Pasto, Nariño: venta de componentes de computador, periféricos, armado de PCs gamer y servicio técnico especializado. SSD, RAM, GPU, monitores, procesadores y más. ¡Tu tienda tech en el CC San Agustín!",
  keywords: [
    "venta componentes computador Pasto",
    "servicio técnico computadores Pasto",
    "armar computador Pasto Nariño",
    "SSD Pasto",
    "RAM Pasto",
    "tarjeta gráfica Pasto",
    "monitor Pasto",
    "procesador Pasto",
    "computadores Pasto Colombia",
    "CompuServicesSoft",
    "tienda tecnología Pasto",
    "PC gamer Pasto",
    "mantenimiento computadores Nariño",
    "venta periféricos Pasto",
    "NVMe Pasto",
    "fuente de poder Pasto",
    "motherboard Pasto",
  ],
  authors: [{ name: "CompuServicesSoft - Carlos Esteban Trujillo Paz" }],
  creator: "CompuServicesSoft",
  publisher: "CompuServicesSoft",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://compuservicessoft.com",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://compuservicessoft.com",
    siteName: "CompuServicesSoft",
    title: "CompuServicesSoft | Componentes de Computador y Servicio Técnico en Pasto",
    description:
      "Tu aliado tech en Pasto, Nariño. Venta de componentes, armado de PCs y servicio técnico especializado. ¡Visítanos en el CC San Agustín!",
    images: [
      {
        url: "https://compuservicessoft.com/imgLocal/local.jpeg",
        width: 1200,
        height: 630,
        alt: "CompuServicesSoft - Tienda de tecnología en Pasto Nariño",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompuServicesSoft | Componentes y Servicio Técnico Pasto",
    description:
      "Venta de componentes de computador, armado de PCs y servicio técnico en Pasto, Nariño, Colombia.",
    images: ["https://compuservicessoft.com/imgLocal/local.jpeg"],
  },
  verification: {
    google: "",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Datos estructurados Schema.org para negocio local */
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CompuServicesSoft",
    description:
      "Venta de componentes de computador, periféricos, armado de PCs y servicio técnico especializado en Pasto, Nariño, Colombia.",
    url: "https://compuservicessoft.com",
    telephone: "+573242264795",
    email: "compuservicessoft@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CC San Agustín, Local 224A (Segundo piso al fondo)",
      addressLocality: "Pasto",
      addressRegion: "Nariño",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.2136",
      longitude: "-77.2811",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/compuservicessoft/",
      "https://wa.me/573242264795",
    ],
    priceRange: "$$",
    image: "https://compuservicessoft.com/imgLocal/local.jpeg",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
