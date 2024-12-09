import PropTypes from "prop-types";
import ImgTemp from "../../assets/temp-1.jpeg";

const BookListCustome = ({ title, books }) => {
  return (
    <div className="text-white p-10 mb-10 w-full">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={book.id || index} className="w-[200px] h-[300px] relative group">
              <div
                className="group-hover:scale-105 
                  transition-transform duration-500 
                  ease-in-out w-full h-full cursor-pointer"
              >
                <div
                  className="absolute top-0 left-0
                      w-full h-full bg-black/40"
                ></div>
                <img
                  src={convertGoogleDriveURL(book.coverimage) || ImgTemp}
                  alt={book.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">{book.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Không có sách nào để hiển thị</p>
        )}
      </div>
    </div>
  );
};

// Hàm chuyển đổi URL Google Drive để hiển thị ảnh
const convertGoogleDriveURL = (url) => {
  if (!url) return null;
  if (url.includes("drive.google.com")) {
    // Kiểm tra nếu là định dạng tải xuống
    if (url.includes("export=download")) {
      const match = url.match(/id=([\w-]+)/);
      return match ? `https://drive.google.com/uc?id=${match[1]}` : null;
    }
    // Kiểm tra nếu là định dạng xem
    const match = url.match(/\/d\/([\w-]+)\//);
    return match ? `https://drive.google.com/uc?id=${match[1]}` : null;
  }
  return url;
};

BookListCustome.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      coverimage: PropTypes.string,
    })
  ).isRequired,
};

export default BookListCustome;
