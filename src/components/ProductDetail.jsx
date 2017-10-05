import React from "react";
import PropTypes from "prop-types";


function ProductDetail(props) {
  var imageStyle = {
    width: '200',
    height: '200'
  }
  return(
    <div>
      <img style={imageStyle} src={props.product.image}/>
      <h4>{props.product.product}</h4>
      <p>${props.product.price}</p>
      <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
    </div>
  )
}

ProductDetail.PropTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func
};

export default ProductDetail;
