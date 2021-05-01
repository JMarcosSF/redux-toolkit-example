import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const initialState = {
  books: [],
}

// Slice takes a config object
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook(state, action) {
    //   state.books = [...state.books, action.payload];
    // },
    addBook: {
      reducer: (state, action) => {
        state.books = [...state.books, action.payload];
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            date: new Date().toDateString(),
            id: nanoid(),
          }
        }
      }
    },
    deleteBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload.id);
    }
  }
});
export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;