import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.images}
        className="product-img"
        alt={product.title}
      />

      <h1 className="product-title">{product.title}</h1>

      <p className="product-price">
        Price: {product.price}
      </p>

      <p className="product-description">
        {product.description}
      </p>
    </div>
  );
}

export default ProductCard;
