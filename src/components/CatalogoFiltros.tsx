"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import type { Categoria } from "@/types";
import { urlCategoriaFiltro, urlBusqueda } from "@/lib/utils";

type Props = {
  categorias: Categoria[];
  categoriaActivaId: number | null;
  busquedaActual: string;
  totalElements: number;
};

export default function CatalogoFiltros({
  categorias,
  categoriaActivaId,
  busquedaActual,
  totalElements,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [busqueda, setBusqueda] = useState(busquedaActual);

  function handleBuscar(e: React.FormEvent) {
    e.preventDefault();
    const termino = busqueda.trim();
    startTransition(() => {
      router.push(termino ? urlBusqueda(termino) : "/catalogo");
    });
  }

  function handleCategoria(cat: Categoria | null) {
    setBusqueda("");
    startTransition(() => {
      router.push(cat ? urlCategoriaFiltro(cat.nombre) : "/catalogo");
    });
  }

  const hayFiltro = !!(busquedaActual || categoriaActivaId);

  return (
    <div className="w-full lg:w-52 lg:shrink-0">
      {/* ── SIDEBAR desktop (≥ lg) ── */}
      <aside className="hidden lg:flex flex-col gap-1 self-start sticky top-24">

        {/* Búsqueda */}
        <form onSubmit={handleBuscar} className="mb-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>
          <button type="submit" disabled={isPending}
            className="mt-2 w-full py-2 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-colors disabled:opacity-50">
            {isPending ? "Buscando..." : "Buscar"}
          </button>
        </form>

        {/* Título categorías */}
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">
          Categorías
        </p>

        {/* Lista */}
        <button
          onClick={() => handleCategoria(null)}
          className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            !categoriaActivaId && !busquedaActual
              ? "bg-primary/10 text-primary border-l-2 border-primary font-semibold"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Todos
          {!categoriaActivaId && !busquedaActual && totalElements > 0 && (
            <span className="ml-1 text-xs text-gray-400">({totalElements})</span>
          )}
        </button>

        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoria(cat)}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              categoriaActivaId === cat.id
                ? "bg-primary/10 text-primary border-l-2 border-primary font-semibold"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {cat.nombre}
          </button>
        ))}

        {/* Limpiar filtro */}
        {hayFiltro && (
          <button
            onClick={() => { setBusqueda(""); handleCategoria(null); }}
            className="mt-3 text-xs text-gray-400 hover:text-primary transition-colors text-left px-3"
          >
            ✕ Limpiar filtro
          </button>
        )}
      </aside>

      {/* ── MOBILE fixed: búsqueda + chips pegados bajo el Navbar (< lg) ── */}
      <div className="lg:hidden fixed left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex flex-col gap-2" style={{ top: "64px" }}>

        {/* Búsqueda mobile */}
        <form onSubmit={handleBuscar} className="flex gap-2">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar producto..."
              className="w-full pl-9 pr-3 py-2 rounded-lg text-sm bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <button type="submit" disabled={isPending}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-900 hover:bg-gray-700 text-white transition-colors shrink-0 disabled:opacity-50">
            {isPending ? "..." : "Buscar"}
          </button>
        </form>

        {/* Chips scrollables horizontalmente con el dedo */}
        <div className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <button
            onClick={() => handleCategoria(null)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              !categoriaActivaId && !busquedaActual
                ? "bg-gray-900 border-gray-900 text-white"
                : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 bg-white"
            }`}
          >
            Todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoria(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                categoriaActivaId === cat.id
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 bg-white"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
