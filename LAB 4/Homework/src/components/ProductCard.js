import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <div 
        style={{ 
          overflow: 'hidden', 
          borderRadius: '20px 20px 0 0',
          cursor: 'pointer'
        }}
        onClick={handleViewDetails}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3 
          className="product-name"
          onClick={handleViewDetails}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ${product.price.toLocaleString()}
          </span>
          <span className="product-category">
            {product.category}
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginTop: '15px' 
        }}>
          <button
            onClick={handleViewDetails}
            style={{
              flex: '1',
              backgroundColor: 'transparent',
              color: '#3498db',
              border: '2px solid #3498db',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#3498db';
            }}
          >
            View Details
          </button>
          
          <button
            onClick={handleAddToCart}
            style={{
              flex: '1',
              padding: '12px 16px',
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(45deg, #2980b9, #1f4e79)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
