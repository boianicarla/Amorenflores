// Usamos la función nativa de Vite para encontrar y procesar todas las imágenes automáticamente.
// Esto garantiza que Vercel encuentre los archivos aunque les cambie el nombre (hashing).
const staticImages = import.meta.glob('./assets/products/*.{webp,png,jpg,jpeg}', { 
  eager: true, 
  import: 'default' 
}) as Record<string, string>;

// Transformamos el objeto de Vite en nuestro mapa de productos
export const productImages: Record<string, string> = {};

// Las llaves de staticImages son './assets/products/nombre.webp'
// Queremos que las llaves sean solo 'nombre.webp'
Object.entries(staticImages).forEach(([path, url]) => {
  const filename = path.split('/').pop() || '';
  productImages[filename] = url;
});
