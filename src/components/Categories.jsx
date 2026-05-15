import React from 'react';
import './Categories.css';
import { categories } from '../data/ecommerceData';

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="item-count">{category.count}</span>
                </div>
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
