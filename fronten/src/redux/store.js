import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import productReducer from './productSlice';


const store = configureStore({
  reducer: {
    auth: authReducer, 
    user: userReducer,
    product: productReducer
  },
});

export default store;
