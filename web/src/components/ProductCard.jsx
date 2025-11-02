import React from 'react'

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
    </div>
  )
}

export default ProductCard