import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1>🛒 Your Shopping Cart</h1>
          </div>
          
          <div className="empty-cart">
            <div className="empty-cart-icon">🛍️</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/" className="btn-primary">
              ✨ Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>🛒 Your Shopping Cart</h1>
          <p className="cart-subtitle">
            {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <div className="cart-item-category">
                    <span className="category-badge">{item.category}</span>
                  </div>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item-price">
                    <div className="price-per-item">${item.price.toFixed(2)} each</div>
                    <div className="price-total">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                    title="Remove from cart"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>📋 Order Summary</h2>
              
              <div className="summary-line">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span>Estimated Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-line summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn-primary checkout-btn">
                🚀 Proceed to Checkout
              </Link>
              
              <Link to="/" className="btn-secondary continue-shopping">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
