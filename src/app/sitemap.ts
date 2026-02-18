import type { MetadataRoute } from "next";
import { getCategorias, getProductos } from "@/lib/api";
import { urlProducto, urlCategoria } from "@/lib/utils";

const BASE = "https://compuservicessoft.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ahora = new Date();

  /* Páginas estáticas */
  const estaticas: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: ahora, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/catalogo`, lastModified: ahora, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/catalogo/categorias`, lastModified: ahora, changeFrequency: "weekly", priority: 0.8 },
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
      lastModified: ahora,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    /* Si falla la API, el sitemap sigue funcionando sin productos */
  }

  return [...estaticas, ...paginasCategorias, ...paginasProductos];
}
