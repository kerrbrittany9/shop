import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';
import { addToCart } from './../actions';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event) {
    event.preventDefault();
    this.props.products.dispatch(addToCart());
  }

  render() {
    var matStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '3% 3%'
  }

    var imageStyle = {
      width: '200',
      height: '200'
    }
    return (
      <div>
        <h1>Meet the Mats</h1>
        <ul>
        {this.props.products.map(function(product) {
          return <li key={product.sku}>
            <img style={imageStyle} src={product.image}/>
            <h4>{product.product}</h4>
            <p>${product.price}</p>
            <button onClick={this.handleAddToCart}>Add to Cart</button>
          </li>
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.store
  }
}

export default connect(mapStateToProps)(Product);
