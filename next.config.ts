import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Permite imágenes desde el servidor de producción cuando la URL cambie */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "compuservicessoft.com",
      },
      {
        /* Servidor local de desarrollo */
        protocol: "http",
        hostname: "localhost",
      },
    ],
    /* Fallback: si la imagen no carga, no rompe la página */
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
};

export default nextConfig;
