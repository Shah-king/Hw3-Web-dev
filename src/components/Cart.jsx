// Cart.jsx
import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook
import './Cart.css'; // Import your CSS file here

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart(); // Use the hook to access cart data and functions

  const [isOpen, setIsOpen] = useState(false); // isOpen remains local to Cart component

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cart-toggle-button"
        aria-label="Toggle cart"
      >
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 7H3m4 6v6a1 1 0 001 1h12a1 1 0 001-1v-6M9 17v2a1 1 0 001 1h4a1 1 0 001-1v-2" />
        </svg>
        {getTotalItems() > 0 && (
          <span className="cart-item-count" aria-live="polite">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        {/* Cart Header */}
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="cart-close-button"
            aria-label="Close cart"
          >
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 7H3m4 6v6a1 1 0 001 1h12a1 1 0 001-1v-6M9 17v2a1 1 0 001 1h4a1 1 0 001-1v-2" />
              </svg>
              <p>Your cart is empty</p>
              <p className="cart-empty-subtext">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-button"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-button"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="remove-item-button"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${getTotalPrice()}</span>
            </div>
            <button className="checkout-button">Checkout</button>
            <button
              onClick={clearCart} // Use clearCart from context
              className="clear-cart-button"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Cart;