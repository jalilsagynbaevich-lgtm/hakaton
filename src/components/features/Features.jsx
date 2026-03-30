import React from 'react';
import { deliveryIcon, paymentIcon, productsIcon, ratingIcon, warrantyIcon } from '../../assets';



const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: deliveryIcon,
      text: "Быстрая доставка по Москве и в любой регион России",
    },
    {
      id: 2,
      icon: warrantyIcon,
      text: "Все товары имеют официальную гарантию производителя",
    },
    {
      id: 3,
      icon: productsIcon,
      text: "Более 100 000 товаров",
    },
    {
      id: 4,
      icon: paymentIcon,
      text: "Любой способ оплаты",
    },
    {
      id: 5,
      icon: ratingIcon,
      text: "Высокие оценки клиентов",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-8 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuresData.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center lg:flex-col lg:text-center xl:flex-row xl:text-left gap-4 group"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.text}
                  className="w-full h-full object-contain transition-transform group-hover:scale-110" 
                />
              </div>
              
              <p className="text-sm md:text-base text-slate-700 leading-tight font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;