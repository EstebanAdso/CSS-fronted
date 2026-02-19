import Link from "next/link";

const pasos = [
  { emoji: "🧩", label: "Procesador" },
  { emoji: "🔧", label: "Motherboard" },
  { emoji: "🧠", label: "RAM" },
  { emoji: "💾", label: "SSD / M.2" },
  { emoji: "🎮", label: "Gráfica" },
  { emoji: "🔌", label: "Fuente" },
];

export default function ArmarPCBanner() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #5c00a0 0%, #8c52ff 50%, #5c00a0 100%)" }}
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }} />
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
              <span className="text-white/90 underline decoration-white/30">armar tu PC?</span>
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Te ayudamos a elegir cada componente según tu presupuesto y necesidades.
              Sin complicaciones, sin gastar de más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/armar-pc-gamer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white hover:bg-gray-100 text-[#8c52ff] transition-colors"
              >
                🖥️ Armar mi PC
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Ver componentes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <span className="text-xs font-semibold text-white/80">{p.label}</span>
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
