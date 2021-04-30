import { addBook } from "./actions/bookActions";

console.log(addBook.toString());
console.log(addBook(''));
console.log(addBook('test'));

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}