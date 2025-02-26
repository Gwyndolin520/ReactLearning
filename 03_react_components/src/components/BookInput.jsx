import React, { useState } from "react";

const BookInput = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, year };
    addBook(newBook); // 将新图书传递给父组件
    setTitle(""); // 清空输入框
    setAuthor("");
    setYear("");
  };

  return (
    <div className="book-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="书名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="作者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="出版年份"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">添加图书</button>
      </form>
    </div>
  );
};

export default BookInput;
