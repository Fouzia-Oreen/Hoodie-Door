import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cart/CartSlice.js';
import AuthReducer from './features/auth/authSlice.js';
import authApi from './features/auth/authApi.js'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    [authApi.reducerPath] : authApi.reducer,
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
