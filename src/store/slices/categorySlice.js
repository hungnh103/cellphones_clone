import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    id: 1,
    name: 'Dien thoai'
  },
  {
    id: 2,
    name: 'Laptop'
  }
]

const categorySlice = createSlice({
  name: 'category',
  initialState: initialData,
  reducers: {}
})

const { actions, reducer } = categorySlice

export default reducer
