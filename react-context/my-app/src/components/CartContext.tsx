import React, { createContext, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};
export const CartContext = createContext(defaultCartValue);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    function newCart(oldCart: Product[]): Product[] {
      return [...oldCart, product];
    }
    setCart(newCart(cart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
