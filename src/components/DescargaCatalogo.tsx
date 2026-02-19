"use client";

import { useState } from "react";

export default function DescargaCatalogo() {
  const [cargando, setCargando] = useState(false);

  function handleDescargar() {
    setCargando(true);
    /* Abre en nueva pestaña — el navegador muestra el diálogo de impresión/guardar PDF */
    window.open("/api/catalogo-pdf", "_blank");
    setTimeout(() => setCargando(false), 2000);
  }

  return (
    <button
      onClick={handleDescargar}
      disabled={cargando}
      className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border-2 border-[#8c52ff] text-[#8c52ff] hover:bg-[#8c52ff] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {cargando ? (
        <>
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Generando…
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Descargar catálogo PDF
        </>
      )}
    </button>
  );
}
