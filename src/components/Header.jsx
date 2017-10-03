import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <div>
      <h1>Shop Yoga</h1>
      <Link to="/cart">Cart</Link> | <Link to="/products">Shop</Link>
    </div>
  );
}

export default Header;
