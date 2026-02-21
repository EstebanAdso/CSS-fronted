import Link from "next/link";

const pasos = [
  {
    label: "Procesador",
    /* Lucide: cpu — chip cuadrado con pines */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 15h2M20 15h2M2 9h2M20 9h2" />
      </svg>
    ),
  },
  {
    label: "Motherboard",
    /* Lucide: circuit-board — placa con trazados y componentes */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M11 9h4a2 2 0 0 0 2-2V3" />
        <circle cx="9" cy="9" r="2" />
        <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
  },
  {
    label: "RAM",
    /* Módulo RAM: rectángulo horizontal con chips encima */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="9" rx="1" />
        <path d="M6 9V6M9 9V6M12 9V6M15 9V6M18 9V6" />
        <rect width="2" height="3" x="5" y="6" rx="0.5" />
        <rect width="2" height="3" x="8" y="6" rx="0.5" />
        <rect width="2" height="3" x="11" y="6" rx="0.5" />
        <rect width="2" height="3" x="14" y="6" rx="0.5" />
        <rect width="2" height="3" x="17" y="6" rx="0.5" />
      </svg>
    ),
  },
  {
    label: "SSD / M.2",
    /* Lucide: hard-drive — disco con brazo lector */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" x2="2" y1="12" y2="12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" x2="6.01" y1="16" y2="16" />
        <line x1="10" x2="10.01" y1="16" y2="16" />
      </svg>
    ),
  },
  {
    label: "Gráfica",
    /* Monitor con chip interno — representa GPU/tarjeta gráfica */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <rect width="6" height="4" x="9" y="7" rx="1" />
        <path d="M8 17v2M12 17v2M16 17v2M8 21h8" />
      </svg>
    ),
  },
  {
    label: "Fuente",
    /* Lucide: plug — enchufe de alimentación */
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8h-1.5a4.5 4.5 0 0 1-9 0H6" />
        <rect width="16" height="4" x="4" y="8" rx="1" />
        <path d="M12 17v-5" />
      </svg>
    ),
  },
];

export default function ArmarPCBanner() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%)",
      }}
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff, transparent)",
          }}
        />
      </div>

      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Texto izquierdo */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/60 mb-3">
              — Asesoría gratuita —
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              ¿Listo para{" "}
              <span className="text-white/90 underline decoration-white/30">
                armar tu PC en Pasto?
              </span>
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Te ayudamos a elegir cada componente según tu presupuesto y
              necesidades en Pasto, Nariño. Sin complicaciones, sin gastar de
              más. ¡Cotiza gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/armar-pc-gamer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white hover:bg-gray-100 text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 15h2M20 15h2M2 9h2M20 9h2" />
                </svg>
                Armar mi PC
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Ver componentes
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Componentes visuales derecha */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-3 gap-3">
              {pasos.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="text-white/90">{p.icon}</span>
                  <span className="text-xs font-semibold text-white/80">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Flecha conectora */}
            <p className="text-center text-white/40 text-xs mt-4 tracking-widest uppercase">
              + gabinete · disipador · periféricos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
