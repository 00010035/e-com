import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { productListReducer } from "./reducers/productProducers";

const rootReducer = combineReducers({
  productList: productListReducer,
});

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
