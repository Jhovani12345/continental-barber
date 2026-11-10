import React, { useState } from 'react';
import logoNavbarImg from './assets/logo-continental.jpg'; // Logo completo para la barra de navegación superior
import logoHeroImg from './assets/logo-leon.jpg';         // Logo del león solo para la sección principal (Hero)

// ==========================================
// 1. DATOS DE LOS SERVICIOS DE LA BARBERÍA
// ==========================================
const services = [
  { name: "Corte Clásico / Fade", price: "$150 MXN", desc: "Corte personalizado con máquina y tijera, desvanecido limpio y acabado con navaja." },
  { name: "Corte + Diseño de Barba", price: "$230 MXN", desc: "Incluye corte de cabello a elección, perfilado de barba con toalla caliente y bálsamo." },
  { name: "Servicio VIP Continental", price: "$300 MXN", desc: "Corte, barba completa, mascarilla negra exfoliante y aplicación de pomada premium con aroma." },
  { name: "Afeitado Tradicional", price: "$100 MXN", desc: "Afeitado clásico con espuma caliente, toallas tibias y perfilado con navaja fina." }
];

// ==========================================
// 2. DATOS DEL CATÁLOGO DE POMADAS Y CERAS
// ==========================================
const products = [
  { name: "Eros Versace", type: "Base Agua · Original Semibrillante", aroma: "Inspiración fresca y elegante", color: "border-cyan-500 text-cyan-400" },
  { name: "Invictus", type: "Base Agua · Fuerte Brillante", aroma: "Inspiración deportiva y enérgica", color: "border-gray-400 text-gray-300" },
  { name: "One Million", type: "Base Agua · Fuerte Brillante", aroma: "Inspiración amaderada y especiada", color: "border-red-500 text-red-400" },
  { name: "Lacoste", type: "Base Agua · Original Semibrillante", aroma: "Inspiración clásica y limpia", color: "border-green-500 text-green-400" },
  { name: "Nautica Voyage", type: "Base Agua · Original Semibrillante", aroma: "Inspiración marina y fresca", color: "border-yellow-500 text-yellow-400" },
  { name: "Hugo Boss", type: "Base Agua · Fuerte Brillante", aroma: "Inspiración masculina y profunda", color: "border-amber-600 text-amber-500" },
  { name: "Sandía", type: "Base Agua · Media Semibrillante", aroma: "Aroma frutal dulce y duradero", color: "border-pink-500 text-pink-400" },
  { name: "Mora Azul", type: "Base Agua · Original Semibrillante", aroma: "Aroma frutal intenso", color: "border-purple-500 text-purple-400" }
];

