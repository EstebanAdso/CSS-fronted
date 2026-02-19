import type { Metadata } from "next";
import { getCategorias, getProductosPorCategoria } from "@/lib/api";
import { slugify, urlCategoriaFiltro } from "@/lib/utils";
import type { Categoria } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCard from "@/components/ProductCard";
import CatalogoFiltros from "@/components/CatalogoFiltros";
import PaginacionControles from "@/components/PaginacionControles";

type SearchParams = { page?: string };
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
};

async function resolverCategoria(slug: string): Promise<Categoria | null> {
  try {
    const cats = await getCategorias();
    return cats.find((c) => slugify(c.nombre) === slug) ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = await resolverCategoria(slug);
  if (!cat) return { title: "Categoría | CompuServicesSoft" };

  const titulo = `${cat.nombre} en Pasto | CompuServicesSoft`;
  const descripcion = `Compra ${cat.nombre} en Pasto, Nariño. ${cat.descripcion ?? "Productos de calidad con garantía en CompuServicesSoft — CC San Agustín, Local 224A."}`;
  const canonical = `https://compuservicessoft.com${urlCategoriaFiltro(cat.nombre)}`;

  return {
    title: titulo,
    description: descripcion,
    openGraph: { title: titulo, description: descripcion, url: canonical, type: "website" },
    alternates: { canonical },
  };
}

export default async function CategoriaFiltroPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = sp.page ? Math.max(0, Number(sp.page) - 1) : 0;
  const PAGE_SIZE = 20;

  let categoriasData: Categoria[] = [];
  let categoriaActiva: Categoria | null = null;
  let productos: import("@/types").Producto[] = [];
  let totalPages = 0;
  let totalElements = 0;
  let errorMsg = "";

  try {
    categoriasData = await getCategorias();
    categoriaActiva = categoriasData.find((c) => slugify(c.nombre) === slug) ?? null;

    if (categoriaActiva) {
      const data = await getProductosPorCategoria(categoriaActiva.id, page, PAGE_SIZE);
      productos = data.content;
      totalPages = data.totalPages;
      totalElements = data.totalElements;
    }
  } catch {
    errorMsg = "No se pudo conectar con el servidor. Intenta más tarde.";
  }

  const paginaActual = page + 1;
  const baseUrl = categoriaActiva ? urlCategoriaFiltro(categoriaActiva.nombre) : undefined;

  return (
    <main className="min-h-screen bg-white">
      <Navbar tema="claro" />

      {/* Layout: sidebar + grid */}
      <div className="container-site px-4 sm:px-6 lg:px-8 pt-[172px] lg:pt-18 pb-20">
        <div className="flex flex-col lg:flex-row gap-6 mt-0 lg:mt-4">

          <CatalogoFiltros
            categorias={categoriasData}
            categoriaActivaId={categoriaActiva?.id ?? null}
            busquedaActual=""
            totalElements={totalElements}
          />

          <div className="flex-1 min-w-0">

            {/* Título SEO dentro del área de productos */}
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 text-center mt-0 lg:mt-4">
              {categoriaActiva ? categoriaActiva.nombre : "Catálogo de Productos"}
              {totalElements > 0 && (
                <span className="ml-2 text-sm font-normal text-gray-400">{totalElements} producto{totalElements !== 1 ? "s" : ""}</span>
              )}
            </h1>

            {errorMsg && (
              <div className="mb-6 p-5 rounded-xl border border-red-200 bg-red-50 text-center text-red-600 text-sm">
                {errorMsg}
              </div>
            )}

            {!errorMsg && productos.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-5xl mb-4">📦</p>
                <p className="text-lg font-bold text-gray-800 mb-2">Sin productos</p>
                <p className="text-gray-500 text-sm">
                  {categoriaActiva
                    ? "Esta categoría no tiene productos disponibles."
                    : "Categoría no encontrada."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {productos.map((p) => (
                  <ProductCard key={p.id} producto={p} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <PaginacionControles
                paginaActual={paginaActual}
                totalPages={totalPages}
                q=""
                categoriaId={categoriaActiva?.id ?? null}
                baseUrl={baseUrl}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
