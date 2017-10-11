import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from './../actions';
import ProductList from './ProductList';
import * as types from "./../constants/ActionTypes";




class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event) {
    const { dispatch } = this.props;
    const action = {
      type: types.ADD_CART,
      image: this.props.image,
      price: this.props.price,
      sku: this.props.products.sku,
      name: this.props.products.name
    }
    dispatch(action);
  }

  render() {
    return (
      <div>
        <h1>Meet the Mats</h1>
        <div>
          <ProductList
            product={this.props.products}
            key={this.props.products.sku}
            handleAddToCart={this.handleAddToCart}
            />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.store,
    handleAddToCart: PropTypes.func
  }
}

export default connect(mapStateToProps)(Product);
