window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('/utils.CartAPI');
var Cart = require('./components/Cart');
ßß
//Load Mock Product Data into localStorage
ProductData.init();

//Load Mock API call
CartAPI.getProductData();

//Render CartApp Controller Viewß
React.render(
  <FluxCarApp/>,
  document.getElementById('flux-cart')
);
