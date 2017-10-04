import * as types from "./../constants/ActionTypes";

export const requestData = () => ({
  type: types.REQUEST_DATA,
});

export const receiveData = () => ({
  type: types.RECEIVE_DATA,
});

export const selectProductRepo = () => ({
  type: types.SELECT_PRODUCT,

});

export const addToCart = () => ({
  type: types.CART_ADD,
});

export const removeFromCart = () => ({
  type: types.CART_REMOVE,

});

export const updateCartVisible = () => ({
  type: types.CART_VISIBLE,
});



//Define actions object

export function getProductData() {
  return function (dispatch) {
    dispatch(requestData());
  } return fetch()
  let data = JSON.parse(localStorage.getItem('product'));
  CartActions.receiveProduct(data);
}
