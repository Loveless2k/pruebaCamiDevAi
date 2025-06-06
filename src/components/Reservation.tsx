import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, Mail } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    experience: '',
    dietary: ''
  });

  const experiences = [
    'Equinoccio - Balance de Luz y Oscuridad',
    'Sinfonía de Fuego - Intensidad y Pasión',
    'Noche Azul - Serenidad Oceánica',
    'Bosque Eterno - Conexión Natural'
  ];

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation Data:', formData);
    // Handle form submission
  };

  return (
    <section id="reservas" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Reserva tu Viaje Sensorial
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada experiencia es limitada y personalizada. 
            Reserva con anticipación para asegurar tu lugar en esta aventura gastronómica única.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Detalles de la Reserva</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center">
                    <Clock className="mr-2" size={16} />
                    Hora
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    required
                  >
                    <option value="">Seleccionar</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center">
                    <Users className="mr-2" size={16} />
                    Personas
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    required
                  >
                    <option value="">Seleccionar</option>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Experiencia Preferida</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  required
                >
                  <option value="">Seleccionar Experiencia</option>
                  {experiences.map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Restricciones Alimentarias</label>
                <textarea
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Alergias, preferencias dietéticas, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-purple-400 mr-4" size={20} />
                  <div>
                    <div className="text-white font-semibold">Ubicación</div>
                    <div className="text-gray-300">Av. Gastronómica 123, Ciudad Futuro</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-purple-400 mr-4" size={20} />
                  <div>
                    <div className="text-white font-semibold">Teléfono</div>
                    <div className="text-gray-300">+1 (555) 123-SYNC</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-purple-400 mr-4" size={20} />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">reservas@synesthesia.dining</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Política de Reservas</h3>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Las reservas deben hacerse con mínimo 48 horas de anticipación
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Experiencias limitadas a 6 personas por sesión
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Duración aproximada: 3-4 horas por experiencia
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Se requiere confirmación 24 horas antes
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 text-center">
              <h4 className="text-xl font-bold text-white mb-4">¿Necesitas ayuda?</h4>
              <p className="text-gray-300 mb-6">
                Nuestro equipo de experiencias está disponible para personalizar tu visita
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                Contactar Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;