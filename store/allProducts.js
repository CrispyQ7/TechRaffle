import { db } from "../firebase/config";
import * as firebase from "firebase";
import "firebase/firestore";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const SUBMIT_TICKET = "SUBMIT_TICKET";

const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products });
const submitTicket = product => ({ type: SUBMIT_TICKET, product });

export const fetchAllProducts = () => async dispatch => {
  try {
    const data = await db.collection("products").get();
    dispatch(
      getAllProducts(
        data.docs.map(doc => {
          // console.log(doc.id);
          return { id: doc.id, data: doc.data() };
        })
      )
    );
  } catch (error) {
    console.error("error fetching all products, ", error);
  }
};

export const ticketSubmit = docName => async dispatch => {
  try {
    await db
      .collection("products")
      .doc(docName)
      .update({
        entries: firebase.firestore.FieldValue.increment(1)
      });
    const data = await db
      .collection("products")
      .doc(docName)
      .get();
    //console.log(data.data());
    const structured = { id: data.id, data: data.data() };
    dispatch(submitTicket(structured));
  } catch (error) {
    console.error("Error submitting ticket", error);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products;
    case SUBMIT_TICKET:
      return state.map(item => {
        if (item.id === action.product.id) {
          return action.product;
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

//const doc = await db.collection('products').doc('your id').get()
//const doc = await db.doc('products/yourid/collectionName/docName').get()
//return doc which you can do doc.data()
