"use client";

import WhatsAppSelector from "@/components/WhatsAppSelector";

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const servicios = [
  {
    icon: <WrenchIcon />,
    titulo: "Servicio Técnico",
    color: "var(--color-primary)",
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
    icon: <UserCheckIcon />,
    titulo: "Asesorías Personalizadas",
    color: "var(--color-primary)",
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
    icon: <MonitorIcon />,
    titulo: "Venta de Componentes",
    color: "var(--color-primary)",
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
      <div className="container-site">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
            — Lo que hacemos —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nuestros{" "}
            <span className="text-primary">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
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
              {/* Icono + Título */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: `${srv.color}18`,
                    border: `1px solid ${srv.color}44`,
                    color: srv.color,
                  }}
                >
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    {srv.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">{srv.desc}</p>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
