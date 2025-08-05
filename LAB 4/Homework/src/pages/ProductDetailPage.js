import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { mockProducts } from '../data/mockData';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  const product = mockProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div style={{
        padding: '60px 20px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>Product Not Found</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '30px' }}>
          The product you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isInCart = cartItems.some(item => item.id === product.id);
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      minHeight: '80vh'
    }}>
      {/* Breadcrumb */}
      <div style={{
        marginBottom: '30px',
        fontSize: '14px',
        color: '#7f8c8d'
      }}>
        <span 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', color: '#3498db' }}
        >
          Home
        </span>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ textTransform: 'capitalize' }}>{product.category}</span>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>{product.name}</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start'
      }}>
        {/* Product Image */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Product Info */}
        <div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            {/* Category Badge */}
            <div style={{
              display: 'inline-block',
              backgroundColor: '#ecf0f1',
              color: '#2c3e50',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '20px'
            }}>
              {product.category}
            </div>

            {/* Product Name */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              {product.name}
            </h1>

            {/* Price */}
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#e74c3c',
              marginBottom: '30px'
            }}>
              ${product.price.toLocaleString()}
            </div>

            {/* Description */}
            <div style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#7f8c8d',
              marginBottom: '40px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #3498db'
            }}>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                Product Description
              </h3>
              {product.description}
            </div>

            {/* Add to Cart Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <button
                onClick={handleAddToCart}
                style={{
                  backgroundColor: isInCart ? '#27ae60' : '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flex: '1',
                  maxWidth: '200px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 24px rgba(52, 152, 219, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {isInCart ? `In Cart (${cartItem?.quantity})` : 'Add to Cart'}
              </button>

              {isInCart && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#27ae60',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  <span>✓</span>
                  <span>Added to cart</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <button
                onClick={() => navigate('/cart')}
                style={{
                  backgroundColor: '#f39c12',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                View Cart
              </button>
              
              <button
                onClick={() => navigate('/')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#7f8c8d',
                  border: '2px solid #bdc3c7',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Product Info */}
      <div style={{
        marginTop: '60px',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '20px'
        }}>
          Product Features
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚚</div>
            <h4 style={{ color: '#2c3e50', marginBottom: '8px' }}>Free Shipping</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px', margin: 0 }}>
              Free delivery on orders over $100
            </p>
          </div>
          
          <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔄</div>
            <h4 style={{ color: '#2c3e50', marginBottom: '8px' }}>Easy Returns</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px', margin: 0 }}>
              30-day return policy
            </p>
          </div>
          
          <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
            <h4 style={{ color: '#2c3e50', marginBottom: '8px' }}>Warranty</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px', margin: 0 }}>
              1-year manufacturer warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
