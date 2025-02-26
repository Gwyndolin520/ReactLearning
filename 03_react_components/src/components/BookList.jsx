import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, selectBook, deleteBook }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          selectBook={selectBook}
          deleteBook={deleteBook}
        />
      ))}
    </div>
  );
};

export default BookList;
