import React from "react";

const Library = () => {

  const handleBookDelete = (id) => {
    //TODO dispatch the delete book action here
  }

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
          <tr>
            <td>Dune</td>
            <td>F. Herbert</td>
            <td>10</td>
            <td><button className="delete" onClick={handleBookDelete}>X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Library;