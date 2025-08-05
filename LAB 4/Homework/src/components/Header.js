import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛍️ BCU Store Premium
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            🏠 Home
          </Link>

          <Link to="/cart" className="nav-link" style={{ position: 'relative' }}>
            🛒 Cart
            {getTotalItems() > 0 && (
              <span className="cart-badge">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
