import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { mockProducts, priceRanges } from '../data/mockData';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
      if (priceRange) {
        filtered = filtered.filter(product => 
          product.price >= priceRange.min && product.price <= priceRange.max
        );
      }
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to  BCU Store Premium</h1>
          <p>
            Discover the finest selection of premium products from top brands worldwide. 
            From cutting-edge electronics to luxury accessories, we've got everything you need.
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Filter Section */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={setSelectedPriceRange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Results Summary */}
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,248,255,0.9))',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{
            margin: 0,
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            {filteredProducts.length > 0 ? (
              <>
                ✨ Showing <strong>{filteredProducts.length}</strong> premium product{filteredProducts.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </>
            ) : (
              <>🔍 No products found with current filters</>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid" style={{ paddingBottom: '60px' }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🛍️</div>
            <h3 style={{
              color: '#6c757d',
              margin: '0 0 15px 0',
              fontSize: '1.5rem'
            }}>
              No products found
            </h3>
            <p style={{
              color: '#6c757d',
              margin: '0 0 25px 0',
              fontSize: '1.1rem'
            }}>
              Try adjusting your search criteria or browse our full catalog
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="btn-primary"
            >
              🔄 Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
