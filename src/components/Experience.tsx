import React from 'react';
import { Eye, Headphones, Wind, Utensils } from 'lucide-react';

const Experience = () => {
  const senses = [
    {
      icon: Eye,
      title: 'Luz Envolvente',
      description: 'Iluminación LED sincronizada que responde a cada sabor y textura, creando paisajes visuales únicos.',
      color: 'from-pink-500 to-rose-400'
    },
    {
      icon: Headphones,
      title: 'Audio 3D',
      description: 'Paisajes sonoros inmersivos que complementan cada plato con frecuencias que potencian el sabor.',
      color: 'from-purple-500 to-violet-400'
    },
    {
      icon: Wind,
      title: 'Aromas Ambientales',
      description: 'Fragancias naturales liberadas en momentos precisos para intensificar la experiencia gustativa.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Utensils,
      title: 'Sabores Únicos',
      description: 'Cocina molecular y técnicas vanguardistas que desafían las expectativas del paladar tradicional.',
      color: 'from-emerald-500 to-teal-400'
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              La Experiencia
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada comida es una sinfonía sensorial cuidadosamente orquestada. 
            Nuestros chefs y diseñadores de experiencias colaboran para crear 
            atmósferas que transforman completamente tu percepción del sabor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {senses.map((sense, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${sense.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <sense.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {sense.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {sense.description}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${sense.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Tecnología al Servicio del Sabor
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Utilizamos sensores biométricos para adaptar la experiencia a tus reacciones en tiempo real. 
              Cada sesión es única, personal e irrepetible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;