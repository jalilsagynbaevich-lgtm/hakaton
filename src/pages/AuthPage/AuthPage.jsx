import React, { useState } from 'react';

const AuthPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        passportNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Попытка входа:', formData);
    };

    return (
        <div className="py-10 flex justify-center items-center bg-slate-100 min-h-screen">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md border border-slate-200">

                <div className="bg-[#2b7bc6] py-6 px-6 text-center">
                    <h2 className="text-white font-bold text-xl uppercase tracking-widest">
                        Вход в систему
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5 text-slate-700">

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-xs uppercase tracking-wider text-slate-500">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            className="w-full bg-[#f1f5f9] border border-slate-200 rounded-md p-3 focus:ring-2 focus:ring-[#2B7BC6] outline-none transition-all"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-xs uppercase tracking-wider text-slate-500">Паспорт</label>
                        <input
                            type="password"
                            name="passportNumber"
                            placeholder="Серия и номер"
                            className="w-full bg-[#f1f5f9] border border-slate-200 rounded-md p-3 focus:ring-2 focus:ring-[#2B7BC6] outline-none transition-all"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#2B7BC6] hover:bg-[#2469a8] text-white font-bold py-4 px-6 rounded-md transition duration-200 uppercase text-sm shadow-md active:scale-[0.98]"
                        >
                            Войти
                        </button>
                    </div>

                    <div className="text-center pt-2">
                        <a href="#" className="text-xs text-slate-400 hover:text-[#2B7BC6] transition-colors underline">
                            Забыли данные или возникли проблемы?
                        </a>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AuthPage;