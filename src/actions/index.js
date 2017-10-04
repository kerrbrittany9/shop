import * as types from "./../constants/ActionTypes";

export const requestData = () => ({
  type: types.REQUEST_DATA,
  products
});

export const receiveData = () => ({
  type: types.RECEIVE_DATA,
  data
});

export const selectProductRepo = () => ({
  type: types.SELECT_PRODUCT,
  sku
});

export const addToCart = () => ({
  type: types.CART_ADD,
  products
});

export const removeFromCart = () => ({
  type: types.CART_REMOVE,
  sku
});

export const updateCartVisible = () => ({
  type: types.CART_VISIBLE,
  cartVisible
});

export function getProductData() {
  return function (dispatch) {
    dispatch(requestData());
  } return fetch()
  let data = JSON.parse(localStorage.getItem('product'));
  dispatch(receiveProduct(data));
}
