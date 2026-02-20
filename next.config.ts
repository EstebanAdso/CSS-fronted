import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/armar.html",
        destination: "/armar-pc-gamer",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
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
