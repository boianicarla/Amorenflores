import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/#' },
    { name: 'Galería', href: '/#galeria' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12',
        'bg-white py-2 border-b border-brand-blue-sky/10 shadow-sm'
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-2">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-blue-deep p-2 flex-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo Left - Enhanced Presence */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link to="/" className="flex items-center gap-2 md:gap-6 group" aria-label="Ir al inicio">
            <img 
              src="/logoamorenflores.png" 
              alt="Logotipo de Amor en Flores Bárbara - Flores Eternas" 
              className="w-14 h-14 md:w-20 md:h-20 lg:w-[140px] lg:h-[140px] rounded-full transition-all duration-700 shadow-sm border-2 border-brand-gold/10 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl lg:text-4xl font-serif tracking-tight text-brand-blue-deep group-hover:text-brand-gold transition-colors leading-[1.1]">
                Amor en Flores
              </span>
              <span className="text-[7px] md:text-[10px] lg:text-[12px] font-sans uppercase tracking-[0.3em] md:tracking-[0.4em] mt-1 md:mt-2 text-brand-gold/60 font-bold border-t border-brand-gold/20 pt-1">
                BÁRBARA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Right Aligned for Clarity */}
        <div className="hidden lg:flex items-center gap-10 ml-auto mr-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-blue-deep hover:text-brand-gold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Icons Right */}
        <div className="flex items-center gap-2 md:gap-6 flex-none">
          <a 
            href="https://www.instagram.com/amorenfloresbarbara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-blue-deep hover:text-brand-gold transition-all p-2"
            aria-label="Síguenos en Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-ink/5 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium py-2 border-b border-brand-navy/5 last:border-0 text-brand-navy"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
