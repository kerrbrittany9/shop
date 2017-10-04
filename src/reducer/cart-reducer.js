import constants from "./../constants";

const { defaultState, types } = constants;


// Create dispatcher instance
const cartReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
      //addToCart
    case types.CART_ADD:
      newState = {
        sku: sku,
        update: update
      };
      return newState;
    //removeFromCart
    case types.CART_REMOVE:
      newState = {
        sku: sku
      };
      return newState
    //updateCartVisible
    case types.CART_VISIBLE:
      newState = {
        cartVisible: cartVisible
      };
      return newState;
    default:
      return state;
    }
}

export default cartReducer;
