import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    hot_sales: [],
    list: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHotSaleProducts.fulfilled, (state, action) => {
        state.hot_sales = action.payload
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload
      })
  }
})

export const fetchHotSaleProducts = createAsyncThunk('fetchHotSaleProducts', async () => {
  try {
    const response = await axios.get('http://localhost:5000/products?is_hot_sale=true')
    return response.data
  } catch (error) {
    return error.message
  }
})

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  try {
    const response = await axios('http://localhost:5000/products?is_hot_sale=false&_sort=id&_order=desc&_limit=20&_page=1')
    return response.data
  } catch (error) {
    return error.message
  }
})

const { reducer } = productSlice

export default reducer
