// import "react";
// import RandomName from "./components/RandomName";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import CardRow from "./components/CardRow";
// import MainBanner from "./components/MainBanner";
// import MainProductList from "./components/MainProductList";
// import Footer from "./components/Footer";
// import { Descriptions } from "antd";
// import Button from "./components/Button";
// import UserPage from "./components/Userpage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";
// import Card from "./components/Card";

import React, { useState } from "react";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]); // 图书列表
  const [selectedBook, setSelectedBook] = useState(null); // 当前选中的图书
  const [showDetail, setShowDetail] = useState(false); // 控制详情卡片的显示

  // 添加图书
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // 选择图书
  const selectBook = (book) => {
    setSelectedBook(book);
    setShowDetail(true); // 显示详情卡片
  };

  // 删除图书
  const deleteBook = (book) => {
    setBooks(books.filter((b) => b !== book));
    setSelectedBook(null); // 清空选中的图书
    setShowDetail(false); // 关闭详情卡片
  };

  // 编辑图书
  const editBook = (updatedBook) => {
    const updatedBooks = books.map((b) =>
      b === selectedBook ? updatedBook : b
    );
    setBooks(updatedBooks);
    setSelectedBook(updatedBook); // 更新选中的图书
  };

  // 关闭详情卡片
  const closeDetail = () => {
    setShowDetail(false);
  };

  // const handleClick = () = >{
  //   alert("点击了按钮");
  // };
  // const cardData = [
  //   {
  //     img: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/logo.png",
  //     avatar: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/logo.png",
  //     title: "1",
  //     description: "1",
  //   },
  //   {
  //     img: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/2.jpg",
  //     avatar: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/2.jpg",
  //     title: "1",
  //     description: "1",
  //   },
  //   {
  //     img: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/3.jpg",
  //     avatar: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/3.jpg",
  //     title: "1",
  //     description: "1",
  //   },
  // ];

  return (
    <div id="app">
      <h1>图书管理系统</h1>
      <BookInput addBook={addBook} />
      <BookList books={books} selectBook={selectBook} deleteBook={deleteBook} />
      {showDetail && (
        <BookDetail
          book={selectedBook}
          editBook={editBook}
          deleteBook={deleteBook}
          onClose={closeDetail}
        />
      )}
    </div>
  );
};
<>
  {/* <div className="app">
        <Card
          header={<h2>卡片标题</h2>}
          body={<p>卡片主体</p>}
          footer={<p>卡片底部</p>}
        />
      </div> */}
  {/* <UserPage /> */}
  {/* <Button1 onClick={handleClick}/> */}
  {/* <InputParent /> */}
  {/* <RegistPage /> */}
  {/* <Header />
      <MainBanner />
      <CardRow cardData={cardData} />
      <Footer /> */}
  {/* <RandomName></RandomName> */}
</>;
//     <div>
//       <Student
//         name={student.name}
//         age={student.age}
//         avatar={student.avatar}
//         homepage={student.homepage}
//       />
//     </div>

export default App;
