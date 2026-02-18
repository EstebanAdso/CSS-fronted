"use client";

import WhatsAppSelector from "@/components/WhatsAppSelector";

const servicios = [
  {
    emoji: "🔧",
    titulo: "Servicio Técnico",
    color: "#8c52ff",
    items: [
      "Reparación de computadoras y celulares",
      "Cambio de glass y display",
      "Instalación de sistemas operativos",
      "Optimización de software",
      "Mantenimiento preventivo y correctivo",
      "Instalación de aplicaciones",
    ],
    desc: "Soluciones rápidas y efectivas para que tus equipos funcionen como nuevos.",
  },
  {
    emoji: "🎯",
    titulo: "Asesorías Personalizadas",
    color: "#8c52ff",
    items: [
      "Asesoría para compra de componentes",
      "Selección según presupuesto",
      "Recomendación de periféricos",
      "Guía para armar tu PC",
      "Comparativa de productos",
      "Soporte post-venta",
    ],
    desc: "Te guiamos para encontrar la mejor opción según tu presupuesto y necesidades.",
  },
  {
    emoji: "🛒",
    titulo: "Venta de Componentes",
    color: "#8c52ff",
    items: [
      "SSD y NVMe de última generación",
      "Memorias RAM DDR4/DDR5",
      "Tarjetas gráficas (GPU)",
      "Teclados y mouse gaming",
      "Fuentes de poder certificadas",
      "Procesadores y motherboards",
    ],
    desc: "Todo lo que necesitas para tu computadora, en un solo lugar en Pasto.",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1624px] mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8c52ff] mb-3">
            — Lo que hacemos —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nuestros{" "}
            <span className="text-[#8c52ff]">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-[#8c52ff] rounded-full mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Más que una tienda — somos tu aliado tecnológico en Pasto, Nariño.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((srv) => (
            <div
              key={srv.titulo}
              className="bg-white rounded-3xl p-8 flex flex-col gap-6 group border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              {/* Icono */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300"
                style={{
                  background: `${srv.color}18`,
                  border: `1px solid ${srv.color}44`,
                  boxShadow: `0 0 0 0 ${srv.color}`,
                }}
              >
                {srv.emoji}
              </div>

              {/* Título */}
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                  {srv.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{srv.desc}</p>
              </div>

              {/* Lista de items */}
              <ul className="flex flex-col gap-2 flex-1">
                {srv.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: srv.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Línea decorativa inferior */}
              <div
                className="h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${srv.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* CTA contacto */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-lg">
            ¿Necesitas ayuda con tu equipo? Contáctanos ahora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppSelector
              mensaje="Hola%20vengo%20de%20la%20p%C3%A1gina%20CompuServicesSoft,%20necesito%20servicio%20t%C3%A9cnico"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-gray-900 hover:bg-gray-700 text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Servicio Técnico
            </WhatsAppSelector>
            <a
              href="tel:+573174034349"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
