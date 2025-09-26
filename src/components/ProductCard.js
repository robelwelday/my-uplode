import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name.en} />
      <h3>{product.name.en}</h3>
      <p>{product.description.en}</p>
      {product.available && <p>Available</p>}
    </div>
  );
};

export default ProductCard;