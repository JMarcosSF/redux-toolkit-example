import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  books: [],
}

// Slice takes a config object
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books = [...state.books, action.payload];
    },
    deleteBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload.id);
    }
  }
});
export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;