import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col md:flex-row">
      {/* Media Pane */}
      <div className="relative flex-1 bg-brand-pastel overflow-hidden h-1/2 md:h-full">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="/ramo1.webp" 
            alt="Detalle de flores artesanales" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 bg-brand-blue-deep/20 mix-blend-overlay" />
      </div>

      {/* Content Pane */}
      <div className="flex-1 bg-brand-cream relative z-10 flex flex-col justify-center px-10 md:px-20 py-24 pt-32 lg:pt-52 h-1/2 md:h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6,
              },
            },
          }}
          className="max-w-xl"
        >
          <div className="flex flex-col items-start mb-16">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-[11px] uppercase tracking-[0.4em] text-brand-blue-deep mb-10 font-bold opacity-80"
            >
              Hecho a mano en Argentina
            </motion.span>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 1, ease: "easeOut" } 
                }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
              className="text-5xl lg:text-7xl font-serif text-brand-blue-deep mb-12 leading-[0.95] tracking-tight"
            >
              Diseño floral <br className="hidden lg:block"/>
              <span className="italic text-brand-gold font-light">que trasciende</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              animate={{
                opacity: [1, 0.8, 1],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }
              }}
              className="text-lg md:text-xl text-brand-blue-deep mb-16 font-light leading-relaxed max-w-md"
            >
              Artesanía hecha a mano, diseñada para acompañarte en esas historias que merecen durar toda la vida.
            </motion.p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#D4AF37" }}
              whileTap={{ scale: 0.90 }}
              animate={{
                y: [0, -3, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }
              }}
              href="#galeria"
              className="w-full sm:w-auto text-center px-10 py-5 bg-black text-white text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 rounded-full shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center gap-2"
            >
              Explorar Colección
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "black", color: "white" }}
              whileTap={{ scale: 0.90 }}
              animate={{
                y: [0, -3, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4.5
                }
              }}
              href="#nosotros"
              className="w-full sm:w-auto text-center px-10 py-5 border border-black/10 text-brand-navy text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 rounded-full"
            >
              Nuestra Historia
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-brand-navy/60"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-brand-navy/10 relative overflow-hidden">
          <motion.div
            animate={{ y: [-64, 64] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
