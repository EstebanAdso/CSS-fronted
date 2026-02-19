import Link from "next/link";
import Image from "next/image";
import { urlCategoria } from "@/lib/utils";

/* Los nombres deben coincidir exactamente con los de la BD para que el slug funcione */
const categorias = [
  { nombre: "SSD", img: "/imagenes/categorias/IASSD.webp", desc: "Almacenamiento rápido y confiable con memoria flash." },
  { nombre: "M.2 NVMe", img: "/imagenes/categorias/nvme.jpg", desc: "Velocidades extremas para laptops y PCs de alto rendimiento." },
  { nombre: "Monitor", img: "/imagenes/categorias/IAMONITOR.webp", desc: "LED, LCD y OLED en distintos tamaños y resoluciones." },
  { nombre: "RAM", img: "/imagenes/categorias/IARAM.webp", desc: "Memoria DDR4/DDR5 para máximo rendimiento multitarea." },
  { nombre: "Fuente de Poder", img: "/imagenes/categorias/IAFUENTE.webp", desc: "Convierte AC a DC con estabilidad y seguridad." },
  { nombre: "Computadores", img: "/imagenes/categorias/computador.jpg", desc: "Equipos completos de escritorio y portátiles." },
  { nombre: "Tarjeta Gráfica", img: "/imagenes/categorias/IAGRAFICA.webp", desc: "GPUs para gaming, diseño y edición de video." },
  { nombre: "Mouse", img: "/imagenes/categorias/mouseC.jfif", desc: "Control preciso para trabajo y gaming." },
  { nombre: "Teclado", img: "/imagenes/categorias/tecladoC.jpg", desc: "Mecánicos y de membrana para todo uso." },
  { nombre: "Controles y Juegos", img: "/imagenes/categorias/control.jfif", desc: "Gamepads y accesorios para consolas y PC." },
  { nombre: "Base Refrigerante", img: "/imagenes/categorias/baserefrigerante.jfif", desc: "Evita el sobrecalentamiento de tu portátil." },
  { nombre: "Motherboard", img: "/imagenes/categorias/IABOARD.webp", desc: "Placa base que conecta todos los componentes." },
  { nombre: "Procesador", img: "/imagenes/categorias/IAPROCESADOR.webp", desc: "CPU: el cerebro de tu computadora." },
  { nombre: "Disipador", img: "/imagenes/categorias/disipador.jpeg", desc: "Reduce el calor de CPU y GPU eficientemente." },
  { nombre: "Reguladores y UPS", img: "/imagenes/categorias/fuente%20de%20poder%202.png", desc: "Protege tus equipos de cortes y variaciones eléctricas." },
];

export default function CategoriasSection() {
  return (
    <section id="categorias" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-site">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
            — Catálogo —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Categorías{" "}
            <span className="text-primary">Destacadas</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Todo lo que necesitas para tu PC en un solo lugar. Disponible en nuestro local en Pasto, Nariño.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categorias.map((cat) => (
            <Link
              key={cat.nombre}
              href={urlCategoria(cat.nombre)}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-video bg-gray-50 overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors duration-200">
                  {cat.nombre}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
                <span className="text-xs text-primary font-semibold flex items-center gap-1 mt-1">
                  Ver productos
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA ver todo */}
        <div className="text-center mt-12">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-primary hover:bg-primary-dark text-white transition-colors"
          >
            Ver catálogo completo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
