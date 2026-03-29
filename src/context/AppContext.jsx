import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- Состояния ---
  const [cart, setCart] = useState([3,4,4,4]);
  const [favorites, setFavorites] = useState([4,5]);
  const [user, setUser] = useState(null);

  // --- Функции для КОРЗИНЫ ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);

      if (isExist) {
        // Если есть — увеличиваем количество
        return prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      // Если нет — добавляем новый с количеством 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  // --- Функции для ИЗБРАННОГО ---
  const toggleFavorite = (product) => {
    setFavorites((prevFavs) => {
      const isExist = prevFavs.find((item) => item.id === product.id);
      if (isExist) {
        return prevFavs.filter((item) => item.id !== product.id);
      }
      return [...prevFavs, product];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavs) => prevFavs.filter((item) => item.id !== productId));
  };

  // --- Функции для ПОЛЬЗОВАТЕЛЯ ---
  const login = (userData) => {
    // Имитация логина — сохраняем данные пользователя (например, имя, почту)
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Значения, которые будут доступны во всем приложении
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    favorites,
    toggleFavorite,
    removeFromFavorites,
    user,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Кастомный хук для удобного использования
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};