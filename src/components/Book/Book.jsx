import React, { useState } from "react";
import Header from "../Header/Header";
import ImgTemp from "../../assets/temp-1.jpeg";
import CommentsSection from "./CommentSection"; // Import CommentsSection
import ReviewsSection from "./ReviewSection";   // Import ReviewsSection

const Book = () => {
    const [activeTab, setActiveTab] = useState("reviews"); // Tab đang được chọn
    const [comments, setComments] = useState([
        { id: 1, user: "User1", comment: "Sách rất hay và đáng đọc!" },
        { id: 2, user: "User2", comment: "Những bài thơ mang nhiều ý nghĩa sâu sắc." }
    ]);
    const [reviews, setReviews] = useState({
        totalReviews: 1,
        averageRating: 5,
        ratings: [1, 0, 0, 0, 0] // Số lượng đánh giá từ 5★ đến 1★
    });

    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <div className="container mx-auto py-8">
                <div className="flex">
                    {/* Left Section */}
                    <section className="w-1/3 flex flex-col items-center">
                        <div className="relative">
                            <img 
                                src={ImgTemp} 
                                alt="Book Cover" 
                                className="w-full h-auto rounded-lg shadow-lg" 
                            />
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-3 py-1 rounded">
                                MIỄN PHÍ
                            </span>
                        </div>
                    </section>

                    {/* Right Section */}
                    <aside className="w-2/3 px-8">
                        <h1 className="text-3xl font-bold mb-4">
                            Tuyển tập những bài thơ hay nhất của thi sĩ Thế Lữ
                        </h1>
                        <ul className="space-y-2 text-gray-300">
                            <li><strong>Tác giả:</strong> Thế Lữ</li>
                            <li><strong>Thể loại:</strong> Thơ – Tản văn</li>
                            <li><strong>Gói cước:</strong> Miễn Phí</li>
                            <li><strong>Nhà xuất bản:</strong> Đang cập nhật</li>
                        </ul>
                        <div className="mt-6 flex items-center space-x-4">
                            <button className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600">
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
                                Thi sĩ Thế Lữ (6/10/1907 - 3/6/1989) có tên thật là Nguyễn Đình Lễ, 
                                là thi sĩ tiêu biểu cho hiện tượng “kép ba”. Ông vừa là chủ thể sáng tác Thơ mới 
                                (48 bài), vừa đóng vai nhà phê bình "đẹp loạn" Thơ mới (khoảng 50 bài), 
                                vừa là đối tượng được người đương thời tôn vinh.
                            </p>
                        </div>
                    </aside>
                </div>

                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex justify-start space-x-4 border-b border-gray-700">
                        <button
                            className={`px-4 py-2 ${
                                activeTab === "comments" ? "text-green-500 border-b-2 border-green-500" : "text-gray-300"
                            }`}
                            onClick={() => setActiveTab("comments")}
                        >
                            Bình luận ({comments.length})
                        </button>
                        <button
                            className={`px-4 py-2 ${
                                activeTab === "reviews" ? "text-green-500 border-b-2 border-green-500" : "text-gray-300"
                            }`}
                            onClick={() => setActiveTab("reviews")}
                        >
                            Đánh giá & nhận xét ({reviews.totalReviews})
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-4">
                        {activeTab === "comments" && <CommentsSection comments={comments} />}
                        {activeTab === "reviews" && <ReviewsSection reviews={reviews} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
