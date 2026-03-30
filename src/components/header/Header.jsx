import React, { useState } from 'react';
import {
    MapPin,
    Phone,
    ChevronDown,
    Search,
    User,
    Heart,
    ShoppingCart,
    Menu,
    X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart, favorites } = useApp();
    
    const navLinks = [
        { name: 'Оплата', href: '/payment' },
        { name: 'Доставка', href: '/delivery' },
        { name: 'Поставщикам', href: '/suppliers' },
        { name: 'Статьи', href: '/articles' },
        { name: 'Контакты', href: '/contacts' },
    ];

    const categories = ['Ванны', 'Раковины'];

    return (
        <header className="w-full font-sans shadow-sm bg-[#E1EEFB]">
            {/* 1. Верхняя панель */}
            <div className="py-2 border-b border-slate-200 hidden sm:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm text-slate-600">
                    <Link to="/" className="">
                        <div className="flex-shrink-0 flex items-center gap-1 scale-90 sm:scale-100">
                            <div className="text-blue-800 font-black italic px-2 py-1 text-xl md:text-2xl rounded">GG</div>
                            <div className="bg-red-500 text-white font-bold px-3 py-1 text-lg md:text-xl rounded uppercase tracking-tighter">
                                Promarket
                            </div>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                            <MapPin size={14} className="text-yellow-500" />
                            <span className="border-b border-dotted border-slate-400">Москва</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800">8 495 018-32-10</span>
                            <button className="hidden md:inline-block border-b border-dotted border-slate-400 hover:text-blue-600 transition">
                                Заказать звонок
                            </button>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className="hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* 2. Основная панель */}
            <div className="border-b lg:border-none">
                <div className="container mx-auto px-4 py-3 lg:py-5">
                    <div className="flex items-center justify-between gap-4">

                        {/* Бургер для мобилки */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-blue-800"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        {/* Кнопки каталога и акций (десктоп) */}
                        <div className="relative hidden lg:flex">
                            <button
                                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                                className="bg-[#004C93] hover:bg-blue-900 text-white px-5 py-3 flex items-center gap-3 transition font-medium uppercase text-sm"
                            >
                                {isCatalogOpen ? <X size={18} /> : <Menu size={18} />}
                                КАТАЛОГ
                            </button>
                            <button className="bg-[#1061AB] hover:bg-blue-900 text-white px-5 py-3 flex items-center gap-3 transition font-medium uppercase text-sm">
                                АКЦИИ
                            </button>
                            <button className="bg-[#2B7BC6] hover:bg-blue-900 text-white px-5 py-3 flex items-center gap-3 transition font-medium uppercase text-sm">
                                БРЕНДЫ
                            </button>

                            {isCatalogOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-slate-100 z-50 py-2 rounded-md">
                                    {categories.map((cat) => (
                                        <div key={cat} className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors border-b last:border-0 border-slate-50">
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Поиск */}
                        <div className="bg-white hidden md:flex flex-grow max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Что вы ищете?"
                                className="w-full border-2 border-slate-200 rounded-sm py-2 px-4 outline-none focus:border-blue-400 transition"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 cursor-pointer" size={20} />
                        </div>

                        {/* Иконки пользователя, избранного и корзины */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* ССЫЛКА НА АВТОРИЗАЦИЮ */}
                            <Link to="/login" className="p-2 hover:bg-slate-100 rounded-full cursor-pointer hidden sm:block">
                                <User size={24} className="text-blue-500" />
                            </Link>

                            <div className="relative p-2 hover:bg-slate-100 rounded-full cursor-pointer">
                                <Heart size={24} className="text-blue-500" />
                                <span className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                                    {favorites.length}
                                </span>
                            </div>

                            <div className="relative p-2 hover:bg-slate-100 rounded-full cursor-pointer">
                                <ShoppingCart size={24} className="text-blue-500" />
                                <span className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                                    {cart.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Поиск для мобилок */}
                    <div className="mt-3 md:hidden relative">
                        <input
                            type="text"
                            placeholder="Поиск товаров..."
                            className="w-full border border-slate-200 rounded-md py-2 px-4 text-sm"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                </div>
            </div>

            {/* 3. Мобильное меню */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-white p-6 animate-in slide-in-from-left duration-300">
                    <div className="flex justify-between items-center mb-8">
                        <div className="font-bold text-xl text-blue-800">Меню</div>
                        <button onClick={() => setIsMobileMenuOpen(false)}><X size={30} /></button>
                    </div>

                    <div className="space-y-6">
                        {/* Добавил вход в мобильное меню */}
                        <Link 
                            to="/login" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 font-bold text-lg border-b pb-2 text-blue-600"
                        >
                            <User size={20} /> Войти в кабинет
                        </Link>

                        <div className="font-bold text-lg border-b pb-2">Каталог</div>
                        {categories.map(cat => (
                            <a key={cat} href="#" className="block text-lg text-slate-700">{cat}</a>
                        ))}

                        <div className="font-bold text-lg border-b pb-2 pt-4">Информация</div>
                        {navLinks.map(link => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-slate-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;