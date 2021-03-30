export const productListReducer = (state = { products: [] }, action) => {
  if (action.type === "PRODUCTS_LIST_REQUEST") {
    return { loading: true, products: [] };
  }

  if (action.type === "PRODUCTS_LIST_SUCCESS") {
    return { loading: false, products: action.payload };
  }

  if (action.type === "PRODUCTS_LIST_FAIL") {
    return { loading: false, error: action.payload };
  }

  return state;
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  if (action.type === "PRODUCT_DETAILS_REQUEST") {
    return { loading: true, product: [] };
  }

  if (action.type === "PRODUCT_DETAILS_SUCCESS") {
    return { loading: false, product: action.payload };
  }

  if (action.type === "PRODUCT_DETAILS_FAIL") {
    return { loading: false, error: action.payload };
  }

  return state;
};
