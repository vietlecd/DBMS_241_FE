import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { create_book } from '../../../services/BookService';

function AddBook() {
    const [username, setUsername] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [bookTitle, setBookTitle] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [totalPage, setTotalPage] = useState('');
    const [price, setPrice] = useState('');
    const [bookIntro, setBookIntro] = useState('');
    const [loading, setLoading] = useState(false);

    const categories = ["Fiction", "Non-Fiction", "Biography", 
        "Science", "Fantasy", "History", "Psychology", "Drama", "Novel", "Short Stories"];

    const handleCheckboxChange = (category) => {
        setSelectedCategory((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handlePdfChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
            console.log("PDF uploaded successfully.");
        }
    };

    const handleSaveBook = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!username || !imageFile || !pdfFile || !bookTitle
            || !publishYear || !totalPage || !price || !bookIntro || !authorName || selectedCategory.length === 0) {
            alert("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        const trimUsername = username.trim().replace(/\s+/g, ",");

        if (!/^[a-zA-Z0-9,]+$/.test(trimUsername)) {
            alert("Username should not contain spaces or special characters.");
            setLoading(false);
            return;
        }

        const formattedCategories = selectedCategory.join(",");

        console.log(trimUsername, formattedCategories);

        const formData = new FormData();
        formData.append("title", bookTitle);
        formData.append("description", bookIntro);
        formData.append("image", imageFile);
        formData.append("publishyear", publishYear);
        formData.append("price", price);
        formData.append("namecategory", formattedCategories);
        formData.append("username", trimUsername);
        formData.append("author_name", authorName);
        formData.append("totalpage", totalPage);
        formData.append("pdf", pdfFile);

        try {
            const result = await create_book(formData);

            console.log("Response:", result);
            alert("Book saved successfully!");
        } catch (error) {
            console.error("Error:", error);
            // alert("Failed to save the book. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[800px] mx-auto px-4">
            <div className="w-full flex flex-row">
                {/* Image Upload */}
                <div className="w-[400px] flex flex-col items-center">
                    <div className="w-80 h-[29.25rem] bg-gray-300 flex items-center justify-center rounded-lg shadow-sm">
                        {!imagePreview && <span className="text-gray-500">Preview Image</span>}
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover border border-gray-500 rounded-md"
                            />
                        )}
                    </div>
                    <div className="mt-4 border border-red-400 px-6 py-3 hover:border-red-600 rounded-2xl">
                        <label className="flex items-center cursor-pointer">
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                            <i className="bi bi-plus text-red-600 text-2xl"></i>
                            <span className="ml-2 font-light text-lg text-red-600">Select Cover Image</span>
                        </label>
                    </div>
                    <span className="text-sm text-gray-400 mt-4 font-light">Recommended size: 800 x 1170</span>
                </div>

                {/* Book Details Form */}
                <div className="flex flex-col flex-1 ml-10">
                    {/* Book Title */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Book Title <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter book title"
                            value={bookTitle}
                            onChange={(e) => setBookTitle(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* Username */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Username <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* authorName */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Author name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter author name"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* Categories */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Categories <span className="text-red-600">*</span>
                        </label>
                        <div className="mt-2 grid grid-cols-5 gap-x-[100px]">
                            {categories.map((category) => (
                                <div key={category} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategory.includes(category)}
                                        onChange={() => handleCheckboxChange(category)}
                                        className="mr-2 cursor-pointer"
                                    />
                                    <label className="text-gray text-sm cursor-pointer">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Publish Year */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Publish Year <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter publish year"
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* Total Pages */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Total Pages <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter total pages"
                            value={totalPage}
                            onChange={(e) => setTotalPage(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Price (VNĐ) <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full outline-0 h-10 border bg-gray-300 rounded-lg placeholder-gray-600 text-black text-sm px-4"
                        />
                    </div>

                    {/* Book Intro */}
                    <div className="mb-7">
                        <label className="block text-white text-sm font-semibold mb-2">
                            Book Introduction <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            placeholder="Enter book introduction"
                            value={bookIntro}
                            onChange={(e) => setBookIntro(e.target.value)}
                            className="w-full outline-0 border bg-gray-300 px-4 py-2 rounded-lg placeholder-gray-600 text-black text-sm"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* PDF Upload */}
                    <div className="flex items-center mb-7">
                        <label className="flex items-center cursor-pointer">
                            <input type="file" accept="application/pdf" onChange={handlePdfChange} className="hidden" />
                            <i className="bi bi-file-earmark-arrow-up text-blue-600 text-2xl"></i>
                            <span className="ml-2 font-light text-lg text-blue-600">Upload PDF</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSaveBook}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <i className="bi bi-arrow-repeat animate-spin mr-2"></i>
                        ) : (
                            "Save Book"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddBook;
