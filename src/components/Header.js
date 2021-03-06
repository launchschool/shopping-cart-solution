import React, { Component } from 'react';
import Cart from './Cart';

class Header extends Component {

  render() {
    return (
      <header>
        <h1>The Shop!</h1>
        <Cart
          cartItems={this.props.cartItems}
          onCheckoutClick={this.props.onCheckoutClick}
        />
      </header>
    )
  }
}

export default Header;
