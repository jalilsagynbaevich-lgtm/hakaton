import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-slate-800">
      {/* Хлебные крошки */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Главная</Link>
        <span className="mx-2 text-slate-400">›</span>
        <span className="text-slate-800">Оплата</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Оплата</h1>

      {/* Основной блок с рамкой */}
      <div className="border border-slate-400 p-6 mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Оплата наличными:</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Производится при получении товара, после осмотра на предмет механических повреждений и заводского брака.
          </p>
          <p className="text-xl font-medium leading-tight">
            При покупке товара по индивидуальному заказу (например гидромассажные ванны) - предоплата 70%.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Безналичный расчет:</h2>
          
          <div className="mb-6">
            <h3 className="text-xl mb-2 font-medium">- для юр. лиц</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              оформите заказ через корзину, прикрепив карточку Вашей организации, на указанный e-mail будет выслан счёт для оплаты.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2 font-medium">- для физ. лиц</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              СБП, оплата картой, так же в редких случаях готовы принять перевод на карту
            </p>
          </div>
        </section>
      </div>

      {/* Блок Обратите внимание */}
      <section className="mt-10">
        <div className="flex items-start gap-2">
          <span className="text-2xl font-bold mt-[-4px]">•</span>
          <h2 className="text-2xl font-bold mb-4">Обратите внимание!</h2>
        </div>
        
        <div className="pl-6 space-y-4">
          <p className="text-[15px] leading-relaxed text-slate-700">
            Претензии к внешнему виду доставленного Вам товара в соответствии со ст. 458 и 459 ГК РФ Вы можете предъявить только до передачи Вам товара продавцом. Ссылки на загрязнённость товара, недостаточную освещённость помещения, поторапливания со стороны экспедиторов и прочие причины, не являются основанием для невыполнения Вами требований ст. 484 ГК РФ.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;