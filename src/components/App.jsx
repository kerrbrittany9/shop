import React from 'react';
import Product from './Product';
import Cart from './Cart';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import styles from './../styles/App.css';



function App(props) {

  return (
    <div className = {styles.app}>
    <Header/>
    <div>
        <h1>om</h1>
    </div>
      <Switch>
        <Route exact path="/cart" component={Cart}/>
        <Route path="/products" component={Product}/>
      </Switch>
    </div>

    )
  }
export default App;
