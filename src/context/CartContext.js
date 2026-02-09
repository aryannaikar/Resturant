import React, { createContext, useEffect, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export const CartContext = createContext();

// 🔑 get or create cartId
function getCartId() {
  let cartId = localStorage.getItem("cartId");

  if (!cartId) {
    cartId = "cart_" + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("cartId", cartId);
  }

  return cartId;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const cartId = getCartId();
  const cartRef = doc(db, "carts", cartId);

  // 🔄 LOAD CART FROM FIRESTORE (REAL-TIME)
  useEffect(() => {
    const unsub = onSnapshot(cartRef, (snap) => {
      if (snap.exists()) {
        setCart(snap.data().items || []);
      }
    });

    return () => unsub();
  }, [cartRef]);

  // 🧱 CREATE CART IF NOT EXISTS
  useEffect(() => {
    const initCart = async () => {
      const snap = await getDoc(cartRef);
      if (!snap.exists()) {
        await setDoc(cartRef, {
          items: [],
          updatedAt: serverTimestamp(),
        });
      }
    };

    initCart();
  }, [cartRef]);

  // ================= ADD TO CART =================
  async function addToCart(item) {
    const exists = cart.find((i) => i.id === item.id);

    let updatedCart;

    if (exists) {
      updatedCart = cart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      updatedCart = [
        ...cart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          qty: 1,
        },
      ];
    }

    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: serverTimestamp(),
    });
  }

  // ================= REMOVE ITEM =================
  async function removeFromCart(id) {
    const updatedCart = cart.filter((i) => i.id !== id);

    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: serverTimestamp(),
    });
  }

  // ================= UPDATE QTY =================
  async function updateQty(id, qty) {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }

    const updatedCart = cart.map((i) =>
      i.id === id ? { ...i, qty } : i
    );

    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: serverTimestamp(),
    });
  }

  // ================= CLEAR CART =================
  async function clearCart() {
    await updateDoc(cartRef, {
      items: [],
      updatedAt: serverTimestamp(),
    });
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
