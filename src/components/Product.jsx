import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';
import { addToCart } from './../actions';
import ProductList from './ProductList';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event) {
    const { dispatch } = this.props;
    const { } = this.props;
    console.log(sku);
    this.props.dispatch(addToCart());
  }

  render() {
    return (
      <div>
        <h1>Meet the Mats</h1>
        <div >
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
