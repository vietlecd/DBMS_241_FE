import PropTypes from 'prop-types'
import ImgTemp from '../../assets/temp-1.jpeg'

const BookList = ({ title }) => {
  return (
    <div className="text-white p-10 mb-10 w-full">
      <h2 className='uppercase text-x1 mb-4'>{title}</h2>
      <div className='flex items-center space-x-4'>
        <div className='w-[200px] h-[300px] relative group'>
          <div className='group-hover:scale-105 
                transition-transform duration-500 
                ease-in-out w-full h-full cursor-pointer'>
            <div className='absolute top-0 left-0
                    w-full h-full bg-black/40'></div>
            <img src={ImgTemp} alt='book' className='object-cover 
                    w-full h-full'/>
            <div className='absolute bottom-4 left-2'>
              <p className='uppercase text-md'>Nghe nói em thích tôi</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

BookList.propTypes = {
  title: PropTypes.string,
}



export default BookList
