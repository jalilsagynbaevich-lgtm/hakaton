import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Star, MessageSquare, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext'; 

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const SalesHits = () => {
  const { addToCart, toggleFavorite, favorites } = useApp();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Любые товары');
  const [loading, setLoading] = useState(true);

  const categories = [
    'Любые товары', 'Раковины', 'Ванны', 'Унитазы', 
    'Душевые системы', 'Смесители', 'Зеркала', 
    'Душевые кабины', 'Стиральные машины'
  ];

  useEffect(() => {
    fetch('https://69c949c568edf52c954e6573.mockapi.io/api/v1/hit')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (activeCategory === 'Любые товары') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory, products]);

  if (loading) return <div className="container mx-auto p-10 text-center">Загрузка хитов...</div>;

  return (
    <section className="container mx-auto px-4 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tight border-b-4 border-blue-600 inline-block pb-2 mb-6">
          Хиты продаж
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-[#48BDB8] text-white shadow-md' 
                : 'bg-white text-blue-500 border border-slate-100 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.hits-prev',
            nextEl: '.hits-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-4"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white border border-slate-100 rounded-sm p-4 h-full flex flex-col hover:shadow-xl transition-shadow relative group/card">
                
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                  {product.badge === 'ХИТ' && (
                    <span className="bg-yellow-400 text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter">ХИТ</span>
                  )}
                  {product.badge === 'АКЦИЯ' && (
                    <span className="bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter">АКЦИЯ</span>
                  )}
                </div>

                <button 
                  onClick={() => toggleFavorite(product)}
                  className="absolute top-2 right-2 z-10 p-2 rounded-full hover:bg-slate-50 transition"
                >
                  <Heart 
                    size={20} 
                    className={favorites.some(f => f.id === product.id) ? "fill-red-500 text-red-500" : "text-blue-300"} 
                  />
                </button>

                <div className="relative aspect-square mb-4 overflow-hidden">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover/card:opacity-100 transition flex items-center justify-center pointer-events-none md:pointer-events-auto">
                   
                   <Link to={`/product/${product.id}`} state={product} className="bg-blue-500/80 text-white text-xs font-bold py-2 px-4 rounded-sm backdrop-blur-sm">
                    <button className="bg-blue-500/80 text-white text-xs font-bold py-2 px-4 rounded-sm backdrop-blur-sm hidden md:block">
                      БЫСТРЫЙ ПРОСМОТР
                    </button>
                   </Link>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MessageSquare size={12} />
                      {product.reviews_count}
                    </div>
                  </div>

                  <h3 className="text-sm font-medium text-slate-800 line-clamp-2 mb-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  
                  <p className="text-[11px] text-slate-400 mb-4">{product.country}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.old_price && (
                        <span className="text-xs text-pink-600 line-through font-medium">
                          {product.old_price.toLocaleString()} ₽
                        </span>
                      )}
                      <span className="text-xl font-black text-slate-900 leading-none">
                        {product.price.toLocaleString()} ₽
                      </span>
                    </div>

                    <button 
                      onClick={() => addToCart(product)}
                      className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-sm transition-all whitespace-nowrap"
                    >
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hits-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-100 p-3 rounded-sm shadow-md hover:bg-white transition hidden xl:flex">
          <ChevronLeft size={24} className="text-slate-600" />
        </button>
        <button className="hits-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-slate-100 p-3 rounded-sm shadow-md hover:bg-white transition hidden xl:flex">
          <ChevronRight size={24} className="text-slate-600" />
        </button>
      </div>
    </section>
  );
};

export default SalesHits;
