import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ================= ADD TO CART =================
  function addToCart(item) {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);

      if (exists) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      // enforce clean item shape
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          qty: 1,
        },
      ];
    });
  }

  // ================= REMOVE ITEM =================
  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  // ================= UPDATE QTY =================
  function updateQty(id, qty) {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty } : i
      )
    );
  }

  // ================= CLEAR CART =================
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
