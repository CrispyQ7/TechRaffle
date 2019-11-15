import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import singleProduct from "./singleProduct";
import allProducts from "./allProducts";

const reducer = combineReducers({
  allProducts,
  singleProduct
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware /*, createLogger({ collapsed: true })*/)
);

const store = createStore(reducer, middleware);

export default store;
export * from "./allProducts";
export * from "./singleProduct";
