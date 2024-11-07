import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgBook from "../assets/temp-1.jpeg";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
      <div className="w-full h-full bg-black/40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full px-4">
        <div className="md:w-[50%] w-full">
          <div className="flex flex-col space-y-6 items-start p-10">
            <p className="bg-gradient-to-r from-red-600 to-white py-2 px-6 text-black">
              Tiểu thuyết
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[40px] font-bold text-white">
                Nghe nói em thích tôi
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-gray-300 text-justify">
                "Nghe Nói Em Thích Tôi" là một tiểu thuyết ngôn tình lãng mạn của tác giả nổi tiếng Trung Quốc. Cuốn tiểu thuyết này xoay quanh câu chuyện tình yêu đầy ngọt ngào, nhẹ nhàng nhưng không kém phần sâu sắc giữa hai nhân vật chính, mang đến cho người đọc nhiều cung bậc cảm xúc và những suy ngẫm về tình yêu và cuộc sống.
              </p>
            </div>
            <div className="flex items-center space-x-5">
            <button className="py-2 px-3 bg-white text-black border border-white font-bold hover:bg-gray-300 hover:text-black">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-500 text-black font-bold hover:bg-red-600">
                Đọc sách
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <img
              src={ImgBook}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
