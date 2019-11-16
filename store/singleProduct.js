import { db } from "../firebase/config";

const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";

const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product });

export const fetchSingleProduct = productName => async dispatch => {
  try {
    const data = await db
      .collection("products")
      .doc(productName)
      .get();
    dispatch(getSingleProduct(data.data()));
  } catch (error) {
    console.error("error fetching single product, ", error);
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
