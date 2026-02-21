import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriasCarrusel from "@/components/CategoriasCarrusel";
import ArmarPCBanner from "@/components/ArmarPCBanner";
import ProductosDestacados from "@/components/ProductosDestacados";
import AboutSection from "@/components/AboutSection";
import ServiciosSection from "@/components/ServiciosSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DescargaCatalogo from "@/components/DescargaCatalogo";
import GoogleReviews from "@/components/GoogleReviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "CompuServicesSoft Pasto | Tienda de Computadores, Componentes y Servicio Técnico en Nariño",
  description:
    "Tienda de tecnología en Pasto, Nariño. Venta de SSD, RAM, tarjetas gráficas, procesadores, monitores y componentes para PC. Armado de computadores gamer y servicio técnico especializado. CC San Agustín Local 224A. ¡Envíos en Pasto!",
  keywords: [
    "CompuServicesSoft Pasto",
    "tienda computadores Pasto",
    "tienda tecnología Pasto",
    "componentes PC Pasto",
    "SSD Pasto",
    "RAM Pasto",
    "tarjeta gráfica Pasto",
    "procesador Pasto",
    "monitor Pasto",
    "armar PC gamer Pasto",
    "servicio técnico computadores Pasto",
    "CC San Agustín Pasto",
    "tienda tecnología Nariño",
    "componentes gaming Pasto",
    "periféricos Pasto",
  ],
  openGraph: {
    title:
      "CompuServicesSoft Pasto | Tienda de Computadores y Componentes en Nariño",
    description:
      "Tu tienda de confianza en Pasto para componentes de PC, armado de computadores gamer y servicio técnico. Visítanos en CC San Agustín Local 224A.",
    url: "https://compuservicessoft.com",
    type: "website",
    images: [
      {
        url: "https://compuservicessoft.com/imagenes/local.jpeg",
        width: 1200,
        height: 630,
        alt: "CompuServicesSoft - Tienda de Tecnología en Pasto, Nariño",
      },
    ],
  },
  alternates: { canonical: "https://compuservicessoft.com" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CategoriasCarrusel />
      <ProductosDestacados />

      {/* Sección descarga catálogo */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-black text-gray-900">
              ¿Quieres ver todos nuestros productos?
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Descarga nuestro catálogo completo con precios actualizados en
              PDF.
            </p>
          </div>
          <DescargaCatalogo />
        </div>
      </section>

      <ArmarPCBanner />
      <AboutSection />
      <ServiciosSection />
      <GoogleReviews />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
