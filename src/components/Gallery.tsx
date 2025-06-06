import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      title: 'Aurora Nocturna',
      description: 'Luces danzantes que acompañan cada sabor',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Iluminación'
    },
    {
      title: 'Jardín Suspendido',
      description: 'Elementos naturales flotando en armonía',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Atmósfera'
    },
    {
      title: 'Cristales Sonoros',
      description: 'Vajilla que resuena con frecuencias únicas',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Audio'
    },
    {
      title: 'Mesa Holográfica',
      description: 'Superficies que cobran vida con cada plato',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Tecnología'
    },
    {
      title: 'Vapores Aromáticos',
      description: 'Fragancias que envuelven cada experiencia',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Aromas'
    },
    {
      title: 'Ritual de Fuego',
      description: 'Elementos pirotécnicos controlados',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Espectáculo'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="galería" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Galería de Experiencias
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada ambiente está diseñado para despertar emociones específicas 
            y crear memorias imborrables
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-3xl">
            <img
              src={experiences[currentSlide].image}
              alt={experiences[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {experiences[currentSlide].category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {experiences[currentSlide].title}
              </h3>
              <p className="text-xl text-gray-200 max-w-2xl">
                {experiences[currentSlide].description}
              </p>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                <Play className="text-white ml-1 group-hover:scale-110 transition-transform duration-300" size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
                currentSlide === index
                  ? 'ring-2 ring-purple-500 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-xs text-white font-semibold truncate">
                  {experience.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
            Ver Video Completo de la Experiencia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;