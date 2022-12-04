import { PRODUCT_SUCCESS, PRODUCT_FAIL } from "../_constants/ProductConstants";

const initialState = {};

export default function ProductReducers(state = initialState, action) {
  const { type, payload } = action;
  console.log(state, "ProductReducers", payload);
  switch (type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        success: true,
        response: payload,
      };
    case PRODUCT_FAIL:
      return {
        ...state,
        success: false,
        response: null,
      };
    default:
      return state;
  }
}
