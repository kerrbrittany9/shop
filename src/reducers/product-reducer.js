import constants from "./../constants";
import { v4 } from 'uuid';


const { defaultState, types } = constants;

const productReducer = (state = defaultState, action) => {
  let newState;
    switch (action.type) {
      case 'ADD_PRODUCT':
        const { product, image, price, sku } = action;
        return [
          ... state,
          {
            product: product,
            image: image,
            sku: sku,
            price: price
          }
        ]
        return newState;
      case types.CART_ADD:
        newState = {
          inCart: true,
          sku: v4(),
          product: action.product,
          image: action.image,
          price: action.price
        };
        return newState;
      default:
        return state;
      }
  }

export default productReducer;
