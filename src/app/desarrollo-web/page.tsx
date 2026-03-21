import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

/* ─── Íconos inline ────────────────────────────────────────────────── */
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const StoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
  </svg>
);
const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Datos de servicios ────────────────────────────────────────────── */
const servicios = [
  {
    icon: <RocketIcon />,
    titulo: "Landing Page",
    precio: "Desde $500.000 COP",
    items: [
      "Diseño moderno y atractivo",
      "Optimizada para conversión",
      "SEO básico incluido",
      "Formulario de contacto",
      "Adaptable a celular y PC",
      "Entrega en 5–7 días hábiles",
    ],
    desc: "Ideal para lanzar productos, servicios o campañas. Convierte visitantes en clientes.",
    popular: false,
  },
  {
    icon: <CodeIcon />,
    titulo: "Página Empresarial",
    precio: "Desde $1.200.000 COP",
    items: [
      "Múltiples secciones y páginas",
      "Diseño personalizado con tu marca",
      "SEO avanzado para Pasto",
      "Blog o noticias (opcional)",
      "Panel de administración",
      "Entrega en 2–3 semanas",
    ],
    desc: "Presencia digital profesional para tu empresa o negocio en Pasto y todo el país.",
    popular: true,
  },
  {
    icon: <StoreIcon />,
    titulo: "Tienda Online — E-commerce",
    precio: "Desde $2.000.000 COP",
    items: [
      "Catálogo de productos",
      "Carrito y pasarela de pago",
      "Panel de gestión de pedidos",
      "SEO optimizado por categorías",
      "Integración redes sociales",
      "Entrega en 3–5 semanas",
    ],
    desc: "Vende tus productos 24/7 en todo Colombia. Tu vitrina online lista para generar ventas.",
    popular: false,
  },
  {
    icon: <GearIcon />,
    titulo: "Software a la Medida",
    precio: "Cotización personalizada",
    items: [
      "Análisis de requerimientos",
      "Desarrollo personalizado",
      "Sistemas de gestión (ERP/CRM)",
      "Aplicaciones web internas",
      "Integraciones con APIs",
      "Soporte y mantenimiento",
    ],
    desc: "Soluciones digitales únicas para automatizar procesos y hacer crecer tu negocio en Pasto.",
    popular: false,
  },
];

/* ─── Por qué elegirnos ─────────────────────────────────────────────── */
const ventajas = [
  {
    emoji: "🎨",
    titulo: "Diseño Moderno",
    desc: "Interfaces atractivas, animadas y adaptadas a cualquier dispositivo. Tu web se verá increíble en celular, tablet y PC.",
  },
  {
    emoji: "🔍",
    titulo: "SEO Incluido",
    desc: "Optimización para aparecer en Google cuando busquen tus servicios en Pasto y Nariño. Más visibilidad = más clientes.",
  },
  {
    emoji: "⚡",
    titulo: "Entrega Rápida",
    desc: "Cumplimos los tiempos de entrega. Sin excusas. Tu proyecto en producción lo antes posible.",
  },
  {
    emoji: "📍",
    titulo: "Soporte Local en Pasto",
    desc: "Estamos en Pasto. Puedes visitarnos en el CC San Agustín o contactarnos por WhatsApp cuando necesites ayuda.",
  },
];

/* ─── Proceso de trabajo ────────────────────────────────────────────── */
const pasos = [
  { num: "01", titulo: "Tu Idea", desc: "Cuéntanos qué necesitas. Hacemos una reunión (presencial o virtual) para entender tu proyecto y objetivos." },
  { num: "02", titulo: "Diseño", desc: "Creamos el diseño visual segun tu marca y lo que necesites utilizando los colores y diseño que mas te guste." },
  { num: "03", titulo: "Desarrollo", desc: "Construimos tu web con tecnologías modernas: rápida, segura y lista para Google." },
  { num: "04", titulo: "Entrega", desc: "Publicamos tu página web, te entregamos accesos y te capacitamos para administrarla." },
];

