import { createAction } from "@reduxjs/toolkit";

// redux toolkit way
export const addBook = createAction('addBook');
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