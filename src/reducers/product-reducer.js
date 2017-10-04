import constants from "./../constants";

const { defaultState, types } = constants;

const productReducer = (state = defaultState, action) => {
  let newState;
    switch (action.type) {
      //requestData
      case types.REQUEST_DATA:
        newState = {
          inCart: false
        };
        return newState;
      //receiveProduct
      case types.RECEIVE_DATA:
        newState = {
          data: data
        };
        return newState;
        //selectProduct
    case types.SELECT_PRODUCT:
      newState = {
          data: index
        };
        return newState;
      case types.CART_ADD:
        newState = {
          sku: action.sku,
          update: action.update
        };
        return newState;
      //removeFromCart
      case types.CART_REMOVE:
        newState = {
          sku: action.sku
        };
        return newState
      //updateCartVisible
      case types.CART_VISIBLE:
        newState = {
          cartVisible: action.cartVisible
        };
        return newState;
      default:
        return state;
      }
  }

export default productReducer;
