export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  if (action.type === "ADD_TO_FAVORITE") {
    return {
      ...state,
      favoriteItems: [...state.favoriteItems, action.payload],
    };
  }

  if (action.type === "REMOVE_FROM_FAVORITE") {
    return {
      ...state,
      favoriteItems: state.favoriteItems.filter(
        (item) => item._id !== action.payload
      ),
    };
  }

  return state;
};
