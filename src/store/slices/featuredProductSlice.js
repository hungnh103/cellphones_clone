import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const featuredProductSlice = createSlice({
  name: 'featuredProduct',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllFeaturedProducts.fulfilled, (_state, action) => {
        return action.payload
      })
  }
})

export const fetchAllFeaturedProducts = createAsyncThunk('fetchAllFeaturedProducts', async () => {
  try {
    const response = await axios.get('http://localhost:5000/featured_products')
    return response.data
  } catch (error) {
    return error.message
  }
})

const { reducer } = featuredProductSlice

export default reducer
