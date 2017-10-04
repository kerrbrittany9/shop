import React from 'react';
import Product from './Product';
import Cart from './Cart';
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







  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        <FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
      </div>
    );
  },
