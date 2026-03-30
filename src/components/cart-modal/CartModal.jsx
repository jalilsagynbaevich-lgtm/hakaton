import React from 'react';
import { X } from 'lucide-react';

const CartModal = ({ isOpen, onClose, cartItems }) => {
    if (!isOpen) return null;

    const displayItems = cartItems?.length > 0 ? cartItems : [
        {
            id: 1,
            name: "Мойка Raiber RQ13 круглая, цвет белый",
            image: "/path/to/sink.jpg",
            currentPrice: 3500,
            oldPrice: 3795,
        }
    ];


    const totalPrice = displayItems.reduce((total, item) => total + item.price, 0);


    return (
        <div className="absolute top-full right-0 mt-2 w-[320px] md:w-[400px] bg-white shadow-2xl rounded-sm border border-slate-100 z-[1000] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Заголовок */}
            <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                <h2 className="text-sm font-bold uppercase text-slate-900 tracking-tight">Корзина</h2>
                <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-slate-400 hover:text-red-500">
                    <X size={18} />
                </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-4 space-y-4">
                {displayItems.map(item => (
                    <div key={item.id} className="flex gap-3 border-b border-slate-50 pb-3 last:border-0">
                        <img src={item.image_url} alt="" className="w-12 h-12 object-contain" />
                        <div className="flex-grow">
                            <p className="text-[12px] text-slate-700 leading-tight line-clamp-2">{item.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm font-bold text-slate-900">{item.price} ₽</span>
                                {item.old_price && (
                                    <span className="text-[10px] text-slate-400 line-through">{item.old_price} ₽</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-600">Итого:</span>
                    <span className="text-lg font-black text-slate-900">{totalPrice.toLocaleString()} ₽</span>
                </div>
                <button className="w-full bg-[#2B7BC6] hover:bg-blue-700 text-white text-sm font-bold py-3 rounded-sm transition-all uppercase">
                    Перейти в корзину
                </button>
            </div>
        </div>
    );
};

export default CartModal;

