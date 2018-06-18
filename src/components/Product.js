import React from 'react';

const Product = ({id, title, price, quantity, onAddToCartClick}) => {
  const disabledClass = quantity === 0 ? 'disabled' : '';
  const handleAddToCartClick = (e) => {
    if (quantity === 0) return;
    onAddToCartClick(id);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a
            className={`button add-to-cart ${disabledClass}`}
            onClick={handleAddToCartClick}>Add to Cart
          </a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;
