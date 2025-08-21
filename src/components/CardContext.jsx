import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, {
      ...item,
      cartItemId: Date.now() + Math.random() // Уникальный ID для позиции в корзине
    }
      
    ]);
  };

   const removeFromCart = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  return (
    <CartContext.Provider value={{cart, addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);