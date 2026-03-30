import React from 'react';


const Footer = () => {
  const categories = [
    'Плитка', 'Сантехника', 'Мебель для ванной', 
    'Электроника и бытовая техника', 'Отопление', 'Напольное покрытие'
  ];

  const infoLinks = [
    'Оплата', 'Доставка', 'Поставщикам', 'Статьи', 'Контакты'
  ];

  return (
    <footer className="w-full bg-white pt-12 pb-8 font-sans border-t border-slate-100">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col gap-3">
            {categories.map((item) => (
              <a key={item} href="#" className="text-blue-500 hover:text-blue-700 text-sm transition-colors">
                {item}
              </a>
            ))}
            <div className="mt-6">
              <div className="flex items-center gap-1 mb-2">
                <div className="text-blue-800 font-black italic px-1.5 py-0.5 text-lg rounded">GG</div>
                <div className="bg-red-500 text-white font-bold px-2 py-0.5 text-sm rounded uppercase">Promarket</div>
              </div>
              <p className="text-slate-400 text-xs">© 2020 ggpromarket.ru</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {infoLinks.map((item) => (
              <a key={item} href="#" className="text-blue-500 hover:text-blue-700 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="text-xl font-bold text-slate-800 tracking-tight">
              8 495 018-32-10
            </div>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 text-xs uppercase font-bold rounded-sm hover:bg-blue-50 transition">
              Заказать звонок
            </button>
            <div className="text-xs text-slate-600 space-y-1 mt-2">
              <p><span className="font-semibold">Пн-Пт:</span> 10:00 — 20:00</p>
              <p><span className="font-semibold">Сб:</span> 10:00 — 18:00</p>
              <p><span className="font-semibold text-red-400">Вс:</span> выходной</p>
            </div>
            <div className="flex gap-4 mt-2">
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <div className="text-sm text-slate-700 lg:text-right">
              <p className="font-bold mb-1">Склад:</p>
              <p>Москва, ул. Салтыковская, 6 стр 11</p>
              <a href="mailto:zakaz@ggpromarket.ru" className="text-blue-500 hover:underline block mt-1">
                zakaz@ggpromarket.ru
              </a>
            </div>
            
            <div className="mt-4 border border-orange-200 rounded-lg p-3 flex flex-col items-center bg-white shadow-sm w-fit lg:ml-auto">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-red-500 font-bold text-xs italic">Яндекс</span>
                <span className="text-slate-800 text-xs italic font-medium">маркет</span>
              </div>
              <button className="text-[10px] uppercase font-bold text-slate-500 border-t border-slate-100 pt-1 w-full text-center hover:text-orange-500">
                Оцените магазин
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 space-y-4">
          <p className="text-[10px] leading-relaxed text-slate-400 max-w-5xl">
            Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав запрещено. 
            Сайт носит исключительно информационный характер, и ни при каких условиях не является публичной офертой, определяемой положениями 
            статьи 437(2) Гражданского кодекса Российской Федерации. Наличие и цены уточняйте у наших операторов.
          </p>
          <p className="text-[10px] text-slate-400">
            Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с{' '}
            <a href="#" className="text-blue-400 underline">правилами использования cookie</a>, 
            а также даете <a href="#" className="text-blue-400 underline">согласие на обработку персональных данных</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;