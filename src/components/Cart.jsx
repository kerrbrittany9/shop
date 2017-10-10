import React from 'react'
import { connect } from 'react-redux';


class Cart extends React.Component {

  render() {
    return (
      <div>
        <h1>Your Shopping Cart</h1>
        {this.props.cart.map(function(item) {
          return {item}
      })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = state;
  return {
    cart: state
  };
};

export default connect(mapStateToProps)(Cart);
