"use client";

import { useEffect, useState } from "react";

const codeLines = [
  { text: "const web = new ProyectoWeb({", color: "#c060ff" },
  { text: '  cliente: "Tu Negocio en Pasto",', color: "#d89fff" },
  { text: '  diseño: "personalizado",', color: "#d89fff" },
  { text: "  seo: true,", color: "#39ff14" },
  { text: "  responsive: true,", color: "#39ff14" },
  { text: '  entrega: "rápida"', color: "#00e5ff" },
  { text: "});", color: "#c060ff" },
  { text: "", color: "" },
  { text: "await web.deploy(); // ¡Listo! 🚀", color: "#8c52ff" },
];

export default function AnimatedCodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      className="dw-reveal-up dw-visible mx-auto max-w-lg rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: "rgba(10, 0, 16, 0.85)",
        border: "1px solid rgba(140, 82, 255, 0.3)",
        backdropFilter: "blur(12px)",
        animationDelay: "0.8s",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "rgba(30, 0, 53, 0.8)", borderBottom: "1px solid rgba(140, 82, 255, 0.2)" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="text-xs ml-2 font-mono" style={{ color: "var(--color-text-muted)" }}>tu-pagina-web.ts</span>
      </div>

      {/* Code content */}
      <div className="p-5 font-mono text-sm leading-7 min-h-[280px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="dw-code-line"
            style={{ color: line.color, animationDelay: `${i * 0.1}s` }}
          >
            <span className="inline-block mr-4 w-5 text-right select-none" style={{ color: "rgba(140,82,255,0.3)" }}>
              {i + 1}
            </span>
            {line.text}
          </div>
        ))}
        {visibleLines <= codeLines.length && (
          <span
            className="inline-block w-2 h-5 ml-9 align-middle"
            style={{
              background: "var(--color-primary)",
              opacity: cursorVisible ? 1 : 0,
              transition: "opacity 0.1s",
            }}
          />
        )}
      </div>
    </div>
  );
}
