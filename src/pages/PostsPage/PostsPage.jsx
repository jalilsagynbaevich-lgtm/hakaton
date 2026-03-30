import React from 'react';
import { Link } from 'react-router-dom';

const PostsPage = () => {
  // Массив с данными статей для удобства
  const posts = [
    {
      id: 1,
      title: "Когда необходим циркуляционный насос для полотенцесушителя?",
      description: "Циркуляционный насос для полотенцесушителя: виды, в каких случаях необходим, запрет на установку, преимущества и недостатки...",
      image: "https://teplozon.com.ua/uploads/Artikle_tmp/NEW/montazh-cirkuljacionnyj-nasos-dlja-otoplenija.jpg?1473457995046" // Замените на реальные фото
    },
    {
      id: 2,
      title: "Напольный полотенцесушитель: краткий обзор приспособления, преимущества и недостатки",
      description: "Особенности и понятия напольного полотенцесушителя, основные виды, преимущества и недостатки",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "Как отключить полотенцесушитель в ванной комнате в период ремонта?",
      description: "Отключение полотенцесушителя в ванной комнате в период ремонта: причины, основные действия по отключению и особенности",
      image: "https://ggpromarket.ru/uploads/data/blog/122333.jpg"
    },
    {
      id: 4,
      title: "В каких случаях необходимо выполнить заземление полотенцесушителя из нержавеющей стали?",
      description: "Понятие заземления, проблемы, возникающие при отсутствии соединения с землей, необходимость выполнения заземления",
      image: "https://s6.stc.all.kpcdn.net/expert/wp-content/uploads/2022/01/tild6235-3139-4161-b137-626164336130__900-2-960x540.jpg"
    },
    {
      id: 5,
      title: "Профессиональные советы для тех, кто решился на самостоятельную укладку плитки",
      description: "Профессиональные советы для тех, кто решился на самостоятельную укладку плитки",
      image: "https://ggpromarket.ru/uploads/cache/data/blog/120fa32a47d96f6e860d6c6f6e035813-360x240.jpg"
    },
    {
      id: 6,
      title: "Укладка плитки на пол своими руками: технология и основные этапы",
      description: "Укладка плитки на пол своими руками: подготовка пола, разметка основания, подготовка клеевой основы, укладка плитки, затирка...",
      image: "https://andraus.ru/wp-content/uploads/2013/09/Ukladka-plitki-svoimi-rukami-e1591614592212.jpg"
    }
    // Можно добавить остальные статьи по аналогии
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Заголовок */}
      <h1 className="text-2xl font-bold mb-8 border-b pb-4">Блог</h1>

      {/* Сетка статей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col group cursor-pointer">
            {/* Изображение */}
            <div className="aspect-video mb-4 overflow-hidden bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Контент */}
            <h2 className="text-[16px] font-bold leading-snug mb-3 text-blue-800 hover:text-blue-600 transition-colors">
              <Link to={`/articles/${post.id}`}>{post.title}</Link>
            </h2>
            
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;