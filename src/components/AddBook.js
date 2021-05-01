import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addBook } from "../store/actions/bookActions";
import { addBook } from "../store/slices/bookSlice";  // replacing actions w/ slices
// import { nanoid } from "@reduxjs/toolkit";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('5');

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    // Dispatch the action here using useDispatch()
    // by dispatching the action using createAction in
    // bookActions.js
    dispatch(addBook({
      title,
      author,
      rating,
      // id: nanoid(),
    }));
  }

  return (
    <form className='add-book'>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <div>
          <label htmlFor="author">Author</label>
          <input name="author" value={author} onChange={(e) => {
            setAuthor(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input type="number" min="1" max="10" name="rating" value={rating} onChange={(e) => {
            setRating(e.target.value)
          }}/>
        </div>
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </form>
  )
}
export default AddBook;