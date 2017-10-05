import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';
import { addToCart } from './../actions';
import ProductDetail from './ProductDetail';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event) {
    event.preventDefault();
    this.props.dispatch(addToCart(product.sku));
  }

  render() {
    var matStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '3% 3%'
  }

    return (
      <div>
        <h1>Meet the Mats</h1>
        <div style={matStyle}>
        {this.props.products.map(function(product, sku) {
          return <ProductDetail
            key={product.sku}
            product={product}
            handleAddToCart={this.handleAddToCart}
            />
        })}
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
