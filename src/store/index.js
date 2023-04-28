import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/categorySlice'
import featuredProductReducer from './slices/featuredProductSlice'

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    featuredProducts: featuredProductReducer
  }
})

export default store
