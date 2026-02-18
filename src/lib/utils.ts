/* Convierte un texto en slug SEO-friendly
   Ej: "SSD 256GB Patriot" → "ssd-256gb-patriot"
   Ej: "Tarjeta Gráfica" → "tarjeta-grafica" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") /* elimina tildes */
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

/* Construye la URL de un producto: /catalogo/{categoria}/{slug-nombre}
   Ej: /catalogo/ssd/ssd-240gb-patriot */
export function urlProducto(nombreProducto: string, nombreCategoria: string): string {
  return `/catalogo/${slugify(nombreCategoria)}/${slugify(nombreProducto)}`;
}

/* URL de categoría: /catalogo/categoria/ssd */
export function urlCategoria(nombre: string): string {
  return `/catalogo/categoria/${slugify(nombre)}`;
}

/* URL de categoría para el filtro del sidebar: /catalogo/categoria/ssd
   Usa singular "categoria" para diferenciarse de la página SEO "categorias" */
export function urlCategoriaFiltro(nombre: string): string {
  return `/catalogo/categoria/${slugify(nombre)}`;
}

/* URL de búsqueda SEO-friendly: /catalogo/buscar/ssd-240gb */
export function urlBusqueda(termino: string): string {
  return `/catalogo/buscar/${slugify(termino)}`;
}

