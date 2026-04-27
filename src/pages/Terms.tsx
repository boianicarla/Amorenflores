import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/AboutAndFooter';
import { WebmasterFooter } from '../components/WebmasterFooter';
import { motion } from 'motion/react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-brand-blue-deep mb-8">Términos y Condiciones</h1>
            <div className="space-y-6 text-brand-blue-deep/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold mb-3">1. Aceptación de los Términos</h2>
                <p>Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3">2. Productos y Artesanía</h2>
                <p>Nuestros productos son piezas artesanales únicas hechas a mano con limpiapipas y otros materiales. Debido a su naturaleza artesanal, pueden existir ligeras variaciones entre el producto recibido y las imágenes mostradas en el sitio web.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. Propiedad Intelectual</h2>
                <p>Todo el contenido de este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y diseños, es propiedad exclusiva de Amor en Flores Bárbara y está protegido por las leyes de propiedad intelectual internacionales.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. Limitación de Responsabilidad</h2>
                <p>Amor en Flores Bárbara no será responsable por cualquier daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar este sitio web o la compra de productos a través del mismo.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
              </section>

              <p className="pt-8 text-sm opacity-60 italic">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WebmasterFooter />
    </div>
  );
};

export default Terms;
