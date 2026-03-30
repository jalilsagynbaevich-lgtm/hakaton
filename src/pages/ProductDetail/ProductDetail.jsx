import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Heart, ShoppingCart, Star, Check, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart, toggleFavorite, favorites } = useApp();

    const product = location.state;

    if (!product) {
        return (
            <div className="container mx-auto p-10 text-center">
                <p className="mb-4">Данные товара не переданы</p>
                <button 
                    onClick={() => navigate('/')}
                    className="text-blue-600 flex items-center justify-center gap-2 mx-auto"
                >
                    <ArrowLeft size={18} /> Вернуться в каталог
                </button>
            </div>
        );
    }

    const isFavorite = favorites.some(fav => fav.id === product.id);

    return (
        <div className="container mx-auto px-4 py-8 bg-white animate-in fade-in duration-500">
            <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate('/')}>Главная</span> 
                <span>{'>'}</span> 
                <span>{product.category}</span> 
                <span>{'>'}</span> 
                <span className="text-slate-800 font-medium truncate max-w-[200px] md:max-w-none">
                    {product.name}
                </span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative border border-slate-100 rounded-lg p-8 flex justify-center items-center bg-white shadow-sm">
                    {product.badge && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                            {product.badge}
                        </span>
                    )}
                    <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="max-w-full h-auto object-contain max-h-[450px] transition-transform hover:scale-105 duration-300" 
                    />
                </div>

                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between items-start">
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-2">{product.brand}</p>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                            {product.name}
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill={i < product.rating ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className="text-slate-400 text-sm font-medium border-l pl-6 border-slate-200">
                            {product.reviews_count} отзывов
                        </span>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-xl">
                        <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-4xl font-black text-slate-900">
                                {product.price?.toLocaleString()} ₽
                            </span>
                            {product.old_price && (
                                <span className="text-xl text-slate-400 line-through decoration-red-400/50">
                                    {product.old_price?.toLocaleString()} ₽
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            В наличии в Бишкеке
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={() => addToCart(product)}
                            className="flex-grow md:flex-[2] bg-[#004C93] hover:bg-blue-900 text-white px-10 py-5 rounded-lg font-black flex items-center justify-center gap-3 transition-all active:scale-95 uppercase text-sm shadow-lg shadow-blue-200"
                        >
                            <ShoppingCart size={22} /> В КОРЗИНУ
                        </button>
                        
                        <button 
                            onClick={() => toggleFavorite(product)}
                            className={`p-5 border-2 rounded-lg transition-all active:scale-95 ${
                                isFavorite 
                                ? 'bg-red-50 border-red-500 text-red-500 shadow-md shadow-red-100' 
                                : 'border-slate-200 text-slate-400 hover:border-red-500 hover:text-red-500'
                            }`}
                        >
                            <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                        </button>
                    </div>

                    <div className="space-y-4 pt-4">
                        <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest border-b pb-2 border-slate-100">Характеристики</h3>
                        <div className="grid grid-cols-2 gap-y-3">
                            <span className="text-slate-500 text-sm">Страна производства:</span>
                            <span className="font-bold text-sm text-slate-800 text-right">{product.country}</span>
                            
                            <span className="text-slate-500 text-sm">Категория товара:</span>
                            <span className="font-bold text-sm text-slate-800 text-right">{product.category}</span>
                            
                            <span className="text-slate-500 text-sm">Артикул:</span>
                            <span className="font-bold text-sm text-slate-800 text-right">#00{product.id}2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;