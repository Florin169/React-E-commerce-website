import axios from "axios";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.image[0],
        qty: data.qty,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
};
