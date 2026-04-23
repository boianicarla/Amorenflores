import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Configuración ultra-limpia para máxima compatibilidad con Vercel
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // ESTA ES LA SOLUCIÓN DEFINITIVA: 
    // Metemos todas las imágenes (hasta 2MB cada una) directamente dentro del código.
    // Así no hay archivos que se pierdan en Vercel.
    assetsInlineLimit: 2048000, 
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
