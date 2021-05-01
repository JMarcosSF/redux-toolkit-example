import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteBook } from "../store/actions/bookActions";
import { deleteBook } from "../store/slices/bookSlice"; // replacing actions w/ slices

const Library = () => {
  const dispatch = useDispatch();

  const handleBookDelete = (id) => {
    console.log('id', id);
    dispatch(deleteBook({ id }));
  }

  const books = useSelector(state => state.books.books);

  const booksTable = books.map(book => {
    return (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.rating}</td>
        <td><button className="delete" onClick={() => handleBookDelete(book.id)}>X</button></td>
      </tr>
    )
  })
  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th></th>
          </tr>
          {booksTable}
        </tbody>
      </table>
    </div>
  )
}
export default Library;