export default function App() {
  // Estado para controlar la apertura y cierre del menú en dispositivos móviles (Responsive)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Número de WhatsApp del negocio (Puedes cambiarlo por el número real del dueño)
  const whatsappNumber = "5215500000000"; 

  // Función auxiliar para generar y abrir enlaces directos a WhatsApp con mensajes personalizados
  const handleWhatsApp = (item) => {
    const message = encodeURIComponent(`¡Hola! Me interesa agendar una cita / comprar el producto: *${item}*. ¿Tienen disponibilidad?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* ========================================== */}
      {/* 3. BARRA DE NAVEGACIÓN (HEADER / NAVBAR)   */}
      {/* ========================================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo completo en la barra superior */}
          <div className="flex items-center gap-3">
            <img 
              src={logoNavbarImg} 
              alt="Continental Barber Shop Logo" 
              className="w-11 h-11 rounded-full object-cover border-2 border-yellow-400 shadow-md"
            />
            <div>
              <span className="text-lg font-bold tracking-wider text-yellow-400 uppercase font-serif block leading-tight">Continental</span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">Barber Shop</span>
            </div>
          </div>

          {/* Enlaces de navegación para pantallas grandes (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-yellow-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-yellow-400 transition-colors">Servicios</a>
            <a href="#productos" className="hover:text-yellow-400 transition-colors">Pomadas Premium</a>
            <a href="#contacto" className="hover:text-yellow-400 transition-colors">Ubicación</a>
          </nav>

          {/* Botón de llamada a la acción en escritorio */}
          <div className="hidden md:block">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20agendar%20una%20cita%20en%20Continental%20Barber%20Shop`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 text-zinc-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-lg hover:bg-yellow-300 transition-all"
            >
              Agendar Cita
            </a>
          </div>

          {/* Botón hamburguesa para abrir menú en celulares */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-zinc-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 flex flex-col gap-4">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1">Inicio</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1">Servicios</a>
            <a href="#productos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1">Pomadas Premium</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1">Ubicación</a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20agendar%20una%20cita`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-zinc-950 font-bold py-2.5 rounded text-center text-sm"
            >
              Agendar Cita por WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ========================================== */}
      {/* 4. SECCIÓN PRINCIPAL (HERO) CON EL LEÓN GRANDE Y CENTRADO */}
      {/* ========================================== */}
      <section id="inicio" className="pt-32 pb-20 md:pt-44 md:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Imagen del león grande y centrada */}
          <div className="mb-8 relative">
            <img 
              src={logoHeroImg} 
              alt="Continental Barber Shop - León" 
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-2xl shadow-yellow-500/20 mx-auto"
            />
          </div>

          {/* Insignia / Eslogan */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold mb-6 uppercase tracking-widest">
            Estilo, Precisión y Presencia
          </div>

          {/* Título principal del negocio */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif max-w-3xl mb-6">
            Continental <span className="text-yellow-400">Barber Shop</span>
          </h1>

          {/* Descripción corta */}
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mb-10">
            Cortes impecables, diseño de barba profesional y nuestra exclusiva línea de pomadas con aromas de alta gama. Eleva tu imagen personal hoy.
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20agendar%20una%20cita`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Reservar mi Cita
            </a>
            <a 
              href="#productos" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium px-8 py-4 rounded-xl text-base transition-all text-center"
            >
              Ver Pomadas y Ceras
            </a>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SECCIÓN DE SERVICIOS Y PRECIOS        */}
      {/* ========================================== */}
      <section id="servicios" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif mb-4">Nuestros Servicios</h2>
            <p className="text-zinc-400">Atención personalizada con herramientas de alta calidad y los mejores barberos de la zona.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-yellow-400/50 transition-all">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{s.name}</h3>
                    <span className="text-yellow-400 font-bold text-lg">{s.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6">{s.desc}</p>
                </div>
                <button 
                  onClick={() => handleWhatsApp(s.name)}
                  className="w-full bg-zinc-800 hover:bg-yellow-400 hover:text-zinc-950 text-zinc-200 font-semibold py-2.5 rounded-lg text-sm transition-colors"
                >
                  Agendar este servicio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. CATÁLOGO DE POMADAS CON AROMA         */}
      {/* ========================================== */}
      <section id="productos" className="py-20 bg-zinc-900/40 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest block mb-2">Línea Exclusiva</span>
            <h2 className="text-3xl font-bold font-serif mb-4">Pomadas y Ceras con Aroma</h2>
            <p className="text-zinc-400">Lleva el estilo contigo todo el día. Fórmulas de base agua con fijación impecable e inspiración en fragancias internacionales.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, idx) => (
              <div key={idx} className={`bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between hover:border-yellow-400/50 transition-all`}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-lg mb-4 border border-zinc-700">
                    💈
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
                  <p className={`text-xs font-semibold mb-2 ${p.color.split(' ')[1]}`}>{p.type}</p>
                  <p className="text-zinc-400 text-xs mb-6">{p.aroma}</p>
                </div>
                <button 
                  onClick={() => handleWhatsApp(`Pomada ${p.name}`)}
                  className="w-full bg-zinc-800 hover:bg-yellow-400 hover:text-zinc-950 text-zinc-200 text-xs font-bold py-2.5 rounded-lg transition-all"
                >
                  Pedir por WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. UBICACIÓN Y CONTACTO                  */}
      {/* ========================================== */}
      <section id="contacto" className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Visítanos en el Local</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Ven a vivir la experiencia Continental. Buen ambiente, excelente música, café o bebida de cortesía mientras transformamos tu look.
              </p>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3 text-zinc-300">
                  <span className="text-yellow-400 text-lg">📍</span>
                  <span>Dirección principal de la Barbería (Calle / Colonia / Municipio)</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <span className="text-yellow-400 text-lg">⏰</span>
                  <span>Lunes a Sábado: 10:00 AM – 8:00 PM | Domingo: 10:00 AM – 4:00 PM</span>
                </div>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Abrir Chat de WhatsApp
              </a>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center flex flex-col items-center justify-center min-h-[280px]">
              <span className="text-4xl mb-3">🗺️</span>
              <h3 className="font-bold text-white mb-2">¿Cómo llegar?</h3>
              <p className="text-zinc-400 text-xs max-w-xs mb-6">Haz clic abajo para abrir la ubicación exacta de la barbería directamente en Google Maps.</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold px-5 py-2.5 rounded-lg transition-all"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. PIE DE PÁGINA (FOOTER)                */}
      {/* ========================================== */}
      <footer className="py-8 bg-black border-t border-zinc-900 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Continental Barber Shop. Desarrollado para impulsar negocios locales.</p>
      </footer>

    </div>
  );
}