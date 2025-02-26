import React from "react";

const BookItem = ({ book, selectBook, deleteBook }) => {
  return (
    <div className="book-item" onClick={() => selectBook(book)}>
      <h3>{book.title}</h3>
      <p>作者: {book.author}</p>
      <p>出版年份: {book.year}</p>
      <button
        className="view-detail-button"
        onClick={(e) => {
          e.stopPropagation();
          selectBook(book);
        }}
      >
        查看详情
      </button>
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          deleteBook(book);
        }}
      >
        删除
      </button>
    </div>
  );
};

export default BookItem;
