import type { Metadata } from "next";
import { getProductosPorCategoria } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CotizadorPC from "@/components/CotizadorPC";
import type { Producto } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "Arma tu PC Gamer en Pasto | Cotizador y Configurador de Computadores — CompuServicesSoft Nariño",
  description:
    "Cotiza y arma tu computador gamer ideal con los mejores componentes en Pasto, Nariño. Selecciona procesador, RAM, Motherboard, SSD, NVMe, Gráfica, Monitor y más. Asesoría gratis en CompuServicesSoft, CC San Agustín Local 224A.",
  keywords: [
    "armar PC Pasto",
    "armar PC gamer Pasto",
    "cotizar PC Pasto",
    "configurador PC Pasto",
    "ensamblar computador Pasto",
    "armar computador gamer Pasto",
    "cotizador PC gamer Pasto Nariño",
    "componentes PC Pasto",
    "armado de computadores Pasto",
    "PC gamer Pasto precio",
    "CompuServicesSoft Pasto",
  ],
  openGraph: {
    title: "Arma tu PC Gamer en Pasto | CompuServicesSoft Nariño",
    description:
      "Cotiza tu PC gamer ideal con nuestro configurador. Asesoría gratis en Pasto, Nariño.",
    url: "https://compuservicessoft.com/armar-pc-gamer",
    type: "website",
  },
  alternates: { canonical: "https://compuservicessoft.com/armar-pc-gamer" },
};

/* IDs de categorías según la BD */
const CAT = {
  procesador: 20,
  ram: 4,
  board: 19,
  fuente: 5,
  ssd: 1,
  nvme: 2,
  grafica: 8,
  monitor: 3,
  gabinete: 35,
  disipador: 21,
};

async function cargar(id: number): Promise<Producto[]> {
  try {
    const data = await getProductosPorCategoria(id, 0, 100);
    return data.content;
  } catch {
    return [];
  }
}

export default async function ArmarPage() {
  /* Carga en paralelo todas las categorías */
  const [
    procesadores,
    rams,
    boards,
    fuentes,
    ssds,
    nvmes,
    graficas,
    monitores,
    gabinetes,
    disipadores,
  ] = await Promise.all([
    cargar(CAT.procesador),
    cargar(CAT.ram),
    cargar(CAT.board),
    cargar(CAT.fuente),
    cargar(CAT.ssd),
    cargar(CAT.nvme),
    cargar(CAT.grafica),
    cargar(CAT.monitor),
    cargar(CAT.gabinete),
    cargar(CAT.disipador),
  ]);

  /* Filtros igual que el JS original */
  const ramsFiltradas = rams.filter((p) => {
    const n = p.nombre.toLowerCase();
    return (n.includes("ddr4") || n.includes("ddr5")) && !n.includes("laptop");
  });

  const disipadorFiltrados = disipadores.filter(
    (p) => !p.nombre.toLowerCase().includes("pasta"),
  );

  return (
    <>
      <Navbar tema="claro" />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-site">
          {/* Encabezado */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">
              Arma tu <span className="text-primary">PC Gamer</span> en Pasto
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Selecciona cada componente y obtén tu cotización al instante.
              Envíanosla por WhatsApp y te asesoramos sin costo en Pasto,
              Nariño.
            </p>
          </div>

          <CotizadorPC
            datos={{
              procesadores,
              rams: ramsFiltradas,
              boards,
              fuentes,
              ssds,
              nvmes,
              graficas,
              monitores,
              gabinetes,
              disipadores: disipadorFiltrados,
            }}
          />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