/* ─── FAQ ───────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Pasto?",
    a: "Depende del tipo de proyecto. Una landing page desde $500.000 COP, una página empresarial desde $1.200.000 COP y una tienda online desde $2.000.000 COP. Escríbenos por WhatsApp para una cotización personalizada sin costo.",
  },
  {
    q: "¿Cuánto tiempo tardan en entregar una página web?",
    a: "Una landing page en 5–7 días hábiles, una página empresarial en 2–3 semanas y un e-commerce en 3–5 semanas. Respetamos los tiempos acordados.",
  },
  {
    q: "¿La página web incluye posicionamiento SEO para Pasto?",
    a: "Sí. Todos los proyectos incluyen SEO básico: meta etiquetas, estructura semántica, velocidad optimizada y configuración de Google Search Console para que aparezcas en búsquedas locales de Pasto y Nariño.",
  },
  {
    q: "¿Qué necesito para comenzar?",
    a: "Solo tu idea y algo de información sobre tu negocio. Nosotros nos encargamos del diseño, desarrollo, dominio y hosting. No necesitas conocimientos técnicos.",
  },
  {
    q: "¿Ofrecen mantenimiento y soporte después de entregar la página?",
    a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de contenido, seguridad y soporte técnico. También puedes contratarlo puntualmente cuando lo necesites.",
  },
];

const WA_LINK =
  "https://wa.me/573242264795?text=Hola%20CompuServicesSoft%2C%20me%20interesa%20una%20p%C3%A1gina%20web%20para%20mi%20negocio%20en%20Pasto";

export default function DesarrolloWebPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <Navbar hideGlobalPhone={true} />

      {/* ──── HERO ──────────────────────────────────────────────────── */}
      <section
        id="hero-web"
        className="relative overflow-hidden min-h-dvh flex items-center px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, #0a0010 0%, #1e0035 45%, #12001f 100%)",
        }}
      >
        {/* Orbe derecha */}
        <div
          className="absolute top-[-60px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Orbe izquierda inferior */}
        <div
          className="absolute bottom-[-40px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="container-site relative z-10 text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--color-primary)",
              background: "rgba(140,82,255,0.12)",
              border: "1px solid rgba(140,82,255,0.3)",
            }}
          >
            — Desarrollo Web en Pasto, Nariño —
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Páginas Web{" "}
            <span className="text-gradient-gamer">Profesionales</span>
            <br />
            que generan{" "}
            <span style={{ color: "var(--color-primary)" }}>clientes</span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Diseñamos y desarrollamos páginas web, landing pages, tiendas
            online y software a la medida para empresas y emprendedores en
            Pasto, Nariño adaptadas a dispositivos moviles y computadores. <strong className="text-white">Diseño moderno, SEO incluido y entrega rápida.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gamer inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base"
            >
              <WhatsAppIcon />
              Cotizar gratis por WhatsApp
            </a>
            <a
              href="#servicios-web"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{
                border: "1px solid rgba(140,82,255,0.4)",
                color: "var(--color-text-muted)",
              }}
            >
              Ver servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Badges de confianza */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {["✅ Presupuesto sin costo", "🚀 Entrega rápida", "📍 En Pasto, Nariño", "🔍 SEO incluido"].map((b) => (
              <span
                key={b}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  color: "var(--color-text-muted)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SERVICIOS ─────────────────────────────────────────────── */}
      <section id="servicios-web" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              — Lo que ofrecemos —
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Nuestros{" "}
              <span className="text-primary">Servicios Web</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto">
              Desde una landing page sencilla hasta un sistema web complejo.
              Trabajamos con empresas de Pasto y Nariño.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((srv) => (
              <div
                key={srv.titulo}
                className="relative bg-white rounded-3xl p-7 flex flex-col gap-5 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderColor: srv.popular
                    ? "var(--color-primary)"
                    : "#e5e7eb",
                  boxShadow: srv.popular
                    ? "0 0 0 2px rgba(140,82,255,0.15)"
                    : undefined,
                }}
              >
                {srv.popular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white whitespace-nowrap"
                    style={{ background: "var(--color-primary)" }}
                  >
                    ⭐ Más elegido
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(140,82,255,0.1)",
                      border: "1px solid rgba(140,82,255,0.25)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900">{srv.titulo}</h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">{srv.desc}</p>

                <ul className="flex flex-col gap-2 flex-1">
                  {srv.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      >
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className="pt-4 border-t text-sm font-bold"
                  style={{
                    borderColor: "rgba(140,82,255,0.15)",
                    color: "var(--color-primary)",
                  }}
                >
                  {srv.precio}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: srv.popular
                      ? "var(--color-primary)"
                      : "var(--color-dark)",
                  }}
                >
                  <WhatsAppIcon />
                  Cotizar ahora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── POR QUÉ ELEGIRNOS ─────────────────────────────────────── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, #0a0010 0%, #1e0035 50%, #0a0010 100%)",
        }}
      >
        <div className="container-site">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              — Nuestra diferencia —
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              ¿Por qué elegirnos para tu{" "}
              <span style={{ color: "var(--color-primary)" }}>
                página web en Pasto?
              </span>
            </h2>
            <div
              className="w-16 h-1 rounded-full mx-auto mb-4"
              style={{ background: "var(--color-primary)" }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((v) => (
              <div key={v.titulo} className="card-gamer rounded-3xl p-8 text-center flex flex-col gap-4">
                <div className="text-5xl">{v.emoji}</div>
                <h3 className="text-lg font-black text-white">{v.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PROCESO ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              — Cómo trabajamos —
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Tu página web en{" "}
              <span className="text-primary">4 pasos</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-3xl p-8 flex flex-col gap-4 border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 group"
              >
                <span
                  className="text-5xl font-black transition-colors duration-200"
                  style={{ color: "rgba(140,82,255,0.2)" }}
                >
                  {p.num}
                </span>
                <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {p.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FAQ ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              — Preguntas frecuentes —
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Preguntas sobre{" "}
              <span style={{ color: "var(--color-primary)" }}>
                páginas web en Pasto
              </span>
            </h2>
            <div
              className="w-16 h-1 rounded-full mx-auto"
              style={{ background: "var(--color-primary)" }}
            />
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="font-bold text-base text-white">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA FINAL ─────────────────────────────────────────────── */}
      <div className="container-site px-4 sm:px-6 lg:px-8 pb-20 pt-8 mt-12 mb-8">
        <section
          className="py-20 px-6 sm:px-12 text-center relative overflow-hidden rounded-[2.5rem] shadow-2xl border"
          style={{
            background: "linear-gradient(135deg, #1e0035 0%, #0a0010 50%, #1e0035 100%)",
            borderColor: "rgba(140,82,255,0.15)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 40px rgba(140,82,255,0.1)",
          }}
        >
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, var(--color-primary) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            ¿Listo para tener tu{" "}
            <span style={{ color: "var(--color-primary)" }}>
              página web en Pasto
            </span>
            ?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-10"
            style={{ color: "var(--color-text-muted)" }}
          >
            Escríbenos hoy. Te respondemos rápido y te damos una cotización
            personalizada{" "}
            <strong className="text-white">sin ningún costo</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gamer inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-xl font-bold text-white text-lg"
            >
              <WhatsAppIcon />
              Cotizar mi página web gratis
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-base transition-all duration-200"
              style={{
                border: "1px solid rgba(140,82,255,0.35)",
                color: "var(--color-text-muted)",
              }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
        </section>
      </div>

      <Footer hideGlobalPhone={true} />
      <WhatsAppFloat hideGlobalPhone={true} />
    </main>
  );
}
