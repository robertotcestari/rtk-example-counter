import { configureStore } from "@reduxjs/toolkit";
import countReducer from './features/counter/counterSlice'

const store = configureStore({
  reducer: countReducer
})

export default store