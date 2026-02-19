"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Producto } from "@/types";
import WhatsAppSelector from "@/components/WhatsAppSelector";
import { urlProducto } from "@/lib/utils";

type DatosCategorias = {
  procesadores: Producto[];
  rams: Producto[];
  boards: Producto[];
  fuentes: Producto[];
  ssds: Producto[];
  nvmes: Producto[];
  graficas: Producto[];
  monitores: Producto[];
  gabinetes: Producto[];
  disipadores: Producto[];
};

type ItemCarrito = {
  id: string;
  nombre: string;
  precio: number;
  url: string;
};

function formatPrecio(valor: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor);
}

function SelectComponente({
  label,
  id,
  productos,
  opcional,
  nota,
  onSelect,
  valorActual,
}: {
  label: string;
  id: string;
  productos: Producto[];
  opcional?: boolean;
  nota?: string;
  onSelect: (id: string, producto: Producto | null) => void;
  valorActual: number | null;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 flex-wrap">
        {label}
        {opcional && (
          <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            Opcional
          </span>
        )}
        {nota && (
          <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {nota}
          </span>
        )}
      </label>
      <select
        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
        value={valorActual ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          if (!val) { onSelect(id, null); return; }
          const prod = productos.find((p) => p.id === Number(val));
          onSelect(id, prod ?? null);
        }}
      >
        <option value="">— Seleccionar —</option>
        {productos.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nombre} — {formatPrecio(p.precioVendido)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function CotizadorPC({ datos }: { datos: DatosCategorias }) {
  const [seleccion, setSeleccion] = useState<Record<string, Producto | null>>({});
  const [tipoDisco, setTipoDisco] = useState<"ssd" | "nvme" | "">("");
  const [cantidadRam, setCantidadRam] = useState(1);

  function handleSelect(id: string, producto: Producto | null) {
    setSeleccion((prev) => ({ ...prev, [id]: producto }));
  }

  /* Carrito calculado */
  const carrito = useMemo<ItemCarrito[]>(() => {
    const items: ItemCarrito[] = [];
    const agregar = (id: string, prod: Producto | null, cantidad = 1) => {
      if (!prod) return;
      items.push({
        id,
        nombre: cantidad > 1 ? `${prod.nombre} (x${cantidad})` : prod.nombre,
        precio: prod.precioVendido * cantidad,
        url: urlProducto(prod.nombre, prod.categoria?.nombre ?? ""),
      });
    };
    agregar("procesador", seleccion.procesador ?? null);
    agregar("ram", seleccion.ram ?? null, cantidadRam);
    agregar("board", seleccion.board ?? null);
    agregar("fuente", seleccion.fuente ?? null);
    agregar("disco", seleccion.disco ?? null);
    agregar("gabinete", seleccion.gabinete ?? null);
    agregar("disipador", seleccion.disipador ?? null);
    agregar("grafica", seleccion.grafica ?? null);
    agregar("monitor", seleccion.monitor ?? null);
    return items;
  }, [seleccion, cantidadRam]);

  const total = carrito.reduce((s, i) => s + i.precio, 0);

  /* Validar promociones */
  const piezasTorre = ["procesador", "ram", "board", "fuente", "disco", "gabinete"];
  const tieneTorre = piezasTorre.every((id) => carrito.some((i) => i.id === id));
  const tieneMonitor = carrito.some((i) => i.id === "monitor");

  const totalTorre = carrito
    .filter((i) => piezasTorre.includes(i.id))
    .reduce((s, i) => s + i.precio, 0);
  const descuento = tieneTorre ? totalTorre * 0.05 : 0;
  const totalFinal = total - descuento;

  const discosActuales = tipoDisco === "ssd" ? datos.ssds : tipoDisco === "nvme" ? datos.nvmes : [];

  return (
    <div className="grid lg:grid-cols-[55fr_45fr] gap-8 items-start">

      {/* ── Formulario ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-black text-gray-900 mb-1">Configura tu PC</h2>
          <p className="text-sm text-gray-400">
            Asegúrate de que las piezas sean compatibles entre sí 😉
          </p>
        </div>

        {/* Procesador */}
        <SelectComponente
          label="Procesador"
          id="procesador"
          productos={datos.procesadores}
          onSelect={handleSelect}
          valorActual={seleccion.procesador?.id ?? null}
        />

        {/* RAM + cantidad */}
        <div className="grid sm:grid-cols-[1fr_120px] gap-3 items-end">
          <SelectComponente
            label="Memoria RAM"
            id="ram"
            productos={datos.rams}
            onSelect={handleSelect}
            valorActual={seleccion.ram?.id ?? null}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Cantidad</label>
            <input
              type="number"
              min={1}
              max={8}
              value={cantidadRam}
              onChange={(e) => setCantidadRam(Math.max(1, Number(e.target.value)))}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
            />
          </div>
        </div>

        {/* Motherboard */}
        <SelectComponente
          label="Motherboard"
          id="board"
          productos={datos.boards}
          onSelect={handleSelect}
          valorActual={seleccion.board?.id ?? null}
        />

        {/* Fuente */}
        <SelectComponente
          label="Fuente de Poder"
          id="fuente"
          productos={datos.fuentes}
          onSelect={handleSelect}
          valorActual={seleccion.fuente?.id ?? null}
        />

        {/* Disco: tipo + selección */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Disco Principal</label>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
              value={tipoDisco}
              onChange={(e) => {
                setTipoDisco(e.target.value as "ssd" | "nvme" | "");
                handleSelect("disco", null);
              }}
            >
              <option value="">— Seleccionar tipo —</option>
              <option value="ssd">SSD</option>
              <option value="nvme">M.2 NVMe</option>
            </select>
          </div>
          {tipoDisco && (
            <SelectComponente
              label={tipoDisco === "ssd" ? "Selecciona el SSD" : "Selecciona el NVMe"}
              id="disco"
              productos={discosActuales}
              onSelect={handleSelect}
              valorActual={seleccion.disco?.id ?? null}
            />
          )}
        </div>

        {/* Gabinete */}
        <SelectComponente
          label="Gabinete"
          id="gabinete"
          productos={datos.gabinetes}
          onSelect={handleSelect}
          valorActual={seleccion.gabinete?.id ?? null}
        />

        {/* Disipador */}
        <SelectComponente
          label="Disipador"
          id="disipador"
          productos={datos.disipadores}
          opcional
          nota="Requerido si el procesador no incluye disipador"
          onSelect={handleSelect}
          valorActual={seleccion.disipador?.id ?? null}
        />

        {/* Gráfica */}
        <SelectComponente
          label="Tarjeta Gráfica"
          id="grafica"
          productos={datos.graficas}
          opcional
          nota="Opcional si el procesador tiene gráfica integrada"
          onSelect={handleSelect}
          valorActual={seleccion.grafica?.id ?? null}
        />

        {/* Monitor */}
        <SelectComponente
          label="Monitor"
          id="monitor"
          productos={datos.monitores}
          opcional
          nota="¡Lleva monitor y te regalamos teclado + mouse!"
          onSelect={handleSelect}
          valorActual={seleccion.monitor?.id ?? null}
        />
      </div>

      {/* ── Carrito / Resumen ── */}
      <div className="sticky top-24 flex flex-col gap-4">

        {/* Promociones */}
        <div className="rounded-2xl p-4 text-sm border border-gray-200 bg-gray-50">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">🎁 Promociones</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>Arma tu torre completa (sin gráfica) y obtén <strong className="text-gray-900">5% de descuento</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>Agrega un monitor y te <strong className="text-gray-900">obsequiamos teclado y mouse</strong></span>
            </li>
          </ul>
        </div>

        {/* Carrito */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          {/* Header negro */}
          <div className="px-5 py-4" style={{ background: "#111" }}>
            <h3 className="font-black text-white">Tu cotización</h3>
          </div>

          {carrito.length === 0 ? (
            <div className="px-5 py-8 text-center text-gray-400 text-sm">
              Selecciona componentes para ver el resumen
            </div>
          ) : (
            <div>
              {carrito.map((item, idx) => (
                <div
                  key={item.id}
                  className="px-5 py-3 flex items-start justify-between gap-3"
                  style={{ background: idx % 2 === 0 ? "#f9f9f9" : "#ffffff" }}
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver producto"
                    className="text-sm text-gray-700 leading-snug flex-1 hover:text-gray-900 hover:underline underline-offset-2 transition-colors"
                  >
                    {item.nombre}
                  </Link>
                  <p className="text-base font-bold text-gray-900 shrink-0">{formatPrecio(item.precio)}</p>
                </div>
              ))}
            </div>
          )}

          {/* Totales */}
          {carrito.length > 0 && (
            <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-2">
              {tieneTorre ? (
                <>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span className="line-through">{formatPrecio(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600 font-semibold">
                    <span>Descuento 5%</span>
                    <span>− {formatPrecio(descuento)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-gray-900 pt-1 border-t border-gray-100">
                    <span>Total</span>
                    <span>{formatPrecio(totalFinal)}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between text-lg font-black text-gray-900">
                  <span>Total</span>
                  <span>{formatPrecio(total)}</span>
                </div>
              )}

              {/* Obsequio teclado+mouse */}
              {tieneTorre && tieneMonitor && (
                <div className="mt-2 p-3 rounded-xl text-xs font-semibold text-center bg-green-50 text-green-700 border border-green-100">
                  🎁 ¡Obsequio incluido: Teclado + Mouse!
                </div>
              )}

              {/* Indicador de progreso hacia descuento */}
              {!tieneTorre && (
                <p className="text-xs text-gray-400 mt-1">
                  Agrega {piezasTorre.filter((id) => !carrito.some((i) => i.id === id)).length} pieza(s) más para el descuento del 5%
                </p>
              )}
            </div>
          )}
        </div>

        {/* CTA WhatsApp */}
        {carrito.length > 0 && (
          <WhatsAppSelector
            mensaje={encodeURIComponent(
              "Hola, vengo de la página CompuServicesSoft y quiero cotizar los siguientes componentes:\n\n" +
              carrito.map((i) => `• ${i.nombre}: ${formatPrecio(i.precio)}`).join("\n") +
              `\n\nTotal: ${formatPrecio(totalFinal)}` +
              (tieneTorre ? `\n(Con descuento del 5% aplicado)` : "") +
              (tieneTorre && tieneMonitor ? `\n🎁 + Teclado y Mouse de obsequio` : "")
            )}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white transition-colors bg-[#25d366] hover:bg-[#1da851]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar cotización por WhatsApp
          </WhatsAppSelector>
        )}
      </div>
    </div>
  );
}
