import React, { useState } from "react";

const BookList = ({ books, title }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative group cursor-pointer border border-gray-700 rounded-lg overflow-hidden"
          >
            <div className="relative w-full pt-[150%]">
              <img
                src={book.image}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {book.type && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded bg-${
                    book.type === "free" ? "green-500" : "yellow-500"
                  } text-white text-xs`}
                >
                  {book.type === "free" ? "Miễn phí" : book.price}
                </div>
              )}
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

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex gap-6 py-3">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer px-4 py-2 rounded-lg ${
            activeTab === tab
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

const Filters = ({ filters, activeFilter, onFilterClick }) => {
  return (
    <div className="flex items-center mt-4 gap-4">
      {filters.map((filter, index) => (
        <div
          key={index}
          className={`px-4 py-2 border rounded-lg cursor-pointer ${
            activeFilter === filter
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

const UserBooks = () => {
  const [activeTab, setActiveTab] = useState("Đang đọc");
  const [activeFilter, setActiveFilter] = useState("Sách điện tử");

  const tabs = [
    "Đang đọc",
    "Đang nghe",
    "Sách đã mua",
    "Sách được tặng",
    "Yêu thích",
  ];
  const filters = ["Sách điện tử", "Sách hiệu sồi", "Truyện tranh", "Sách cộng đồng viết"];

  const books = [
    {
      id: 1,
      title: "Thần thái uy nghi, dẫu quỳ vẫn oai",
      image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/49954.jpg?v=1",
      price: "79.000đ",
      type: "sale",
    },
    {
      id: 2,
      title: "Siêu cấp cưng chiều",
      image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/30688.jpg?v=3",
      price: null,
      type: "free",
    },
    {
      id: 3,
      title: "Bay trên bầu trời nước Úc",
      image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/50248.jpg?v=1",
      price: "99.000đ",
      type: "sale",
    },
  ];

  return (
    <div className="account-content h-full pt-6 px-8 bg-black text-white">
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      {/* Filters */}
      <Filters filters={filters} activeFilter={activeFilter} onFilterClick={setActiveFilter} />

      {/* Book List */}
      <BookList books={books} title={activeTab} />
    </div>
  );
};

export default UserBooks;
