import { db } from "../firebase/config";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products });

export const fetchAllProducts = () => async dispatch => {
  try {
    const data = await db
      .collection("products")
      .where("countdown", ">=", 1)
      .get();
    console.log("MUH DATA!!!", data);
    dispatch(
      getAllProducts(
        data.docs.map(ele => {
          return ele.data();
        })
      )
    );
  } catch (error) {
    console.error("error fetching all products, ", error);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
