import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Sparkles } from 'lucide-react';

export const SubscriptionSection = () => {
  return (
    <section id="suscripciones" className="py-24 lg:py-32 bg-brand-ink text-brand-cream relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-rose/5 skew-x-12 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-6 block font-medium">
              Suscripciones Mensuales
            </span>
            <h2 className="text-4xl lg:text-7xl font-serif mb-8 leading-[1.1]">
              Un toque de <span className="italic">color</span> eterno en tu hogar
            </h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed max-w-xl">
              Suscríbete para recibir flores eternas artesanales diseñadas exclusivamente para ti. Elige la frecuencia y colecciona piezas únicas hechas a mano con limpiapipas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-sm uppercase tracking-widest font-semibold">Hecho a Mano</h4>
                <p className="text-xs opacity-60">Cada flor es única, creada con limpiapipas.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Heart size={20} />
                </div>
                <h4 className="text-sm uppercase tracking-widest font-semibold">Personalizado</h4>
                <p className="text-xs opacity-60">Elige tus colores y diseños favoritos.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Calendar size={20} />
                </div>
                <h4 className="text-sm uppercase tracking-widest font-semibold">Eterno</h4>
                <p className="text-xs opacity-60">Belleza que dura para siempre, sin cuidados.</p>
              </div>
            </div>

            <button className="px-12 py-4 bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-brand-ink transition-all duration-500 rounded-full">
              Empezar Ahora
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-t-[200px] border-[12px] border-brand-gold/10">
              <img
                src="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=2070&auto=format&fit=crop"
                alt="Subscription Box"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl">
              <span className="text-xs uppercase tracking-widest font-bold mb-1">Desde</span>
              <span className="text-3xl font-serif font-bold">$45</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">Al Mes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
