import PropTypes from 'prop-types';
import ImgTemp from '../../assets/temp-1.jpeg';

const BookListCustome = ({ title, books }) => {
  return (
    <div className="text-white p-10 mb-10 w-full">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {books.map((book, index) => (
          <div key={index} className="w-[200px] h-[300px] relative group">
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
                src={book.image || ImgTemp}
                alt={book.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-2">
                <p className="uppercase text-md">{book.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

BookListCustome.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default BookListCustome;
