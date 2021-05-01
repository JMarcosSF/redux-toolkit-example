import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "./reducers/bookReducer";
import bookReducer from "./slices/bookSlice";

const store = configureStore({
  reducer: { books: bookReducer }
})
export default store;