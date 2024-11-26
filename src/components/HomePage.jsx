import React from "react";
import Banner from "./Banner";
import BookList from "./BookList";
import Book from "./Book";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <BookList title={"Sách Đề Cử"} />
      <BookList title={"Sách Miễn Phí"} />
      <Book />
    </div>
  );
};

export default HomePage;
