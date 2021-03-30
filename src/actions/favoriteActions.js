import axios from "axios";

export const favoriteActions = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    console.log(data);

    dispatch({ type: "ADD_TO_FAVORITE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromFavorite = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
};
