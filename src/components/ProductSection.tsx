import React, { useCallback, useRef } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ramo Argentina Mundial",
    image: "/flores-argentina-mundial-flores-eternas-limpiapipas-artesanal.webp",
    category: "Nuestra Tierra"
  },
  {
    id: 2,
    name: "Canasta Mini Flores",
    image: "/flores-canasta-mini-flores-eternas-limpiapipas-artesanal.webp",
    category: "Decoración"
  },
  {
    id: 3,
    name: "Ramo Clásico Eterno",
    image: "/flores-eternas-limpia-pipas-manualidades-pipe-cleaner-flowers.webp",
    category: "Eternas"
  },
  {
    id: 4,
    name: "Lirio de Pasión",
    image: "/flores-lirio-pasion-flores-eternas-limpiapipas-artesanal.webp",
    category: "Elegancia"
  },
  {
    id: 5,
    name: "Ramo Lavanda & Lilas",
    image: "/flores-ramo-lavanda-lilas-flores-eternas-limpiapipas-artesanal.webp",
    category: "Aromas"
  },
  {
    id: 6,
    name: "Mix Primavera Premium",
    image: "/flores-ramo-mix-flores-eternas-limpiapipas-artesanal.webp",
    category: "Especial"
  },
  {
    id: 7,
    name: "Lavanda Silvestre",
    image: "/lavanda-flores-eternas-limpiapipas-artesanal.webp",
    category: "Simplicidad"
  },
  {
    id: 8,
    name: "Lirios del Valle",
    image: "/liriosdelvalle-flores-eternas-limpiapipas-artesanal.webp",
    category: "Delicadeza"
  },
  {
    id: 9,
    name: "Mini Maceta Lirios",
    image: "/maceta-mini-lirios-flores-eternas-limpiapipas-artesanal.webp",
    category: "Escritorio"
  },
  {
    id: 10,
    name: "Margarita Individual",
    image: "/margarita-mini-flores-eternas-limpiapipas-artesanal.webp",
    category: "Mini"
  },
  {
    id: 11,
    name: "Ramo de Margaritas",
    image: "/margaritas-ramo-flores-eternas-limpiapipas-artesanal.webp",
    category: "Alegría"
  },
  {
    id: 12,
    name: "Lengua de Suegra Mini",
    image: "/planta-lengua-suegra-mini-flores-eternas-limpiapipas-artesanal.webp",
    category: "Plantas"
  },
  {
    id: 13,
    name: "Planta en Maceta",
    image: "/planta-maceta-flores-eternas-limpiapipas-artesanal.webp",
    category: "Vida Eterna"
  },
  {
    id: 14,
    name: "Duo Primavera",
    image: "/ramo-margaritas-tulipanes-manualidades-flores-limpiapipas.webp",
    category: "Clásicos"
  },
  {
    id: 15,
    name: "Ramo Royal Blue",
    image: "/ramo2-flores-eternas-limpiapipas-artesanal.webp",
    category: "Premium"
  },
  {
    id: 16,
    name: "Ramo Soft Pink",
    image: "/ramo5-flores-eternas-limpiapipas-artesanal.webp",
    category: "Romance"
  },
  {
    id: 17,
    name: "Ramo Vibrante",
    image: "/ramo6-manualidades-flores-limpiapipas.webp",
    category: "Color"
  },
  {
    id: 18,
    name: "Bouquet Artisanal",
    image: "/ramo7-manualidades-flores-limpiapipas.webp",
    category: "Arte"
  },
  {
    id: 19,
    name: "Maceta de Tulipanes",
    image: "/tulipanes-maceta-flores-eternas-limpia-pipas-manualidades-pipe-cleaner-flowers.webp.webp",
    category: "Hogar"
  },
  {
    id: 20,
    name: "Tulipanes Clásicos",
    image: "/tulipanes-manualidades-flores-limpiapipas.webp",
    category: "Flores"
  },
  {
    id: 21,
    name: "Mini Tulipanes Duo",
    image: "/tulipanes-miniflores-eternas-limpia-pipas-manualidades-pipe-cleaner-flowers.webp.webp",
    category: "Colección"
  }
];

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_40%] lg:flex-[0_0_28%] min-w-0 pl-10 group cursor-pointer">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-blue-sky/5 rounded-2xl transition-all duration-700 shadow-sm group-hover:shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/10 transition-colors duration-500" />
          
          {/* Quick View Tag */}
          <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-white/90 backdrop-blur-sm py-3 px-4 rounded-xl text-center text-[10px] uppercase tracking-widest font-bold text-brand-blue-deep shadow-lg">
              Artesanía Única
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start px-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-bold">
            {product.category}
          </span>
          <h3 className="text-xl font-serif text-brand-blue-deep mb-2 group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <div className="w-8 h-[1px] bg-brand-blue-sky/30 group-hover:w-full transition-all duration-700" />
        </div>
      </motion.div>
    </div>
  );
};

export const ProductSection = () => {
  const shuffledProducts = React.useMemo(() => {
    const arr = [...products];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true
  });

  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = (direction: 'next' | 'prev') => {
    if (scrollInterval.current) return;
    
    const scroll = () => {
      if (emblaApi) {
        if (direction === 'next') {
          if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
          } else {
            stopAutoScroll();
          }
        } else {
          if (emblaApi.canScrollPrev()) {
            emblaApi.scrollPrev();
          } else {
            stopAutoScroll();
          }
        }
      }
    };

    // Initial scroll
    scroll();
    // Continuous scroll
    scrollInterval.current = setInterval(scroll, 800);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="galeria" className="relative py-32 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 px-8 md:px-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.4em] text-brand-blue-deep/40 mb-6 block font-semibold">
              Ediciones Limitadas
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-blue-deep leading-tight">
              Diseño <span className="italic text-brand-gold font-light">hecho a mano</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollPrev}
              onMouseEnter={() => startAutoScroll('prev')}
              onMouseLeave={stopAutoScroll}
              className="w-16 h-16 rounded-full border border-brand-blue-sky/20 flex items-center justify-center text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white transition-all duration-500 group outline-none"
              aria-label="Ver diseño anterior"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={scrollNext}
              onMouseEnter={() => startAutoScroll('next')}
              onMouseLeave={stopAutoScroll}
              className="w-16 h-16 rounded-full border border-brand-blue-sky/20 flex items-center justify-center text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white transition-all duration-500 group outline-none"
              aria-label="Ver siguiente diseño"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative group/carousel px-4 md:px-8">
          {/* Edge Hover Triggers */}
          <div 
            onMouseEnter={() => startAutoScroll('prev')}
            onMouseLeave={stopAutoScroll}
            className="absolute left-0 top-0 bottom-0 w-20 z-20 cursor-w-resize hidden lg:block"
          />
          <div 
            onMouseEnter={() => startAutoScroll('next')}
            onMouseLeave={stopAutoScroll}
            className="absolute right-0 top-0 bottom-0 w-20 z-20 cursor-e-resize hidden lg:block"
          />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-8">
              {shuffledProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
