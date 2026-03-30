import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans text-slate-800">
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition">Главная</Link>
        <span className="mx-2 text-slate-400">›</span>
        <span className="text-slate-800">Контакты</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Контакты</h1>

      <div className="mb-12 text-center">
        <p className="text-xl md:text-2xl font-bold leading-tight">
          Обращаем Ваше внимание что забрать товар на складе можно только <br className="hidden md:block" />
          после подтверждения менеджером! <span className="font-normal text-slate-700">Мы не имеем выставочных <br className="hidden md:block" />
          образцов, склад работает только на отгрузку заказов!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
        <div>
          <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-medium">Адреса</h3>
          <p className="text-xl font-bold">г. Москва, (склад)</p>
        </div>

        <div>
          <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-medium">Время работы</h3>
          <div className="space-y-1 text-sm font-semibold text-slate-600 uppercase">
            <p>Пн - Пт 10:00 - 19:00</p>
            <p className="mt-4">Сб - Вс Выходной</p>
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-medium">Реквизиты</h3>
        </div>
      </div>

      <div className="w-full h-[450px] bg-gray-100 rounded-sm overflow-hidden shadow-inner border border-gray-200">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=37.850000%2C55.750000&z=10" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          title="Yandex Map"
          className="grayscale-[0.2]"
        ></iframe>
      </div>
      
      <div className="mt-4 text-right">
        <a 
          href="https://yandex.ru/maps" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          Открыть в Яндекс Картах
        </a>
      </div>
    </div>
  );
};

export default ContactPage;