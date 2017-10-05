import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  var headerStyle = {
    margin: '10',
    height: '100',
    backgroundColor: 'pink',
    color: 'white',
    marginTop: '5px'
  }

  return (
    <div style={headerStyle}>
      <h1>Shop Yoga</h1>
      <br/>
      <Link to="/cart">Cart</Link> | <Link to="/products">Shop</Link>
    </div>
  );
}

export default Header;
