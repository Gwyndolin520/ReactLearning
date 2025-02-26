import React, { useState } from "react";

const BookDetail = ({ book, editBook, deleteBook, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  // 处理编辑表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(updatedBook); // 将更新后的图书传递给父组件
    setIsEditing(false); // 退出编辑模式
  };

  return (
    <div className="book-detail-card">
      <button className="close-button" onClick={onClose}>
        关闭详情
      </button>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={updatedBook.title}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, title: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.author}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, author: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.year}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, year: e.target.value })
            }
          />
          <button type="submit" className="save-button">
            保存
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            取消
          </button>
        </form>
      ) : (
        <div>
          <h2>{book.title}</h2>
          <p>作者: {book.author}</p>
          <p>出版年份: {book.year}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            编辑
          </button>
          <button className="delete-button" onClick={() => deleteBook(book)}>
            删除
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
