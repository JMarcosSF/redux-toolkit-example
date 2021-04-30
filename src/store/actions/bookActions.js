import { createAction } from "@reduxjs/toolkit";

// redux toolkit way
export const addBook = createAction('addBook');
export const deleteBook = createAction('deleteBook');

// OLD WAY
// export const ACTIONS = {
//   ADD_BOOK: 'ADD_BOOK',
// }
//
// export const addBook = (payload) => {
//   return {
//     type: ACTIONS.ADD_BOOK,
//     payload,
//   }
// }