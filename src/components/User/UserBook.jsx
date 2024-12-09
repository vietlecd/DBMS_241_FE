import React, { useState, useEffect } from "react";
import { get_books_bought, get_books_list } from "../../services/BookService";


const BookList = ({ books, title }) => {
  return (
    <div className="mt-6 z-0">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border border-gray-700 rounded-lg overflow-hidden"
          >
            <div className="relative w-full pt-[150%]">
              {/* Chuyển đổi liên kết trước khi render */}
              <img
                src="https://res.cloudinary.com/drjece4ju/image/upload/v1730972101/samples/upscale-face-1.jpg"
                alt={book.title}
                className="absolute z-0 inset-0 w-full h-full object-cover"
              />

              <div className="absolute top-2 right-2 px-2 py-1 rounded bg-yellow-500 text-white text-xs">
                {book.publishyear}
              </div>
            </div>
            <p className="text-white text-sm mt-2 text-center truncate group-hover:text-yellow-500">
              {book.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


// Component Tabs
const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex gap-6 py-3">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer px-4 py-2 rounded-lg ${activeTab === tab
              ? "text-yellow-500 font-bold"
              : "text-gray-400 hover:text-yellow-500"
            }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

// Main Component UserBooks
const UserBooks = () => {
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Sách đã mua");

  const tabs = ["Sách đã mua", "Yêu thích"];

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const [purchasedBooks, favoriteBooks] = await Promise.all([
          get_books_bought(),
          get_books_list(),
        ]);

        setPurchasedBooks(purchasedBooks);
        setFavoriteBooks(favoriteBooks);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const booksToDisplay =
    activeTab === "Sách đã mua" ? purchasedBooks : favoriteBooks;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <BookList books={booksToDisplay} title={activeTab} />
    </div>
  );
};

export default UserBooks;
