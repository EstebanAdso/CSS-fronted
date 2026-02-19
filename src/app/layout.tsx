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
  title: "CompuServicesSoft | Tienda de Computadores y Servicio Técnico en Pasto, Nariño",
  description:
    "CompuServicesSoft en Pasto, Nariño: compra SSD, RAM, tarjetas gráficas, procesadores, monitores y periféricos. Armado de PCs gamer y servicio técnico especializado. CC San Agustín Local 224A. ¡Envíos y atención personalizada!",
  keywords: [
    "SSD Pasto",
    "SSD Nariño",
    "RAM Pasto",
    "tarjeta gráfica Pasto",
    "GPU Pasto",
    "procesador Pasto",
    "monitor Pasto",
    "NVMe Pasto",
    "motherboard Pasto",
    "fuente de poder Pasto",
    "armar PC Pasto",
    "PC gamer Pasto",
    "computador Pasto",
    "venta componentes computador Pasto",
    "tienda tecnología Pasto Nariño",
    "servicio técnico computadores Pasto",
    "mantenimiento computadores Pasto",
    "reparación computadores Pasto",
    "instalación sistema operativo Pasto",
    "CompuServicesSoft",
    "CC San Agustín Pasto tecnología",
    "periféricos gaming Pasto",
    "teclado mouse gaming Pasto",
    "disco duro SSD Pasto Colombia",
    "componentes PC Nariño Colombia",
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
    title: "CompuServicesSoft | Tienda de Computadores y Servicio Técnico en Pasto, Nariño",
    description:
      "Compra SSD, RAM, GPU, procesadores y más en Pasto, Nariño. Armado de PCs gamer y servicio técnico especializado. ¡Visítanos en el CC San Agustín Local 224A!",
    images: [
      {
        url: "https://compuservicessoft.com/imagenes/local.jpeg",
        width: 1200,
        height: 630,
        alt: "CompuServicesSoft - Tienda de tecnología en Pasto, Nariño — CC San Agustín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompuServicesSoft | Tienda de Computadores en Pasto, Nariño",
    description:
      "Compra SSD, RAM, GPU, procesadores y periféricos en Pasto, Nariño. Armado de PCs gamer y servicio técnico especializado en el CC San Agustín.",
    images: ["https://compuservicessoft.com/imagenes/local.jpeg"],
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
    image: "https://compuservicessoft.com/imagenes/local.jpeg",
    hasMap: "https://share.google/9K90cdC3XFqwfDQr2",
    knowsAbout: [
      "Venta de componentes de computador",
      "Servicio técnico de computadores",
      "Armado de PC gamer",
      "SSD", "RAM", "Procesadores", "Tarjetas gráficas", "Motherboards",
    ],
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
