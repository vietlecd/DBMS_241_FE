import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import BookListCustome from "./Book/BookListCustome";
import { get_books_by_category } from "../services/BookService"




const HomePage = () => {
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch books and filter by category
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await get_books_by_category();
        console.log(response);
        const books = response.data || []; // Xử lý dữ liệu nhận được từ API
        
        const romance = books.filter(book => book.category === "Fiction");
        const fantasy = books.filter(book => book.category === "History");
        setRomanceBooks(romance);
        setFantasyBooks(fantasy);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Banner />
      {loading ? (
        <p className="text-center text-white">Loading books...</p>
      ) : (
        <>
          <BookListCustome title="Sách lãng mạn" books={romanceBooks} />
          <BookListCustome title="Sách giả tưởng" books={fantasyBooks} />
        </>
      )}
    </div>
  );
};

export default HomePage;
