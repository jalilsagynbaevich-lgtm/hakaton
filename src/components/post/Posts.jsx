import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://69c94b5a68edf52c954e679f.mockapi.io/api/v1/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Ошибка загрузки статей:", err));
  }, []);

  if (loading) return <div className="container mx-auto p-10">Загрузка статей...</div>;

  return (
    <section className="container mx-auto px-4 py-12 relative group">
      <div className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-blue-600 inline-block pb-1">
          Статьи
        </h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.posts-prev',
            nextEl: '.posts-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="flex flex-col h-full cursor-pointer group/card">
                <div className="aspect-[4/3] overflow-hidden mb-4 rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                </div>
                
                <h3 className="text-[15px] font-bold text-slate-900 leading-snug group-hover/card:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="posts-prev absolute left-[-15px] top-[35%] -translate-y-1/2 z-10 bg-black/5 hover:bg-black/10 p-2 transition-all">
          <ChevronLeft size={24} className="text-slate-800" />
        </button>
        <button className="posts-next absolute right-[-15px] top-[35%] -translate-y-1/2 z-10 bg-black/5 hover:bg-black/10 p-2 transition-all">
          <ChevronRight size={24} className="text-slate-800" />
        </button>
      </div>
    </section>
  );
};

export default Posts;