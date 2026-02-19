"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Arma tu PC", href: "/armar-pc-gamer" },
  { label: "Catálogo PDF", href: "/api/catalogo-pdf", external: true },
];

const contactos = [
  {
    label: "Ubicación",
    valor: "CC San Agustín, Local 224A — Pasto, Nariño",
    href: "https://maps.app.goo.gl/e3nUAFL7zDNTMF9i7",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    valor: "+(57) 317 403 4349",
    href: "https://wa.me/573174034349?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20CompuServicesSoft",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp 2",
    valor: "+(57) 324 226 4795",
    href: "https://wa.me/573242264795?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20CompuServicesSoft",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    valor: "@compuservicessoft",
    href: "https://www.instagram.com/compuservicessoft/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

type Props = {
  /* 'oscuro' = inicio (fondo negro, transparente→oscuro al scroll)
     'claro'  = catálogo/producto (fondo blanco fijo, texto gris oscuro) */
  tema?: "oscuro" | "claro";
};

export default function Navbar({ tema = "oscuro" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const esClaro = tema === "claro";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Clases del header según tema */
  const headerBg = esClaro
    ? "bg-white border-b border-gray-200 shadow-sm"
    : scrolled || menuOpen
    ? "bg-background/95 backdrop-blur-md shadow-[0_2px_20px_rgba(122,0,212,0.3)]"
    : "bg-transparent";

  const linkColor = esClaro
    ? "text-gray-900 hover:text-primary"
    : "text-[#fff] hover:text-[#d89fff]";

  const logoTextColor = esClaro ? "text-gray-900" : "text-white";
  const hamburgerColor = esClaro ? "bg-gray-700" : "bg-primary-lighter";
  const menuMobileBg = esClaro ? "bg-white border-t border-gray-100" : "border-t border-primary-light/20";
  const menuMobileLink = esClaro
    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
    : "text-text-muted hover:text-white hover:bg-surface";

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="container-site px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/favicon/favicon-96x96.png"
              alt="CompuServicesSoft logo"
              className="w-9 h-9 rounded-lg shadow-[0_0_12px_rgba(122,0,212,0.4)] group-hover:shadow-[0_0_20px_rgba(160,32,240,0.6)] transition-all duration-300"
            />
            <span className="font-black text-lg tracking-tight">
              <span className={logoTextColor}>Compu</span>
              <span className="text-primary">Services</span>
              <span className={logoTextColor}>Soft</span>
            </span>
          </Link>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${linkColor}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${linkColor}`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-4/5 transition-all duration-300 rounded-full" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Botón Contáctanos desktop */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-colors"
          >
            Contáctanos
          </button>

          {/* Hamburguesa mobile */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${esClaro ? "hover:bg-gray-100" : "hover:bg-surface"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Menú mobile */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className={`pb-4 pt-2 ${menuMobileBg}`}>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${menuMobileLink}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${menuMobileLink}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-2 px-4">
                <button
                  onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-colors"
                >
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* Modal de contactos */}
    {modalOpen && (
      <div
        className="fixed inset-0 z-100 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={() => setModalOpen(false)}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 py-4 bg-primary flex items-center justify-between">
            <h4 className="text-white font-bold text-base">Nuestros Contactos</h4>
            <button onClick={() => setModalOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lista de contactos */}
          <div className="divide-y divide-gray-100">
            {contactos.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
                onClick={() => setModalOpen(false)}
              >
                <span className="text-primary shrink-0">{c.icon}</span>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{c.label}</p>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">{c.valor}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Botón cerrar */}
          <div className="px-6 py-4 border-t border-gray-100">
            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
