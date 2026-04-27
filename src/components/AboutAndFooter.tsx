import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="relative bg-brand-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Text Pane */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-20 bg-brand-blue-sky/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md lg:max-w-xl mx-auto md:mx-0"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-blue-deep/30 mb-8 block font-semibold">
              01 — Nuestra Historia
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-blue-deep mb-8 leading-tight">
              Pasión por el <br className="hidden md:block"/>
              <span className="italic text-brand-blue-sky text-3xl md:text-4xl lg:text-5xl font-light">detalle y lo eterno</span>
            </h2>
            <div className="space-y-6 text-brand-blue-deep/60 leading-relaxed font-light text-sm md:text-base">
              <p>
                En Amor en Flores Bárbara, creemos que la belleza no tiene por qué marchitarse. Nos especializamos en la creación de flores eternas artesanales, meticulosamente realizadas a mano utilizando limpiapipas de alta calidad.
              </p>
              <p>
                Cada pétalo y cada hoja es moldeado con paciencia y amor, resultando en piezas únicas, coloridas y duraderas que transforman cualquier espacio en un jardín que nunca muere.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Pane */}
        <div className="flex-1 relative h-[350px] md:h-auto overflow-hidden">
          <img
            src="/ramo-regalo-manualidades-flores-limpiapipas-1.webp"
            alt="Diseñando un ramo artesanal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue-deep/10" />
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-blue-deep text-white py-6 md:py-3 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-brand-blue-sky/5 pb-6 lg:pb-3">
          <a href="#" className="flex items-center gap-4 md:gap-6 group">
            <img 
              src="/logoamorenflores.png" 
              alt="Logotipo de Amor en Flores Bárbara" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-700 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-serif tracking-tight">Amor en Flores</span>
              <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] opacity-40 text-brand-blue-sky">BÁRBARA</span>
            </div>
          </a>
          <p className="text-sm md:text-lg text-brand-blue-sky/40 leading-relaxed font-light max-w-xl lg:text-right">
            Donde cada pétalo cuenta tu historia. Arte floral eterno para tus instantes únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-8 items-start">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Mapa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#galeria" className="text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">Colección</a></li>
                <li><a href="#nosotros" className="text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">Historia</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Redes</h4>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/amorenfloresbarbara" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://wa.me/5491155121698" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:text-right">
            <h4 className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Contacto</h4>
            <div className="space-y-3 flex flex-col lg:items-end">
              <a href="mailto:amorenfloresbarbara@gmail.com" className="flex items-center gap-3 text-sm md:text-base text-brand-blue-sky/60 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="break-all">amorenfloresbarbara@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm md:text-base text-brand-blue-sky/60">
                <MapPin size={16} />
                <span>CABA, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-brand-blue-sky/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] md:text-sm text-brand-blue-sky/30 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Amor en Flores Bárbara.
          </p>
          <div className="flex gap-6 md:gap-10">
            <Link to="/terminos" className="text-[11px] md:text-sm text-brand-blue-sky/30 uppercase tracking-widest hover:text-white transition-colors">Términos</Link>
            <Link to="/privacidad" className="text-[11px] md:text-sm text-brand-blue-sky/30 uppercase tracking-widest hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
