import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import BookList from './components/BookList'
import Footer from './components/Footer'
import Book from './components/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black pb-10'>
        <Header />
        <Banner />
        
        <BookList title={"Sách Đề Cử"}/>
        <BookList title={"Sách Miễn Phí"}/>
        <Book/>
        <Footer />
      </div>
    </>
  )
}

export default App
