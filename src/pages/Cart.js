import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } =
    useContext(CartContext);

  // 🆕 customer details
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const deliveryFee = cart.length > 0 ? 40 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  const placeOrder = () => {
    if (cart.length === 0) return;

    if (!customerName || !phone || !address) {
      alert("Please enter name, phone number and address");
      return;
    }

    // ================= REAL ORDER OBJECT =================
    const newOrder = {
      id: Date.now(),
      customerName,
      phone,
      address,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        qty: item.qty,
        price: item.price,
      })),
      subtotal,
      deliveryFee,
      tax,
      total,
      status: "Pending",
      paymentType: "WhatsApp",
      createdAt: new Date().toISOString(),
    };

    // ================= SAVE TO LOCAL STORAGE =================
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    // ================= WHATSAPP MESSAGE =================
    let message = `🧾 *New Order – Artisan Kitchen*%0A%0A`;

    message += `👤 *Customer:* ${customerName}%0A`;
    message += `📞 *Phone:* ${phone}%0A`;
    message += `📍 *Address:* ${address}%0A%0A`;

    cart.forEach(item => {
      message += `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}%0A`;
    });

    message += `%0A----------------------%0A`;
    message += `Subtotal: ₹${subtotal.toFixed(2)}%0A`;
    message += `Delivery: ₹${deliveryFee.toFixed(2)}%0A`;
    message += `Tax (5%): ₹${tax.toFixed(2)}%0A`;
    message += `*Total: ₹${total.toFixed(2)}*`;

    window.open(
      `https://wa.me/918369488725?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    clearCart();
    setCustomerName("");
    setPhone("");
    setAddress("");
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Add delicious food from the menu</p>
        <a href="/menu" className="back-btn">Browse Menu</a>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-left">
        <div className="cart-header">
          <h2>Your Order</h2>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <div className="qty-control">
                <button onClick={() => updateQty(item.id, item.qty - 1)}>
                  −
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="cart-right">
              <span>₹{(item.price * item.qty).toFixed(2)}</span>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        {/* 🆕 CUSTOMER DETAILS */}
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Tax (5%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <button className="order-btn" onClick={placeOrder}>
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Cart;
