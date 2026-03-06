/**
 * Sinónimos y variaciones de búsqueda para cada categoría
 * Útil para mejorar el SEO y aparecer en más búsquedas relacionadas
 * 
 * Nota: Aunque Google no usa meta keywords para ranking, mantenerlas
 * ayuda con otros buscadores y la estructura semántica del sitio.
 * Lo que SÍ importa para Google: H1, contenido, schema.org, title, description
 */

type CategoryKeywords = {
    [key: string]: string[];
};

export const CATEGORY_SYNONYMS: CategoryKeywords = {
    // SSD (ID: 1)
    ssd: [
        "disco duro sólido",
        "disco sólido",
        "solid state drive",
        "unidad estado sólido",
        "disco duro SSD",
        "almacenamiento SSD",
        "disco SSD",
        "almacenamiento rápido",
        // Marcas populares
        "Kingston SSD",
        "Crucial SSD",
        "Samsung SSD",
        "WD SSD",
        "Western Digital SSD",
    ],

    // M2 (ID: 2)
    m2: [
        "M.2",
        "SSD M2",
        "disco M.2",
        "NVMe",
        "M2 NVMe",
        "disco M2",
        "almacenamiento M.2",
        "SSD NVMe",
        // Marcas populares
        "Samsung NVMe",
        "Kingston M2",
        "WD Black NVMe",
    ],

    // MONITOR (ID: 3)
    monitor: [
        "monitores",
        "pantalla",
        "pantallas",
        "monitor gaming",
        "monitor gamer",
        "display",
        "pantalla PC",
        "monitor LED",
        "monitor 144hz",
        // Marcas y especificaciones populares
        "LG monitor",
        "Samsung monitor",
        "AOC monitor",
        "monitor 24 pulgadas",
        "monitor 27 pulgadas",
        "monitor 144Hz",
        "monitor Full HD",
    ],

    // RAM (ID: 4)
    ram: [
        "memoria RAM",
        "memoria",
        "memorias RAM",
        "memoria para PC",
        "memoria DDR4",
        "memoria DDR5",
        "memoria DDR3",
        "memoria para computador",
        "RAM para laptop",
        "RAM para PC",
        "memoria para portátil",
        // Marcas y especificaciones populares
        "Kingston RAM",
        "Corsair RAM",
        "Crucial RAM",
        "HyperX RAM",
        "memoria 8GB",
        "memoria 16GB",
        "RAM DDR4 8GB",
        "RAM DDR5",
    ],

    // FUENTE DE PODER (ID: 5)
    "fuente-de-poder": [
        "fuente de poder",
        "fuente poder",
        "PSU",
        "power supply",
        "fuente alimentación",
        "fuente PC",
        "fuente computador",
        // Marcas y especificaciones
        "Corsair fuente",
        "EVGA fuente",
        "Thermaltake fuente",
        "fuente 600W",
        "fuente 700W",
        "fuente modular",
    ],

    // COMPUTADOR (ID: 6)
    computador: [
        "PC",
        "computadora",
        "ordenador",
        "equipo de cómputo",
        "computador completo",
        "PC armado",
        "computador de escritorio",
        "desktop",
        "torre PC",
    ],

    // GRAFICA (ID: 8)
    grafica: [
        "tarjeta gráfica",
        "tarjeta de video",
        "GPU",
        "placa de video",
        "tarjeta video",
        "gráfica",
        "tarjetas gráficas",
        "video card",
        "graphics card",
        "tarjeta gráfica gaming",
        // Marcas y modelos populares
        "Nvidia",
        "AMD Radeon",
        "GeForce",
        "RTX",
        "GTX",
        "RTX 3060",
        "RTX 4060",
        "RX 6600",
        "gráfica Nvidia",
        "gráfica AMD",
    ],

    // DISCO EXTERNO (ID: 10)
    "disco-externo": [
        "disco duro externo",
        "HDD externo",
        "almacenamiento externo",
        "disco portable",
        "disco portátil",
        "disco USB",
        // Marcas y capacidades
        "WD externo",
        "Seagate externo",
        "Toshiba externo",
        "disco 1TB",
        "disco 2TB",
    ],

    // CAJA PARA DISCO (ID: 11)
    "caja-para-disco": [
        "caja disco duro",
        "case disco",
        "enclosure",
        "dock disco",
        "adaptador disco duro",
        "carcasa disco",
    ],

    // CARGADOR DE PORTATIL (ID: 12)
    "cargador-de-portatil": [
        "cargador portátil",
        "cargador laptop",
        "adaptador portátil",
        "fuente portátil",
        "cargador notebook",
        "adaptador AC laptop",
    ],

    // MOUSE (ID: 14)
    mouse: [
        "ratón",
        "mouse gamer",
        "mouse gaming",
        "ratón inalámbrico",
        "mouse inalámbrico",
        "mouse para PC",
        "ratón gaming",
        // Marcas populares
        "Logitech mouse",
        "Razer mouse",
        "HyperX mouse",
        "mouse Logitech",
    ],

    // TECLADO (ID: 15)
    teclado: [
        "teclados",
        "keyboard",
        "teclado mecánico",
        "teclado gamer",
        "teclado gaming",
        "teclado RGB",
        "teclado para PC",
        // Marcas populares
        "Logitech teclado",
        "Razer teclado",
        "HyperX teclado",
        "Redragon teclado",
        "teclado mecánico gaming",
    ],

    // COMBOS (ID: 16)
    combos: [
        "combo teclado mouse",
        "kit teclado mouse",
        "combo gaming",
        "set teclado mouse",
        "paquete teclado mouse",
        "combo periféricos",
    ],

    // CONTROLES Y JUEGOS (ID: 17)
    "controles-y-juegos": [
        "controles",
        "joystick",
        "gamepad",
        "control gaming",
        "mando",
        "control para PC",
        "control USB",
    ],

    // BASE REFRIGERANTE (ID: 18)
    "base-refrigerante": [
        "base refrigerante laptop",
        "cooler pad",
        "base enfriamiento",
        "cooling pad",
        "ventilador laptop",
        "refrigerador portátil",
    ],

    // MOTHERBOARD (ID: 19)
    motherboard: [
        "tarjeta madre",
        "placa madre",
        "mainboard",
        "board",
        "tarjeta principal",
        "placa base",
        "mother",
        // Marcas y sockets populares
        "Asus motherboard",
        "Gigabyte motherboard",
        "MSI motherboard",
        "placa madre AM4",
        "placa madre AM5",
        "motherboard Intel",
        "motherboard AMD",
    ],

    // PROCESADOR (ID: 20)
    procesador: [
        "CPU",
        "procesadores",
        "procesador Intel",
        "procesador AMD",
        "micro procesador",
        "chip procesador",
        "procesador Ryzen",
        // Marcas y líneas populares
        "Intel",
        "AMD",
        "Ryzen",
        "Intel Core",
        "Ryzen 5",
        "Ryzen 7",
        "Intel i5",
        "Intel i7",
        "Ryzen 5 5600",
        "Ryzen 7 5700X",
        "Intel Core i5",
    ],

    // DISIPADOR (ID: 21)
    disipador: [
        "cooler CPU",
        "disipador procesador",
        "ventilador CPU",
        "refrigeración CPU",
        "disipador térmico",
        "cooler procesador",
    ],

    // VENTILADORES (ID: 22)
    ventiladores: [
        "ventilador",
        "cooler",
        "fan",
        "refrigeración",
        "ventilador PC",
        "fan RGB",
        "ventilador case",
    ],

    // POWER BANK (ID: 23)
    "power-bank": [
        "powerbank",
        "batería portátil",
        "cargador portátil",
        "batería externa",
        "power bank",
        "banco de energía",
    ],

    // MICROFONO (ID: 27)
    microfono: [
        "micrófono",
        "mic",
        "micrófono USB",
        "micrófono streaming",
        "micrófono gamer",
        "micrófono condensador",
    ],

    // MEMORIAS USB Y MICROSD (ID: 28)
    "memorias-usb-y-microsd": [
        "USB",
        "memoria USB",
        "pendrive",
        "flash drive",
        "microSD",
        "tarjeta memoria",
        "SD card",
        "memoria flash",
    ],

    // CADDY (ID: 31)
    caddy: [
        "caddy HDD",
        "adaptador caddy",
        "caddy laptop",
        "segundo disco laptop",
        "bahía disco",
    ],

    // CAMARA / WEBCAM (ID: 34, 37)
    camara: [
        "cámara web",
        "webcam",
        "cámara",
        "cámara USB",
        "cámara streaming",
        "cámara videollamadas",
    ],
    webcam: [
        "cámara web",
        "webcam",
        "cámara USB",
        "cámara streaming",
        "cámara videoconferencia",
    ],

    // GABINETE DE COMPUTADOR (ID: 35)
    "gabinete-de-computador": [
        "gabinete",
        "case",
        "caja PC",
        "torre",
        "chasis",
        "gabinete PC",
        "carcasa PC",
        "case gaming",
    ],

    // DECODIFICADOR Y TVBOX (ID: 36)
    "decodificador-y-tvbox": [
        "decodificador",
        "TV box",
        "Android TV box",
        "streaming box",
        "reproductor streaming",
        "smart TV box",
    ],

    // TABLETAS GRÁFICAS (ID: 38)
    "tabletas-graficas": [
        "tableta gráfica",
        "tableta digitalizadora",
        "pen tablet",
        "tableta dibujo",
        "tabla digitalizadora",
        "tableta diseño",
    ],

    // JUEGOS PLAYSTATION (ID: 39)
    "juegos-playstation": [
        "juegos PS4",
        "juegos PS5",
        "juegos PlayStation",
        "videojuegos PlayStation",
        "juegos consola",
    ],

    // LAMPARAS (ID: 40)
    lamparas: [
        "lámpara LED",
        "luz LED",
        "iluminación",
        "lámpara escritorio",
        "luz USB",
        "lámpara gamer",
    ],

    // REGULADORES Y UPS (ID: 41)
    "reguladores-y-ups": [
        "regulador",
        "UPS",
        "regulador voltaje",
        "no break",
        "batería respaldo",
        "protector voltaje",
        "regulador de voltaje",
    ],
};

/**
 * Obtiene los sinónimos para una categoría
 */
export function getCategorySynonyms(categorySlug: string): string[] {
    return CATEGORY_SYNONYMS[categorySlug.toLowerCase()] || [];
}

/**
 * Genera keywords optimizadas para SEO de una categoría
 * Incluye variaciones con "Pasto" y "Nariño"
 */
export function generateCategoryKeywords(
    categoryName: string,
    categorySlug: string
): string[] {
    const synonyms = getCategorySynonyms(categorySlug);
    const baseKeywords = [categoryName, ...synonyms];

    const keywords: string[] = [];

    // Agregar variaciones con ubicación
    baseKeywords.forEach((keyword) => {
        keywords.push(
            `${keyword} Pasto`,
            `${keyword} Nariño`,
            `${keyword} Pasto Colombia`,
            `comprar ${keyword} Pasto`,
            `${keyword} precio Pasto`,
            `${keyword} en Pasto`
        );
    });

    // Keywords genéricos de la tienda
    keywords.push(
        "CompuServicesSoft",
        "tienda tecnología Pasto",
        "CC San Agustín Pasto",
        "componentes PC Pasto"
    );

    // Eliminar duplicados y retornar
    return Array.from(new Set(keywords));
}

/**
 * Genera keywords para productos individuales
 */
export function generateProductKeywords(
    productName: string,
    categoryName: string,
    categorySlug: string
): string[] {
    const categoryKeywords = generateCategoryKeywords(categoryName, categorySlug);

    return [
        productName,
        `${productName} Pasto`,
        `${productName} Nariño`,
        `${productName} precio`,
        `comprar ${productName} Pasto`,
        ...categoryKeywords.slice(0, 10), // Incluir algunos keywords de categoría
    ];
}
