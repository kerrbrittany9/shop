import constants from "./../constants";

const { defaultState, types } = constants;


// Create dispatcher instance
const productReducer = (state = defaultState, action) => {
  let newState;
    switch (action.type) {
      //requestData
      case types.REQUEST_DATA:
        newState = {
          data: []
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
      default:
      return state;
  }
}

export default productReducer;
