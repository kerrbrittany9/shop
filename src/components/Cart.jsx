import React from 'react'
import { connect } from 'react-redux';


// Flux cart view
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = state;
  return {
    masterCart: state
  };
};

export default connect(mapStateToProps)(Cart);
