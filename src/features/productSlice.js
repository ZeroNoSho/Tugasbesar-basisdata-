import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=8");
  return response.data;
});

export const getProducts1 = createAsyncThunk("products/getProducts1", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const getCategori = createAsyncThunk("products/getCategori", async ({ name }) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
  return response.data;
});

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [getProducts1.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [getCategori.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

export const productSelector = productEntity.getSelectors((state) => state.product);
export default productSlice.reducer;
