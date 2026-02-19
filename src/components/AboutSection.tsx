"use client";

import Link from "next/link";
import Image from "next/image";
import WhatsAppSelector from "@/components/WhatsAppSelector";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Columna texto */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8c52ff] mb-3">
              — Nosotros —
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              ¿Quiénes{" "}
              <span className="text-[#8c52ff]">Somos?</span>
            </h2>
            <div className="w-16 h-1 bg-[#8c52ff] rounded-full mb-8" />

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En <strong className="text-gray-900">CompuServicesSoft</strong>, somos tu socio de confianza
                en tecnología. Ubicados en el{" "}
                <strong className="text-gray-900">CC San Agustín, Local 224A (Segundo piso al fondo)</strong>{" "}
                en Pasto, Nariño.
              </p>
              <p>
                Ofrecemos una amplia gama de productos de cómputo: tarjetas gráficas, discos sólidos,
                memorias RAM, computadoras, unidades NVMe, monitores y mucho más.
              </p>
              <p>
                Además, brindamos <strong className="text-gray-900">servicio técnico especializado</strong> y
                consultoría personalizada para ayudarte a armar la máquina ideal. También somos expertos en
                instalación de sistemas operativos y optimización de dispositivos.
              </p>
              <p>
                Estamos registrados en la <strong className="text-gray-900">Cámara de Comercio</strong>, lo que
                garantiza que somos una empresa seria y confiable.
              </p>
            </div>

            {/* Horario y ubicación */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 flex items-start gap-3 bg-gray-50 border border-gray-200">
                <span className="text-2xl">🕙</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Horario</p>
                  <p className="text-sm text-gray-900 font-semibold">10:00 am – 7:00 pm</p>
                  <p className="text-xs text-gray-500">Lunes a Sábado</p>
                </div>
              </div>
              <div className="rounded-xl p-4 flex items-start gap-3 bg-gray-50 border border-gray-200">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Ubicación</p>
                  <p className="text-sm text-gray-900 font-semibold">CC San Agustín</p>
                  <p className="text-xs text-gray-500">Local 224A — Pasto, Nariño</p>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://maps.app.goo.gl/SEhrrnQU9554qtzZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gray-900 hover:bg-gray-700 text-white transition-colors"
              >
                📍 Ver en el mapa
              </a>
              <WhatsAppSelector
                mensaje="Hola%20vengo%20de%20la%20p%C3%A1gina%20CompuServicesSoft"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-300"
              >
                Escribirnos
              </WhatsAppSelector>
            </div>
          </div>

          {/* Columna imagen / tarjeta visual */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden relative aspect-video border border-gray-200 shadow-md">
              <Image
                src="/imagenes/local.jpeg"
                alt="Local CompuServicesSoft — CC San Agustín, Pasto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Redes sociales */}
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Síguenos</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/compuservicessoft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200 group-hover:border-gray-400 transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">@compuservicessoft</span>
                </a>
                <a
                  href="mailto:compuservicessoft@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200 group-hover:border-gray-400 transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">compuservicessoft@gmail.com</span>
                </a>
                <a
                  href="tel:+573174034349"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200 group-hover:border-gray-400 transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">+(57) 317 403 4349</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
