import React, { useState, useEffect } from "react";

// Component BookList
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
              <img
                src={book.coverImage}
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
  const token = localStorage.getItem("authToken");
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Sách đã mua");

  const tabs = ["Sách đã mua", "Yêu thích"];

  // Fetch both book data (purchased and favorite) initially
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const [purchasedResponse, favoriteResponse] = await Promise.all([
            fetch("http://localhost:8080/api/findBookBought", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:8080/api/list/get", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!purchasedResponse.ok || !favoriteResponse.ok) {
          throw new Error("Failed to fetch books");
        }

        const purchasedBooksData = await purchasedResponse.json();
        const favoriteBooksData = await favoriteResponse.json();

        setPurchasedBooks(purchasedBooksData);
        setFavoriteBooks(favoriteBooksData);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Determine which book list to display based on the active tab
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
