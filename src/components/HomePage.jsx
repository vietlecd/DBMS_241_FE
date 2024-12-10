import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BookListCustome from "./Book/BookListCustome";
import { get_books_by_category } from "../services/BookService";

const HomePage = () => {
  const [fictionBooks, setFictionBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [nonfictionBooks, setNonFictionBooks] = useState([]);
  const [scienceBooks, setScienceBooks] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [psychologyBooks, setPsychologyBooks] = useState([]);
  const [drammaBooks, setDrammaBooks] = useState([]);
  const [novelBooks, setNovelBooks] = useState([]);
  const [shortStoriesBooks, setShortStoriesBooks] = useState([]);

  useEffect(() => {
    // Gọi API và giới hạn kết quả
    const fetchBooks = async () => {
      try {
        const fiction = await get_books_by_category("Fiction");
        setFictionBooks(fiction.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const fantasy = await get_books_by_category("Fantasy");
        setFantasyBooks(fantasy.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const nonfiction = await get_books_by_category("Non-Fiction");
        setNonFictionBooks(nonfiction.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const science = await get_books_by_category("Science");
        setScienceBooks(science.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const history = await get_books_by_category("History");
        setHistoryBooks(history.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const psychology = await get_books_by_category("Psychology");
        setPsychologyBooks(psychology.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const drama = await get_books_by_category("Drama");
        setDrammaBooks(drama.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const novel = await get_books_by_category("Novel");
        setNovelBooks(novel.slice(0, 1));  // Lấy 1 kết quả đầu tiên

        const shortStories = await get_books_by_category("Short Stories");
        setShortStoriesBooks(shortStories.slice(0, 1));  // Lấy 1 kết quả đầu tiên
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Banner />
      <div className="books-section">
        <BookListCustome title="Fiction" books={fictionBooks} />
        <BookListCustome title="Fantasy" books={fantasyBooks} />
        <BookListCustome title="Nonfiction" books={nonfictionBooks} />
        <BookListCustome title="Science" books={scienceBooks} />
        <BookListCustome title="History" books={historyBooks} />
        <BookListCustome title="Psychology" books={psychologyBooks} />
        <BookListCustome title="Drama" books={drammaBooks} />
        <BookListCustome title="Novel" books={novelBooks} />
        <BookListCustome title="Short Stories" books={shortStoriesBooks} />
      </div>
    </div>
  );
};

export default HomePage;
