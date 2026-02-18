"use client";

import WhatsAppSelector from "@/components/WhatsAppSelector";

import Link from "next/link";
import { useState, useEffect } from "react";

type Particle = {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
};

export default function HeroSection() {
  /* Las partículas se generan solo en el cliente para evitar hydration mismatch */
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 3,
      }))
    );
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #2d0050 0%, #1e0035 30%, #0a0010 70%)",
      }}
    >
      {/* Grid de fondo tipo circuito */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(160,32,240,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160,32,240,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbes de luz */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #8c52ff, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #00e5ff, transparent)", animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #ff00aa, transparent)", animationDelay: "3s" }} />

      {/* Partículas flotantes */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background: p.id % 3 === 0 ? "#a020f0" : p.id % 3 === 1 ? "#00e5ff" : "#ff00aa",
            opacity: 0.5,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 6px currentColor`,
          }}
        />
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-[1624px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Badge ubicación */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(160,32,240,0.5)] bg-[rgba(122,0,212,0.15)] backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
          <span className="text-sm font-medium text-[#d89fff]">
            📍 Pasto, Nariño — CC San Agustín Local 224A
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="block">
            <span className="text-white">Compu</span><span className="text-[#8c52ff]">Services</span><span className="text-white">Soft</span>
          </span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-1">Tu tienda de tecnología en Pasto</span>
        </h1>

        {/* Línea decorativa */}
        <div className="neon-line w-48 mx-auto mb-8" />

        {/* Descripción */}
        <p className="hidden sm:block max-w-4xl mx-auto text-lg sm:text-xl text-[#d89fff]/80 leading-relaxed mb-10">
          Encuentra los mejores componentes de cómputo, arma tu PC gamer ideal y obtén servicio técnico especializado. <strong className="text-[#c060ff]">CompuServicesSoft</strong> —
          tu aliado tecnológico en Nariño.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-row gap-3 justify-center items-center mb-10">
          <Link
            href="/catalogo"
            className="btn-gamer px-6 py-3 rounded-xl text-sm font-bold tracking-wide"
          >
            🛒 Ver Catálogo
          </Link>
          <Link
            href="/armar-pc-gamer"
            className="px-6 py-3 rounded-xl text-sm font-bold tracking-wide border border-[#00e5ff]/50 text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300"
          >
            🖥️ Arma tu PC
          </Link>
        </div>

        {/* Redes sociales — centradas dentro del contenido (solo mobile) */}
        <div className="lg:hidden flex items-center justify-center gap-4 mb-10 px-4 py-2.5 rounded-2xl mx-auto w-fit"
          style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <WhatsAppSelector className="text-white/70 hover:text-[#25d366] transition-colors duration-200" aria-label="WhatsApp">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </WhatsAppSelector>
          <a href="https://www.instagram.com/compuservicessoft/" target="_blank" rel="noopener noreferrer"
            className="text-white/70 hover:text-[#e1306c] transition-colors duration-200" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a href="mailto:compuservicessoft@gmail.com"
            className="text-white/70 hover:text-[#ea4335] transition-colors duration-200" aria-label="Gmail">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" /></svg>
          </a>
          <a href="tel:+573174034349"
            className="text-white/70 hover:text-[#c060ff] transition-colors duration-200" aria-label="Teléfono">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </a>
        </div>

        {/* Flecha scroll */}
        <div className="flex justify-center">
          <a
            href="#categorias"
            className="flex flex-col items-center gap-2 text-[#d89fff]/50 hover:text-[#c060ff] transition-colors duration-300 group"
            aria-label="Ver categorías"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Explorar</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* En desktop: redes en esquina inferior izquierda (absolute) */}
      <div className="hidden lg:flex absolute z-20 items-center gap-5 px-6 py-3.5 rounded-2xl left-1/2 -translate-x-1/2"
        style={{ bottom: "30%", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <WhatsAppSelector className="text-white/70 hover:text-[#25d366] transition-colors duration-200" aria-label="WhatsApp">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </WhatsAppSelector>
        <a href="https://www.instagram.com/compuservicessoft/" target="_blank" rel="noopener noreferrer"
          className="text-white/70 hover:text-[#e1306c] transition-colors duration-200" aria-label="Instagram">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        </a>
        <a href="mailto:compuservicessoft@gmail.com"
          className="text-white/70 hover:text-[#ea4335] transition-colors duration-200" aria-label="Gmail">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" /></svg>
        </a>
        <a href="tel:+573174034349"
          className="text-white/70 hover:text-[#c060ff] transition-colors duration-200" aria-label="Teléfono">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
      </div>

      {/* Borde inferior degradado */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0010)" }} />
    </section>
  );
}
