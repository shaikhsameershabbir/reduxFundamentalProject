import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Products from "../components/Products";
const initialState = {
  data: [],
  status:'idle'
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending,(state , action) =>{
        // you can show loader logic here 
        state.status = 'loding'
    })
    .addCase(getProducts.rejected,(state , action) =>{
        // you can show loader logic here 
        state.status = 'rejected'
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
// export function getProducts() {
//   return async function getProductThunk(dispatch, gateState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }
