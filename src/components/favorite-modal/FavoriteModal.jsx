import React from 'react';
import { X, Heart } from 'lucide-react';

const FavoriteModal = ({ isOpen, onClose, favoriteItems }) => {
    if (!isOpen) return null;

    const displayItems = favoriteItems || [];

    return (
        <div 
            className="absolute top-full right-0 mt-2 w-[320px] md:w-[400px] bg-white shadow-2xl rounded-sm border border-slate-100 z-[1000] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} 
        >
            
            <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <h2 className="text-sm font-bold uppercase text-slate-900 tracking-tight">Избранное</h2>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors">
                    <X size={18} />
                </button>
            </div>

            <div className="max-h-[350px] overflow-y-auto p-4 space-y-4">
                {displayItems.length > 0 ? (
                    displayItems.map(item => (
                        <div key={item.id} className="flex gap-3 border-b border-slate-50 pb-3 last:border-0 items-center">
                            <img src={item.image_url} alt={item.name} className="w-12 h-12 object-contain rounded-sm" />
                            <div className="flex-grow">
                                <p className="text-[12px] text-slate-700 font-medium leading-tight line-clamp-2">
                                    {item.name}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-bold text-slate-900">{item.price.toLocaleString()} ₽</span>
                                    {item.old_price && (
                                        <span className="text-[10px] text-slate-400 line-through">{item.old_price.toLocaleString()} ₽</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-8 text-center">
                        <p className="text-sm text-slate-400">В избранном пока пусто</p>
                    </div>
                )}
            </div>

            <div className="p-4 bg-slate-50">
                <button 
                    className="w-full bg-slate-900 hover:bg-black text-white text-sm font-bold py-3 rounded-sm transition-all uppercase"
                    onClick={onClose}
                >
                    Смотреть все товары
                </button>
            </div>
        </div>
    );
};

export default FavoriteModal;