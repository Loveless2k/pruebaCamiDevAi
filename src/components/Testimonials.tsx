import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lo más parecido a comer en otro planeta. Cada bocado fue una revelación sensorial que desafió todo lo que creía saber sobre la gastronomía.",
      author: "Isabella Martínez",
      role: "Crítica Gastronómica",
      rating: 5,
      image: "https://images.pexels.com/photos/3764580/pexels-photo-3764580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "Una experiencia transformadora. La sincronización entre sabores, luces y sonidos crea memorias que perduran mucho después de la última cucharada.",
      author: "Marcus Chen",
      role: "Chef Michelin",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "Nunca pensé que la comida pudiera hacerme llorar de emoción. Esta no es solo una cena, es un viaje espiritual a través de los sentidos.",
      author: "Elena Rodríguez",
      role: "Artista Visual",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Testimonios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Las experiencias de nuestros huéspedes hablan por sí solas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105">
                {/* Quote */}
                <div className="text-6xl text-purple-400/30 font-serif mb-4">"</div>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-purple-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="text-8xl text-purple-400/20 font-serif mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed mb-8">
              Una sinfonía para todos los sentidos que redefine completamente 
              lo que significa 'experiencia gastronómica'
            </blockquote>
            <cite className="text-purple-400 text-lg">— Food & Wine Magazine</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;