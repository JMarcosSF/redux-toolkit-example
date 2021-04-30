import  { createReducer } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "../actions/bookActions";

const initState = {
  books: [],
}

const bookReducer = createReducer(initState, (builder => {
  builder.addCase(addBook, (state, action) => {
    state.books = [...state.books, action.payload];
  })
  .addCase(deleteBook, (state, action) => {
    state.books = state.books.filter(book => book.id !== action.payload.id);
  })
}))
export default bookReducer;