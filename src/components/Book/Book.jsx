import React, { useState } from "react";
import Header from "../Header/Header";
import ImgTemp from "../../assets/temp-1.jpeg";
import CommentsSection from "./CommentSection";
import ReviewsSection from "./ReviewSection";
import { useLocation, useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Book = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state?.book;
    const [activeTab, setActiveTab] = useState("reviews");
    const [isReading, setIsReading] = useState(false); // State để kiểm soát xem người dùng có đang đọc sách không

    const convertToThumbnailURL = (url) => {
        const fileIdPattern = /(?:\/d\/|id=)([-\w]+)/; // Tìm file ID
        const match = url.match(fileIdPattern);

        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/thumbnail?id=${fileId}`;
        }

        return url; // Trả về URL gốc nếu không tìm thấy ID
    };

    if (!book) {
        navigate("/");
        return null;
    }

    return (
        <div className="bg-gray-900 text-white">
            <Header />
            {!isReading ? (
                <div className="container mx-auto py-8 my-10">
                    <div className="flex">
                        {/* Left Section */}
                        <section className="w-1/3 flex flex-col items-center">
                            <div className="relative">
                                <img
                                    src={convertToThumbnailURL(book.coverimage) || ImgTemp}
                                    alt={book.title}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-3 py-1 rounded">
                                    {book.price ? `${book.price} VND` : "MIỄN PHÍ"}
                                </span>
                            </div>
                        </section>

                        {/* Right Section */}
                        <aside className="w-2/3 px-8">
                            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong>Tác giả:</strong> {book.authorName || "Đang cập nhật"}</li>
                                <li><strong>Thể loại:</strong> {book.categoryNames || "Đang cập nhật"}</li>
                                <li><strong>Gói cước:</strong> {book.price ? "Có phí" : "Miễn Phí"}</li>
                                <li><strong>Nhà xuất bản:</strong> {book.publisher || "Đang cập nhật"}</li>
                            </ul>
                            <div className="mt-6 flex items-center space-x-4">
                                {/* Nút Đọc Sách */}
                                <button
                                    className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600"
                                    onClick={() => setIsReading(true)} // Bật chế độ đọc sách
                                >
                                    Đọc sách
                                </button>
                                <button className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600">
                                    Thêm vào yêu thích
                                </button>
                            </div>

                            {/* Phần mô tả giới thiệu */}
                            <div className="mt-6">
                                <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {book.description || "Đang cập nhật"}
                                </p>
                            </div>
                        </aside>
                    </div>

                    {/* Tabs */}
                    <div className="mt-8">
                        <div className="flex justify-start space-x-4 border-b border-gray-700">
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "comments"
                                        ? "text-green-500 border-b-2 border-green-500"
                                        : "text-gray-300"
                                }`}
                                onClick={() => setActiveTab("comments")}
                            >
                                Bình luận
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "reviews"
                                        ? "text-green-500 border-b-2 border-green-500"
                                        : "text-gray-300"
                                }`}
                                onClick={() => setActiveTab("reviews")}
                            >
                                Đánh giá & nhận xét
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-4">
                            {activeTab === "comments" && <CommentsSection />}
                            {activeTab === "reviews" && <ReviewsSection />}
                        </div>
                    </div>
                </div>
            ) : (
                // Chế độ đọc sách
                <div className="w-full h-screen">
                    <button
                        className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
                        onClick={() => setIsReading(false)}
                    >
                        Quay lại
                    </button>
                    {book.pdf ? (
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                            <Viewer fileUrl={book.pdf} />
                        </Worker>
                    ) : (
                        <p className="text-center text-gray-400 mt-20">Không có tệp PDF để hiển thị.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Book;
