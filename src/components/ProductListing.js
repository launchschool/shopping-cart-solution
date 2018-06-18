import React, { Component } from 'react';
import Product from './Product';

class ProductListing extends Component {
  render() {
    const { products } = this.props;
    const productList = products.map((product) => {
      return (
        <Product
          onAddToCartClick={this.props.onAddToCartClick}
          key={product.id}
          {...product}
        />
      );
    });
    return (
      <div className="product-listing">
        <h2>Products</h2>
        { productList }
      </div>
    );
  }
}

export default ProductListing;
