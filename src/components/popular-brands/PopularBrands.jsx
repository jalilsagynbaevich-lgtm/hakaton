import React from 'react';

import HansLogo from "../../assets/hansgrohe.png"
import GroheLogo from "../../assets/grohe.png"
import StrokiLogo from "../../assets/storki.png"
import AMPMLogo from "../../assets/ampm.png"
import CersanitLogo from "../../assets/cersanit.png"
import GeberitLogo from "../../assets/geberit.png"
import Rocalogo from "../../assets/roca.png"
import VirraLogo from "../../assets/virra.png"
import VilleroyLogo from "../../assets/villeroy.png"
import IdealLogo from "../../assets/idealstandart.png"
import Aquanika from "../../assets/aquanika.png"
import benneto from "../../assets/benetto.png"
import colombo from "../../assets/colombo.png"
import dyson from "../../assets/dyson.png"
import gorenje from "../../assets/gorenje.png"
import jado from "../../assets/jado.png"
import lvi from "../../assets/lvi.png"
import locatdela from "../../assets/locatdela.png"

const PopularBrands = () => {
  // Список брендов (названия соответствуют твоему скриншоту)
  const brands = [
    { id: 1, name: 'Hansgrohe', logo: HansLogo },
    { id: 2, name: 'Grohe', logo: GroheLogo },
    { id: 3, name: 'Stroki', logo: StrokiLogo },
    { id: 4, name: 'AM.PM', logo: AMPMLogo  },
    { id: 6, name: 'Cersanit', logo:CersanitLogo  },
    { id: 7, name: 'Geberit', logo: GeberitLogo  },
    { id: 8, name: 'Roca', logo: Rocalogo },
    { id: 9, name: 'Virra', logo: VirraLogo },
    { id: 10, name: 'Villeroy', logo: VilleroyLogo },
    { id: 11, name: 'Ideal Standard', logo: IdealLogo },
    { id: 12, name: 'Aquanika', logo: Aquanika },
    { id: 13, name: 'Benetto', logo: benneto },
    { id: 14, name: 'Colombo', logo: colombo },
    { id: 15, name: 'Dyson', logo: dyson },
    { id: 16, name: 'Gorenje', logo: gorenje },
    { id: 17, name: 'Jado', logo: jado },
    { id: 18, name: 'LVI', logo: lvi },
    { id: 19, name: 'Locatdela', logo: locatdela },
  ];


  return (
    <section className="container mx-auto px-4 py-12 bg-[#f8fafc]">
      {/* Заголовок с синей линией как на макете */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-blue-600 inline-block pb-1">
          Популярные бренды
        </h2>
      </div>

      {/* Сетка брендов */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:grid-cols-6 border-t border-l border-slate-100">
        {brands.map((brand) => (
          <div 
            key={brand.id}
            className="flex bg-white items-center justify-center p-8 h-32 border-r border-b border-slate-100 hover:shadow-inner transition-all group cursor-pointer"
          >
            {brand.logo ? (
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
              />
            ) : (
              // Заглушка, если лого еще не импортировано
              <span className="text-slate-400 font-bold group-hover:text-blue-600 transition-colors uppercase text-sm">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBrands;