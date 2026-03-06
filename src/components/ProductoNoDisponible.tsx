import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Producto } from "@/types";

type Props = {
    nombreProducto: string;
    nombreCategoria: string;
    slugCategoria: string;
    productosRelacionados: Producto[];
};

export default function ProductoNoDisponible({
    nombreProducto,
    nombreCategoria,
    slugCategoria,
    productosRelacionados,
}: Props) {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 container-site flex-1">
            <div className="max-w-3xl mx-auto text-center">
                {/* Encabezado */}
                <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                            className="w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                        Producto No Disponible
                    </h1>

                    {nombreProducto && (
                        <p className="text-lg text-gray-600 mb-2">
                            <span className="font-semibold">{nombreProducto}</span>
                        </p>
                    )}

                    <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Este producto no está disponible temporalmente. Puede estar agotado o haber sido
                        descontinuado. Te invitamos a explorar productos similares en nuestra categoría de{" "}
                        <span className="font-semibold text-primary">{nombreCategoria}</span>.
                    </p>
                </div>

                {/* Opciones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                    <Link
                        href={`/catalogo/categoria/${slugCategoria}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                        Ver {nombreCategoria}
                    </Link>

                    <Link
                        href="/catalogo"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Catálogo Completo
                    </Link>
                </div>

                {/* Info adicional */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-left">
                    <div className="flex items-start gap-3">
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
                                ¿Buscas este producto específico?
                            </p>
                            <p className="text-xs text-blue-700 leading-relaxed">
                                Escríbenos por WhatsApp y te ayudaremos a encontrarlo o conseguir una alternativa
                                similar. También puedes visitarnos en nuestra tienda física en el CC San Agustín,
                                Local 224A, Pasto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos relacionados */}
            {productosRelacionados.length > 0 && (
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
                        Productos similares en{" "}
                        <span className="text-primary">{nombreCategoria}</span>
                    </h2>
                    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {productosRelacionados.map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
