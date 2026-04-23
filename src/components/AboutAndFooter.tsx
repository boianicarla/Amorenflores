import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="relative bg-brand-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Text Pane */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-24 bg-brand-blue-sky/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue-deep/30 mb-10 block font-semibold">
              01 — Nuestra Historia
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-brand-blue-deep mb-10 leading-tight">
              Pasión por el <br/>
              <span className="italic text-brand-blue-sky text-3xl lg:text-5xl font-light">detalle y lo eterno</span>
            </h2>
            <div className="space-y-6 text-brand-blue-deep/60 leading-loose font-light">
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
        <div className="flex-1 relative h-[400px] md:h-auto overflow-hidden">
          <img
            src="/ramo-regalo-manualidades-flores-limpiapipas-1.webp"
            alt="Diseñando un ramo artesanal"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue-deep/10" />
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-blue-deep text-white py-32 px-8 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32 items-start">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-4 group">
              <img 
                src="/logoamorenflores.png" 
                alt="" 
                className="w-10 h-10 rounded-full transition-all duration-700 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-serif tracking-tight">Amor en Flores</span>
                <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 text-brand-blue-sky">BÁRBARA</span>
              </div>
            </a>
            <p className="text-sm text-brand-blue-sky/40 leading-relaxed font-light max-w-xs">
              Donde cada pétalo cuenta tu historia. Creamos arte floral eterno diseñado exclusivamente para capturar la esencia de tus instantes únicos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Mapa</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-brand-blue-sky/60 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#galeria" className="text-sm text-brand-blue-sky/60 hover:text-white transition-colors">Colección</a></li>
                <li><a href="#nosotros" className="text-sm text-brand-blue-sky/60 hover:text-white transition-colors">Historia</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Redes</h4>
              <ul className="space-y-3">
                <li><a href="https://www.instagram.com/amorenfloresbarbara" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue-sky/60 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://wa.me/5491155121698?text=Hola!%20Vengo%20desde%20la%20web%20de%20Amor%20en%20Flores%20B%C3%A1rbara%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta." target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue-sky/60 hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-blue-sky/20">Contacto</h4>
            <div className="space-y-4">
              <a href="mailto:amorenfloresbarbara@gmail.com" className="flex items-center gap-3 text-sm text-brand-blue-sky/60 hover:text-white transition-colors">
                <Mail size={16} />
                <span>amorenfloresbarbara@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-brand-blue-sky/60">
                <MapPin size={16} />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-brand-blue-sky/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-blue-sky/30 uppercase tracking-widest">
            © {new Date().getFullYear()} Amor en Flores Bárbara. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-brand-blue-sky/30 uppercase tracking-widest hover:text-white transition-colors">Términos</a>
            <a href="#" className="text-[10px] text-brand-blue-sky/30 uppercase tracking-widest hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
