import React from 'react';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail';

function ProductList(props) {
  var matStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '3% 3%'
  }
  return(
    <div style={matStyle}>
      {props.product.map((product, sku) =>
        <ProductDetail
          key={product.sku}
          product={product}
          handleAddToCart={props.handleAddToCart}
          />
      )}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.object,
  handleAddToCart: PropTypes.func
}

export default ProductList;
