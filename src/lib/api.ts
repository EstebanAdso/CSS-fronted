import type { Categoria, Producto, PaginatedResponse } from "@/types";

/* URL base de la API — cambiar en .env.local para producción:
   NEXT_PUBLIC_API_URL=https://tu-servidor.com */
const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8084";

/* Normaliza la ruta de imagen del backend (viene como ../imagenes/products/...)
   y la convierte en una ruta absoluta desde /public */
export function resolverImagen(rutaBackend: string): string {
  if (!rutaBackend) return "/imagenes/placeholder.png";
  /* Elimina los ../ iniciales y deja la ruta desde imagenes/ */
  const limpia = rutaBackend.replace(/^(\.\.\/)+/, "");
  return `/${limpia}`;
}

/* ─── PRODUCTOS ─────────────────────────────────────────────────────────── */

export async function getProductos(
  page = 0,
  size = 12,
  sort = "nombre,asc"
): Promise<PaginatedResponse<Producto>> {
  const res = await fetch(
    `${BASE_URL}/api/products?page=${page}&size=${size}&sort=${sort}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function getProductoPorId(id: number): Promise<Producto> {
  const res = await fetch(`${BASE_URL}/api/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Producto ${id} no encontrado`);
  return res.json();
}

export async function buscarProductos(
  q: string,
  page = 0,
  size = 12
): Promise<PaginatedResponse<Producto>> {
  const res = await fetch(
    `${BASE_URL}/api/products/search?q=${encodeURIComponent(q)}&page=${page}&size=${size}`,
    { next: { revalidate: 30 } }
  );
  if (!res.ok) throw new Error("Error en la búsqueda");
  return res.json();
}

/* ─── CATEGORÍAS ─────────────────────────────────────────────────────────── */

export async function getCategorias(): Promise<Categoria[]> {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error("Error al obtener categorías");
  return res.json();
}

export async function getCategoriaPorId(id: number): Promise<Categoria> {
  const res = await fetch(`${BASE_URL}/api/categories/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Categoría ${id} no encontrada`);
  return res.json();
}

export async function getProductosPorCategoria(
  categoriaId: number,
  page = 0,
  size = 12
): Promise<PaginatedResponse<Producto>> {
  const res = await fetch(
    `${BASE_URL}/api/categories/${categoriaId}/products?page=${page}&size=${size}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Error al obtener productos de la categoría");
  return res.json();
}
