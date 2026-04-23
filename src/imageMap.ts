export const getImageUrl = (name: string) => {
  return new URL(`./assets/products/${name}`, import.meta.url).href;
};

export const productImages: Record<string, string> = {
  "flower-argentina.webp": getImageUrl("flower-argentina.webp"),
  "flower-canasta.webp": getImageUrl("flower-canasta.webp"),
  "flores-eternas-clasico.webp": getImageUrl("flores-eternas-clasico.webp"),
  "flower-lirio-pasion.webp": getImageUrl("flower-lirio-pasion.webp"),
  "flower-lavanda-lilas.webp": getImageUrl("flower-lavanda-lilas.webp"),
  "flower-mix.webp": getImageUrl("flower-mix.webp"),
  "flower-lavanda.webp": getImageUrl("flower-lavanda.webp"),
  "flower-lirios-valle.webp": getImageUrl("flower-lirios-valle.webp"),
  "flower-maceta-lirios.webp": getImageUrl("flower-maceta-lirios.webp"),
  "flower-margarita-mini.webp": getImageUrl("flower-margarita-mini.webp"),
  "flower-margaritas-ramo.webp": getImageUrl("flower-margaritas-ramo.webp"),
  "flower-lengua-suegra.webp": getImageUrl("flower-lengua-suegra.webp"),
  "flower-planta-maceta.webp": getImageUrl("flower-planta-maceta.webp"),
  "flower-duo-primavera.webp": getImageUrl("flower-duo-primavera.webp"),
  "flower-ramo-blue.webp": getImageUrl("flower-ramo-blue.webp"),
  "flower-ramo-pink.webp": getImageUrl("flower-ramo-pink.webp"),
  "flower-ramo-vibrante.webp": getImageUrl("flower-ramo-vibrante.webp"),
  "flower-bouquet-art.webp": getImageUrl("flower-bouquet-art.webp"),
  "tulipanes-maceta-flores-eternas.webp": getImageUrl("tulipanes-maceta-flores-eternas.webp"),
  "flower-tulipanes-clasicos.webp": getImageUrl("flower-tulipanes-clasicos.webp"),
  "tulipanes-mini-duo.webp": getImageUrl("tulipanes-mini-duo.webp"),
};
