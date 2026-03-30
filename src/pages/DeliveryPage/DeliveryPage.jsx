import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-slate-800">
      {/* Хлебные крошки */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition">Главная</Link>
        <span className="mx-2 text-slate-400">›</span>
        <span className="text-slate-800">Доставка</span>
      </nav>

      <h1 className="text-3xl font-bold mb-10 text-black">Доставка</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Самовывоз</h2>
        
        <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            Юридическим лицам для получения заказа необходимо иметь при себе 
            доверенность с <span className="font-semibold text-blue-900">синей печатью</span>.
          </p>
        </div>
      </section>

      {/* Дополнительный блок (обычно на таких страницах есть инфо о курьере) */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border border-slate-200 rounded-sm">
          <h3 className="font-bold mb-3 uppercase text-sm text-slate-500 tracking-wider">Сроки</h3>
          <p>Доставка осуществляется в течение 1-3 рабочих дней после подтверждения заказа.</p>
        </div>
        <div className="p-6 border border-slate-200 rounded-sm">
          <h3 className="font-bold mb-3 uppercase text-sm text-slate-500 tracking-wider">Стоимость</h3>
          <p>Рассчитывается менеджером индивидуально в зависимости от веса и габаритов товара.</p>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPage;