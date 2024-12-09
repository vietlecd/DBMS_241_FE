import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import BookListCustome from "./Book/BookListCustome";
import { get_books_by_category } from "../services/BookService"




const HomePage = () => {
  const [fictionBooks, setFictionBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch books and filter by category
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // Fetch Fiction books
        const fictionResponse = await get_books_by_category("Fiction");
        setFictionBooks(fictionResponse);

        // Fetch Fantasy books
        const fantasyResponse = await get_books_by_category("Fantasy");
        setFantasyBooks(fantasyResponse);
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
          <BookListCustome title="Sách viễn tưởng" books={fictionBooks} />
          <BookListCustome title="Sách giả tưởng" books={fantasyBooks} />
        </>
      )}
    </div>
  );
};

export default HomePage;
