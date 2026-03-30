import React from 'react';
import { Link } from 'react-router-dom';

const ProvidersPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-slate-800">
      {/* Хлебные крошки */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition">Главная</Link>
        <span className="mx-2 text-slate-400">›</span>
        <span className="text-slate-800">Для поставщиков</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-black">Для поставщиков</h1>

      {/* Изображение (контейнеры) */}
      <div className="w-full mb-8 overflow-hidden rounded-sm border border-slate-200">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
          alt="Поставки" 
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Текстовый блок */}
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <p>
          Наша компания динамично развивается на рынке товаров для дома, сантехники, 
          стройматериалов и т.п., мы рады сотрудничеству с любым поставщиком 
          или производителем товаров из нашего направления.
        </p>
        
        <p>
          Для начала сотрудничества и знакомства наша компания создала удобную форму ниже, 
          заполните ее и начинаем наше с Вами благотворное сотрудничество!
        </p>

        <p className="font-medium text-black italic">Удачных продаж!</p>
      </div>

      {/* Форма сотрудничества (упоминается в тексте) */}
      <div className="mt-12 bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200">
        <h3 className="text-xl font-bold mb-6">Стать поставщиком</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="p-3 border border-slate-300 rounded focus:border-blue-500 outline-none"
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            className="p-3 border border-slate-300 rounded focus:border-blue-500 outline-none"
          />
          <input 
            type="text" 
            placeholder="Название компании" 
            className="p-3 border border-slate-300 rounded focus:border-blue-500 outline-none md:col-span-2"
          />
          <textarea 
            placeholder="Краткое описание предложения" 
            rows="4" 
            className="p-3 border border-slate-300 rounded focus:border-blue-500 outline-none md:col-span-2"
          ></textarea>
          <button className="bg-blue-700 text-white font-bold py-3 px-6 rounded hover:bg-blue-800 transition md:w-max">
            Отправить предложение
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProvidersPage;