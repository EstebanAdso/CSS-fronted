"use client";

import { useState } from "react";
import Link from "next/link";

const pasos = [
  {
    nombre: "Procesador (CPU)",
    slug: "procesador",
    emoji: "🧩",
    color: "var(--color-primary-light)",
    desc: "Punto de partida crucial. Tu elección del procesador determinará la compatibilidad de otros componentes. Elige según rendimiento, presupuesto y uso específico.",
    tip: "Intel o AMD — ambas son excelentes opciones según tu presupuesto.",
  },
  {
    nombre: "Tarjeta Madre",
    slug: "motherboard",
    emoji: "🔧",
    color: "var(--color-primary)",
    desc: "Selecciona la placa madre 100% compatible con tu procesador. Verifica el socket, chipset y características. La motherboard es el corazón de tu sistema.",
    tip: "Asegúrate que el socket coincida con tu CPU (AM5, LGA1700, etc.).",
  },
  {
    nombre: "Memoria RAM",
    slug: "ram",
    emoji: "🧠",
    color: "var(--color-accent)",
    desc: "Elige RAM compatible con tu placa madre. Presta atención a la velocidad, generación (DDR4/DDR5) y capacidad soportada. La RAM correcta optimiza el rendimiento.",
    tip: "Mínimo 16GB para gaming y trabajo profesional.",
  },
  {
    nombre: "Almacenamiento SSD/NVMe",
    slug: "ssd",
    emoji: "💾",
    color: "var(--color-active)",
    desc: "Si tu placa madre soporta NVMe, es la mejor opción para disco principal. Velocidades superiores al SSD tradicional. Si no, un SSD SATA sigue siendo excelente.",
    tip: "NVMe M.2 para el SO, SSD SATA para almacenamiento adicional.",
  },
  {
    nombre: "Tarjeta Gráfica",
    slug: "grafica",
    emoji: "🎮",
    color: "var(--color-accent-2)",
    desc: "Elige según tus necesidades gráficas. Verifica compatibilidad con la fuente de poder y placa madre. Las conexiones PCIe son fundamentales.",
    tip: "Para gaming 1080p: RTX 3060 o RX 6600 son excelentes opciones.",
  },
  {
    nombre: "Fuente de Poder",
    slug: "fuente-de-poder",
    emoji: "🔌",
    color: "#ffd700",
    desc: "Componente crítico y a menudo subestimado. Invierte en una fuente de calidad con suficiente potencia y conexiones para todos tus componentes.",
    tip: "Calcula el consumo total y añade 20% de margen. Certificación 80+ recomendada.",
  },
  {
    nombre: "Monitor",
    slug: "monitor",
    emoji: "🖥️",
    color: "var(--color-primary-lighter)",
    desc: "Elige según tu uso: resolución, tamaño y frecuencia de refresco. Para gaming: alta frecuencia. Para diseño: color y precisión IPS. Verifica conexiones HDMI/DisplayPort.",
    tip: "144Hz mínimo para gaming competitivo.",
  },
];

export default function ArmarCarrusel() {
  const [activo, setActivo] = useState(0);

  const anterior = () => setActivo((prev) => (prev === 0 ? pasos.length - 1 : prev - 1));
  const siguiente = () => setActivo((prev) => (prev === pasos.length - 1 ? 0 : prev + 1));

  const paso = pasos[activo];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

      <div className="container-site">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
            — Guía paso a paso —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Cómo{" "}
            <span className="text-primary">Armar tu PC</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Te guiamos en cada paso para que armes la máquina perfecta según tu presupuesto y necesidades.
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Panel izquierdo: info del paso */}
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden border border-gray-200 shadow-sm">
            {/* Número de paso */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-lg font-black"
              style={{
                background: `${paso.color}22`,
                border: `2px solid ${paso.color}66`,
                color: paso.color,
              }}>
              {activo + 1}
            </div>

            {/* Emoji grande */}
            <div className="text-6xl mb-6 animate-float">{paso.emoji}</div>

            {/* Nombre */}
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              {paso.nombre}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 leading-relaxed mb-6">{paso.desc}</p>

            {/* Tip */}
            <div className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: `${paso.color}15`, border: `1px solid ${paso.color}33` }}>
              <span className="text-lg">💡</span>
              <p className="text-sm font-medium" style={{ color: paso.color }}>{paso.tip}</p>
            </div>

            {/* Botón ir al catálogo */}
            <Link
              href={`/catalogo?categoria=${paso.slug}`}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-sm bg-primary hover:bg-primary-dark text-white transition-colors"
            >
              Ver {paso.nombre}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Panel derecho: lista de pasos + controles */}
          <div className="flex flex-col gap-4">
            {/* Lista de pasos */}
            <div className="flex flex-col gap-2">
              {pasos.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setActivo(i)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                    i === activo
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 bg-white hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 transition-all duration-300 ${
                    i === activo ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-lg shrink-0">{p.emoji}</span>
                  <span className={`font-semibold text-sm transition-colors duration-200 ${
                    i === activo ? "text-primary" : "text-gray-600"
                  }`}>
                    {p.nombre}
                  </span>
                  {i === activo && (
                    <svg className="w-4 h-4 text-primary ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Controles prev/next */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={anterior}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-primary-light/30 text-text-muted hover:border-primary-light hover:text-white hover:bg-bg-card/15 transition-all duration-200 font-semibold text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>
              <button
                onClick={siguiente}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl btn-gamer font-semibold text-sm"
              >
                Siguiente
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA armar PC */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--color-bg-card-dark), var(--color-bg-card), var(--color-bg-card-dark))" }}>
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 60%)",
            }} />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              ¿Listo para armar tu PC? 😎
            </h3>
            <p className="text-text-muted/80 mb-8 max-w-lg mx-auto">
              Usa nuestra herramienta de armado y elige las piezas disponibles en nuestro local en Pasto.
            </p>
            <Link
              href="/armar"
              className="btn-gamer inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base"
            >
              🔧 Armar mi computadora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
