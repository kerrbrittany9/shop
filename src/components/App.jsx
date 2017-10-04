import React from 'react';
import Product from './Product';
import Cart from './Cart';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';


function App(props) {

    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/cart" component={Cart}/>
          <Route path="/products" component={Product}/>
        </Switch>
      </div>

    )
  }
export default App;
