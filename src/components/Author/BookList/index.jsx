import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Component BookList
const BookList = ({ books, title, onAddBook }) => {
    return (
        <div className="mt-6 z-0">
            <div className="mb-[0.375rem] pb-[1.875rem] flex items-center justify-between w-[1100px] max-h-screen">
                <div className="container ">
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
                <div className="items-center flex mb-64 justify-center w-60 py-1 bg-red-400 hover:bg-red-600 rounded-xl">
                    <img src="https://sangtac.waka.vn/svgs/icon-add-chapter.svg" alt="add button by waka" />
                    <button
                        className="flex items-center justify-center text-white"
                        onClick={onAddBook} 
                    >
                        Thêm truyện mới
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookList;
