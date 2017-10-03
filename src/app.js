window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('/utils.CartAPI');
var Cart = require('./components/Cart');

ProductData.init();

CartAPI.getProductData();

React.render(
  <FluxCarApp/>,
  document.getElementById('flux-cart')
);
