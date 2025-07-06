import React, { useState } from 'react';
import './Menu.css'; // make sure this file contains the CSS provided below

export default function Menu() {
  const items = [
    { name: 'Mac and cheese', price: 3.99, image: '/Mac.jpg' },
    { name: 'Fries', price: 3.99, image: '/Fries.jpg' },
    { name: 'Milkshake', price: 4.50, image: '/Milkshake.jpg' },
    { name: 'Chicken Sandwich', price: 5.50, image: '/chicken.jpg' },
    { name: 'Cheeseburger', price: 6.50, image: '/Cheeseburger.jpg' },
    { name: 'Hotdog', price: 2.50, image: '/hotdog.jpg' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <section className="menu-section" id="menu">
        <div className="menu-header">
          <h3>Our Menu</h3>
          <button className="cart-toggle" onClick={() => setIsCartOpen(!isCartOpen)}>
            🛒 {cart.length}
          </button>
        </div>
        <div className="menu-grid">
          {items.map((item) => (
            <div className="menu-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <p>Total: ${getTotal()}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>

      {/* Overlay when sidebar is open */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />}
    </>
  );
}
