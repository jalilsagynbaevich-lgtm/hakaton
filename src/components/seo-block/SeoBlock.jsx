import React from 'react';
import kitchenImg from '../../assets/seo-kitchen.png'; // Твое фото кухни

const SeoBlock = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-1/2 overflow-hidden rounded-sm">
          <img src={kitchenImg} alt="Interior" className="w-full h-full object-cover shadow-2xl" />
        </div>
        <div className="lg:w-3/5 bg-[#48BDB8] p-8 md:p-16 text-white lg:-ml-20 lg:my-10 relative -z-50 rounded-sm">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight leading-tight">Блок SEO-текста про магазин</h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-90">
            <p>
              GG Promarket — крупный ритейлер сантехнического оборудования, плитки и аксессуаров. 
              Мы нацелены на то, чтобы сделать процесс выбора и покупки сантехники максимально простым и интуитивно понятным.
            </p>
            <p>
              Выбирать оборудование в нашем магазине легко даже тем, кто впервые имеет дело с сантехникой. 
              С нами вы полюбите выбирать!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoBlock;