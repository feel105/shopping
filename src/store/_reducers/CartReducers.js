import { CART_SUCCESS, CART_REMOVE } from "../_constants/CartConstants";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export default function CartReducers(state = initialState, action) {
  const { type, payload } = action;
  console.log(state, "CartReducers", payload);
  //get product already added then + quantity other wise add product
  const itemIndex = state.cartItems.findIndex(
    (item) => item.id === payload?.id
  );
  switch (type) {
    case CART_SUCCESS:
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return { ...state };
    case CART_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== payload.id
        ),
      };
    default:
      return state;
  }
}
