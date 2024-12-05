import React, { useState, useEffect } from "react";
import BookList from "../BookList"; 
import AddBook from "../AddBook"; 

const AuthorBook = () => {
    const token = localStorage.getItem("authToken");

    const [bookWritten, setBookWritten] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddingBook, setIsAddingBook] = useState(false); 

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api/findBookWritten", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }

                const bookWrittenData = await response.json();
                setBookWritten(bookWrittenData);
                setLoading(false);
            } catch (err) {
                setError(err.message || "An error occurred");
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleAddBook = () => {
        setIsAddingBook(true); // Chuyển sang form thêm sách
    };

    const handleBackToList = () => {
        setIsAddingBook(false); 
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container mx-auto mt-10">
            {isAddingBook ? (
                <div>
                    {/* Hiển thị form thêm sách */}
                    <AddBook />
                    <button
                        onClick={handleBackToList}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Quay lại danh sách
                    </button>
                </div>
            ): (
                <div>
                    {/* Hiển thị danh sách sách */}
                    <BookList books={bookWritten} title="Books Written" onAddBook={handleAddBook} />
                </div>
            )}
        </div>
    );
};

export default AuthorBook;
