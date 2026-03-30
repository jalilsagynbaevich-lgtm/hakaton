import React from 'react';
import kitchenImg from '../../assets/seo-kitchen.png'; 

const SeoBlock = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-start relative">
        
        <div className="w-full lg:w-[40%] z-20 shadow-2xl rounded-sm overflow-hidden shrink-0">
          <img 
            src={kitchenImg} 
            alt="Interior" 
            className="w-full h-[300px] md:h-[450px] object-cover" 
          />
        </div>

        <div className="w-full lg:w-[60%] flex flex-col z-10 lg:-ml-20 mt-10 lg:mt-16">
          
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight text-slate-900 lg:pl-32">
            Блок SEO-текста про магазин
          </h2>

          <div className="bg-[#48BDB8] text-white p-8 md:p-14 lg:pl-32 pb-24 md:pb-32 rounded-sm shadow-xl">
            
            <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-95 text-left max-w-2xl">
              <p>
             GG Promarket — крупный ритейлер сантехнического оборудования, плитки и аксессуаров. Мы нацелены на то, чтобы сделать процесс выбора 
             и покупки сантехники максимально простым и интуитивно понятным. 
             При создании и обновлении сайта santehnika-online.ru мы продумали логичную структуру каталога,
             организовали систему поиска, снабдили карточки товаров подробными описаниями и характеристиками.

             Выбирать оборудование в нашем магазине легко даже тем, кто впервые имеет дело с сантехникой.
             А уточнить детали и получить информацию 
             о совместимости товаров круглосуточно помогут опытные консультанты нашего контакт-центра. 
             С нами вы полюбите выбирать!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoBlock;