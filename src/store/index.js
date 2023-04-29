import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/categorySlice'
import featuredProductReducer from './slices/featuredProductSlice'
import productReducer from './slices/productSlice'

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    featuredProducts: featuredProductReducer,
    products: productReducer
  }
})

export default store
