import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: { ...userInfoFromStorage } },
};
const middleware = [thunkMiddleware];

const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
