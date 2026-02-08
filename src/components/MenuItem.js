import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./MenuItem.css";

function MenuItem({ item }) {
  const { cart, addToCart, updateQty } = useContext(CartContext);

  const cartItem = cart.find(i => i.id === item.id);
  const isDisabled = item.enabled === false;

  return (
    <div className={`menu-card ${isDisabled ? "disabled" : ""}`}>
      <img src={item.image} alt={item.name} />

      <div className="menu-info">
        <h4>{item.name}</h4>
        <p className="desc">Freshly prepared • Chef’s special</p>

        <div className="menu-bottom">
          <span className="price">₹{item.price}</span>

          {/* ADD / QUANTITY CONTROLS */}
          {isDisabled ? (
            <span className="out-of-stock">Out of stock</span>
          ) : !cartItem ? (
            <button
              className="add-btn"
              onClick={() => addToCart(item)}
            >
              Add
            </button>
          ) : (
            <div className="qty-control">
              <button
                onClick={() =>
                  updateQty(item.id, cartItem.qty - 1)
                }
              >
                −
              </button>
              <span>{cartItem.qty}</span>
              <button
                onClick={() =>
                  updateQty(item.id, cartItem.qty + 1)
                }
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
