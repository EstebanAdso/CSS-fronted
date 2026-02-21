import { getCategorias, getProductosPorCategoria } from "@/lib/api";
import { slugify, urlCategoriaFiltro } from "@/lib/utils";
import FilaCarrusel from "@/components/FilaCarrusel";
import type { Producto } from "@/types";

const FILAS = [
  {
    slug: "ssd",
    titulo: "SSD",
    lema: "Pon veloz tu equipo con nuestros SSD — más rápido, más potente",
  },
  {
    slug: "procesador",
    titulo: "Procesadores",
    lema: "El cerebro de tu PC — rendimiento sin límites",
  },
  {
    slug: "m2",
    titulo: "M.2 NVMe",
    lema: "Velocidad extrema para los que no esperan",
  },
  {
    slug: "motherboard",
    titulo: "Motherboards",
    lema: "La base que lo conecta todo — elige bien",
  },
  {
    slug: "fuente-de-poder",
    titulo: "Fuentes de Poder",
    lema: "Energía estable para que nada falle",
  },
  {
    slug: "grafica",
    titulo: "Tarjetas Gráficas",
    lema: "Lleva tus gráficos al siguiente nivel",
  },
];

export default async function ProductosDestacados() {
  /* Una sola llamada a categorías, luego carga filas en paralelo */
  let categorias: Awaited<ReturnType<typeof getCategorias>> = [];
  try {
    categorias = await getCategorias();
  } catch {
    return null;
  }

  const resultados = await Promise.all(
    FILAS.map(async (fila) => {
      try {
        const cat = categorias.find((c) => slugify(c.nombre) === fila.slug);
        if (!cat) return null;
        const data = await getProductosPorCategoria(cat.id, 0, 12);
        if (!data.content.length) return null;
        return {
          ...fila,
          productos: data.content,
          urlVerTodos: urlCategoriaFiltro(cat.nombre),
        };
      } catch {
        return null;
      }
    }),
  );

  const filas = resultados.filter(Boolean) as Array<{
    slug: string;
    titulo: string;
    lema: string;
    productos: Producto[];
    urlVerTodos: string;
  }>;

  if (filas.length === 0) return null;

  return (
    <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="container-site">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-2">
            — Productos —
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            Lo más <span className="text-primary">Destacado</span> en Pasto
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3" />
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
