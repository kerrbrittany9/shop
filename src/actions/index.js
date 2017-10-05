import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

export const addToCart = (sku, product) => ({
  type: types.CART_ADD,
  inCart: true,
  sku: sku,
  product
});
