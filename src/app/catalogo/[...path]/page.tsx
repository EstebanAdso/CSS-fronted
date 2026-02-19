import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategorias, getProductosPorCategoria, resolverImagen } from "@/lib/api";
import { slugify, urlProducto, urlCategoria } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCard from "@/components/ProductCard";
import WhatsAppSelector from "@/components/WhatsAppSelector";
import type { Producto, Categoria } from "@/types";

type Props = { params: Promise<{ path: string[] }> };

function formatPrecio(valor: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor);
}

/* Busca la categoría por slug */
async function resolverCategoria(catSlug: string): Promise<Categoria | null> {
  try {
    const categorias = await getCategorias();
    return categorias.find((c) => slugify(c.nombre) === catSlug) ?? null;
  } catch {
    return null;
  }
}

/* Busca el producto por slug dentro de la categoría */
async function resolverProducto(
  catSlug: string,
  prodSlug: string
): Promise<{ producto: Producto; categoria: Categoria } | null> {
  const categoria = await resolverCategoria(catSlug);
  if (!categoria) return null;

  try {
    const data = await getProductosPorCategoria(categoria.id, 0, 500);
    const producto = data.content.find((p) => slugify(p.nombre) === prodSlug);
    if (!producto) return null;
    return { producto, categoria };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;

  /* Solo manejamos el caso de 2 segmentos: [categoria, slug-producto] */
  if (path.length !== 2) return { title: "CompuServicesSoft" };

  const [catSlug, prodSlug] = path;
  const resultado = await resolverProducto(catSlug, prodSlug);
  if (!resultado) return { title: "Producto no encontrado | CompuServicesSoft" };

  const { producto } = resultado;
  const titulo = `${producto.nombre} — ${producto.categoria.nombre} en Pasto | CompuServicesSoft`;
  const descripcion = `Compra ${producto.nombre} en Pasto, Nariño al mejor precio. ${producto.descripcion ?? ""} Disponible en CompuServicesSoft, CC San Agustín Local 224A. ¡Pregunta por WhatsApp!`.trim();
  const imagen = resolverImagen(producto.imagen);
  const canonicalUrl = `https://compuservicessoft.com${urlProducto(producto.nombre, producto.categoria.nombre)}`;

  return {
    title: titulo,
    description: descripcion,
    keywords: [
      producto.nombre,
      `${producto.nombre} Pasto`,
      `${producto.nombre} Nariño`,
      `${producto.nombre} precio`,
      `comprar ${producto.nombre} Pasto`,
      producto.categoria.nombre,
      `${producto.categoria.nombre} Pasto`,
      `${producto.categoria.nombre} Nariño`,
      "CompuServicesSoft",
      "tienda tecnología Pasto",
      "CC San Agustín Pasto",
    ],
    openGraph: {
      title: titulo,
      description: descripcion,
      url: canonicalUrl,
      type: "website",
      images: [{ url: imagen, width: 800, height: 800, alt: `${producto.nombre} — CompuServicesSoft Pasto` }],
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function CatalogoPathPage({ params }: Props) {
  const { path } = await params;

  /* Solo manejamos 2 segmentos: /catalogo/[categoria]/[slug-producto] */
  if (path.length !== 2) notFound();

  const [catSlug, prodSlug] = path;
  const resultado = await resolverProducto(catSlug, prodSlug);
  if (!resultado) notFound();

  const { producto } = resultado;
  const disponible = producto.estado === "activo" || producto.estado === "disponible";
  const imagenSrc = resolverImagen(producto.imagen);
  const urlCat = urlCategoria(producto.categoria.nombre);

  let relacionados: Producto[] = [];
  try {
    const data = await getProductosPorCategoria(producto.categoria.id, 0, 5);
    relacionados = data.content.filter((p) => p.id !== producto.id).slice(0, 4);
  } catch {
    relacionados = [];
  }

  const msgWsp = encodeURIComponent(
    `Hola, vengo de la página CompuServicesSoft. Me interesa: ${producto.nombre}. ¿Está disponible?`
  );

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar tema="claro" />

      {/* Breadcrumb */}
      <div className="pt-20 pb-0 px-4 sm:px-6 lg:px-8 container-site border-b border-gray-100">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 py-3 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link>
          <span>/</span>
          <Link href={urlCat} className="hover:text-primary transition-colors">
            {producto.categoria.nombre}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{producto.nombre}</span>
        </nav>
      </div>

      {/* Detalle */}
      <section className="px-4 sm:px-6 lg:px-8 py-2 container-site flex-1">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Imagen */}
          <div className="rounded-2xl overflow-hidden relative aspect-square bg-gray-50 border border-gray-200">
            <Image
              src={imagenSrc}
              alt={`${producto.nombre} — ${producto.categoria.nombre} en Pasto, Nariño`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              loading="eager"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <Link href={urlCat}
              className="inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors">
              ← {producto.categoria.nombre}
            </Link>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {producto.nombre}
            </h1>

            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-dark">
                {formatPrecio(producto.precioVendido)}
              </span>
              <span className="text-sm text-gray-400 mb-1">COP</span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${disponible ? "bg-green-500" : "bg-red-400"}`} />
              <span className={`text-sm font-medium ${disponible ? "text-green-600" : "text-red-500"}`}>
                {disponible ? `Disponible — ${producto.cantidad} en stock` : "Agotado"}
              </span>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Descripción</p>
              <p className="text-gray-700 leading-relaxed text-sm">{producto.descripcion}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Categoría", value: producto.categoria.nombre },
                { label: "Stock", value: `${producto.cantidad} unidades` },
                { label: "Ubicación", value: "Pasto, Nariño" },
                { label: "Horario", value: "10am – 7pm" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            {producto.categoria.descripcionGarantia && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                <span className="text-xl">🛡️</span>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1">Garantía</p>
                  <p className="text-xs text-green-600">{producto.categoria.descripcionGarantia}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <WhatsAppSelector
                mensaje={msgWsp}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold flex-1 bg-whatsapp hover:bg-whatsapp-hover text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Preguntar por WhatsApp
              </WhatsAppSelector>
            </div>

            <p className="text-xs text-gray-400">
              📍 CC San Agustín, Local 224A — Pasto, Nariño &nbsp;·&nbsp; 🕙 10am – 7pm
            </p>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 container-site">
          <div className="border-t border-gray-100 pt-10">
            <h2 className="text-xl font-black text-gray-900 mb-6">
              Más en <span className="text-primary">{producto.categoria.nombre}</span>
            </h2>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 gap-4">
              {relacionados.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
