import React from 'react'
import { connect } from 'react-redux';
import CartStore from '../stores/CartStore';


// Flux cart view
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  // Add change listeners to stores
  componentDidMount(){
    dispatch(addChangeListener(this._onChange));
    dispatch(addChangeListener(this._onChange));
  }

  // Remove change listers from stores
  componentWillUnmount (){
    dispatch(removeChangeListener(this._onChange));
    dispatch(removeChangeListener(this._onChange));
  }

  // Hide cart via Actions
  closeCart () {
    dispatch(updateCartVisible(false));
  }

  // Show cart via Actions
  openCart () {
    dispatch(updateCartVisible(true));
  }

  // Remove item from Cart via Actions
  removeFromCart(sku){
   dispatch(removeFromCart(sku));
   dispatch(updateCartVisible(false));
  }


  render() {
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
          <ul>
            {Object.keys(products).map(function(product){
              return (
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                </li>
              )
            })}
          </ul>
          <span className="total">Total: ${this.props.total}</span>
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterCart: state
  };
};

export default connect(mapStateToProps)(Cart);
