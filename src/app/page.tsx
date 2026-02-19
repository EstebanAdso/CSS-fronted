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
            <h2 className="text-lg font-black text-gray-900">¿Quieres ver todos nuestros productos?</h2>
            <p className="text-sm text-gray-500 mt-0.5">Descarga nuestro catálogo completo con precios actualizados en PDF.</p>
          </div>
          <DescargaCatalogo />
        </div>
      </section>

      <ArmarPCBanner />
      <AboutSection />
      <ServiciosSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
