"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { urlCategoria } from "@/lib/utils";

const categorias = [
  { nombre: "SSD",                img: "/imagenes/categorias/IASSD.webp" },
  { nombre: "M2",                 img: "/imagenes/categorias/nvme.jpg" },
  { nombre: "MONITOR",            img: "/imagenes/categorias/IAMONITOR.webp" },
  { nombre: "RAM",                img: "/imagenes/categorias/IARAM.webp" },
  { nombre: "FUENTE DE PODER",    img: "/imagenes/categorias/IAFUENTE.webp" },
  { nombre: "COMPUTADOR",         img: "/imagenes/categorias/computador.jpg" },
  { nombre: "GRAFICA",            img: "/imagenes/categorias/IAGRAFICA.webp" },
  { nombre: "MOUSE",              img: "/imagenes/categorias/mouseC.jfif" },
  { nombre: "TECLADO",            img: "/imagenes/categorias/tecladoC.jpg" },
  { nombre: "CONTROLES Y JUEGOS", img: "/imagenes/categorias/control.jfif" },
  { nombre: "BASE REFRIGERANTE",  img: "/imagenes/categorias/baserefrigerante.jfif" },
  { nombre: "MOTHERBOARD",        img: "/imagenes/categorias/IABOARD.webp" },
  { nombre: "PROCESADOR",         img: "/imagenes/categorias/IAPROCESADOR.webp" },
  { nombre: "DISIPADOR",          img: "/imagenes/categorias/disipador.jpeg" },
  { nombre: "REGULADOR",          img: "/imagenes/categorias/fuente%20de%20poder%202.png" },
];

/* Nombre visible más amigable para mostrar en la card */
const NOMBRE_DISPLAY: Record<string, string> = {
  "SSD": "SSD",
  "M2": "M.2 NVMe",
  "MONITOR": "Monitor",
  "RAM": "RAM",
  "FUENTE DE PODER": "Fuente de Poder",
  "COMPUTADOR": "Computadores",
  "GRAFICA": "Tarjeta Gráfica",
  "MOUSE": "Mouse",
  "TECLADO": "Teclado",
  "CONTROLES Y JUEGOS": "Controles y Juegos",
  "BASE REFRIGERANTE": "Base Refrigerante",
  "MOTHERBOARD": "Motherboard",
  "PROCESADOR": "Procesador",
  "DISIPADOR": "Disipador",
  "REGULADOR": "Reguladores y UPS",
};

export default function CategoriasCarrusel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const ancho = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === "right" ? ancho : -ancho, behavior: "smooth" });
  }

  return (
    <section id="categorias" className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100/80">
      <div className="max-w-[1624px] mx-auto">

        {/* Encabezado */}
        <div className="flex items-end justify-between mb-1 px-1">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8c52ff] mb-1">
              — Catálogo —
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              Categorías <span className="text-[#8c52ff]">Destacadas</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 ml-4 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-gray-400 hover:text-gray-800 text-gray-500 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-gray-400 hover:text-gray-800 text-gray-500 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <Link
              href="/catalogo"
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-1"
            >
              Ver todas
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divisor */}
        <div className="w-full h-px bg-gray-100 mb-4" />

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory" }}
        >
          {categorias.map((cat) => (
            <Link
              key={cat.nombre}
              href={urlCategoria(cat.nombre)}
              className="group shrink-0 w-[calc(50%-6px)] sm:w-80 flex flex-col rounded-2xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-200 overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative w-full aspect-4/3 bg-gray-50 overflow-hidden">
                <Image
                  src={cat.img}
                  alt={NOMBRE_DISPLAY[cat.nombre] ?? cat.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="288px"
                />
              </div>
              <div className="p-3 flex items-center justify-between">
                <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-gray-900 transition-colors">
                  {NOMBRE_DISPLAY[cat.nombre] ?? cat.nombre}
                </p>
                <svg className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
