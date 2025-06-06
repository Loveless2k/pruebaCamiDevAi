import React from 'react';
import { Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    'Experiencias',
    'Menús',
    'Reservas',
    'Galería',
    'Contacto',
    'Política de Privacidad'
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              SYNESTHESIA
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Donde cada comida se convierte en un viaje multisensorial 
              que desafía los límites de la gastronomía tradicional.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-400">
                  <div>Av. Gastronómica 123</div>
                  <div>Ciudad Futuro, CF 12345</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-purple-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-SYNC</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-purple-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">reservas@synesthesia.dining</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Horarios</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Lun - Mié</span>
                <span>Cerrado</span>
              </div>
              <div className="flex justify-between">
                <span>Jue - Sáb</span>
                <span>18:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>18:00 - 22:00</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-purple-400">Nota:</strong> Solo con reserva previa. 
                Experiencias limitadas por día.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mantente Conectado
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Sé el primero en conocer nuestras nuevas experiencias sensoriales 
              y eventos exclusivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Synesthesia Dining. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Diseñado para cautivar todos tus sentidos • Creado con pasión por la innovación gastronómica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;