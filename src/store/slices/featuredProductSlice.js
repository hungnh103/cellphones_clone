import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    product_id: 3,
    image: 'https://...samsung',
    title: 'samsung galaxy, gia tot chot ngay'
  },
  {
    product_id: 5,
    image: 'https://...iphone',
    title: 'iphone 14, gia tot bat ngo'
  },
  {
    product_id: 6,
    image: 'https://...xiaomi',
    title: 'xiaomi hay lam'
  }
]

const featuredProductSlice = createSlice({
  name: 'featuredProduct',
  initialState: initialData,
  reducers: {}
})

const { reducer, actions } = featuredProductSlice

export default reducer
