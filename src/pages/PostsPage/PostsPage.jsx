import React from 'react';
import { Link } from 'react-router-dom';

const PostsPage = () => {
  // Массив с данными статей для удобства
  const posts = [
    {
      id: 1,
      title: "Когда необходим циркуляционный насос для полотенцесушителя?",
      description: "Циркуляционный насос для полотенцесушителя: виды, в каких случаях необходим, запрет на установку, преимущества и недостатки...",
      image: "https://via.placeholder.com/400x250?text=Насос" // Замените на реальные фото
    },
    {
      id: 2,
      title: "Напольный полотенцесушитель: краткий обзор приспособления, преимущества и недостатки",
      description: "Особенности и понятия напольного полотенцесушителя, основные виды, преимущества и недостатки",
      image: "https://via.placeholder.com/400x250?text=Полотенцесушитель"
    },
    {
      id: 3,
      title: "Как отключить полотенцесушитель в ванной комнате в период ремонта?",
      description: "Отключение полотенцесушителя в ванной комнате в период ремонта: причины, основные действия по отключению и особенности",
      image: "https://via.placeholder.com/400x250?text=Ремонт"
    },
    {
      id: 4,
      title: "В каких случаях необходимо выполнить заземление полотенцесушителя из нержавеющей стали?",
      description: "Понятие заземления, проблемы, возникающие при отсутствии соединения с землей, необходимость выполнения заземления",
      image: "https://via.placeholder.com/400x250?text=Заземление"
    },
    {
      id: 5,
      title: "Профессиональные советы для тех, кто решился на самостоятельную укладку плитки",
      description: "Профессиональные советы для тех, кто решился на самостоятельную укладку плитки",
      image: "https://via.placeholder.com/400x250?text=Плитка"
    },
    {
      id: 6,
      title: "Укладка плитки на пол своими руками: технология и основные этапы",
      description: "Укладка плитки на пол своими руками: подготовка пола, разметка основания, подготовка клеевой основы, укладка плитки, затирка...",
      image: "https://via.placeholder.com/400x250?text=Укладка"
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