import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const mockSlides = [
    {
      id: 1,
      title: "СМЕСИТЕЛИ RAIBER",
      subtitle: "Немецкое качество уже в наличии",
      buttonText: "ПОДРОБНЕЕ",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "АКРИЛОВЫЕ ВАННЫ",
      subtitle: "Комфорт и долговечность в каждом изгибе",
      buttonText: "КАТАЛОГ",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "МЕБЕЛЬ ДЛЯ ВАННОЙ",
      subtitle: "Стильные решения для хранения",
      buttonText: "СМОТРЕТЬ",
      image: "https://ir.ozone.ru/s3/multimedia-1-3/7264005087.jpg",
    },
    {
      id: 4,
      title: "ИНСТАЛЛЯЦИИ",
      subtitle: "Минимализм и надежность системы",
      buttonText: "ВЫБРАТЬ",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "ДУШЕВЫЕ СИСТЕМЫ",
      subtitle: "Тропический дождь у вас дома",
      buttonText: "АКЦИИ",
      image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-4 h-[380px]">
        
        <div className="w-full lg:w-2/3 relative group overflow-hidden rounded-md shadow-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            pagination={{ 
              clickable: true, 
              el: '.custom-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-white/40 !opacity-100',
              bulletActiveClass: '!bg-white !scale-125'
            }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="h-full w-full"
          >
            {mockSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full w-full flex items-center px-12 md:px-20 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-[#005294]/60 mix-blend-multiply" />
                  
                  <div className="relative z-10 text-white max-w-lg">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 font-light italic opacity-90">
                      {slide.subtitle}
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-12 py-4 font-bold text-sm transition-all hover:px-14 rounded-sm uppercase tracking-widest shadow-lg">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-all transform hover:scale-110">
            <ChevronLeft size={60} strokeWidth={1} />
          </button>
          <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-all transform hover:scale-110">
            <ChevronRight size={60} strokeWidth={1} />
          </button>

          <div className="custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          
          <div className="h-1/2 bg-[#1565AC] relative overflow-hidden p-8 pr-15 flex flex-col justify-center items-end text-center text-white rounded-md hover:brightness-110 transition group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-widest mb-2">Унитазы</h3>
              <p className="text-xl font-bold mb-4 italic text-white/90">до 10 000 ₽</p>
              <span className="text-xs font-bold border-b-2 border-yellow-400 pb-1 uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
                Подробнее
              </span>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-10 -mt-10 rounded-full blur-3xl" />
          </div>

          <div className="h-1/2 bg-[#48BDB8] relative overflow-hidden p-8 pr-15 flex flex-col justify-center items-end text-center text-white rounded-md hover:brightness-105 transition group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 leading-tight">Товары<br/>со скидкой</h3>
              <span className="text-xs font-bold border-b-2 border-white/50 pb-1 uppercase tracking-widest group-hover:border-white transition-colors">
                Смотреть все
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 -ml-10 -mb-10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;