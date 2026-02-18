# CompuServicesSoft — Frontend

Sitio web oficial de **CompuServicesSoft**, tienda de tecnología ubicada en el CC San Agustín, Local 224A, Pasto, Nariño, Colombia.

---

## Stack tecnológico

| Tecnología | Versión |
|---|---|
| Next.js (App Router) | 16.1.6 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | v4 |
| Fuente | Montserrat (Google Fonts) |

---

## Levantar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Estructura principal

```
src/
├── app/
│   ├── layout.tsx               # Layout raíz: SEO, Schema.org, fuente Montserrat
│   ├── page.tsx                 # Página de inicio
│   ├── globals.css              # Variables CSS y animaciones globales
│   ├── catalogo/                # Catálogo de productos
│   │   ├── page.tsx             # Listado con filtros por categoría
│   │   ├── buscar/[q]/page.tsx  # Búsqueda de productos
│   │   └── [...path]/page.tsx   # Detalle de producto
│   ├── armar-pc-gamer/
│   │   └── page.tsx             # Cotizador de PC por componentes
│   └── politicas/
│       └── page.tsx             # Garantía y políticas de devolución
│
└── components/
    ├── Navbar.tsx               # Barra de navegación fija con scroll effect y menú mobile
    ├── HeroSection.tsx          # Hero con CTAs, redes sociales y flecha de scroll
    ├── CategoriasSection.tsx    # Grid de categorías de productos
    ├── CategoriasCarrusel.tsx   # Carrusel horizontal de categorías
    ├── FilaCarrusel.tsx         # Carrusel de productos por categoría
    ├── AboutSection.tsx         # Sección "Quiénes Somos"
    ├── ServiciosSection.tsx     # Servicios: técnico, asesorías, venta
    ├── CotizadorPC.tsx          # Formulario interactivo para armar PC con resumen y descuentos
    ├── CatalogoFiltros.tsx      # Filtros de categoría + búsqueda para el catálogo
    ├── ProductCard.tsx          # Tarjeta de producto individual
    ├── WhatsAppFloat.tsx        # Botón flotante de WhatsApp con popover de selección de número
    ├── WhatsAppSelector.tsx     # Componente reutilizable: popover para elegir número de WhatsApp
    └── Footer.tsx               # Pie de página con links, contacto y copyright
```

---

## Contacto configurado

| Canal | Valor |
|---|---|
| WhatsApp principal | +57 317 403 4349 |
| WhatsApp secundario | +57 324 226 4795 |
| Instagram | @compuservicessoft |
| Email | compuservicessoft@gmail.com |
| Ubicación | CC San Agustín, Local 224A — Pasto, Nariño |
| Horario | Lun–Sáb · 10am – 7pm |

---

## Funcionalidades implementadas

### Navegación y layout
- **Navbar** con dos temas: `oscuro` (inicio, fondo transparente que oscurece al hacer scroll) y `claro` (catálogo/producto, fondo blanco fijo).
- Menú hamburguesa en mobile con animación.
- Modal de contacto con íconos de redes sociales, WhatsApp, email y ubicación.
- **Footer** responsive: centrado en mobile, columnas en desktop. Incluye marca, navegación y contacto completo.

### Catálogo de productos
- Listado con filtros por categoría (sidebar en desktop, drawer en mobile).
- Búsqueda de productos por nombre con página dedicada `/catalogo/buscar/[q]`.
- Detalle de producto individual con imagen, precio y descripción.
- `ProductCard` con imagen optimizada via `next/image`.

### Cotizador de PC (`/armar-pc-gamer`)
- Selección de componentes: procesador, RAM (con cantidad), motherboard, fuente, disco (SSD o NVMe), gabinete, disipador, gráfica y monitor.
- Resumen en tiempo real con precios individuales y total.
- **Descuento automático del 5%** al completar la torre (sin gráfica).
- **Obsequio de teclado + mouse** al agregar monitor junto con la torre completa.
- Botón de envío de cotización por WhatsApp con mensaje pre-armado dinámico.

### WhatsApp con selección de número
- Componente `WhatsAppSelector`: al hacer clic en cualquier botón de WhatsApp, aparece un popover tipo nube que pregunta a cuál número escribir (317 primero, 324 segundo).
- Componente `WhatsAppFloat`: botón flotante verde en la esquina inferior derecha con popover propio posicionado correctamente sobre el círculo, tooltip "¡Escríbenos!" al hacer hover y animación de pulso.
- Implementado en: `WhatsAppFloat`, `HeroSection`, `ServiciosSection`, `AboutSection`, `CotizadorPC`.

### SEO y metadatos
- `layout.tsx` con `metadata` completo: título, descripción, keywords, OpenGraph, Twitter Card.
- Schema.org `LocalBusiness` en JSON-LD con nombre, dirección, teléfonos, horario y coordenadas.
- Imágenes con `next/image` optimizadas, `priority` en imágenes LCP, `loading="lazy"` en el resto.

### Rendimiento
- `FilaCarrusel`: `priority` solo en las primeras 4 imágenes del primer carrusel, `loading="lazy"` en el resto.
- `AboutSection`: imagen del local con `priority` por ser candidata a LCP.
- `sizes` correctos en todos los `next/image` según el layout real.

### Otros
- Eliminado el botón ✕ de limpiar búsqueda en mobile del catálogo (`CatalogoFiltros`) — el usuario limpia manualmente o cambiando de categoría.
- Padding-top extra en mobile en la página de búsqueda para compensar Navbar + barra de filtros fija.

---

## Notas de Tailwind v4

- Usar `bg-linear-to-br` (no `bg-gradient-to-br`)
- Usar `shrink-0` (no `flex-shrink-0`)
- Clases custom disponibles en `globals.css`: `.card-gamer`, `.btn-gamer`, `.text-gradient-gamer`, `.text-gradient-purple`, `.neon-line`, `.animate-float`, `.animate-border-glow`, `.animate-text-glow`, `.animate-pulse-glow`
