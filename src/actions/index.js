import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

export const addToCart = (sku, product, image, price) => ({
  type: types.CART_ADD,
  inCart: true,
  image: image,
  price: price,
  sku: sku,
  product: product
});
