import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/App.css';

function Header(props) {



  return (
    <div className = { styles.header }>
      <h1>Shop Yoga</h1>
      <br/>
      <Link to="/cart">Cart</Link> | <Link to="/products">Shop</Link>
    </div>
  );
}

export default Header;
