import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar tema="claro" />

            <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Ilustración 404 */}
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 mb-6">
                            <span className="text-6xl font-black text-gray-300">404</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                            Página No Encontrada
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                            Lo sentimos, la página que buscas no existe o fue movida.
                            Te invitamos a explorar nuestro catálogo de productos tecnológicos
                            en Pasto, Nariño.
                        </p>
                    </div>

                    {/* Opciones de navegación */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Ir al Inicio
                        </Link>

                        <Link
                            href="/catalogo"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                            Ver Catálogo
                        </Link>
                    </div>

                    {/* Enlaces rápidos a categorías populares */}
                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Categorías Populares
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                { nombre: "Procesadores", slug: "procesador" },
                                { nombre: "Tarjetas Gráficas", slug: "grafica" },
                                { nombre: "Memorias RAM", slug: "ram" },
                                { nombre: "Discos SSD", slug: "ssd" },
                                { nombre: "Monitores", slug: "monitor" },
                                { nombre: "Teclados", slug: "teclado" },
                            ].map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/catalogo/categoria/${cat.slug}`}
                                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
                                >
                                    {cat.nombre}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Info de contacto */}
                    <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
                        <div className="flex items-start gap-3 text-left">
                            <svg
                                className="w-6 h-6 text-blue-500 shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <div>
                                <p className="text-sm font-semibold text-blue-900 mb-1">
                                    ¿No encuentras lo que buscas?
                                </p>
                                <p className="text-xs text-blue-700 leading-relaxed">
                                    Escríbenos por WhatsApp o visítanos en el CC San Agustín, Local 224A en Pasto.
                                    Te ayudaremos a encontrar el producto perfecto para ti.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dirección */}
                    <p className="text-xs text-gray-400 mt-6">
                        📍 CC San Agustín, Local 224A — Pasto, Nariño &nbsp;·&nbsp; 🕙 10am – 7pm
                    </p>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
