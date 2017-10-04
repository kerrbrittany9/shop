import React from 'react';
import { connect } from 'react-redux';

// Flux product view
class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  // Add item to cart via Actions
  addToCart(event){
    dispatch(addToCart(sku, update));
    dispatch(updateCartVisible(true));
  }

  // Select product variation via Actions
  selectVariant(event){
    dispatch(selectProduct(event.target.value));
  }

  render() {
    return (
      <div>
          <h1>{this.props.products.name}</h1>
          <p>{this.props.products.description}</p>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Product);
