import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            textAlign: 'center',
            padding: '40px 20px',
            marginTop: '60px'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <h3 style={{ margin: '0 0 16px 0' }}>🛍️ E-Store</h3>
              <p style={{ 
                margin: '0 0 20px 0', 
                opacity: 0.8,
                fontSize: '1.1rem'
              }}>
                Your one-stop shop for amazing products
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}>
                <span>📧 support@estore.com</span>
                <span>📞 1-800-ESTORE</span>
                <span>🏪 Store Locations</span>
              </div>
              <p style={{ 
                margin: 0, 
                opacity: 0.6,
                fontSize: '0.9rem'
              }}>
                © 2025 E-Store. All rights reserved. | React Capstone Project
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
