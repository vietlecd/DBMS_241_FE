import React from "react";
import PropTypes from "prop-types";

const ReviewsSection = ({ reviews }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex items-center mb-4">
                <span className="text-6xl font-bold text-yellow-400">{reviews.averageRating}</span>
                <div className="ml-4">
                    <div className="text-yellow-400 text-xl">★ ★ ★ ★ ★</div>
                    <p className="text-gray-400">{reviews.totalReviews} đánh giá</p>
                </div>
            </div>
            <div className="space-y-2">
                {reviews.ratings.map((count, index) => (
                    <div key={index} className="flex items-center">
                        <span className="w-12">{5 - index}★</span>
                        <div className="flex-1 bg-gray-700 h-3 rounded-lg overflow-hidden">
                            <div
                                className="bg-yellow-400 h-full"
                                style={{ width: `${(count / reviews.totalReviews) * 100}%` }}
                            ></div>
                        </div>
                        <span className="ml-4 text-gray-400">{count}</span>
                    </div>
                ))}
            </div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                Viết đánh giá
            </button>
        </div>
    );
};

ReviewsSection.propTypes = {
    reviews: PropTypes.shape({
        totalReviews: PropTypes.number.isRequired,
        averageRating: PropTypes.number.isRequired,
        ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
};

export default ReviewsSection;
