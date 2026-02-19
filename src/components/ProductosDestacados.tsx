import { getCategorias, getProductosPorCategoria } from "@/lib/api";
import { slugify, urlCategoriaFiltro } from "@/lib/utils";
import FilaCarrusel from "@/components/FilaCarrusel";
import type { Producto } from "@/types";

const FILAS = [
  { slug: "ssd",             titulo: "SSD",               lema: "Pon veloz tu equipo con nuestros SSD — más rápido, más potente" },
  { slug: "procesador",      titulo: "Procesadores",      lema: "El cerebro de tu PC — rendimiento sin límites" },
  { slug: "m2",              titulo: "M.2 NVMe",          lema: "Velocidad extrema para los que no esperan" },
  { slug: "motherboard",     titulo: "Motherboards",      lema: "La base que lo conecta todo — elige bien" },
  { slug: "fuente-de-poder", titulo: "Fuentes de Poder",  lema: "Energía estable para que nada falle" },
  { slug: "grafica",         titulo: "Tarjetas Gráficas", lema: "Lleva tus gráficos al siguiente nivel" },
];

async function cargarFila(slug: string): Promise<{ productos: Producto[]; urlVerTodos: string } | null> {
  try {
    const categorias = await getCategorias();
    const cat = categorias.find((c) => slugify(c.nombre) === slug);
    if (!cat) return null;
    const data = await getProductosPorCategoria(cat.id, 0, 12);
    if (!data.content.length) return null;
    return { productos: data.content, urlVerTodos: urlCategoriaFiltro(cat.nombre) };
  } catch {
    return null;
  }
}

export default async function ProductosDestacados() {
  /* Carga todas las filas en paralelo */
  const resultados = await Promise.all(
    FILAS.map(async (fila) => {
      const data = await cargarFila(fila.slug);
      return data ? { ...fila, ...data } : null;
    })
  );

  const filas = resultados.filter(Boolean) as Array<{
    slug: string; titulo: string; lema: string;
    productos: Producto[]; urlVerTodos: string;
  }>;

  if (filas.length === 0) return null;

  return (
    <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="container-site">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8c52ff] mb-2">
            — Productos —
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            Lo más <span className="text-[#8c52ff]">Destacado</span>
          </h2>
          <div className="w-12 h-1 bg-[#8c52ff] rounded-full mt-3" />
        </div>

        {filas.map((fila) => (
          <FilaCarrusel
            key={fila.slug}
            titulo={fila.titulo}
            lema={fila.lema}
            productos={fila.productos}
            urlVerTodos={fila.urlVerTodos}
          />
        ))}
      </div>
    </section>
  );
}
