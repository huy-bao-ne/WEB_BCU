import React from 'react';
import { categories, priceRanges } from '../data/mockData';

function ProductFilter({ 
  selectedCategory, 
  onCategoryChange, 
  selectedPriceRange, 
  onPriceRangeChange,
  searchTerm,
  onSearchChange 
}) {
  return (
    <div className="filter-container">
      <h3 className="filter-title">
        🔍 Find Your Perfect Product
      </h3>

      <div className="filter-grid">
        {/* Search Input */}
        <div className="filter-group">
          <label className="filter-label">
            Search Products
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or description..."
            className="filter-input"
          />
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <label className="filter-label">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <label className="filter-label">
            Price Range
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="filter-select"
          >
            {priceRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
