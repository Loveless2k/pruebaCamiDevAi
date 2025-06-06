import React, { useState } from 'react';
import { Sparkles, Flame, Snowflake, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('equinoccio');

  const menus = {
    equinoccio: {
      title: 'Equinoccio',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-600',
      description: 'Balance perfecto entre luz y oscuridad',
      dishes: [
        {
          name: 'Aurora Boreal',
          description: 'Salmón curado con algas luminiscentes, acompañado de efectos de luz polar',
          price: '$85'
        },
        {
          name: 'Nebulosa Dulce',
          description: 'Esfera de chocolate que se disuelve con vapores aromáticos de vainilla espacial',
          price: '$45'
        },
        {
          name: 'Jardín Flotante',
          description: 'Vegetales suspendidos en esferas de agua, con aromas de tierra húmeda',
          price: '$65'
        }
      ]
    },
    fuego: {
      title: 'Sinfonía de Fuego',
      icon: Flame,
      color: 'from-red-500 to-orange-600',
      description: 'Intensidad y pasión en cada bocado',
      dishes: [
        {
          name: 'Volcán Interior',
          description: 'Carne wagyu con centro líquido de chile fantasma, acompañado de efectos térmicos',
          price: '$120'
        },
        {
          name: 'Llama Eterna',
          description: 'Postre flameado que baila con luces rojas sincronizadas',
          price: '$55'
        },
        {
          name: 'Cenizas del Dragón',
          description: 'Polvo comestible que cambia de sabor con cada respiración',
          price: '$35'
        }
      ]
    },
    azul: {
      title: 'Noche Azul',
      icon: Snowflake,
      color: 'from-blue-500 to-cyan-600',
      description: 'Serenidad y profundidad oceánica',
      dishes: [
        {
          name: 'Abismo Profundo',
          description: 'Caviar molecular que explota con sabores marinos bajo luces azules',
          price: '$95'
        },
        {
          name: 'Cristal Líquido',
          description: 'Agua destilada de 12 fuentes, servida en copa de hielo sonoro',
          price: '$25'
        },
        {
          name: 'Corrientes Frías',
          description: 'Ceviche que cambia de temperatura mientras se degusta',
          price: '$75'
        }
      ]
    },
    verde: {
      title: 'Bosque Eterno',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      description: 'Conexión pura con la naturaleza',
      dishes: [
        {
          name: 'Raíces Ancestrales',
          description: 'Tubérculos fermentados bajo tierra, con aromas de bosque húmedo',
          price: '$70'
        },
        {
          name: 'Clorofila Pura',
          description: 'Extracto de 20 plantas silvestres en esfera comestible',
          price: '$40'
        },
        {
          name: 'Seta Luminosa',
          description: 'Hongos bioluminiscentes que brillan al contacto con la saliva',
          price: '$85'
        }
      ]
    }
  };

  return (
    <section id="menú" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Menús Estacionales
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada temporada trae nuevas experiencias sensoriales, 
            inspiradas en los ciclos naturales y las emociones humanas.
          </p>
        </div>

        {/* Menu Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menus).map(([key, menu]) => (
            <button
              key={key}
              onClick={() => setActiveMenu(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeMenu === key
                  ? `bg-gradient-to-r ${menu.color} text-white shadow-lg`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <menu.icon size={20} />
              <span>{menu.title}</span>
            </button>
          ))}
        </div>

        {/* Active Menu */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${menus[activeMenu].color} mb-4`}>
              {(() => {
                const IconComponent = menus[activeMenu].icon;
                return <IconComponent className="text-white\" size={24} />;
              })()}
            </div>
            <h3 className="text-3xl font-bold mb-2 text-white">{menus[activeMenu].title}</h3>
            <p className="text-gray-400">{menus[activeMenu].description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {menus[activeMenu].dishes.map((dish, index) => (
              <div
                key={index}
                className="group bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {dish.name}
                  </h4>
                  <span className={`text-lg font-bold bg-gradient-to-r ${menus[activeMenu].color} bg-clip-text text-transparent`}>
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;