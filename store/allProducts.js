import { db } from "../firebase/config";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products });

export const fetchAllProducts = () => async dispatch => {
  try {
    const data = await db
      .collection("products")
      .where("completed", "==", false)
      .get();
    dispatch(
      getAllProducts(
        data.docs.map(doc => {
          return { id: doc.id, data: doc.data() };
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

//const doc = await db.collection('products').doc('your id').get()
//const doc = await db.doc('products/yourid/collectionName/docName').get()
//return doc which you can do doc.data()
