import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/AboutAndFooter';
import { WebmasterFooter } from '../components/WebmasterFooter';
import { motion } from 'motion/react';

const Privacy = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-blue-deep mb-8">Política de Privacidad</h1>
            <div className="space-y-6 text-brand-blue-deep/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold mb-3">1. Recopilación de Información</h2>
                <p>En Amor en Flores Bárbara, valoramos su privacidad. Recopilamos información personal solo cuando usted nos la proporciona voluntariamente a través de nuestros canales de contacto (Email, WhatsApp, Instagram) para consultas o pedidos.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3">2. Uso de la Información</h2>
                <p>La información recopilada se utiliza exclusivamente para procesar sus pedidos, responder a sus consultas y mejorar nuestra comunicación con usted. No vendemos ni compartimos su información personal con terceros con fines comerciales.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. Seguridad de los Datos</h2>
                <p>Implementamos medidas de seguridad razonables para proteger su información personal. Sin embargo, tenga en cuenta que ninguna transmisión por Internet es 100% segura.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. Cookies</h2>
                <p>Este sitio web puede utilizar cookies básicas para mejorar la experiencia del usuario. Usted puede configurar su navegador para rechazar todas las cookies si así lo prefiere.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Sus Derechos</h2>
                <p>Usted tiene derecho a solicitar acceso, corrección o eliminación de cualquier información personal que tengamos sobre usted contactándonos directamente a través de nuestros medios oficiales.</p>
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

export default Privacy;
