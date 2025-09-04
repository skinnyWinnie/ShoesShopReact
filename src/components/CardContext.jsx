import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product, size = null, quantity = 1) => {

    setCart(prevCart => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = prevCart.findIndex(item => 
        item.id === product.id && item.size === size
      );

      if (existingItemIndex !== -1) {
        // Если товар уже есть - увеличиваем количество
        const updatedItems = [...prevCart];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Если товара нет - добавляем новый
        return [...prevCart, {
          ...product,
          size: size,
          quantity: quantity,
          cartId: Date.now() // уникальный ID для элемента корзины
        }];
      }
    });
  };
  
const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
      return;
    }

    setCart(prevItems =>
      prevItems.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
 const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

   const removeFromCart = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };

  

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);