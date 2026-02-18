"use client";

import Link from "next/link";

type Props = {
  paginaActual: number;
  totalPages: number;
  q: string;
  categoriaId: number | null;
  /* URL base para páginas de categoría (ej: /catalogo/categorias/ssd)
     Si no se pasa, usa /catalogo con query params */
  baseUrl?: string;
};

function buildUrl(
  page: number,
  q: string,
  categoriaId: number | null,
  baseUrl?: string
): string {
  if (baseUrl) {
    return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
  }
  const sp = new URLSearchParams();
  if (q) sp.set("q", q);
  if (categoriaId) sp.set("categoriaId", String(categoriaId));
  sp.set("page", String(page));
  return `/catalogo?${sp.toString()}`;
}

export default function PaginacionControles({
  paginaActual,
  totalPages,
  q,
  categoriaId,
  baseUrl,
}: Props) {
  /* Genera el rango de páginas a mostrar (máx 5 botones) */
  const rango: number[] = [];
  const inicio = Math.max(1, paginaActual - 2);
  const fin = Math.min(totalPages, paginaActual + 2);
  for (let i = inicio; i <= fin; i++) rango.push(i);

  const btnBase =
    "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold border transition-all duration-200";
  const btnActivo = "bg-[#8c52ff] border-[#8c52ff] text-white";
  const btnInactivo =
    "border-gray-200 text-gray-600 hover:border-[#8c52ff]/40 hover:text-[#8c52ff] bg-white";
  const btnDisabled =
    "border-gray-100 text-gray-300 cursor-not-allowed bg-white";

  return (
    <nav
      aria-label="Paginación del catálogo"
      className="flex items-center justify-center gap-2 mt-12"
    >
      {/* Anterior */}
      {paginaActual > 1 ? (
        <Link
          href={buildUrl(paginaActual - 1, q, categoriaId, baseUrl)}
          className={`${btnBase} ${btnInactivo}`}
          aria-label="Página anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      )}

      {/* Primera página si no está en el rango */}
      {inicio > 1 && (
        <>
          <Link href={buildUrl(1, q, categoriaId, baseUrl)} className={`${btnBase} ${btnInactivo}`}>1</Link>
          {inicio > 2 && <span className="text-[#d89fff]/40 px-1">…</span>}
        </>
      )}

      {/* Rango de páginas */}
      {rango.map((p) => (
        <Link
          key={p}
          href={buildUrl(p, q, categoriaId, baseUrl)}
          className={`${btnBase} ${p === paginaActual ? btnActivo : btnInactivo}`}
          aria-current={p === paginaActual ? "page" : undefined}
        >
          {p}
        </Link>
      ))}

      {/* Última página si no está en el rango */}
      {fin < totalPages && (
        <>
          {fin < totalPages - 1 && <span className="text-[#d89fff]/40 px-1">…</span>}
          <Link href={buildUrl(totalPages, q, categoriaId, baseUrl)} className={`${btnBase} ${btnInactivo}`}>
            {totalPages}
          </Link>
        </>
      )}

      {/* Siguiente */}
      {paginaActual < totalPages ? (
        <Link
          href={buildUrl(paginaActual + 1, q, categoriaId, baseUrl)}
          className={`${btnBase} ${btnInactivo}`}
          aria-label="Página siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </nav>
  );
}
