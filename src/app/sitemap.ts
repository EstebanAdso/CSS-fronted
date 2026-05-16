import type { MetadataRoute } from "next";
import { getCategorias, getProductos } from "@/lib/api";
import { urlProducto, urlCategoria } from "@/lib/utils";

const BASE = "https://compuservicessoft.com";

// El sitemap se regenera cada 12 horas en Vercel.
// new Date() se captura en el momento de regeneración, no en cada crawl.
export const revalidate = 43200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ahora = new Date();

  /* Páginas estáticas */
  const estaticas: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: ahora, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/desarrollo-web`,          lastModified: ahora, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/catalogo`,                lastModified: ahora, changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/armar-pc-gamer`,          lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/desarrollo-web/diseno-web-personalizado`,       lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/desarrollo-web/seo-posicionamiento-web-pasto`,  lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/desarrollo-web/tienda-online-ecommerce`,        lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/desarrollo-web/landing-page`,                   lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/desarrollo-web/software-a-la-medida`,           lastModified: ahora, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/politicas`,               lastModified: ahora, changeFrequency: "monthly", priority: 0.4 },
  ];

  /* Páginas de categorías */
  let paginasCategorias: MetadataRoute.Sitemap = [];
  try {
    const categorias = await getCategorias();
    paginasCategorias = categorias.map((cat) => ({
      url: `${BASE}${urlCategoria(cat.nombre)}`,
      lastModified: ahora,
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));
  } catch {
    /* Si falla la API, el sitemap sigue funcionando sin categorías */
  }

  /* Páginas de productos — cargamos hasta 500 para el sitemap */
  let paginasProductos: MetadataRoute.Sitemap = [];
  try {
    const data = await getProductos(0, 500, "id,asc");
    paginasProductos = data.content.map((p) => ({
      url: `${BASE}${urlProducto(p.nombre, p.categoria.nombre)}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : ahora,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    /* Si falla la API, el sitemap sigue funcionando sin productos */
  }

  return [...estaticas, ...paginasCategorias, ...paginasProductos];
}
