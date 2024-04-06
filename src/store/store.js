import { configureStore } from "@reduxjs/toolkit";
import cartSlise from "./cartSlise";
import productSlice from "./productSlice";


const store = configureStore({
  reducer: {
    cart: cartSlise,
    products: productSlice,
  },
});

export default store;
