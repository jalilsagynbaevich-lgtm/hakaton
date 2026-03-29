import React, { useState, useEffect } from 'react';

const TileCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://69c94b5a68edf52c954e679f.mockapi.io/api/v1/plitki')
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setLoading(false);
      })
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  if (loading) return <div className="container mx-auto px-4 py-10">Загрузка коллекций...</div>;

  // Берем первые 5 коллекций для сетки
  const displayItems = collections.slice(0, 5);

  return (
    <section className="container mx-auto px-4 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-blue-600 inline-block pb-1">
          Коллекции плитки
        </h2>
      </div>

      {/* Сетка как на фото */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[auto] md:h-[600px]">
        
        {displayItems.map((col, index) => {
          // Первая карточка большая (занимает 2 колонки и 2 ряда)
          const isLarge = index === 0;
          
          return (
            <div
              key={col.collection_id}
              onClick={() => console.log("Переход в коллекцию:", col.collection_id)}
              className={`relative overflow-hidden group cursor-pointer rounded-sm shadow-sm 
                ${isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}
            >
              {/* Фоновое изображение (берем первое из items или заглушку) */}
              <img
                src={col.image || 'https://via.placeholder.com/600x400'}
                alt={col.collection_name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Оверлей с инфо */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-block bg-[#48BDB8] text-white px-4 py-2 text-xl font-bold mb-1 shadow-lg">
                  {col.collection_name}
                </div>
                <div className="text-white text-sm font-medium drop-shadow-md bg-black/20 w-fit px-2 py-0.5 rounded-sm">
                  {col.brand}
                </div>
              </div>

              {/* Эффект при наведении (рамка) */}
              <div className="absolute inset-0 border-0 group-hover:border-[10px] border-white/20 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TileCollections;