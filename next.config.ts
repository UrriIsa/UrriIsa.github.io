import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Dice a Next que genere archivos estaticos en out
  basePath: '/UrriIsa.github.io',
  images :{
    unoptimized: true, // github pages no soporta la optimización de imagenes
  },
};

export default nextConfig;
