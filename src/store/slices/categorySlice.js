import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (_state, action) => {
        return action.payload
      })
  }
})

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  try {
    const response = await axios.get('http://localhost:5000/categories')
    return response.data
  } catch (error) {
    return error.message
  }
})

const { reducer } = categorySlice

export default reducer
