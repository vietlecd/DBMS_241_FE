import PropTypes from "prop-types";
import ImgTemp from "../../assets/temp-1.jpeg";

const BookListCustome = ({ title, books }) => {
  // Hàm chuyển đổi URL Google Drive thành URL thumbnail
  const convertToThumbnailURL = (url) => {
    const fileIdPattern = /(?:\/d\/|id=)([-\w]+)/; // Tìm file ID
    const match = url.match(fileIdPattern);

    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    }

    return url; // Trả về URL gốc nếu không tìm thấy ID
  };

  return (
    <div className="text-white p-10 mb-10 w-full">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="w-1/4">
              <div className="relative">
                <img
                  src={book.coverimage ? convertToThumbnailURL(book.coverimage) : ImgTemp}
                  alt={book.title}
                  className="object-fit w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                  <h3>{book.title}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

BookListCustome.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      coverimage: PropTypes.string,
    })
  ).isRequired,
};

export default BookListCustome;
