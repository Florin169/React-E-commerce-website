export const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === "ADD_TO_CART") {
    const existItem = state.cartItems.find(
      (item) => item.id === action.payload.id
    );

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === existItem.id ? item : action.payload
        ),
      };
    } else {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
  }

  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
  }

  return state;
};
