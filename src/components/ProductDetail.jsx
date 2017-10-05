import React from "react";
import PropTypes from "prop-types";


function ProductDetail(props) {
  var imageStyle = {
    width: '200',
    height: '200'
  }

  var buttonStyle = {
    border: 'none',
    backgroundColor: 'white'
  }
  return(
    <div>
      <img style={imageStyle} src={props.product.image}/>
      <h4>{props.product.product}</h4>
      <p>${props.product.price}</p>
      <button style={buttonStyle} onClick={() => props.handleAddToCart(props.product.sku)}>Add to Cart</button>
    </div>
  )
}

ProductDetail.PropTypes = {
  product: PropTypes.object,
  sku: PropTypes.string,
  handleAddToCart: PropTypes.func
};

export default ProductDetail;
