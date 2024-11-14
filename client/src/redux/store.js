import { configureStore } from '@reduxjs/toolkit';
//import authApi from './features/auth/authApi.js';
//import AuthReducer from './features/auth/authSlice.js';
//import CartReducer from './features/cart/CartSlice.js';
//import productsApi from './features/product/productApi.js';

export const store = configureStore({
  // reducer: {
  //   // cart
  //   cart: CartReducer,
  //   // register & login
  //   [authApi.reducerPath] : authApi.reducer,
  //   // profile dropdown
  //   auth: AuthReducer,
  //   // product
  //   [productsApi.reducerPath] : productsApi.reducer
  // },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware), 
})
