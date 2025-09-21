import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    return { cartCount: 0, updateCartCount: () => {} };
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const userId = Cookies.get('userId');

  const fetchCartCount = async () => {
    if (!userId) {
      setCartCount(0);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5100/cart/${userId}`);
      setCartCount(response.data.length);
    } catch (error) {
      console.error('Error fetching cart count:', error);
      setCartCount(0);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, [userId]);

  const updateCartCount = () => {
    fetchCartCount();
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};