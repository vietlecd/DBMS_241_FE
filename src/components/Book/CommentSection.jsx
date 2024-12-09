
import PropTypes from "prop-types";

const CommentsSection = ({ comments }) => {
    return (
        <div>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-gray-800 p-4 rounded-lg mb-4 shadow"
                    >
                        <p className="text-green-400 font-semibold">{comment.user}</p>
                        <p className="text-gray-300">{comment.comment}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">Không có bình luận nào.</p>
            )}
        </div>
    );
};

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CommentsSection;
